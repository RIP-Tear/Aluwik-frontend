import React from "react";
import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import AboutUs from "@/components/organisms/home-page/AboutUs";
import OfferCards from "@/components/organisms/home-page/OfferCards";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import RealizationPreview from "@/components/organisms/home-page/RealizationPreview";
import HeroText from "@/components/molecules/hero-text/HeroText";

const HomeTemplate = () => {
  useGsapFadeInSections();

  return (
    <div>
      <HeroText
        label="Jesteśmy producentem aluminiowej
          stolarki okiennej"
        highlightWords={["aluminiowej"]}
      />
      <AboutUs />
      <OfferCards />
      <RealizationPreview />
      <ContactHero />
    </div>
  );
};

export default HomeTemplate;
