// Product/Service Schema helpers for offer pages

export const createProductSchema = ({
  name,
  description,
  image,
  url,
  category = "Stolarka aluminiowa",
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image: `https://www.aluwik.pl${image}`,
  url: `https://www.aluwik.pl${url}`,
  brand: {
    "@type": "Brand",
    name: "ALUWIK",
  },
  manufacturer: {
    "@type": "Organization",
    name: "ALUWIK",
    url: "https://www.aluwik.pl",
  },
  category,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "PLN",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "PLN",
      price: "0",
      valueAddedTaxIncluded: true,
    },
    seller: {
      "@type": "Organization",
      name: "ALUWIK",
      url: "https://www.aluwik.pl",
    },
    itemCondition: "https://schema.org/NewCondition",
    areaServed: {
      "@type": "Country",
      name: "Polska",
    },
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Material",
      value: "Aluminium",
    },
    {
      "@type": "PropertyValue",
      name: "Producent profili",
      value: "Aluprof, Ponzio",
    },
  ],
});

export const createServiceSchema = ({
  name,
  description,
  url,
  serviceType = "Produkcja i montaż stolarki aluminiowej",
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  name,
  description,
  url: `https://www.aluwik.pl${url}`,
  provider: {
    "@type": "LocalBusiness",
    name: "ALUWIK",
    url: "https://www.aluwik.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aleja Solidarności 8",
      addressLocality: "Tczew",
      addressRegion: "Pomorskie",
      postalCode: "83-110",
      addressCountry: "PL",
    },
    telephone: "+48-609-604-571",
  },
  areaServed: {
    "@type": "State",
    name: "Pomorskie",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oferta ALUWIK",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          description,
        },
      },
    ],
  },
});

export const createFAQSchema = (
  questions: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const createBlogPostingSchema = ({
  title,
  description,
  image,
  url,
  datePublished,
  dateModified,
  author = "ALUWIK",
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: image.startsWith("http") ? image : `https://www.aluwik.pl${image}`,
  url: `https://www.aluwik.pl${url}`,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Organization",
    name: author,
    url: "https://www.aluwik.pl",
  },
  publisher: {
    "@type": "Organization",
    name: "ALUWIK",
    url: "https://www.aluwik.pl",
    logo: {
      "@type": "ImageObject",
      url: "https://www.aluwik.pl/logos/logo.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.aluwik.pl${url}`,
  },
  inLanguage: "pl-PL",
});
