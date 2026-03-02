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
        "font-ui inline-flex items-center rounded-full border border-[#9fc6e0]/85 bg-white/75 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#16486f] shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
