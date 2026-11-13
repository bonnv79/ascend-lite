import { features, showcases } from "@/content/home";
import { CheckIcon } from "../icons";
import { mockups } from "../mockups/feature-mockups";
import { Container, Section, SectionHeading } from "./section";

export function FeatureGrid() {
  return (
    <Section id="features" className="scroll-mt-16">
      <Container>
        <SectionHeading eyebrow="Features" title="Everything you need to listen, plan and ship" description="Replace the spreadsheet, the board and the blog post with one tool your whole team can use." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-surface p-6 sm:p-8">
              <div className="grid size-10 place-items-center rounded-lg bg-brand-soft text-xl text-brand">{f.icon}</div>
              <h3 className="mt-5 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FeatureShowcase() {
  return (
    <Section className="pt-0 sm:pt-0">
      <Container className="space-y-20 sm:space-y-28">
        {showcases.map((s, i) => {
          const Mock = mockups[s.mockup];
          return (
            <div key={s.title} className="grid items-center gap-10 *:min-w-0 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 ? "lg:order-2" : undefined}>
                <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} align="left" />
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="grid size-5 place-items-center rounded-full bg-brand-soft text-brand">
                        <CheckIcon className="size-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-soft/80 to-transparent" />
                <Mock />
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
