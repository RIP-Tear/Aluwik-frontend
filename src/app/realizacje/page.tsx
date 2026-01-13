import type { Metadata } from "next";
import RealizationPageClient from "./RealizationPageClient";

export const metadata: Metadata = {
  title: "Nasze realizacje – okna, drzwi i fasady aluminiowe",
  description:
    "Zobacz wybrane realizacje ALUWIK. Montujemy nowoczesne okna, drzwi, fasady i ogrody zimowe z aluminium. Projekty dla domów jednorodzinnych, firm i instytucji publicznych.",
  alternates: {
    canonical: "https://aluwik.pl/realizacje/",
  },
  openGraph: {
    title: "Realizacje ALUWIK - Nasze projekty stolarki aluminiowej",
    description:
      "Sprawdź nasze realizacje: okna, drzwi, fasady i ogrody zimowe dla domów i firm.",
    url: "https://aluwik.pl/realizacje/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realizacje ALUWIK - Nasze projekty",
    description: "Zobacz nasze najnowsze realizacje stolarki aluminiowej.",
  },
};

export default function RealizationPage() {
  return <RealizationPageClient />;
}
