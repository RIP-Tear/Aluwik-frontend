import { AppWindow, MapPin } from "lucide-react";

import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const ExteriorStructuresOffer = () => {
  // Zakładam, że oferta "Zabudowania zewnętrzne" jest na pozycji 8 (licząc od 0) po ostatnich zmianach w pliku offers.ts
  // relatedOffers: dobieram powiązane tematycznie oferty
  const relatedOffers = [
    offers[0], // Drzwi aluminiowe
    offers[2], // Fasady
    offers[3], // Ogrody zimowe
    offers[5], // Okna przesuwane
  ];

  return (
    <OfferPageTemplate
      title="Zabudowania zewnętrzne"
      highlightWords={["zewnętrzne"]}
      imageSrc="/img/zabudowania-zewnetrzne.webp"
      imageAlt="Zabudowania zewnętrzne aluminiowe – nowoczesne konstrukcje ALUWIK"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: AppWindow,
          title: "Dlaczego warto?",
          items: [
            "Nowoczesny wygląd i estetyka wykonania",
            "Wysoka odporność na warunki atmosferyczne",
            "Możliwość realizacji indywidualnych projektów",
            "Trwałość i bezpieczeństwo użytkowania",
          ],
        },
        {
          icon: AppWindow,
          title: "Cechy produktu",
          items: [
            "Konstrukcje z aluminium i szkła",
            "Doskonała izolacja termiczna i akustyczna",
            "Szeroki wybór kolorów i wykończeń",
            "Łatwość utrzymania czystości",
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
          heading: "Zabudowania zewnętrzne na miarę Twoich potrzeb",
          content:
            "Oferujemy nowoczesne zabudowania zewnętrzne z aluminium i szkła, które doskonale sprawdzą się zarówno w budynkach komercyjnych, jak i prywatnych. Nasze realizacje cechuje trwałość, estetyka oraz możliwość pełnej personalizacji pod potrzeby klienta.",
        },
        {
          heading: "Funkcjonalność i bezpieczeństwo",
          content: [
            "Wysoka odporność na czynniki atmosferyczne – deszcz, śnieg, wiatr.",
            "Możliwość wykonania konstrukcji o nietypowych kształtach i wymiarach.",
            "Zastosowanie nowoczesnych technologii montażu i zabezpieczeń.",
            "Gwarancja jakości i zgodność z normami europejskimi.",
          ],
        },
      ]}
    />
  );
};

export default ExteriorStructuresOffer;
