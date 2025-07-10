import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type PageHeadProps = {
  title: string;
  description: string;
};

export const PageHead = ({ title, description }: PageHeadProps) => {
  const router = useRouter();
  const canonicalUrl = `https://aluwik.pl${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={`${title} | ALUWIK`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
};
