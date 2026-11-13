/**
 * Site-wide settings. Change the name, links and contact details here and
 * every page, the metadata, the sitemap and the RSS feed follow.
 */
export const site = {
  name: "Ascend",
  tagline: "Customer feedback, roadmap and changelog in one place",
  description:
    "Ascend helps product teams collect feedback, decide what to build next and tell customers when it ships. One tool instead of three.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@ascend.example",
  company: "Ascend Labs, Inc.",
  /** Where the "Start free" buttons go. Point it at your app's sign-up page. */
  signupUrl: "https://app.example.com/signup",
  loginUrl: "https://app.example.com/login",
  social: {
    x: "https://x.com",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
  },
};

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

/** The full version of this template. Delete `proUrl` and the "Ascend Pro" footer group to remove the links. */
export const proUrl = "https://ascend.bontemplates.com/product";

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Ascend Pro",
    links: [
      { label: "Pricing page", href: "https://ascend.bontemplates.com/pricing" },
      { label: "Blog and RSS", href: "https://ascend.bontemplates.com/blog" },
      { label: "Changelog", href: "https://ascend.bontemplates.com/changelog" },
      { label: "Auth pages", href: "https://ascend.bontemplates.com/login" },
      { label: "Get the full template", href: proUrl },
    ],
  },
];
