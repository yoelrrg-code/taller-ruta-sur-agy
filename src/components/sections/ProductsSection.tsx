import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { GlassCardMotion } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catalogMetadata, featuredProducts } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Insumos básicos"
            title="Productos esenciales para tu auto"
            description={`${catalogMetadata.initialSizeNote} Comprá directo o retirá en el taller cuando traés el vehículo.`}
          />
          <p className="rounded-xl border border-white/80 bg-white/65 px-4 py-2.5 text-xs font-medium text-[#374151] shadow-sm ring-1 ring-slate-900/5 backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:ring-white/5">
            {catalogMetadata.pendingNote}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product, idx) => (
            <GlassCardMotion key={product.id} delay={idx * 0.08} className="h-full">
              <article className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 hover:bg-white/75 dark:hover:bg-slate-900/75">
              <div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-[#F8FAFC] dark:border-white/10 dark:bg-slate-800">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>

                <span className="mt-5 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#374151] dark:bg-slate-800 dark:text-slate-300">
                  {product.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#111827] dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563] dark:text-slate-300">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#111827] dark:text-white">
                    {product.priceLabel}
                  </span>
                  <span className="text-xs text-[#4B5563] dark:text-slate-400">
                    {product.deliveryMode}
                  </span>
                </div>
                <a
                  href="#turnos"
                  className="glass-btn-secondary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold hover:text-[#DC2626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] dark:hover:text-red-400"
                >
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  Consultar disponibilidad
                </a>
              </div>
            </article>
            </GlassCardMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
