import { GlassReveal } from "@/components/ui/MotionPrimitives";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <GlassReveal
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="inline-block rounded-full bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#DC2626] dark:bg-red-500/15 dark:text-red-400">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] dark:text-white lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-slate-300">
          {description}
        </p>
      )}
    </GlassReveal>
  );
}
