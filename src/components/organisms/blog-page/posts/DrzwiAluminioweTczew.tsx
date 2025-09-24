import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const DrzwiAluminioweTczew = () => {
  return (
    <BlogPostTemplate
      slug="drzwi-aluminiowe-tczew"
      title="Drzwi aluminiowe w Tczewie – trwałość i elegancja"
      highlightWords={["trwałość"]}
      heroImage={{
        src: "/blog/aluminium-doors-tczew.webp",
        alt: "Drzwi aluminiowe Tczew",
      }}
      sections={[
        {
          heading: "Dlaczego warto wybrać drzwi aluminiowe?",
          text:
            "Aluminium to materiał, który wyróżnia się trwałością, odpornością na warunki atmosferyczne oraz lekkością. " +
            "Drzwi aluminiowe to inwestycja, która łączy funkcjonalność z nowoczesnym designem. " +
            "Świetnie sprawdzają się zarówno w domach jednorodzinnych, jak i w obiektach komercyjnych.",
        },
        {
          heading: "Nowoczesny wygląd i estetyka",
          text:
            "Drzwi aluminiowe dostępne są w wielu wariantach kolorystycznych i wykończeniowych. " +
            "Ich prosta forma i elegancja idealnie wpisują się w nowoczesną architekturę. " +
            "Dodatkowo możliwość zastosowania dużych przeszkleń sprawia, że wnętrza są jasne i przestronne.",
        },
        {
          heading: "Izolacja cieplna i akustyczna",
          text:
            "Wbrew obiegowej opinii, drzwi aluminiowe świetnie izolują zarówno przed zimnem, jak i hałasem. " +
            "Dzięki nowoczesnym technologiom profile aluminiowe są wypełnione materiałami izolacyjnymi, " +
            "co pozwala na osiągnięcie wysokich parametrów energooszczędności.",
        },
        {
          heading: "Drzwi przesuwane w Tczewie",
          text:
            "Coraz częściej wybieranym rozwiązaniem są drzwi przesuwane. Dzięki nim można zaoszczędzić miejsce, " +
            "a także zyskać łatwe połączenie domu z ogrodem czy tarasem. Aluminiowe systemy przesuwne " +
            "łączą solidność z lekkością obsługi.",
        },
        {
          heading: "Dlaczego lokalny producent?",
          text:
            "Decydując się na zakup drzwi aluminiowych w Tczewie od lokalnego producenta, zyskujesz " +
            "indywidualne doradztwo, szybki serwis i wsparcie techniczne. To pewność, że inwestujesz " +
            "w jakość, która posłuży na lata.",
        },
      ]}
    />
  );
};

export default DrzwiAluminioweTczew;
