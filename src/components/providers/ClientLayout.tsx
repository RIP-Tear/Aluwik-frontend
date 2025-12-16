"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LenisProvider from "@/utils/LenisProvider";
import CookieBanner from "@/components/molecules/cookie-banner/CookieBanner";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [gaAllowed, setGaAllowed] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "true") setGaAllowed(true);
    } catch (e) {
      console.warn("[ClientLayout] localStorage unavailable:", e);
    }
  }, []);

  useEffect(() => {
    if (!GA_ID || !gaAllowed) return;

    window.gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname, gaAllowed]);

  const handleAcceptCookies = () => {
    setGaAllowed(true);
    try {
      localStorage.setItem("cookieConsent", "true");
    } catch (e) {
      console.warn("[ClientLayout] localStorage unavailable:", e);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        {children}
        <CookieBanner onAccept={handleAcceptCookies} />
      </LenisProvider>
    </QueryClientProvider>
  );
}
