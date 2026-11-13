import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/components/ui";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)} {...props} />;
}

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-16 sm:py-24", className)} {...props} />;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", as: Heading = "h2", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-sm font-semibold text-brand">{eyebrow}</p>}
      <Heading className={cn("mt-2 font-semibold tracking-tight text-balance", Heading === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl")}>{title}</Heading>
      {description && <p className="mt-4 text-lg text-muted text-pretty">{description}</p>}
    </div>
  );
}
