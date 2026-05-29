import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenvixlabs.app"),
  title: {
    default: "Zenvix Labs — Desenvolvimento de Software",
    template: "%s | Zenvix Labs",
  },
  description:
    "Zenvix Labs — estúdio de desenvolvimento de software. CT095, Konta (Daylize) e Zenvix Store.",
  keywords: [
    "Zenvix Labs",
    "desenvolvimento de software",
    "SaaS",
    "CT095",
    "Konta",
    "Daylize",
    "Zenvix Store",
  ],
  openGraph: {
    title: "Zenvix Labs",
    description: "Tecnologia que transforma ideias em produtos digitais.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
