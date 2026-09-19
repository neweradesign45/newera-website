import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, OG_IMAGE, WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import N8nWorkflowShowcase from "@/components/sections/home/n8n-workflow-showcase";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Layers,
  Sparkles,
  GitBranch,
  Building,
  Mail,
  Workflow,
  Search,
} from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "AI Automation Case Studies & Production Workflows | NewEra Automations",
  description:
    "Explore verified AI automation case studies and production n8n workflows engineered by NewEra Automations. Real client systems, real metrics, and technical breakdowns.",
  keywords: [
    "AI automation case studies",
    "n8n case studies",
    "AI agent case studies",
    "workflow automation case studies",
    "business automation case studies",
    "automation agency proof",
  ],
  alternates: {
    canonical: `${BASE_URL}/case-studies`,
  },
  openGraph: {
    title: "AI Automation Case Studies & Production Workflows | NewEra Automations",
    description:
      "Real systems, verified metrics, zero fluff. Inspect the exact n8n pipelines and AI agents engineered by NewEra Automations.",
    url: `${BASE_URL}/case-studies`,
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AI Automation Case Studies — NewEra Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies & Production Workflows",
    description:
      "Real production n8n and AI agent case studies with verified metrics by NewEra Automations.",
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
          "name": "Case Studies",
          "item": `${BASE_URL}/case-studies`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "name": "AI Automation Case Studies & Technical Workflows",
      "provider": {
        "@type": "Organization",
        "name": "NewEra Automations",
        "url": BASE_URL,
      },
      "description":
        "Verified case studies and technical workflow breakdowns of AI automation and n8n pipelines engineered by NewEra Automations.",
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#060709] text-white pt-28 pb-20 selection:bg-primary/30 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumb strip */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/50 mb-8 font-mono">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">Case Studies</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/90">
              Verified Production Telemetry • Zero Fabricated Proof
            </span>
          </div>

          {/* Semantic H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            AI Automation Case Studies: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-primary">
              Real Systems, Measurable Business Results
            </span>
          </h1>

          {/* Value Proposition Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            No hypothetical wireframes or inflated claims. Explore the exact n8n pipelines,
            autonomous AI communication agents, and lead qualification engines engineered by
            Krishna Prajapati and the NewEra team across different business models.
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
              <span>Discuss Your Workflow Requirements</span>
            </a>
            <a
              href="#case-study-list"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <span>Read Case Breakdowns</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Integrity Guarantees Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">100% Real Data</div>
              <div className="text-xs text-white/60">Substantiated lead counts and hours saved</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Live Node Visuals</div>
              <div className="text-xs text-white/60">Inspect actual n8n schematics and triggers</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Multi-Industry</div>
              <div className="text-xs text-white/60">E-Commerce, Consulting, B2B & Real Estate</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">Founder Direct</div>
              <div className="text-xs text-white/60">Architected and deployed by Krishna Prajapati</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. DETAILED IN-DEPTH CASE STUDIES --- */}
      <section id="case-study-list" className="px-6 py-20 border-t border-white/5 scroll-mt-24">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Verified Production Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Real Client Problem ➔ Actual Architecture ➔ Measurable Outcome
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Every case study below outlines the actual technical constraints, the automation trigger-logic sequence,
              and the exact outcome achieved.
            </p>
          </div>

          {/* CASE STUDY 1: GT ATELIER */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 hover:border-primary/40 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary uppercase">
                <span>London Slow Fashion Brand • Case Study 01</span>
              </div>
              <span className="text-xs text-white/50 font-mono">Delivered in 7 Days</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              GT Atelier: Automated UK Influencer Discovery & Verified Lead Scraper
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">439 Leads</div>
                <div className="text-xs text-white/70">Niche London sustainable fashion creators scraped</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">189 Verified</div>
                <div className="text-xs text-white/70">Valid business emails extracted & DNS checked</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">100% Approval</div>
                <div className="text-xs text-white/70">Google Sheets staging review before any email was sent</div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-8">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">The Business Challenge:</h4>
                <p className="text-white/70">
                  GT Atelier is an independent sustainable slow-fashion studio based in London. To launch their seasonal collection,
                  they needed to partner with authentic UK micro-influencers and stylists. Manually researching creators on Instagram,
                  evaluating follower engagement, checking bios for contact emails, and copy-pasting into spreadsheets was taking over
                  20 hours a week and yielded few results.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2">The NewEra Automation Architecture:</h4>
                <p className="text-white/70 mb-3">
                  We engineered an autonomous multi-node scraping and enrichment pipeline built on n8n:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li><strong>Trigger:</strong> Automated schedule node inputs curated London sustainable fashion hashtags and creator lookalikes into an Apify scraper actor.</li>
                  <li><strong>Filtration Logic:</strong> A custom JavaScript function node filtered out bot accounts, inactive profiles, and non-UK creators based on engagement ratios.</li>
                  <li><strong>Email Extraction & DNS Check:</strong> Extracted business emails from creator bios and ran MX record syntax verification to ensure high inbox deliverability.</li>
                  <li><strong>Human-in-the-Loop Staging:</strong> Appended clean records into an organized Google Sheets dashboard with creator photos, handle links, and draft email templates, giving the founder 1-click approval before sending.</li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 text-xs text-white/60">
                <span>Stack: n8n, Apify, Google Sheets API, Gmail API</span>
                <Link
                  href="/n8n-automation"
                  className="text-primary hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Explore n8n Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* CASE STUDY 2: PRADEEP KUMAR */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 hover:border-primary/40 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary uppercase">
                <span>Independent B2B Consultant • Case Study 02</span>
              </div>
              <span className="text-xs text-white/50 font-mono">Ongoing Production</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Pradeep Kumar: Dual-Inbox AI Triage & Outreach Automation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">1,800+ Emails</div>
                <div className="text-xs text-white/70">Inquiries and outreach messages dispatched on autopilot</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">2–3h Daily</div>
                <div className="text-xs text-white/70">Reclaimed from tedious manual inbox sorting and replying</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">0 Missed Leads</div>
                <div className="text-xs text-white/70">Instant categorization across Gmail and Microsoft Outlook</div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-8">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">The Business Challenge:</h4>
                <p className="text-white/70">
                  Pradeep Kumar is an independent SEO and growth consultant managing communications across both a corporate
                  Outlook account and a personal Gmail inbox. With dozens of incoming partnership requests, vendor solicitations,
                  and client audit inquiries arriving daily, valuable high-ticket prospects were getting buried, and manual follow-ups
                  were consistently slipping through the cracks.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2">The NewEra Automation Architecture:</h4>
                <p className="text-white/70 mb-3">
                  We engineered an autonomous dual-inbox triage engine synchronizing both platforms:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li><strong>Trigger:</strong> Dual webhook listeners polling Gmail API and Microsoft Graph (Outlook) for new unread messages.</li>
                  <li><strong>AI Intent Classification:</strong> Passed raw email text to an LLM node to categorize messages (Hot Prospect, Active Client Query, Vendor Pitch, Newsletter Spam).</li>
                  <li><strong>Drafting Engine:</strong> For legitimate prospect queries, the agent extracted project scope and generated an individualized contextual reply draft including portfolio links and booking slots.</li>
                  <li><strong>Automated Follow-Up Sequences:</strong> Dispatched multi-touch email sequences if prospective leads didn't respond within 72 hours, with automated loop termination upon reply.</li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 text-xs text-white/60">
                <span>Stack: n8n, Gmail API, Microsoft Outlook OAuth, OpenAI LLM</span>
                <Link
                  href="/ai-agents"
                  className="text-primary hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Explore AI Agent Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. LIVE WORKFLOW SCHEMATICS VIEWER --- */}
      <section className="w-full">
        <N8nWorkflowShowcase />
      </section>

      {/* --- 4. INTEGRITY MANIFESTO --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            The NewEra Proof & Integrity Commitment
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
            In an industry flooded with fake screenshots, unverified testimonials, and rented awards, NewEra Automations operates
            with absolute transparency. We never publish fabricated client logos, fake case studies, or hypothetical ROI claims.
            Every workflow featured on this website represents real engineering architected and tested by Krishna Prajapati.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
            <span>Verified Founder Implementation • Transparent Technical Delivery</span>
          </div>
        </div>
      </section>

      {/* --- 5. FINAL HIGH-CONVERTING CTA BLOCK --- */}
      <section className="px-6 py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/10 p-10 md:p-16 text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready To Engineer <span className="text-primary">Measurable Automation Results</span>?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Message Krishna Prajapati directly on WhatsApp. We will audit your current repetitive bottlenecks,
            identify high-leverage automation opportunities, and give you an honest technical assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Discuss My Project on WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Case%20Study%20Automation%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Krishna Directly</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            No sales pressure • Direct founder engineering review • 100% confidential
          </div>
        </div>
      </section>
    </main>
  );
}
