import { siteConfig } from "@/site.config";

export type GoodsProduct = (typeof siteConfig.commerce.products)[number];

export const goodsProducts: GoodsProduct[] = [...siteConfig.commerce.products];

export function normalizeExternalUrl(url: string | undefined) {
  const normalized = url?.trim();
  return normalized ? normalized : null;
}

export function getGoodsProductBySlug(slug: string) {
  return goodsProducts.find((product) => product.slug === slug) ?? null;
}

export function getAmazonStoreUrl() {
  return normalizeExternalUrl(siteConfig.commerce.amazonStoreUrl);
}

export function getAmazonProductUrl(product: GoodsProduct) {
  return normalizeExternalUrl(product.amazonProductUrl);
}
