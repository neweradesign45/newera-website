import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, OG_IMAGE, WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import {
  MessageSquare,
  Zap,
  Users,
  Calendar,
  Database,
  ArrowRight,
  ShieldCheck,
  Languages,
  Clock,
  CheckCircle2,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "WhatsApp Automation Agency | AI Chatbots & Lead Qualification",
  description:
    "Official WhatsApp Business API automation and AI chatbots. Capture inbound leads, qualify prospects in seconds, sync with your CRM, and book meetings 24/7.",
  keywords: [
    "WhatsApp automation",
    "WhatsApp AI automation",
    "WhatsApp chatbot",
    "WhatsApp lead automation",
    "AI WhatsApp agent",
    "business WhatsApp automation",
    "WhatsApp customer support automation",
    "WhatsApp workflow automation",
    "official WhatsApp Business API",
  ],
  alternates: {
    canonical: `${BASE_URL}/whatsapp-automation`,
  },
  openGraph: {
    title: "WhatsApp Automation Agency | AI Chatbots & Lead Qualification",
    description:
      "Transform WhatsApp into your highest-converting sales channel. Instant AI qualification, CRM sync, and automated calendar booking 24/7.",
    url: `${BASE_URL}/whatsapp-automation`,
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "WhatsApp Automation Agency — NewEra Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation Agency | AI Chatbots & Lead Qualification",
    description:
      "Official WhatsApp API & AI agents for business. Automated lead capture, CRM sync, and 24/7 customer support.",
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
          "name": "WhatsApp Automation",
          "item": `${BASE_URL}/whatsapp-automation`,
        },
      ],
    },
    {
      "@type": "Service",
      "name": "WhatsApp AI Automation & Chatbot Engineering",
      "serviceType": "Conversational AI & Lead Automation",
      "provider": {
        "@type": "Organization",
        "name": "NewEra Automations",
        "url": BASE_URL,
      },
      "areaServed": "Worldwide",
      "description":
        "Official Meta WhatsApp Business API integration, autonomous conversational AI agents, inbound lead qualification, instant CRM synchronization, and automated appointment scheduling.",
    },
  ],
};

export default function WhatsAppAutomationPage() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#25D366]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumb strip */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/50 mb-8 font-mono">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
            <span>/</span>
            <span className="text-primary">WhatsApp Automation</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-6 backdrop-blur-sm">
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/90">
              Official Meta Cloud API • Enterprise AI Chatbots
            </span>
          </div>

          {/* Semantic H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            WhatsApp Automation Agency: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#25D366]">
              Capture, Qualify & Close Leads 24/7
            </span>
          </h1>

          {/* Clear Value Proposition Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            Stop losing high-intent prospects to slow response times. We build intelligent WhatsApp AI agents
            integrated with the official WhatsApp Business API, your CRM, and calendars — engaging inquiries in seconds,
            scoring budgets, and routing hot leads directly to your sales team.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#25D366]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Test Live WhatsApp Demo</span>
            </a>
            <a
              href="#use-cases"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <span>Explore Real Use Cases</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Guarantees Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-[#25D366] mb-1">&lt; 3 Seconds</div>
              <div className="text-xs text-white/60">Instant response time to all incoming customer chats</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Official Meta API</div>
              <div className="text-xs text-white/60">100% compliant, verified green-tick ready, zero ban risk</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">CRM Auto-Sync</div>
              <div className="text-xs text-white/60">HubSpot, Zoho, Airtable & Google Sheets 2-way sync</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-[#25D366] mb-1">Bilingual / Hinglish</div>
              <div className="text-xs text-white/60">Natural conversation in English, Hindi & regional mixes</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: WHY BUSINESSES LOSE 60%+ OF WHATSAPP INQUIRIES --- */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
              The Conversion Gap
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Why Manual WhatsApp Messaging Kills Your Sales
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              WhatsApp is the world's most opened messaging channel with a 98% open rate. But when managed manually
              or with rigid button-only bots, revenue slips through the cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Delayed Response Times</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Data shows 78% of customers buy from the company that responds first. If an inquiry comes in at 9 PM
                  or on a weekend, your team takes 3 to 12 hours to reply. By then, the prospect has already contacted your competitor.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 text-xs text-[#25D366] font-mono">
                ✦ AI Solution: Responds in 2 seconds, 24/7/365, with intelligent context and zero waiting time.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Repetitive Queries Draining Sales Reps</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Your expensive sales closers spend 70% of their workday typing the exact same brochure links, pricing lists,
                  locations, and basic answers instead of actually closing qualified buyers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 text-xs text-[#25D366] font-mono">
                ✦ AI Solution: Resolves 85% of FAQs autonomously; only hands over pre-qualified hot prospects.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Leads Trapped On Individual Phones</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  When reps chat from personal WhatsApp numbers, lead data never enters your CRM. If an employee resigns,
                  you lose months of client relationships, chat histories, and pipeline visibility.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 text-xs text-[#25D366] font-mono">
                ✦ AI Solution: Every phone number, qualification answer, and chat transcript is logged straight to your central CRM.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Account Ban Risk From Unofficial Bots</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Cheap scraping tools and browser extension bots violate WhatsApp Terms of Service. Meta actively detects
                  and permanently bans numbers running on non-API tools, destroying your business contact identity.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 text-xs text-[#25D366] font-mono">
                ✦ AI Solution: Built strictly on the Official Meta WhatsApp Cloud API with zero risk of number bans.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. HOW THE NEWERA WHATSAPP AI ENGINE WORKS --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Intelligent Conversations, Not Rigid Menus
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Say goodbye to frustrating "Press 1 for Sales, Press 2 for Support" bots. NewEra builds conversational AI agents
              powered by LLMs that understand natural language, intent, and colloquial phrases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#25D366]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Language Understanding</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Whether a customer writes in fluent English, Hindi, or Hinglish ("Bhai pricing kya hai aur demo kab mil sakta hai?"),
                the agent understands intent instantly and replies naturally without breaking character.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#25D366]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dynamic Lead Qualification</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                The AI subtly extracts critical criteria: budget range, timeline, business requirements, and location.
                It calculates a qualification score before deciding whether to book a meeting or share educational content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#25D366]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">In-Chat Calendar Booking</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Qualified prospects are offered live calendar slots (Google Calendar / Cal.com) directly inside WhatsApp.
                They pick a time with a single tap, receive an automated invite, and get reminder nudges before the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CORE HIGH-ROI USE CASES --- */}
      <section id="use-cases" className="px-6 py-20 border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
              Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              WhatsApp Automation Systems We Deploy
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Custom workflow systems engineered to produce measurable pipeline growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* System 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                  Real Estate & High-Ticket Sales
                </span>
                <span className="text-xs text-white/50">Inbound Lead Qualifier</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Property Ingestion & Site Visits</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Captures leads from Meta Ads or website click-to-WhatsApp. Collects budget, preferred location (e.g., 3BHK Gurgaon / South Delhi),
                dispatches verified PDF floor plans automatically, and books physical site visits into the agent's calendar.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Auto Floorplan PDF</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Site Visit Scheduler</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Lead Scoring</span>
              </div>
            </div>

            {/* System 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                  D2C & E-Commerce
                </span>
                <span className="text-xs text-white/50">Revenue Recovery Engine</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Abandoned Cart & COD Confirmation</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Detects abandoned checkouts from Shopify/WooCommerce and triggers a conversational WhatsApp reminder with a 1-click checkout link.
                Verifies Cash-on-Delivery (COD) orders before dispatch to slash return-to-origin (RTO) rates.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Shopify Webhooks</span>
                <span className="px-2.5 py-1 rounded bg-white/5">COD Verification</span>
                <span className="px-2.5 py-1 rounded bg-white/5">RTO Reduction</span>
              </div>
            </div>

            {/* System 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                  B2B Services & Agencies
                </span>
                <span className="text-xs text-white/50">Discovery Call Booking</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Portfolio & Meeting Router</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                When prospects click your ads or social bio, the AI greets them by name, asks about their project scope and timeline,
                shares relevant case studies, and directs them to pick an open strategy call slot without back-and-forth emails.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Portfolio Delivery</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Cal.com Sync</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Slack Alert to Founder</span>
              </div>
            </div>

            {/* System 4 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                  Customer Operations
                </span>
                <span className="text-xs text-white/50">24/7 Support Agent</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Knowledge Base Auto-Resolution</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Connected directly to your company documentation, policy guides, and ticketing system. Instantly resolves common queries
                (order status, refund policy, onboarding instructions) and triggers human escalation only when necessary.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Knowledge Base AI</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Smart Escalation</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Live Human Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. TECHNICAL DIFFERENTIATION: NEWERA VS STANDARD CHATBOT SAAS --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
              Honest Technical Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Custom AI Engineering vs. Rigid SaaS Chatbots
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Why fast-growing companies hire NewEra instead of renting generic chatbot tools like Wati, Interakt, or AiSensy.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-white/50">
                  <th className="py-4 px-4">Feature & Capability</th>
                  <th className="py-4 px-4 text-[#25D366]">NewEra Custom AI WhatsApp</th>
                  <th className="py-4 px-4 text-white/40">Generic Chatbot SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                <tr>
                  <td className="py-4 px-4 font-medium">Conversational Intelligence</td>
                  <td className="py-4 px-4 text-[#25D366]">Autonomous LLM Agent (Gemini / Claude / OpenAI) with natural memory</td>
                  <td className="py-4 px-4 text-white/50">Rigid button menus & strict keyword matches</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Data Ownership & Control</td>
                  <td className="py-4 px-4 text-[#25D366]">100% owned by you on your Meta Cloud API account</td>
                  <td className="py-4 px-4 text-white/50">Vendor lock-in; stored on shared vendor servers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">CRM & Custom Database Sync</td>
                  <td className="py-4 px-4 text-[#25D366]">Direct 2-way sync via n8n to any database, webhook, or custom ERP</td>
                  <td className="py-4 px-4 text-white/50">Limited to pre-built native integrations</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Monthly Markup Fees</td>
                  <td className="py-4 px-4 text-[#25D366]">Zero markup. You pay Meta directly at official wholesale rates</td>
                  <td className="py-4 px-4 text-white/50">Heavy per-conversation markup + monthly subscription tiers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Human Handover & Alerting</td>
                  <td className="py-4 px-4 text-[#25D366]">Instant notification to Slack, WhatsApp, or Telegram with full context</td>
                  <td className="py-4 px-4 text-white/50">Requires reps to stay glued to a separate third-party web dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 6. FREQUENTLY ASKED QUESTIONS --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-sm">
              Everything you need to know about setting up WhatsApp automation safely and compliantly.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-[#25D366] transition-colors">
                <span>Will our WhatsApp phone number get banned?</span>
                <span className="text-[#25D366] transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                No. We build strictly on the <strong>Official Meta WhatsApp Business Cloud API</strong>. Unlike unofficial web-scrapers
                or browser extension tools, the official API is Meta-authorized, completely compliant, and carries zero risk of automated bans
                when operated within Meta messaging guidelines.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-[#25D366] transition-colors">
                <span>Can the AI agent handle Hindi or Hinglish conversation?</span>
                <span className="text-[#25D366] transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. Our AI models are engineered to seamlessly understand informal phrasing, code-switching between Hindi and English (Hinglish),
                spelling typos, and voice note transcriptions, delivering natural, respectful, and on-brand responses.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-[#25D366] transition-colors">
                <span>What happens when a prospect asks for a human agent?</span>
                <span className="text-[#25D366] transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                The AI recognizes escalation requests immediately. It pauses automated replies for that thread, summarizes the prospect's needs,
                and dispatches an instant notification to your sales manager on Slack or WhatsApp so a human can step in seamlessly.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-[#25D366] transition-colors">
                <span>How are Meta messaging costs billed?</span>
                <span className="text-[#25D366] transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Meta provides 1,000 free service conversations per month. For conversations beyond that, Meta charges a wholesale fee per 24-hour conversation window (typically fractions of a cent). You connect your own payment card directly to Meta Business Manager — NewEra takes zero commission or markup on messaging costs.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-[#25D366] transition-colors">
                <span>Can we connect WhatsApp with our existing CRM and calendar?</span>
                <span className="text-[#25D366] transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. We engineer bi-directional webhooks connecting WhatsApp directly with HubSpot, Zoho CRM, Salesforce, Airtable, Google Sheets, and Cal.com/Calendly. When a lead is qualified on WhatsApp, a contact card and deal stage are created in your CRM in real time.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL HIGH-CONVERTING CTA BLOCK --- */}
      <section className="px-6 py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#25D366]/10 via-white/[0.02] to-transparent border border-white/10 p-10 md:p-16 text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/20 blur-[120px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready To Put Your <span className="text-[#25D366]">WhatsApp On Autopilot</span>?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Message us directly on WhatsApp. Test our response speed firsthand and let's map out an automated qualification system for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#25D366]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Message Us on WhatsApp (+91 7078994915)</span>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=WhatsApp%20Automation%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Krishna Directly</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            Official Meta Cloud API • Direct founder consultation • Zero spam commitment
          </div>
        </div>
      </section>
    </main>
  );
}
