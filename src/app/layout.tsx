import type { Metadata } from "next";
import { Fraunces, Outfit, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenvixlabs.app"),
  title: {
    default: "Zenvix Labs — Estúdio de software",
    template: "%s | Zenvix Labs",
  },
  description:
    "Estúdio de software. Construímos e operamos produtos digitais — Tá na Promo, Selah, WhatsApp Viewer, Zenvix Store e Konta.",
  keywords: [
    "Zenvix Labs",
    "estúdio de software",
    "desenvolvimento de software",
    "Tá na Promo",
    "Selah",
    "WhatsApp Viewer",
    "Konta",
    "Zenvix Store",
  ],
  openGraph: {
    title: "Zenvix Labs",
    description: "Estúdio de software. Produtos digitais no ar.",
    url: "https://zenvixlabs.app",
    siteName: "Zenvix Labs",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
