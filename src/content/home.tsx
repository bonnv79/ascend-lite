import type { ReactNode } from "react";
import { InboxIcon, MapIcon, MegaphoneIcon, PlugIcon, ShieldIcon, UsersIcon } from "@/components/icons";

/** Copy for the home page. Edit the words here, the layout stays the same. */

export const hero = {
  badge: "New: public roadmaps with voting",
  title: "Build what customers actually ask for",
  description:
    "Ascend collects feedback from every channel, shows you which requests matter most and tells customers when you ship them. One tool instead of a spreadsheet, a Trello board and a blog.",
  primaryCta: "Start free trial",
  secondaryCta: "See pricing",
  note: "Free for 14 days. No credit card required.",
};

/** Placeholder customer names. Replace them with real logos when you have them. */
export const logos = ["Northwind", "Lumio", "Quanta", "Fieldnote", "Kettle", "Orbitly"];

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <InboxIcon />,
    title: "One inbox for feedback",
    description: "Pull requests in from email, Slack, Intercom and your in-app widget. Duplicates are merged for you.",
  },
  {
    icon: <UsersIcon />,
    title: "Know who is asking",
    description: "See each request with the customer's plan and revenue, so a big account's blocker never gets lost.",
  },
  {
    icon: <MapIcon />,
    title: "Public roadmap",
    description: "Share what is planned, in progress and done. Customers vote and subscribe to the items they care about.",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Changelog that gets read",
    description: "Publish an update and everyone who asked for it gets an email. Embed the feed in your app with one line.",
  },
  {
    icon: <PlugIcon />,
    title: "Works with your stack",
    description: "Two-way sync with Linear, Jira and GitHub Issues. Status changes there show up on your roadmap.",
  },
  {
    icon: <ShieldIcon />,
    title: "Private by default",
    description: "SSO, role-based access and data stored in the EU or US. Internal notes never leave your team.",
  },
];

export interface Showcase {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  mockup: "feedback" | "roadmap" | "changelog";
}

export const showcases: Showcase[] = [
  {
    eyebrow: "Collect",
    title: "Every request in one place, sorted by impact",
    description: "Stop digging through support threads. Ascend groups similar requests and ranks them by votes and revenue.",
    points: ["Merge duplicates in one click", "Tag by product area", "Filter by plan, segment or date"],
    mockup: "feedback",
  },
  {
    eyebrow: "Plan",
    title: "A roadmap your customers can follow",
    description: "Move items from planned to shipped and everyone who voted sees the progress, without you writing a single email.",
    points: ["Public or private boards", "Voting and comments", "Custom statuses"],
    mockup: "roadmap",
  },
  {
    eyebrow: "Announce",
    title: "Close the loop when you ship",
    description: "Write the update once. Ascend posts it to your changelog, emails the people who asked and shows a badge in your app.",
    points: ["Rich text and images", "Embeddable widget", "Scheduled posts"],
    mockup: "changelog",
  },
];

export const steps = [
  { title: "Connect your channels", description: "Add the in-app widget and link Slack, email or Intercom. It takes about five minutes." },
  { title: "Prioritize together", description: "Your team reviews requests in one board, sees who asked and decides what goes on the roadmap." },
  { title: "Ship and tell everyone", description: "Mark an item as shipped and Ascend notifies every customer who asked for it." },
];

export const stats = [
  { value: "2,400+", label: "product teams" },
  { value: "1.2M", label: "requests organized" },
  { value: "38%", label: "fewer churned accounts" },
  { value: "4.9/5", label: "average rating" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/** Sample quotes for the demo. Replace them with real ones from your customers. */
export const testimonials: Testimonial[] = [
  {
    quote: "We used to lose feature requests in Slack. Now every one of them lands in Ascend and our roadmap finally reflects what customers want.",
    name: "Maya Chen",
    role: "Head of Product, Lumio",
  },
  {
    quote: "The changelog emails alone paid for it. Customers reply to say thanks, and two accounts upgraded the week we shipped their request.",
    name: "Daniel Okafor",
    role: "Founder, Fieldnote",
  },
  {
    quote: "Setup took an afternoon. The Linear sync means engineers never have to leave their tools to update the roadmap.",
    name: "Sofia Lindqvist",
    role: "Engineering Manager, Quanta",
  },
  {
    quote: "Seeing revenue next to each request changed how we prioritize. We stopped building for the loudest voice.",
    name: "Arjun Patel",
    role: "VP Product, Northwind",
  },
  {
    quote: "Our public roadmap is now one of the most visited pages on our site. Prospects tell us it is why they trusted us.",
    name: "Lena Novak",
    role: "CEO, Kettle",
  },
  {
    quote: "Support finally has an answer when someone asks 'is this coming?'. They just send the roadmap link.",
    name: "Tom Becker",
    role: "Support Lead, Orbitly",
  },
];

export const faqs = [
  {
    q: "How long is the free trial?",
    a: "14 days with every feature of the Growth plan. You don't need a credit card to start, and you can downgrade to the free plan at any time.",
  },
  {
    q: "Can I import feedback from another tool?",
    a: "Yes. Upload a CSV or connect Canny, Productboard or Trello and we bring over posts, votes and comments.",
  },
  {
    q: "Do my customers need an account to vote?",
    a: "No. They can vote with just an email address, or you can sign them in automatically with single sign-on from your app.",
  },
  {
    q: "Where is my data stored?",
    a: "You choose the EU (Frankfurt) or US (Virginia) region when you create a workspace. Data is encrypted at rest and in transit.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Plans are billed monthly or yearly and you can cancel from the billing page in two clicks. You keep access until the end of the period.",
  },
];
