"use client";

import { CalendarCheck, CheckCircle2, Info } from "lucide-react";
import { useState } from "react";
import { GlassReveal } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookableServices } from "@/data/services";

export function BookingSection() {
  const [selectedService, setSelectedService] = useState<string>(
    bookableServices[0].id
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("09:00");
  const [vehicleModel, setVehicleModel] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentService =
    bookableServices.find((item) => item.id === selectedService) ??
    bookableServices[0];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="turnos" className="glass-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <GlassReveal direction="right" className="lg:col-span-5">
            <SectionHeading
              eyebrow="Turnos presenciales"
              title="Agendá tu turno único sin vueltas"
              description="Elegís el servicio, el día y la hora. Traés tu auto al taller, realizamos el trabajo en el día o en un par de horas y te avisamos apenas esté pronto."
            />

            <div className="glass-card mt-8 space-y-4 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Info
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#DC2626] dark:text-red-400"
                  aria-hidden="true"
                />
                <div className="text-sm leading-relaxed text-[#4B5563] dark:text-slate-300">
                  <p className="font-semibold text-[#111827] dark:text-white">
                    Reserva rápida y pago seguro
                  </p>
                  <p className="mt-1">
                    Los servicios de Diagnóstico computarizado y Revisión pre-compra cuentan con tarifa fija y podés abonarlos online con Mercado Pago al confirmar tu turno.
                  </p>
                </div>
              </div>
            </div>
          </GlassReveal>

          <GlassReveal direction="left" delay={0.14} className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10 text-[#DC2626] dark:bg-red-500/15 dark:text-red-400">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-[#111827] dark:text-white">
                    Solicitud de turno preparada
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#4B5563] dark:text-slate-300">
                    {customerName ? `${customerName}, ` : ""}seleccionaste{" "}
                    <strong className="text-[#111827] dark:text-white">
                      {currentService.label}
                    </strong>
                    {preferredDate ? ` para el ${preferredDate}` : ""} a las{" "}
                    <strong className="text-[#111827] dark:text-white">
                      {preferredTime}
                    </strong>
                    {vehicleModel ? ` (${vehicleModel})` : ""}.
                  </p>
                  <p className="mt-3 text-xs text-[#4B5563] dark:text-slate-400">
                    Modalidad: {currentService.paymentType}. Una vez conectada la agenda y pasarela del taller, este paso confirmará el turno automáticamente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="glass-btn-secondary mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold"
                  >
                    Modificar datos del turno
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-sm font-semibold text-[#111827] dark:text-white"
                    >
                      Servicio
                    </label>
                    <select
                      id="booking-service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#DC2626] focus:outline-none dark:border-white/15 dark:bg-slate-800/80 dark:text-white"
                    >
                      {bookableServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.label} — {service.paymentType}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-sm font-semibold text-[#111827] dark:text-white"
                      >
                        Día preferido
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#DC2626] focus:outline-none dark:border-white/15 dark:bg-slate-800/80 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block text-sm font-semibold text-[#111827] dark:text-white"
                      >
                        Horario
                      </label>
                      <select
                        id="booking-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#DC2626] focus:outline-none dark:border-white/15 dark:bg-slate-800/80 dark:text-white"
                      >
                        <option value="08:30">08:30 hs</option>
                        <option value="10:00">10:00 hs</option>
                        <option value="11:30">11:30 hs</option>
                        <option value="14:00">14:00 hs</option>
                        <option value="15:30">15:30 hs</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-sm font-semibold text-[#111827] dark:text-white"
                      >
                        Tu nombre
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        placeholder="Ej: Laura Méndez"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#DC2626] focus:outline-none dark:border-white/15 dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-vehicle"
                        className="block text-sm font-semibold text-[#111827] dark:text-white"
                      >
                        Marca, modelo y año del auto
                      </label>
                      <input
                        id="booking-vehicle"
                        type="text"
                        required
                        placeholder="Ej: Volkswagen Gol 2019"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#DC2626] focus:outline-none dark:border-white/15 dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="glass-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
                  >
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    Reservar turno presencial
                  </button>
                </form>
              )}
            </div>
          </GlassReveal>
        </div>
      </div>
    </section>
  );
}
