# AGENTS.md — Novation prototype

## Architecture
Static site, no build step. Netlify publishes the repo root (`netlify.toml`).
- `index.html` — home page
- `services.html` — services page
- `assets/styles.css` — the **single design system** (tokens, components, page sections, responsive rules)
- `assets/main.js` — vanilla JS: header scroll state, mobile menu, scroll-reveal, marquee duplication, hero parallax, services sub-nav highlighting, prototype form success state
- `SONNET.md` — handoff brief for continuing the design with Sonnet 5.5

## Conventions
- All colors/fonts/radii are CSS custom properties in `:root`. Never hardcode new colors; extend tokens instead.
- Palette: `--paper` (bg), `--ink` (text), `--signal` (violet-blue accent), `--lime` (highlight). Brand colors `--yandex`, `--avito` only for platform hints.
- Fonts: `Unbounded` for headings (`--f-display`), `Onest` for body (`--f-body`). Both support Cyrillic.
- Reusable components: `.btn` (`.ghost`, `.lime`, `.lg`), `.eyebrow`, `.chip`, `.sec-head`, `.ticks`, `.tile`, `.svc-card`, `.more`, `.form`/`.field`/`.pick`, `.stage` (dark block), `.cta-final` (signal block).
- Animations: add `.reveal` (+ `.d1`–`.d3` delays) to any element to fade in on scroll. Respect `prefers-reduced-motion` (already handled globally).
- Header, mobile menu and footer are duplicated in both HTML files — update both when changing them.
- Breakpoints: 1100px (tablet) and 720px (mobile).

## Non-obvious decisions
- No fake testimonials, case studies, prices or client results — intentional per the brief. Contact data are placeholders.
- Forms do not submit anywhere; `main.js` just shows a success state.
- Illustrations are CSS/SVG mockups (map card, Avito listings, browser/phone) to keep the prototype light and editable.
