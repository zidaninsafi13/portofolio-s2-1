import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zidan Insafi — E-Portofolio PPG Prajabatan",
  description:
    "Dokumentasi reflektif perjalanan akademik dan profesional Zidan Insafi selama Program PPG Prajabatan.",
  applicationName: "E-Portofolio PPG Zidan Insafi",
  authors: [{ name: "Zidan Insafi" }],
  keywords: ["PPG Prajabatan", "portofolio guru", "PJOK", "refleksi pembelajaran"],
  icons: {
    icon: "/assets/image/logo-kampus.png",
    apple: "/assets/image/logo-kampus.png",
  },
  openGraph: {
    title: "Zidan Insafi — E-Portofolio PPG Prajabatan",
    description:
      "Perjalanan reflektif menjadi calon guru yang bermakna, kontekstual, dan berdampak.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06121a" },
    { media: "(prefers-color-scheme: light)", color: "#eef3ef" },
  ],
};

const themeScript = `
  (() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      const theme = saved === 'light' || saved === 'dark'
        ? saved
        : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
