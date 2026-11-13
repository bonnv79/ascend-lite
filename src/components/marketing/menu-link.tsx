"use client";

import type { ComponentProps } from "react";

/** A link inside the mobile menu that closes the menu when clicked. */
export function MenuLink(props: ComponentProps<"a">) {
  return <a {...props} onClick={(e) => e.currentTarget.closest<HTMLElement>("[popover]")?.hidePopover()} />;
}
