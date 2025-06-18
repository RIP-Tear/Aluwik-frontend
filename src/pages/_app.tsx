import React from "react";
import type { AppProps } from "next/app";
import "../app/globals.css";

import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400", ], 
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={michroma.className}>
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
