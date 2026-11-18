import { ArrowRight, CalendarCheck, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { GlassReveal } from "@/components/ui/MotionPrimitives";
import { heroContent } from "@/data/site";

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <GlassReveal immediate direction="right" className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10">
            <GlassReveal immediate delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/80 px-3.5 py-1.5 text-xs font-semibold text-[#DC2626] backdrop-blur-sm dark:border-red-500/30 dark:bg-red-500/15 dark:text-red-300">
                <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                {heroContent.badge}
              </span>
            </GlassReveal>

            <GlassReveal immediate delay={0.16}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#111827] dark:text-white sm:text-5xl lg:text-6xl">
                {heroContent.title}
              </h1>
            </GlassReveal>

            <GlassReveal immediate delay={0.24}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#374151] dark:text-slate-300 sm:text-lg">
                {heroContent.subtitle}
              </p>
            </GlassReveal>

            <GlassReveal immediate delay={0.32}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={heroContent.primaryCta.href}
                  className="glass-btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="glass-btn-secondary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#374151]"
                >
                  {heroContent.secondaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </GlassReveal>

            <GlassReveal immediate delay={0.4}>
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[#374151] dark:text-slate-300">
                <ShieldCheck
                  className="h-4 w-4 text-[#DC2626] dark:text-red-400"
                  aria-hidden="true"
                />
                {heroContent.socialProof}
              </p>
            </GlassReveal>
          </div>
        </GlassReveal>

        <GlassReveal
          immediate
          direction="left"
          delay={0.2}
          className="lg:col-span-5"
        >
          <div className="glass-card overflow-hidden rounded-3xl p-3 transition-transform duration-500 ease-out hover:-translate-y-1">
            <Image
              src="/assets/hero-main.jpg"
              alt="Taller Mecánico Ruta Sur con vehículo en elevador y diagnóstico computarizado"
              width={960}
              height={540}
              priority
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />

            <div className="mt-3 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-xl border border-white/75 bg-white/70 p-3.5 backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70">
                <p className="text-xs font-medium text-[#4B5563] dark:text-slate-400">
                  Experiencia
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#111827] dark:text-white">
                  +15 años multimarca
                </p>
              </div>
              <div className="rounded-xl border border-white/75 bg-white/70 p-3.5 backdrop-blur-md dark:border-white/10 dark:bg-slate-800/70">
                <p className="text-xs font-medium text-[#4B5563] dark:text-slate-400">
                  Modalidad
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#111827] dark:text-white">
                  Turnos únicos puntuales
                </p>
              </div>
            </div>
          </div>
        </GlassReveal>
      </div>
    </section>
  );
}
