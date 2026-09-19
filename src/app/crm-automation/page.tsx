import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, OG_IMAGE, WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import {
  Database,
  GitMerge,
  Filter,
  Users,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  BarChart3,
  Layers,
  Sparkles,
  Building2,
  ShoppingBag,
  Briefcase,
  Stethoscope,
} from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "CRM Automation Agency | Lead Qualification, Routing & Sales Workflows",
  description:
    "Specialized CRM automation agency. We engineer automated pipelines connecting HubSpot, Zoho, Salesforce, Airtable & Google Sheets to capture, qualify, and route leads 24/7.",
  keywords: [
    "CRM automation",
    "CRM workflow automation",
    "lead qualification automation",
    "lead routing automation",
    "sales automation",
    "lead management automation",
    "HubSpot automation",
    "Zoho CRM automation",
    "CRM integration automation",
  ],
  alternates: {
    canonical: `${BASE_URL}/crm-automation`,
  },
  openGraph: {
    title: "CRM Automation Agency | Lead Qualification, Routing & Sales Workflows",
    description:
      "Stop losing leads to manual data entry. We engineer automated CRM pipelines that capture, enrich, qualify, and route leads in under 60 seconds.",
    url: `${BASE_URL}/crm-automation`,
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "CRM Automation Agency — NewEra Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Automation Agency | Lead Qualification, Routing & Sales Workflows",
    description:
      "Turn inbound leads into qualified sales opportunities automatically. HubSpot, Zoho, Salesforce & Airtable automation.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "CRM Automation",
          "item": `${BASE_URL}/crm-automation`,
        },
      ],
    },
    {
      "@type": "Service",
      "name": "CRM Automation & Sales Pipeline Engineering",
      "serviceType": "CRM Workflow & Lead Routing Automation",
      "provider": {
        "@type": "Organization",
        "name": "NewEra Automations",
        "url": BASE_URL,
      },
      "areaServed": "Worldwide",
      "description":
        "End-to-end CRM workflow automation, instant lead enrichment, AI lead qualification scoring, automated sales routing, and multi-platform synchronization.",
    },
  ],
};

export default function CRMAutomationPage() {
  return (
    <main className="min-h-screen bg-[#060709] text-white pt-28 pb-20 selection:bg-primary/30 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumb strip */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/50 mb-8 font-mono">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
            <span>/</span>
            <span className="text-primary">CRM Automation</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/90">
              Multi-Industry Sales Pipeline Engineering
            </span>
          </div>

          {/* Semantic H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            CRM Automation Agency: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-primary">
              Turn Inbound Leads Into Qualified Deals Automatically
            </span>
          </h1>

          {/* Clear Value Proposition Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            Eliminate manual data entry, dirty duplicate records, and delayed follow-ups. We engineer automated CRM
            pipelines connecting your ads, website forms, WhatsApp, and databases directly into HubSpot, Zoho,
            Salesforce, or Airtable — enriching leads and notifying sales reps in under 60 seconds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Book CRM Architecture Audit</span>
            </a>
            <a
              href="#pipeline"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <span>Explore The 4-Stage Engine</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Guarantees Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">&lt; 60 Seconds</div>
              <div className="text-xs text-white/60">From lead submission to CRM ingestion and rep notification</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">0 Manual Entry</div>
              <div className="text-xs text-white/60">Auto-enrichment of company size, domain & contact data</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Smart Routing</div>
              <div className="text-xs text-white/60">Round-robin, territory & budget-based lead assignment</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">Universal Sync</div>
              <div className="text-xs text-white/60">HubSpot, Zoho, Salesforce, Airtable & Google Sheets</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: WHY 60% OF INBOUND LEADS ARE WASTED --- */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Sales Leaks
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Where Your Pipeline Is Silently Losing Revenue
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Buying leads through Meta Ads or SEO is expensive. But when the backend pipeline relies on manual human
              management, valuable prospects disappear before anyone speaks to them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. The 12-Hour Response Lag</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Leads sit in form export spreadsheets or notification emails for hours before a sales rep logs into the CRM.
                  Research shows odds of qualifying a lead drop by 8x if contact isn't initiated within the first 5 minutes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ Automated Solution: Instant webhook trigger; lead is created and rep is alerted on WhatsApp/Slack in &lt;60s.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Incomplete Data & Duplicate Records</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Prospects enter partial details or typos. Without automatic deduplication, your CRM fills with multiple duplicate contacts,
                  confusing your sales team and causing multiple reps to reach out to the same person with conflicting messages.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ Automated Solution: Automated phone/email normalization, domain deduplication, and record merging.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Sales Reps Wasting 65% of Time on Admin</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  High-paid sales closers spend hours copying data between WhatsApp chats, spreadsheets, calendars, and CRM deal boards
                  instead of being on calls with hot prospects who are ready to buy.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ Automated Solution: Automated deal stage advancement, auto-logging of emails and call notes, zero manual data entry.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Disconnected Software Silos</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Marketing runs ads on Meta and Google, sales chats on WhatsApp and Gmail, and finance bills through Stripe or Razorpay.
                  None of these systems communicate, leaving founders completely blind to true cost-per-acquisition.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ Automated Solution: Bi-directional n8n synchronization uniting advertising, CRM, chat, and invoicing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE 4-STAGE NEWERA CRM AUTOMATION ENGINE --- */}
      <section id="pipeline" className="px-6 py-20 border-t border-white/5 bg-white/[0.01] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              The 4-Stage Lead Pipeline Engine
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A high-performance pipeline architecture that takes raw web visitors and turns them into scheduled discovery meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-primary font-bold mb-3">STAGE 01</div>
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ingestion & Deduplication</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Captures webhooks from Meta Ads, Google Ads, website forms, and WhatsApp. Cleans phone formats, verifies email syntax, and checks for existing customer records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-primary font-bold mb-3">STAGE 02</div>
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Enrichment & Scoring</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Scrapes the lead's domain, retrieves company size, industry classification, and evaluates budget criteria. Calculates an ICP fit score before rep allocation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-primary font-bold mb-3">STAGE 03</div>
              <GitMerge className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dynamic Rep Routing</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Assigns the lead via round-robin, deal size tier, or geographical territory. Dispatches an immediate notification to the rep via Slack, WhatsApp, or mobile CRM.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="text-xs font-mono text-primary font-bold mb-3">STAGE 04</div>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automated Nurture Loops</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                If the lead doesn't book immediately, triggers personalized email sequences and WhatsApp check-ins. If a lead goes cold for 30 days, auto-launches re-engagement campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. UNIVERSAL MULTI-INDUSTRY APPLICATIONS --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Built For Any Industry
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              We Automate CRMs Across Diverse Sectors
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              NewEra does not lock you into a single rigid niche. Our pipeline architectures are built for high-growth
              companies across any business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industry 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Real Estate & Developers</h3>
                  <span className="text-xs text-white/50">High-Ticket Lead Pipeline</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Capture ad leads instantly, automatically classify property budget (e.g. 2BHK vs Penthouse), send verified PDF brochures via WhatsApp,
                and log site visit bookings into your centralized sales CRM without manual spreadsheets.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-3 border-t border-white/5">
                <span className="px-2 py-0.5 rounded bg-white/5">Site Visit Tracking</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Brochure Delivery</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Broker Attribution</span>
              </div>
            </div>

            {/* Industry 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">B2B Agencies & Consultants</h3>
                  <span className="text-xs text-white/50">High-Velocity Pipeline</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Website form submit triggers automated domain enrichment (company size, tech stack), scores ICP fit,
                dispatches tailored case study decks, and redirects qualified buyers directly to a Cal.com booking link.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-3 border-t border-white/5">
                <span className="px-2 py-0.5 rounded bg-white/5">Domain Enrichment</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Cal.com Ingestion</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Contract Automation</span>
              </div>
            </div>

            {/* Industry 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">E-Commerce & D2C Brands</h3>
                  <span className="text-xs text-white/50">Customer Lifetime Value</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Sync Shopify/WooCommerce customer order history into your CRM. Identify VIP high-AOV spenders,
                automate personalized WhatsApp re-order prompts, and flag high-risk COD returns before dispatch.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-3 border-t border-white/5">
                <span className="px-2 py-0.5 rounded bg-white/5">Shopify 2-Way Sync</span>
                <span className="px-2 py-0.5 rounded bg-white/5">VIP Segment Tagging</span>
                <span className="px-2 py-0.5 rounded bg-white/5">LTV Maximization</span>
              </div>
            </div>

            {/* Industry 4 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare & Professional Clinics</h3>
                  <span className="text-xs text-white/50">Patient Intake & Booking</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Automate patient inquiry capture, appointment scheduling, automated WhatsApp calendar reminders that cut no-shows by 40%,
                and post-consultation review collection loops.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-3 border-t border-white/5">
                <span className="px-2 py-0.5 rounded bg-white/5">Patient Intake Form</span>
                <span className="px-2 py-0.5 rounded bg-white/5">No-Show Reduction</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Review Collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. SUPPORTED CRMS & DATABASES --- */}
      <section className="px-6 py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 inline-block">
            Platform Neutrality
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            We Connect With Your Existing Tech Stack
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-10">
            You don't need to migrate to a new tool. We build resilient n8n webhooks and API connectors directly into what you already use.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {["HubSpot", "Zoho CRM", "Salesforce", "Airtable", "Google Sheets", "Pipedrive", "PostgreSQL", "Supabase"].map((platform) => (
              <div
                key={platform}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center font-medium text-xs text-white/80 hover:border-primary/40 hover:text-white transition-all"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FREQUENTLY ASKED QUESTIONS --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Clear Explanations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-sm">
              Answers regarding CRM setup, data security, lead enrichment, and delivery times.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Can you integrate with our CRM without disrupting our current sales team?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. We build all automation workflows in an isolated staging environment with mock webhook data first.
                Your existing sales workflows, historical contacts, and pipeline boards remain completely untouched until the new pipeline is fully verified and ready for live cutover.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>What if we don't have HubSpot or Salesforce and only use Google Sheets or Airtable?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Airtable and Google Sheets can serve as powerful, lightweight CRMs when paired with NewEra automation.
                We build automated deduplication, status columns, instant WhatsApp/Slack alerts, and auto-follow-up triggers right inside your spreadsheet or Airtable base.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>How does automated lead enrichment work?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                When a user submits a corporate email (e.g. name@company.com), our pipeline extracts the domain, scrapes their website,
                queries business databases for employee count, industry classification, and location, and appends that data directly to the CRM contact record before the sales rep calls.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Can you set up round-robin assignment for multiple sales reps?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. We engineer fair distribution logic (round-robin) with weighted assignment (e.g. top closers receive high-budget leads),
                working hours checks (leads arriving after 8 PM are held or routed to on-duty reps), and automatic re-assignment if an assigned rep fails to initiate contact within 15 minutes.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>How long does a CRM automation project take?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Standard CRM webhook pipelines (ingestion, deduplication, and instant notification) typically take 5 to 10 days.
                Advanced multi-system implementations with AI enrichment, 2-way database sync, and complex deal-stage logic take 2 to 3 weeks.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL HIGH-CONVERTING CTA BLOCK --- */}
      <section className="px-6 py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/10 p-10 md:p-16 text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready To Automate Your <span className="text-primary">Sales & CRM Pipeline</span>?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Message Krishna Prajapati directly. We will review your current lead flow, audit your CRM bottlenecks,
            and design an automated pipeline built for your exact business requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Audit My CRM on WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=CRM%20Automation%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Krishna Directly</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            Platform-agnostic • Custom n8n webhooks • Direct founder consultation
          </div>
        </div>
      </section>
    </main>
  );
}
