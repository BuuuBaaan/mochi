import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-ui inline-flex items-center rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--badge-text)] shadow-[var(--badge-shadow)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
