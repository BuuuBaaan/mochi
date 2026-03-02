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
    "border border-[#8ec5e6]/45 bg-[linear-gradient(136deg,#0a3860,#115284_52%,#1870a0)] text-[#f4faff] shadow-[0_14px_28px_rgba(11,46,79,0.34)] hover:brightness-105 focus-visible:ring-[#a2dff0]/80",
  secondary:
    "border border-[#f8ce62]/70 bg-[linear-gradient(136deg,#f5d03c,#f3bb1f_44%,#e78817)] text-[#4f2f0f] shadow-[0_12px_24px_rgba(112,74,13,0.3)] hover:brightness-105 focus-visible:ring-[#f5cf71]/75",
  ghost:
    "bg-white/75 text-[#4f2f10] ring-1 ring-[#e5c072]/78 backdrop-blur-md hover:bg-white/88 focus-visible:ring-[#f4cc6f]/85",
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
        "font-ui bubble-hover inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.04em] transition duration-300 focus-visible:ring-2 focus-visible:outline-none",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
