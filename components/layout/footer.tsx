import Image from "next/image";
import Link from "next/link";

import { getAmazonStoreUrl } from "@/lib/commerce";
import { siteConfig } from "@/site.config";

const legalLinks = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/rss.xml", label: "RSS" },
];

export function Footer() {
  const amazonStoreUrl = getAmazonStoreUrl();

  return (
    <footer className="relative border-t border-[var(--line-soft)] bg-[linear-gradient(166deg,#020913,#071a35_46%,#0d3763)] text-slate-100 shadow-[0_-18px_44px_rgba(1,9,24,0.52)]">
      <div className="layout-shell grid w-full gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <section className="rounded-[1.35rem] border border-[var(--line-soft)] bg-[linear-gradient(160deg,rgba(8,28,52,0.62),rgba(9,31,58,0.52)_56%,rgba(6,20,40,0.56))] p-5">
          <div className="inline-flex items-center gap-3 rounded-[1rem] border border-[var(--line-strong)] bg-white/8 px-3 py-2 backdrop-blur-sm [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={50}
              height={50}
              className="logo-plate h-12 w-12 rounded-full object-contain p-1"
            />
            <div>
              <h2 className="font-display text-base font-semibold tracking-[0.05em] text-white">{siteConfig.name}</h2>
              <p className="font-ui text-xs tracking-[0.17em] text-[var(--header-brand-subtext)]">OFFICIAL BRAND</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-100/88">
            ラメ系とダルマ系を中心に、屋外・屋根なし・雨ざらし飼育で「強い個体」を目指して育成。
            迅速丁寧な対応とスピーディな発送を心がけています。購入前の不安はFAQと動画で解消できます。
          </p>
        </section>

        <section className="rounded-[1.35rem] border border-[var(--line-soft)] bg-[linear-gradient(160deg,rgba(8,28,52,0.62),rgba(9,31,58,0.52)_56%,rgba(6,20,40,0.56))] p-5">
          <h2 className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-soft)] bg-white/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/88 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            外部リンク
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={siteConfig.social.yahooAuctions}
                target="_blank"
                rel="noreferrer"
                data-track-event="footer_link"
                data-track-label="footer_auction"
                className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
              >
                ヤフオク出品中一覧
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.social.baseShop}
                target="_blank"
                rel="noreferrer"
                data-track-event="footer_link"
                data-track-label="footer_base"
                className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
              >
                BASEショップ
              </Link>
            </li>
            <li>
              {amazonStoreUrl ? (
                <Link
                  href={amazonStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track-event="footer_link"
                  data-track-label="footer_amazon"
                  className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
                >
                  Amazonページ
                </Link>
              ) : (
                <span className="text-slate-300">Amazon準備中（物販ページで確認）</span>
              )}
            </li>
            <li>
              <Link
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                data-track-event="footer_link"
                data-track-label="footer_youtube"
                className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
              >
                YouTubeチャンネル
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                data-track-event="footer_link"
                data-track-label="footer_instagram"
                className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </section>

        <section className="rounded-[1.35rem] border border-[var(--line-soft)] bg-[linear-gradient(160deg,rgba(8,28,52,0.62),rgba(9,31,58,0.52)_56%,rgba(6,20,40,0.56))] p-5">
          <h2 className="font-ui inline-flex rounded-[0.7rem] border border-[var(--line-soft)] bg-white/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/88 [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            ポリシー
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-track-event="footer_link"
                  data-track-label={link.href}
                  className="underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-300">
            物販のお問い合わせ:
            <Link
              href="/contact"
              data-track-event="footer_link"
              data-track-label="footer_contact"
              className="ml-2 font-semibold text-cyan-200 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
            >
              お問い合わせページ
            </Link>
          </p>
        </section>
      </div>
      <div className="font-ui border-t border-white/12 py-4 text-center text-xs tracking-[0.08em] text-slate-200/90">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

