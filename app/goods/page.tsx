import Link from "next/link";

import { ProductCard } from "@/components/goods/product-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd } from "@/lib/json-ld";
import { goodsProducts, getAmazonStoreUrl } from "@/lib/commerce";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "物販",
  description:
    "もちめだかの物販ページ。餌とグリーンウォーターの2商品を掲載。購入はAmazonへ送客し、URL未設定時は問い合わせ導線へ切り替えます。",
  path: "/goods",
  keywords: ["メダカ 餌", "グリーンウォーター", "Amazon", "もちめだか 物販"],
});

const goodsQuickTabs = [
  { label: "使い方とFAQ", href: "/faq" },
  { label: "購入導線を確認", href: "/shop" },
  { label: "入荷通知の問い合わせ", href: "/contact" },
];

export default function GoodsPage() {
  const amazonStoreUrl = getAmazonStoreUrl();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "物販",
        item: absoluteUrl("/goods"),
      },
    ],
  };

  return (
    <div className="page-wrap pb-16">
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Goods"
        title="物販（餌 / グリーンウォーター）"
        description="飼育の再現性を上げるために、日常運用に直結する2商品だけを掲載。購入はAmazonへ案内し、準備中の場合は問い合わせ導線へ切り替わります。"
        badges={["Amazon送客", "URL一元管理", "準備中の自動切替"]}
        actions={
          <>
            {amazonStoreUrl ? (
              <CtaButton href={amazonStoreUrl} target="_blank" rel="noreferrer">
                {siteConfig.commerce.storeCtaLabel}
              </CtaButton>
            ) : (
              <>
                <span
                  aria-disabled="true"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200"
                >
                  {siteConfig.commerce.pendingCtaLabel}
                </span>
                <CtaButton href={siteConfig.commerce.fallbackContactHref} variant="ghost">
                  {siteConfig.commerce.fallbackContactLabel}
                </CtaButton>
              </>
            )}
          </>
        }
      />

      <div className="layout-shell w-full content-block content-stage pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "物販" },
          ]}
        />

        <section className="mb-6 space-y-3 rounded-3xl border border-sky-200/75 bg-[linear-gradient(160deg,rgba(242,250,255,0.95),rgba(229,243,255,0.93)_62%,rgba(236,247,255,0.95))] p-5 shadow-[0_14px_30px_rgba(7,39,70,0.12)]">
          <div className="grid gap-3 md:grid-cols-2">
            {goodsProducts.map((product) => (
              <Link
                key={`goods-tab-${product.slug}`}
                href={`/goods/${product.slug}`}
                className="bubble-hover rounded-2xl border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-4 py-3 shadow-[var(--cta-ghost-shadow)] transition hover:-translate-y-0.5 hover:brightness-105"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-inverse)]">注目商品</p>
                <p className="mt-1 text-lg font-semibold text-[var(--text-inverse)]">{product.name}</p>
                <p className="mt-1 text-sm leading-7 text-[var(--text-inverse)]/90">{product.shortCatch}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {goodsQuickTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="bubble-hover rounded-full border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-4 py-2 text-sm font-semibold text-[var(--cta-ghost-text)] shadow-[var(--cta-ghost-shadow)] transition hover:brightness-105"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {goodsProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
}




