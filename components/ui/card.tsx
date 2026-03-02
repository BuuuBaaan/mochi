import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border border-[#a5cbe6]/70 bg-[linear-gradient(160deg,rgba(245,251,255,0.96),rgba(232,244,254,0.94)_60%,rgba(240,249,255,0.95))] shadow-[0_14px_34px_rgba(8,35,61,0.14)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(5,27,49,0.2)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
