import Link from "next/link";
import { footerNav, site } from "@/config/site";
import { GitHubLogo, LinkedInLogo, XLogo } from "../icons";
import { Logo } from "../logo";
import { NewsletterForm } from "./newsletter-form";
import { Container } from "./section";

const socials = [
  { label: "X", href: site.social.x, icon: XLogo },
  { label: "GitHub", href: site.social.github, icon: GitHubLogo },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInLogo },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-6">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{site.tagline}.</p>
          <NewsletterForm />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted transition-colors hover:text-fg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col-reverse items-start gap-4 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.company}
        </p>
        <div className="flex gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} className="grid size-9 place-items-center rounded-lg transition-colors hover:bg-surface-2 hover:text-fg">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
