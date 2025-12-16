import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <PageSection className="mb-10 sm:mb-[100px]">
      <Heading
        label={"Regulamin i warunki korzystania"}
        size={36}
        className="text-start mb-5 sm:mb-[50px]"
        as="h2"
        highlightWords={["warunki"]}
      />
      <div className="max-w-[800px]">
        <h3 className="mt-6 text-xl font-semibold text-gray-900">1. Postanowienia ogólne</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Niniejszy regulamin określa zasady korzystania z serwisu internetowego{" "}
          <strong>aluwik.pl</strong> (dalej: „Serwis”). Korzystając z Serwisu, akceptujesz
          postanowienia Regulaminu.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">2. Dane właściciela Serwisu</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Właścicielem Serwisu jest:{" "}
          <strong>
            PRZEDSIĘBIORSTWO USŁUGOWO HANDLOWE „ALUWIK” TECHNOLOGIA ALUMINIOWA KRZYSZTOF WAŚNIEWSKI
          </strong>
          , z siedzibą: <strong>al. Solidarności 8, 83-110 Tczew, woj. pomorskie</strong>, NIP:{" "}
          <strong>5931110940</strong>, REGON: <strong>364025475</strong>. Kontakt:{" "}
          <a href="mailto:biuro@aluwik.pl" className="text-orangeAccent underline cursor-active">
            biuro@aluwik.pl
          </a>
          , tel.{" "}
          <a href="tel:+48609604571" className="text-orangeAccent underline cursor-active">
            609 604 571
          </a>
          , strona:{" "}
          <a
            href="https://aluwik.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orangeAccent underline cursor-active"
          >
            aluwik.pl
          </a>
          .
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">3. Zakres i charakter usług</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Serwis ma charakter informacyjny: prezentuje ofertę stolarki aluminiowej, realizacje oraz
          umożliwia kontakt poprzez formularz i dane kontaktowe. Serwis nie stanowi sklepu
          internetowego.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">4. Warunki korzystania</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Do korzystania wymagane jest urządzenie z dostępem do Internetu oraz aktualna
            przeglądarka.
          </li>
          <li>
            Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z prawem, bez dostarczania
            treści bezprawnych, obraźliwych lub naruszających prawa osób trzecich.
          </li>
          <li>
            Zakazane jest podejmowanie działań mogących zakłócić działanie Serwisu (np. próby
            włamań, skrypty automatyzujące).
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          5. Zapytania ofertowe i treści Użytkownika
        </h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700">
          <li>Dane podawane w formularzach powinny być prawdziwe i aktualne.</li>
          <li>
            Wysłanie zapytania nie stanowi zawarcia umowy. Odpowiedzi mają charakter informacyjny do
            czasu podpisania umowy/akceptacji oferty na odrębnych warunkach.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          6. Prawa własności intelektualnej
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Wszelkie treści Serwisu (teksty, grafiki, zdjęcia, znaki towarowe, układ) są chronione
          prawem i stanowią własność Właściciela lub podmiotów współpracujących. Zabronione jest ich
          kopiowanie i rozpowszechnianie bez zgody, poza dozwolonym użytkiem przewidzianym
          przepisami.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">7. Odpowiedzialność</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Właściciel dokłada starań, aby informacje w Serwisie były aktualne i rzetelne, jednak
            nie gwarantuje ich pełnej poprawności i kompletności.
          </li>
          <li>
            Właściciel nie ponosi odpowiedzialności za niedostępność Serwisu spowodowaną siłą
            wyższą, awariami lub pracami technicznymi.
          </li>
          <li>
            Serwis może zawierać odnośniki do stron zewnętrznych – Właściciel nie odpowiada za ich
            treść ani polityki.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          8. Reklamacje dotyczące działania Serwisu
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Uwagi lub reklamacje związane z funkcjonowaniem Serwisu można zgłaszać na adres:{" "}
          <a href="mailto:biuro@aluwik.pl" className="text-orangeAccent underline cursor-active">
            biuro@aluwik.pl
          </a>
          . W zgłoszeniu opisz problem i podaj dane kontaktowe. Reklamacje rozpatrujemy w terminie
          do 14 dni roboczych.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          9. Ochrona danych osobowych i cookies
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Zasady przetwarzania danych oraz wykorzystywania plików cookies opisuje{" "}
          <Link href="/polityka-prywatnosci" className="text-orangeAccent underline cursor-active">
            Polityka prywatności
          </Link>
          , stanowiąca integralną część niniejszego Regulaminu.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">10. Zmiany Regulaminu</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Właściciel zastrzega prawo do zmiany Regulaminu. Zmiany obowiązują od momentu publikacji z
          aktualną datą. Korzystanie z Serwisu po zmianach oznacza akceptację nowej treści.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          11. Prawo właściwe i jurysdykcja
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Do niniejszego Regulaminu stosuje się prawo polskie. Ewentualne spory będą rozstrzygane
          przez właściwy sąd powszechny miejscowo dla siedziby Właściciela.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">12. Kontakt</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          W sprawach dotyczących Serwisu:{" "}
          <a href="mailto:biuro@aluwik.pl" className="text-orangeAccent underline cursor-active">
            biuro@aluwik.pl
          </a>
          , tel.{" "}
          <a href="tel:+48609604571" className="text-orangeAccent underline cursor-active">
            609 604 571
          </a>
          .
        </p>
        <p className="text-sm text-gray-600 mt-10">
          <strong className="font-semibold text-gray-800">Data publikacji:</strong> 12.08.2025
        </p>
      </div>
    </PageSection>
  );
};

export default TermsAndConditions;
