"use client";

import { useEffect } from "react";

// 👇 Dodaj to na samej górze lub w osobnym pliku .d.ts
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalyticsWrapper = () => {
  useEffect(() => {
    console.log("GA script loaded");

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWMD800V53";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      console.log("gtag call:", args);
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-NWMD800V53");
  }, []);

  return null;
};
