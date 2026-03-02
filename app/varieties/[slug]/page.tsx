import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { FishTile } from "@/components/visual/fish-tile";
import { JsonLd } from "@/lib/json-ld";
import { getAllVarieties, getVarietyBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, toStars } from "@/lib/utils";
import { siteConfig } from "@/site.config";

type VarietyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const varieties = await getAllVarieties();
  return varieties.map((variety) => ({ slug: variety.slug }));
}

export async function generateMetadata({ params }: VarietyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const variety = await getVarietyBySlug(slug);

  if (!variety) {
    return buildMetadata({
      title: "品種が見つかりません",
      description: "指定された品種は見つかりませんでした。",
      path: "/varieties",
    });
  }

  return buildMetadata({
    title: `${variety.title}の特徴と飼育コツ`,
    description: variety.description,
    path: `/varieties/${variety.slug}`,
    keywords: variety.tags,
    image: absoluteUrl(`/api/og?title=${encodeURIComponent(variety.title)}&subtitle=${encodeURIComponent("品種図鑑")}`),
  });
}

export default async function VarietyDetailPage({ params }: VarietyDetailPageProps) {
  const { slug } = await params;
  const variety = await getVarietyBySlug(slug);

  if (!variety) {
    notFound();
  }

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
        name: "品種図鑑",
        item: absoluteUrl("/varieties"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: variety.title,
        item: absoluteUrl(`/varieties/${variety.slug}`),
      },
    ],
  };

  const productLikeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: variety.title,
    description: variety.description,
    keywords: variety.tags.join(","),
    url: absoluteUrl(`/varieties/${variety.slug}`),
  };

  return (
    <div className="page-wrap pb-16">
      <JsonLd data={[breadcrumbJsonLd, productLikeJsonLd]} />

      <div className="layout-reading w-full content-block content-stage-reading pt-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "品種図鑑", href: "/varieties" },
            { label: variety.title },
          ]}
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">{variety.highlight}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900">{variety.title}</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700">{variety.description}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
            <FishTile label={`${variety.title}のイメージ`} imageSrc={variety.image} className="h-36" />
            <div>
              <p className="text-sm font-semibold text-slate-800">
                初心者向け難易度: <span className="text-cyan-800">{toStars(variety.difficulty)}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {variety.tags.map((tag) => (
                  <span
                    key={`${variety.slug}-${tag}`}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-900"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rich-content mt-8">
            <MDXRemote
              source={variety.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
              components={mdxComponents}
            />
          </div>
        </article>

        <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
          <h2 className="text-xl font-bold text-slate-900">現物確認はこちら</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            体型や光り方の最終判断は動画が有効です。YouTubeの現物動画、ヤフオク出品画像を合わせて確認してください。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer" variant="secondary" trackingId="variety_detail_youtube">
              YouTubeで現物動画を見る
            </CtaButton>
            <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer" variant="ghost" trackingId="variety_detail_auction">
              出品中を見に行く
            </CtaButton>
            <CtaButton href="/faq" variant="ghost" trackingId="variety_detail_faq">
              購入前FAQを見る
            </CtaButton>
            <CtaButton href="/goods" variant="ghost" trackingId="variety_detail_goods">
              物販を見る
            </CtaButton>
          </div>
        </section>

        <div className="mt-6 text-sm">
          <Link href="/varieties" data-track-event="varieties_back_to_index" className="font-semibold text-cyan-800 underline-offset-4 hover:underline">
            ← 品種図鑑一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
