import BlogPostTemplate from "@/components/molecules/blog-post-template/BlogPostTemplate";

const OgrodZimowyIdealny = () => {
  return (
    <BlogPostTemplate
      slug="ogrod-zimowy-idealny"
      title="Jak zorganizować idealny ogród zimowy?"
      highlightWords={["ogród"]}
      heroImage={{
        src: "/img/ogrody-zimowe.jpg",
        alt: "Ogród zimowy",
      }}
      sections={[
        {
          heading: "Czym jest ogród zimowy?",
          text:
            "Ogród zimowy to wyjątkowa przestrzeń, która pozwala cieszyć się światłem, zielenią i " +
            "kontaktem z naturą niezależnie od pory roku. Stanowi nie tylko efektowne przedłużenie " +
            "domu, ale także praktyczne miejsce do codziennego użytku – od strefy relaksu, przez " +
            "domowe biuro, aż po przestrzeń do uprawy roślin.",
        },
        {
          heading: "Projektowanie idealnego ogrodu",
          text:
            "Kluczem do stworzenia idealnego ogrodu zimowego jest odpowiedni projekt – dopasowany " +
            "zarówno do architektury budynku, jak i indywidualnych oczekiwań domowników. Istotne są " +
            "tutaj m.in. właściwy dobór szyb (najczęściej zespolone, z powłoką niskoemisyjną), " +
            "solidne profile aluminiowe zapewniające trwałość i estetykę, a także skuteczna " +
            "wentylacja i systemy grzewcze.",
        },
        {
          heading: "Aranżacja wnętrza",
          text:
            "Przemyślany wystrój, naturalne materiały i dobrze dobrana roślinność sprawiają, że " +
            "ogród zimowy staje się przytulnym azylem. Warto również zaplanować odpowiednie " +
            "oświetlenie, które pozwoli korzystać z przestrzeni także po zmroku.",
        },
        {
          heading: "Zalety inwestycji",
          text:
            "Inwestycja w ogród zimowy to nie tylko zysk estetyczny i funkcjonalny, ale także " +
            "realne podniesienie wartości nieruchomości. Zwiększa metraż użytkowy domu, poprawia " +
            "bilans energetyczny oraz wpływa pozytywnie na samopoczucie domowników.",
        },
        {
          heading: "Dlaczego warto z nami?",
          text:
            "W naszej firmie pomagamy kompleksowo przejść przez cały proces – od koncepcji, przez " +
            "projekt, aż po wykonanie. Korzystamy z najwyższej jakości materiałów i technologii, " +
            "które gwarantują trwałość i satysfakcję z użytkowania na lata.",
        },
      ]}
    />
  );
};

export default OgrodZimowyIdealny;
