import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくず" className="mb-6 text-sm">
      <ol className="font-ui inline-flex flex-wrap items-center gap-2 rounded-[0.85rem] border border-[var(--breadcrumb-border)] bg-[var(--breadcrumb-bg)] px-4 py-2 text-[var(--breadcrumb-text)] shadow-[var(--breadcrumb-shadow)] backdrop-blur-sm [clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden className="text-[var(--breadcrumb-separator)]">/</span> : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 transition hover:text-[var(--breadcrumb-link-hover)] hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-semibold text-[var(--breadcrumb-current)]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
