import { Star } from "lucide-react";
import { GlassCardMotion } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialPlaceholders } from "@/data/faq";

export function TestimonialsSection() {
  return (
    <section id="resenas" className="glass-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reseñas verificadas"
          title="4.9 estrellas en Google Maps (+40 reseñas)"
          description="La confianza se construye cumpliendo horarios y mostrando cada arreglo. Acá vamos a destacar las 6 mejores reseñas reales elegidas por el taller."
          centered
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialPlaceholders.map((review, idx) => (
            <GlassCardMotion key={review.id} delay={idx * 0.06} className="h-full">
              <article className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 hover:bg-white/75 dark:hover:bg-slate-900/75">
              <div>
                <div
                  className="flex items-center gap-1 text-amber-500"
                  aria-label={`${review.rating} de 5 estrellas`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#4B5563] dark:text-slate-300">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold text-[#111827] dark:border-white/10 dark:text-slate-100">
                {review.author}
              </p>
            </article>
            </GlassCardMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
