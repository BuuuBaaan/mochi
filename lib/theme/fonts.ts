import { Noto_Sans_JP, Outfit, Shippori_Mincho } from "next/font/google";
import localFont from "next/font/local";

import type { ThemeFontSlot } from "@/lib/theme/types";

const notoSansJpSource = Noto_Sans_JP({
  variable: "--font-source-noto-sans-jp",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const shipporiMinchoSource = Shippori_Mincho({
  variable: "--font-source-shippori-mincho",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const outfitSource = Outfit({
  variable: "--font-source-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const localSansSource = localFont({
  variable: "--font-source-local-sans",
  src: [
    { path: "../../public/fonts/theme-placeholder/geist-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/theme-placeholder/geist-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
});

const localMonoSource = localFont({
  variable: "--font-source-local-mono",
  src: [
    { path: "../../public/fonts/theme-placeholder/geist-mono-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/theme-placeholder/geist-mono-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
});

export const themeFontSources = {
  notoSansJp: notoSansJpSource.variable,
  shipporiMincho: shipporiMinchoSource.variable,
  outfit: outfitSource.variable,
  localSans: localSansSource.variable,
  localMono: localMonoSource.variable,
} as const;

export function resolveThemeFontVariable(slot: ThemeFontSlot) {
  return themeFontSources[slot.family];
}

export const themeFontVariableClasses = [
  notoSansJpSource.variable,
  shipporiMinchoSource.variable,
  outfitSource.variable,
  localSansSource.variable,
  localMonoSource.variable,
].join(" ");
