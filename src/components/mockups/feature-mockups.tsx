import { Faces, MockFrame, Tag, Votes } from "./frame";

export function FeedbackMock() {
  const items = [
    { votes: 128, title: "Export reports to CSV", sources: "Email, Slack, Widget", merged: 14 },
    { votes: 96, title: "Sign in with Google Workspace", sources: "Intercom, Widget", merged: 9 },
    { votes: 61, title: "Bulk edit requests", sources: "Slack", merged: 5 },
  ];
  return (
    <MockFrame label="Feedback inbox with merged duplicate requests" className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Inbox</div>
        <Tag tone="brand">3 new duplicates found</Tag>
      </div>
      <div className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-center gap-3 rounded-lg border border-border bg-bg p-3">
            <Votes count={item.votes} active={i === 0} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{item.title}</div>
              <div className="mt-0.5 truncate text-[11px] text-muted">{item.sources}</div>
            </div>
            <Tag>{item.merged} merged</Tag>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function RoadmapMock() {
  const columns = [
    { title: "Planned", dot: "bg-brand", items: [["Export to CSV", 128], ["Custom fields", 33]] },
    { title: "In progress", dot: "bg-warning", items: [["Google sign-in", 96], ["Slack per board", 51]] },
    { title: "Shipped", dot: "bg-success", items: [["Widget dark mode", 74]] },
  ] as const;
  return (
    <MockFrame label="Public roadmap with planned, in progress and shipped columns" className="p-5">
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.title} className="min-w-0">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold">
              <span className={`size-2 rounded-full ${col.dot}`} />
              {col.title}
            </div>
            <div className="space-y-2">
              {col.items.map(([title, votes]) => (
                <div key={title} className="rounded-lg border border-border bg-bg p-2.5">
                  <div className="text-xs font-medium leading-snug">{title}</div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
                    <span>▲ {votes}</span>
                    <Faces names={["MC", "DO"]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function ChangelogMock() {
  return (
    <MockFrame label="Changelog entry with a notification sent to customers" className="relative p-5">
      <div className="flex items-center gap-2 text-[11px] text-muted">
        <Tag tone="success">New</Tag>
        November 4
      </div>
      <div className="mt-3 text-base font-semibold">Public roadmaps with voting</div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">Customers can now vote on roadmap items and subscribe to updates without leaving your roadmap page.</p>
      <div className="mt-4 flex h-24 items-end gap-2 rounded-lg bg-gradient-to-br from-brand-soft to-surface-2 p-3">
        {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
          <span key={i} className="flex-1 rounded-sm bg-brand/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-bg p-3 shadow-sm">
        <span className="grid size-8 place-items-center rounded-full bg-success/15 text-success">✓</span>
        <div>
          <div className="text-xs font-semibold">128 customers notified</div>
          <div className="text-[11px] text-muted">Everyone who voted on this request</div>
        </div>
      </div>
    </MockFrame>
  );
}

export const mockups = { feedback: FeedbackMock, roadmap: RoadmapMock, changelog: ChangelogMock };
