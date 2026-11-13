import { cn } from "@/components/ui";
import { Faces, MockFrame, Tag, Votes } from "./frame";

const requests = [
  { votes: 128, title: "Export reports to CSV", area: "Reporting", status: "Planned", tone: "brand", mrr: "$18.4k", faces: ["MC", "DO", "SL"], active: true },
  { votes: 96, title: "Sign in with Google Workspace", area: "Auth", status: "In progress", tone: "warning", mrr: "$12.1k", faces: ["AP", "LN"] },
  { votes: 74, title: "Dark mode for the widget", area: "Widget", status: "Shipped", tone: "success", mrr: "$6.9k", faces: ["TB", "MC", "KS"] },
  { votes: 51, title: "Slack notifications per board", area: "Integrations", status: "Under review", tone: "neutral", mrr: "$4.2k", faces: ["JB"] },
  { votes: 33, title: "Custom fields on requests", area: "Boards", status: "Under review", tone: "neutral", mrr: "$3.0k", faces: ["SI", "AH"] },
] as const;

const nav = ["Inbox", "Feedback", "Roadmap", "Changelog", "Customers"];

export function AppMockup({ className }: { className?: string }) {
  return (
    <MockFrame label="The Ascend app showing feature requests sorted by votes and revenue" className={className}>
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-rose-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="mx-auto hidden rounded-md bg-surface px-16 py-1 text-[11px] text-muted sm:block">app.ascend.example/feedback</span>
      </div>
      <div className="flex text-left">
        <div className="hidden w-44 shrink-0 border-r border-border p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2 text-sm font-semibold">
            <span className="size-5 rounded-md bg-brand" />
            Acme
          </div>
          {nav.map((item) => (
            <div key={item} className={cn("rounded-md px-2 py-1.5 text-xs", item === "Feedback" ? "bg-brand-soft font-medium text-brand" : "text-muted")}>
              {item}
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-sm font-semibold">Feedback</div>
              <div className="text-[11px] text-muted">382 open requests</div>
            </div>
            <div className="flex gap-1.5">
              <Tag tone="brand">Sort: Revenue</Tag>
              <Tag>All boards</Tag>
            </div>
          </div>
          <div className="mt-4 divide-y divide-border rounded-lg border border-border">
            {requests.map((r) => (
              <div key={r.title} className="flex items-center gap-3 px-3 py-2.5">
                <Votes count={r.votes} active={"active" in r} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium sm:text-sm">{r.title}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Tag tone={r.tone}>{r.status}</Tag>
                    <span className="hidden text-[11px] text-muted sm:inline">{r.area}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Faces names={[...r.faces]} />
                </div>
                <div className="w-14 text-right text-xs font-semibold tabular-nums">{r.mrr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
