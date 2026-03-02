import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "利用規約",
  description: "もちめだか公式サイトの利用規約。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Terms"
        title="利用規約"
        description="当サイトの利用条件を記載します。送客サイトとしての範囲と責任分界を明確化しています。"
      />

      <div className="layout-reading w-full content-block content-stage-reading pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "利用規約" },
          ]}
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm rich-content">
          <h2>1. 適用範囲</h2>
          <p>
            本規約は、もちめだか公式サイト（以下「当サイト」）の閲覧および提供コンテンツの利用に適用されます。
          </p>

          <h2>2. サービス内容</h2>
          <p>
            当サイトは、メダカ飼育情報の提供および外部販売サービス（ヤフオク、BASE等）への送客を目的とします。
            売買契約は各外部サービス上で成立し、当サイト単体では販売契約を締結しません。
          </p>

          <h2>3. 免責事項</h2>
          <ul>
            <li>掲載情報は正確性に配慮しますが、完全性を保証するものではありません。</li>
            <li>外部サービスでの取引条件、在庫、価格、配送条件は各サービス表示が優先されます。</li>
            <li>当サイト利用により生じた損害について、当方は法令上認められる範囲で責任を負いません。</li>
          </ul>

          <h2>4. 禁止事項</h2>
          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>当サイト運営を妨害する行為</li>
            <li>第三者の権利侵害行為</li>
          </ul>

          <h2>5. 著作権</h2>
          <p>
            当サイト上の文章・図版・ロゴ等の著作物は、特段の記載がない限り当サイト運営者または正当権利者に帰属します。
          </p>

          <h2>6. 規約変更</h2>
          <p>本規約は必要に応じて改定することがあります。改定後は当ページ掲載時点から適用されます。</p>
        </article>
      </div>
    </div>
  );
}
