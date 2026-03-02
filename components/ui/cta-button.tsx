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
  trackingId?: string;
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
  trackingId,
}: CtaButtonProps) {
  const safeRel = target === "_blank" && !rel ? "noreferrer" : rel;

  return (
    <Link
      href={href}
      target={target}
      rel={safeRel}
      data-track-event="cta_click"
      data-track-label={trackingId}
      data-track-href={href}
      data-track-variant={variant}
      className={cn(
        "font-ui cta-button bubble-hover inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.9rem] px-5 py-2.5 text-sm font-semibold tracking-[0.06em] transition duration-300 active:translate-y-px focus-visible:ring-2 focus-visible:outline-none [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
