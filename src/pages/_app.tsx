import React from "react";
import type { AppProps } from "next/app";
import "../app/globals.css";

import { Michroma } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={michroma.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
