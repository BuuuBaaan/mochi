import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="page-wrap py-24">
      <div className="layout-reading w-full content-block content-stage-reading text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-900">ページが見つかりません</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          URLが変更された可能性があります。ホーム・ブログ・品種図鑑から再度お探しください。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950">
            ホームへ戻る
          </Link>
          <Link
            href="/varieties"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800"
          >
            品種図鑑へ
          </Link>
        </div>
      </div>
    </div>
  );
}
