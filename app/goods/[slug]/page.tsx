import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AmazonCta } from "@/components/goods/amazon-cta";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { JsonLd } from "@/lib/json-ld";
import {
  getAmazonProductUrl,
  getGoodsProductBySlug,
  goodsProducts,
} from "@/lib/commerce";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/site.config";

type GoodsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return goodsProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: GoodsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getGoodsProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "商品が見つかりません",
      description: "指定された商品は見つかりませんでした。",
      path: "/goods",
    });
  }

  return buildMetadata({
    title: `${product.name} | 物販`,
    description: product.summary,
    path: `/goods/${product.slug}`,
    keywords: [product.name, "Amazon", "メダカ用品", ...product.recommendedFor],
    image: absoluteUrl(product.image),
  });
}

export default async function GoodsDetailPage({ params }: GoodsDetailPageProps) {
  const { slug } = await params;
  const product = getGoodsProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const amazonUrl = getAmazonProductUrl(product);

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
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: absoluteUrl(`/goods/${product.slug}`),
      },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: [absoluteUrl(product.image)],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    url: absoluteUrl(`/goods/${product.slug}`),
    category: "Aquarium Supplies",
    offers: amazonUrl
      ? {
          "@type": "Offer",
          url: amazonUrl,
          priceCurrency: "JPY",
        }
      : undefined,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="page-wrap pb-16">
      <JsonLd data={[breadcrumbJsonLd, productJsonLd, faqJsonLd]} />
      <div className="layout-shell w-full content-block content-stage pt-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "物販", href: "/goods" },
            { label: product.name },
          ]}
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {goodsProducts.map((tabProduct) => (
            <Link
              key={`goods-detail-tab-${tabProduct.slug}`}
              href={`/goods/${tabProduct.slug}`}
              data-track-event="goods_tab_click"
              data-track-label={tabProduct.slug}
              className={`bubble-hover rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)] ${
                tabProduct.slug === product.slug
                  ? "border-[var(--cta-primary-border)] bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] shadow-[var(--cta-primary-shadow)]"
                  : "border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] text-[var(--cta-ghost-text)] hover:brightness-105"
              }`}
            >
              {tabProduct.name}
            </Link>
          ))}
        </div>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.05fr] md:p-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Goods Detail</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base leading-8 text-slate-700">{product.shortCatch}</p>
              <p className="mt-3 text-sm leading-8 text-slate-700">{product.summary}</p>
              <p className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
                価格表示: {product.priceLabel}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AmazonCta url={product.amazonProductUrl} readyLabel={siteConfig.commerce.primaryCtaLabel} />
                <CtaButton href={siteConfig.commerce.fallbackContactHref} variant="ghost" trackingId="goods_detail_contact">
                  商品について問い合わせる
                </CtaButton>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h2 className="text-xl font-bold text-slate-900">特徴</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h2 className="text-xl font-bold text-slate-900">おすすめ対象</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {product.recommendedFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h2 className="text-xl font-bold text-slate-900">使い方</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {product.usage.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h2 className="text-xl font-bold text-slate-900">注意事項</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {product.cautions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5">
              <h2 className="text-xl font-bold text-slate-900">保存方法</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                {product.storage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">FAQ</h2>
              <div className="mt-4 space-y-3">
                {product.faq.map((item) => (
                  <details
                    key={item.q}
                    className="bubble-hover group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-cyan-300 open:bg-cyan-50/40"
                  >
                    <summary className="cursor-pointer list-none pr-7 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="float-right text-cyan-700 transition group-open:rotate-45">＋</span>
                    </summary>
                    <p className="mt-3 text-sm leading-8 text-slate-700">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </article>

        <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
          <h2 className="text-xl font-bold text-slate-900">次に見るページ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            商品の使い方はブログ・FAQも合わせて確認すると、運用での失敗を減らせます。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton href="/blog">ブログを見る</CtaButton>
            <CtaButton href="/faq" variant="ghost">
              FAQを見る
            </CtaButton>
            <CtaButton href="/goods" variant="ghost">
              物販一覧へ戻る
            </CtaButton>
          </div>
        </section>

        <div className="mt-6 text-sm">
          <Link href="/goods" data-track-event="goods_back_to_index" className="font-semibold text-cyan-800 underline-offset-4 hover:underline">
            ← 物販一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}


