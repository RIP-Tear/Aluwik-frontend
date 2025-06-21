import React from "react";
import type { AppProps } from "next/app";
import "../app/globals.css";

import { Michroma } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LenisProvider from "@/utils/LenisProvider";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <div className={michroma.className}>
          <Component {...pageProps} />
        </div>
      </LenisProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
