import { DoorOpen, Layers3, SunSnow, Flame, Umbrella, LucideIcon } from "lucide-react";

export type BoxItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const boxes: BoxItem[] = [
  {
    icon: DoorOpen,
    title: "Systemy okienno drzwiowe",
    description: "Nowoczesne okna i drzwi dopasowane do Twoich potrzeb.",
    image: "/img/drzwi.jpg",
    href: "/oferta/window-door-systems",
  },
  {
    icon: Layers3,
    title: "Fasady",
    description: "Estetyczne fasady aluminiowe do budynków i zadaszeń.",
    image: "/img/ogrody.webp",
    href: "/facades",
  },
  {
    icon: SunSnow,
    title: "Ogrody zimowe",
    description: "Szklane konstrukcje całoroczne idealne do relaksu.",
    image: "/img/tarasy.jpg",
    href: "/winter-gardens",
  },
  {
    icon: Flame,
    title: "Stolarka przeciwpożarowa",
    description: "Bezpieczne drzwi i okna odporne na ogień.",
    image: "/img/przeciwpozarowe.jpg",
    href: "/fire-resistant-joinery",
  },
  {
    icon: Umbrella,
    title: "Zadaszenia tarasów",
    description: "Trwałe zadaszenia chroniące przed deszczem i słońcem.",
    image: "/img/fasady.jpg",
    href: "/terrace-roofing",
  },
];
