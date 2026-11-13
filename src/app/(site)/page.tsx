import { Cta } from "@/components/marketing/cta";
import { Faq } from "@/components/marketing/faq";
import { FeatureGrid, FeatureShowcase } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { PricingCards } from "@/components/marketing/pricing";
import { Container, Section, SectionHeading } from "@/components/marketing/section";
import { Steps } from "@/components/marketing/steps";
import { Testimonials } from "@/components/marketing/testimonials";
import { faqs } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <FeatureShowcase />
      <Steps />
      <Testimonials />
      <Section id="pricing" className="scroll-mt-16 border-t border-border bg-surface">
        <Container>
          <SectionHeading eyebrow="Pricing" title="Simple pricing that grows with you" description="Start free. Upgrade when your team needs more." className="mb-10" />
          <PricingCards />
        </Container>
      </Section>
      <Faq items={faqs} />
      <Cta />
    </>
  );
}
