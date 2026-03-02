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
        "group overflow-hidden rounded-[1.55rem] border border-[rgb(118_184_238_/_0.48)] bg-[linear-gradient(156deg,rgba(8,27,51,0.88),rgba(12,38,71,0.86)_56%,rgba(9,27,52,0.86))] shadow-[0_18px_40px_rgba(1,10,26,0.44)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_54px_rgba(1,8,23,0.55)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
