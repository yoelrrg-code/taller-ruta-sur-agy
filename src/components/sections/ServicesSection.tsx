import {
  ArrowRight,
  Check,
  ClipboardCheck,
  CreditCard,
  Disc,
  MapPin,
  ScanLine,
  Wrench,
} from "lucide-react";
import { GlassCardMotion } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesList, type ServiceItem } from "@/data/services";

const serviceIconMap: Record<ServiceItem["iconName"], typeof Wrench> = {
  Wrench,
  Disc,
  ScanLine,
  ClipboardCheck,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="glass-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios del taller"
          title="Mecánica integral, diagnóstico y revisión pre-compra"
          description="Elegí el servicio que necesitás. Trabajamos con turnos únicos presenciales para que tengas tu vehículo listo en el día o en un par de horas."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicesList.map((service, idx) => {
            const Icon = serviceIconMap[service.iconName];
            return (
              <GlassCardMotion key={service.id} delay={idx * 0.08} className="h-full">
                <article className="glass-card flex h-full flex-col justify-between rounded-2xl p-7 hover:bg-white/75 dark:hover:bg-slate-900/75">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-[#DC2626] dark:bg-red-500/15 dark:text-red-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#374151] dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {service.modality}
                      </span>
                      {service.onlinePayment && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-[#DC2626] dark:border-red-500/30 dark:bg-red-500/15 dark:text-red-300">
                          <CreditCard
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          Pago online
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#111827] dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#4B5563] dark:text-slate-300">
                    {service.description}
                  </p>

                  {service.subServices && (
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {service.subServices.map((sub) => (
                        <div
                          key={sub.id}
                          className="rounded-xl border border-white/75 bg-white/45 p-4 backdrop-blur-md dark:border-white/10 dark:bg-slate-800/45"
                        >
                          <p className="text-sm font-bold text-[#111827] dark:text-white">
                            {sub.name}
                          </p>
                          <p className="mt-1 text-xs text-[#4B5563] dark:text-slate-400">
                            {sub.summary}
                          </p>
                          <ul className="mt-3 space-y-1.5">
                            {sub.items.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-xs text-[#374151] dark:text-slate-300"
                              >
                                <Check
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DC2626] dark:text-red-400"
                                  aria-hidden="true"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-white/10">
                  <span className="text-sm font-semibold text-[#374151] dark:text-slate-200">
                    {service.priceLabel}
                  </span>
                  <a
                    href={service.ctaHref}
                    className="glass-btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
              </GlassCardMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
