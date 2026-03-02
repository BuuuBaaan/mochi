import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FilterableGrid } from "@/components/search/filterable-grid";
import { PageHero } from "@/components/ui/page-hero";
import { getAllBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "ブログ",
  description:
    "雨ざらし飼育、ラメ系、ダルマ飼育、到着後ケア、針子育成、冬越し対策など、実運用に効く記事を公開しています。",
  path: "/blog",
  keywords: ["メダカ ブログ", "ラメメダカ", "ダルマめだか", "針子 育て方", "水合わせ"],
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const gridItems = posts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    description: post.description,
    tags: post.tags,
    meta: `${post.category} ・ ${formatDate(post.date)} ・ ${post.readingTime}`,
  }));

  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Blog"
        title="ブログ"
        description="飼育の再現性を上げるための、実務ベース記事を蓄積しています。"
        badges={["雨ざらし飼育", "ラメ系", "ダルマ", "購入前チェック"]}
      />

      <div className="layout-shell w-full content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "ブログ" },
          ]}
        />
        <FilterableGrid
          items={gridItems}
          emptyLabel="条件に合う記事が見つかりませんでした。検索語を変えてください。"
          typeLabel="ブログ記事"
        />
      </div>
    </div>
  );
}


