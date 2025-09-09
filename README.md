## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Mostly I create this website by implement and review my Prompt Engineering Course by IBM

This is my prompt : 

Imagine you are **a Senior Full‑Stack Web Engineer + Brand Designer** specializing in Gen‑Z‑first F\&B micro‑brands.

Your task is to **deliver a complete, production‑ready website** for an Indonesian UMKM named **“DimDim Sum”** that sells assorted dim sum variants. The result must be **ready to host** (buildable to static files) and include **source code, instructions, and starter content**.

Use the following context:

* **Target market:** Gen Z (mobile‑first, quick scannability, playful micro‑interactions, bold typography).
* **Pages/sections required:**

  1. **Beranda (Home)**
  2. **Menu** (list all variants & prices; cards; filters)
  3. **Testimoni** (customer reviews with rating stars)
  4. **Kontak** (WhatsApp CTA, email, opening hours) + **Lokasi** via **Google Maps embedded** iframe (no API key required)
* **Tone & brand:** Friendly, clean, modern, halal‑conscious. Primary color ideas: warm red/orange; secondary: cream/ivory; accent: dark charcoal.
* **Performance:** Load fast on 3G/4G; image optimization; Core Web Vitals in green.
* **Legal:** Include Privacy & Terms links in footer (stub content ok).
* **Language:** Bahasa Indonesia for UI copy; English allowed in code comments.

Write your answer in **this exact format and order** below.

---

## 1) Output Overview (1–2 paragraphs)

Give a concise summary of what’s delivered and how to run it.

## 2) Tech Stack (explain choices for Gen Z & speed)

**Pick ONE stack** and implement everything accordingly:

* **Option A (recommended):** **Astro + Tailwind CSS** (static, ultra‑fast, easy hosting).
* **Option B:** **Next.js (App Router) + Tailwind CSS** with `next/image` optimization, export to static via `next export` (no server required).
* Include: ESLint + Prettier configs; favicon; open graph tags.

> If you pick Option A: Use `@astrojs/tailwind`, image optimization via `astro:assets`, and build to static `dist/`.

## 3) Information Architecture

* Top‑nav: Beranda, Menu, Testimoni, Kontak.
* Footer: brand blurb, social links (Instagram, TikTok, WhatsApp), Privacy, Terms.
* **Home:** Hero (tagline + CTA order via WhatsApp), highlights (USP badges: “Halal”, “Fresh”, “Homemade”), featured menu carousel, delivery partners (stub logos), CTA.
* **Menu:** Filters (Jenis: kukus/goreng; Pedas: mild/mentai; Harga range), grid cards with image, name, short desc, price, badge (best seller/new).
* **Testimoni:** Cards with avatar (initials ok), name, star rating (1–5), text, date, source (IG/Tokopedia).
* **Kontak/Lokasi:** WhatsApp deep link (`https://wa.me/<number>?text=<encoded>`), clickable email, opening hours, address, **Google Maps iframe** with location pin.

## 4) Functional Requirements

* Responsive (mobile‑first); sticky navbar; active link states.
* Menu filter/sort (client‑side) without page reload.
* Light/dark color tokens (OK to ship only light but structure tokens).
* Testimonial data pulled from a local JSON file.
* Contact buttons: WhatsApp opens chat; email opens mail client.
* SEO: unique titles/meta per page, sitemap.xml, robots.txt, Open Graph.

## 5) Non‑Functional Requirements

* **Performance:** Lighthouse ≥ 90 on Performance/SEO/Best Practices/Accessibility on mobile.
* **Accessibility:** Semantic HTML, alt text, aria‑labels, focus outlines, color contrast ≥ 4.5:1.
* **Maintainability:** Components for Card, Badge, Button, StarRating, Section.
* **Scalability:** Menu/testimoni content in `/data/*.json` for easy edits.

## 6) Visual Design System

* Type scale: Display (clamp), H1–H4, body, caption.
* Color tokens: `--brand`, `--brand-600`, `--bg`, `--text`, `--muted`.
* Components: Button (primary/ghost), Card, Badge, Navbar, Footer, SectionHeader.
* Motion: small hover lifts, subtle fade/slide on scroll (prefers-reduced-motion respected).

## 7) Sample Content (can be replaced later)

Provide example entries in `/data/menu.json` and `/data/testimoni.json` with **at least 8 menu items**, including **Dimsum Mentai** variants and prices in IDR.

## 8) Complete Project Structure (tree)

Show a `tree` of all files and folders, e.g.:

```
DimDimSum/
  package.json
  astro.config.mjs (or next.config.js)
  tailwind.config.js
  public/
    favicon.ico
  src/
    components/
    layouts/
    pages/
    data/
  ...
```

## 9) Full Source Code — ALL FILES

Provide **full, runnable code** for every file listed in the tree, not snippets. Include:

* `package.json` with scripts: `dev`, `build`, `preview`.
* Tailwind & config files.
* Layout with `<head>` meta/OG tags.
* Components (Button, Card, Badge, StarRating, Navbar, Footer, MenuFilter).
* Pages: `index` (Beranda), `menu`, `testimoni`, `kontak`.
* Data JSONs.
* `sitemap.xml` (generated or static), `robots.txt`.
* README.md with run/host instructions.
* Minimal CSS (Tailwind) with custom tokens in `globals.css`.

> IMPORTANT: Embed the **Google Maps** with a standard iframe (no API key), center on placeholder address: `DimDim Sum, Jl. Contoh No. 123, Jakarta` (can be replaced later).

## 10) Accessibility, SEO & Performance Checks

* Explain how you met each criterion.
* Include instructions to compress images (e.g., 1600px max width), use `loading="lazy"`, preconnect to fonts (system fonts preferred).
* Provide test commands and how to run Lighthouse.

## 11) Deployment (Ready to Host)

* Explain **two** deploy paths:

  1. **Static hosting** (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
  2. **Shared hosting/cPanel** (upload `dist/` output).
* Commands: `npm i`, `npm run build`, point host to `dist/`.
* How to set WhatsApp number and social links via config.

## 12) Acceptance Criteria (Checklist)

* [ ] All required pages exist and linked from navbar.
* [ ] Menu filters work client‑side.
* [ ] Testimoni render from JSON.
* [ ] Lighthouse ≥ 90 (mobile).
* [ ] Google Maps iframe renders on Kontak page.
* [ ] Build outputs static `dist/` ready for hosting.
* [ ] README includes run & deploy steps.

## 13) Handover Notes

* Where to replace logo, colors, menu items, prices, hours, address.
* How to add new testimonials and menu badges.
* How to add new sections/pages.

---

### Additional Instructions for the Code Generation

* Use **Bahasa Indonesia** for all on‑site copy and labels (e.g., “Beranda”, “Menu”, “Testimoni”, “Kontak”, “Pesan via WhatsApp”).
* Keep dependencies minimal. No UI mega‑kits; Tailwind utilities are enough.
* Ensure image `alt` text is descriptive.
* Provide placeholder images under `public/img/` with meaningful filenames.
* Use currency formatting `Rp 00.000` where relevant.

### Final Deliverable

Return **one Markdown response** that includes: sections 1–13 in order, the **complete file tree**, and **full code for every file**. The code should be valid, runnable, and produce a **static build** ready for hosting without extra setup.

## NOTE‼️‼️
For mobile device don't forget to use desktop site mode
