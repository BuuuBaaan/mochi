import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit, Shippori_Mincho } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { normalizeExternalUrl } from "@/lib/commerce";
import { siteConfig } from "@/site.config";

import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-sans-jp",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-display-jp",
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-ui-latin",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 公式サイト兼集客エンジン`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | 公式サイト兼集客エンジン`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} ロゴ付きOG画像`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | 公式サイト兼集客エンジン`,
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const amazonStore = normalizeExternalUrl(siteConfig.commerce.amazonStoreUrl);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.youtube,
      siteConfig.social.instagram,
      siteConfig.social.yahooAuctions,
      siteConfig.social.baseShop,
      ...(amazonStore ? [amazonStore] : []),
    ],
    description: siteConfig.description,
    logo: absoluteUrl(siteConfig.logo.src),
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer support",
        availableLanguage: ["Japanese"],
      },
    ],
  };

  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${shipporiMincho.variable} ${outfit.variable} antialiased`}>
        <JsonLd data={orgSchema} />
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
