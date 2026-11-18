import type { Metadata } from "next";

export const siteConfig = {
  name: "Taller Mecánico Ruta Sur",
  shortName: "Ruta Sur",
  description:
    "Mecánica automotriz multimarca en Uruguay. Mantenimiento preventivo, diagnóstico computarizado, revisión pre-compra y venta de insumos básicos. Turnos puntuales y repuesto a la vista.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_UY",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mecánica clara, rápida y sin vueltas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Mecánica clara, rápida y sin vueltas`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Mecánica clara, rápida y sin vueltas`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
