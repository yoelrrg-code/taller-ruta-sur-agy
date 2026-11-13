#!/usr/bin/env node

import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const MIME_BY_EXT = {
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".m4a": "audio/mp4",
  ".ogg": "audio/ogg",
  ".flac": "audio/flac",
  ".aac": "audio/aac",
  ".webm": "audio/webm",
  ".mp4": "video/mp4",
};

const INLINE_CAP_BYTES = 12 * 1024 * 1024;
const GEMINI_MODEL = process.env.GEMINI_TRANSCRIBE_MODEL || "gemini-2.5-flash";

function loadDotEnvKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  for (const envFile of [".env.local", ".env"]) {
    const fullPath = path.resolve(process.cwd(), envFile);
    if (!fs.existsSync(fullPath)) continue;
    const lines = fs.readFileSync(fullPath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/);
      if (match) {
        return match[1].replace(/^["']|["']$/g, "");
      }
    }
  }
  return null;
}

function commandExists(cmd) {
  const res = spawnSync("which", [cmd], { stdio: "ignore" });
  return res.status === 0;
}

function defaultOutPath(inputPath) {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  return path.join(dir, `${base}.transcript.md`);
}

function transcribeWithGeminiCli(inputPath, outPath) {
  const args = ["transcribe", "-i", inputPath, "--format", "md", "--out", outPath];
  execFileSync("gemini-api", args, { stdio: "inherit" });
  return outPath;
}

async function uploadToGeminiFilesApi(apiKey, filePath, mimeType) {
  const fileBuffer = fs.readFileSync(filePath);
  const startRes = await fetch(
    `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: {
        "X-Goog-Upload-Protocol": "resumable",
        "X-Goog-Upload-Command": "start",
        "X-Goog-Upload-Header-Content-Length": String(fileBuffer.length),
        "X-Goog-Upload-Header-Content-Type": mimeType,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: { display_name: path.basename(filePath) },
      }),
    }
  );

  if (!startRes.ok) {
    throw new Error(`Gemini Files upload init failed: ${startRes.status} ${await startRes.text()}`);
  }

  const uploadUrl = startRes.headers.get("x-goog-upload-url");
  if (!uploadUrl) {
    throw new Error("Missing x-goog-upload-url header from Gemini Files API.");
  }

  const uploadRes = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "Content-Length": String(fileBuffer.length),
      "X-Goog-Upload-Offset": "0",
      "X-Goog-Upload-Command": "upload, finalize",
    },
    body: fileBuffer,
  });

  if (!uploadRes.ok) {
    throw new Error(`Gemini Files upload failed: ${uploadRes.status} ${await uploadRes.text()}`);
  }

  const uploaded = await uploadRes.json();
  return uploaded.file?.uri;
}

async function transcribeWithGeminiApi(apiKey, inputPath, outPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const mimeType = MIME_BY_EXT[ext] || "audio/mpeg";
  const stats = fs.statSync(inputPath);

  const prompt = [
    "Transcribe this interview recording verbatim in its original language.",
    "Label speakers clearly (e.g., Interviewer, Client) when distinguishable.",
    "Do not summarize or omit details. Output clean Markdown.",
  ].join(" ");

  let mediaPart;
  if (stats.size <= INLINE_CAP_BYTES) {
    const base64 = fs.readFileSync(inputPath).toString("base64");
    mediaPart = { inline_data: { mime_type: mimeType, data: base64 } };
  } else {
    const fileUri = await uploadToGeminiFilesApi(apiKey, inputPath, mimeType);
    mediaPart = { file_data: { mime_type: mimeType, file_uri: fileUri } };
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }, mediaPart] }],
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini generateContent failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  const text =
    data.candidates?.[0]?.content?.parts
      ?.map((p) => p.text || "")
      .join("")
      .trim() || "";

  if (!text) {
    throw new Error("Gemini API returned an empty transcription.");
  }

  fs.writeFileSync(outPath, `${text}\n`, "utf8");
  return outPath;
}

function transcribeWithWhisper(inputPath, outPath) {
  const outDir = path.dirname(outPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  execFileSync(
    "whisper",
    [inputPath, "--output_format", "txt", "--output_dir", outDir],
    { stdio: "inherit" }
  );
  const whisperTxt = path.join(outDir, `${base}.txt`);
  if (fs.existsSync(whisperTxt) && whisperTxt !== outPath) {
    fs.renameSync(whisperTxt, outPath);
  }
  return outPath;
}

async function main() {
  const inputArg = process.argv[2];
  if (!inputArg) {
    console.error("Usage: node transcribe-audio.mjs <audio-file> [output-md]");
    process.exit(2);
  }

  const inputPath = path.resolve(process.cwd(), inputArg);
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(2);
  }

  const outPath = process.argv[3]
    ? path.resolve(process.cwd(), process.argv[3])
    : defaultOutPath(inputPath);

  if (commandExists("gemini-api")) {
    transcribeWithGeminiCli(inputPath, outPath);
    console.log(path.relative(process.cwd(), outPath));
    return;
  }

  const apiKey = loadDotEnvKey();
  if (apiKey) {
    await transcribeWithGeminiApi(apiKey, inputPath, outPath);
    console.log(path.relative(process.cwd(), outPath));
    return;
  }

  if (commandExists("whisper")) {
    transcribeWithWhisper(inputPath, outPath);
    console.log(path.relative(process.cwd(), outPath));
    return;
  }

  console.error(
    "No transcription backend available. Install `gemini-api` CLI, set `GEMINI_API_KEY` in env/.env.local, or install `whisper`."
  );
  process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
