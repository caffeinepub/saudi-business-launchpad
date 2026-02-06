# Specification

## Summary
**Goal:** Build a responsive English-language marketing website for “Saudi Business Launchpad” with core informational pages, consistent design/SEO, and a backend-powered lead capture form.

**Planned changes:**
- Create top-level navigation (desktop + mobile hamburger) and routes/pages: Home, Services, How It Works, Pricing, Resources, Mentorship & Networking, About Us, Contact / Get Started.
- Implement Home page hero with required headline, durable hero sentence, primary CTAs (“Get Started”, “Register Your Business”), and a trust indicators section (Saudi-focused, compliant, expert-backed).
- Implement page content for Services (5 categories with CTAs), How It Works (3-step flow), Pricing (Free/Pro/Enterprise + pay-per-service, Pro monthly/yearly), Resources (4 sections with placeholder items), Mentorship & Networking (3 sections with CTAs), About Us (mission text, Vision 2030 alignment, local expertise/partnerships).
- Build Contact / Get Started page with a validated form (required: full name, email; optional: phone, business stage/type, message) plus clickable WhatsApp and Email links.
- Add backend lead capture in a single Motoko actor: store submissions with timestamps in stable storage; provide a query to list submissions; enforce basic server-side validation.
- Add basic SEO per page (titles/meta descriptions using provided keywords) and a footer with branding, quick links, and a guidance/not-legal-advice disclaimer.
- Apply a consistent professional/modern visual system (green/white with subtle gold accents) and integrate generated static assets (hero + icons) into the Home hero and trust/service UI.

**User-visible outcome:** Visitors can browse all marketing pages on mobile/desktop, see clear services/pricing/resources information, and submit a Contact/Get Started lead form that is saved in the backend; pages include SEO metadata, consistent branding, and trust-focused visuals.
