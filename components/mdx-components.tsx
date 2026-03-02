import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="font-display mt-10 text-2xl font-bold tracking-[0.02em] text-slate-900" {...props} />
  ),
  h3: (props) => <h3 className="font-display mt-8 text-xl font-semibold tracking-[0.01em] text-slate-900" {...props} />,
  p: (props) => <p className="mt-4 leading-8 text-slate-700" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (!href) {
      return <a {...props} />;
    }

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4"
          {...props}
        />
      );
    }

    return (
      <Link
        href={href}
        className="font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4"
        {...props}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-cyan-300 bg-cyan-50/70 px-4 py-3 text-slate-700"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-slate-200" {...props} />,
};
