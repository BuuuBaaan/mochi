import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { getAmazonStoreUrl } from "@/lib/commerce";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "買う",
  description:
    "もちめだかの購入導線。ヤフオク・BASEショップへの最短導線、購入の流れ、到着後ケア、取引時の注意点を案内。",
  path: "/shop",
  keywords: ["メダカ 購入", "ヤフオク メダカ", "BASE メダカ", "死着対応"],
});

const steps = [
  {
    title: "1. 出品中個体を確認",
    body: "まずはヤフオク出品ページかBASEショップで、在庫・写真・説明を確認。気になる個体は動画導線から泳ぎも確認できます。",
  },
  {
    title: "2. 取引ルールを確認して購入",
    body: "配送日程・同梱可否・注意事項は各販売ページに準拠します。販売契約はヤフオク/BASEの規約のもとで成立します。",
  },
  {
    title: "3. 到着後24時間のケア",
    body: "温度合わせ→水合わせ→静かな環境で休ませる流れを推奨。詳細はFAQとブログで手順を公開しています。",
  },
];

export default function ShopPage() {
  const amazonStoreUrl = getAmazonStoreUrl();

  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Shop"
        title="購入導線"
        description="公式サイトは『信用と比較と導線』に集中。購入はヤフオク・BASEへ最短で案内します。"
        badges={["不定期出品", "BASE運用", "発送スピーディ"]}
        actions={
          <>
            <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer">
              出品中を見に行く（ヤフオク）
            </CtaButton>
            <CtaButton href={siteConfig.social.baseShop} target="_blank" rel="noreferrer" variant="secondary">
              BASEショップへ
            </CtaButton>
          </>
        }
      />

      <div className="mx-auto w-full max-w-6xl content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "買う" },
          ]}
        />

        <section className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{step.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">購入前チェック</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>個体のグレード・サイズ・雌雄・匹数を確認</li>
              <li>写真だけでなく動画導線で泳ぎと体型を確認</li>
              <li>評価コメント・取引実績・発送ポリシーを確認</li>
              <li>到着予定日の受け取り可否を事前確認</li>
            </ul>
            <div className="mt-6">
              <CtaButton href="/faq" variant="ghost">
                購入前にFAQを読む
              </CtaButton>
            </div>
          </article>

          <article className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
            <h2 className="text-xl font-bold text-slate-900">注意事項</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>当サイトは送客サイトです。販売主体は各外部プラットフォームです。</li>
              <li>価格・在庫・支払い・配送条件はヤフオク/BASE側表示が最新です。</li>
              <li>保証・キャンセル等の扱いは各販売ページ規約に従います。</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href="/tokusho" variant="ghost">
                表記を見る
              </CtaButton>
              <CtaButton href="/contact" variant="ghost">
                問い合わせ
              </CtaButton>
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">物販（餌 / グリーンウォーター）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            生体導線とは別に、飼育用品はAmazonへ送客しています。URL未設定時は問い合わせ導線へ切り替わります。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {amazonStoreUrl ? (
              <CtaButton href={amazonStoreUrl} target="_blank" rel="noreferrer">
                Amazonページへ
              </CtaButton>
            ) : (
              <>
                <span
                  aria-disabled="true"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-500"
                >
                  Amazon準備中
                </span>
                <CtaButton href="/contact" variant="ghost">
                  入荷通知を問い合わせる
                </CtaButton>
              </>
            )}
            <CtaButton href="/goods" variant="ghost">
              物販詳細を見る
            </CtaButton>
          </div>
        </section>
      </div>
    </div>
  );
}
