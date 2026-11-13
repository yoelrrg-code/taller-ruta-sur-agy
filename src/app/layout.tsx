import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}
