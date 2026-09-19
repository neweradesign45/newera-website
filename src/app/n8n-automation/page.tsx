import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, OG_IMAGE, WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import N8nWorkflowShowcase from "@/components/sections/home/n8n-workflow-showcase";
import {
  Server,
  ShieldCheck,
  Cpu,
  RefreshCw,
  ArrowRight,
  Layers,
  Zap,
  Lock,
} from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "n8n Automation Agency | Enterprise Workflows & AI Agents",
  description:
    "Specialized n8n automation agency. We architect, implement, and host custom production n8n workflows, autonomous AI agents, and enterprise CRM sync on your private cloud.",
  keywords: [
    "n8n automation agency",
    "n8n workflow automation",
    "n8n implementation",
    "n8n consultant",
    "n8n AI agents",
    "custom n8n workflows",
    "self-hosted n8n automation",
    "n8n development services",
    "production n8n automation",
  ],
  alternates: {
    canonical: `${BASE_URL}/n8n-automation`,
  },
  openGraph: {
    title: "n8n Automation Agency | Enterprise Workflows & AI Agents",
    description:
      "Specialized n8n automation agency. Replace fragile Zapier/Make setups with self-hosted n8n workflows and custom AI agents on your own cloud.",
    url: `${BASE_URL}/n8n-automation`,
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "n8n Automation Agency — NewEra Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Automation Agency | Enterprise Workflows & AI Agents",
    description:
      "Enterprise n8n automation agency. Self-hosted workflows, zero per-task fees, and production AI agents.",
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
          "name": "n8n Automation",
          "item": `${BASE_URL}/n8n-automation`,
        },
      ],
    },
    {
      "@type": "Service",
      "name": "n8n Automation & AI Workflow Engineering",
      "serviceType": "Workflow Automation & AI Integration",
      "provider": {
        "@type": "Organization",
        "name": "NewEra Automations",
        "url": BASE_URL,
      },
      "areaServed": "Worldwide",
      "description":
        "End-to-end n8n workflow architecture, self-hosted deployment on client private cloud, autonomous AI agent nodes, CRM bi-directional sync, and custom API integration.",
    },
  ],
};

export default function N8nAutomationPage() {
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
            <span className="text-primary">n8n Automation</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/90">
              Enterprise n8n Workflow Engineering
            </span>
          </div>

          {/* Semantic H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            n8n Automation Agency: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-primary">
              Scale Workflows Without The SaaS Tax
            </span>
          </h1>

          {/* Clear Value Proposition Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            Eliminate escalating per-task fees from Zapier and Make. We architect, implement,
            and maintain custom self-hosted n8n automation pipelines on your private cloud — connecting
            your CRM, internal databases, and autonomous AI agents with zero vendor lock-in.
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
              <span>Book n8n Architecture Call</span>
            </a>
            <a
              href="#workflows"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <span>Inspect Live Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Guarantees Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">0 Per-Task Fees</div>
              <div className="text-xs text-white/60">Unlimited workflow runs on your own server</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">100% Data VPC</div>
              <div className="text-xs text-white/60">Customer PII never touches shared third parties</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">AI Agent Nodes</div>
              <div className="text-xs text-white/60">Claude, Gemini & OpenAI LangChain orchestration</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">99.9% Uptime</div>
              <div className="text-xs text-white/60">Dead-letter queues and instant Telegram error alerts</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: WHY SCALE-UPS OUTGROW ZAPIER & MAKE --- */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Architecture Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Why Companies Hit A Wall With Zapier & Make
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              No-code platforms are great for simple 2-step prototypes. But as soon as your business processes
              thousands of leads, large payloads, or autonomous AI chains, commercial constraints appear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. The Exponential "Per-Task" Tax</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  On Zapier or Make, every single filter, router step, and data formatting node counts as a billable task.
                  A high-volume lead workflow running 50,000 times a month quickly balloons into a $600 to $2,500 monthly recurring bill.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ n8n Solution: Runs on your own $20/mo VPS with infinite executions and 0 per-task charges.
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Data Privacy & Compliance Exposure</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Multi-tenant cloud platforms process your sensitive customer data, CRM fields, and financial records
                  on shared servers. For healthcare, financial services, or privacy-conscious brands, this violates strict data governance.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ n8n Solution: 100% self-hosted inside your private AWS, Hetzner, or DigitalOcean VPC.
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Silent Failures & Poor Error Handling</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  When a third-party API returns a rate limit (429) or temporary timeout, basic automation tools silently fail
                  or turn off entire scenarios without queuing payloads, causing catastrophic lead loss and broken data syncs.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ n8n Solution: Native Error Trigger workflows, dead-letter storage, and automated retries.
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Clunky AI Integrations Without True Agency</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Traditional platforms offer single-prompt OpenAI modules with no long-term memory, vector stores, or tool-calling loops.
                  They cannot act as autonomous reasoning agents that browse, calculate, verify, and make decisions.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ n8n Solution: Deep LangChain integration, custom code tools, vector stores, and multi-agent memory.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE 4 PILLARS OF NEWERA PRODUCTION N8N ARCHITECTURE --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Engineering Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              How We Architect Production n8n Deployments
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              We do not build fragile spaghetti diagrams. Every NewEra n8n system is engineered like enterprise software
              with versioning, modular sub-workflows, and isolated credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Self-Hosted Infrastructure</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Containerized Docker deployment on your private VPC (AWS, DigitalOcean, Hetzner) paired with dedicated PostgreSQL databases and SSL encryption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <Layers className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sub-Workflow Modularity</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                We decouple complex business logic into callable sub-workflows. This isolates bugs, simplifies maintenance, and enables reusable functions across departments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Autonomous AI Nodes</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Seamlessly connecting Claude 3.5 Sonnet, Gemini 1.5/2.0, or OpenAI with dynamic prompt memory, vector database embeddings, and real-time tool calling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Failover & Alerting</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Dedicated Error Trigger nodes that capture dropped payloads, store failed events in fallback tables, and instantly ping Telegram or Slack before clients notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. LIVE N8N ARCHITECTURE SHOWCASE (REAL SYSTEMS) --- */}
      <section id="workflows" className="w-full scroll-mt-24">
        <N8nWorkflowShowcase />
      </section>

      {/* --- 5. VERIFIED REAL IMPLEMENTATION PROOF --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Substantiated Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Real Workflows Delivering Tangible Results
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              No hypothetical concepts or inflated metrics. Here are real automation systems engineered by Krishna Prajapati and the NewEra team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-primary/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    London Fashion Brand
                  </span>
                  <span className="text-xs text-white/50">Lead Generation Pipeline</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">GT Atelier (London Slow Fashion)</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Automated UK fashion influencer lead discovery and personalized outreach engine. The n8n system scrapes target
                  creators, filters out low-engagement accounts, verifies email validity, and populates a staging dashboard for human approval before sending.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-xl font-bold text-primary">439 Leads</div>
                    <div className="text-xs text-white/60">Target fashion creators scraped</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-xl font-bold text-white">189 Verified</div>
                    <div className="text-xs text-white/60">Valid business emails extracted</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Stack: n8n, Apify, Google Sheets, Gmail API</span>
                <span className="text-primary font-medium">Delivered in 7 Days</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-primary/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    B2B Consultant
                  </span>
                  <span className="text-xs text-white/50">Inbox Operations & Triage</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Pradeep Kumar (SEO Consultant)</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Engineered an autonomous dual-inbox triage engine synchronizing Gmail and Microsoft Outlook. The n8n pipeline classifies
                  incoming client inquiries, drafts contextual smart auto-replies, and executes follow-up schedules automatically without manual intervention.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-xl font-bold text-primary">1,800+ Emails</div>
                    <div className="text-xs text-white/60">Processed & dispatched on autopilot</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-xl font-bold text-white">2–3h Daily</div>
                    <div className="text-xs text-white/60">Saved from manual inbox triage</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Stack: n8n, Gmail API, Outlook OAuth, OpenAI</span>
                <span className="text-primary font-medium">Production Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. IMPLEMENTATION ROADMAP: HOW WE WORK --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Implementation Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              From Architecture Audit to Live Production
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A structured 4-step deployment process ensuring zero disruption to your daily operations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Systems & API Audit</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We review your current tool stack (CRM, database, email, messaging), identify manual bottlenecks, document webhook endpoints, and calculate projected server resource requirements.
                </p>
              </div>
              <div className="text-xs font-mono text-white/40 shrink-0">Phase 1: Discovery</div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">VPC Provisioning & Staging Build</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We deploy your private n8n Docker container with SSL certificates and PostgreSQL. Workflows are built and validated in an isolated staging environment with mock data.
                </p>
              </div>
              <div className="text-xs font-mono text-white/40 shrink-0">Phase 2: Build</div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Stress-Testing & Edge Case Hardening</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We test error triggers, rate-limit throttling, dead-letter storage, and payload edge cases. Automated alerting is connected to your team's Slack or Telegram channel.
                </p>
              </div>
              <div className="text-xs font-mono text-white/40 shrink-0">Phase 3: QA</div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Production Cutover & Video Documentation</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We flip live webhooks, verify incoming data streams, record complete Loom training walkthroughs for your team, and provide ongoing workflow monitoring.
                </p>
              </div>
              <div className="text-xs font-mono text-white/40 shrink-0">Phase 4: Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FREQUENTLY ASKED QUESTIONS --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-sm">
              Clear answers on self-hosting, migration, pricing, and infrastructure security.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Why should we hire an n8n automation agency instead of using Zapier?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Zapier is designed for basic integrations but becomes prohibitively expensive at scale. With n8n,
                you own the infrastructure, eliminate per-task charges, process sensitive data within your private cloud,
                and unlock full programming power (JavaScript, LangChain AI agents, custom webhooks, and complex branch loops).
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Where will our n8n instance be hosted? Do we own it?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                You own 100% of the server and code. We configure the instance directly inside your AWS, Hetzner,
                or DigitalOcean account. You retain root credentials, API keys, and database access. NewEra never locks you in.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Can n8n connect with custom internal APIs or legacy databases?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. n8n includes native HTTP Request nodes with full OAuth2, JWT, basic auth, and custom header support,
                as well as direct connectors for PostgreSQL, MySQL, Redis, Supabase, and MongoDB. If an API has documentation, we can integrate it.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>What happens if an external API goes down?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Every workflow we build includes an automated Error Trigger pipeline. If an external service returns a 500 or 429,
                the raw payload is saved in a fallback retry queue, and an instant alert is dispatched to your designated Slack or Telegram channel with execution logs.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>How does NewEra price n8n implementations?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                We work on either a fixed-scope project model (for specific workflow builds and server setups) or a monthly automation retainer (for continuous workflow development, optimization, and 24/7 incident monitoring). Contact us for a precise scoping audit.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* --- 8. FINAL HIGH-CONVERTING CTA BLOCK --- */}
      <section className="px-6 py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/10 p-10 md:p-16 text-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready To Engineer Your <span className="text-primary">n8n Automation Pipeline</span>?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Talk directly with Founder & Automation Architect Krishna Prajapati. We will audit your current workflows,
            identify bottlenecks, and map out your self-hosted architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat on WhatsApp (+91 7078994915)</span>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=n8n%20Automation%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Krishna Directly</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            Founder-direct engineering • No sales reps • Honest feasibility review
          </div>
        </div>
      </section>
    </main>
  );
}
