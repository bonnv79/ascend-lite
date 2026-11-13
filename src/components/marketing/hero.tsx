import Link from "next/link";
import { buttonClass } from "@/components/ui";
import { site } from "@/config/site";
import { hero } from "@/content/home";
import { ArrowRightIcon } from "../icons";
import { AppMockup } from "../mockups/app-mockup";
import { Container } from "./section";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]" />
      <Container className="text-center">
        <Link href="/#features" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted shadow-sm transition-colors hover:text-fg">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden />
          {hero.badge}
          <ArrowRightIcon className="size-3.5" />
        </Link>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{hero.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted text-pretty">{hero.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.signupUrl} className={buttonClass("primary", "lg")}>
            {hero.primaryCta}
            <ArrowRightIcon className="size-4" />
          </a>
          <Link href="/#pricing" className={buttonClass("outline", "lg")}>
            {hero.secondaryCta}
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted">{hero.note}</p>
      </Container>
      <Container className="mt-14 sm:mt-16">
        <div className="rounded-2xl border border-border/70 bg-surface/50 p-2 shadow-2xl shadow-brand/10 backdrop-blur sm:p-3">
          <AppMockup className="shadow-none" />
        </div>
      </Container>
    </section>
  );
}
