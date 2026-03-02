"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type GridItem = {
  title: string;
  href: string;
  description: string;
  tags: string[];
  meta: string;
};

type FilterableGridProps = {
  items: GridItem[];
  emptyLabel: string;
  typeLabel: string;
  itemClassName?: string;
};

const PAGE_SIZE = 6;

export function FilterableGrid({
  items,
  emptyLabel,
  typeLabel,
  itemClassName,
}: FilterableGridProps) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return items;
    }
    return items.filter((item) => {
      const titleHit = item.title.toLowerCase().includes(q);
      const tagsHit = item.tags.join(" ").toLowerCase().includes(q);
      const descHit = item.description.toLowerCase().includes(q);
      return titleHit || tagsHit || descHit;
    });
  }, [items, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <section>
      <div className="mb-5">
        <label htmlFor="search-field" className="sr-only">
          {typeLabel}を検索
        </label>
        <input
          id="search-field"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setCurrentPage(1);
          }}
          placeholder={`${typeLabel}をタイトル・タグで検索`}
          className="w-full rounded-2xl border border-sky-300/75 bg-white/85 px-4 py-3 text-sm text-slate-900 shadow-[0_10px_24px_rgba(7,39,70,0.12)] outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
          {emptyLabel}
        </p>
      ) : (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            {pageItems.map((item) => (
              <Card key={item.href} className={cn("p-5", itemClassName)}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  {item.meta}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  <Link href={item.href} className="hover:text-cyan-700">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={`${item.href}-${tag}`}>#{tag}</Badge>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    href={item.href}
                    className="bubble-hover inline-flex rounded-full border border-sky-300/70 bg-white/70 px-3 py-1.5 text-sm font-semibold text-cyan-800 transition hover:bg-white"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}
