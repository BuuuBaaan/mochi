import Image from "next/image";
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
    kicker: "MOVIE",
    title: "YouTubeで現物動画",
    body: "体型や泳ぎを先に確認して、購入判断の精度を上げる。",
    href: siteConfig.social.youtube,
    external: true,
    cardClass:
      "border-[#66d8dc]/60 bg-[linear-gradient(155deg,rgba(234,252,255,0.9),rgba(214,243,250,0.88)_58%,rgba(220,235,255,0.9))]",
  },
  {
    kicker: "SOCIAL",
    title: "Instagramで最新情報",
    body: "選別中の個体や飼育の進捗を、短時間で追う。",
    href: siteConfig.social.instagram,
    external: true,
    cardClass:
      "border-[#8dafe9]/60 bg-[linear-gradient(155deg,rgba(241,247,255,0.92),rgba(226,236,255,0.9)_56%,rgba(236,232,255,0.88))]",
  },
  {
    kicker: "AUCTION",
    title: "ヤフオクの出品中個体",
    body: "不定期出品の最新在庫をそのまま確認する。",
    href: siteConfig.social.yahooAuctions,
    external: true,
    cardClass:
      "border-[#f3c75f]/65 bg-[linear-gradient(155deg,rgba(255,248,226,0.92),rgba(255,239,197,0.9)_54%,rgba(255,231,178,0.88))]",
  },
  {
    kicker: "FAQ",
    title: "購入前FAQ",
    body: "死着・水合わせ・発送の不安を先に解消する。",
    href: "/faq",
    external: false,
    cardClass:
      "border-[#8f87d1]/55 bg-[linear-gradient(155deg,rgba(245,243,255,0.92),rgba(232,236,255,0.9)_56%,rgba(227,242,255,0.9))]",
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
      <section className="sparkle-strip relative isolate overflow-hidden border-b border-white/20 py-20 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(4,17,32,0.62)_0%,rgba(4,17,32,0.24)_42%,transparent_74%)]"
        />
        <div className="layout-shell grid w-full gap-10 content-block md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <div className="rise-in inline-flex items-center gap-3 rounded-full border border-[#f3c85b]/55 bg-[#f6c93d]/14 px-4 py-2 backdrop-blur-sm">
              <span className="font-ui text-[11px] font-semibold tracking-[0.2em] text-[#ffe7a1] [text-shadow:0_2px_8px_rgba(5,17,32,0.75)]">
                MOCHIMEDAKA OFFICIAL
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={32}
                  height={32}
                  className="h-7 w-7 rounded-full object-cover opacity-42 saturate-[0.62] contrast-85"
                />
              </span>
            </div>
            <p className="font-ui on-dark-eyebrow rise-in text-xs font-semibold uppercase tracking-[0.3em]">
              Aquatic Craft
            </p>
            <h1 className="font-display on-dark-title rise-in rise-delay-1 mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              ラメの煌めきと、強さのある育成個体を。
            </h1>
            <p className="on-dark-copy rise-in rise-delay-2 mt-5 max-w-2xl text-base leading-8">
              もちめだかは、雨ざらし飼育で鍛えた個体づくりを軸に、ラメ系・ダルマ系の魅力を発信するブランドです。
              生体はヤフオク/BASE、物販はAmazonへ、迷わず進める導線で案内します。
            </p>
            <div className="rise-in rise-delay-3 mt-7 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer">
                出品中を見に行く（ヤフオク）
              </CtaButton>
              <CtaButton href="/goods" variant="ghost" className="ring-[#f6cc63]/45 bg-white/12 text-[#f3fbff] hover:bg-white/20">
                物販を見る
              </CtaButton>
              <CtaButton href="/shop" variant="ghost" className="ring-[#f6cc63]/45 bg-white/12 text-[#f3fbff] hover:bg-white/20">
                購入の流れを確認
              </CtaButton>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-white">
            <h2 className="font-display on-dark-title text-lg font-bold">信頼のために公開していること</h2>
            <ul className="on-dark-copy mt-4 space-y-3 text-sm leading-7">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ffd15c]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="border-[#f7cf67]/45 bg-[#f7c841]/15 text-[#fff1c8]">迅速発送</Badge>
              <Badge className="border-[#f7cf67]/45 bg-[#f7c841]/15 text-[#fff1c8]">初心者歓迎</Badge>
              <Badge className="border-[#f7cf67]/45 bg-[#f7c841]/15 text-[#fff1c8]">動画公開</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(84,209,214,0.2),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(241,191,61,0.18),transparent_30%),linear-gradient(180deg,rgba(243,251,255,0.92),rgba(232,245,253,0.92))]"
        />
        <div className="layout-shell w-full content-block">
          <div className="relative rounded-[2rem] border border-[#a2c9e1]/70 bg-[linear-gradient(155deg,rgba(251,255,255,0.88),rgba(238,248,255,0.9)_52%,rgba(233,246,255,0.88))] p-6 shadow-[0_18px_44px_rgba(9,35,58,0.14)] md:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-[#2e6f96]">Quick Actions</p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-[#123a5c] md:text-3xl">最短導線をここに集約</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#325a78]">
                現物確認・最新情報・出品在庫・不安解消を一つの帯に統合。ロゴの勢いをアクセントに、迷わない行動導線へ。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {actionCards.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                className={`action-tile group block rounded-2xl border p-5 shadow-[0_14px_30px_rgba(11,38,62,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(11,38,62,0.18)] ${action.cardClass}`}
              >
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#32678d]">{action.kicker}</p>
                <h2 className="font-display mt-2 text-lg font-semibold tracking-tight text-[#102f4b]">{action.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#2b506d]">{action.body}</p>
                <div className="mt-5 inline-flex items-center gap-2">
                  <span className="font-ui text-xs font-semibold tracking-[0.12em] text-[#4f2f10]">MOVE</span>
                  <span className="text-sm font-semibold text-[#4f2f10]">→</span>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sparkle-strip relative overflow-hidden border-y border-white/15 py-16 text-white">
        <div className="layout-shell w-full content-block">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-ui on-dark-eyebrow text-xs font-semibold uppercase tracking-[0.26em]">Goods</p>
              <h2 className="font-display on-dark-title mt-2 text-3xl sm:text-4xl">物販（餌 / グリーンウォーター）</h2>
              <p className="on-dark-copy mt-3 max-w-2xl text-sm leading-8">
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
                    className="font-ui inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-[0.03em] text-[#eff8ff]"
                  >
                    Amazon準備中
                  </span>
                  <CtaButton href="/contact" variant="ghost" className="ring-[#f6cc63]/45 bg-white/12 text-[#f3fbff] hover:bg-white/20">
                    入荷通知を問い合わせる
                  </CtaButton>
                </>
              )}
              <CtaButton href="/goods" variant="ghost" className="ring-[#f6cc63]/45 bg-white/12 text-[#f3fbff] hover:bg-white/20">
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
                  className="bubble-hover rounded-2xl border border-white/35 bg-white/14 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <p className="font-ui on-dark-eyebrow text-xs font-semibold uppercase tracking-[0.14em]">注目商品</p>
                  <p className="font-display on-dark-title mt-2 text-lg font-semibold">{product.name}</p>
                  <p className="on-dark-copy mt-1 text-sm leading-7">{product.shortCatch}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {goodsQuickTabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="font-ui bubble-hover rounded-full border border-white/35 bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.03em] text-[#edf9ff] transition hover:bg-white/20"
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
        <div className="layout-shell w-full content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Varieties</p>
              <h2 className="section-title mt-2">注目の品種図鑑</h2>
            </div>
            <Link href="/varieties" className="font-ui text-sm font-semibold tracking-[0.02em] text-cyan-800 hover:underline">
              すべての品種を見る →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredVarieties.map((variety) => (
              <Card key={variety.slug} className="p-4">
                <FishTile label={variety.title} imageSrc={variety.image} className="h-32" />
                <p className="font-ui mt-3 text-xs uppercase tracking-[0.17em] text-cyan-700">{variety.highlight}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-slate-900">
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
        <div className="layout-shell w-full content-block">
          <div className="mb-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">How To Buy</p>
            <h2 className="section-title mt-2">購入までの流れ</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {flowSteps.map((step) => (
              <Card key={step.title} className="p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
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
        <div className="layout-shell w-full content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Blog</p>
              <h2 className="section-title mt-2">最新の記事</h2>
            </div>
            <Link href="/blog" className="font-ui text-sm font-semibold tracking-[0.02em] text-cyan-800 hover:underline">
              ブログ一覧へ →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="p-5">
                <p className="font-ui text-xs uppercase tracking-[0.16em] text-cyan-700">{post.category}</p>
                <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-slate-900">
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
        <div className="layout-shell grid w-full gap-8 content-block md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Movie</p>
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
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(160deg,#0b3154,#114f73_56%,#1a6d89)] p-2 shadow-[0_18px_36px_rgba(8,35,60,0.28)]">
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
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/82 p-6">
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




