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
        "inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50/90 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
