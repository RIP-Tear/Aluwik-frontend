import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ALUWIK | Producent stolarki aluminiowej",
  description:
    "ALUWIK to producent wysokiej jakości stolarki aluminiowej: okien, drzwi, fasad i ogrodów zimowych. Oferujemy trwałe rozwiązania z profili Aluprof i Ponzio dla klientów indywidualnych i firm.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
