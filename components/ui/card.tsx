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
        "group overflow-hidden rounded-3xl border border-[rgba(134,172,202,0.58)] bg-[linear-gradient(162deg,rgba(252,255,255,0.84),rgba(240,248,255,0.86)_58%,rgba(232,245,255,0.88))] shadow-[0_16px_38px_rgba(9,34,56,0.13)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(8,29,49,0.18)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
