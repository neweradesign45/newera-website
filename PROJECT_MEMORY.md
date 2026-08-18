# 🧠 NEWERA AUTOMATIONS — MASTER PROJECT MEMORY & AGENT CONTEXT LOG

> **IMPORTANT FOR ANY FUTURE AI AGENT SESSION**: 
> This document contains the complete chronological memory, technical architecture, business identity, and deployment instructions for **NewEra Automations**. Read this file first when starting any new chat session to regain 100% context.

---

## 👤 1. BRAND & FOUNDER IDENTITY

| Property | Value |
| :--- | :--- |
| **Founder Name** | **Krishna Prajapati** |
| **Founder Role** | Founder & Chief Automation Architect |
| **Agency Name** | **NewEra Automations** |
| **Agency Tagline** | *We Build Systems That Work While You Sleep* |
| **Official Email** | `neweraagents45@gmail.com` |
| **WhatsApp Support** | `+917078994915` (`https://wa.me/917078994915`) |
| **Chosen Domain** | **`neweraautomations.com`** (Purchased via Hostinger) |
| **Target Audience** | B2B E-Commerce, Agencies, HR Firms, High-Ticket Service Businesses |

---

## 🛠️ 2. TECH STACK & ARCHITECTURE

- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS + Glassmorphism + Custom CSS Tokens
- **Animations**: GSAP + Lenis Smooth Scroll (Tuned for 60FPS Desktop & 2GB RAM Mobile)
- **Form Submissions**: API Route (`/api/collab`) with Resend Email Integration & HTML Sanitization
- **SEO & PWA**: Dynamic `sitemap.xml`, `robots.txt`, JSON-LD Structured Data, `manifest.ts`

---

## 🛡️ 3. SECURITY & ANTI-AI WATERMARK HARDENING

1. **Security Headers (`next.config.ts`)**:
   - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
   - `X-Frame-Options`: `DENY` (Anti-Clickjacking)
   - `X-Content-Type-Options`: `nosniff` (Anti-MIME sniffing)
   - `poweredByHeader`: `false` (Hides Next.js fingerprint from hackers)
   - `X-XSS-Protection`: `1; mode=block`
2. **Form Sanitization (`src/app/api/collab/route.ts`)**:
   - Integrated `escapeHtml()` function to neutralize `<script>` injection / XSS payloads.
3. **Clean Code Policy**:
   - Zero AI watermarks, zero `TODO` tags, zero template placeholders.

---

## ⚡ 4. PERFORMANCE & MOBILE 2GB RAM OPTIMIZATIONS

- **Lenis Provider (`src/providers/lenis-provider.tsx`)**:
  - `syncTouch: false` and `touchMultiplier: 1.5` for native GPU momentum scrolling on 2GB RAM budget phones.
  - `gsap.ticker.lagSmoothing(500, 33)` re-enabled to prevent desktop scroll stuttering.
  - Removed conflicting CSS `scroll-behavior: smooth` from `globals.css`.
- **Image Formats**: Enabled AVIF & WebP in `next.config.ts`.
- **Smart Navbar (`src/components/layout/navbar.tsx`)**:
  - Auto-hides on scroll down, reappears on scroll up / page top / menu open.

---

## 📋 5. CORE SECTIONS & FILES IN CODEBASE

- `src/lib/constants.ts` — Central brand constants (`BRAND_NAME`, `EMAIL`, `WHATSAPP_LINK`, `BASE_URL`)
- `src/components/sections/about/about-me.tsx` — Hero Section with Krishna's portrait, founder badge, and performance stats
- `src/components/layout/navbar.tsx` — Smart auto-hide floating glass navigation bar
- `src/components/layout/footer.tsx` — Agency footer with quick links and branding
- `src/app/api/collab/route.ts` — Contact form intake endpoint
- `public/sitemap.xml` & `public/robots.txt` — SEO indexing files
- `src/app/manifest.ts` — Web App Manifest

---

## 🚀 6. DEPLOYMENT & VERCEL CHECKLIST

Once Krishna completes the Hostinger domain purchase for `neweraautomations.com`:

1. **Update `constants.ts`**:
   Set `BASE_URL = "https://neweraautomations.com"`.
2. **Deploy to Vercel**:
   - Connect GitHub repository to Vercel.
   - Add Environment Variable: `RESEND_API_KEY` (from Resend.com for lead email alerts).
3. **Configure DNS on Hostinger**:
   - Type: `A` | Name: `@` | Value: `76.76.21.21` (Vercel IP)
   - Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`
4. **Google Search Console**:
   - Verify site ownership and update `verification.google` in `layout.tsx`.

---
*Created and maintained automatically by AI pair-developer.*
