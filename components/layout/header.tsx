"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { getAmazonStoreUrl } from "@/lib/commerce";
import { siteConfig } from "@/site.config";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const amazonStoreUrl = getAmazonStoreUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[linear-gradient(168deg,rgba(2,9,22,0.92),rgba(5,20,46,0.9)_55%,rgba(10,41,78,0.86))] backdrop-blur-xl">
      <div className="layout-shell flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-4 rounded-[1rem] border border-transparent px-2 py-1.5 outline-none transition hover:border-[var(--line-strong)] hover:bg-white/6 focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)]"
        >
          <span className="logo-plate inline-flex h-[3.9rem] w-[3.9rem] items-center justify-center rounded-full p-1 sm:h-[4.9rem] sm:w-[4.9rem]">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={64}
              height={64}
              className="h-[3.15rem] w-[3.15rem] rounded-full object-contain sm:h-[4rem] sm:w-[4rem]"
            />
          </span>
          <span className="hidden sm:block">
            <span className="font-brand block text-[1.2rem] font-semibold tracking-[0.06em] text-white">
              {siteConfig.name}
            </span>
            <span className="font-ui block text-[11px] tracking-[0.2em] text-[var(--header-brand-subtext)]">OFFICIAL SITE</span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-[var(--header-nav-border)] bg-[var(--header-nav-bg)] text-white md:hidden"
        >
          <span className="sr-only">メニューを開閉</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <nav id="global-nav" className="hidden items-center gap-1.5 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-ui rounded-[0.75rem] border border-[var(--header-nav-border)] bg-[var(--header-nav-bg)] px-3 py-2 text-sm font-semibold tracking-[0.05em] text-[var(--header-nav-text)] transition hover:bg-[var(--header-nav-hover-bg)] focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)] focus-visible:outline-none [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]",
                  isActive(pathname, item.href) && "border-[var(--header-nav-active-border)] bg-[var(--header-nav-active-bg)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={siteConfig.social.yahooAuctions}
            target="_blank"
            rel="noreferrer"
            className="font-ui cta-button bubble-hover bubble-size-md rounded-[0.8rem] border border-[var(--header-auction-border)] bg-[var(--header-auction-bg)] px-4 py-2 text-sm font-semibold tracking-[0.05em] text-[var(--header-auction-text)] shadow-[var(--header-auction-shadow)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--header-auction-ring)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]"
          >
            出品中を見る
          </Link>
          {amazonStoreUrl ? (
            <Link
              href={amazonStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="font-ui cta-button bubble-hover bubble-size-md rounded-[0.8rem] border border-[var(--header-utility-border)] bg-[var(--header-utility-bg)] px-4 py-2 text-sm font-semibold tracking-[0.05em] text-[var(--header-utility-text)] transition hover:bg-[var(--header-nav-hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta-secondary-ring)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]"
            >
              Amazonページへ
            </Link>
          ) : (
            <span className="font-ui rounded-[0.8rem] border border-[var(--header-utility-border)] bg-[var(--header-utility-bg)] px-4 py-2 text-sm font-semibold tracking-[0.05em] text-[var(--header-pending-text)] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
              Amazon準備中
            </span>
          )}
        </div>
      </div>

      <div
        className={cn(
          "grid bg-[linear-gradient(168deg,rgba(2,9,22,0.94),rgba(6,23,47,0.92)_58%,rgba(9,38,72,0.88))] transition-all duration-200 md:hidden",
          open ? "grid-rows-[1fr] border-t border-white/15" : "grid-rows-[0fr]",
        )}
      >
        <nav className="overflow-hidden">
          <div className="layout-shell flex w-full flex-col gap-1 px-4 py-3 sm:px-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-ui rounded-[0.75rem] border border-[var(--header-nav-border)] bg-[var(--header-nav-bg)] px-3 py-2 text-sm font-semibold tracking-[0.05em] text-[var(--header-nav-text)] [clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]",
                  isActive(pathname, item.href) && "border-[var(--header-nav-active-border)] bg-[var(--header-nav-active-bg)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.social.yahooAuctions}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="font-ui cta-button bubble-hover bubble-size-md mt-2 rounded-[0.75rem] border border-[var(--header-auction-border)] bg-[var(--header-auction-bg)] px-3 py-2 text-center text-sm font-semibold tracking-[0.05em] text-[var(--header-auction-text)] [clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]"
            >
              出品中を見に行く（ヤフオク）
            </Link>
            <Link
              href={amazonStoreUrl ?? "/goods"}
              onClick={() => setOpen(false)}
              className="font-ui cta-button bubble-hover bubble-size-md rounded-[0.75rem] border border-[var(--header-utility-border)] bg-[var(--header-utility-bg)] px-3 py-2 text-center text-sm font-semibold tracking-[0.05em] text-[var(--header-utility-text)] [clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]"
            >
              {amazonStoreUrl ? "Amazonページへ" : "Amazon準備中（物販ページへ）"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}


