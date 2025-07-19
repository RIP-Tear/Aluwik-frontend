// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="ALUWIK to producent wysokiej jakości stolarki aluminiowej: okien, drzwi, fasad i ogrodów zimowych. Oferujemy trwałe rozwiązania z profili Aluprof i Ponzio dla klientów indywidualnych i firm."
          />
          <meta
            name="keywords"
            content="aluwik, stolarka aluminiowa, okna aluminiowe, drzwi aluminiowe, fasady aluminiowe, ogrody zimowe, Aluprof, Ponzio, producent stolarki, aluminium, systemy okienno-drzwiowe"
          />
          <meta name="robots" content="index, follow" />
          <link rel="alternate" href="https://www.aluwik.pl/" hrefLang="pl" />
          <meta name="author" content="ALUWIK" />
          <meta name="site_name" content="ALUWIK" />
          <meta property="og:title" content="ALUWIK | Stolarka aluminiowa dla domu i biznesu" />
          <meta
            property="og:description"
            content="Sprawdź naszą ofertę okien, drzwi, fasad i ogrodów zimowych z aluminium. ALUWIK — nowoczesne systemy dla wymagających."
          />
          <meta property="og:url" content="https://www.aluwik.pl/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:site_name" content="ALUWIK" />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://aluwik.pl/og-image.jpg" />
          <meta property="og:image:alt" content="Okna, drzwi i ogrody zimowe od ALUWIK" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Okna, drzwi, fasady i ogrody zimowe z aluminium – od producenta ALUWIK."
          />
          <meta name="twitter:image" content="https://aluwik.pl/og-image.jpg" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#E1E1E6" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "ALUWIK",
                url: "https://aluwik.pl/",
                logo: "https://aluwik.pl/android-chrome-512x512.png",
                image: "https://aluwik.pl/og-image.jpg",
                description: "Producent stolarki aluminiowej: okna, drzwi, fasady, ogrody zimowe.",
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
                    telephone: "+48 609 604 571",
                    contactType: "customer service",
                  },
                  {
                    "@type": "ContactPoint",
                    telephone: "+48 798 953 877",
                    contactType: "sales",
                  },
                ],
                email: "biuro.aluwik@gmail.com",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "07:00",
                    closes: "16:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "09:00",
                    closes: "14:00",
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/profile.php?id=61577515076852",
                  "https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true",
                  "https://wa.me/48609604571",
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ALUWIK",
                url: "https://aluwik.pl/",
                logo: "https://aluwik.pl/android-chrome-512x512.png",
              }),
            }}
          />

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
                  },
                  {
                    "@type": "Product",
                    name: "Okna aluminiowe",
                    image: "https://aluwik.pl/img/okna-aluminiowe.webp",
                    description:
                      "Nowoczesne okna aluminiowe o znakomitej izolacji termicznej i akustycznej.",
                    url: "https://aluwik.pl/oferta/okna-aluminiowe/",
                  },
                  {
                    "@type": "Product",
                    name: "Fasady",
                    image: "https://aluwik.pl/img/fasady.webp",
                    description:
                      "Modułowe fasady słupowo–ryglowe i elementowe dla obiektów komercyjnych.",
                    url: "https://aluwik.pl/oferta/fasady/",
                  },
                  {
                    "@type": "Product",
                    name: "Ogrody zimowe",
                    image: "https://aluwik.pl/img/ogrody-zimowe.webp",
                    description:
                      "Całoroczne oranżerie z izolowanych profili aluminiowych do komfortowego relaksu.",
                    url: "https://aluwik.pl/oferta/ogrody-zimowe/",
                  },
                  {
                    "@type": "Product",
                    name: "Systemy drzwi przesuwanych",
                    image: "https://aluwik.pl/img/drzwi-przesuwane.webp",
                    description:
                      "Komfortowe i energooszczędne systemy przesuwne do dużych przeszkleń.",
                    url: "https://aluwik.pl/oferta/systemy-drzwi-przesuwanych/",
                  },
                  {
                    "@type": "Product",
                    name: "Okna przesuwane",
                    image: "https://aluwik.pl/img/okna-przesuwane.webp",
                    description:
                      "Lekko i cicho pracujące okna przesuwne zwiększające powierzchnię użytkową.",
                    url: "https://aluwik.pl/oferta/okna-przesuwane/",
                  },
                  {
                    "@type": "Product",
                    name: "Ściany oddzielenia przeciwpożarowego",
                    image: "https://aluwik.pl/img/sciany-oddzielenia-przeciwpozarowego.webp",
                    description:
                      "Konstrukcje EI30-EI120 do skutecznego wydzielenia stref pożarowych.",
                    url: "https://aluwik.pl/oferta/sciany-oddzielenia-przeciwpozarowego/",
                  },
                  {
                    "@type": "Product",
                    name: "Drzwi przeciwpożarowe",
                    image: "https://aluwik.pl/img/drzwi-przeciwpozarowe.webp",
                    description:
                      "Certyfikowane skrzydła EI30-EI120 gwarantujące bezpieczeństwo pożarowe.",
                    url: "https://aluwik.pl/oferta/drzwi-przeciwpozarowe/",
                  },
                  {
                    "@type": "Product",
                    name: "Zadaszenia tarasów",
                    image: "https://aluwik.pl/img/zadaszenia-tarasow.webp",
                    description:
                      "Aluminiowe pergole i dachy szklane chroniące przed deszczem i słońcem.",
                    url: "https://aluwik.pl/oferta/zadaszenia-tarasow/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Drzwi aluminiowe",
                    item: "https://aluwik.pl/oferta/drzwi-aluminiowe/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Okna aluminiowe",
                    item: "https://aluwik.pl/oferta/okna-aluminiowe/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Fasady",
                    item: "https://aluwik.pl/oferta/fasady/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Ogrody zimowe",
                    item: "https://aluwik.pl/oferta/ogrody-zimowe/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Systemy drzwi przesuwanych",
                    item: "https://aluwik.pl/oferta/systemy-drzwi-przesuwanych/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Okna przesuwane",
                    item: "https://aluwik.pl/oferta/okna-przesuwane/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Ściany oddzielenia przeciwpożarowego",
                    item: "https://aluwik.pl/oferta/sciany-oddzielenia-przeciwpozarowego/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Drzwi przeciwpożarowe",
                    item: "https://aluwik.pl/oferta/drzwi-przeciwpozarowe/",
                  },
                ],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Strona główna",
                    item: "https://aluwik.pl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Oferta",
                    item: "https://aluwik.pl/oferta/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Zadaszenia tarasów",
                    item: "https://aluwik.pl/oferta/zadaszenia-tarasow/",
                  },
                ],
              }),
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWMD800V53"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NWMD800V53');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
