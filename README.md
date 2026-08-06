# Ong'ato, Ochieng' & Co. Advocates — Website (single file)

One self-contained `index.html`. All CSS, JavaScript, the design system, and
every image are inlined, so there are no folders that can go missing.

## Deploy

**Netlify drag-and-drop:** go to netlify.com/drop and drop this folder in.

**Via GitHub:** commit `index.html` to a repo, then in Netlify choose
*Add new site → Import an existing project*, leave the build command empty and
set the publish directory to `.`.

## Why this version

The earlier multi-folder package relies on `_ds/` and `assets/` sitting beside
`index.html`. If either folder is missing from the server you get exactly what
went wrong on the first deploy: no gold, no buttons, and broken images. Common
causes are a `.gitignore` skipping underscore-prefixed folders, GitHub Pages'
Jekyll stripping `_ds/`, or only `index.html` being committed.

This build has no such dependency. The one trade-off is file size (~15 MB) and
that editing it by hand is awkward — keep the multi-folder version as your
working source and re-export when you need to.

## Notes

- React, Babel, Lucide and Google Fonts still load from CDNs (versions pinned),
  so the page needs an internet connection.
