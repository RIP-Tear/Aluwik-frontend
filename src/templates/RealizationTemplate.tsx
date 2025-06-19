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
      <CategoryPreviewRealization />
    </div>
  );
};

export default RealizationTemplate;
