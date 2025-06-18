import React from "react";
import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import MainText from "@/components/organisms/home-page/main-text/MainText";
import AboutUs from "@/components/organisms/home-page/about-us/AboutUs";
import OfferCards from "@/components/organisms/home-page/offer-cards/OfferCards";
import ContactHero from "@/components/organisms/home-page/contact-hero/ContactHero";
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
