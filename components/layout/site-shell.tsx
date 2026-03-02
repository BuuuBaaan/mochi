import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white/95 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0f3658] focus:shadow-[0_10px_24px_rgba(7,30,52,0.25)]"
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
