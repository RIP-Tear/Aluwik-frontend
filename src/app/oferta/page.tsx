import type { Metadata } from "next";
import OfferPageClient from "./OfferPageClient";

export const metadata: Metadata = {
  title: "Oferta stolarki aluminiowej - okna, drzwi, fasady",
  description:
    "Poznaj pełną ofertę ALUWIK: okna aluminiowe, drzwi, fasady, ogrody zimowe, świetliki dachowe i więcej. Wysokiej jakości stolarka aluminiowa z profilami Aluprof i Ponzio.",
  alternates: {
    canonical: "https://aluwik.pl/oferta/",
  },
  openGraph: {
    title: "Oferta ALUWIK - Kompleksowa stolarka aluminiowa",
    description:
      "Okna, drzwi, fasady, ogrody zimowe. Profile Aluprof i Ponzio. Sprawdź naszą ofertę!",
    url: "https://aluwik.pl/oferta/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oferta ALUWIK - Kompleksowa stolarka aluminiowa",
    description: "Okna, drzwi, fasady, ogrody zimowe z profili Aluprof i Ponzio.",
  },
};

export default function OfferPage() {
  return <OfferPageClient />;
}
