# LaneOps Website

Static marketing site for LaneOps — React + TypeScript + Vite, plain CSS/CSS Modules, no backend. See
[docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) for the full architecture and design decisions.

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

- `npm run build` — type-check and build to `dist/`
- `npm run lint` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run preview` — preview the production build locally

## Editing content

All copy lives in typed data files under `src/data/`, not hardcoded in components — a non-developer
comfortable editing TypeScript can update most site content there:

| File                       | Controls                                                                      |
| -------------------------- | ----------------------------------------------------------------------------- |
| `src/data/navigation.ts`   | Header/footer nav items, "Book a Demo" destination                            |
| `src/data/services.ts`     | Home's feature grid, Features page's sub-nav tabs and deep-dive modules       |
| `src/data/benefits.ts`     | Differentiator band, Home benefits cards, Features results cards              |
| `src/data/audiences.ts`    | Home's "Who It's For" teaser                                                  |
| `src/data/modules.ts`      | "Built for Real Field Operations" and Features "System Overview" module lists |
| `src/data/contact.ts`      | Footer/Contact page email address                                             |
| `src/data/testimonials.ts` | Testimonials (currently empty — no copy has been supplied yet)                |

Page-specific copy that isn't shared data (hero headlines, standalone How It Works / Who It's For page
intros, etc.) lives directly in the relevant `src/pages/*/*.tsx` file.

## Tuning the ROI calculator

The Pricing page's savings calculator uses placeholder constants in `src/data/roi.ts`
(`ADMIN_TIME_REDUCTION_RATE`, `PER_VEHICLE_ANNUAL_SAVINGS`, `PER_JOB_BILLING_RECOVERY`). These are
**not business-validated** — replace them with real figures once available. The `ROICalculator`
component never needs to change; it only calls `calculateAnnualSavings()`.

## Brand tokens

All design tokens (colors, spacing, typography, radii) are CSS custom properties in
`src/styles/variables.css` — a single edit point. Note: `--color-primary` and `--color-secondary` are
darkened slightly from the design docs' literal values so white button text clears WCAG AA contrast;
re-check contrast with any new brand hex codes (a `color-contrast` axe/Lighthouse audit is enough).

The logo is currently a text wordmark (`Lane` + green `Ops` + an orange square mark) built with CSS in
`Header.tsx`/`Footer.tsx` — swap in a real SVG logo asset once supplied.

## Deploying to GoDaddy cPanel

1. `npm run build` — outputs static files to `dist/`.
2. Upload the contents of `dist/` to `public_html/` (or a subdirectory) via cPanel File Manager or
   FTP/SFTP. `dist/.htaccess` is included and rewrites all routes to `index.html`, which client-side
   routing (`react-router-dom`) needs to survive a hard refresh — make sure it uploads with the rest of
   the files (some FTP clients hide dotfiles by default).
3. If the site is deployed to a subdirectory rather than the domain root, set `base` in
   `vite.config.ts` to match before building.
4. Verify: all 6 routes load and survive a hard refresh, nav/footer links resolve, images load, HTTPS
   is enforced.

`public/robots.txt` and `public/sitemap.xml` reference `https://laneops.com` as a placeholder domain —
update both once the real domain is confirmed.

## Open items

See `docs/IMPLEMENTATION_PLAN.md` §2 and §16 for the list of decisions still pending business/brand
sign-off (exact brand colors, logo asset, real contact details, ROI formula, How It Works / Who It's
For / Contact page copy, GoDaddy deploy path).
