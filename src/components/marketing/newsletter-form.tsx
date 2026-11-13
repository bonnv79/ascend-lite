"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui";
import { subscribe, type FormState } from "@/app/actions";

export function NewsletterForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(subscribe, null);
  return (
    <form action={action} className="w-full max-w-sm" noValidate>
      <label htmlFor="newsletter-email" className="text-sm font-semibold">
        Product updates, once a month
      </label>
      <div className="mt-3 flex gap-2">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-invalid={state?.ok === false || undefined} aria-describedby="newsletter-status" className="h-9 min-w-0 flex-1 rounded-ui border border-border bg-bg px-3 text-sm placeholder:text-muted aria-invalid:border-danger" />
        <Button type="submit" disabled={pending}>
          Subscribe
        </Button>
      </div>
      <p id="newsletter-status" role="status" className={state?.ok === false ? "mt-2 text-sm text-danger" : "mt-2 text-sm text-muted"}>
        {state?.message ?? "No spam. Unsubscribe any time."}
      </p>
    </form>
  );
}
