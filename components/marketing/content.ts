export type NavItem = {
  label: string;
  href: string;
};

export type Kpi = {
  value: string;
  label: string;
  context: string;
};

export type Capability = {
  title: string;
  description: string;
  points: string[];
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type ArchitecturePillar = {
  title: string;
  layer: string;
  details: string[];
};

export type Testimonial = {
  person: string;
  role: string;
  quote: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Verification", href: "#verification" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export const kpis: Kpi[] = [
  {
    value: "5x",
    label: "Faster campaign setup",
    context: "Prompt-driven email templates and reusable sequences.",
  },
  {
    value: "99.99%",
    label: "Automation uptime",
    context: "Background scheduling with queue-safe processing patterns.",
  },
  {
    value: "40%",
    label: "Lower tooling overhead",
    context: "One platform replacing fragmented outreach workflows.",
  },
];

export const trustSignals = [
  "SOC-ready controls",
  "Role-aware admin access",
  "Webhook-driven tracking",
  "Adaptive send limits",
  "Daily reporting pipeline",
  "Campaign-level analytics",
];

export const capabilities: Capability[] = [
  {
    title: "AI campaign studio",
    description:
      "Create industry-tuned outreach and prompt variants in one editor.",
    points: [
      "Versioned templates",
      "Prompt packs",
      "Bounce fallback",
    ],
  },
  {
    title: "Deliverability controls",
    description:
      "Set domain policy, send limits, and credential safeguards.",
    points: [
      "Domain/account limits",
      "Credential checks",
      "Bounce-safe sends",
    ],
  },
  {
    title: "Contact intelligence",
    description:
      "Keep targeting clean across companies, industries, and roles.",
    points: [
      "Company/contact graph",
      "Industry + role filters",
      "Dedupe pipeline",
    ],
  },
  {
    title: "Automated execution",
    description:
      "Run sends and inbox sync with resilient background workers.",
    points: [
      "Scheduled workers",
      "Inbox sync cycle",
      "Retry protection",
    ],
  },
  {
    title: "Operational analytics",
    description:
      "Track output, history, and health in one analytics view.",
    points: [
      "Performance cards",
      "History insights",
      "System health",
    ],
  },
  {
    title: "Admin governance",
    description:
      "Protect workflows with secure roles and auditable actions.",
    points: [
      "Session auth",
      "Protected routes",
      "Admin lifecycle",
    ],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Connect sending infrastructure",
    description: "Connect providers and domains in one guided setup.",
  },
  {
    title: "Define targeting logic",
    description: "Focus audience quality with clean role and industry filters.",
  },
  {
    title: "Build and validate templates",
    description: "Prepare messaging and approve final copy before launch.",
  },
  {
    title: "Schedule campaign runs",
    description: "Activate campaign windows with controlled send pacing.",
  },
  {
    title: "Monitor delivery and replies",
    description: "Track replies, bounces, and performance shifts in real time.",
  },
  {
    title: "Report and optimize",
    description: "Improve outcomes weekly using conversion and quality signals.",
  },
];

export const architecturePillars: ArchitecturePillar[] = [
  {
    title: "Faster revenue execution",
    layer: "Campaign velocity",
    details: [
      "Launch outbound programs in hours instead of long setup cycles.",
      "Standardized workflows keep your team shipping campaigns consistently.",
      "Less manual coordination means more selling time for GTM teams.",
    ],
  },
  {
    title: "Clear pipeline visibility",
    layer: "Decision intelligence",
    details: [
      "Track opens, replies, and performance trends in one decision surface.",
      "See which segments and messages produce qualified conversations.",
      "Use analytics to reallocate effort toward high-conversion campaigns.",
    ],
  },
  {
    title: "Safer scaling",
    layer: "Operational reliability",
    details: [
      "Guardrails protect sender reputation as campaign volume grows.",
      "Consistent process reduces errors across teams and handoffs.",
      "Reliable operations improve forecast confidence and execution quality.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    person: "Nora Alvarez",
    role: "Growth Lead, Atlas Pipeline",
    quote:
      "We moved from fragmented tools to one campaign engine and cut launch time from days to hours.",
  },
  {
    person: "Ryan Patel",
    role: "Head of RevOps, Vector Labs",
    quote:
      "The workflow mirrors how operators actually work: clean segments, controlled sending, and transparent outcomes.",
  },
  {
    person: "Maya Fischer",
    role: "Director of Sales Ops, Northline",
    quote:
      "Deliverability controls and role-based admin actions made scaling safer for our team.",
  },
];

export const faqEntries: FaqEntry[] = [
  {
    question: "How quickly can we see value after onboarding?",
    answer:
      "Most teams launch their first production campaign in days, then optimize weekly using dashboard insights and reply-quality feedback.",
  },
  {
    question: "Who on our team should use EmailStack daily?",
    answer:
      "Revenue operations, growth marketers, and campaign operators use it together: one team configures strategy while others monitor outcomes and iterate messaging.",
  },
  {
    question: "Can we keep our current outreach process and still migrate?",
    answer:
      "Yes. Teams usually start with one campaign lane, validate performance, then roll remaining workflows into the platform in planned phases.",
  },
  {
    question: "How does this help leadership make better decisions?",
    answer:
      "Leadership gets a single view of campaign output, response quality, and execution consistency, which makes planning and budget allocation more reliable.",
  },
];
