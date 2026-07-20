# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single SvelteKit 2 / Svelte 5 (runes) static portfolio site (CACTUS design dummy site). There is no backend, database, auth, or environment variables — it is a frontend-only app. Standard commands live in `package.json` (`dev`, `build`, `preview`, `check`).

- Dev server: `npm run dev` starts Vite on port `5173`. Use `npm run dev -- --host 0.0.0.0` when the app must be reachable from outside the VM (e.g. browser/computer-use testing).
- Lint/type check: there is no ESLint/Prettier config; the only static check is `npm run check` (svelte-check). It reports one benign warning `Cannot find type definition file for 'node'` and still exits 0 — this is expected, not a real failure.
- Tests: no automated test runner is configured.
- External assets: project images load from Unsplash and fonts from Google Fonts. Without network access the site still runs but images/fonts fall back — not a bug.
- Contact forms (`/contact`, `/contact/partner`) are client-side demo-only; submitting shows a "送信完了（デモ）" message and performs no real network request.
