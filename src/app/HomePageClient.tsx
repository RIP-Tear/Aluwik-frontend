"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import HomeTemplate from "@/templates/HomeTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/components/seo/schemas";
// import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

const faqData = [
  {
    question: "Jakie produkty oferuje ALUWIK?",
    answer:
      "ALUWIK oferuje kompleksową stolarką aluminiową: okna aluminiowe, drzwi aluminiowe, fasady, ogrody zimowe, pergole, systemy przesuwne, świetliki dachowe oraz drzwi przeciwpożarowe. Wszystkie produkty wykonujemy z profili Aluprof i Ponzio.",
  },
  {
    question: "Czy ALUWIK montuje okna i drzwi aluminiowe?",
    answer:
      "Tak, ALUWIK oferuje kompleksową usługę obejmującą produkcję i profesjonalny montaż wszystkich produktów. Nasz zespół zapewnia fachowe wykonanie i gwarancję jakości.",
  },
  {
    question: "Gdzie znajduje się siedziba firmy ALUWIK?",
    answer:
      "ALUWIK znajduje się w Tczewie przy Alei Solidarności 8, 83-110 Tczew, województwo pomorskie. Obsługujemy klientów w całym regionie pomorskim i nie tylko.",
  },
  {
    question: "Jakie profile aluminiowe używa ALUWIK?",
    answer:
      "Wykorzystujemy renomowane systemy profili aluminiowych Aluprof oraz Ponzio, które gwarantują najwyższą jakość, trwałość i doskonałe parametry izolacyjne.",
  },
  {
    question: "Jak mogę zamówić wycenę w ALUWIK?",
    answer:
      "Wycenę możesz zamówić telefonicznie pod numerami: 609 604 571 lub 886 347 417, mailowo na biuro.aluwik@gmail.com lub poprzez formularz kontaktowy na stronie www.aluwik.pl/kontakt/",
  },
];

export default function HomePageClient() {
  const faqSchema = createFAQSchema(faqData);

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* <HolidayNavbar /> */}
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <HomeTemplate />
      <Footer />
    </>
  );
}
