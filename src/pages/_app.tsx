// pages/_app.tsx
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "../app/globals.css";

import { Michroma } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LenisProvider from "@/utils/LenisProvider";
import { useRouter } from "next/router";
import Script from "next/script";
import CookieBanner from "@/components/molecules/cookie-banner/CookieBanner";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const queryClient = new QueryClient();

// Ustaw w .env: NEXT_PUBLIC_GA_ID=G-XXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [gaAllowed, setGaAllowed] = useState(false);

  // Odczyt zgody z localStorage po montażu
  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "true") setGaAllowed(true);
    } catch (e) {
      console.warn("[App] localStorage unavailable:", e);
    }
  }, []);

  // Pageview na zmianę trasy – tylko gdy GA włączone po zgodzie
  useEffect(() => {
    if (!GA_ID || !gaAllowed) return;

    const handleRouteChange = (url: string) => {
      window.gtag?.("config", GA_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, gaAllowed]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* GA4 – wczytuj tylko po akceptacji cookies */}
      {GA_ID && gaAllowed && (
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

      <LenisProvider>
        <div className={michroma.className}>
          <Component {...pageProps} />
          <CookieBanner onAccept={() => setGaAllowed(true)} />
        </div>
      </LenisProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
