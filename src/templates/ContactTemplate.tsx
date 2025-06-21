import React from "react";

import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import HeroText from "@/components/molecules/hero-text/HeroText";
import InformationContact from "@/components/organisms/contact-page/InformationContact";
import FormContact from "@/components/organisms/contact-page/FormContact";

const ContactTemplate = () => {
  useGsapFadeInSections();

  return (
    <>
      <HeroText label="Skontaktuj się z nami" highlightWords={["nami"]} />
      <InformationContact />
      <FormContact />
    </>
  );
};

export default ContactTemplate;
