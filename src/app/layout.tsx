import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionPrimitives";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-UY"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="relative min-h-screen overflow-x-hidden text-[#111827] antialiased selection:bg-red-600/15 selection:text-red-700 dark:text-slate-100 dark:selection:bg-red-500/25 dark:selection:text-red-200">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-red-500/20 blur-3xl dark:bg-red-600/25" />
          <div className="absolute right-[-6rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/15" />
          <div className="absolute bottom-[-6rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-red-500/15 blur-3xl dark:bg-red-600/20" />
        </div>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
