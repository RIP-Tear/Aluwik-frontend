import { AppWindow, MapPin } from "lucide-react";

import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const GlassPartitionWallOffer = () => {
  // Zakładam, że oferta "Ścianka działowa szklana" jest na końcu tablicy offers
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[8], // Zabudowania zewnętrzne
    offers[7], // Zabudowania wewnętrzne
    offers[2], // Fasady
  ];

  return (
    <OfferPageTemplate
      title="Ścianka działowa szklana"
      highlightWords={["szklana"]}
      imageSrc="/img/scianka-dzialowa-szklana.webp"
      imageAlt="Ścianka działowa szklana – nowoczesne rozwiązania ALUWIK"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: AppWindow,
          title: "Dlaczego warto?",
          items: [
            "Nowoczesny i elegancki wygląd",
            "Optymalne doświetlenie wnętrz",
            "Możliwość personalizacji wymiarów i wykończeń",
            "Łatwość montażu i demontażu",
          ],
        },
        {
          icon: AppWindow,
          title: "Cechy produktu",
          items: [
            "Wysokiej jakości szkło hartowane lub laminowane",
            "Stabilne profile aluminiowe",
            "Możliwość zastosowania folii matowych lub dekoracyjnych",
            "Doskonała izolacja akustyczna",
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
          heading: "Szklane ścianki działowe do biur i mieszkań",
          content:
            "Oferujemy nowoczesne ścianki działowe ze szkła, które doskonale sprawdzają się w biurach, mieszkaniach oraz przestrzeniach komercyjnych. Pozwalają na wydzielenie stref bez utraty światła i poczucia przestrzeni.",
        },
        {
          heading: "Funkcjonalność i bezpieczeństwo",
          content: [
            "Szkło hartowane lub laminowane zapewniające bezpieczeństwo użytkowania.",
            "Możliwość wykonania ścianek o różnych wysokościach i szerokościach.",
            "Estetyczne profile aluminiowe w różnych kolorach.",
            "Łatwość utrzymania czystości i odporność na zarysowania.",
          ],
        },
      ]}
    />
  );
};

export default GlassPartitionWallOffer;
