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
    "border border-[var(--cta-primary-border)] bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] shadow-[var(--cta-primary-shadow)] hover:brightness-105 focus-visible:ring-[var(--cta-primary-ring)]",
  secondary:
    "border border-[var(--cta-secondary-border)] bg-[var(--cta-secondary-bg)] text-[var(--cta-secondary-text)] shadow-[var(--cta-secondary-shadow)] hover:brightness-105 focus-visible:ring-[var(--cta-secondary-ring)]",
  ghost:
    "border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] text-[var(--cta-ghost-text)] shadow-[var(--cta-ghost-shadow)] hover:brightness-105 focus-visible:ring-[var(--cta-ghost-ring)]",
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
