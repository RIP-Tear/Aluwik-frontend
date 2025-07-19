import OfferPageTemplate from "@/components/molecules/offer-page-template/OfferPageTemplate";
import { offers } from "@/utils/mock/offers";
import { ThermometerSnowflake, Ruler, Blocks, Building2, MapPin } from "lucide-react";

const FacadesOffer = () => {
  const relatedOffers = [
    offers[0], // Drzwi aluminiowe
    offers[1], // Okna aluminiowe
    offers[6], // Ściany oddzielenia przeciwpożarowego
    offers[4], // Systemy drzwi przesuwanych
  ];

  const boxes = [
    {
      icon: ThermometerSnowflake,
      title: "Efektywność energetyczna",
      items: [
        "Wysoka izolacja termiczna",
        "Redukcja hałasu zewnętrznego",
        "Ochrona przed warunkami atmosferycznymi",
      ],
    },
    {
      icon: Ruler,
      title: "Indywidualne dopasowanie",
      items: [
        "Profile ALUPROF i PONZIO",
        "Możliwość tworzenia przeszklonych dachów i elewacji",
        "Systemy do odważnych wizji architektów",
      ],
    },
    {
      icon: Blocks,
      title: "Różnorodne systemy",
      items: [
        "Słupowo-ryglowe MB-TT50, MB-SR50N",
        "Systemy szklenia strukturalnego MB-SG50",
        "Ściany elementowe MB-SE75",
      ],
    },
    {
      icon: Building2,
      title: "Kompleksowa obsługa",
      items: [
        "Doradztwo projektowe",
        "Profesjonalny montaż w Polsce i za granicą",
        "Serwis i wsparcie techniczne",
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
      heading: "Nowoczesne aluminiowe systemy fasadowe",
      content:
        "Systemy fasadowe to idealne rozwiązanie dla budynków wymagających podwyższonej efektywności energetycznej. Ich konstrukcja poprawia izolację termiczną, ogranicza hałas i chroni elewację przed niekorzystnymi warunkami atmosferycznymi, a jednocześnie nadaje obiektom elegancki, nowoczesny wygląd.",
    },
    {
      heading: "Dlaczego warto postawić na nasze fasady aluminiowe?",
      content: [
        "Solidność i trwałość potwierdzone certyfikatami",
        "Estetyka dopasowana do współczesnych projektów architektonicznych",
        "Energooszczędne parametry dla budownictwa pasywnego",
        "Możliwość realizacji od koncepcji po montaż w całej Polsce i za granicą",
      ],
    },
    {
      heading: "Najpopularniejsze systemy ALUPROF",
      content: [
        "<strong>MB-TT50</strong> – najwyższa izolacyjność dla budynków energooszczędnych i pasywnych.",
        "<strong>MB-SR50N</strong> – wszechstronny system słupowo-ryglowy z wersjami HI/HI+ oraz opcjami linii pionowej, poziomej i efektu półstrukturalnego.",
        "<strong>MB-SG50 / MB-SG50 SEM</strong> – systemy szklenia (semi)strukturalnego nadające fasadzie prestiżowy wygląd szklanej tafli.",
        "<strong>EXTRABOND</strong> – ściana wentylowana z okładzinami elewacyjnymi zapewniająca wysoką estetykę i doskonałą termoizolację.",
        "<strong>MB-SE75</strong> – ściana elementowa, umożliwiająca szybki montaż modułowych paneli zgodnie z indywidualnymi założeniami projektanta.",
      ],
    },
    {
      heading: "Zaufaj doświadczeniu",
      content:
        "Zapewniamy profesjonalne wsparcie na każdym etapie inwestycji – od doboru odpowiedniego systemu fasadowego, przez przygotowanie dokumentacji technicznej, aż po precyzyjny montaż. Skontaktuj się z nami, aby uzyskać szczegółową wycenę oraz dopasowaną ofertę dla Twojego projektu.",
    },
  ];

  return (
    <OfferPageTemplate
      title="Fasady aluminiowe"
      highlightWords={["Fasady"]}
      imageSrc="/img/fasady.webp"
      imageAlt="Fasady aluminiowe dla obiektów komercyjnych – ALUWIK Tczew"
      boxes={boxes}
      sections={sections}
      relatedOffers={relatedOffers}
    />
  );
};

export default FacadesOffer;
