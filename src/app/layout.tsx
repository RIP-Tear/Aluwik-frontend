import React from "react";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <title>ALUWIK | Stolarka aluminiowa dla domu i biznesu</title>
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
        <meta name="author" content="ALUWIK" />
        <link rel="canonical" href="https://aluwik.pl" />
        <meta property="og:title" content="ALUWIK | Stolarka aluminiowa dla domu i biznesu" />
        <meta
          property="og:description"
          content="Sprawdź naszą ofertę okien, drzwi, fasad i ogrodów zimowych z aluminium. ALUWIK — nowoczesne systemy dla wymagających."
        />
        <meta property="og:url" content="https://aluwik.pl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="ALUWIK" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aluwik.pl/og-image.jpg" />
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
              url: "https://aluwik.pl",
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
      </head>
      <body className="bg-shadowMind text-softSync">
        {" "}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NWMD800V53"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NWMD800V53');
      `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
