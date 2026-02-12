import {
  architecturePillars,
  capabilities,
  faqEntries,
  kpis,
  navItems,
  testimonials,
  workflowSteps,
} from "@/components/marketing/content";
import { EmailDashboard } from "@/components/marketing/EmailDashboard";
import { LeadForm } from "@/components/marketing/LeadForm";
import { WorkflowPreview } from "@/components/marketing/WorkflowPreview";

const adminLoginHref =
  process.env.NEXT_PUBLIC_ADMIN_LOGIN_URL || "http://localhost:3000/login";

const trustedTeams = ["Notion", "Linear", "Intercom", "Figma", "Spotify", "Stripe", "Dropbox"] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white">
            ES
          </div>
          <div>
            <p className="text-sm font-bold">EmailStack</p>
            <p className="text-xs text-ink-500">AI outreach platform</p>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a className="text-sm font-semibold text-ink-700 hover:text-ink-900" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="button-secondary" href={adminLoginHref}>
            Log in
          </a>
          <a className="button-primary" href="#contact">
            Book demo
          </a>
        </div>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="section-block relative pt-16 sm:pt-24" id="overview">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-stripes opacity-40" />
      <div className="container-shell relative">
        <div className="hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Email intelligence</p>
            <h1 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-7xl">
              Email marketing,
              <br />
              re-imagined.
            </h1>
            <p className="section-lead">
              Build, launch, and optimize email campaigns with clear performance signals and predictable pipeline impact.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className="button-primary" href="#features">
                Explore features
              </a>
              <a className="button-secondary" href="#architecture">
                See outcomes
              </a>
            </div>

            <div className="mt-10 reveal-up delay-2">
              <WorkflowPreview />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {kpis.map((item, index) => (
            <article
              className="surface-card p-6 reveal-up"
              key={item.label}
              style={{ animationDelay: `${180 + index * 120}ms` }}
            >
              <p className="kpi-value">{item.value}</p>
              <p className="kpi-label">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section-block pt-8" aria-label="Trust indicators">
      <div className="container-shell">
        <div className="surface-card p-6 sm:p-8 reveal-up">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Trusted by world-class teams
          </p>
          <div className="logo-marquee mt-5" aria-label="Trusted teams">
            <div className="logo-track">
              {[...trustedTeams, ...trustedTeams].map((team, index) => (
                <span className="logo-chip" key={`${team}-${index}`}>
                  <BrandLogo team={team} />
                  <span className="logo-name">{team}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilitySection() {
  return (
    <section className="section-block" id="features">
      <div className="container-shell">
        <p className="eyebrow">Feature architecture</p>
        <h2 className="section-title mt-4">Core modules for each outbound stage.</h2>
        <p className="section-lead">Setup, segment, execute, analyze, and govern from one system.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <article
              className="surface-card capability-card p-6 reveal-up"
              key={item.title}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <h3 className="capability-title text-xl font-semibold">{item.title}</h3>
              <p className="capability-copy mt-3 text-sm leading-relaxed text-ink-700">{item.description}</p>
              <ul className="capability-points mt-5 grid gap-2">
                {item.points.map((point, pointIndex) => (
                  <li
                    className="feature-point capability-point"
                    key={point}
                    style={{ animationDelay: `${index * 120 + pointIndex * 90}ms` }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DashboardSection() {
  return (
    <section className="section-block dashboard-showcase" id="dashboard">
      <div className="container-shell">
        <div className="dashboard-showcase-frame grid items-start gap-10 xl:grid-cols-[minmax(340px,0.95fr)_minmax(0,1.05fr)]">
          <div className="dashboard-showcase-copy reveal-up min-w-0">
          <p className="eyebrow">Email dashboard</p>
          <h2 className="section-title mt-4">Verify campaigns and project health in one command view.</h2>
          <p className="section-lead">
            Dense, fast, and review-ready. Track metrics, scan checks, and close blockers without leaving the dashboard.
          </p>

          <ul className="dashboard-benefits mt-7 grid gap-3">
            <li className="dashboard-benefit">Animated KPI progress + weekly target</li>
            <li className="dashboard-benefit">Live verification queue with status states</li>
            <li className="dashboard-benefit">Project review tracker with completion flow</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#verification">
              Review verification
            </a>
            <a className="button-secondary" href="#contact">
              Request walkthrough
            </a>
          </div>
          </div>

          <div className="reveal-up delay-1 min-w-0">
            <EmailDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section className="section-block" id="workflow">
      <div className="container-shell">
        <p className="eyebrow">Workflow path</p>
        <h2 className="section-title mt-4">A live campaign view your team can read in seconds.</h2>
        <p className="section-lead">
          Less operational noise, clearer signals, and smooth handoffs from setup to qualified pipeline.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article
              className="surface-card p-6 reveal-up"
              key={step.title}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchitectureSection() {
  return (
    <section className="section-block" id="architecture">
      <div className="container-shell">
        <p className="eyebrow">Business outcomes</p>
        <h2 className="section-title mt-4">Built to increase pipeline, speed decisions, and protect revenue quality.</h2>
        <p className="section-lead">
          EmailStack gives growth and revenue teams a single system for launch velocity, targeting quality, and predictable
          campaign performance.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {architecturePillars.map((pillar, index) => (
            <article
              className="surface-card p-6 reveal-up"
              key={pillar.title}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-500">{pillar.layer}</p>
              <h3 className="mt-3 text-lg font-semibold">{pillar.title}</h3>
              <ul className="mt-4 grid gap-2">
                {pillar.details.map((detail) => (
                  <li className="feature-point" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="section-block" aria-label="Customer outcomes">
      <div className="container-shell">
        <p className="eyebrow">Customer proof</p>
        <h2 className="section-title mt-4">Teams report faster launches and cleaner operations.</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              className="surface-card p-6 reveal-up"
              key={item.person}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm leading-relaxed text-ink-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-ink-900">{item.person}</p>
              <p className="text-xs text-ink-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-block" id="faq">
      <div className="container-shell">
        <p className="eyebrow">Buyer questions</p>
        <h2 className="section-title mt-4">Answers for buyers and revenue teams.</h2>

        <div className="mt-8 grid gap-3">
          {faqEntries.map((entry, index) => (
            <details
              className="faq-item reveal-up"
              key={entry.question}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <summary>{entry.question}</summary>
              <p>{entry.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-block" id="contact">
      <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="surface-card p-6 sm:p-8 reveal-up">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-4">Plan your rollout with a senior implementation walkthrough.</h2>
          <p className="section-lead mt-4 text-sm sm:text-base">
            Share your current stack and campaign volume. We will map migration checkpoints, data model fit, and
            integration sequence for your team.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-ink-700">
            <p>
              <span className="font-semibold text-ink-900">Sales:</span> sales@emailstack.ai
            </p>
            <p>
              <span className="font-semibold text-ink-900">Support:</span> support@emailstack.ai
            </p>
            <p>
              <span className="font-semibold text-ink-900">Response window:</span> within one business day
            </p>
          </div>
        </div>

        <div className="contact-form-wrap reveal-up delay-2">
          <span aria-hidden className="contact-ask-note">
            Ask anything
          </span>
          <span aria-hidden className="contact-ask-arrow" />
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-10">
      <div className="container-shell flex flex-col gap-4 text-sm text-ink-700 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-ink-900">EmailStack</span> | Built for campaign operators and RevOps teams.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-ink-900" href="#features">
            Features
          </a>
          <a className="hover:text-ink-900" href="#architecture">
            Outcomes
          </a>
          <a className="hover:text-ink-900" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function BrandLogo({ team }: { team: (typeof trustedTeams)[number] }) {
  if (team === "Notion") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <rect x="3" y="3" width="26" height="26" rx="6" fill="#111111" />
          <path d="M10 23V9h3.2l8 10.8V9h2.8v14h-3.1L12.8 12.2V23H10Z" fill="#ffffff" />
        </svg>
      </span>
    );
  }

  if (team === "Linear") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <circle cx="16" cy="16" r="11" fill="none" stroke="#5E6AD2" strokeWidth="3" />
          <path d="M10 22L22 10" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (team === "Intercom") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <rect x="4" y="4" width="24" height="24" rx="7" fill="#1F6FFF" />
          <path d="M10 12v6M14 10v8M18 10v8M22 12v6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M11 21c1.6 1.3 3.3 2 5 2s3.4-.7 5-2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (team === "Figma") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <rect x="8" y="3" width="8" height="8" rx="4" fill="#F24E1E" />
          <rect x="16" y="3" width="8" height="8" rx="4" fill="#FF7262" />
          <rect x="8" y="11" width="8" height="8" rx="4" fill="#A259FF" />
          <rect x="16" y="11" width="8" height="8" rx="4" fill="#1ABCFE" />
          <rect x="8" y="19" width="8" height="8" rx="4" fill="#0ACF83" />
        </svg>
      </span>
    );
  }

  if (team === "Spotify") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <circle cx="16" cy="16" r="13" fill="#1DB954" />
          <path d="M10 12.3c4-1 8.2-.7 12 1" stroke="#101010" strokeWidth="2.1" strokeLinecap="round" fill="none" />
          <path d="M10.8 16c3.2-.8 6.8-.5 9.8.8" stroke="#101010" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M11.8 19.3c2.4-.5 5-.3 7.2.6" stroke="#101010" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      </span>
    );
  }

  if (team === "Stripe") {
    return (
      <span className="logo-mark" aria-hidden>
        <svg viewBox="0 0 32 32" role="img">
          <g transform="translate(4 8) rotate(-15 12 8)">
            <rect x="0" y="0" width="24" height="3" rx="1.5" fill="#635BFF" />
            <rect x="0" y="5" width="24" height="3" rx="1.5" fill="#635BFF" />
            <rect x="0" y="10" width="24" height="3" rx="1.5" fill="#635BFF" />
            <rect x="0" y="15" width="20" height="3" rx="1.5" fill="#635BFF" />
          </g>
        </svg>
      </span>
    );
  }

  return (
    <span className="logo-mark" aria-hidden>
      <svg viewBox="0 0 32 32" role="img">
        <path d="M8 8l8-5 8 5-8 5-8-5Z" fill="#0061FF" />
        <path d="M8 18l8-5 8 5-8 5-8-5Z" fill="#0061FF" />
        <path d="M16 23l8-5v6l-8 5-8-5v-6l8 5Z" fill="#0061FF" />
      </svg>
    </span>
  );
}
