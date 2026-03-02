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

const heroPlatformCtas: Array<{
  label: string;
  href: string;
  external: boolean;
  variant: "primary" | "secondary" | "ghost";
}> = [
  {
    label: "出品中を見に行く（ヤフオク）",
    href: siteConfig.social.yahooAuctions,
    external: true,
    variant: "primary",
  },
  {
    label: "BASEショップへ",
    href: siteConfig.social.baseShop,
    external: true,
    variant: "secondary",
  },
  {
    label: "YouTubeで現物動画を見る",
    href: siteConfig.social.youtube,
    external: true,
    variant: "ghost",
  },
  {
    label: "Instagramで最新を追う",
    href: siteConfig.social.instagram,
    external: true,
    variant: "ghost",
  },
];

const actionCards = [
  {
    kicker: "MOVIE",
    title: "YouTubeで現物動画",
    body: "体型や泳ぎを先に確認して、購入判断の精度を上げる。",
    href: siteConfig.social.youtube,
    external: true,
    cardClass:
      "border-[var(--home-action-movie-border)] bg-[var(--home-action-movie-bg)]",
  },
  {
    kicker: "SOCIAL",
    title: "Instagramで最新情報",
    body: "選別中の個体や飼育の進捗を、短時間で追う。",
    href: siteConfig.social.instagram,
    external: true,
    cardClass:
      "border-[var(--home-action-social-border)] bg-[var(--home-action-social-bg)]",
  },
  {
    kicker: "AUCTION",
    title: "ヤフオクの出品中個体",
    body: "不定期出品の最新在庫をそのまま確認する。",
    href: siteConfig.social.yahooAuctions,
    external: true,
    cardClass:
      "border-[var(--home-action-auction-border)] bg-[var(--home-action-auction-bg)]",
  },
  {
    kicker: "FAQ",
    title: "購入前FAQ",
    body: "死着・水合わせ・発送の不安を先に解消する。",
    href: "/faq",
    external: false,
    cardClass:
      "border-[var(--home-action-faq-border)] bg-[var(--home-action-faq-bg)]",
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
      <section className="sparkle-strip relative isolate overflow-hidden border-b border-white/20 py-[var(--space-section)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-12%] top-[-26%] h-[24rem] w-[24rem] rounded-full bg-cyan-200/20 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-32%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-rose-300/20 blur-[110px]"
        />
        <div className="layout-shell grid w-full gap-8 content-block lg:grid-cols-[1.24fr_0.76fr] lg:items-start">
          <div className="min-w-0">
            <div className="rise-in inline-flex items-center gap-3 rounded-[0.8rem] border border-[var(--home-hero-capsule-border)] bg-[var(--home-hero-capsule-bg)] px-4 py-2 backdrop-blur-sm [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
              <span className="font-ui text-[11px] font-semibold tracking-[0.2em] text-[var(--home-hero-capsule-text)] [text-shadow:0_2px_8px_rgba(5,17,32,0.75)]">
                MOCHIMEDAKA OFFICIAL
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={32}
                  height={32}
                  className="h-7 w-7 rounded-full object-contain opacity-92"
                />
              </span>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <span className="logo-plate rise-in inline-flex h-[5.25rem] w-[5.25rem] flex-none items-center justify-center rounded-full p-1 shadow-[0_16px_36px_rgba(0,9,25,0.48)] sm:h-[6.5rem] sm:w-[6.5rem]">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={90}
                  height={90}
                  className="h-[4.35rem] w-[4.35rem] rounded-full object-contain sm:h-[5.5rem] sm:w-[5.5rem]"
                />
              </span>
              <div className="min-w-0">
                <p className="font-ui on-dark-eyebrow rise-in text-xs font-semibold uppercase tracking-[0.3em]">
                  Aquatic Craft
                </p>
                <h1 className="font-brand on-dark-title rise-in rise-delay-1 mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                  ラメの煌めきと、強さのある育成個体を。
                </h1>
              </div>
            </div>

            <p className="on-dark-copy rise-in rise-delay-2 mt-5 max-w-3xl text-base leading-8">
              もちめだかは、雨ざらし飼育で鍛えた個体づくりを軸に、ラメ系・ダルマ系の魅力を発信するブランドです。
              生体はヤフオク/BASE、物販はAmazonへ、迷わず進める導線で案内します。
            </p>

            <div className="rise-in rise-delay-3 mt-7 grid gap-3 sm:grid-cols-2">
              {heroPlatformCtas.map((cta) => (
                <CtaButton
                  key={cta.href}
                  href={cta.href}
                  target={cta.external ? "_blank" : undefined}
                  rel={cta.external ? "noreferrer" : undefined}
                  variant={cta.variant}
                  className="justify-start px-4 text-left"
                >
                  {cta.label}
                </CtaButton>
              ))}
              {amazonStoreUrl ? (
                <CtaButton href={amazonStoreUrl} target="_blank" rel="noreferrer" className="justify-start px-4 text-left">
                  Amazonページへ
                </CtaButton>
              ) : (
                <span className="font-ui inline-flex items-center rounded-[0.8rem] border border-white/24 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.06em] text-slate-100 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
                  Amazon準備中
                </span>
              )}
              {!amazonStoreUrl ? (
                <CtaButton href="/contact" variant="ghost" className="justify-start px-4 text-left">
                  入荷通知を問い合わせる
                </CtaButton>
              ) : null}
              <CtaButton href="/shop" variant="ghost" className="justify-start px-4 text-left">
                購入の流れを確認
              </CtaButton>
            </div>
          </div>

          <div className="glass-panel rise-in rise-delay-3 rounded-[1.7rem] p-6 text-white">
            <h2 className="font-display on-dark-title text-xl font-bold">信頼のために公開していること</h2>
            <ul className="on-dark-copy mt-4 space-y-3 text-sm leading-7">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--home-trust-dot)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] text-[var(--hero-badge-text)]">迅速発送</Badge>
              <Badge className="border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] text-[var(--hero-badge-text)]">初心者歓迎</Badge>
              <Badge className="border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] text-[var(--hero-badge-text)]">動画公開</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(84,209,214,0.16),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(241,84,125,0.16),transparent_30%),linear-gradient(180deg,rgba(6,20,39,0.74),rgba(8,26,48,0.74))]"
        />
        <div className="layout-shell w-full content-block">
          <div className="relative rounded-[1.9rem] border border-[var(--home-quick-panel-border)] bg-[var(--home-quick-panel-bg)] p-6 shadow-[0_22px_48px_rgba(1,10,25,0.44)] md:p-8">
            <p className="mb-5 font-ui text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-quick-panel-kicker)]">Quick Actions</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {actionCards.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  className={`action-tile group block border p-5 shadow-[0_18px_36px_rgba(1,10,25,0.42)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(1,8,21,0.52)] [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)] ${action.cardClass}`}
                >
                  <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--home-action-kicker)]">{action.kicker}</p>
                  <h2 className="font-display mt-2 text-lg font-semibold tracking-tight text-[var(--home-action-title)]">{action.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--home-action-body)]">{action.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2">
                    <span className="font-ui text-xs font-semibold tracking-[0.12em] text-[var(--home-action-move)]">MOVE</span>
                    <span className="text-sm font-semibold text-[var(--home-action-move)]">→</span>
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
              <p className="font-ui on-dark-eyebrow inline-flex rounded-[0.7rem] border border-[var(--line-strong)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
                Goods
              </p>
              <h2 className="font-display on-dark-title mt-3 text-3xl sm:text-4xl">物販（餌 / グリーンウォーター）</h2>
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
                    className="font-ui inline-flex items-center rounded-[0.75rem] border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold tracking-[0.03em] text-[var(--text-inverse)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]"
                  >
                    Amazon準備中
                  </span>
                  <CtaButton href="/contact" variant="ghost">
                    入荷通知を問い合わせる
                  </CtaButton>
                </>
              )}
              <CtaButton href="/goods" variant="ghost">
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
                  className="bubble-hover bubble-size-lg rounded-[1rem] border border-white/35 bg-white/14 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-white/20 [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]"
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
                  className="font-ui bubble-hover bubble-size-md rounded-[0.7rem] border border-white/35 bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.04em] text-[var(--home-goods-subtle-text)] transition hover:bg-white/20 [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]"
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

      <section className="section-aqua py-16">
        <div className="layout-shell w-full content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-strong)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
                Varieties
              </p>
              <h2 className="section-title mt-3">注目の品種図鑑</h2>
            </div>
            <Link href="/varieties" className="font-ui text-sm font-semibold tracking-[0.02em] text-cyan-200 hover:underline">
              すべての品種を見る →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredVarieties.map((variety) => (
              <Card key={variety.slug} className="p-4">
                <FishTile label={variety.title} imageSrc={variety.image} className="h-32" />
                <p className="font-ui mt-3 text-xs uppercase tracking-[0.17em] text-cyan-200">{variety.highlight}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-slate-50">
                  <Link href={`/varieties/${variety.slug}`} className="hover:text-cyan-200">
                    {variety.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{variety.description}</p>
                <p className="mt-3 text-xs font-semibold text-slate-300">
                  初心者向け難易度: {toStars(variety.difficulty)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-aqua-soft py-16">
        <div className="layout-shell w-full content-block">
          <div className="mb-6">
            <p className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-strong)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
              How To Buy
            </p>
            <h2 className="section-title mt-3">購入までの流れ</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {flowSteps.map((step) => (
              <Card key={step.title} className="p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{step.body}</p>
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

      <section className="section-aqua py-16">
        <div className="layout-shell w-full content-block">
          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-strong)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
                Blog
              </p>
              <h2 className="section-title mt-3">最新の記事</h2>
            </div>
            <Link href="/blog" className="font-ui text-sm font-semibold tracking-[0.02em] text-cyan-200 hover:underline">
              ブログ一覧へ →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="p-5">
                <p className="font-ui text-xs uppercase tracking-[0.16em] text-cyan-200">{post.category}</p>
                <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-slate-50">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{post.description}</p>
                <p className="mt-4 text-xs text-slate-300">
                  {formatDate(post.date)} ・ {post.readingTime}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-aqua-soft pb-16">
        <div className="layout-shell grid w-full gap-8 content-block md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-strong)] bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
              Movie
            </p>
            <h2 className="section-title mt-3">現物個体の動画チェック</h2>
            <p className="mt-4 text-sm leading-8 text-slate-200">
              体型・泳ぎ・ラメの光り方は、写真だけでは判断しづらいポイントです。
              YouTubeで現物動画を公開し、購入前の不安を減らします。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer" variant="secondary">
                YouTubeで現物動画を見る
              </CtaButton>
              <CtaButton href="/faq" variant="ghost">
                よくある不安を確認
              </CtaButton>
            </div>
          </div>
          {hasVideo ? (
            <div className="overflow-hidden rounded-[1.6rem] border border-[var(--line-strong)] bg-[linear-gradient(160deg,#06213d,#0d3f66_56%,#15608e)] p-2 shadow-[0_20px_40px_rgba(0,9,23,0.52)]">
              <div className="relative aspect-video overflow-hidden rounded-[1.1rem]">
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
            <div className="rounded-[1.4rem] border border-dashed border-[var(--line-strong)] bg-white/10 p-6">
              <p className="text-sm leading-7 text-slate-200">
                `site.config.ts` の `featuredVideoId` にYouTube動画IDを設定すると、最新動画をここへ埋め込み表示します。
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
