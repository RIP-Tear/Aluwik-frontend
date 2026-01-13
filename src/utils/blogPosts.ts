// Mapping dla postów blogowych
import { ComponentType } from "react";
import ZaletyDzwiPrzesuwanych from "@/components/organisms/blog-page/posts/ZaletyDzwiPrzesuwanych";
import TarasyKompozytowe from "@/components/organisms/blog-page/posts/TarasyKompozytowe";
import PergoleTarasoweTczew from "@/components/organisms/blog-page/posts/PergoleTarasoweTczew";
import SwietlikiDachowe from "@/components/organisms/blog-page/posts/SwietlikiDachowe";
import ZabudowyAluminiowe from "@/components/organisms/blog-page/posts/ZabudowyAluminiowe";
import DrzwiAluminioweTczew from "@/components/organisms/blog-page/posts/DrzwiAluminioweTczew";
import OknaTczew from "@/components/organisms/blog-page/posts/OknaTczew";
import DzwiPrzeciwpozarowe from "@/components/organisms/blog-page/posts/DzwiPrzeciwpozarowe";
import OgrodZimowyIdealny from "@/components/organisms/blog-page/posts/OgrodZimowyIdealny";
import SzklaneScianki from "@/components/organisms/blog-page/posts/SzklaneScianki";
import ProducentStolarki from "@/components/organisms/blog-page/posts/ProducentStolarki";
import MarkizyTczew from "@/components/organisms/blog-page/posts/MarkizyTczew";

export type BlogPostData = {
  component: ComponentType;
  title: string;
  description: string;
  date?: string;
  image?: string;
};

export const blogPosts: Record<string, BlogPostData> = {
  "zalety-drzwi-przesuwnych": {
    component: ZaletyDzwiPrzesuwanych,
    title: "5 zalet drzwi przesuwnych w nowoczesnych wnętrzach",
    description:
      "Odkryj zalety drzwi przesuwnych w nowoczesnych wnętrzach. Poznaj funkcjonalność, oszczędność miejsca i estetykę systemów przesuwnych ALUWIK.",
    date: "2025-09-15",
  },
  "tarasy-kompozytowe": {
    component: TarasyKompozytowe,
    title: "Tarasy kompozytowe – trwałość i styl na lata",
    description:
      "Poznaj zalety tarasów kompozytowych. Trwałość, łatwość konserwacji i piękny wygląd przez lata. Sprawdź, dlaczego warto wybrać tarasy kompozytowe.",
    date: "2025-09-20",
  },
  "pergole-tczew": {
    component: PergoleTarasoweTczew,
    title: "Pergole tarasowe Tczew z montażem",
    description:
      "Pergole tarasowe Tczew - profesjonalny montaż przez ALUWIK. Stylowe zadaszenia tarasów z aluminium, które chronią przed słońcem i deszczem.",
    date: "2025-10-05",
  },
  "swietliki-dachowe-aluminiowe": {
    component: SwietlikiDachowe,
    title: "Świetliki dachowe Tczew",
    description:
      "Świetliki dachowe aluminiowe Tczew od ALUWIK. Nowoczesne rozwiązania dla przemysłu i budownictwa komercyjnego. Najwyższa jakość wykonania.",
    date: "2025-10-15",
  },
  "zabudowy-aluminiowe": {
    component: ZabudowyAluminiowe,
    title: "Zabudowy aluminiowe Tczew",
    description:
      "Zabudowy aluminiowe Tczew - kompleksowe rozwiązania od ALUWIK. Wewnętrzne i zewnętrzne zabudowy z wysokiej jakości profili aluminiowych.",
    date: "2025-10-20",
  },
  "drzwi-aluminiowe-tczew": {
    component: DrzwiAluminioweTczew,
    title: "Drzwi aluminiowe Tczew",
    description:
      "Drzwi aluminiowe Tczew od lokalnego producenta ALUWIK. Wysokiej jakości drzwi zewnętrzne i wewnętrzne z gwarancją trwałości i bezpieczeństwa.",
    date: "2025-11-01",
  },
  "okna-tczew": {
    component: OknaTczew,
    title: "Okna Tczew",
    description:
      "Okna Tczew od lokalnego producenta. Energooszczędne okna przesuwane Tczew – funkcjonalne, estetyczne i trwałe rozwiązania do Twojego domu.",
    date: "2025-11-10",
  },
  "drzwi-przeciwpozarowe": {
    component: DzwiPrzeciwpozarowe,
    title: "Drzwi przeciwpożarowe – bezpieczeństwo w nowoczesnej formie",
    description:
      "Drzwi przeciwpożarowe łączące bezpieczeństwo z nowoczesnym designem. Poznaj certyfikowane rozwiązania ALUWIK dla Twojego budynku.",
    date: "2025-11-15",
  },
  "ogrod-zimowy-idealny": {
    component: OgrodZimowyIdealny,
    title: "Jak zorganizować idealny ogród zimowy?",
    description:
      "Praktyczny poradnik jak zorganizować idealny ogród zimowy. Poznaj sekrety projektowania i urządzania przestrzeni ogrodów zimowych od ALUWIK.",
    date: "2025-11-20",
  },
  "szklane-scianki-dzialowe-biuro": {
    component: SzklaneScianki,
    title: "Szklane ścianki działowe do biura – nowoczesne, funkcjonalne i estetyczne rozwiązanie",
    description:
      "Poznaj zalety szklanych ścianek działowych do biura. Nowoczesne systemy przeszkleń od producenta stolarki aluminiowej ALUWIK – elastyczność, estetyka i izolacja akustyczna.",
    date: "2025-11-25",
  },
  "producent-stolarki-aluminiowej": {
    component: ProducentStolarki,
    title: "Producent stolarki aluminiowej – dlaczego warto postawić na sprawdzonego wykonawcę?",
    description:
      "Wybór sprawdzonego producenta stolarki aluminiowej to klucz do udanej inwestycji. Poznaj najważniejsze kryteria wyboru i dowiedz się, dlaczego warto zaufać ALUWIK.",
    date: "2025-12-01",
  },
  "markizy-tczew": {
    component: MarkizyTczew,
    title: "Markizy Tczew – skuteczna ochrona przed słońcem i komfort na tarasie",
    description:
      "Markizy Tczew – nowoczesne systemy osłonowe dla domów i lokali usługowych. Ochrona przed słońcem, komfort na tarasie i profesjonalny montaż od ALUWIK.",
    date: "2026-01-05",
  },
};

export const blogSlugs = Object.keys(blogPosts);
