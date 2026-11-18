"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 bg-white/70 text-[#374151] shadow-sm ring-1 ring-slate-900/5 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#DC2626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626] dark:border-white/15 dark:bg-slate-800/70 dark:text-slate-200 dark:ring-white/5 dark:hover:bg-slate-800 dark:hover:text-red-400"
    >
      {mounted && isDark ? (
        <Sun className="h-4.5 w-4.5" aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5" aria-hidden="true" />
      )}
    </button>
  );
}
