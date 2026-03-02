import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "特定商取引法に基づく表記",
  description: "送客サイトとしての特定商取引法に関する表記。",
  path: "/tokusho",
});

const rows = [
  {
    head: "サイト名",
    body: "もちめだか 公式サイト",
  },
  {
    head: "サイトの性質",
    body: "外部販売サービス（ヤフオク・BASE等）への送客を目的とした情報提供サイト",
  },
  {
    head: "販売主体",
    body: "実際の売買契約は各外部販売サービス上の出品者情報・販売者情報に基づいて成立します。",
  },
  {
    head: "商品代金",
    body: "各外部販売ページ（ヤフオク・BASE）の表示価格に準じます。",
  },
  {
    head: "送料・手数料",
    body: "各外部販売ページに記載された条件に準じます。",
  },
  {
    head: "支払方法・時期",
    body: "各外部販売サービスが定める支払方法・時期に準じます。",
  },
  {
    head: "引渡時期",
    body: "各外部販売ページに記載の発送目安に準じます。",
  },
  {
    head: "返品・交換・補償",
    body: "死着・不備対応を含む条件は、購入した外部販売ページの規約と説明文が優先されます。",
  },
  {
    head: "問い合わせ先",
    body: "当サイトのお問い合わせフォームまたはメールリンク。取引中案件は購入先プラットフォームの連絡機能を優先。",
  },
];

export default function TokushoPage() {
  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Legal"
        title="特定商取引法に基づく表記"
        description="当サイトは送客サイトのため、販売条件の最終情報はヤフオク・BASE側表示を正とします。"
      />

      <div className="mx-auto w-full max-w-5xl content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "特定商取引法に基づく表記" },
          ]}
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.head} className="border-b border-slate-200 last:border-b-0">
                  <th className="w-1/3 bg-slate-50 px-4 py-4 text-left font-semibold text-slate-800">
                    {row.head}
                  </th>
                  <td className="px-4 py-4 leading-7 text-slate-700">{row.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/60 p-6 text-sm leading-7 text-slate-700">
          <p>
            販売ページへのリンク:
            <Link
              href={siteConfig.social.yahooAuctions}
              target="_blank"
              rel="noreferrer"
              className="ml-2 font-semibold text-cyan-800 underline underline-offset-4"
            >
              ヤフオク
            </Link>
            <Link
              href={siteConfig.social.baseShop}
              target="_blank"
              rel="noreferrer"
              className="ml-3 font-semibold text-cyan-800 underline underline-offset-4"
            >
              BASE
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}