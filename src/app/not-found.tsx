import Link from "next/link";
import { buttonClass } from "@/components/ui";
import { Logo } from "@/components/logo";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-10 text-sm font-semibold text-brand">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">We couldn&apos;t find that page</h1>
        <p className="mt-3 text-muted">It may have moved, or the link may be wrong.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className={buttonClass("primary")}>
            Back to home
          </Link>
          <a href={`mailto:${site.email}`} className={buttonClass("outline")}>
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
