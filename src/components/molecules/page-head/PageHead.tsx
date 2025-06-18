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
    </Head>
  );
};
