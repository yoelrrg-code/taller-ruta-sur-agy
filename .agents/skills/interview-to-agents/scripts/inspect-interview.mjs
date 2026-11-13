#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const TRANSCRIPT_EXTS = new Set([".txt", ".md", ".vtt", ".srt", ".json"]);
const AUDIO_EXTS = new Set([
  ".mp3",
  ".wav",
  ".m4a",
  ".ogg",
  ".flac",
  ".aac",
  ".webm",
  ".mp4",
]);
const IGNORED_FILES = new Set(["readme.md", ".gitkeep", ".ds_store"]);

const rootDir = process.cwd();
const interviewDir = path.resolve(rootDir, process.argv[2] || "interview");

if (!fs.existsSync(interviewDir)) {
  console.log(
    JSON.stringify(
      {
        status: "missing_directory",
        interviewDir,
        transcripts: [],
        audioFiles: [],
      },
      null,
      2
    )
  );
  process.exit(0);
}

const entries = fs.readdirSync(interviewDir, { withFileTypes: true });
const transcripts = [];
const audioFiles = [];
const unsupported = [];

for (const entry of entries) {
  if (!entry.isFile()) continue;
  const lowerName = entry.name.toLowerCase();
  if (IGNORED_FILES.has(lowerName)) continue;

  const fullPath = path.join(interviewDir, entry.name);
  const ext = path.extname(lowerName);
  const stats = fs.statSync(fullPath);
  const item = {
    name: entry.name,
    path: path.relative(rootDir, fullPath),
    ext,
    sizeBytes: stats.size,
  };

  if (TRANSCRIPT_EXTS.has(ext)) {
    transcripts.push(item);
  } else if (AUDIO_EXTS.has(ext)) {
    audioFiles.push(item);
  } else {
    unsupported.push(item);
  }
}

console.log(
  JSON.stringify(
    {
      status:
        transcripts.length > 0 || audioFiles.length > 0 ? "ready" : "empty",
      interviewDir: path.relative(rootDir, interviewDir) || ".",
      transcripts,
      audioFiles,
      unsupported,
    },
    null,
    2
  )
);
