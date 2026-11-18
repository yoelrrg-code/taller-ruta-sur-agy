import { Camera, Mail, MapPin, Phone, Video } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { GlassReveal } from "@/components/ui/MotionPrimitives";
import { servicesList } from "@/data/services";
import { contactInfo, navigationLinks } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-[#111827]/90 text-slate-300 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <GlassReveal delay={0}>
          <BrandLogo variant="dark" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Mecánica automotriz multimarca en Uruguay. Más de 15 años de experiencia, turnos puntuales y repuesto a la vista.
          </p>
        </GlassReveal>

        <GlassReveal delay={0.08}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </GlassReveal>

        <GlassReveal delay={0.16}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {servicesList.map((service) => (
              <li key={service.id}>
                <a
                  href="#servicios"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </GlassReveal>

        <GlassReveal delay={0.24}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contacto y redes
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" aria-hidden="true" />
              <span>{contactInfo.location}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" aria-hidden="true" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" aria-hidden="true" />
              <span>{contactInfo.email}</span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Taller Mecánico Ruta Sur"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:border-red-400/50 hover:bg-white/15"
            >
              <Camera className="h-4 w-4" aria-hidden="true" />
              {contactInfo.instagramHandle}
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 backdrop-blur-md">
              <Video className="h-4 w-4" aria-hidden="true" />
              TikTok: {contactInfo.tiktokHandle}
            </span>
          </div>
        </GlassReveal>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} Taller Mecánico Ruta Sur. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#turnos" className="hover:text-white">
              Política de Privacidad
            </a>
            <a href="#turnos" className="hover:text-white">
              Términos del Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
