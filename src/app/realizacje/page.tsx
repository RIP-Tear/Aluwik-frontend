import type { Metadata } from "next";
import RealizationPageClient from "./RealizationPageClient";

export const metadata: Metadata = {
  title: "Nasze realizacje – okna, drzwi i fasady aluminiowe",
  description:
    "Zobacz wybrane realizacje ALUWIK. Montujemy nowoczesne okna, drzwi, fasady i ogrody zimowe z aluminium. Projekty dla domów jednorodzinnych, firm i instytucji publicznych.",
  alternates: {
    canonical: "/realizacje/",
  },
};

export default function RealizationPage() {
  return <RealizationPageClient />;
}
