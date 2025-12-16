import { notFound } from "next/navigation";
import { offerPages, offerSlugs } from "@/utils/offerPages";
import OfferDetailClient from "./OfferDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return offerSlugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = offerPages[slug];

  if (!offer) {
    return {
      title: "Strona nie znaleziona",
    };
  }

  return {
    title: offer.title,
    description: offer.description,
    alternates: {
      canonical: `/oferta/${slug}/`,
    },
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OfferDetailPage({ params }: Props) {
  const { slug } = await params;
  const offer = offerPages[slug];

  if (!offer) {
    notFound();
  }

  return <OfferDetailClient slug={slug} />;
}
