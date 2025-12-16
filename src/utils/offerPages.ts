// Mapping dla stron oferty
import { ComponentType } from "react";
import AluminiumDoorsOffer from "@/components/organisms/offer-page/offers/AluminiumDoorsOffer";
import AluminiumWindowsOffer from "@/components/organisms/offer-page/offers/AluminiumWindowsOffer";
import FacadesOffer from "@/components/organisms/offer-page/offers/FacadesOffer";
import WinterGardensOffer from "@/components/organisms/offer-page/offers/WinterGardensOffer";
import SlidingDoorSystemsOffer from "@/components/organisms/offer-page/offers/SlidingDoorSystemsOffer";
import SlidingWindowsOffer from "@/components/organisms/offer-page/offers/SlidingWindowsOffer";
import GlassPartitionWallOffer from "@/components/organisms/offer-page/offers/GlassPartitionWallOffer";
import RoofSkylightsOffer from "@/components/organisms/offer-page/offers/RoofSkylightsOffer";
import FireDoorsOffer from "@/components/organisms/offer-page/offers/FireDoorsOffer";
import TerraceRoofingOffer from "@/components/organisms/offer-page/offers/TerraceRoofingOffer";
import InteriorStructuresOffer from "@/components/organisms/offer-page/offers/InteriorStructuresOffer";
import ExteriorStructuresOffer from "@/components/organisms/offer-page/offers/ExteriorStructuresOffer";

export type OfferPageData = {
  component: ComponentType;
  title: string;
  description: string;
};

export const offerPages: Record<string, OfferPageData> = {
  "drzwi-aluminiowe": {
    component: AluminiumDoorsOffer,
    title: "Drzwi aluminiowe – nowoczesność i trwałość",
    description:
      "Oferujemy aluminiowe drzwi zewnętrzne i wewnętrzne o wysokiej odporności, izolacyjności i nowoczesnym wyglądzie. Idealne do domów, biur i budynków komercyjnych. Zaufaj jakości profili Aluprof i Ponzio.",
  },
  "okna-aluminiowe": {
    component: AluminiumWindowsOffer,
    title: "Okna aluminiowe – trwałość i nowoczesny design",
    description:
      "Produkujemy energooszczędne i estetyczne okna aluminiowe na profilach Aluprof i Ponzio. Gwarancja trwałości, szczelności i eleganckiego wykończenia – idealne do nowoczesnych inwestycji.",
  },
  fasady: {
    component: FacadesOffer,
    title: "Fasady – nowoczesna elewacja budynku",
    description:
      "Nowoczesne fasady aluminiowe ALUWIK to połączenie estetyki, trwałości i energooszczędności. Tworzymy elewacje dopasowane do budynków komercyjnych, biurowców i inwestycji premium. Systemy Aluprof i Ponzio.",
  },
  "ogrody-zimowe": {
    component: WinterGardensOffer,
    title: "Ogrody zimowe – komfort przez cały rok",
    description:
      "Projektujemy i montujemy ogrody zimowe z wysokiej jakości profili aluminiowych. Tworzymy przestrzenie wypoczynkowe łączące wnętrze z ogrodem, dostosowane do każdej pory roku.",
  },
  "systemy-drzwi-przesuwanych": {
    component: SlidingDoorSystemsOffer,
    title: "Systemy drzwi przesuwnych",
    description:
      "Zaawansowane systemy drzwi przesuwnych ALUWIK zapewniają wygodę użytkowania, oszczędność miejsca i elegancki wygląd. Idealne rozwiązanie dla nowoczesnych wnętrz.",
  },
  "okna-przesuwane": {
    component: SlidingWindowsOffer,
    title: "Okna przesuwne – więcej światła, mniej ograniczeń",
    description:
      "Innowacyjne okna przesuwne ALUWIK oferują maksymalną funkcjonalność przy minimalnym zapotrzebowaniu na miejsce. Doskonałe rozwiązanie dla balkonów, tarasów i dużych przeszkleń.",
  },
  "scianka-dzialowa-szklana": {
    component: GlassPartitionWallOffer,
    title: "Ścianka działowa szklana – nowoczesność i trwałość",
    description:
      "Profesjonalne ścianki działowe szklane ALUWIK łączą funkcjonalność z estetyką. Idealne do biur, hoteli i przestrzeni komercyjnych wymagających eleganckiego podziału przestrzeni.",
  },
  "swietliki-dachowe": {
    component: RoofSkylightsOffer,
    title: "Świetliki dachowe – nowoczesność i trwałość",
    description:
      "Wysokiej jakości świetliki dachowe ALUWIK zapewniają doskonałe doświetlenie wnętrz naturalnym światłem. Trwałe konstrukcje z profili aluminiowych z certyfikowanymi parametrami.",
  },
  "drzwi-przeciwpozarowe": {
    component: FireDoorsOffer,
    title: "Drzwi przeciwpożarowe – bezpieczeństwo i certyfikaty",
    description:
      "Certyfikowane drzwi przeciwpożarowe ALUWIK spełniają najwyższe standardy bezpieczeństwa. Oferujemy kompletne rozwiązania z klasami odporności ogniowej dostosowanymi do wymagań budynku.",
  },
  "zadaszenia-tarasow": {
    component: TerraceRoofingOffer,
    title: "Zadaszenia tarasów",
    description:
      "Stylowe zadaszenia tarasów ALUWIK chronią przed warunkami atmosferycznymi, jednocześnie podkreślając architekturę budynku. Trwałe konstrukcje z wysokiej jakości profili aluminiowych.",
  },
  "zabudowania-wewnetrzne": {
    component: InteriorStructuresOffer,
    title: "Zabudowania wewnętrzne – nowoczesność i trwałość",
    description:
      "Profesjonalne zabudowania wewnętrzne ALUWIK łączą funkcjonalność z designem. Tworzymy konstrukcje dostosowane do indywidualnych potrzeb klientów.",
  },
  "zabudowania-zewnetrzne": {
    component: ExteriorStructuresOffer,
    title: "Zabudowania zewnętrzne – nowoczesność i trwałość",
    description:
      "Trwałe zabudowania zewnętrzne ALUWIK zapewniają ochronę i funkcjonalność przez lata. Konstrukcje z wysokiej jakości profili aluminiowych dostosowane do warunków atmosferycznych.",
  },
};

export const offerSlugs = Object.keys(offerPages);
