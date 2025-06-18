// app/layout.tsx
import React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluwik",
  description: "Oficjalna strona projektu Sztuczna co? — coś więcej niż AI.",
  keywords: ["AI", "sztuczna inteligencja", "Sztuczna co?", "technologia", "startup"],
  authors: [{ name: "SztucznaCo", url: "https://sztucznaco.pl" }],
  robots: "index, follow",
  openGraph: {
    title: "Sztuczna co?",
    description: "Coś więcej niż AI. Strona w budowie, ale warto wracać!",
    url: "https://sztucznaco.pl",
    siteName: "SztucznaCo",
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
