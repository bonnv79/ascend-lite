import type { ReactNode } from "react";
import { cn } from "@/components/ui";

/**
 * Product screenshots drawn with HTML and CSS instead of images: they stay
 * sharp at any size, follow dark mode and are easy to edit. Swap them for real
 * screenshots of your app with next/image when you have them.
 */
export function MockFrame({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div role="img" aria-label={label} className={cn("overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/5 dark:shadow-black/30", className)}>
      <div aria-hidden className="select-none">
        {children}
      </div>
    </div>
  );
}

export function Votes({ count, active }: { count: number; active?: boolean }) {
  return (
    <div className={cn("flex w-11 shrink-0 flex-col items-center rounded-lg border py-1 text-xs font-semibold", active ? "border-brand/40 bg-brand-soft text-brand" : "border-border text-muted")}>
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
      {count}
    </div>
  );
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "brand" | "success" | "warning" }) {
  const tones = {
    neutral: "bg-surface-2 text-muted",
    brand: "bg-brand-soft text-brand",
    success: "bg-success/12 text-success",
    warning: "bg-warning/18 text-fg",
  };
  return <span className={cn("inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium", tones[tone])}>{children}</span>;
}

export function Faces({ names }: { names: string[] }) {
  const colors = ["bg-sky-700", "bg-amber-700", "bg-emerald-700", "bg-rose-700", "bg-violet-700"];
  return (
    <div className="flex -space-x-1">
      {names.map((n, i) => (
        <span key={n} className={cn("grid size-6 place-items-center rounded-full text-[9px] font-semibold text-white ring-2 ring-surface", colors[i % colors.length])}>
          {n}
        </span>
      ))}
    </div>
  );
}
