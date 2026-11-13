import { buttonClass } from "@/components/ui";
import { site } from "@/config/site";
import { Container } from "./section";

export function Cta() {
  return (
    <Container className="pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-brand-fg sm:px-12 sm:py-20">
        <div aria-hidden className="cta-pattern pointer-events-none absolute inset-0 opacity-20" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Start building what your customers want</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">Try every feature free for 14 days. Set up takes five minutes and you can cancel any time.</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.signupUrl} className={buttonClass("secondary", "lg", "border-transparent")}>
            Start free trial
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex h-11 items-center rounded-ui px-5 font-medium ring-1 ring-current/30 transition-colors ring-inset hover:bg-current/10">
            Talk to sales
          </a>
        </div>
      </div>
    </Container>
  );
}
