import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="page-wrap py-24">
      <div className="layout-reading w-full content-block content-stage-reading text-center">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-900">ページが見つかりません</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          URLが変更された可能性があります。ホーム・ブログ・品種図鑑から再度お探しください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" data-track-event="notfound_home" className="font-ui cta-button bubble-hover rounded-[0.8rem] border border-[var(--cta-secondary-border)] bg-[var(--cta-secondary-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--cta-secondary-text)] shadow-[var(--cta-secondary-shadow)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            ホームへ戻る
          </Link>
          <Link
            href="/varieties"
            data-track-event="notfound_varieties"
            className="font-ui cta-button bubble-hover rounded-[0.8rem] border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--cta-ghost-text)] shadow-[var(--cta-ghost-shadow)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]"
          >
            品種図鑑へ
          </Link>
        </div>
      </div>
    </div>
  );
}
