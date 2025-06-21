// src/components/pages/offer/SlidingWindowsOffer.tsx
import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { MoveHorizontal } from "lucide-react";

const SlidingWindowsOffer = () => {
  return (
    <OfferPageTemplate
      title="Okna przesuwane"
      highlightWords={["przesuwane"]}
      imageSrc="/img/okna-przesuwane.webp"
      imageAlt="Okna przesuwane"
      boxes={[
        {
          icon: MoveHorizontal,
          title: "Zalety okien przesuwnych",
          items: [
            "Oszczędność przestrzeni — idealne do mniejszych pomieszczeń",
            "Płynna, bezawaryjna praca dzięki prowadnicom",
            "Estetyczny wygląd i dopasowanie do różnych aranżacji",
            "Solidne wykonanie zgodne z obowiązującymi normami",
          ],
        },
        {
          icon: MoveHorizontal,
          title: "Zastosowanie",
          items: [
            "Balkony, tarasy, altany, loggie, werandy",
            "Pomieszczenia mieszkalne i użytkowe",
            "Wnętrza o ograniczonym metrażu",
            "Nowoczesne i klasyczne aranżacje",
          ],
        },
      ]}
      sections={[
        {
          heading: "Funkcjonalność i estetyka",
          content:
            "Okna przesuwne stanowią doskonałe połączenie komfortu użytkowania z atrakcyjnym wyglądem. Świetnie sprawdzają się zarówno w nowoczesnych, jak i tradycyjnych aranżacjach — ich uniwersalność wizualna sprawia, że łatwo wpasowują się w każde wnętrze.",
        },
        {
          heading: "Doskonałe rozwiązanie na lata",
          content: [
            "Nasze okna wykonywane są z trwałych materiałów i spełniają rygorystyczne normy jakościowe.",
            "Każdy etap produkcji podlega kontroli, co przekłada się na niezawodność oraz długowieczność produktów.",
            "System przesuwny eliminuje konieczność posiadania przestrzeni do uchylenia skrzydła — idealne w mniejszych pomieszczeniach.",
          ],
        },
        {
          heading: "Energooszczędność",
          content:
            "Nowoczesne systemy przesuwnych okien oferują bardzo dobre parametry izolacyjności termicznej, co przekłada się na niższe rachunki za ogrzewanie i większy komfort użytkowania przez cały rok.",
        },
        {
          heading: "Działamy na terenie całej Polski i za granicą",
          content:
            "Choć działamy lokalnie w Tczewie i na Pomorzu, nasze produkty dostępne są dla klientów z całej Polski oraz klientów zagranicznych. Zapewniamy kompleksową obsługę — od doradztwa, przez wykonanie, aż po montaż.",
        },
      ]}
    />
  );
};

export default SlidingWindowsOffer;
