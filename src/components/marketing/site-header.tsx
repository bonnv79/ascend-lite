import Link from "next/link";
import { mainNav, site } from "@/config/site";
import { buttonClass } from "../ui";
import { CloseIcon, MenuIcon } from "../icons";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { MenuLink } from "./menu-link";

/** The mobile menu is a native popover: Escape and clicking outside close it without extra JavaScript. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-muted transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href={site.loginUrl} className={buttonClass("ghost", "sm", "max-sm:hidden")}>
            Log in
          </a>
          <a href={site.signupUrl} className={buttonClass("primary", "sm")}>
            Start free
          </a>
          <button type="button" popoverTarget="mobile-menu" className={buttonClass("ghost", "icon", "md:hidden")} aria-label="Open menu">
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" popover="auto" className="m-0 ml-auto h-dvh max-h-none w-72 border-l border-border bg-surface p-4 text-fg shadow-2xl backdrop:bg-black/40">
        <div className="flex items-center justify-between">
          <Logo />
          <button type="button" popoverTarget="mobile-menu" popoverTargetAction="hide" className={buttonClass("ghost", "icon")} aria-label="Close menu">
            <CloseIcon className="size-5" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
          {mainNav.map((item) => (
            <MenuLink key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 font-medium hover:bg-surface-2">
              {item.label}
            </MenuLink>
          ))}
        </nav>
        <div className="mt-6 grid gap-2 border-t border-border pt-6">
          <a href={site.loginUrl} className={buttonClass("outline", "md", "w-full")}>
            Log in
          </a>
          <a href={site.signupUrl} className={buttonClass("primary", "md", "w-full")}>
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
