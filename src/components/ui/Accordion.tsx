"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { FaqItem } from "@/data/faq";

interface AccordionProps {
  items: FaqItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="glass-card overflow-hidden rounded-2xl hover:bg-white/75 dark:hover:bg-slate-900/75"
          >
            <h3>
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left text-base font-semibold text-[#111827] transition-colors hover:text-[#DC2626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] dark:text-white dark:hover:text-red-400"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#4B5563] transition-transform duration-300 dark:text-slate-400 ${
                    isOpen ? "rotate-180 text-[#DC2626] dark:text-red-400" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/60 bg-white/30 px-6 pb-5 pt-3 text-base leading-relaxed text-[#4B5563] dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-300">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
