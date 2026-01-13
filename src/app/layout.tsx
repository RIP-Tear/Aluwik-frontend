import React from "react";
import "./globals.css";
import { Michroma } from "next/font/google";
import ClientLayout from "@/components/providers/ClientLayout";
import Script from "next/script";
import type { Metadata } from "next";
import {
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/components/seo/JsonLd";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aluwik.pl"),
  title: {
    template: "%s | ALUWIK",
    default: "ALUWIK | Producent stolarki aluminiowej",
  },
  description:
    "ALUWIK to producent wysokiej jakości stolarki aluminiowej: okien, drzwi, fasad i ogrodów zimowych. Oferujemy trwałe rozwiązania z profili Aluprof i Ponzio dla klientów indywidualnych i firm.",
  keywords: [
    // BRAND
    "aluwik",
    "aluwik tczew",
    "producent aluwik",

    // CORE BUSINESS – SHORT
    "stolarka aluminiowa",
    "okna aluminiowe",
    "drzwi aluminiowe",
    "fasady aluminiowe",
    "ogrody zimowe",
    "pergole aluminiowe",
    "systemy przesuwne aluminiowe",

    // LONG TAIL – HIGHEST SEO VALUE
    "producent stolarki aluminiowej",
    "producent stolarki aluminiowej Tczew",
    "okna aluminiowe Tczew",
    "drzwi aluminiowe Tczew",
    "pergole tarasowe Tczew",
    "ogrody zimowe Tczew",
    "systemy okienno-drzwiowe aluminiowe",
    "aluminiowe drzwi przeciwpożarowe",
    "aluminiowe fasady przeciwpożarowe",

    // TECHNOLOGIE & BRAND
    "Aluprof",
    "Ponzio",
    "profile aluminiowe Aluprof",
    "systemy Ponzio",

    // SERVICE INTENT
    "montaż stolarki aluminiowej",
    "produkcja stolarki aluminiowej",
    "okna aluminiowe z montażem",
    "drzwi aluminiowe na wymiar",
    "fasady aluminiowe producent",

    // LOCAL REACH
    "stolarka aluminiowa pomorskie",
    "okna Tczew",
    "drzwi Tczew",
    "zadaszenia tarasu pomorskie",
    "systemy przesuwne pomorskie",
  ],
  authors: [{ name: "ALUWIK" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aluwik.pl/",
    languages: {
      pl: "https://aluwik.pl/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.aluwik.pl/",
    siteName: "ALUWIK",
    title: "ALUWIK | Stolarka aluminiowa dla domu i biznesu",
    description:
      "Sprawdź naszą ofertę okien, drzwi, fasad i ogrodów zimowych z aluminium. ALUWIK — nowoczesne systemy dla wymagających.",
    images: [
      {
        url: "https://aluwik.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Okna, drzwi i ogrody zimowe od ALUWIK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description: "Okna, drzwi, fasady i ogrody zimowe z aluminium – od producenta ALUWIK.",
    images: ["https://aluwik.pl/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "facebook-domain-verification": "9t36g5864gcep8fccwgmk2vtutodrp",
    "theme-color": "#E1E1E6",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// Ustaw w .env: NEXT_PUBLIC_GA_ID=G-XXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        {/* DNS Prefetch & Preconnect for better performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced Schema.org JSON-LD structured data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        {/* Structured Data for Products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Oferta ALUWIK",
              itemListElement: [
                {
                  "@type": "Product",
                  name: "Drzwi aluminiowe",
                  image: "https://aluwik.pl/img/drzwi.webp",
                  description:
                    "Wytrzymałe drzwi z profili aluminiowych zapewniające bezpieczeństwo i styl.",
                  url: "https://aluwik.pl/oferta/drzwi-aluminiowe/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Okna aluminiowe",
                  image: "https://aluwik.pl/img/okna-aluminiowe.webp",
                  description:
                    "Nowoczesne okna aluminiowe o znakomitej izolacji termicznej i akustycznej.",
                  url: "https://aluwik.pl/oferta/okna-aluminiowe/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Fasady",
                  image: "https://aluwik.pl/img/fasady.webp",
                  description:
                    "Modułowe fasady słupowo–ryglowe i elementowe dla obiektów komercyjnych.",
                  url: "https://aluwik.pl/oferta/fasady/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Ogrody zimowe",
                  image: "https://aluwik.pl/img/ogrody-zimowe.webp",
                  description:
                    "Całoroczne oranżerie z izolowanych profili aluminiowych do komfortowego relaksu.",
                  url: "https://aluwik.pl/oferta/ogrody-zimowe/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Systemy drzwi przesuwanych",
                  image: "https://aluwik.pl/img/drzwi-przesuwane.webp",
                  description:
                    "Komfortowe i energooszczędne systemy przesuwne do dużych przeszkleń.",
                  url: "https://aluwik.pl/oferta/systemy-drzwi-przesuwanych/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Okna przesuwane",
                  image: "https://aluwik.pl/img/okna-przesuwane.webp",
                  description:
                    "Lekko i cicho pracujące okna przesuwne zwiększające powierzchnię użytkową.",
                  url: "https://aluwik.pl/oferta/okna-przesuwane/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Ścianka działowa szklana",
                  image: "https://aluwik.pl/img/sciany-oddzielenia-przeciwpozarowego.webp",
                  description:
                    "Konstrukcje EI30-EI120 do skutecznego wydzielenia stref pożarowych.",
                  url: "https://aluwik.pl/oferta/scianka-dzialowa-szklana/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Drzwi przeciwpożarowe",
                  image: "https://aluwik.pl/img/drzwi-przeciwpozarowe.webp",
                  description:
                    "Certyfikowane skrzydła EI30-EI120 gwarantujące bezpieczeństwo pożarowe.",
                  url: "https://aluwik.pl/oferta/drzwi-przeciwpozarowe/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
                {
                  "@type": "Product",
                  name: "Zadaszenia tarasów",
                  image: "https://aluwik.pl/img/zadaszenia-tarasow.webp",
                  description:
                    "Aluminiowe pergole i dachy szklane chroniące przed deszczem i słońcem.",
                  url: "https://aluwik.pl/oferta/zadaszenia-tarasow/",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "PLN",
                    availability: "https://schema.org/InStock",
                    priceValidUntil: "2026-09-26",
                    hasMerchantReturnPolicy: {
                      "@type": "MerchantReturnPolicy",
                      returnPolicyCategory: "https://schema.org/NoReturns",
                      merchantReturnDays: 0,
                      applicableCountry: "PL",
                    },
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "PLN",
                    },
                    deliveryTime: {
                      "@type": "ShippingDeliveryTime",
                      businessDays: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "07:00",
                        closes: "16:00",
                      },
                      handlingTime: {
                        "@type": "QuantitativeValue",
                        value: 2,
                        unitCode: "DAY",
                      },
                      transitTime: {
                        "@type": "QuantitativeValue",
                        value: 5,
                        unitCode: "DAY",
                      },
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "PL",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    reviewCount: "1",
                  },
                  review: {
                    "@type": "Review",
                    author: {
                      "@type": "Person",
                      name: "Klient",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    reviewBody: "Polecam produkty ALUWIK – wysoka jakość i profesjonalna obsługa.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={michroma.className}>
        {/* GA4 Script - będzie obsługiwany przez ClientLayout */}
        {GA_ID && (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
