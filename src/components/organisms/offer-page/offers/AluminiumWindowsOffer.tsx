import { AppWindow } from "lucide-react";

import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";

const AluminiumWindowsOffer = () => {
  const relatedOffers = [
    offers[0], // Drzwi aluminiowe
    offers[2], // Fasady
    offers[5], // Okna przesuwane
    offers[3], // Ogrody zimowe
  ];

  return (
    <OfferPageTemplate
      title="Okna aluminiowe"
      highlightWords={["aluminiowe"]}
      imageSrc="/img/okna-aluminiowe.webp"
      imageAlt="Okna aluminiowe Pomorskie – energooszczędna stolarka ALUWIK"
      relatedOffers={relatedOffers}
      boxes={[
        {
          icon: AppWindow,
          title: "Dlaczego warto?",
          items: [
            "Trwałość i solidność na lata",
            "Odporność na deszcz, śnieg i zmienne warunki atmosferyczne",
            "Łatwość w pielęgnacji i konserwacji",
          ],
        },
        {
          icon: AppWindow,
          title: "Cechy produktu",
          items: [
            "Szczelność dzięki nowoczesnym uszczelkom i systemom nawiewnym",
            "Uniwersalne zastosowanie w różnych typach budynków",
            "Kompatybilność z wieloma stylami wnętrz i elewacji",
            "Bezpieczeństwo potwierdzone certyfikatami",
          ],
        },
      ]}
      sections={[
        {
          heading: "Wysokiej jakości okna aluminiowe",
          content:
            "Szukasz trwałych i estetycznych rozwiązań dla budynku mieszkalnego lub firmy? Nasze okna aluminiowe łączą wysoką jakość wykonania z nowoczesnym wyglądem. Pomimo siedziby w woj. pomorskim, realizujemy zamówienia w całej Polsce i za granicą.",
        },
        {
          heading: "Wszechstronne i praktyczne",
          content: [
            "Szczelność – dzięki specjalnym uszczelkom oraz systemom nawiewnym zapewniającym cyrkulację powietrza.",
            "Praktyczność – idealne do pomieszczeń gospodarczych, przemysłowych i prywatnych.",
            "Uniwersalność – kompatybilne z różnymi aranżacjami i elewacjami.",
            "Funkcjonalność i bezpieczeństwo – produkcja zgodna z normami i certyfikatami jakości.",
          ],
        },
      ]}
    />
  );
};

export default AluminiumWindowsOffer;
