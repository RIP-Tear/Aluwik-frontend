import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";
import HeroText from "@/components/molecules/hero-text/HeroText";
import CategoryPreviewRealization from "@/components/organisms/realization-page/CategoryPreviewRealization";

const RealizationTemplate = () => {
  return (
    <div>
      <HeroText
        label="Zapoznaj się z naszymi
realizacjami"
        highlightWords={["realizacjami"]}
      />
      <HeroDescription
        image="/backgrounds/realizationBg.webp"
        text="Zobacz nasze realizacje – jakość, która mówi sama za siebie
Nasze projekty to połączenie precyzji wykonania, trwałych materiałów i estetyki. W tej sekcji prezentujemy wybrane realizacje, które najlepiej pokazują możliwości technologii aluminiowej w praktyce – od nowoczesnych fasad i ogrodów zimowych, po funkcjonalne drzwi i okna. Zainspiruj się i przekonaj się, jak możemy odmienić również Twoją przestrzeń."
      />
      <CategoryPreviewRealization />
    </div>
  );
};

export default RealizationTemplate;
