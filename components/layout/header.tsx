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
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[linear-gradient(168deg,rgba(6,31,55,0.9),rgba(12,53,88,0.88)_56%,rgba(18,82,109,0.82))] backdrop-blur-xl">
      <div className="layout-shell flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-4 rounded-full px-2 py-1 outline-none transition hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <span className="logo-plate inline-flex h-14 w-14 items-center justify-center rounded-full p-1.5 sm:h-[4.5rem] sm:w-[4.5rem]">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={64}
              height={64}
              className="h-11 w-11 rounded-full object-cover sm:h-[3.55rem] sm:w-[3.55rem]"
            />
          </span>
          <span className="hidden sm:block">
            <span className="font-display block text-[1.18rem] font-semibold tracking-[0.05em] text-white">
              {siteConfig.name}
            </span>
            <span className="font-ui block text-[11px] tracking-[0.2em] text-cyan-100/90">OFFICIAL SITE</span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/12 text-white md:hidden"
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
                  "font-ui rounded-full px-3 py-2 text-sm font-semibold tracking-[0.03em] text-slate-100 transition hover:bg-white/14 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none",
                  isActive(pathname, item.href) && "bg-white/22 text-white",
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
            className="font-ui bubble-hover rounded-full bg-[linear-gradient(136deg,#0f426f,#165c95_52%,#1a76a7)] px-4 py-2 text-sm font-semibold tracking-[0.03em] text-[#eef8ff] shadow-[0_12px_24px_rgba(10,44,77,0.36)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            出品中を見る
          </Link>
          {amazonStoreUrl ? (
            <Link
              href={amazonStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="font-ui bubble-hover rounded-full border border-white/34 bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.03em] text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Amazonページへ
            </Link>
          ) : (
            <span className="font-ui rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.03em] text-slate-300">
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
          <div className="layout-shell flex w-full flex-col gap-1 px-4 py-3 sm:px-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-ui rounded-lg px-3 py-2 text-sm font-semibold tracking-[0.03em] text-slate-100",
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
              className="font-ui bubble-hover mt-2 rounded-lg bg-[linear-gradient(136deg,#0f426f,#165c95_52%,#1a76a7)] px-3 py-2 text-center text-sm font-semibold tracking-[0.03em] text-[#eef8ff]"
            >
              出品中を見に行く（ヤフオク）
            </Link>
            <Link
              href={amazonStoreUrl ?? "/goods"}
              onClick={() => setOpen(false)}
              className="font-ui bubble-hover rounded-lg border border-white/30 bg-white/12 px-3 py-2 text-center text-sm font-semibold tracking-[0.03em] text-white"
            >
              {amazonStoreUrl ? "Amazonページへ" : "Amazon準備中（物販ページへ）"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}


