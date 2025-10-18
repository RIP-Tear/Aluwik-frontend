import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const ZabudowyAluminiowe = () => {
  return (
    <BlogPostTemplate
      slug="zabudowy-aluminiowe"
      title="Zabudowy aluminiowe – nowoczesne rozwiązania do wnętrz i elewacji"
      highlightWords={["zabudowy", "aluminiowe"]}
      heroImage={{
        src: "/blog/aluminium-partitions.webp",
        alt: "Zabudowy aluminiowe",
      }}
      sections={[
        {
          heading: "Czym są zabudowy aluminiowe?",
          text:
            "Zabudowy aluminiowe to konstrukcje wykorzystywane zarówno wewnątrz budynków, jak i na zewnątrz. " +
            "Pozwalają na tworzenie przeszklonych biur, ścian działowych, witryn sklepowych czy systemów fasadowych. " +
            "Dzięki lekkości i trwałości aluminium można osiągnąć efekt elegancji i nowoczesności.",
        },
        {
          heading: "Zalety systemów aluminiowych",
          text:
            "Aluminium to materiał odporny na korozję, stabilny wymiarowo i łatwy w konserwacji. " +
            "Zabudowy aluminiowe gwarantują doskonałą izolację termiczną i akustyczną, a przy tym zachowują smukły, estetyczny wygląd.",
        },
        {
          heading: "Zabudowy wewnętrzne",
          text:
            "Idealne do biur, lokali usługowych i przestrzeni komercyjnych. " +
            "Pozwalają na wydzielenie pomieszczeń przy zachowaniu przepływu światła i otwartej przestrzeni. " +
            "Dostępne w wielu wariantach – od profili cienkoramowych po systemy całoszklane.",
        },
        {
          heading: "Zabudowy zewnętrzne",
          text:
            "Na zewnątrz doskonale sprawdzają się jako fasady aluminiowo-szklane, witryny sklepowe, " +
            "drzwi wejściowe czy przeszklone zabudowy tarasów. To trwałe i eleganckie rozwiązanie zwiększające prestiż budynku.",
        },
        {
          heading: "Zabudowy aluminiowe Tczew – solidność od lokalnego producenta",
          text:
            "Firma z Tczewa oferuje kompleksowe wykonanie zabudów aluminiowych – od projektu po montaż. " +
            "Dzięki doświadczeniu i precyzji realizuje zarówno małe inwestycje prywatne, jak i duże projekty komercyjne.",
        },
      ]}
    />
  );
};

export default ZabudowyAluminiowe;
