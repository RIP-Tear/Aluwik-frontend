import React from "react";
import { ShieldCheck, Paintbrush2, Snowflake, Wrench, MapPin } from "lucide-react";
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const AluminiumDoorsOffer = () => {
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[2], // Fasady
    offers[4], // Systemy drzwi przesuwanych
    offers[7], // Drzwi przeciwpożarowe
  ];

  const boxes = [
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo i trwałość",
      items: [
        "Systemy antywłamaniowe",
        "Odporność na czynniki zewnętrzne",
        "Stabilna i solidna konstrukcja",
      ],
    },
    {
      icon: Paintbrush2,
      title: "Dopasowanie do projektu",
      items: ["Możliwość malowania na dowolny kolor", "Uniwersalny design pasujący do elewacji"],
    },
    {
      icon: Snowflake,
      title: "Izolacja termiczna",
      items: [
        "Specjalna konstrukcja ograniczająca straty ciepła",
        "Wpływ na redukcję kosztów ogrzewania",
      ],
    },
    {
      icon: Wrench,
      title: "Minimalna konserwacja",
      items: [
        "Odporność na korozję i warunki atmosferyczne",
        "Brak konieczności częstej konserwacji",
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
  ];

  const sections = [
    {
      heading: "Nowoczesne i funkcjonalne drzwi aluminiowe",
      content:
        "Oferujemy solidne drzwi aluminiowe o szerokim zastosowaniu – od budynków mieszkalnych i przemysłowych po obiekty użyteczności publicznej. Nasze rozwiązania cechują się wysokim standardem wykonania, trwałością i eleganckim wyglądem. Działamy na terenie całej Polski oraz za granicą, dostarczając i montując drzwi w zgodzie z oczekiwaniami klienta.",
    },
    {
      heading: "Dlaczego warto postawić na drzwi aluminiowe?",
      content: [
        "Trwała konstrukcja odporna na czynniki zewnętrzne",
        "Uniwersalny i estetyczny design dopasowany do elewacji",
        "Możliwość lakierowania w dowolnym kolorze",
        "Dodatkowe systemy antywłamaniowe i zabezpieczenia",
        "Właściwości termoizolacyjne redukujące straty ciepła",
        "Niskie wymagania konserwacyjne",
      ],
    },
    {
      heading: "Indywidualne doradztwo i kompleksowa obsługa",
      content:
        "Z przyjemnością pomożemy w wyborze odpowiedniego modelu drzwi aluminiowych. Nasz zespół służy doradztwem technicznym i estetycznym, dopasowując ofertę do potrzeb inwestycji prywatnych i komercyjnych.",
    },
  ];

  return (
    <OfferPageTemplate
      title="Drzwi aluminiowe"
      highlightWords={["aluminiowe"]}
      imageSrc="/img/drzwi.webp"
      imageAlt="Drzwi aluminiowe Tczew – producent stolarki aluminiowej ALUWIK"
      boxes={boxes}
      sections={sections}
      relatedOffers={relatedOffers}
    />
  );
};

export default AluminiumDoorsOffer;
