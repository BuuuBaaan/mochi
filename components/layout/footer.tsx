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
    <footer className="border-t border-white/18 bg-[linear-gradient(166deg,#06213d,#103f68_46%,#1a6584)] text-slate-100">
      <div className="layout-shell grid w-full gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <section>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/28 bg-white/12 px-3 py-2 backdrop-blur-sm">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={50}
              height={50}
              className="logo-plate h-12 w-12 rounded-full object-contain p-1"
            />
            <div>
              <h2 className="font-display text-base font-semibold tracking-[0.05em] text-white">{siteConfig.name}</h2>
              <p className="font-ui text-xs tracking-[0.17em] text-cyan-100/90">OFFICIAL BRAND</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-100/90">
            ラメ系とダルマ系を中心に、屋外・屋根なし・雨ざらし飼育で「強い個体」を目指して育成。
            迅速丁寧な対応とスピーディな発送を心がけています。購入前の不安はFAQと動画で解消できます。
          </p>
        </section>

        <section>
          <h2 className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/88">
            外部リンク
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={siteConfig.social.yahooAuctions}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                ヤフオク出品中一覧
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.social.baseShop}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
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
                  className="underline-offset-4 hover:text-white hover:underline"
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
                className="underline-offset-4 hover:text-white hover:underline"
              >
                YouTubeチャンネル
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/88">
            ポリシー
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-4 hover:text-white hover:underline"
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
              className="ml-2 font-semibold text-cyan-200 underline underline-offset-4"
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

