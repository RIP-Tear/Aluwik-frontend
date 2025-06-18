import React from "react";
import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import MainText from "@/components/organisms/home-page/MainText";
import AboutUs from "@/components/organisms/home-page/AboutUs";
import OfferCards from "@/components/organisms/home-page/OfferCards";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import RealizationPreview from "@/components/organisms/realization-preview/RealizationPreview";

const HomeTemplate = () => {
  useGsapFadeInSections();

  return (
    <div>
      <MainText />
      <AboutUs />
      <OfferCards />
      <RealizationPreview />
      <ContactHero />
    </div>
  );
};

export default HomeTemplate;
