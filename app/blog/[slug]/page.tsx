import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaButton } from "@/components/ui/cta-button";
import { JsonLd } from "@/lib/json-ld";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { siteConfig } from "@/site.config";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "記事が見つかりません",
      description: "指定された記事は見つかりませんでした。",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    image: absoluteUrl(`/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent("もちめだかブログ")}`),
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(","),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ブログ",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <div className="page-wrap pb-16">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <div className="layout-reading w-full content-block pt-10">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "ブログ", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">{post.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900">{post.title}</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700">{post.description}</p>
          <p className="mt-4 text-xs text-slate-600">
            {formatDate(post.date)} ・ {post.readingTime}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={`${post.slug}-${tag}`}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-900"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="rich-content mt-8">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
              components={mdxComponents}
            />
          </div>
        </article>

        <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
          <h2 className="text-xl font-bold text-slate-900">購入前に合わせて確認</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            実際の在庫・価格・取引条件は販売ページが最新です。記事で基礎を押さえたあとに、現行出品を確認してください。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton href={siteConfig.social.yahooAuctions} target="_blank" rel="noreferrer">
              出品中を見に行く（ヤフオク）
            </CtaButton>
            <CtaButton href="/faq" variant="ghost">
              FAQを読む
            </CtaButton>
            <CtaButton href={siteConfig.social.youtube} target="_blank" rel="noreferrer" variant="ghost">
              YouTubeで現物動画を見る
            </CtaButton>
            <CtaButton href="/goods" variant="ghost">
              物販を見る
            </CtaButton>
          </div>
        </section>

        <div className="mt-6 text-sm">
          <Link href="/blog" className="font-semibold text-cyan-800 underline-offset-4 hover:underline">
            ← ブログ一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
