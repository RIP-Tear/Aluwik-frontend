"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import { offerPages } from "@/utils/offerPages";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

type Props = {
  slug: string;
};

export default function OfferDetailClient({ slug }: Props) {
  const offer = offerPages[slug];

  if (!offer) {
    notFound();
  }

  const OfferComponent = offer.component;

  return (
    <>
      <HolidayNavbar />
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
