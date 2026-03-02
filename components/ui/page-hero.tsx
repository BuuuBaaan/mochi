import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges?: string[];
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, badges = [], actions }: PageHeroProps) {
  const hasSideRail = badges.length > 0 || Boolean(actions);

  return (
    <section className="sparkle-strip relative overflow-hidden border-b border-white/18 py-[var(--space-section)] text-[var(--text-inverse)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-200/24 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-7%] h-80 w-80 rounded-full bg-rose-300/22 blur-3xl"
      />
      <div className="layout-shell w-full content-block">
        <div
          className={cn(
            "rounded-[1.9rem] border border-[var(--line-strong)] bg-[linear-gradient(154deg,rgba(7,25,48,0.88),rgba(11,36,68,0.86)_52%,rgba(9,28,54,0.9))] p-6 shadow-[0_20px_46px_rgba(0,8,22,0.46)] backdrop-blur-sm sm:p-8",
            "relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_12%_16%,rgba(162,243,255,0.22),transparent_34%),radial-gradient(circle_at_84%_82%,rgba(255,125,165,0.2),transparent_32%)]",
          )}
        >
          <div className={cn("relative z-10 grid gap-8", hasSideRail && "lg:grid-cols-[1.16fr_0.84fr] lg:items-start")}>
            <div className="min-w-0">
              <p className="font-ui on-dark-eyebrow inline-flex items-center rounded-[0.75rem] border border-[var(--home-hero-capsule-border)] bg-[var(--home-hero-capsule-bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
                {eyebrow}
              </p>
              <h1 className="font-brand on-dark-title mt-4 text-4xl font-bold leading-[1.2] sm:text-5xl">
                {title}
              </h1>
              <p className="on-dark-copy mt-5 max-w-3xl text-sm leading-8 sm:text-base">{description}</p>
            </div>

            {hasSideRail ? (
              <div className="rounded-[1.2rem] border border-white/24 bg-[linear-gradient(152deg,rgba(8,27,51,0.74),rgba(11,37,67,0.7)_56%,rgba(8,24,47,0.74))] p-4 shadow-[0_16px_36px_rgba(1,9,23,0.42)]">
                {badges.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] text-[var(--hero-badge-text)]"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {actions ? <div className={cn("flex flex-wrap gap-3", badges.length > 0 && "mt-4")}>{actions}</div> : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

