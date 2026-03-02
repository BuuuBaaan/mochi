import Image from "next/image";
import Link from "next/link";

import { AmazonCta } from "@/components/goods/amazon-cta";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { GoodsProduct } from "@/lib/commerce";

type ProductCardProps = {
  product: GoodsProduct;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-white/24 bg-[linear-gradient(162deg,rgba(8,32,58,0.74),rgba(12,48,78,0.66)_58%,rgba(20,88,112,0.58))]">
      <Link href={`/goods/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </Link>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-cyan-200/50 bg-cyan-100/15 text-cyan-50">{product.priceLabel}</Badge>
          <Badge className="border-amber-200/40 bg-amber-200/10 text-amber-100">Amazon送客</Badge>
        </div>

        <div className="bubble-hover rounded-2xl border border-white/18 bg-white/8 p-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
            <Link href={`/goods/${product.slug}`} className="hover:text-cyan-200">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-200">{product.shortCatch}</p>
          {!compact ? <p className="mt-3 text-sm leading-7 text-slate-300">{product.summary}</p> : null}
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
            {product.features.slice(0, compact ? 2 : 3).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          <AmazonCta url={product.amazonProductUrl} compact />
          <Link
            href={`/goods/${product.slug}`}
            className="font-ui bubble-hover inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.03em] text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            詳細を見る
          </Link>
        </div>
      </div>
    </Card>
  );
}
