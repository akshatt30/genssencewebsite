# Genessence website

Production port of the approved Claude Design handoff (`../handoff/genessence-website-handoff`).

- `client/`: React 18 + Vite + TypeScript. The design's CSS is copied verbatim into `src/styles/global.css`.
- `server/`: Node + Express. Exposes `POST /api/demo-request` and, in production, serves the built client.

## Run

```bash
npm install
npm run dev      # API on :4000, site on http://localhost:5173 (proxies /api)
npm run build    # builds client/dist
npm start        # Express serves client/dist + API on http://localhost:4000
```

## Deploy (Vercel)

`vercel.json` builds the client and serves `client/dist` as static files. The API routes
are Vercel serverless functions in `api/` (`/api/demo-request`, `/api/health`). They reuse
`server/src/validate.js`, so validation stays identical to the Express server. Import the
repo in Vercel with the root directory left as the repo root; no settings need changing.

## Where things live

| What | Where |
| --- | --- |
| Copy and data (ARCH, STEPS, SUITE, NAV, NODES, BASE/LO/HI/MAXQ) | `client/src/lib/content.ts` |
| One component per section, in page order | `client/src/components/` |
| Scroll reveal (`armed`, `seen-<section>`) | `client/src/hooks/useReveal.ts` |
| Header progress / scroll-spy | `client/src/hooks/useScrollState.ts` |
| `motion` flag + reduced-motion check | `client/src/lib/motion.ts` (`MOTION`) |
| Demo form validation + `submitDemoRequest(data)` | `client/src/lib/demoForm.ts` |
| Server-side validation | `server/src/validate.js` |
| SEO: title, description, OG, favicon, robots, sitemap | `client/index.html`, `client/public/` |

## TODO

- **Demo form backend:** `server/src/index.js` validates the request and logs it only. Wire it to the real destination (HubSpot, Formspree, email); look for `TODO(demo-form)`.
- **Domain:** the canonical URL, OG URL, `robots.txt` and `sitemap.xml` assume `https://www.genessence.ai/`. Update them if the domain is different.
