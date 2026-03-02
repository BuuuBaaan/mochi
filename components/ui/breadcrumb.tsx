import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくず" className="mb-6 text-sm">
      <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-200/80 bg-white/70 px-4 py-2 text-[#3b607f] shadow-[0_8px_20px_rgba(7,35,61,0.08)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden>›</span> : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:text-[#10314e] hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-semibold text-[#10314e]">
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
