// src/components/pages/offer/FireDoorsOffer.tsx
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { Shield } from "lucide-react";

const FireDoorsOffer = () => {
  const relatedOffers = [
    offers[6], // Ściany oddzielenia przeciwpożarowego
    offers[0], // Drzwi aluminiowe
    offers[1], // Okna aluminiowe
    offers[2], // Fasady
  ];

  return (
    <OfferPageTemplate
      title="Drzwi przeciwpożarowe"
      highlightWords={["przeciwpożarowe"]}
      imageSrc="/img/drzwi-przeciwpozarowe.webp"
      imageAlt="Drzwi przeciwpożarowe"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: Shield,
          title: "Rodzaje drzwi",
          items: [
            "Jednoskrzydłowe i dwuskrzydłowe",
            "Różne poziomy odporności ogniowej: EI30, EI60, EI120",
            "Modele aluminiowe i stalowe",
            "Warianty przeszklone i przesuwne",
            "Bogata gama kolorystyczna i parametrów technicznych",
          ],
        },
        {
          icon: Shield,
          title: "Bezpieczeństwo i funkcjonalność",
          items: [
            "Zgodność z normą PN-EN 1634-1",
            "Systemy samozamykające i blokujące otwarcie w razie pożaru",
            "Specjalne uszczelki dymoszczelne",
            "Chronią przed rozprzestrzenianiem się ognia i dymu",
            "Zwiększają czas ewakuacji i ochronę mienia",
          ],
        },
      ]}
      sections={[
        {
          heading: "Certyfikowane bezpieczeństwo w każdej sytuacji",
          content: `Drzwi przeciwpożarowe stanowią kluczowy element ochrony przeciwpożarowej w budynkach przemysłowych, użyteczności publicznej, jak i prywatnych. Wykonywane zgodnie z normą PN-EN 1634-1, są nieodzowne w miejscach, gdzie liczy się bezpieczeństwo ludzi oraz mienia.`,
        },
        {
          heading: "Szeroka oferta – dopasowana do potrzeb",
          content: [
            "Oferujemy szeroki wybór drzwi przeciwpożarowych – od jednoskrzydłowych po dwuskrzydłowe, w wersjach aluminiowych i stalowych.",
            "Dostępne modele posiadają różne klasy odporności ogniowej – EI30, EI60, EI120.",
            "Możliwość wyboru wariantów przeszklonych i przesuwnych, dopasowanych do estetyki wnętrz i elewacji.",
          ],
        },
        {
          heading: "Funkcjonalność i ochrona na najwyższym poziomie",
          content: [
            "Drzwi wyposażone są w specjalne uszczelki zapobiegające przedostawaniu się dymu.",
            "Systemy samozamykające oraz mechanizmy blokujące drzwi w razie pożaru zwiększają bezpieczeństwo użytkowników.",
            "Solidna konstrukcja pozwala na montaż zarówno w nowych inwestycjach, jak i przy modernizacji istniejących obiektów.",
          ],
        },
        {
          heading: "Doradztwo i montaż na terenie Pomorza",
          content: `Oferujemy kompleksową pomoc w doborze drzwi przeciwpożarowych, a także profesjonalny montaż. Działamy głównie na terenie województwa pomorskiego, ale jesteśmy otwarci na współpracę także z Klientami z innych regionów.`,
        },
      ]}
    />
  );
};

export default FireDoorsOffer;
