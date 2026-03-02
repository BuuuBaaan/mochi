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
        className="font-ui bubble-hover bubble-size-md rounded-[0.75rem] border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-3 py-2 text-sm font-semibold tracking-[0.06em] text-[var(--cta-ghost-text)] shadow-[var(--cta-ghost-shadow)] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)] disabled:cursor-not-allowed disabled:opacity-40"
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
            "font-ui bubble-hover bubble-size-md rounded-[0.75rem] px-3 py-2 text-sm font-semibold tracking-[0.06em] shadow-sm [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]",
            page === currentPage
              ? "border border-[var(--cta-primary-border)] bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)]"
              : "border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] text-[var(--cta-ghost-text)] hover:brightness-110",
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="font-ui bubble-hover bubble-size-md rounded-[0.75rem] border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-3 py-2 text-sm font-semibold tracking-[0.06em] text-[var(--cta-ghost-text)] shadow-[var(--cta-ghost-shadow)] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        次へ
      </button>
    </nav>
  );
}
