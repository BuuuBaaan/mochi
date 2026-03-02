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
    <section className="sparkle-strip relative overflow-hidden border-b border-white/18 py-16 text-[var(--text-inverse)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-200/22 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-7%] h-80 w-80 rounded-full bg-amber-200/14 blur-3xl"
      />
      <div className="layout-shell w-full content-block">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/90">{eyebrow}</p>
        <h1 className="font-display mt-4 text-4xl font-bold leading-[1.24] text-[var(--text-inverse)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-100/95 sm:text-base">{description}</p>
        {badges.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge
                key={badge}
                className="border-cyan-200/55 bg-cyan-100/18 text-cyan-50"
              >
                {badge}
              </Badge>
            ))}
          </div>
        ) : null}
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

