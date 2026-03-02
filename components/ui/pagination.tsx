"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav aria-label="ページネーション" className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="bubble-hover rounded-xl border border-sky-300/70 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        前へ
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "bubble-hover rounded-xl px-3 py-2 text-sm font-medium shadow-sm",
            page === currentPage
              ? "bg-[linear-gradient(132deg,#0a1f39,#12395f_55%,#0f5d75)] text-white"
              : "border border-sky-300/70 bg-white/80 text-slate-700 hover:bg-white",
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="bubble-hover rounded-xl border border-sky-300/70 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        次へ
      </button>
    </nav>
  );
}
