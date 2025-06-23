import React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALUWIK | Stolarka aluminiowa dla domu i biznesu",
  description:
    "ALUWIK to producent wysokiej jakości stolarki aluminiowej: okien, drzwi, fasad i ogrodów zimowych. Oferujemy trwałe rozwiązania z profili Aluprof i Ponzio dla klientów indywidualnych i firm.",
  keywords: [
    "aluwik",
    "stolarka aluminiowa",
    "okna aluminiowe",
    "drzwi aluminiowe",
    "fasady aluminiowe",
    "ogrody zimowe",
    "Aluprof",
    "Ponzio",
    "producent stolarki",
    "aluminium",
    "systemy okienno-drzwiowe",
  ],
  authors: [{ name: "ALUWIK", url: "https://aluwik.pl" }],
  robots: "index, follow",
  openGraph: {
    title: "ALUWIK | Stolarka aluminiowa dla domu i biznesu",
    description:
      "Sprawdź naszą ofertę okien, drzwi, fasad i ogrodów zimowych z aluminium. ALUWIK — nowoczesne systemy dla wymagających.",
    url: "https://aluwik.pl",
    siteName: "ALUWIK",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E1E1E6" />
      </head>
      <body className="bg-shadowMind text-softSync">{children}</body>
    </html>
  );
}
