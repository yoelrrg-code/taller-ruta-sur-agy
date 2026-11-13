---
name: interview-to-agents
description: >-
  Processes an interview transcript or audio/video recording placed in the
  `interview/` directory, transcribes audio if needed, extracts website
  requirements (marking any inferred or AI-generated content as
  `SUGERIDO_POR_IA`), and populates `AGENTS.md` at the repository root.
  Use this skill when starting a new project from this boilerplate with a
  client interview file or when asked to generate `AGENTS.md` from an interview.
---

# Interview to `AGENTS.md`

Transforms a raw client interview (transcript or audio/video recording) in
`interview/` into a completed `AGENTS.md` at the project root, preserving all
existing instructions and rules in `AGENTS.md`.

## Workflow

1. **Inspect `interview/`**
   Run the inspection script from the repository root:
   ```bash
   node .agents/skills/interview-to-agents/scripts/inspect-interview.mjs
   ```
   - If `status` is `"empty"` or `"missing_directory"`, ask the user to place
     their transcript or audio file in `interview/` and stop.

2. **Transcribe Audio (only if needed)**
   - If `transcripts` already contains the interview text (e.g., `.txt`, `.md`,
     `.vtt`, `.srt`, `.json`), skip transcription and read the transcript file
     directly.
   - If only `audioFiles` are present (`.mp3`, `.wav`, `.m4a`, `.ogg`, `.flac`,
     `.aac`, `.webm`, `.mp4`), run:
     ```bash
     node .agents/skills/interview-to-agents/scripts/transcribe-audio.mjs "<audio-file-path>"
     ```
   - The script tries `gemini-api` CLI first, then `GEMINI_API_KEY` (from
     environment or `.env.local`/`.env`), then local `whisper`. It writes
     `<name>.transcript.md` inside `interview/`.
   - If transcription fails due to missing credentials/tools, inform the user
     clearly what is missing (`GEMINI_API_KEY` or `gemini-api` / `whisper`) and
     stop.

3. **Load the Root `AGENTS.md` Template (STRICT PRESERVATION)**
   - Read `AGENTS.md` at the repository root in full. (If `AGENTS.md` is missing
     or empty, copy from
     [agents-template.md](./references/agents-template.md) as the base.)
   - **CRITICAL RULE**: Do **NOT** delete, summarize, or alter any existing
     instructions, rules, headings, or technical constraints in `AGENTS.md`
     (such as `INSTRUCCIÓN PARA EL AGENTE`, Section 4 `Reglas y Restricciones
     Estrictas para el Agente`, or Section 7 `Reglas de Interacción, Rendimiento
     y Calidad`). Only fill in the bracketed placeholders (`[Completar]`,
     `[Ej: ...]`, `#HEX`, `[Descripción...]`, `[Texto...]`, etc.).
   - Also check `/public/assets/` if it exists so Section 5 reflects actual
     files present in the repository.

4. **Analyze the Transcript & Fill Every Placeholder**
   - Read the transcript in full.
   - Populate every field in `AGENTS.md` with the information explicitly stated
     in the interview.
   - **Missing information rules**:
     - For any **non-factual, design, copy, or structural** field not explicitly
       stated in the interview (e.g., palette hex codes, typography, border
       radius, hero copy, FAQs, value-prop bullets), generate a coherent,
       project-specific proposal and tag it clearly with `[SUGERIDO_POR_IA]`.
     - For **factual client data** restricted by Section 4 Rule 1 of `AGENTS.md`
       (phone numbers, emails, physical addresses, prices, statistics, real
       testimonials), **never invent them** — use `[PENDIENTE_CLIENTE: descripción del dato]`.
   - Match the language of `AGENTS.md` (Spanish by default unless the project
     explicitly targets another language).

5. **Write & Validate Root `AGENTS.md`**
   - Save the completed content to `AGENTS.md` at the repository root.
   - Verify:
     1. All 8 numbered sections (`## 1.` through `## 8.`) and all original
        instructions/rules are still present verbatim.
     2. No unfilled `[Completar]` placeholders remain.
     3. Every AI-proposed value is tagged with `SUGERIDO_POR_IA`, and any
        missing factual contact/pricing/testimonial data uses
        `[PENDIENTE_CLIENTE: ...]`.
   - Report to the user which input file(s) were processed, whether audio
     transcription ran, and which fields were marked `SUGERIDO_POR_IA` or
     `PENDIENTE_CLIENTE` for their review.
