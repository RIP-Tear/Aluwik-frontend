import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const SwietlikiDachowe = () => {
  return (
    <BlogPostTemplate
      slug="swietliki-dachowe-aluminiowe"
      title="Świetliki dachowe z aluminium i szkła – naturalne światło w nowoczesnym wydaniu"
      highlightWords={["świetliki", "aluminiowe", "dachowe"]}
      heroImage={{
        src: "/blog/aluminium-rooflight.webp",
        alt: "Świetliki dachowe aluminiowe",
      }}
      sections={[
        {
          heading: "Dlaczego warto wybrać świetliki dachowe aluminiowe?",
          text:
            "Świetliki dachowe to doskonały sposób na wprowadzenie do wnętrza naturalnego światła. " +
            "Konstrukcje aluminiowe łączą trwałość z elegancją, zapewniając przy tym doskonałą izolację termiczną i szczelność. " +
            "Idealnie sprawdzają się zarówno w domach, jak i w obiektach komercyjnych.",
        },
        {
          heading: "Zalety konstrukcji aluminiowo-szklanych",
          text:
            "Połączenie aluminium i szkła gwarantuje wysoką odporność na warunki atmosferyczne, " +
            "a przy tym lekkość konstrukcji. Profile aluminiowe nie ulegają korozji i pozwalają " +
            "na tworzenie nowoczesnych, minimalistycznych form, które podkreślają charakter budynku.",
        },
        {
          heading: "Energooszczędność i komfort",
          text:
            "Nowoczesne świetliki aluminiowe wykorzystują szyby o podwyższonej izolacyjności, " +
            "które ograniczają utratę ciepła zimą i nagrzewanie wnętrza latem. To rozwiązanie ekologiczne i ekonomiczne.",
        },
        {
          heading: "Estetyka i funkcjonalność",
          text:
            "Dzięki szerokim możliwościom konfiguracji, świetliki dachowe można dopasować do niemal każdego projektu. " +
            "Dostępne są modele uchylne, stałe lub z automatycznym sterowaniem, zapewniające komfort użytkowania.",
        },
        {
          heading: "Świetliki dachowe Tczew – nowoczesność i jakość",
          text:
            "Producent z Tczewa oferuje wykonanie i montaż świetlików dachowych z aluminium na wymiar, " +
            "gwarantując precyzję wykonania i trwałość na lata. To inwestycja, która zwiększa komfort i wartość nieruchomości.",
        },
      ]}
    />
  );
};

export default SwietlikiDachowe;
