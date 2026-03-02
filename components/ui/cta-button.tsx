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
    "bg-[linear-gradient(136deg,#0e3f6b,#14588f_52%,#1b71a0)] text-[#f2f9ff] shadow-[0_14px_28px_rgba(11,46,79,0.34)] hover:brightness-105 focus-visible:ring-[#a2dff0]/80",
  secondary:
    "bg-[linear-gradient(132deg,#88e0f1,#66cfe9_48%,#4eb9dc)] text-[#082844] shadow-[0_12px_25px_rgba(18,88,124,0.3)] hover:brightness-105 focus-visible:ring-[#a6ddf5]/85",
  ghost:
    "bg-white/72 text-[#113e63] ring-1 ring-[#8db8d6]/85 backdrop-blur-md hover:bg-white/86 focus-visible:ring-[#91d8ef]/85",
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
