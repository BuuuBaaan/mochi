import type { Metadata } from "next";

import { siteConfig } from "@/site.config";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image,
}: BuildMetadataArgs): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);
  const ogImage =
    image ??
    absoluteUrl(
      `/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(siteConfig.name)}`,
    );

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
