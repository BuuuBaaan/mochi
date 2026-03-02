import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-[linear-gradient(132deg,#8cecf9,#5ad9ee_48%,#4ec5e7)] text-[#08253f] shadow-[0_12px_24px_rgba(9,106,140,0.35)] hover:brightness-105 focus-visible:ring-cyan-200",
  secondary:
    "bg-[linear-gradient(130deg,#0a1e38,#12345a_52%,#0f4668)] text-white shadow-[0_12px_25px_rgba(5,18,37,0.42)] hover:brightness-105 focus-visible:ring-sky-200/70",
  ghost:
    "bg-white/86 text-[#123450] ring-1 ring-[#85b7d6]/70 backdrop-blur hover:bg-white/96 focus-visible:ring-cyan-300",
};

export function CtaButton({
  href,
  children,
  className,
  target,
  rel,
  variant = "primary",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "bubble-hover inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.01em] transition duration-300 focus-visible:ring-2 focus-visible:outline-none",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
