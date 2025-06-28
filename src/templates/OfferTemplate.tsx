import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";
import HeroText from "@/components/molecules/hero-text/HeroText";
import { offerBg } from "@/utils/images/offerBg";
import dynamic from "next/dynamic";

const OfferTemplate = () => {
  const PreviewOffers = dynamic(() => import("@/components/organisms/offer-page/PreviewOffers"), {
    ssr: false,
  });
  return (
    <div>
      <HeroText label="Zapoznaj się z naszą ofertą" highlightWords={["ofertą"]} />
      <HeroDescription
        image={offerBg}
        text="Gwarantujemy różnorodne rozwiązania – począwszy od drzwi i okien z aluminium (także dachowych i przesuwanych), przez fasady, dachy ze szkła, kończąc na ściankach aluminiowych. Posiadamy w swojej ofercie systemy ogrodów zimowych oraz stolarkę przeciwpożarową.
Jako producent stolarki aluminiowej używamy wyłącznie sprawdzonych profilów renomowanych firm w branży. Umożliwiamy stworzenie projektów wykonanych o Twoje koncepcje, jednakże wykonujemy również własne propozycje stworzone przez specjalistów ściśle wyedukowanych w tej dziedzinie, działających na rynku od wielu lat."
      />
      <PreviewOffers />
    </div>
  );
};

export default OfferTemplate;
