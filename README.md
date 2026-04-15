# Myriad Legal Consulting at Berkeley — Website

UC Berkeley's premier legal consulting organization. Built with Next.js 16 (App Router) in a Turborepo monorepo.

## Structure

```
next-monorepo/
├── apps/web/              # Next.js app (the site)
│   ├── app/               # routes: /, /about, /services, /projects
│   ├── components/        # local components (Navbar, StatsCounter)
│   └── public/            # static assets
│       ├── assets/        # logos, team photos
│       └── fonts/         # LaLuxes, PP Telegraf
└── packages/ui/           # shared UI (MyriadHero, globals.css)
```

## Local development

Requires Node 20+ and npm 10+.

```bash
npm install
npm run dev         # http://localhost:3000
```

## Production build

```bash
npm run build       # turbo build — runs `next build` in apps/web
```

Output: `apps/web/.next` (all 4 routes prerender as static).

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. On https://vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects the monorepo. Set **Root Directory** to `apps/web`.
4. Framework preset: **Next.js**. Leave build/install commands as defaults (Vercel will run `npm install` and `next build`).
5. Point your domain (e.g. `myriadlc.org`) in **Settings → Domains**.

### Any Node host

```bash
npm install
npm run build
cd apps/web && npm run start   # runs on port 3000
```

## Contact form

The contact form on `/services` submits to [FormSubmit](https://formsubmit.co/) at `admin@myriadlc.org`. First submission from a new domain triggers a confirmation email — activate it once to start receiving submissions. To change the destination, edit the `<form action="...">` URL in `apps/web/app/services/page.tsx`.

## Updating content

- **Stats** (Est. 2024, 15+ consultants, etc.): `apps/web/components/stats-counter.tsx`
- **"Where We Go" logos**: `apps/web/app/page.tsx`, assets in `apps/web/public/assets/logo-*.png`
- **Partners marquee**: `apps/web/app/page.tsx`, `partner-*-clean.png`
- **Projects**: `apps/web/app/projects/page.tsx` (`projects` array)
- **Firms we've worked with / sponsors**: `apps/web/app/about/page.tsx`
- **Team roster**: embedded Airtable iframe (`apps/web/app/about/page.tsx`) — edit the Airtable base directly.

## Environment

No env vars required. Add analytics/CMS keys to `apps/web/.env.local` (git-ignored).

## Tech

- Next.js 16 + Turbopack
- React 19
- Tailwind CSS v4
- Framer Motion (hero)
- @paper-design/shaders-react (mesh gradient)
- TypeScript 5, Turborepo
