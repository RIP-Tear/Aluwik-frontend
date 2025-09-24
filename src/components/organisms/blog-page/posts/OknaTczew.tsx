import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const OknaTczew = () => {
  return (
    <BlogPostTemplate
      slug="okna-tczew"
      title="Okna w Tczewie – nowoczesne rozwiązania od lokalnego producenta"
      highlightWords={["nowoczesne"]}
      heroImage={{
        src: "/blog/windows-tczew.webp",
        alt: "Okna Tczew – nowoczesne rozwiązania",
      }}
      sections={[
        {
          heading: "Dlaczego warto postawić na lokalnego producenta?",
          text:
            "Zakup okien to inwestycja na lata, dlatego wybór producenta ma ogromne znaczenie. " +
            "Decydując się na firmę z Tczewa, zyskujesz nie tylko dostęp do produktów wysokiej jakości, " +
            "ale także szybszy serwis i indywidualne podejście do potrzeb klienta.",
        },
        {
          heading: "Okna przesuwane – komfort i przestrzeń",
          text:
            "Coraz większą popularność zyskują okna przesuwane. To idealne rozwiązanie do domów, " +
            "gdzie liczy się maksymalne wykorzystanie przestrzeni oraz wygoda użytkowania. " +
            "Dzięki nowoczesnym systemom prowadnic skrzydła przesuwają się lekko i cicho, a duże przeszklenia " +
            "wpuszczają więcej światła do wnętrza.",
        },
        {
          heading: "Nowoczesny design i energooszczędność",
          text:
            "Okna od lokalnych producentów to nie tylko funkcjonalność, ale także estetyka. " +
            "Możesz wybierać spośród różnych profili, kolorów i wykończeń, które dopasujesz do stylu swojego domu. " +
            "Dodatkowo, nowoczesne pakiety szybowe skutecznie ograniczają straty ciepła, co przekłada się " +
            "na niższe rachunki za ogrzewanie.",
        },
        {
          heading: "Profesjonalny montaż w Tczewie",
          text:
            "Nawet najlepsze okna nie spełnią swojej roli bez prawidłowego montażu. " +
            "Firmy z Tczewa oferują kompleksową obsługę – od pomiaru, przez doradztwo, aż po fachową instalację. " +
            "Dzięki temu masz pewność, że Twoje nowe okna będą służyć przez wiele lat bez problemów.",
        },
        {
          heading: "Okna Tczew – inwestycja w jakość życia",
          text:
            "Wybierając okna od sprawdzonego producenta w Tczewie, inwestujesz w komfort, bezpieczeństwo i " +
            "oszczędności. To rozwiązanie, które łączy nowoczesny design z trwałością i niezawodnością.",
        },
      ]}
    />
  );
};

export default OknaTczew;
