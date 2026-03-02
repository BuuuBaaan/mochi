import type { MetadataRoute } from "next";

import { getAllBlogPosts, getAllVarieties } from "@/lib/content";
import { goodsProducts } from "@/lib/commerce";
import { siteConfig } from "@/site.config";

const staticRoutes = [
  "",
  "/about",
  "/shop",
  "/goods",
  "/auctions",
  "/varieties",
  "/blog",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/tokusho",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, varieties] = await Promise.all([getAllBlogPosts(), getAllVarieties()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const varietyEntries: MetadataRoute.Sitemap = varieties.map((variety) => ({
    url: `${siteConfig.url}/varieties/${variety.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  const goodsEntries: MetadataRoute.Sitemap = goodsProducts.map((product) => ({
    url: `${siteConfig.url}/goods/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.76,
  }));

  return [...staticEntries, ...postEntries, ...varietyEntries, ...goodsEntries];
}
