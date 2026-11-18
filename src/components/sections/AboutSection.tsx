import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { GlassReveal } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/site";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <GlassReveal direction="right" className="lg:col-span-5">
          <div className="glass-card overflow-hidden rounded-3xl p-3 transition-transform duration-500 ease-out hover:-translate-y-1">
            <Image
              src="/assets/about.jpg"
              alt="Martín Rodríguez y el equipo de tres mecánicos de Taller Mecánico Ruta Sur"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </GlassReveal>

        <GlassReveal direction="left" delay={0.12} className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
          />
          <p className="mt-5 text-base font-medium leading-relaxed text-[#111827] dark:text-slate-100">
            {aboutContent.lead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563] dark:text-slate-300">
            {aboutContent.body}
          </p>

          <ul className="mt-6 space-y-3">
            {aboutContent.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-medium text-[#374151] dark:text-slate-200"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#DC2626] dark:text-red-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </GlassReveal>
      </div>
    </section>
  );
}
