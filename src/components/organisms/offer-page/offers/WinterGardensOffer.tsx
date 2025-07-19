// src/components/pages/offer/WinterGardensOffer.tsx
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { SunSnow } from "lucide-react";

const WinterGardensOffer = () => {
  const relatedOffers = [
    offers[1], // Okna aluminiowe
    offers[5], // Okna przesuwane
    offers[8], // Zadaszenia tarasów
    offers[0], // Drzwi aluminiowe
  ];

  return (
    <OfferPageTemplate
      title="Ogrody zimowe"
      highlightWords={["zimowe"]}
      imageSrc="/img/ogrody-zimowe.webp"
      imageAlt="Ogród zimowy"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: SunSnow,
          title: "Zalety ogrodów zimowych",
          items: [
            "Kontakt z naturą przez cały rok",
            "Idealna przestrzeń do relaksu, pracy lub uprawy roślin",
            "Możliwość ogrzewania konstrukcji",
            "Zwiększenie wartości nieruchomości",
          ],
        },
        {
          icon: SunSnow,
          title: "Różne warianty wykonania",
          items: [
            "Konstrukcje przylegające i wolnostojące",
            "Szkielet aluminiowy, drewniany, stalowy lub PCV",
            "Profile zimne lub izolowane termicznie",
            "Zgodność z nowoczesnym stylem architektury",
          ],
        },
      ]}
      sections={[
        {
          heading: "Przestrzeń funkcjonalna i estetyczna",
          content:
            "Ogrody zimowe to doskonały sposób na stworzenie nowej przestrzeni użytkowej w domu lub lokalu. Sprawdzą się zarówno jako oranżeria, jak i miejsce spotkań rodzinnych czy przyjęć okolicznościowych.",
        },
        {
          heading: "Wszechstronne zastosowanie",
          content: [
            "Świetnie sprawdzają się jako domowe biuro, miejsce wypoczynku, przestrzeń gastronomiczna czy showroom dla firm.",
            "Oferujemy różnorodne rozwiązania techniczne – od prostych projektów po nowoczesne oranżerie z ogrzewaniem i izolacją akustyczną.",
          ],
        },
        {
          heading: "Inwestycja na lata",
          content:
            "Dobrze zaprojektowany i wykonany ogród zimowy może służyć przez wiele sezonów, podnosząc jednocześnie wartość nieruchomości. Nasze konstrukcje powstają z trwałych i estetycznych materiałów, z dbałością o każdy detal.",
        },
        {
          heading: "Montaż na terenie całego Pomorza",
          content:
            "Siedziba naszej firmy mieści się w woj. pomorskim, jednak realizujemy projekty na terenie całego regionu. Gwarantujemy profesjonalne doradztwo, projekt oraz sprawny montaż konstrukcji.",
        },
      ]}
    />
  );
};

export default WinterGardensOffer;
