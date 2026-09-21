# Ong'ato, Ochieng' & Co. Advocates — Website

One self-contained `index.html`. All CSS, JavaScript, the design system, and
every photograph are embedded, so there are no folders that can go missing.

## Deploy

**Netlify via GitHub**
1. Commit the contents of this folder to a repo, with `index.html` at the root.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. **Build command:** leave empty. **Publish directory:** `.`
4. Deploy.

**Netlify drag-and-drop** — netlify.com/drop, drop this folder in.

**GitHub Pages** works too. The `.nojekyll` file is already included so nothing
gets stripped from the build.

## Why a single file

An earlier multi-folder build needed `_ds/` and `assets/` sitting beside
`index.html`. When either folder failed to reach the server the site loaded with
no gold or green and blank spaces where photographs should be. Common causes are
a `.gitignore` skipping underscore-prefixed paths, GitHub Pages' Jekyll stripping
`_ds/`, or only `index.html` being committed. This build has no external file
dependencies, so it cannot break that way.

## Pages

One file serves four routes, switched in-page: **Home**, **About Us** (firm
overview and partners), **Blog** (with a full article reader), and **Contact**.

## Contents

```
index.html      the whole site, 2.0 MB
netlify.toml    publish settings and security headers
.nojekyll       keeps GitHub Pages from filtering files
README.md
```

## Notes

- React, Babel, Lucide icons and Google Fonts load from CDNs at pinned versions,
  so the page needs an internet connection.
- The contact form validates and shows a thank-you state but does not send.
  To make it live, point it at Netlify Forms or a form service.
- Contact details in the page: +254 716 063629, info@oocadvocates.africa,
  Kims House Suite No.4, Kijabe Street, Nairobi.

## Editing later

Edit the working source in this project (`OOC Advocates Website.dc.html`), not
this bundled file. The bundle inlines its CSS and images, which makes hand
editing impractical. Re-export after any change.
