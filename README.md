# Ong'ato, Ochieng' & Co. Advocates — Website

**One file. Nothing else needed.** All styles, scripts, the design system, and
every photograph are embedded inside `index.html`.

## Deploy

**Netlify via GitHub**
1. Commit `index.html` (and optionally `netlify.toml`) to a repo.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. **Build command:** leave empty. **Publish directory:** `.`
4. Deploy.

**Netlify drag-and-drop** — netlify.com/drop, drop this folder in.

**GitHub Pages** also works with this version, since there are no
underscore-prefixed folders for Jekyll to strip.

## Why this version

The earlier package needed `_ds/` and `assets/` sitting beside `index.html`. When
those folders don't reach the server you get exactly what went wrong on both
attempts: no gold or green, and blank spaces where photographs should be. Common
causes are a `.gitignore` rule skipping `_`-prefixed paths, GitHub Pages' Jekyll
stripping `_ds/`, or only `index.html` being committed.

This build has no external files at all, so it cannot break that way.

## Pages

One file serves four routes, switched in-page: **Home**, **About Us** (firm
overview + partners), **Blog** (with a full article reader), and **Contact**.

## Notes

- 1.7 MB — images are embedded, so the first load carries everything at once.
- React, Babel, Lucide icons and Google Fonts load from CDNs (pinned versions),
  so the page needs an internet connection.
- The contact form shows a thank-you state but does not send. To make it live,
  point it at Netlify Forms or a form service.
- Partner cards show gold monograms; swap in headshots when you have them.
- Contact: +254 716 063629 · info@oocadvocates.africa

## Editing

Edit the multi-folder source in `deploy/` (readable, images as separate files),
then re-export this single file. Editing this bundled file directly is painful —
the CSS and images are inlined.
