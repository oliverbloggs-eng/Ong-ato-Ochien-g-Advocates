# Ong'ato, Ochieng' & Co. Advocates — Design System

A brand & UI design system for **Ong'ato, Ochieng' & Company Advocates**, a law
firm based in Nairobi, Kenya. The system encodes the firm's visual identity —
the interlocking gold-and-green mark, its serif/sans type pairing, and a
restrained, authoritative palette — into reusable tokens, components, and a
website UI kit.

## Sources provided
- **`uploads/WhatsApp Image 2025-04-13 at 22.21.49_6637498a.jpg`** — the firm
  logo (two interlocking rings, gold "O" + green "C", wordmark
  "ONG'ATO, OCHIENG' & CO. | ADVOCATES"). This is the sole visual source and the
  origin of the entire palette. Copied to `assets/logo-full.jpg`; a
  background-knockout version is at `assets/logo-transparent.png`.
- **`uploads/Oliver Ouma Barasa CV.docx`** — the résumé of the web
  designer/developer engaged by the firm. Used only for engagement context; it
  is **not** firm brand material and no content from it appears in the system.

No codebase, Figma file, existing website, or brand-guideline document was
supplied. The visual foundations below are therefore **derived from the logo and
sector conventions** for professional legal practices, not extracted from an
existing product. Treat colour and type as authoritative (colour is sampled from
the logo); treat component/layout specifics as a proposed, internally-consistent
starting system open to the firm's direction.

## Font substitution — needs confirmation
No brand fonts were provided. The system substitutes two Google Fonts:
- **Display / headings → Cormorant Garamond** (a refined transitional serif; the
  authoritative, "counsel" voice for headlines and the firm name).
- **Body / UI → Source Sans 3** (a clean humanist sans for running text, labels,
  and interface).

If the firm has an established typeface (many Kenyan firms standardise on Times /
Garamond for documents and a specific sans for web), **please share the files or
names** and these tokens will be swapped.

---

## CONTENT FUNDAMENTALS

**Voice.** Measured, precise, and reassuring — the register of trusted counsel.
The firm speaks as an institution ("we", "our advocates", "the firm"), and
addresses clients directly and respectfully as "you". Never casual, never
salesy, never jargon-for-its-own-sake; plain-language confidence.

**Casing.** Title Case for headings and navigation ("Practice Areas", "Our
Advocates"). Sentence case for body copy and supporting text. The wordmark and
key section labels may appear in ALL CAPS with generous letter-spacing
(overline style), mirroring "ADVOCATES" in the logo. Avoid ALL CAPS for long
strings.

**Person.** "We / our" for the firm; "you / your" for the client. Third person
for matters and precedent. E.g. *"We advise you at every stage"*, not *"Clients
are advised"*.

**Tone examples**
- Hero: *"Trusted Counsel. Considered Advocacy."*
- Value line: *"Over two decades advising Kenyan business, family, and
  property."*
- CTA: *"Request a Consultation"* / *"Speak to an Advocate"* (imperative, but
  courteous — never "Buy now" energy).
- Practice blurb: *"We represent individuals and enterprises in commercial
  disputes, land and conveyancing, and family law."*

**Numbers & credentials.** State experience, matters handled, and years plainly
("Est. 2004", "300+ matters"). Restraint over hyperbole — no "best", "#1", or
superlatives that could breach advocacy-marketing norms.

**Emoji.** Never. Not part of the brand.

**Punctuation.** The firm name carries apostrophes — always "Ong'ato,
Ochieng'". An ampersand ("& Co.") is part of the mark; spell "and" in running
prose.

---

## VISUAL FOUNDATIONS

**Colour.** Two brand colours, both sampled from the logo:
- **Gold `--gold-500` #C0A030** — the primary brand voltage. Carries the mark,
  primary CTAs, key accents, and section rules. Metallic, warm, confident. Used
  scarcely for emphasis, never as a large body-text colour.
- **Forest green `--green-500` #007A40** — the secondary/institutional colour.
  Deep greens (`--green-700/800`) provide the dark marketing "canvas"; mid green
  carries secondary buttons, links, and the "ADVOCATES" register.
Neutrals are a **warm slate** family (`--ink-*`) tuned to sit beside gold/green
without going cold. White and a soft `--ink-50` tint are the default light
canvases. There is no third brand hue — gold + green + warm neutrals only.

**Type.** Cormorant Garamond (display serif) over Source Sans 3 (body sans).
Serif headlines are set at weight 600 with slightly negative tracking for a
composed, engraved feel; body runs 400/500 at 1.6 line-height for comfortable
legal reading. An overline style (12px, ALL CAPS, +1.6px tracking, gold or
green) labels sections.

**Backgrounds.** Flat colour blocks — no gradients, no mesh, no aurora. Two
signature grounds: clean white/`--ink-50` for content, and a deep-green
`--green-800` band for the hero and pre-footer. Full-bleed photographic bands
(courthouse/skyline/office imagery) are used sparingly with a green or ink
scrim for text legibility. No repeating patterns or textures except an optional
faint gold hairline rule under section overlines.

**Imagery vibe.** Warm, natural-light, documentary photography — advocates at
work, Nairobi cityscape, meeting rooms, handshakes. Restrained colour grade
(slightly warm, never oversaturated). Portraits are respectful and formal.
Corners crop to `--radius-lg`/`--radius-xl`.

**Animation.** Subtle and dignified. Fades and short rises (8–12px) on scroll,
`--dur-base` 200ms with `--ease-out`. No bounces, no springy overshoot, no
parallax spectacle. Motion should feel calm and deliberate.

**Hover states.** Solid buttons darken to their `-active` token (gold→#A2871F,
green→#006134); outline/ghost buttons fill with a soft tint (`--gold-100` /
`--green-50`). Links move from `--green-600` to `--green-700` and gain an
underline. Cards lift from `--shadow-sm` to `--shadow-md` and the border
strengthens. No colour inversion on hover.

**Press states.** A 1px translateY nudge and the darker `-active` colour; no
scale-down. Focus is always a visible `--shadow-focus` gold ring (never removed).

**Borders.** 1px hairlines in `--ink-200` on light, `rgba(255,255,255,.16)` on
dark. Borders read as quiet dividers, not ink lines. A 2–3px gold rule is used
as a deliberate accent under headings and beside pull-quotes.

**Shadows.** Soft, low, warm-tinted (`--shadow-xs`→`--shadow-xl`), all built on
`rgba(20,26,23,…)`. Cards default to `--shadow-sm`. No glassmorphism, no glow.

**Corner radius.** Restrained: `--radius-md` 6px for buttons/inputs,
`--radius-lg` 10px for cards, `--radius-xl` 16px for large media/feature panels.
Pills (`--radius-pill`) reserved for tags/badges and the occasional prominent
"Consultation" CTA. Avatars/coin-style marks use `--radius-full`.

**Cards.** White surface, 1px `--ink-200` border, `--radius-lg`, `--shadow-sm`,
`--space-card-pad` (28px) interior. On dark green bands, cards flip to a
translucent lighter-green surface with a light hairline. Never a coloured
left-border-accent card.

**Layout.** Centred containers — `--container-max` 1200px for marketing,
`--container-text` 720px for prose. 96px (`--space-section`) vertical rhythm
between bands. 12-column mental grid; 3-up feature grids and 2-up about layouts.
Generous but not cavernous whitespace — professional density.

**Transparency & blur.** Sparingly: a green/ink scrim (`rgba` overlay) over
hero photography; a subtle backdrop blur on the sticky header once scrolled.
Never decorative frosted glass.

---

## ICONOGRAPHY

No icon set was supplied with the source material. The system standardises on
**Lucide** (https://lucide.dev) loaded from CDN — a clean, consistent 1.75px
stroke line-icon family whose restrained, professional character suits a legal
brand. **This is a substitution; flag for confirmation.** If the firm adopts a
specific icon set, swap the CDN link in the UI kit and components.

Usage rules:
- Line icons only, 1.75px stroke, `currentColor` so they inherit gold/green/ink.
- Sizes 16 / 20 / 24px; 24px in nav and feature blocks, 20px inline.
- Icons support text, they don't replace it — practice areas pair an icon with a
  serif label.
- **No emoji, ever.** No multicolour/3D icons. Unicode glyphs are not used as
  iconography (except the "&" which belongs to the wordmark).
- The interlocking-ring **logo mark** is the one brand illustration; use
  `assets/logo-transparent.png` on colour and `assets/logo-full.jpg` on white.
  Never redraw or recolour the mark.

---

## INDEX / MANIFEST

Root files:
- **`styles.css`** — entry point; `@import`s all token files. Consumers link
  this one file.
- **`tokens/colors.css`** — brand scales (gold, green), warm-neutral `--ink-*`,
  semantic aliases, status colours.
- **`tokens/typography.css`** — font families (Google Fonts `@import`), weights,
  role-based type scale.
- **`tokens/spacing.css`** — 4px spacing scale + container/section semantics.
- **`tokens/radii.css`** — corner radius, elevation/shadow, motion tokens.
- **`thumbnail.html`** — homepage tile for the design-system picker.
- **`SKILL.md`** — Agent-Skills-compatible entry so this system can be used in
  Claude Code.
- **`assets/`** — `logo-full.jpg`, `logo-transparent.png`.

Foundation specimen cards (Design System tab): `guidelines/*.card.html` —
colours, type, spacing, radii, shadows, and the brand mark.

Components (`components/`): see the `@dsCard` cards in each directory.
- `components/buttons/` — **Button**, **IconButton**
- `components/forms/` — **Input**, **Textarea**, **Select**, **Checkbox**,
  **Radio**, **FieldLabel**
- `components/content/` — **Card**, **Badge**, **Tag**, **Overline**,
  **Divider**, **Avatar**, **StatBlock**

UI kit (`ui_kits/website/`): the firm's marketing website — Home, Practice
Areas, Our Advocates, Contact — with an interactive `index.html`.

### Intentional additions
Because no source defined a component inventory, a standard professional-website
set was authored: buttons, form controls, and content primitives (Card, Badge,
Tag, Overline, Divider, Avatar, StatBlock). **Overline** and **StatBlock** are
brand-specific helpers for section labels and credential figures.
