# Khalis Kothi — WhatsApp Pantry Store

Next.js 16 · TypeScript · Tailwind CSS 4. Fully static (no backend, no database, no cart) — orders are sent as pre-filled WhatsApp messages.

## 1. Run locally
```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

## 2. Things you MUST change before going live
| What | Where |
|---|---|
| WhatsApp number (digits only, e.g. `923001234567`) | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Phone shown on site | `NEXT_PUBLIC_PHONE_DISPLAY` |
| Live domain (SEO, sitemap) | `NEXT_PUBLIC_SITE_URL` |
| City / socials | `NEXT_PUBLIC_CITY`, `NEXT_PUBLIC_INSTAGRAM`, `NEXT_PUBLIC_FACEBOOK` |
| Real prices, pack sizes, descriptions | `lib/products.ts` (prices there are placeholders) |
| Brand name (if you change it) | `lib/site.ts`, `components/Logo.tsx`, and the pouch labels in `components/ProductArt.tsx` |

## 3. Using real product photos
Drop images named after each product slug into `public/products/` — they replace the built-in illustrations automatically (and are optimised by `next/image`):

`jaggery-gur`, `desi-sugar-shakkar`, `jaggery-with-dry-fruits`, `barley-flour-jau-atta`, `corn-flour-makai-atta`, `sattu`, `moringa-powder`, `mustard-oil-sarson`, `sesame-oil-til`
(`.webp`, `.avif`, `.jpg`, `.jpeg` or `.png`; portrait 4:5, ~1200×1500 px is ideal.)

## 4. Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Vercel → *Add New Project* → import the repo (framework auto-detected as Next.js).
3. Add the environment variables from `.env.example`.
4. Deploy. Then submit `https://YOUR-DOMAIN/sitemap.xml` in Google Search Console.

## Structure
- `app/` pages: Home, Shop, Product details (`/shop/[slug]`), Our Story, Contact, 404, sitemap, robots, manifest, social images
- `components/` UI (Header, Footer, ProductCard, OrderPanel, floating WhatsApp button, scroll reveal)
- `lib/` site config, product catalog, WhatsApp message builder

## Performance / SEO notes
All pages are statically generated; fonts are self-hosted; animations are CSS-only (compositor-friendly, respect `prefers-reduced-motion`); per-page metadata, canonical URLs, Open Graph images, and JSON-LD (Organization, Product, Breadcrumb, FAQ, ItemList) are included.
