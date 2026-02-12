# replit.md

## Overview

EmailStack Landing Page is a standalone Next.js marketing site for an AI-powered outbound email campaign platform. It serves as the public-facing entry point, showcasing features, dashboard previews, workflow explanations, testimonials, FAQs, and a contact/lead form. The landing page is architecturally independent from the main EmailStack admin frontend and Python backend, though it's designed to eventually be portable into the admin frontend as a public route.

The project is purely a static/SSR marketing site with no database, no API routes, and no server-side data fetching. The only dynamic behavior is client-side UI animations and a lead form that generates a `mailto:` link.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Framework and Rendering

- **Next.js 16 with App Router** — Uses the `app/` directory convention with `layout.tsx` as the root layout and `page.tsx` as the single landing page.
- **React 19** — Latest React version with server components as the default. Client components are explicitly marked with `"use client"` where interactivity is needed.
- **TypeScript** — Strict mode enabled. Path alias `@/*` maps to the project root.
- **Tailwind CSS v4** — Styling via `@tailwindcss/postcss`. Custom design tokens are defined as CSS custom properties in `app/globals.css` and bridged into Tailwind's theme system using `@theme inline`.

### Project Structure

```
app/
  layout.tsx          — Root layout with metadata, Google Fonts (Manrope, Space Grotesk, Caveat), global CSS import
  page.tsx            — Single page composing all marketing sections in order
  globals.css         — CSS custom properties (design tokens), Tailwind import, global styles

components/marketing/
  content.ts          — Typed content data (nav items, KPIs, capabilities, workflow steps, testimonials, FAQs, etc.)
  sections.tsx        — Server components for each page section (Header, Hero, Trust, Dashboard, Capability, Workflow, Architecture, Testimonial, FAQ, Contact, Footer)
  LeadForm.tsx        — Client component: contact form that builds a mailto: link
  EmailDashboard.tsx  — Client component: animated dashboard preview with count-up animations
  WorkflowPreview.tsx — Client component: animated workflow visualization with intersection observer

docs/
  IMPLEMENTATION_REVIEW.md — Architecture review notes covering frontend, backend, and landing page decisions
```

### Design Patterns

- **Content-driven architecture**: All marketing copy and structured data lives in `components/marketing/content.ts` as typed constants. Section components import and render this data, making content updates easy without touching component logic.
- **Server-first components**: Section components in `sections.tsx` are server components by default. Only interactive pieces (LeadForm, EmailDashboard, WorkflowPreview) are client components.
- **Design token system**: Colors and shadows are defined as CSS custom properties in `:root`, then mapped to Tailwind theme colors. The palette is dark-mode-first with a deep navy canvas, cyan brand color, and magenta accent.
- **No backend integration**: The lead form uses `mailto:` links rather than an API endpoint. There is no database, no authentication, and no server actions in this project.
- **Environment variable**: `NEXT_PUBLIC_ADMIN_LOGIN_URL` controls where the "Log in" button points. Defaults to `http://localhost:3000/login`.

### Build Configuration

- `npm run dev` uses webpack mode (not Turbopack) by default via `--webpack` flag
- `npm run dev:turbo` available for Turbopack mode
- `next.config.ts` sets `Cache-Control: no-store` on all routes and enables server actions with wildcard origins
- No database, no Drizzle, no ORM — this is a pure frontend project

### Font Strategy

Three Google Fonts loaded with `next/font/google` for performance (self-hosted, preloaded):
- **Manrope** — Primary body font
- **Space Grotesk** — Headings/display font
- **Caveat** — Handwritten accent font

## External Dependencies

### Runtime Dependencies
- **next 16.1.6** — Framework
- **react 19.2.3** / **react-dom 19.2.3** — UI library

### Dev Dependencies
- **tailwindcss v4** — Utility CSS framework
- **@tailwindcss/postcss** — PostCSS integration for Tailwind v4
- **typescript ~5.x** — Type checking
- **eslint ~9.x** + **eslint-config-next** — Linting

### External Services
- **None currently** — No analytics, no third-party APIs, no database
- **mailto: protocol** — Lead form submits via the user's email client to `sales@emailstack.ai`
- **Related systems** (not in this repo): An admin frontend (Next 14/React 18) and a Python backend exist separately. This landing page is meant to be the public marketing entry point that links to the admin app via the login URL environment variable.