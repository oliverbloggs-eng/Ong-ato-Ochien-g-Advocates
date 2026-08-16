# Ong'ato, Ochieng' & Co. Advocates — Website

Static site. No build step, no dependencies to install.

## Deploy to Netlify

1. Push the **contents of this folder** to a GitHub repo (so `index.html` sits at
   the repo root, not inside a `deploy/` subfolder).
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
4. Deploy.

Drag-and-drop also works: netlify.com/drop, drop this folder in.

### Important: commit the `_ds/` folder

`_ds/` starts with an underscore. Two things commonly drop it:

- a `.gitignore` rule that skips underscore-prefixed paths
- **GitHub Pages**, whose Jekyll build strips `_`-prefixed folders — if you
  deploy there rather than Netlify, add an empty `.nojekyll` file at the root

If `_ds/` or `assets/` is missing from the server, the site loads with no gold,
no buttons, and broken images. After pushing, confirm both folders appear in the
GitHub web view before deploying.

## Structure

```
index.html        the site — markup and logic in one file
support.js        runtime that renders it
assets/           logo and photography (WebP)
_ds/              design system — tokens, styles, component bundle
netlify.toml      publish settings, caching, security headers
.gitignore
```

## Pages

One file serves four routes, switched in-page: **Home**, **About Us** (firm
overview + partners), **Blog** (with a full article reader), and **Contact**.

## Photography

Every image is a plain `<img src="assets/…">`:

| File | Where it appears |
| --- | --- |
| `logo-mark.png` | header |
| `hero-chambers.webp` | hero background, dark section backgrounds, contact backdrop |
| `advocate-hero.webp` | hero portrait (cut-out) |
| `managing-partner.webp` | "About the firm" portrait |
| `about-advocate.webp` | "Client-focused solutions" |
| `chambers-meeting.webp` | "Our Growth" and the article page |

To swap one, drop a new file into `assets/` reusing the same filename, or update
the `src` in `index.html`.

The four partner cards show gold monograms on deep green. When you have
headshots, add them to `assets/` and replace the monogram `<span>` in each card
with an `<img>`.

## Editing content

Copy and layout live in `index.html`. The markup is the template; the data
(partners, blog posts, practice areas, sectors, contact details) sits in the
`renderVals()` method of the script block below it.

The contact form is front-end only — it shows a thank-you state but does not
send anything. To make it live, point it at Netlify Forms or a form service.

## Notes

- React, Babel, Lucide icons and Google Fonts load from CDNs (versions pinned),
  so the page needs an internet connection.
- Contact: +254 716 063629 · info@oocadvocates.africa
