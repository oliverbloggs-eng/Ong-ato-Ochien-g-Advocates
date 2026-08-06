# Ong'ato, Ochieng' & Co. Advocates — Website

Static site. No build step, no dependencies to install.

## Deploy to Netlify

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` — or `deploy` if you pushed the whole project rather than just this folder.
4. Deploy.

Drag-and-drop also works: netlify.com/drop, drop this folder in.

## Structure

```
index.html        the site (markup + logic in one file)
support.js        runtime that renders it
image-slot.js     image placeholder component
assets/           logo and photography
_ds/              design system — tokens, styles, component bundle
```

## Editing

Content and layout live in `index.html`. The template is the markup inside
`<x-dc>`; the data (partners, blog posts, practice areas, sectors) is in the
`renderVals()` method of the script block below it.

Replace photography by dropping new files into `assets/` under the same
filenames, or update the `src` paths in `index.html`.

## Notes

- Requires an internet connection at runtime: React, Babel, Lucide icons and
  Google Fonts load from CDNs.
- `netlify.toml` sets long-lived caching for assets and security headers.
