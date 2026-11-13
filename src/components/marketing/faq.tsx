import { site } from "@/config/site";
import { ChevronDownIcon } from "../icons";
import { Container, Section, SectionHeading } from "./section";

export function Faq({ items, title = "Frequently asked questions" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <Section id="faq" className="scroll-mt-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={title}
          description={
            <>
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-brand hover:underline">
                Email us
              </a>
              .
            </>
          }
        />
        <div className="divide-y divide-border border-y border-border">
          {items.map((f) => (
            <details key={f.q} name="faq" className="faq-item group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDownIcon className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
