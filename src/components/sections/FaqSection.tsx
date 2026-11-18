import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Dudas comunes antes de traer tu auto"
          description="Si tenés otra consulta puntual sobre tu vehículo, agendá un turno o escribinos."
          centered
        />

        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
