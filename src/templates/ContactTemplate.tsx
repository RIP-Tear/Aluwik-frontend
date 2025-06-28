import React from "react";

import HeroText from "@/components/molecules/hero-text/HeroText";
import InformationContact from "@/components/organisms/contact-page/InformationContact";
import FormContact from "@/components/organisms/contact-page/FormContact";
import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";

const ContactTemplate = () => {
  return (
    <>
      <HeroText label="Skontaktuj się z nami" highlightWords={["nami"]} />
      <HeroDescription
        image="/backgrounds/contactBg.webp"
        text="Jesteśmy do Twojej dyspozycji
Masz pytania dotyczące naszej oferty, współpracy lub realizacji? Skontaktuj się z nami telefonicznie, mailowo lub przez formularz kontaktowy. Odpowiadamy szybko i rzeczowo – chętnie doradzimy i pomożemy w wyborze najlepszego rozwiązania."
      />
      <InformationContact />
      <FormContact />
    </>
  );
};

export default ContactTemplate;
