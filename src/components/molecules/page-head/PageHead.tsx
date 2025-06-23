import React from "react";
import Head from "next/head";

type PageHeadProps = {
  title: string;
  description: string;
};

export const PageHead = ({ title, description }: PageHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | ALUWIK`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aluwik.pl" />
    </Head>
  );
};
