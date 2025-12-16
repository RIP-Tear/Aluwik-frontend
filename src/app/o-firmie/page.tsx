import AboutPageClient from "./AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie",
  description:
    "ALUWIK - producent stolarki aluminiowej z Tczewa. Oferujemy okna Tczew, drzwi aluminiowe Tczew, pergole Tczew, ogrody zimowe Tczew. Stolarka okienna i ślusarka aluminiowa pomorskie z certyfikatami.",
  keywords: [
    "producent stolarki aluminiowej",
    "okna tczew",
    "stolarka okienna",
    "ogrody zimowe tczew",
    "okna przesuwne tczew",
    "pergole tczew",
    "drzwi aluminiowe tczew",
    "tczew okna",
    "stolarka aluminiowa producent",
    "stolarka aluminiowa pomorskie",
    "producent ślusarki aluminiowej",
    "ściany oddzielenia przeciwpożarowego pomorskie",
    "zadaszenia tarasów pomorskie",
    "aluwik",
    "pergole tarasowe tczew",
    "okna aluminiowe pomorskie",
    "fasady aluminiowe pomorskie",
    "drzwi przeciwpożarowe aluminiowe",
    "świetliki dachowe aluminiowe",
    "ścianka działowa szklana",
    "producenci stolarki aluminiowej",
    "profile aluminiowe",
    "systemy drzwi przesuwnych pomorskie",
    "produkcja stolarki aluminiowej",
    "stolarka aluminiowa",
    "okna aluminiowe",
    "drzwi aluminiowe producent",
    "fasady aluminiowe",
    "producent okien aluminiowych",
    "aluminiowe",
    "systemy drzwi przesuwnych gdańsk",
    "producent okien tczew",
    "profile aluminiowe konstrukcyjne",
    "polski producent stolarki aluminiowej",
    "producent stolarki aluminiowej poznań",
    "producent fasad aluminiowych",
    "producent drzwi aluminiowych",
    "ślusarka aluminiowa",
    "producenci okien aluminiowych",
    "stolarka okienna aluminiowa",
    "systemy aluminiowe",
    "okna aluminiowe producent",
    "producent stolarki okiennej",
    "producent aluminium",
    "stolarka aluminiowa małopolskie",
    "montaż stolarki otworowej",
    "wyroby z aluminium",
    "konstrukcje aluminiowe",
    "producent stolarki okiennej i drzwiowej",
    "producenci aluminium",
  ],
  alternates: {
    canonical: "/o-firmie/",
  },
  openGraph: {
    title: "O firmie ALUWIK | Producent stolarki aluminiowej z Tczewa",
    description:
      "ALUWIK - doświadczony producent stolarki aluminiowej z Tczewa. Okna Tczew, drzwi aluminiowe, pergole Tczew, ogrody zimowe. Stolarka okienna pomorskie z certyfikatami.",
    url: "https://www.aluwik.pl/o-firmie/",
  },
  twitter: {
    description:
      "ALUWIK - producent stolarki aluminiowej Tczew. Okna Tczew, drzwi aluminiowe, pergole Tczew, stolarka okienna pomorskie.",
  },
};

export default function OFirmiePage() {
  return <AboutPageClient />;
}
