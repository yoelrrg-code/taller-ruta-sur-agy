import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "light" }: BrandLogoProps) {
  const titleColor =
    variant === "dark" ? "text-white" : "text-[#111827] dark:text-white";
  const subtitleColor =
    variant === "dark"
      ? "text-slate-300"
      : "text-[#4B5563] dark:text-slate-400";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC2626]"
      aria-label="Taller Mecánico Ruta Sur - Ir al inicio"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#374151] text-white shadow-sm">
        {/* Interim piston mark until official /public/assets/logo.svg is provided */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="6" y="3" width="12" height="7" rx="1.5" stroke="#DC2626" />
          <line x1="6" y1="6.5" x2="18" y2="6.5" stroke="#F8FAFC" />
          <line x1="12" y1="10" x2="12" y2="17" />
          <circle cx="12" cy="19" r="2.2" stroke="#DC2626" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-heading text-base font-extrabold tracking-tight ${titleColor}`}
        >
          Ruta Sur
        </span>
        <span className={`text-xs font-medium ${subtitleColor}`}>
          Taller Mecánico
        </span>
      </span>
    </Link>
  );
}
