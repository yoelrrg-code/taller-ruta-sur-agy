# glassy-ai-web-boilerplate

Clean base repository built with Next.js (App Router + TypeScript), Tailwind CSS, Lucide Icons, and base SEO configuration.

## Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (`@tailwindcss/postcss`)
- **Lucide React** (`lucide-react`)
- **SEO**: centralized metadata in `src/lib/seo.ts`, plus `src/app/robots.ts` and `src/app/sitemap.ts`

## Getting Started

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run typecheck` — Run TypeScript type check
