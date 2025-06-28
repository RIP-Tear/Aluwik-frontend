"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/components/molecules/hero-text/HeroText";
import AboutUs from "@/components/organisms/home-page/AboutUs";
import OfferCards from "@/components/organisms/home-page/OfferCards";

const RealizationPreview = dynamic(
  () => import("@/components/organisms/home-page/RealizationPreview"),
);
const BlogSection = dynamic(() => import("@/components/organisms/home-page/BlogSection"), {
  ssr: false,
});
const ContactHero = dynamic(() => import("@/components/organisms/home-page/ContactHero"), {
  ssr: false,
});

const HomeTemplate = () => {
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
      <BlogSection />
      <ContactHero />
    </div>
  );
};

export default HomeTemplate;
