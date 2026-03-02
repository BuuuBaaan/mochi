import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges?: string[];
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, badges = [], actions }: PageHeroProps) {
  return (
    <section className="sparkle-strip relative overflow-hidden border-b border-white/18 py-[var(--space-section)] text-[var(--text-inverse)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-200/22 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-7%] h-80 w-80 rounded-full bg-rose-300/18 blur-3xl"
      />
      <div className="layout-shell w-full content-block">
        <div className="max-w-4xl rounded-[1.9rem] border border-[var(--line-strong)] bg-[linear-gradient(154deg,rgba(7,25,48,0.86),rgba(11,36,68,0.84)_52%,rgba(9,28,54,0.86))] p-6 shadow-[0_20px_46px_rgba(0,8,22,0.46)] backdrop-blur-sm sm:p-8">
          <p className="font-ui on-dark-eyebrow inline-flex items-center rounded-[0.75rem] border border-[var(--home-hero-capsule-border)] bg-[var(--home-hero-capsule-bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
            {eyebrow}
          </p>
          <h1 className="font-brand on-dark-title mt-4 text-4xl font-bold leading-[1.2] sm:text-5xl">
            {title}
          </h1>
          <p className="on-dark-copy mt-5 max-w-3xl text-sm leading-8 sm:text-base">{description}</p>
          {badges.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
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
          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

