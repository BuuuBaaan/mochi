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
    <section className="sparkle-strip relative overflow-hidden border-b border-white/20 bg-[linear-gradient(162deg,#041429,#0d3658_52%,#0f586f)] py-14 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-[-12%] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-8%] h-80 w-80 rounded-full bg-amber-200/15 blur-3xl"
      />
      <div className="mx-auto w-full max-w-6xl content-block">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-100/95 sm:text-base">{description}</p>
        {badges.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge
                key={badge}
                className="border-cyan-300/45 bg-cyan-200/20 text-cyan-50"
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
