import { Layers, Search, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "Next.js App Router with TypeScript and Tailwind CSS.",
  },
  {
    icon: Sparkles,
    title: "Lucide Icons",
    description: "Lightweight, tree-shakable SVG icons ready to use.",
  },
  {
    icon: Search,
    title: "Base SEO",
    description: "Centralized metadata, OpenGraph, robots.txt, and sitemap.xml.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Ready to build
        </span>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Glassy AI Web Boilerplate
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          A minimal, production-ready Next.js foundation with Tailwind CSS,
          Lucide icons, and preconfigured SEO metadata.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className="h-5 w-5 text-zinc-200" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-medium text-white">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
