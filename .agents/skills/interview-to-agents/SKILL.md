---
name: interview-to-agents
description: >-
  Procesa una transcripción o grabación de audio/video de entrevista ubicada en
  el directorio `interview/`, transcribe el audio si es necesario, extrae los
  requerimientos del sitio web (marcando cualquier contenido inferido o
  autogenerado como `SUGERIDO_POR_IA`) y completa `AGENTS.md` en la raíz del
  repositorio en español LATAM. Usar esta skill al iniciar un nuevo proyecto
  desde este boilerplate con una entrevista del cliente o cuando se pida
  generar `AGENTS.md` a partir de una entrevista.
---

# Entrevista a `AGENTS.md`

Transforma una entrevista cruda del cliente (transcripción o grabación de
audio/video) en `interview/` en un `AGENTS.md` completo en la raíz del proyecto,
preservando el 100% de las instrucciones y reglas existentes en `AGENTS.md`.

## Flujo de trabajo

1. **Inspeccionar `interview/`**
   Ejecutar el script de inspección desde la raíz del repositorio:
   ```bash
   node .agents/skills/interview-to-agents/scripts/inspect-interview.mjs
   ```
   - Si `status` es `"empty"` o `"missing_directory"`, pedirle al usuario que
     coloque la transcripción o el archivo de audio en `interview/` y detenerse.

2. **Transcribir audio (solo si es necesario)**
   - Si `transcripts` ya contiene el texto de la entrevista (`.txt`, `.md`,
     `.vtt`, `.srt`, `.json`), omitir la transcripción y leer el archivo
     directamente.
   - Si solo hay archivos en `audioFiles` (`.mp3`, `.wav`, `.m4a`, `.ogg`,
     `.flac`, `.aac`, `.webm`, `.mp4`), ejecutar:
     ```bash
     node .agents/skills/interview-to-agents/scripts/transcribe-audio.mjs "<ruta-del-audio>"
     ```
   - El script intenta primero con `gemini-api` CLI, luego con `GEMINI_API_KEY`
     (en entorno o `.env.local`/`.env`), y por último con `whisper` local.
     Guarda `<nombre>.transcript.md` dentro de `interview/`.
   - Si falla por falta de credenciales o herramientas, informar claramente qué
     falta (`GEMINI_API_KEY` o `gemini-api` / `whisper`) y detenerse.

3. **Cargar el `AGENTS.md` raíz (PRESERVACIÓN ESTRICTA)**
   - Leer completo `AGENTS.md` en la raíz del repositorio. (Si no existe o está
     vacío, copiar [agents-template.md](./references/agents-template.md) como
     base.)
   - **REGLA CRÍTICA:** **NO** eliminar, resumir ni alterar ninguna instrucción,
     regla, encabezado o restricción técnica existente en `AGENTS.md` (como
     `INSTRUCCIÓN PARA EL AGENTE`, la Sección 4 `Reglas y Restricciones
     Estrictas para el Agente` o la Sección 7 `Reglas de Interacción,
     Rendimiento y Calidad`). Solo completar los placeholders entre corchetes
     (`[Completar]`, `[Ej: ...]`, `#HEX`, `[Descripción...]`, `[Texto...]`, etc.).
   - Revisar `/public/assets/` si existe, para reflejar los archivos reales en la
     Sección 5.

4. **Analizar la transcripción y completar placeholders**
   - Leer la transcripción completa.
   - Completar cada campo de `AGENTS.md` con la información explícita de la
     entrevista.
   - **Idioma obligatorio (LATAM):** Redactar todo el contenido de `AGENTS.md`,
     los textos sugeridos y el copy del sitio en **español LATAM** (español
     neutro latinoamericano, o adaptado a la variante regional del país del
     cliente si surge de la entrevista), salvo que el cliente pida
     explícitamente otro idioma. Mantener el código fuente en inglés estricto
     según la Sección 3 de `AGENTS.md`.
   - **Reglas para información faltante:**
     - Para cualquier dato **no factual, de diseño, copy o estructura** que no
       esté explícito en la entrevista (paleta hex, tipografía, border radius,
       textos de Hero, FAQs, propuesta de valor, etc.), generar una propuesta
       coherente con el negocio y marcarla claramente con `[SUGERIDO_POR_IA]`.
     - Para **datos factuales del cliente** cubiertos por la Regla 1 de la
       Sección 4 (`CERO INVENCIÓN DE DATOS`: teléfonos, correos, direcciones
       físicas, precios, estadísticas, testimonios reales), **nunca inventarlos**:
       colocar exactamente `[PENDIENTE_CLIENTE: descripción del dato]`.

5. **Guardar y validar `AGENTS.md` en la raíz**
   - Guardar el resultado final en `AGENTS.md` en la raíz del repositorio.
   - Verificar:
     1. Que las 8 secciones (`## 1.` a `## 8.`) y todas las instrucciones/reglas
        originales sigan intactas.
     2. Que no queden placeholders sin resolver como `[Completar]`.
     3. Que todo contenido propuesto por IA tenga `[SUGERIDO_POR_IA]` y todo
        dato factual faltante tenga `[PENDIENTE_CLIENTE: ...]`.
   - Informar al usuario qué archivo(s) se procesaron, si se ejecutó
     transcripción de audio y qué campos quedaron marcados como
     `SUGERIDO_POR_IA` o `PENDIENTE_CLIENTE` para su revisión.
