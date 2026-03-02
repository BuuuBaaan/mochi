import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return new URL(path, base).toString();
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function toStars(level: number) {
  const filled = "\u2605".repeat(Math.max(0, Math.min(5, level)));
  const empty = "\u2606".repeat(Math.max(0, 5 - level));
  return `${filled}${empty}`;
}
