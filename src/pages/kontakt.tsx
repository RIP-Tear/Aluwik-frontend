import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import ContactTemplate from "@/templates/ContactTemplate";
import { Footer } from "@/components/molecules/footer/Footer";

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Kontakt z producentem stolarki aluminiowej"
        description="Skontaktuj się z ALUWIK – producentem stolarki aluminiowej. Odpowiemy na pytania dotyczące naszej oferty: okien, drzwi, fasad i ogrodów zimowych. Jesteśmy dostępni telefonicznie, mailowo i przez formularz kontaktowy."
      />
      <Navbar />
      <ContactTemplate />
      <Footer />
    </>
  );
}
