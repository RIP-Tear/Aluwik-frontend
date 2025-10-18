import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import React from "react";

type HeroTextProps = {
  label: string;
  highlightWords?: string[];
};

const HeroText: React.FC<HeroTextProps> = ({ label, highlightWords }) => {
  return (
    <PageSection>
      <Heading label={label} className="text-left" highlightWords={highlightWords} as="h1" />
    </PageSection>
  );
};

export default HeroText;
