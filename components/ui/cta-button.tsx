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
    "border border-[#f1c26e]/72 bg-[linear-gradient(136deg,#7e4608,#9d5b10_44%,#be7618)] text-[#f4faff] shadow-[0_12px_24px_rgba(74,42,10,0.34)] hover:brightness-105 focus-visible:ring-[#f3cf84]/80",
  ghost:
    "border border-[#8cc8e6]/56 bg-[linear-gradient(136deg,rgba(9,45,73,0.92),rgba(13,69,105,0.9)_55%,rgba(18,90,127,0.88))] text-[#f4faff] shadow-[0_10px_22px_rgba(8,39,67,0.3)] hover:brightness-105 focus-visible:ring-[#a4dff0]/85",
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
