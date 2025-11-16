import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <PageSection className="mb-10 sm:mb-[100px]">
      <Heading
        label={"Polityka prywatności i cookies"}
        size={36}
        className="text-start mb-5 sm:mb-[50px]"
        as="h2"
        highlightWords={["prywatności"]}
      />
      <div className="max-w-[800px]">
        <h3 className="mt-6 text-xl font-semibold text-gray-900">1. Administrator danych</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Administratorem Twoich danych osobowych jest{" "}
          <strong>
            PRZEDSIĘBIORSTWO USŁUGOWO HANDLOWE „ALUWIK” TECHNOLOGIA ALUMINIOWA KRZYSZTOF WAŚNIEWSKI
          </strong>
          , adres: <strong>al. Solidarności 8, 83-110 Tczew, Polska</strong>, NIP:{" "}
          <strong>5931110940</strong>, REGON: <strong>364025475</strong>. Kontakt:{" "}
          <a href="mailto:biuro@aluwik.pl" className="text-orangeAccent underline cursor-active">
            biuro@aluwik.pl
          </a>
          , tel.{" "}
          <a href="tel:+48609604571" className="text-orangeAccent underline cursor-active">
            609 604 571
          </a>
          .
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">2. Zakres i cele przetwarzania</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>
            <strong>Kontakt przez formularz/e-mail/telefon</strong> – w celu udzielenia odpowiedzi
            na zapytanie, przygotowania wyceny, ustalenia szczegółów współpracy (art. 6 ust. 1 lit.
            b lub f RODO).
          </li>
          <li>
            <strong>Realizacja umowy i obsługa posprzedażowa</strong> – przygotowanie oferty,
            realizacja zleceń, rozliczenia (art. 6 ust. 1 lit. b i c RODO).
          </li>
          <li>
            <strong>Analiza ruchu (Google Analytics 4)</strong> – wyłącznie po Twojej zgodzie na
            cookies analityczne (art. 6 ust. 1 lit. a RODO).
          </li>
          <li>
            <strong>Bezpieczeństwo i dochodzenie roszczeń</strong> – cele archiwalne/dowodowe (art.
            6 ust. 1 lit. f RODO).
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">3. Kategorie danych</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Dane identyfikacyjne i kontaktowe podane dobrowolnie (np. imię, e-mail, telefon, treść
          wiadomości) oraz dane eksploatacyjne (adres IP, identyfikatory plików cookies – po
          wyrażeniu zgody).
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">4. Pliki cookies</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Serwis korzysta z plików cookies. Podział:
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>
            <strong>Niezbędne</strong> – wymagane do prawidłowego działania serwisu (nie podlegają
            zgodzie).
          </li>
          <li>
            <strong>Analityczne (GA4)</strong> – służą statystyce i ulepszaniu serwisu; uruchamiane
            dopiero po akceptacji w banerze cookies.
          </li>
        </ul>
        <p className="mt-2 leading-relaxed text-gray-700">
          Zgoda na cookies analityczne jest dobrowolna i możesz ją w każdej chwili
          cofnąć/przebudować w ustawieniach przeglądarki lub poprzez ponowne wywołanie banera
          cookies (link „Ustawienia cookies”, jeśli dostępny).
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">5. Google Analytics 4</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Po wyrażeniu zgody możemy używać Google Analytics 4 (dostawca: Google Ireland Limited) do
          zbierania statystyk zagregowanych. Narzędzie działa wyłącznie po Twojej akceptacji cookies
          w banerze. Dane mogą być przetwarzane także przez podmioty powiązane z Google; stosowane
          są standardowe mechanizmy zgodności (m.in. standardowe klauzule umowne).
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          6. Podstawy prawne przetwarzania
        </h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>art. 6 ust. 1 lit. a RODO – zgoda (cookies analityczne),</li>
          <li>
            art. 6 ust. 1 lit. b RODO – wykonanie umowy lub działania na żądanie przed jej
            zawarciem,
          </li>
          <li>art. 6 ust. 1 lit. c RODO – obowiązki prawne (np. rachunkowość, podatki),</li>
          <li>
            art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora (komunikacja,
            obrona roszczeń, bezpieczeństwo).
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">7. Odbiorcy danych</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Dane mogą być powierzane podmiotom wspierającym nas technicznie i organizacyjnie, m.in.
          dostawcy hostingu i poczty, narzędzia analityczne (po zgodzie), biuro rachunkowe, wsparcie
          IT – wyłącznie w zakresie niezbędnym do świadczenia usług.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">8. Okres przechowywania</h3>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li>
            Korespondencja i zapytania – do 12 miesięcy od zakończenia kontaktu lub dłużej, jeżeli
            wynika to z obrony/doch. roszczeń.
          </li>
          <li>Dokumentacja księgowa – przez okres wymagany przepisami (co do zasady 5 lat).</li>
          <li>
            Dane analityczne (cookies) – zgodnie z ustawieniami GA4 i Twoimi preferencjami (do czasu
            cofnięcia zgody).
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">9. Twoje prawa</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Przysługują Ci prawa: dostępu do danych, sprostowania, usunięcia, ograniczenia,
          przenoszenia, sprzeciwu (wobec przetwarzania na podstawie uzasadnionego interesu), a także
          prawo cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania
          sprzed cofnięcia). Masz też prawo złożyć skargę do Prezesa UODO.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          10. Dobrowolność podania danych
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Podanie danych w celu kontaktu/wyceny jest dobrowolne, ale niezbędne do udzielenia
          odpowiedzi. Zgoda na cookies analityczne jest dobrowolna.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">11. Przekazywanie poza EOG</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Jeżeli dojdzie do transferu danych poza EOG (np. w związku z usługami Google), stosowane
          są odpowiednie zabezpieczenia prawne, w szczególności standardowe klauzule umowne.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">12. Zmiany Polityki</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Zastrzegamy prawo do zmian niniejszej Polityki. Nowa wersja obowiązuje od chwili
          publikacji z aktualną datą.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          13. Kontakt w sprawach prywatności
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          W kwestiach związanych z ochroną danych prosimy o kontakt:{" "}
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

export default PrivacyPolicy;
