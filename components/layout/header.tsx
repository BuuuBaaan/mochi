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
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[linear-gradient(170deg,rgba(3,14,31,0.9),rgba(7,30,54,0.86)_55%,rgba(9,47,74,0.82))] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-4 rounded-full px-2 py-1 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <span className="logo-plate inline-flex h-14 w-14 items-center justify-center rounded-full p-1.5 sm:h-16 sm:w-16">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={56}
              height={56}
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-base font-bold tracking-[0.07em] text-white">{siteConfig.name}</span>
            <span className="block text-[11px] tracking-[0.16em] text-cyan-100/90">Official Site</span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white md:hidden"
        >
          <span className="sr-only">メニューを開閉</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <nav id="global-nav" className="hidden items-center gap-1 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/12 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none",
                  isActive(pathname, item.href) && "bg-white/20 text-white",
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
            className="bubble-hover rounded-full bg-[linear-gradient(132deg,#8cecf9,#5ad9ee_48%,#4ec5e7)] px-4 py-2 text-sm font-semibold text-[#07233d] shadow-[0_10px_20px_rgba(10,107,141,0.35)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            出品中を見る
          </Link>
          {amazonStoreUrl ? (
            <Link
              href={amazonStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="bubble-hover rounded-full border border-white/34 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Amazonページへ
            </Link>
          ) : (
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
              Amazon準備中
            </span>
          )}
        </div>
      </div>

      <div
        className={cn(
          "grid transition-all duration-200 md:hidden",
          open ? "grid-rows-[1fr] border-t border-white/15" : "grid-rows-[0fr]",
        )}
      >
        <nav className="overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-slate-100",
                  isActive(pathname, item.href) && "bg-white/20 text-white",
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
              className="bubble-hover mt-2 rounded-lg bg-[linear-gradient(132deg,#8cecf9,#5ad9ee_48%,#4ec5e7)] px-3 py-2 text-center text-sm font-semibold text-[#07233d]"
            >
              出品中を見に行く（ヤフオク）
            </Link>
            <Link
              href={amazonStoreUrl ?? "/goods"}
              onClick={() => setOpen(false)}
              className="bubble-hover rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              {amazonStoreUrl ? "Amazonページへ" : "Amazon準備中（物販ページへ）"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

