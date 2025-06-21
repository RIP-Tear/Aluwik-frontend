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
    icon: PanelLeftOpen,
    title: "Systemy drzwi przesuwanych",
    description: "Komfortowe i energooszczędne systemy przesuwne do dużych przeszkleń.",
    image: "/img/drzwi-przesuwane.jpg",
    href: "/systemy-drzwi-przesuwanych",
  },
  {
    icon: DoorClosed,
    title: "Drzwi aluminiowe",
    description: "Wytrzymałe drzwi z profili aluminiowych zapewniające bezpieczeństwo i styl.",
    image: "/img/drzwi.jpg",
    href: "/drzwi-aluminiowe",
  },
  {
    icon: MoveHorizontal,
    title: "Okna przesuwane",
    description: "Lekko i cicho pracujące okna przesuwne zwiększające powierzchnię użytkową.",
    image: "/img/okna-przesuwane.webp",
    href: "/okna-przesuwane",
  },
  {
    icon: AppWindow,
    title: "Okna aluminiowe",
    description: "Nowoczesne okna aluminiowe o znakomitej izolacji termicznej i akustycznej.",
    image: "/img/okna-aluminiowe.jpg",
    href: "/okna-aluminiowe",
  },
  {
    icon: Layers3,
    title: "Fasady",
    description: "Modułowe fasady słupowo–ryglowe i elementowe dla obiektów komercyjnych.",
    image: "/img/fasady.jpg",
    href: "/fasady",
  },
  {
    icon: SunSnow,
    title: "Ogrody zimowe",
    description: "Całoroczne oranżerie z izolowanych profili aluminiowych do komfortowego relaksu.",
    image: "/img/ogrody-zimowe.jpg",
    href: "/ogrody-zimowe",
  },
  {
    icon: Flame,
    title: "Ściany oddzielenia przeciwpożarowego",
    description: "Konstrukcje EI30-EI120 do skutecznego wydzielenia stref pożarowych.",
    image: "/img/sciany-oddzielenia-przeciwpozarowego.jpg",
    href: "/sciany-oddzielenia-przeciwpozarowego",
  },
  {
    icon: Shield,
    title: "Drzwi przeciwpożarowe",
    description: "Certyfikowane skrzydła EI30-EI120 gwarantujące bezpieczeństwo pożarowe.",
    image: "/img/drzwi-przeciwpozarowe.jpg",
    href: "/drzwi-przeciwpozarowe",
  },
  {
    icon: Umbrella,
    title: "Zadaszenia tarasów",
    description: "Aluminiowe pergole i dachy szklane chroniące przed deszczem i słońcem.",
    image: "/img/zadaszenia-tarasow.jpg",
    href: "/zadaszenia-tarasow",
  },
];
