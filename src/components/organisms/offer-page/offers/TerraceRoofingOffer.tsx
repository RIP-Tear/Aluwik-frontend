// src/components/pages/offer/TerraceRoofingOffer.tsx
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { Umbrella } from "lucide-react";

const TerraceRoofingOffer = () => {
  const relatedOffers = [
    offers[3], // Ogrody zimowe
    offers[5], // Okna przesuwane
    offers[4], // Systemy drzwi przesuwanych
    offers[0], // Drzwi aluminiowe
  ];

  return (
    <OfferPageTemplate
      title="Zadaszenia tarasów"
      highlightWords={["tarasów"]}
      imageSrc="/img/zadaszenia-tarasow.webp"
      imageAlt="Zadaszenie tarasu"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: Umbrella,
          title: "Zalety zadaszeń",
          items: [
            "Ochrona przed deszczem, śniegiem i nadmiernym słońcem",
            "Zwiększenie komfortu użytkowania tarasu",
            "Estetyczne dopełnienie architektury budynku",
            "Możliwość całorocznego korzystania z przestrzeni zewnętrznej",
          ],
        },
        {
          icon: Umbrella,
          title: "Rodzaje konstrukcji",
          items: [
            "Pergole tarasowe",
            "Daszki szklane",
            "Konstrukcje żaluzjowe",
            "Markizy i warianty wolnostojące",
          ],
        },
      ]}
      sections={[
        {
          heading: "Wysoka jakość i trwałość",
          content:
            "Zadaszenia tarasów to nie tylko funkcjonalność, ale również estetyka. Nasze konstrukcje wykonywane są z solidnych, odpornych na warunki atmosferyczne materiałów, co gwarantuje ich trwałość na lata.",
        },
        {
          heading: "Rozwiązania dopasowane do Twoich potrzeb",
          content: [
            "Oferujemy zarówno modele stacjonarne, jak i ruchome – dostosowane do indywidualnych preferencji oraz warunków technicznych budynku.",
            "W naszej ofercie znajdują się również konstrukcje, które nie muszą być montowane przy elewacji – doskonale sprawdzą się jako zadaszenie ogrodu.",
            "Dzięki szerokiemu wyborowi systemów i wariantów kolorystycznych możesz stworzyć taras idealnie dopasowany do swojego otoczenia.",
          ],
        },
        {
          heading: "Zadaszenie jako element dekoracyjny",
          content:
            "Odpowiednio dobrane zadaszenie wpływa na całościowy wygląd posesji i dodaje jej charakteru. To inwestycja nie tylko w wygodę, ale też w estetykę.",
        },
        {
          heading: "Działamy lokalnie i poza granicami",
          content:
            "Nasza siedziba mieści się w woj. pomorskim, ale chętnie realizujemy zlecenia na terenie całej Polski oraz za granicą. Oferujemy kompleksową obsługę: projekt, dobór konstrukcji oraz montaż.",
        },
      ]}
    />
  );
};

export default TerraceRoofingOffer;
