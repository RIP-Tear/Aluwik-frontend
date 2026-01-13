import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ALUWIK",
  url: "https://www.aluwik.pl",
  logo: "https://www.aluwik.pl/logos/logo.svg",
  description:
    "ALUWIK to producent wysokiej jakości stolarki aluminiowej: okien, drzwi, fasad i ogrodów zimowych.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aleja Solidarności 8",
    addressLocality: "Tczew",
    postalCode: "83-110",
    addressCountry: "PL",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48-609-604-571",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    {
      "@type": "ContactPoint",
      telephone: "+48-798-953-877",
      contactType: "sales",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
  ],
  sameAs: [
    // Dodaj tutaj linki do mediów społecznościowych gdy są dostępne
    // "https://www.facebook.com/aluwik",
    // "https://www.instagram.com/aluwik",
  ],
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.aluwik.pl/#localbusiness",
  name: "ALUWIK - Stolarka Aluminiowa",
  image: "https://www.aluwik.pl/logos/logo.svg",
  description:
    "Producent stolarki aluminiowej w Tczewie. Oferujemy okna, drzwi, fasady i ogrody zimowe z profili Aluprof i Ponzio.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aleja Solidarności 8",
    addressLocality: "Tczew",
    addressRegion: "Pomorskie",
    postalCode: "83-110",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.0892,
    longitude: 18.7767,
  },
  url: "https://www.aluwik.pl",
  telephone: "+48-609-604-571",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.aluwik.pl/#website",
  url: "https://www.aluwik.pl",
  name: "ALUWIK",
  description: "Producent stolarki aluminiowej",
  publisher: {
    "@id": "https://www.aluwik.pl/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.aluwik.pl/oferta?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "pl-PL",
};

// Breadcrumb utility function
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
