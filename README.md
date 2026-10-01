# OOC Advocates: client preview build

This folder is a **preview** for the client to approve before the site goes live on cPanel.

## Put it on Netlify

1. Go to app.netlify.com/drop.
2. Drag this whole folder onto the page.
3. Netlify gives you a link (for example `random-name.netlify.app`). Send that link to the client.

You don't need a build step or an account to start, though logging in lets you keep the link.

## What works in this preview

- Every page: Home, About, Practice Areas, Properties (with filters and individual property pages), Blog, Contact, Privacy Policy, Disclaimer.
- Phone and WhatsApp buttons, maps links, menus and animations.

## What does not work on Netlify

- **Forms** (Contact, property enquiries, List a Property). These send through the PHP script on the cPanel hosting, and Netlify doesn't run PHP. Visitors will see an error if they press Send.
- **Admin dashboard.** It also runs on PHP, so it only works once the site is on cPanel.

Both start working once the full package is uploaded to cPanel.

## Search engines

`netlify.toml` asks search engines not to index the preview, so it won't compete with oocadvocates.africa.
