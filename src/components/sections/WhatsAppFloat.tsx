"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { contactInfo } from "@/data/site";

export function WhatsAppFloat() {
  const href = contactInfo.whatsappUrl ?? "#turnos";
  const isExternal = Boolean(contactInfo.whatsappUrl);

  return (
    <motion.a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label="Consultar por WhatsApp o agendar turno"
      title="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#DC2626]/90 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 backdrop-blur-md transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Consultanos</span>
    </motion.a>
  );
}
