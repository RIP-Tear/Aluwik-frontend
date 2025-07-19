// src/components/pages/offer/FirePartitionWallsOffer.tsx
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { Flame } from "lucide-react";

const FirePartitionWallsOffer = () => {
  const relatedOffers = [
    offers[7], // Drzwi przeciwpożarowe
    offers[2], // Fasady
    offers[0], // Drzwi aluminiowe
    offers[1], // Okna aluminiowe
  ];

  return (
    <OfferPageTemplate
      title="Ściany oddzielenia przeciwpożarowego"
      highlightWords={["przeciwpożarowego"]}
      imageSrc="/img/sciany-oddzielenia-przeciwpozarowego.webp"
      imageAlt="Ściany przeciwpożarowe EI30–EI120 – ALUWIK Tczew – zabezpieczenia budynków"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: Flame,
          title: "Główne cechy",
          items: [
            "Odporność ogniowa w klasach EI30, EI60, EI120",
            "Potwierdzona jakość i certyfikaty",
            "Solidność i trwałość konstrukcji",
            "Przeznaczone do budynków mieszkalnych, przemysłowych i użyteczności publicznej",
          ],
        },
        {
          icon: Flame,
          title: "Funkcje ścian przeciwpożarowych",
          items: [
            "Ograniczanie rozprzestrzeniania się ognia",
            "Ochrona konstrukcji budynku",
            "Działanie jako zapora przeciwdymna",
            "Ułatwienie ewakuacji i działań służb ratunkowych",
          ],
        },
      ]}
      sections={[
        {
          heading: "Solidne i certyfikowane rozwiązania",
          content:
            "Ściany oddzielenia przeciwpożarowego dostępne w naszej ofercie to gwarancja trwałości i niezawodności. Podobnie jak drzwi ppoż., wykonane są zgodnie z obowiązującymi normami i posiadają wymagane certyfikaty jakości. Ich montaż pozwala znacznie zwiększyć poziom bezpieczeństwa użytkowników budynku.",
        },
        {
          heading: "Obowiązek i potrzeba – gdzie stosować?",
          content: [
            "Zgodnie z przepisami prawa ściany przeciwpożarowe są wymagane m.in. w budynkach przemysłowych, użyteczności publicznej oraz w zabudowie mieszkaniowej.",
            "Ich instalacja jest kluczowa dla stworzenia bezpiecznych stref pożarowych, szczególnie w przypadku obiektów wielkopowierzchniowych.",
            "Jedynym wyjątkiem od wymogu są budynki jednorodzinne, jednak także tam warto rozważyć ich zastosowanie w trosce o bezpieczeństwo.",
          ],
        },
        {
          heading: "Kluczowe funkcje dla ochrony życia i mienia",
          content: [
            "Ściany ograniczają rozprzestrzenianie się ognia i dymu, umożliwiając bezpieczną ewakuację oraz szybsze działanie służb ratowniczych.",
            "Chronią konstrukcję budynku i pozwalają na wydzielenie stref o różnym poziomie ryzyka pożarowego.",
          ],
        },
        {
          heading: "Działamy nie tylko lokalnie",
          content:
            "Choć nasza siedziba znajduje się na Pomorzu, oferujemy doradztwo i montaż ścian przeciwpożarowych także w innych częściach kraju. Zapraszamy do kontaktu — pomożemy dobrać odpowiednie rozwiązanie dla Twojej inwestycji.",
        },
      ]}
    />
  );
};

export default FirePartitionWallsOffer;
