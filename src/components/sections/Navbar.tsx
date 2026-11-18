"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationLinks } from "@/data/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/55 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <BrandLogo />

        <ul className="hidden items-center gap-1 rounded-full border border-white/75 bg-white/45 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-slate-900/5 backdrop-blur-md dark:border-white/15 dark:bg-slate-900/55 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:ring-white/5 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block rounded-full px-3.5 py-1.5 text-sm font-medium text-[#374151] transition-all duration-200 hover:bg-white/80 hover:text-[#DC2626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-red-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#turnos"
            className="glass-btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendá tu turno
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="glass-btn-secondary inline-flex h-10 w-10 items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/60 bg-white/75 px-4 pb-6 pt-4 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/85 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl border border-transparent px-3.5 py-2.5 text-base font-medium text-[#374151] transition-all hover:border-white/70 hover:bg-white/70 hover:text-[#DC2626] dark:text-slate-200 dark:hover:border-white/10 dark:hover:bg-slate-800/70 dark:hover:text-red-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#turnos"
              onClick={() => setMobileMenuOpen(false)}
              className="glass-btn-primary mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Agendá tu turno
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
