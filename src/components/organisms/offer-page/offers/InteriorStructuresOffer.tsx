import { AppWindow, MapPin } from "lucide-react";

import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const InteriorStructuresOffer = () => {
  // Zakładam, że oferta "Zabudowania wewnętrzne" jest w pliku offers.ts
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[2], // Fasady
    offers[9], // Ścianka działowa szklana
    offers[8], // Zabudowania zewnętrzne
  ];

  return (
    <OfferPageTemplate
      title="Zabudowania wewnętrzne"
      highlightWords={["wewnętrzne"]}
      imageSrc="/img/zabudowania-wewnetrzne.webp"
      imageAlt="Zabudowania wewnętrzne aluminiowe – nowoczesne rozwiązania ALUWIK"
      relatedOffers={relatedOffers}
      value="zabudowaniaWewnetrzne"
      boxes={[
        {
          icon: AppWindow,
          title: "Dlaczego warto?",
          items: [
            "Nowoczesny wygląd i estetyka wykonania",
            "Możliwość realizacji indywidualnych projektów",
            "Trwałość i bezpieczeństwo użytkowania",
            "Łatwość utrzymania czystości",
          ],
        },
        {
          icon: AppWindow,
          title: "Cechy produktu",
          items: [
            "Konstrukcje aluminiowe i szklane",
            "Doskonała izolacja akustyczna",
            "Szeroki wybór kolorów i wykończeń",
            "Możliwość zastosowania szkła matowego lub dekoracyjnego",
          ],
        },
        {
          icon: MapPin,
          title: "Gdzie działamy?",
          items: [
            "Tczew i okolice",
            "Województwo pomorskie",
            "Cała Polska",
            "Realizacje również za granicą",
          ],
        },
      ]}
      sections={[
        {
          heading: "Zabudowania wewnętrzne do biur i mieszkań",
          content:
            "Oferujemy nowoczesne zabudowania wewnętrzne z aluminium i szkła, które doskonale sprawdzają się w biurach, mieszkaniach oraz przestrzeniach komercyjnych. Pozwalają na wydzielenie stref, zachowując estetykę i funkcjonalność wnętrza.",
        },
        {
          heading: "Funkcjonalność i bezpieczeństwo",
          content: [
            "Możliwość wykonania zabudów o różnych kształtach i wymiarach.",
            "Zastosowanie szkła hartowanego lub laminowanego dla bezpieczeństwa.",
            "Estetyczne profile aluminiowe w różnych kolorach.",
            "Łatwość utrzymania czystości i odporność na zarysowania.",
          ],
        },
      ]}
    />
  );
};

export default InteriorStructuresOffer;
