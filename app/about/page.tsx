import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

export const metadata = buildMetadata({
  title: "飼育方針",
  description:
    "もちめだかの飼育方針。屋外・屋根なし・雨ざらし環境での育成、ラメ系中心のライン作り、ダルマ作りの取り組みを公開。",
  path: "/about",
  keywords: ["雨ざらし飼育", "ラメ系", "ダルマめだか", "メダカ飼育方針"],
});

export default function AboutPage() {
  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="About"
        title="飼育方針"
        description="屋外・屋根なし・雨ざらし飼育で、環境変化にも粘り強い個体づくりを目指しています。見た目の美しさだけでなく、泳ぎ・体型・健康感を重視した育成方針です。"
        badges={["ラメ系中心", "ダルマ作りに着手", "発送スピード重視"]}
        actions={
          <>
            <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
              YouTubeで育成動画を見る
            </CtaButton>
            <CtaButton href="/shop" variant="ghost">
              購入方法を見る
            </CtaButton>
          </>
        }
      />

      <div className="layout-shell w-full content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "飼育方針" },
          ]}
        />

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">1. 強さを育てる環境設計</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              屋外・屋根なし・雨ざらし環境で管理し、日照・雨・気温差への適応力を見ながら選別しています。
              ただし急変時は保護し、無理な管理はしません。
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">2. ラメ系の表現追求</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              容器色・光量・給餌バランスを調整し、ラメの粒立ちと体外光の見え方をチェック。
              若魚時の伸びしろと成魚時の完成度を両方見てライン化しています。
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">3. ダルマ体型への挑戦</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              ネプチューンダルマ・王華ダルマなど、体型と色柄の両立を目標に作出・選別を継続。
              可愛さだけでなく、体調維持しやすい飼育方法までセットで情報公開します。
            </p>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
          <h2 className="text-xl font-bold text-slate-900">対応品質へのこだわり</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>問い合わせには迅速丁寧に対応。購入前の確認事項は事前に明確化します。</li>
            <li>発送はスピード重視。天候・気温を見て安全優先で出荷調整します。</li>
            <li>販売はヤフオク・BASEの各規約に準拠。取引ルールを明確に案内します。</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href={siteConfig.social.instagram} target="_blank" rel="noreferrer" variant="secondary">
              Instagramで最新を追う
            </CtaButton>
            <CtaButton href="/faq" variant="ghost">
              FAQを読む
            </CtaButton>
          </div>
        </section>
      </div>
    </div>
  );
}


