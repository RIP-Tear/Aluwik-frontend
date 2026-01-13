"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import { offerPages } from "@/utils/offerPages";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";
import { createProductSchema, createServiceSchema } from "@/components/seo/schemas";
// import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

type Props = {
  slug: string;
};

export default function OfferDetailClient({ slug }: Props) {
  const offer = offerPages[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!offer) {
    notFound();
  }

  const OfferComponent = offer.component;

  // Generuj schema dla produktu
  const productSchema = createProductSchema({
    name: offer.title,
    description: offer.description,
    image: `/img/${slug}.webp`,
    url: `/oferta/${slug}/`,
  });

  // Generuj schema dla usługi
  const serviceSchema = createServiceSchema({
    name: `Produkcja i montaż - ${offer.title}`,
    description: offer.description,
    url: `/oferta/${slug}/`,
  });

  // Breadcrumbs schema (tylko dla SEO, bez renderowania)
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Strona główna", url: "https://www.aluwik.pl/" },
    { name: "Oferta", url: "https://www.aluwik.pl/oferta/" },
    { name: offer.title, url: `https://www.aluwik.pl/oferta/${slug}/` },
  ]);

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* <HolidayNavbar /> */}
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <OfferComponent />
      <ContactHero />
      <Footer />
    </>
  );
}
