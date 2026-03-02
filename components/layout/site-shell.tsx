import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[0.7rem] focus:border focus:border-[var(--line-strong)] focus:bg-[linear-gradient(136deg,rgba(8,27,52,0.95),rgba(11,38,71,0.94))] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--text-strong)] focus:shadow-[0_10px_24px_rgba(1,10,23,0.44)]"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content" className="site-surface min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
