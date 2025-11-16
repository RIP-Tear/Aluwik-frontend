import type { Metadata } from "next";
import OfferPageClient from "./OfferPageClient";

export const metadata: Metadata = {
  title: "Oferta stolarki aluminiowej - okna, drzwi, fasady",
  description:
    "Poznaj pełną ofertę ALUWIK: okna aluminiowe, drzwi, fasady, ogrody zimowe, świetliki dachowe i więcej. Wysokiej jakości stolarka aluminiowa z profilami Aluprof i Ponzio.",
  alternates: {
    canonical: "/oferta/",
  },
};

export default function OfferPage() {
  return <OfferPageClient />;
}
