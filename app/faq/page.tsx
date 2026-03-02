import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "死着、発送、水合わせ、給餌、混泳、冬越し、物販まで。購入前に不安を解消するためのQ&Aをまとめています。",
  path: "/faq",
  keywords: ["メダカ FAQ", "死着", "水合わせ", "針子 餌", "メダカ 発送", "Amazon 物販"],
});

const faqItems = [
  {
    q: "死着が心配です。どう対応していますか？",
    a: "販売はヤフオク/BASEの規約・出品説明に準拠します。到着後は袋をすぐ開けず、まず温度合わせを行い、状態確認をお願いします。詳細条件は販売ページ記載が最新です。",
  },
  {
    q: "発送はどれくらい早いですか？",
    a: "迅速発送を基本に、天候・気温・輸送負荷を見て最短で安全に出荷します。発送予定日は購入先ページで個別案内します。",
  },
  {
    q: "到着後、最初に何をすべきですか？",
    a: "到着直後は温度合わせを優先し、その後に少量ずつ飼育水を加えて水合わせ。投入後24時間は給餌を控え、落ち着かせてください。",
  },
  {
    q: "飼育容器は何色がおすすめですか？",
    a: "ラメや体外光を見たいなら黒・濃紺容器が見やすい傾向です。明るい色容器は柄や体色の印象確認に向きます。",
  },
  {
    q: "餌はどのくらい与えるべきですか？",
    a: "目安は1日2〜3回、1〜2分で食べ切る量です。低水温期は回数を減らし、食べ残しは水質悪化につながるので避けてください。",
  },
  {
    q: "混泳は可能ですか？",
    a: "可能ですが、体格差・泳力差・品種特性を見て管理してください。ダルマ体型は泳ぎが穏やかなため、活発種との混泳は注意が必要です。",
  },
  {
    q: "冬の管理で失敗しやすい点は？",
    a: "急な加温・急な換水・過給餌が失敗要因です。気温と水温のギャップを小さくし、少量給餌と安定水質を優先してください。",
  },
  {
    q: "卵や針子は初心者でも育てられますか？",
    a: "可能です。過密を避け、粉餌を少量頻回で与え、スポイトで底掃除するだけでも生存率が改善します。",
  },
  {
    q: "物販（餌・グリーンウォーター）はどこで買えますか？",
    a: "物販ページからAmazonへ案内します。Amazonリンク準備中の場合は問い合わせ導線へ自動で切り替わります。",
  },
  {
    q: "問い合わせ先はどこですか？",
    a: "当サイトのお問い合わせページのフォーム（設定時）かメールリンクをご利用ください。販売に関する契約事項は購入プラットフォーム内連絡が最優先です。",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="page-wrap pb-16">
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="よくある質問"
        description="購入前の不安を先に潰すため、死着・発送・水合わせ・餌・容器・季節管理・物販の質問をまとめました。"
        badges={["死着", "発送", "水合わせ", "物販"]}
        actions={
          <>
            <CtaButton href="/contact">問い合わせる</CtaButton>
            <CtaButton href="/goods" variant="ghost">
              物販を見る
            </CtaButton>
            <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer" variant="ghost">
              YouTubeで確認する
            </CtaButton>
          </>
        }
      />

      <div className="mx-auto w-full max-w-4xl content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "FAQ" },
          ]}
        />

        <section className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-cyan-300 open:bg-cyan-50/40"
            >
              <summary className="cursor-pointer list-none pr-7 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="float-right text-cyan-700 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-8 text-slate-700">{item.a}</p>
            </details>
          ))}
        </section>
      </div>
    </div>
  );
}
