import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import RealizationTemplate from "@/templates/RealizationTemplate";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function RealizationPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Nasze realizacje – okna, drzwi i fasady aluminiowe"
        description="Zobacz wybrane realizacje ALUWIK. Montujemy nowoczesne okna, drzwi, fasady i ogrody zimowe z aluminium. Projekty dla domów jednorodzinnych, firm i instytucji publicznych."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <RealizationTemplate />
      <ContactHero />
      <Footer />
    </>
  );
}
