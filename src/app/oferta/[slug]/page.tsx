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
      canonical: `https://aluwik.pl/oferta/${slug}/`,
    },
    openGraph: {
      title: offer.title,
      description: offer.description,
      url: `https://aluwik.pl/oferta/${slug}/`,
      type: "website",
      images: [
        {
          url: `https://aluwik.pl/img/${slug}.webp`,
          width: 1200,
          height: 630,
          alt: offer.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: offer.title,
      description: offer.description,
      images: [`https://aluwik.pl/img/${slug}.webp`],
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
