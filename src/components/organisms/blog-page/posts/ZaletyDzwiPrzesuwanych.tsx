import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const ZaletyDrzwiPrzesuwnych = () => {
  return (
    <BlogPostTemplate
      slug="zalety-drzwi-przesuwnych"
      title="5 zalet drzwi przesuwnych w nowoczesnych wnętrzach"
      highlightWords={["przesuwnych"]}
      heroImage={{
        src: "/blog/5-zalet-drzwi-przesuwnych-wn-owoczesnych-wnętrzach.webp",
        alt: "Drzwi przesuwne",
      }}
      sections={[
        {
          heading: "Oszczędność przestrzeni",
          text:
            "Drzwi przesuwne to idealne rozwiązanie do wnętrz, gdzie liczy się każdy centymetr. " +
            "Pozwalają zaoszczędzić miejsce, ponieważ nie wymagają przestrzeni do otwierania jak tradycyjne skrzydła drzwiowe.",
        },
        {
          heading: "Nowoczesna estetyka",
          text:
            "Systemy przesuwne wpisują się w trendy minimalistycznych i nowoczesnych aranżacji. " +
            "Proste linie i eleganckie wykończenia dodają wnętrzom lekkości i harmonii.",
        },
        {
          heading: "Elastyczność aranżacyjna",
          text:
            "Drzwi przesuwne świetnie sprawdzają się zarówno jako wejście do garderoby, przegroda między salonem a kuchnią, " +
            "jak i element zamykający strefy biurowe czy łazienkowe.",
        },
        {
          heading: "Doskonałe doświetlenie przestrzeni",
          text:
            "Drzwi przesuwne z przeszkleniami umożliwiają swobodny przepływ światła między pomieszczeniami, " +
            "co jest szczególnie istotne w mniejszych mieszkaniach i domach.",
        },
        {
          heading: "Cicha i wygodna obsługa",
          text:
            "Nowoczesne systemy przesuwne są niemal bezgłośne i bardzo łatwe w obsłudze, dzięki zastosowaniu " +
            "wysokiej jakości prowadnic i mechanizmów spowalniających.",
        },
      ]}
    />
  );
};

export default ZaletyDrzwiPrzesuwnych;
