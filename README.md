# glassy-ai-web-boilerplate

Boilerplate base para sitios web construido con **Next.js (App Router + TypeScript)**, **Tailwind CSS**, **Lucide React** y configuración base de **SEO**, preparado para transformar entrevistas de clientes (en texto o audio/video) en especificaciones listas para desarrollar dentro de `AGENTS.md`.

---

## Tecnologías utilizadas

- **Framework:** Next.js (App Router, Turbopack en desarrollo)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (`@tailwindcss/postcss`)
- **Iconografía:** Lucide React (`lucide-react`)
- **SEO:** Metadatos centralizados en `src/lib/seo.ts`, junto con `src/app/robots.ts` y `src/app/sitemap.ts`
- **Automatización con IA (Skill):** `.agents/skills/interview-to-agents/` con scripts en Node.js nativo (sin dependencias npm adicionales) para inspeccionar entrevistas y transcribir audio/video

---

## Instalación

### 1. Clonar e instalar dependencias del proyecto

```bash
git clone https://github.com/yoelrrg-code/glassy-ai-web-boilerplate.git mi-proyecto
cd mi-proyecto
cp .env.example .env.local
npm install
```

### 2. Configuración para transcripción de audio (opcional)

Solo es necesaria si vas a colocar archivos de audio o video en `interview/` (si colocás una transcripción en texto, no hace falta). El script `transcribe-audio.mjs` detecta automáticamente el primer backend disponible en este orden:

1. **`gemini-api` CLI (recomendado):**
   ```bash
   curl -fsSL https://raw.githubusercontent.com/google-gemini/gemini-api-cli/main/scripts/install.sh | bash
   gemini-api configure --api-key "TU_GEMINI_API_KEY"
   ```
2. **Solo API Key en `.env.local` (sin instalar CLI):**
   Agregá la siguiente línea en `.env.local`:
   ```env
   GEMINI_API_KEY=tu_gemini_api_key
   ```
3. **`whisper` local (offline, requiere `ffmpeg`):**
   ```bash
   brew install openai-whisper
   ```

---

## Modo de uso

### Flujo de trabajo para un nuevo proyecto

1. **Cargar la entrevista del cliente:**
   Colocá el archivo dentro de la carpeta `interview/`:
   - **Transcripciones:** `.txt`, `.md`, `.vtt`, `.srt`, `.json`
   - **Audio / Video:** `.mp3`, `.wav`, `.m4a`, `.ogg`, `.flac`, `.aac`, `.webm`, `.mp4`

2. **Generar especificaciones en `AGENTS.md`:**
   Pedile al agente de IA que ejecute la skill **`interview-to-agents`**. El agente va a:
   - Inspeccionar `interview/` con `inspect-interview.mjs`.
   - Transcribir el audio/video (si corresponde) con `transcribe-audio.mjs`, guardando `<nombre>.transcript.md` en `interview/`.
   - Extraer toda la información y completar **`AGENTS.md`** en español LATAM sin borrar ni alterar sus reglas o instrucciones.
   - Marcar cualquier dato de diseño, copy o estructura propuesto por IA con `[SUGERIDO_POR_IA]` y cualquier dato factual faltante (teléfonos, correos, direcciones, precios, testimonios) con `[PENDIENTE_CLIENTE: ...]`.

3. **Revisar `AGENTS.md` y recursos:**
   - Revisá los campos marcados con `[SUGERIDO_POR_IA]` y completá los `[PENDIENTE_CLIENTE: ...]`.
   - Colocá logos e imágenes optimizadas en `public/assets/` según la Sección 5 de `AGENTS.md`.

4. **Desarrollar el sitio:**
   Levantá el servidor local y desarrollá siguiendo `AGENTS.md` como única fuente de verdad:
   ```bash
   npm run dev
   ```

---

## Scripts disponibles

### Scripts del proyecto (`package.json`)

- `npm run dev` — Inicia el servidor de desarrollo con Turbopack
- `npm run build` — Genera el build de producción
- `npm run start` — Inicia el servidor en modo producción
- `npm run lint` — Ejecuta ESLint
- `npm run typecheck` — Verifica tipos con TypeScript (`tsc --noEmit`)

### Scripts de la skill (`interview-to-agents`)

- Inspeccionar archivos disponibles en `interview/`:
  ```bash
  node .agents/skills/interview-to-agents/scripts/inspect-interview.mjs
  ```
- Transcribir manualmente un audio/video a Markdown:
  ```bash
  node .agents/skills/interview-to-agents/scripts/transcribe-audio.mjs "interview/entrevista.mp3"
  ```

---

## Estructura del proyecto

```text
├── .agents/skills/interview-to-agents/   # Skill, plantilla de respaldo y scripts
├── interview/                            # Carpeta de entrada para transcripciones/audios
├── public/assets/                        # Recursos multimedia del proyecto
├── src/
│   ├── app/                              # Rutas App Router, layout, robots.ts y sitemap.ts
│   └── lib/seo.ts                        # Configuración base de metadatos y OpenGraph
├── AGENTS.md                             # Fuente de verdad de especificaciones y reglas
└── README.md
```
