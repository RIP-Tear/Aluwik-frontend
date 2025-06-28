import {
  PanelLeftOpen,
  DoorClosed,
  MoveHorizontal,
  AppWindow,
  Layers3,
  SunSnow,
  Flame,
  Shield,
  Umbrella,
  LucideIcon,
} from "lucide-react";

export type OfferItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const offers: OfferItem[] = [
  {
    icon: DoorClosed,
    title: "Drzwi aluminiowe",
    description: "Wytrzymałe drzwi z profili aluminiowych zapewniające bezpieczeństwo i styl.",
    image: "/img/drzwi.webp",
    href: "/oferta/drzwi-aluminiowe",
  },

  {
    icon: AppWindow,
    title: "Okna aluminiowe",
    description: "Nowoczesne okna aluminiowe o znakomitej izolacji termicznej i akustycznej.",
    image: "/img/okna-aluminiowe.webp",
    href: "/oferta/okna-aluminiowe",
  },
  {
    icon: Layers3,
    title: "Fasady",
    description: "Modułowe fasady słupowo–ryglowe i elementowe dla obiektów komercyjnych.",
    image: "/img/fasady.webp",
    href: "/oferta/fasady",
  },
  {
    icon: SunSnow,
    title: "Ogrody zimowe",
    description: "Całoroczne oranżerie z izolowanych profili aluminiowych do komfortowego relaksu.",
    image: "/img/ogrody-zimowe.webp",
    href: "/oferta/ogrody-zimowe",
  },
  {
    icon: PanelLeftOpen,
    title: "Systemy drzwi przesuwanych",
    description: "Komfortowe i energooszczędne systemy przesuwne do dużych przeszkleń.",
    image: "/img/drzwi-przesuwane.webp",
    href: "/oferta/systemy-drzwi-przesuwanych",
  },

  {
    icon: MoveHorizontal,
    title: "Okna przesuwane",
    description: "Lekko i cicho pracujące okna przesuwne zwiększające powierzchnię użytkową.",
    image: "/img/okna-przesuwane.webp",
    href: "/oferta/okna-przesuwane",
  },
  {
    icon: Flame,
    title: "Ściany oddzielenia przeciwpożarowego",
    description: "Konstrukcje EI30-EI120 do skutecznego wydzielenia stref pożarowych.",
    image: "/img/sciany-oddzielenia-przeciwpozarowego.webp",
    href: "/oferta/sciany-oddzielenia-przeciwpozarowego",
  },
  {
    icon: Shield,
    title: "Drzwi przeciwpożarowe",
    description: "Certyfikowane skrzydła EI30-EI120 gwarantujące bezpieczeństwo pożarowe.",
    image: "/img/drzwi-przeciwpozarowe.webp",
    href: "/oferta/drzwi-przeciwpozarowe",
  },
  {
    icon: Umbrella,
    title: "Zadaszenia tarasów",
    description: "Aluminiowe pergole i dachy szklane chroniące przed deszczem i słońcem.",
    image: "/img/zadaszenia-tarasow.webp",
    href: "/oferta/zadaszenia-tarasow",
  },
];
