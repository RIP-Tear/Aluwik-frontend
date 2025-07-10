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
    image: "/blog/Jak-zorganizować-idealny-ogród-zimowy.webp",
    date: "Czerwiec 2025",
    href: "ogrod-zimowy-idealny",
  },
  {
    title: "5 zalet drzwi przesuwnych w nowoczesnych wnętrzach",
    excerpt: "Dlaczego warto postawić na systemy przesuwne? Poznaj ich funkcjonalność i estetykę.",
    image: "/blog/5-zalet-drzwi-przesuwnych-wn-owoczesnych-wnętrzach.webp",
    date: "Maj 2025",
    href: "zalety-drzwi-przesuwnych",
  },
  {
    title: "Tarasy kompozytowe – trwałość i styl na lata",
    excerpt:
      "Poznaj zalety tarasów kompozytowych – estetycznych i odpornych na warunki atmosferyczne. ",
    image: "/blog/Tarasy-kompozytowe-trwałość-i-styl-na-lata.webp",
    date: "Kwiecień 2025",
    href: "tarasy-kompozytowe",
  },
  {
    title: "Drzwi przeciwpożarowe – bezpieczeństwo w nowoczesnej formie",
    excerpt:
      "Zadbaj o bezpieczeństwo domu lub firmy dzięki drzwiom o zwiększonej odporności ogniowej.",
    image: "/blog/Drzwi-przeciwpożarowe-bezpieczeństwo-w-nowoczesnej-formie.webp",
    date: "Marzec 2025",
    href: "drzwi-przeciwpozarowe",
  },
];
