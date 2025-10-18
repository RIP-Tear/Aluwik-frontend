import { AppWindow, MapPin } from "lucide-react";

import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const RoofSkylightsOffer = () => {
  // Zakładam, że oferta "Świetliki dachowe" jest w pliku offers.ts
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[2], // Fasady
    offers[3], // Ogrody zimowe
    offers[8], // Zabudowania zewnętrzne
  ];

  return (
    <OfferPageTemplate
      title="Świetliki dachowe"
      highlightWords={["dachowe"]}
      imageSrc="/img/swietliki-dachowe.webp"
      imageAlt="Świetliki dachowe – naturalne doświetlenie wnętrz ALUWIK"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: AppWindow,
          title: "Dlaczego warto?",
          items: [
            "Naturalne doświetlenie pomieszczeń przez cały rok",
            "Oszczędność energii elektrycznej",
            "Nowoczesny wygląd i trwałość konstrukcji",
            "Możliwość realizacji indywidualnych projektów",
          ],
        },
        {
          icon: AppWindow,
          title: "Cechy produktu",
          items: [
            "Konstrukcje aluminiowe odporne na warunki atmosferyczne",
            "Szkło hartowane lub zespolone o wysokiej izolacyjności",
            "Różne kształty i rozmiary dopasowane do potrzeb klienta",
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
          heading: "Świetliki dachowe – światło i nowoczesność",
          content:
            "Oferujemy świetliki dachowe, które zapewniają naturalne doświetlenie wnętrz, poprawiają komfort użytkowania budynków i nadają im nowoczesny charakter. Nasze konstrukcje są trwałe, szczelne i estetyczne.",
        },
        {
          heading: "Funkcjonalność i bezpieczeństwo",
          content: [
            "Wysoka odporność na deszcz, śnieg i wiatr.",
            "Możliwość wykonania świetlików o nietypowych kształtach i wymiarach.",
            "Zastosowanie szkła o podwyższonej izolacyjności cieplnej.",
            "Gwarancja jakości i zgodność z normami europejskimi.",
          ],
        },
      ]}
    />
  );
};

export default RoofSkylightsOffer;
