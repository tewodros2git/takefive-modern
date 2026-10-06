# Take Five Events — Modern Site Rebuild

A lightweight, fast, static rebuild of [takefiveevents.com](https://takefiveevents.com) using
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). This replaces the WordPress
site with a modern stack that is simpler to host, faster to load, and has a much smaller attack
surface (no PHP, no database, no plugins to keep patched).

**This project is intentionally isolated from the WordPress repo** — it does not share a deploy
pipeline, hosting, or domain until you explicitly cut over.

## Status

Content has been migrated 1:1 from the live WordPress site (same page titles, meta descriptions,
body copy, and URL structure) so SEO rankings carry over when this replaces the old site. Still to
do before cutover:

- [ ] Replace placeholder brand color in `tailwind.config.mjs` with the exact brand hex if different.
- [ ] Add a real `favicon.png` to `public/`.
- [ ] Migrate real gallery photos into `src/pages/gallery.astro` (currently empty placeholder).
- [ ] Sign up for a free [Web3Forms](https://web3forms.com) access key and set
      `PUBLIC_WEB3FORMS_KEY` as an environment variable (locally in `.env`, and in the Cloudflare
      Pages project settings) so the contact form actually delivers email.
- [ ] Review every page against the live site one more time for wording/content drift.
- [ ] Set up 301 redirects for any WordPress-specific URLs that won't exist anymore
      (e.g. `/wp-content/uploads/...` image links referenced from outside, `/?p=123` style links).

## Local development

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Deployment plan (Cloudflare Pages)

1. Push this folder to its own new GitHub repository (separate from the WordPress repo).
2. In the Cloudflare dashboard, create a new Pages project connected to that repository.
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add the `PUBLIC_WEB3FORMS_KEY` environment variable in the Pages project settings.
4. Cloudflare will give you a free `*.pages.dev` preview URL — review the whole site there first.
5. Once approved, attach a temporary subdomain (e.g. `new.takefiveevents.com`) in Cloudflare DNS to
   test with real traffic patterns before fully cutting over the root domain.
6. Only after final sign-off, repoint the root domain's DNS from the current cPanel host to
   Cloudflare Pages. Keep the WordPress site's backup intact for a rollback window.
