/** Plans shown in the pricing section of the home page. */

export type Billing = "monthly" | "yearly";

export interface Plan {
  name: string;
  description: string;
  /** Price per month in dollars. `null` means "Contact us". */
  price: { monthly: number | null; yearly: number | null };
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
}

export const yearlyDiscount = "Save 20%";

export const plans: Plan[] = [
  {
    name: "Starter",
    description: "For small teams getting organized.",
    price: { monthly: 0, yearly: 0 },
    cta: "Start for free",
    href: "https://app.example.com/signup",
    features: ["1 feedback board", "Up to 100 tracked users", "Public roadmap", "Email notifications", "Community support"],
  },
  {
    name: "Growth",
    description: "For product teams that ship every week.",
    price: { monthly: 49, yearly: 39 },
    cta: "Start free trial",
    href: "https://app.example.com/signup?plan=growth",
    featured: true,
    features: ["Unlimited boards", "Up to 5,000 tracked users", "Changelog and in-app widget", "Linear, Jira and GitHub sync", "Revenue data from Stripe", "Priority email support"],
  },
  {
    name: "Enterprise",
    description: "For larger companies with extra needs.",
    price: { monthly: null, yearly: null },
    cta: "Talk to sales",
    href: "mailto:hello@ascend.example",
    features: ["Everything in Growth", "Unlimited tracked users", "SAML single sign-on", "Custom data region", "Uptime SLA", "Dedicated success manager"],
  },
];

/** Rows of the comparison table on the pricing page. `true` shows a check, a string shows that text. */
