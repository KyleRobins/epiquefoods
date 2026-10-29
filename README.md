# Epique Foods

Storefront for Epique Foods — a Kenyan agro-processing brand. Next.js 16 (App Router) +
Tailwind CSS v4 + shadcn/ui (Base UI) + Motion. Product data is static (`lib/products.ts`);
checkout hands off to WhatsApp rather than processing payments.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values as needed
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. Nothing is required to run locally — defaults are used for the WhatsApp
number and site URL. The contact form works without any email provider configured (it validates
and logs submissions); set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` to actually send email via
[Resend](https://resend.com).

## Editing products

Products, prices, descriptions and images are all in `lib/products.ts`. Product images live in
`public/images/products/`. A product with no priced size automatically shows an "Enquire on
WhatsApp" call to action instead of Add to Cart.

## Scripts

- `npm run dev` — local dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint

## Security notes

- `proxy.ts` sets a per-request CSP nonce and strict security headers (see `next.config.ts` too).
- The contact form is a Server Action (`app/actions/contact.ts`) with zod validation, a honeypot
  field, and a per-IP rate limit. The rate limiter is in-memory — fine for this traffic volume,
  but resets per server instance/cold start. If traffic grows, swap in Upstash Redis without
  changing the call site.
- Run `npm audit` after adding any dependency.
