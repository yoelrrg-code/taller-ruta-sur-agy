import { CalendarCheck } from "lucide-react";
import { GlassReveal } from "@/components/ui/MotionPrimitives";

export function FinalCtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassReveal>
          <div className="rounded-3xl border border-red-400/40 bg-[#DC2626]/90 px-6 py-12 text-center text-white shadow-[0_20px_50px_-15px_rgba(220,38,38,0.45)] backdrop-blur-xl sm:px-12 lg:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Traé tu auto a un taller donde te hablan claro
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-red-50">
              Reservá tu turno único presencial para mantenimiento preventivo, diagnóstico computarizado o revisión pre-compra.
            </p>
            <div className="mt-8">
              <a
                href="#turnos"
                className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-white/90 px-7 py-4 text-base font-bold text-[#DC2626] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_28px_-8px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Agendá tu turno ahora
              </a>
            </div>
          </div>
        </GlassReveal>
      </div>
    </section>
  );
}
