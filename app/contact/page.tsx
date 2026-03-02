import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "問い合わせ",
  description:
    "問い合わせフォームとメール連絡導線。フォーム未設定時でもメール・外部販売ページのメッセージで連絡可能です。",
  path: "/contact",
  keywords: ["メダカ 問い合わせ", "Formspree", "購入相談", "Amazon 物販相談"],
});

export default function ContactPage() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="飼育相談、在庫導線、物販の質問、購入前確認などを受け付けます。販売契約に関する最終連絡は、購入先（ヤフオク/BASE/Amazon）内メッセージを優先してください。"
        badges={["メール対応", "フォーム対応", "迅速返信"]}
      />

      <div className="layout-shell w-full content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "問い合わせ" },
          ]}
        />

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">問い合わせフォーム</h2>
            {formspreeEndpoint ? (
              <p className="mt-2 text-sm text-slate-700">
                フォーム送信後、通常24〜48時間以内を目安に返信します。
              </p>
            ) : (
              <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-7 text-amber-900">
                フォーム送信は未設定です。`NEXT_PUBLIC_FORMSPREE_ENDPOINT` を設定すると有効化されます。現在はメールリンクをご利用ください。
              </p>
            )}

            <form action={formspreeEndpoint || undefined} method="POST" className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-800">
                  お名前
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-800">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-800">
                  内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <button
                type="submit"
                disabled={!formspreeEndpoint}
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-45"
              >
                送信する
              </button>
            </form>
          </section>

          <aside className="space-y-4">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">メール連絡</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                フォーム未設定時はこちら。
                <br />
                <Link
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("もちめだかへの問い合わせ")}`}
                  className="font-semibold text-cyan-800 underline underline-offset-4"
                >
                  {siteConfig.email}
                </Link>
              </p>
            </section>

            <section className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
              <h2 className="text-lg font-bold text-slate-900">販売関連の連絡先</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                取引中案件・配送指定・補償確認は、購入先プラットフォームのメッセージ機能をご利用ください。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer" variant="ghost">
                  ヤフオクへ
                </CtaButton>
                <CtaButton href={siteConfig.social.baseShop} target="_blank" rel="noreferrer" variant="ghost">
                  BASEへ
                </CtaButton>
                <CtaButton href="/goods" variant="ghost">
                  物販ページへ
                </CtaButton>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}




