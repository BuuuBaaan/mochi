import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import { normalizeExternalUrl } from "@/lib/commerce";
import { siteConfig } from "@/site.config";

type AmazonCtaProps = {
  url?: string;
  readyLabel?: string;
  className?: string;
  compact?: boolean;
};

export function AmazonCta({ url, readyLabel, className, compact = false }: AmazonCtaProps) {
  const activeUrl = normalizeExternalUrl(url);

  if (activeUrl) {
    return (
      <CtaButton
        href={activeUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {readyLabel ?? siteConfig.commerce.primaryCtaLabel}
      </CtaButton>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <span
        aria-disabled="true"
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-4 text-sm font-semibold text-slate-500",
          compact ? "py-2" : "py-2.5",
        )}
      >
        {siteConfig.commerce.pendingCtaLabel}
      </span>
      <CtaButton href={siteConfig.commerce.fallbackContactHref} variant="ghost">
        {siteConfig.commerce.fallbackContactLabel}
      </CtaButton>
    </div>
  );
}
