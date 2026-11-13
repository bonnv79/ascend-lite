"use client";

import { useState } from "react";
import { Badge, buttonClass, cn } from "@/components/ui";
import { plans, yearlyDiscount, type Billing, type Plan } from "@/content/pricing";
import { CheckIcon } from "../icons";

function Price({ plan, billing }: { plan: Plan; billing: Billing }) {
  const amount = plan.price[billing];
  if (amount === null) return <p className="text-4xl font-semibold tracking-tight">Custom</p>;
  return (
    <p className="flex items-baseline gap-1">
      <span className="text-4xl font-semibold tracking-tight tabular-nums">${amount}</span>
      <span className="text-sm text-muted">{amount === 0 ? "forever" : billing === "yearly" ? "/ month, billed yearly" : "/ month"}</span>
    </p>
  );
}

export function PricingCards() {
  const [billing, setBilling] = useState<Billing>("yearly");
  return (
    <div>
      <div className="flex justify-center">
        <div role="group" aria-label="Billing period" className="inline-flex rounded-lg border border-border bg-surface p-1 text-sm">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={billing === b}
              onClick={() => setBilling(b)}
              className={cn("rounded-md px-4 py-1.5 font-medium transition-colors", billing === b ? "bg-brand text-brand-fg" : "text-muted hover:text-fg")}
            >
              {b === "monthly" ? "Monthly" : "Yearly"}
              {b === "yearly" && <span className={cn("ml-1.5 text-xs", billing === b ? "opacity-90" : "text-success")}>{yearlyDiscount}</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={cn("relative rounded-2xl border bg-surface p-6 sm:p-8", plan.featured ? "border-brand shadow-xl shadow-brand/10 ring-1 ring-brand" : "border-border")}>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.featured && <Badge>Most popular</Badge>}
            </div>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <div className="mt-6">
              <Price plan={plan} billing={billing} />
            </div>
            <a href={plan.href} className={buttonClass(plan.featured ? "primary" : "outline", "md", "mt-6 w-full")}>
              {plan.cta}
            </a>
            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
