import React from "react";

import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import HeroText from "@/components/molecules/hero-text/HeroText";
import InformationContact from "@/components/organisms/contact-page/InformationContact";
import FormContact from "@/components/organisms/contact-page/FormContact";
import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";
import { contactBg } from "@/utils/images/contactBg";

const ContactTemplate = () => {
  useGsapFadeInSections();

  return (
    <>
      <HeroText label="Skontaktuj się z nami" highlightWords={["nami"]} />
      <HeroDescription
        image={contactBg}
        text="Jesteśmy do Twojej dyspozycji
Masz pytania dotyczące naszej oferty, współpracy lub realizacji? Skontaktuj się z nami telefonicznie, mailowo lub przez formularz kontaktowy. Odpowiadamy szybko i rzeczowo – chętnie doradzimy i pomożemy w wyborze najlepszego rozwiązania."
      />
      <InformationContact />
      <FormContact />
    </>
  );
};

export default ContactTemplate;
