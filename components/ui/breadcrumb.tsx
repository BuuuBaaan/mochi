import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくず" className="mb-6 text-sm">
      <ol className="font-ui inline-flex flex-wrap items-center gap-2 rounded-full border border-[#9ec2da]/80 bg-white/68 px-4 py-2 text-[#315a7b] shadow-[0_10px_24px_rgba(8,33,57,0.08)] backdrop-blur-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden className="text-[#6f8ea7]">/</span> : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="underline-offset-4 transition hover:text-[#143f64] hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-semibold text-[#103d62]">
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
