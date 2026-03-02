import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "ヤフオク導線",
  description:
    "ヤフオクでの購入前チェックポイント、評価の見方、写真・動画の確認ポイント、相場の考え方を整理。出品者ページへ最短誘導。",
  path: "/auctions",
  keywords: ["ヤフオク メダカ", "メダカ 出品", "オークション 選び方"],
});

const marketMemo = [
  "同系統でも『体型・ラメ密度・ヒレ形状・月齢』で価格差が出る",
  "若魚は将来性、成魚は完成度で評価軸が異なる",
  "写真1枚では判別しにくいので、動画導線がある個体を優先確認",
  "出品説明の輸送方針・補償方針は必ず事前確認",
];

const updateMethod = [
  "出品一覧はヤフオク公式の出品者ページを常に最新情報として参照",
  "当サイトは週次で導線・説明を点検し、齟齬があれば修正",
  "価格・在庫・終了日時はヤフオク側表示を正とする",
];

export default function AuctionsPage() {
  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Auctions"
        title="ヤフオク導線"
        description="不定期出品のため、最新の在庫・終了時間はヤフオク出品者ページが最速です。まずは現行出品を確認し、動画導線と説明文を照合して選びましょう。"
        badges={["不定期出品", "評価確認", "動画導線推奨"]}
        actions={
          <>
            <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer">
              出品者ページを開く
            </CtaButton>
            <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer" variant="ghost">
              YouTubeで現物動画を見る
            </CtaButton>
          </>
        }
      />

      <div className="mx-auto w-full max-w-6xl content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "ヤフオク導線" },
          ]}
        />

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">落札実績・相場の見方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              同一品種名でも品質差があるため、単純な価格比較は危険です。説明文、評価、動画導線を合わせて判断してください。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              {marketMemo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">このページの更新方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              当サイトの導線説明は運用で更新しますが、売買情報はヤフオク公式表示が常に優先されます。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              {updateMethod.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton href="/blog/yahoo-auc-how-to-choose" variant="ghost">
                失敗しない選び方記事を読む
              </CtaButton>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}