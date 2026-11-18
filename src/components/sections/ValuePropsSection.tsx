import { Clock, Cpu, Eye } from "lucide-react";
import { GlassCardMotion } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueProps, type ValuePropItem } from "@/data/site";

const iconMap: Record<ValuePropItem["iconName"], typeof Eye> = {
  Eye,
  Clock,
  Cpu,
};

export function ValuePropsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Un taller pensado para que entiendas cada paso"
          description="Trabajamos para quienes usan el auto todos los días y buscan un servicio honesto, puntual y sin sorpresas."
          centered
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((item, idx) => {
            const Icon = iconMap[item.iconName];
            return (
              <GlassCardMotion key={item.id} delay={idx * 0.08} className="h-full">
                <article className="glass-card h-full rounded-2xl p-7 hover:bg-white/75 dark:hover:bg-slate-900/75">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-[#DC2626] dark:bg-red-500/15 dark:text-red-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#111827] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#4B5563] dark:text-slate-300">
                    {item.description}
                  </p>
                </article>
              </GlassCardMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
