import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const DrzwiPrzeciwpozarowe = () => {
  return (
    <BlogPostTemplate
      slug="drzwi-przeciwpozarowe"
      title="Drzwi przeciwpożarowe – bezpieczeństwo w nowoczesnej formie"
      highlightWords={["bezpieczeństwo"]}
      heroImage={{
        src: "/blog/fire-rated-doors.webp",
        alt: "Drzwi przeciwpożarowe",
      }}
      sections={[
        {
          heading: "Czym są drzwi przeciwpożarowe?",
          text:
            "Drzwi przeciwpożarowe to specjalistyczne rozwiązania mające na celu ochronę przed " +
            "rozprzestrzenianiem się ognia i dymu. Stosowane są zarówno w budynkach mieszkalnych, jak i " +
            "komercyjnych, zapewniając cenny czas na ewakuację oraz ograniczając straty materialne.",
        },
        {
          heading: "Z czego są wykonane?",
          text:
            "Najczęściej stosuje się stalowe lub aluminiowe konstrukcje wypełnione materiałami ognioodpornymi, " +
            "takimi jak wełna mineralna. Powierzchnia drzwi może być dodatkowo pokryta okleiną lub farbą proszkową, " +
            "dzięki czemu spełniają one także funkcje estetyczne.",
        },
        {
          heading: "Klasy odporności ogniowej",
          text:
            "Drzwi oznaczane są symbolami EI, np. EI30, EI60, co oznacza zdolność zatrzymania ognia i dymu " +
            "przez 30 lub 60 minut. Dobór odpowiedniej klasy zależy od wymagań projektowych i funkcji danego pomieszczenia.",
        },
        {
          heading: "Nowoczesny design i funkcjonalność",
          text:
            "Współczesne drzwi przeciwpożarowe nie muszą już wyglądać topornie. Dostępne są wersje z przeszkleniami, " +
            "w wielu kolorach i fakturach, które bez problemu wpisują się w nowoczesne aranżacje wnętrz.",
        },
        {
          heading: "Dlaczego warto zainwestować?",
          text:
            "Drzwi przeciwpożarowe zwiększają bezpieczeństwo domowników i pracowników, spełniają normy budowlane i " +
            "mogą obniżyć składkę ubezpieczenia nieruchomości. To inwestycja w komfort i spokój.",
        },
      ]}
    />
  );
};

export default DrzwiPrzeciwpozarowe;
