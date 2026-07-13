# Xtreme Kleen — Power Washing Website

Marketing site for **Xtreme Kleen**, an industrial / commercial / residential
power washing company serving Corpus Christi, McAllen, and San Antonio, TX.

- **Phone:** 361-947-7811 (call or text)
- **Email:** Xtreme.Kleen2023@gmail.com
- **Domain:** https://xtremekleen.biz

## Stack

- Vite + React + TypeScript
- Tailwind CSS (custom `xk-` charcoal/red theme)
- Type system: Anton (display) · Oswald (headings/UI) · Inter (body)
- shadcn/ui + lucide-react

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # outputs to dist/
npm run preview
```

## Lead capture (Netlify Forms)

Both the hero quick-quote and the full contact form post to a single Netlify
form named `xtreme-kleen-quote`; the `source` field distinguishes them.

- The form is declared for Netlify's build-time bot in [`public/__forms.html`](public/__forms.html).
- Submission logic lives in [`src/lib/netlifyForms.ts`](src/lib/netlifyForms.ts).
- **After the first deploy:** in the Netlify dashboard go to
  **Forms → Form notifications** and add an email notification to the owner so
  new leads are emailed instantly. (An optional Resend auto-reply can be added
  via a `submission-created` function later.)

## Deploy

Netlify. Build command `npm run build`, publish directory `dist` (see
[`netlify.toml`](netlify.toml), which also includes the SPA fallback redirect).
