import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FilterableGrid } from "@/components/search/filterable-grid";
import { PageHero } from "@/components/ui/page-hero";
import { getAllVarieties } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { toStars } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "品種図鑑",
  description:
    "碧、龍鱗、ネプチューンダルマ、王華ダルマ、五式typeRなど、主力ワードを含む品種図鑑。特徴、見頃、飼育コツを解説。",
  path: "/varieties",
  keywords: ["メダカ 品種", "碧", "龍鱗", "ネプチューンダルマ", "王華ダルマ", "五式typeR"],
});

export default async function VarietiesPage() {
  const varieties = await getAllVarieties();
  const gridItems = varieties.map((variety) => ({
    title: variety.title,
    href: `/varieties/${variety.slug}`,
    description: variety.description,
    tags: variety.tags,
    meta: `${variety.highlight} ・ 難易度 ${toStars(variety.difficulty)}`,
  }));

  return (
    <div className="page-wrap pb-16">
      <PageHero
        eyebrow="Varieties"
        title="品種図鑑"
        description="色・体型・ラメの表現を、実運用で役立つ飼育ポイントまで含めて解説しています。現物確認は動画導線を活用してください。"
        badges={["ラメ系中心", "ダルマ系", "飼育コツ", "初心者難易度"]}
      />

      <div className="layout-shell w-full content-block pt-8">
        <Breadcrumb
          items={[
            { label: "ホーム", href: "/" },
            { label: "品種図鑑" },
          ]}
        />

        <FilterableGrid
          items={gridItems}
          emptyLabel="条件に合う品種が見つかりませんでした。別のキーワードで検索してください。"
          typeLabel="品種"
        />
      </div>
    </div>
  );
}


