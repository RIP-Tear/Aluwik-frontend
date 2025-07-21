export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Jak zorganizować idealny ogród zimowy?",
    excerpt: "Dowiedz się, jak stworzyć ogród zimowy, który będzie cieszył oczy przez cały rok.",
    image: "/blog/perfect-winter-garden.webp",
    date: "Czerwiec 2025",
    href: "ogrod-zimowy-idealny",
  },
  {
    title: "5 zalet drzwi przesuwnych w nowoczesnych wnętrzach",
    excerpt: "Dlaczego warto postawić na systemy przesuwne? Poznaj ich funkcjonalność i estetykę.",
    image: "/blog/5-advantages-of-sliding.webp",
    date: "Maj 2025",
    href: "zalety-drzwi-przesuwnych",
  },
  {
    title: "Tarasy kompozytowe – trwałość i styl na lata",
    excerpt:
      "Poznaj zalety tarasów kompozytowych – estetycznych i odpornych na warunki atmosferyczne. ",
    image: "/blog/composite-decking.webp",
    date: "Kwiecień 2025",
    href: "tarasy-kompozytowe",
  },
  {
    title: "Drzwi przeciwpożarowe – bezpieczeństwo w nowoczesnej formie",
    excerpt:
      "Zadbaj o bezpieczeństwo domu lub firmy dzięki drzwiom o zwiększonej odporności ogniowej.",
    image: "/blog/fire-rated-doors.webp",
    date: "Marzec 2025",
    href: "drzwi-przeciwpozarowe",
  },
];
