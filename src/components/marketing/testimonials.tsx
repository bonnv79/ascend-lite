import { Avatar } from "@/components/ui";
import { testimonials } from "@/content/home";
import { Container, Section, SectionHeading } from "./section";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Customers" title="Loved by teams who ship" description="Here is what product, support and engineering leads say after switching." />
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="mb-6 break-inside-avoid rounded-2xl border border-border bg-surface p-6">
              <blockquote className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
