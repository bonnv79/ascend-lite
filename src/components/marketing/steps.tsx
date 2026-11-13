import { stats, steps } from "@/content/home";
import { Container, Section, SectionHeading } from "./section";

export function Steps() {
  return (
    <Section className="border-y border-border bg-surface">
      <Container>
        <SectionHeading eyebrow="How it works" title="Up and running in an afternoon" />
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="grid size-10 place-items-center rounded-full border border-border bg-bg text-sm font-semibold text-brand">{i + 1}</span>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted" aria-hidden>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
