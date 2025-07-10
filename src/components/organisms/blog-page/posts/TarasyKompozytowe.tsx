import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const TarasyKompozytowe = () => {
  return (
    <BlogPostTemplate
      slug="tarasy-kompozytowe"
      title="Tarasy kompozytowe – trwałość i styl na lata"
      highlightWords={["kompozytowe"]}
      heroImage={{
        src: "/blog/Tarasy-kompozytowe-trwałość-i-styl-na-lata.webp",
        alt: "Taras kompozytowy",
      }}
      sections={[
        {
          heading: "Dlaczego warto wybrać taras kompozytowy?",
          text:
            "Tarasy kompozytowe to połączenie estetyki naturalnego drewna z trwałością tworzyw sztucznych. " +
            "Są odporne na wilgoć, promieniowanie UV oraz uszkodzenia mechaniczne, dzięki czemu idealnie sprawdzają się " +
            "w polskich warunkach pogodowych przez wiele lat bez konieczności impregnacji.",
        },
        {
          heading: "Niska konserwacja, wysoka jakość",
          text:
            "W przeciwieństwie do drewna naturalnego, tarasy kompozytowe nie wymagają olejowania, lakierowania ani szlifowania. " +
            "Wystarczy regularne czyszczenie wodą, by utrzymać ich wygląd i funkcjonalność na wysokim poziomie.",
        },
        {
          heading: "Estetyka i różnorodność wykończeń",
          text:
            "Deski kompozytowe dostępne są w wielu kolorach i fakturach, co pozwala na idealne dopasowanie do stylu " +
            "budynku i ogrodu. Nowoczesne technologie produkcji umożliwiają uzyskanie bardzo realistycznych odwzorowań drewna.",
        },
        {
          heading: "Ekologiczne rozwiązanie",
          text:
            "Wiele producentów tarasów kompozytowych stosuje materiały pochodzące z recyklingu. " +
            "Wybierając ten rodzaj wykończenia, dbasz nie tylko o trwałość inwestycji, ale również o środowisko.",
        },
        {
          heading: "Szybki i łatwy montaż",
          text:
            "Systemy montażowe desek kompozytowych umożliwiają szybkie i precyzyjne ułożenie tarasu. " +
            "Wiele rozwiązań nie wymaga widocznych wkrętów, co dodatkowo podnosi estetykę wykończenia.",
        },
      ]}
    />
  );
};

export default TarasyKompozytowe;
