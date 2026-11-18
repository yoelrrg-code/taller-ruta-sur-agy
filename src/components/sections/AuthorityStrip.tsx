import { CheckCircle2 } from "lucide-react";
import { GlassCardMotion } from "@/components/ui/MotionPrimitives";
import { authorityItems } from "@/data/site";

export function AuthorityStrip() {
  return (
    <section
      aria-label="Diferenciales del taller"
      className="glass-section py-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {authorityItems.map((item, idx) => (
          <GlassCardMotion key={item.label} delay={idx * 0.08}>
            <div className="glass-card flex h-full items-start gap-3 rounded-xl p-3.5">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-[#DC2626] dark:text-red-400"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-bold text-[#111827] dark:text-white">
                  {item.label}
                </p>
                <p className="text-xs text-[#4B5563] dark:text-slate-400">
                  {item.detail}
                </p>
              </div>
            </div>
          </GlassCardMotion>
        ))}
      </div>
    </section>
  );
}
