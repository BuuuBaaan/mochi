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
        "font-ui sticker-badge inline-flex items-center border border-[var(--badge-border)] bg-[var(--badge-bg)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--badge-text)] shadow-[var(--badge-shadow)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
