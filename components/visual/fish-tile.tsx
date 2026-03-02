import Image from "next/image";

import { cn } from "@/lib/utils";

export function FishTile({
  label,
  imageSrc,
  className,
}: {
  label: string;
  imageSrc?: string;
  className?: string;
}) {
  return (
    <div
      aria-label={label}
      className={cn(
        "media-placeholder group relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/20 shadow-[0_12px_24px_rgba(2,6,23,0.22)]",
        className,
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover object-center opacity-84 transition duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : null}
      <div className="absolute inset-x-5 bottom-4 z-10 rounded-full bg-slate-950/40 px-3 py-1 text-center text-xs font-semibold tracking-[0.08em] text-cyan-100">
        {label}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.32),transparent_40%)]" />
    </div>
  );
}
