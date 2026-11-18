import { AboutSection } from "@/components/sections/AboutSection";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Navbar } from "@/components/sections/Navbar";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ValuePropsSection } from "@/components/sections/ValuePropsSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AuthorityStrip />
        <ValuePropsSection />
        <ServicesSection />
        <ProductsSection />
        <BookingSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
