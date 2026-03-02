import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/ui/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: "もちめだか公式サイトのプライバシーポリシー。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Privacy"
        title="プライバシーポリシー"
        description="当サイトで取得する情報の取り扱い方針を記載します。必要に応じて運用実態に合わせて更新してください。"
      />

      <div className="mx-auto w-full max-w-4xl content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "プライバシーポリシー" },
          ]}
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm rich-content">
          <h2>1. 取得する情報</h2>
          <p>
            お問い合わせ時に入力された氏名、メールアドレス、問い合わせ内容等を取得する場合があります。
            また、アクセス解析設定時には匿名の利用状況データを取得する場合があります。
          </p>

          <h2>2. 利用目的</h2>
          <ul>
            <li>お問い合わせへの回答</li>
            <li>サイト品質向上のための分析</li>
            <li>不正アクセス防止、運用上の安全確保</li>
          </ul>

          <h2>3. 第三者提供</h2>
          <p>
            法令に基づく場合を除き、本人同意なく第三者へ個人情報を提供しません。
            ただし、フォームサービスやアクセス解析サービスの利用に伴い、必要範囲で外部事業者へ情報が送信されることがあります。
          </p>

          <h2>4. 情報の管理</h2>
          <p>
            個人情報の漏えい、滅失、毀損を防止するため、合理的な安全対策を講じます。
          </p>

          <h2>5. 外部サイトへのリンク</h2>
          <p>
            当サイトにはヤフオク、BASE、Instagram、YouTubeなど外部サイトへのリンクがあります。
            リンク先での情報取り扱いは各サービスのポリシーをご確認ください。
          </p>

          <h2>6. 改定</h2>
          <p>本ポリシーは予告なく改定する場合があります。改定後は当ページに掲載した時点で効力を生じます。</p>
        </article>
      </div>
    </div>
  );
}