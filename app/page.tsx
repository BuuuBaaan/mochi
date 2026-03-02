import Link from "next/link";

import { ProductCard } from "@/components/goods/product-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { FishTile } from "@/components/visual/fish-tile";
import { getFeaturedBlogPosts, getFeaturedVarieties } from "@/lib/content";
import { goodsProducts, getAmazonStoreUrl } from "@/lib/commerce";
import { buildMetadata } from "@/lib/seo";
import { formatDate, toStars } from "@/lib/utils";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "公式サイト",
  description:
    "もちめだか公式サイト。雨ざらし飼育で磨いたラメ系・ダルマ系メダカの信頼情報、購入導線、物販（餌/グリーンウォーター）をまとめて確認できます。",
  path: "/",
  keywords: ["メダカ", "ラメメダカ", "ダルマめだか", "ヤフオク", "BASE", "Amazon"],
});

const trustPoints = [
  "雨ざらし飼育で鍛えた“強い個体”を目指して育成",
  "ラメ系中心。ダルマ作りにも継続的に挑戦",
  "発送・問い合わせはスピード重視で対応",
  "現物個体の動画をYouTubeで公開",
];

const flowSteps = [
  {
    title: "1. 目的で選ぶ",
    body: "鑑賞重視なら品種図鑑、購入検討なら出品ページ、飼育改善ならブログとFAQへ。最短で必要情報に到達できます。",
  },
  {
    title: "2. 動画で確認する",
    body: "写真だけでは分かりづらい体型・泳ぎ・ラメの見え方は、YouTubeの現物動画で確認してください。",
  },
  {
    title: "3. 購入先へ移動する",
    body: "生体はヤフオク・BASE、物販はAmazonへ送客。価格・在庫・配送条件は各販売ページ表示が最新です。",
  },
];

const goodsQuickTabs = [
  { label: "使い方と注意点", href: "/goods" },
  { label: "購入前FAQ", href: "/faq" },
  { label: "入荷通知を問い合わせる", href: "/contact" },
];

const actionCards = [
  {
    title: "YouTubeで現物動画",
    body: "体型や泳ぎを先に確認して、購入判断の精度を上げる。",
    href: siteConfig.social.youtube,
    external: true,
  },
  {
    title: "Instagramで最新情報",
    body: "選別中の個体や飼育の進捗を、短時間で追う。",
    href: siteConfig.social.instagram,
    external: true,
  },
  {
    title: "ヤフオクの出品中個体",
    body: "不定期出品の最新在庫をそのまま確認する。",
    href: siteConfig.social.yahooAuctions,
    external: true,
  },
  {
    title: "購入前FAQ",
    body: "死着・水合わせ・発送の不安を先に解消する。",
    href: "/faq",
    external: false,
  },
];

export default async function Home() {
  const [featuredPosts, featuredVarieties] = await Promise.all([
    getFeaturedBlogPosts(3),
    getFeaturedVarieties(4),
  ]);

  const hasVideo = siteConfig.featuredVideoId !== "YOUTUBE_VIDEO_ID";
  const amazonStoreUrl = getAmazonStoreUrl();

  return (
    <div className="page-wrap">
      <section className="sparkle-strip relative isolate overflow-hidden border-b border-white/20 bg-[linear-gradient(146deg,#041229_0%,#0a3458_46%,#0f5f78_100%)] py-20 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 content-block md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="rise-in text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/90">
              Aquatic Craft
            </p>
            <h1 className="font-display rise-in rise-delay-1 mt-4 text-4xl leading-tight text-white sm:text-5xl">
              ラメの煌めきと、強さのある育成個体を。
            </h1>
            <p className="rise-in rise-delay-2 mt-5 max-w-2xl text-base leading-8 text-slate-100/95">
              もちめだかは、雨ざらし飼育で鍛えた個体づくりを軸に、ラメ系・ダルマ系の魅力を発信するブランドです。
              生体はヤフオク/BASE、物販はAmazonへ、迷わず進める導線で案内します。
            </p>
            <div className="rise-in rise-delay-3 mt-7 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer">
                出品中を見に行く（ヤフオク）
              </CtaButton>
              <CtaButton href="/goods" variant="ghost" className="ring-white/35 bg-white/14 text-white hover:bg-white/20">
                物販を見る
              </CtaButton>
              <CtaButton href="/shop" variant="ghost" className="ring-white/35 bg-white/14 text-white hover:bg-white/20">
                購入の流れを確認
              </CtaButton>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-white">
            <h2 className="text-lg font-bold">信頼のために公開していること</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-100/95">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="border-cyan-200/55 bg-cyan-200/18 text-cyan-50">迅速発送</Badge>
              <Badge className="border-cyan-200/55 bg-cyan-200/18 text-cyan-50">初心者歓迎</Badge>
              <Badge className="border-cyan-200/55 bg-cyan-200/18 text-cyan-50">動画公開</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="surface py-10">
        <div className="mx-auto w-full max-w-6xl content-block">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {actionCards.map((action) => (
              <Card key={action.title} className="p-5">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">{action.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">{action.body}</p>
                <div className="mt-5">
                  <CtaButton
                    href={action.href}
                    variant="secondary"
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    className="w-full justify-center"
                  >
                    開く
                  </CtaButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/15 bg-[linear-gradient(166deg,#041228,#0b3356_44%,#0b5a70_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl content-block">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90">Goods</p>
              <h2 className="font-display mt-2 text-3xl text-white sm:text-4xl">物販（餌 / グリーンウォーター）</h2>
              <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-100/95">
                生体とは別に、日常運用を支える2商品だけを厳選。購入はAmazonへ送客し、準備中の場合は問い合わせ導線へ自動切替します。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {amazonStoreUrl ? (
                <CtaButton href={amazonStoreUrl} target="_blank" rel="noreferrer">
                  Amazonページへ
                </CtaButton>
              ) : (
                <>
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200"
                  >
                    Amazon準備中
                  </span>
                  <CtaButton href="/contact" variant="ghost" className="ring-white/35 bg-white/14 text-white hover:bg-white/20">
                    入荷通知を問い合わせる
                  </CtaButton>
                </>
              )}
              <CtaButton href="/goods" variant="ghost" className="ring-white/35 bg-white/14 text-white hover:bg-white/20">
                物販一覧を見る
              </CtaButton>
            </div>
          </div>
          <div className="mb-6 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              {goodsProducts.map((product) => (
                <Link
                  key={`home-tab-${product.slug}`}
                  href={`/goods/${product.slug}`}
                  className="bubble-hover rounded-2xl border border-white/28 bg-white/10 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-white/16"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/90">注目商品</p>
                  <p className="mt-2 text-lg font-semibold text-white">{product.name}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-100/95">{product.shortCatch}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {goodsQuickTabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="bubble-hover rounded-full border border-white/30 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-white/16"
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {goodsProducts.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Varieties</p>
              <h2 className="section-title mt-2">注目の品種図鑑</h2>
            </div>
            <Link href="/varieties" className="text-sm font-semibold text-cyan-800 hover:underline">
              すべての品種を見る →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredVarieties.map((variety) => (
              <Card key={variety.slug} className="p-4">
                <FishTile label={variety.title} imageSrc={variety.image} className="h-32" />
                <p className="mt-3 text-xs uppercase tracking-[0.17em] text-cyan-700">{variety.highlight}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  <Link href={`/varieties/${variety.slug}`} className="hover:text-cyan-700">
                    {variety.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{variety.description}</p>
                <p className="mt-3 text-xs font-semibold text-slate-600">
                  初心者向け難易度: {toStars(variety.difficulty)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="surface py-16">
        <div className="mx-auto w-full max-w-6xl content-block">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">How To Buy</p>
            <h2 className="section-title mt-2">購入までの流れ</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {flowSteps.map((step) => (
              <Card key={step.title} className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{step.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaButton href="/shop">購入導線ページへ</CtaButton>
            <CtaButton href="/faq" variant="ghost">
              FAQを見る
            </CtaButton>
            <CtaButton href="/goods" variant="ghost">
              物販の詳細を見る
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Blog</p>
              <h2 className="section-title mt-2">最新の記事</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-cyan-800 hover:underline">
              ブログ一覧へ →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-700">{post.category}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cyan-700">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{post.description}</p>
                <p className="mt-4 text-xs text-slate-600">
                  {formatDate(post.date)} ・ {post.readingTime}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 content-block md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Movie</p>
            <h2 className="section-title mt-2">現物個体の動画チェック</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700">
              体型・泳ぎ・ラメの光り方は、写真だけでは判断しづらいポイントです。
              YouTubeで現物動画を公開し、購入前の不安を減らします。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                YouTubeで現物動画を見る
              </CtaButton>
              <CtaButton href="/faq" variant="ghost">
                よくある不安を確認
              </CtaButton>
            </div>
          </div>
          {hasVideo ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/95 p-2 shadow-lg">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <iframe
                  title="もちめだか最新動画"
                  src={`https://www.youtube.com/embed/${siteConfig.featuredVideoId}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/90 p-6">
              <p className="text-sm leading-7 text-slate-700">
                `site.config.ts` の `featuredVideoId` にYouTube動画IDを設定すると、最新動画をここへ埋め込み表示します。
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}



