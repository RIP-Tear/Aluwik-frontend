import HeroText from "@/components/molecules/hero-text/HeroText";
import PreviewOffers from "@/components/organisms/offer-page/PreviewOffers";

const OfferTemplate = () => {
  return (
    <div>
      <HeroText label="Zapoznaj się z naszą ofertą" highlightWords={["ofertą"]} />
      <PreviewOffers />
    </div>
  );
};

export default OfferTemplate;
