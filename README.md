# EmailStack Landing Page

This folder now contains a production-focused landing page implementation aligned with the existing admin/frontend and API/backend architecture.

## What Changed

- Replaced the old animation-heavy landing implementation with a section-based marketing architecture.
- Removed dead/duplicated legacy landing components and unused helper UI modules.
- Introduced typed centralized content (`components/marketing/content.ts`) for maintainability.
- Added an accessible lead form (`components/marketing/LeadForm.tsx`) that opens a prefilled mail draft.
- Updated layout metadata and font strategy for stronger SEO and visual identity.
- Refactored global styles for clearer design tokens, reusable utility classes, and reduced-motion support.

## Current Structure

- `app/layout.tsx`: global metadata, font setup, skip link, root layout.
- `app/page.tsx`: page composition and section ordering.
- `app/globals.css`: tokenized color system and reusable section/UI utility classes.
- `components/marketing/content.ts`: typed content model used by all sections.
- `components/marketing/sections.tsx`: semantic section components.
- `components/marketing/LeadForm.tsx`: client-side lead intake form.
- `docs/IMPLEMENTATION_REVIEW.md`: detailed architecture review and change log.

## Local Run

```bash
npm run dev
npm run lint
npm run build
```

## Integration Note

This landing app is still an independent Next.js project. If you want a single deployable frontend, port `components/marketing/*` into `frontend/src` and mount it as the public route there.

Set `NEXT_PUBLIC_ADMIN_LOGIN_URL` to point the `Log in` call-to-action at your admin frontend (for example `http://localhost:3000/login` in local development).
