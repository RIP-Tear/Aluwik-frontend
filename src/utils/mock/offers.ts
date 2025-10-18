import {
  PanelLeftOpen,
  DoorClosed,
  MoveHorizontal,
  AppWindow,
  Layers3,
  SunSnow,
  Shield,
  Umbrella,
  Sparkles,
  Building2,
  LayoutGrid,
  SquareDashedBottom,
  LucideIcon,
} from "lucide-react";

export type OfferItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  href: string;
  value: string; // identyfikator kategorii
};

export const offers: OfferItem[] = [
  {
    icon: DoorClosed,
    title: "Drzwi aluminiowe",
    description: "Wytrzymałe drzwi z profili aluminiowych zapewniające bezpieczeństwo i styl.",
    image: "/img/drzwi-aluminiowe.webp",
    href: "/oferta/drzwi-aluminiowe/",
    value: "drzwiAluminiowe",
  },

  {
    icon: AppWindow,
    title: "Okna aluminiowe",
    description: "Nowoczesne okna aluminiowe o znakomitej izolacji termicznej i akustycznej.",
    image: "/img/okna-aluminiowe.webp",
    href: "/oferta/okna-aluminiowe/",
    value: "oknaAluminiowe",
  },
  {
    icon: Layers3,
    title: "Fasady",
    description: "Modułowe fasady słupowo–ryglowe i elementowe dla obiektów komercyjnych.",
    image: "/img/fasady.webp",
    href: "/oferta/fasady/",
    value: "fasady",
  },
  {
    icon: SunSnow,
    title: "Ogrody zimowe",
    description: "Całoroczne oranżerie z izolowanych profili aluminiowych do komfortowego relaksu.",
    image: "/img/ogrody-zimowe.webp",
    href: "/oferta/ogrody-zimowe/",
    value: "ogrodyZimowe",
  },
  {
    icon: PanelLeftOpen,
    title: "Systemy drzwi przesuwanych",
    description: "Komfortowe i energooszczędne systemy przesuwne do dużych przeszkleń.",
    image: "/img/systemy-drzwi-przesuwanych.webp",
    href: "/oferta/systemy-drzwi-przesuwanych/",
    value: "systemyDrzwiPrzesuwanych",
  },

  {
    icon: MoveHorizontal,
    title: "Okna przesuwane",
    description: "Lekko i cicho pracujące okna przesuwne zwiększające powierzchnię użytkową.",
    image: "/img/okna-przesuwane.webp",
    href: "/oferta/okna-przesuwane/",
    value: "oknaPrzesuwane",
  },
  {
    icon: Sparkles,
    title: "Świetliki dachowe",
    description: "Nowoczesne świetliki dachowe zapewniające naturalne doświetlenie wnętrz.",
    image: "/img/swietliki-dachowe.webp",
    href: "/oferta/swietliki-dachowe/",
    value: "swietlikiDachowe",
  },
  {
    icon: Building2,
    title: "Zabudowania zewnętrzne",
    description:
      "Wytrzymałe zabudowania zewnętrzne z aluminium i szkła do zastosowań komercyjnych i prywatnych.",
    image: "/img/zabudowania-zewnetrzne.webp",
    href: "/oferta/zabudowania-zewnetrzne/",
    value: "zabudowaniaZewnetrzne",
  },
  {
    icon: LayoutGrid,
    title: "Zabudowania wewnętrzne",
    description: "Estetyczne i funkcjonalne zabudowania wewnętrzne z aluminium i szkła.",
    image: "/img/zabudowania-wewnetrzne.webp",
    href: "/oferta/zabudowania-wewnetrzne/",
    value: "zabudowaniaWewnetrzne",
  },
  {
    icon: SquareDashedBottom,
    title: "Ścianka działowa szklana",
    description: "Szklane ścianki działowe do nowoczesnych wnętrz biurowych i mieszkalnych.",
    image: "/img/scianka-dzialowa-szklana.webp",
    href: "/oferta/scianka-dzialowa-szklana/",
    value: "sciankaDzialowaSzklana",
  },
  {
    icon: Shield,
    title: "Drzwi przeciwpożarowe",
    description: "Certyfikowane skrzydła EI30-EI120 gwarantujące bezpieczeństwo pożarowe.",
    image: "/img/drzwi-przeciwpozarowe.webp",
    href: "/oferta/drzwi-przeciwpozarowe/",
    value: "drzwiPrzeciwpozarowe",
  },
  {
    icon: Umbrella,
    title: "Zadaszenia tarasów",
    description: "Aluminiowe pergole i dachy szklane chroniące przed deszczem i słońcem.",
    image: "/img/zadaszenia-tarasow.webp",
    href: "/oferta/zadaszenia-tarasow/",
    value: "zadaszeniaTarasow",
  },
];
