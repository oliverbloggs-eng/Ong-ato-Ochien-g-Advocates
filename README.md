# Ong'ato, Ochieng' & Co. Advocates · Website

Static website plus a small PHP admin and mailer, for cPanel (Truehost).

## Contents

```
index.html          the website
support.js          runtime that renders the pages
.htaccess           server rules: PHP blocked everywhere except /api
admin/index.html    admin dashboard  →  oocadvocates.africa/admin
api/                PHP: login, saving, photo upload, users, form mailer
assets/             logo and photography
assets/uploads/     photos uploaded from the admin (nothing here can run)
_ds/                design system (styles and components)
content/
  properties.json   property listings  (written by the admin)
  blog.json         blog posts         (written by the admin)
```

Private data lives **outside** `public_html`, in `/home/oocadvoc/ooc-private/`
(created automatically): admin users (passwords stored hashed), backups of
the last 30 saves of each content file, and login rate-limit records.

## Upload

1. cPanel → File Manager → `public_html` → Settings → tick
   **Show Hidden Files** → Save.
2. Delete everything in `public_html` **except `.well-known`**.
3. Upload the zip, Extract, then move the contents of the extracted folder
   up into `public_html` so `index.html`, `.htaccess`, `admin`, `api`,
   `assets`, `_ds` and `content` sit directly inside it.
4. Visit the site and click through every page.

## First admin login (do this straight after upload)

1. Go to **oocadvocates.africa/admin**. It will say *Create the first admin*.
2. Choose a username (e.g. `allan`) and a password of 10+ characters.
   This screen only works while no admin exists, so do it immediately.
3. In the admin, open **Users** to add a login for each person
   (e.g. `benard`). Each person can change their own password there.

## Forms

Contact and property-enquiry forms email **info@oocadvocates.africa** through
the server's mail system. Replies go straight to the visitor's email.
Check that `info@oocadvocates.africa` exists in cPanel → Email Accounts, then
send a test message from the Contact page. If it lands in spam the first
time, mark it "Not spam".

## After the SSL certificate is fixed

Edit `.htaccess` and remove the `#` from the three `Rewrite` lines so all
visitors use `https://`. The admin login cookie is only marked secure over
https, so fix SSL before staff start using the admin regularly.

## If something goes wrong

- **Admin says "Could not save"**: in File Manager, right-click `content` →
  Permissions → 755, and each `.json` file inside → 644.
- **Photo upload fails with "GD is not enabled"**: cPanel → Select PHP
  Version → Extensions → tick `gd` → Save.
- **Restore an earlier version**: copy a file from
  `/home/oocadvoc/ooc-private/backups/` back into `public_html/content/`
  and rename it to `properties.json` or `blog.json`.
- **Locked out of every admin account**: delete
  `/home/oocadvoc/ooc-private/users.json`, then visit /admin to create the
  first admin again.
