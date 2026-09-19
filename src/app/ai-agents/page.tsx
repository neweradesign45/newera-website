import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL, OG_IMAGE, WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import {
  Bot,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Workflow,
  Search,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  GitFork,
  Activity,
} from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "AI Agent Development Agency | Custom Autonomous AI Agents for Business",
  description:
    "Specialized AI agent development agency. We engineer custom autonomous AI agents, multi-agent systems, and production agentic workflows that execute real business work.",
  keywords: [
    "AI agent development",
    "custom AI agents",
    "AI agent development agency",
    "production AI agents",
    "agentic workflows",
    "business AI agents",
    "custom business AI agents",
    "AI agent consulting",
    "multi-agent systems",
  ],
  alternates: {
    canonical: `${BASE_URL}/ai-agents`,
  },
  openGraph: {
    title: "AI Agent Development Agency | Custom Autonomous AI Agents for Business",
    description:
      "Move beyond toy chatbots. We architect and deploy autonomous AI agents with memory, tool calling, and guardrails to run business operations.",
    url: `${BASE_URL}/ai-agents`,
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AI Agent Development Agency — NewEra Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Development Agency | Custom Autonomous AI Agents",
    description:
      "Custom production AI agents with tool calling, persistent memory, and deterministic guardrails. Built by NewEra Automations.",
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
          "name": "AI Agents",
          "item": `${BASE_URL}/ai-agents`,
        },
      ],
    },
    {
      "@type": "Service",
      "name": "Custom AI Agent Development & Engineering",
      "serviceType": "Autonomous AI Agent Systems",
      "provider": {
        "@type": "Organization",
        "name": "NewEra Automations",
        "url": BASE_URL,
      },
      "areaServed": "Worldwide",
      "description":
        "Engineering production-ready autonomous AI agents, multi-agent systems, tool-calling pipelines, RAG vector memory, and enterprise workflow automation.",
    },
  ],
};

export default function AIAgentsPage() {
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
            <span className="text-primary">AI Agents</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/90">
              Autonomous Systems • Multi-Agent Workflows
            </span>
          </div>

          {/* Semantic H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            AI Agent Development Agency: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-primary">
              Autonomous Systems That Execute Real Work
            </span>
          </h1>

          {/* Clear Value Proposition Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            Move beyond passive chatbots that merely answer questions. We engineer production-ready AI agents
            equipped with persistent memory, tool-calling capabilities, and deterministic guardrails — autonomously
            executing research, qualification, data extraction, and operations 24/7.
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
              <span>Scope Your AI Agent Architecture</span>
            </a>
            <a
              href="#agent-types"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <span>Explore Agent Types</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Guarantees Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">Tool Calling</div>
              <div className="text-xs text-white/60">APIs, databases, web scrapers & CRM actions</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Zero Hallucination</div>
              <div className="text-xs text-white/60">Deterministic guardrails and structured JSON schemas</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">Multi-Agent Loops</div>
              <div className="text-xs text-white/60">Supervisor & worker architectures for complex workflows</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-primary mb-1">100% Private VPC</div>
              <div className="text-xs text-white/60">Zero vendor lock-in; hosted on your private cloud</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: CHATBOTS VS PRODUCTION AI AGENTS --- */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              The Reality Check
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Why Generic ChatGPT Wrappers Fail in Business
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Most "AI solutions" sold today are fragile single-prompt wrappers. When faced with real-world edge cases,
              complex databases, or strict business policies, they collapse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Hallucinations on Critical Data</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Standard LLMs guess when they lack data. If a customer asks about a specific refund policy, complex pricing tier,
                  or technical specification, a generic chatbot will fabricate answers that damage your brand and create legal liabilities.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ NewEra Solution: Strict RAG vector grounding and deterministic fallback state machines.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Inability to Take Real Actions</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  A chatbot can only produce text strings. It cannot check real-time stock levels in your database,
                  create an invoice in your accounting software, update deal stages in HubSpot, or ping your engineering team.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ NewEra Solution: Native tool-calling schemas connecting LLMs to your internal APIs and databases.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Context Drift & Memory Loss</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Without structured state management, multi-turn conversations lose context quickly. The AI forgets what the user said
                  three turns ago, contradicts previous statements, or burns thousands of expensive tokens in repetitive context windows.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ NewEra Solution: Dual-layer memory (short-term state buffers + long-term episodic vector storage).
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Zero Operational Guardrails</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Deploying an unmonitored AI model into customer-facing operations without human review checkpoints is an enormous risk.
                  One rogue prompt injection or formatting glitch can trigger unintended emails or unauthorized data exposure.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-xs text-primary font-mono">
                ✦ NewEra Solution: Human-in-the-loop validation triggers on high-stakes decisions before execution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE 4 PILLARS OF NEWERA AGENTIC ENGINEERING --- */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Production Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              How We Engineer Autonomous AI Agents
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Every AI agent we deploy is built on a four-part enterprise foundation: intelligent reasoning,
              actionable tools, persistent memory, and strict human guardrails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multi-Model Routing</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                We select the best foundation model for the job: Claude 3.5 Sonnet for reasoning, Gemini 1.5/2.0 for large documents, and GPT-4o for structured schema outputs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <Workflow className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tool Calling & Execution</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Our agents connect to authenticated REST APIs, execute SQL queries against PostgreSQL/Supabase, scrape target websites, and generate verified PDF invoices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <BrainCircuit className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Vector RAG Memory</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Persistent retrieval-augmented generation grounded in your company's SOPs, catalogs, and documentation with hybrid keyword + vector semantic search.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Human-in-the-Loop QA</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                High-stakes actions (sending payouts, publishing content, dispatching VIP outreach) generate Slack or Telegram approval cards for human review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CORE AI AGENT USE CASES WE BUILD --- */}
      <section id="agent-types" className="px-6 py-20 border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Commercial Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Production AI Agents We Deploy For Businesses
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Autonomous digital workers designed to operate inside specific business functions with clear ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agent 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Sales & Revenue
                </span>
                <span className="text-xs text-white/50">Inbound Sales Agent</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Sales & Qualification Agent</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Engages inbound inquiries across your website and WhatsApp. Conducts discovery, extracts budget and timeline,
                scores lead fit against your ICP, answers complex product questions, and schedules calendar appointments for closers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Dynamic Objection Handling</span>
                <span className="px-2.5 py-1 rounded bg-white/5">CRM Deal Creation</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Cal.com Booking</span>
              </div>
            </div>

            {/* Agent 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Data & Intelligence
                </span>
                <span className="text-xs text-white/50">Deep Research Agent</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Autonomous Market & Lead Research Agent</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Performs deep web research on target accounts, scans news and LinkedIn for trigger events, verifies business emails,
                synthesizes company teardowns, and enriches CRM records with executive intelligence before sales calls.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Multi-Source Web Scraping</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Email Verification</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Automated Dossier PDF</span>
              </div>
            </div>

            {/* Agent 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Operations & Support
                </span>
                <span className="text-xs text-white/50">Operations Resolver</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Customer Support & SOP Auto-Resolver</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Connected directly to your company documentation, databases, and ticketing software. Diagnoses customer problems,
                queries order databases, executes safe account updates, and drafts contextual replies with full ticket history.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Vector Knowledge Base</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Database Querying</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Zendesk / Jira Sync</span>
              </div>
            </div>

            {/* Agent 4 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Multi-Agent Architecture
                </span>
                <span className="text-xs text-white/50">Agentic Teams</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Agent Collaborative Loops</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Complex enterprise tasks require specialized collaboration. We architect supervisor agents that delegate subtasks to
                specialist worker agents (e.g. Researcher Agent ➔ Writer Agent ➔ Compliance Verifier Agent) before final execution.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/60 pt-4 border-t border-white/5">
                <span className="px-2.5 py-1 rounded bg-white/5">Supervisor Architecture</span>
                <span className="px-2.5 py-1 rounded bg-white/5">Self-Correction Loops</span>
                <span className="px-2.5 py-1 rounded bg-white/5">LangChain / n8n Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. VERIFIED REAL IMPLEMENTATION EVIDENCE --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Verified Production Proof
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Real Agentic Pipelines In Action
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Here is how NewEra's autonomous systems perform in production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-2">
                  System Showcase • n8n + LLM Agent
                </span>
                <h3 className="text-xl font-bold mb-3">AI Lead Scorer & Email Generator Agent</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  An autonomous n8n agent pipeline that ingests raw leads from Google Sheets, scrapes their target website,
                  evaluates product fit using OpenRouter LLM (Score &gt;= 70 threshold), writes personalized contextual emails,
                  and dispatches via the Gmail API without manual human drafting.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60 flex justify-between">
                <span>Autonomous Evaluation</span>
                <span className="text-primary">100% Verified Production Node</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-2">
                  Consultant Operations • 1,800+ Emails
                </span>
                <h3 className="text-xl font-bold mb-3">Dual-Inbox AI Communications Router</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Synchronized Gmail and Microsoft Outlook with an AI classification agent that categorizes incoming inquiries,
                  identifies urgent client issues, drafts tailored responses, and automates multi-stage follow-up loops saving 2-3 hours daily.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60 flex justify-between">
                <span>Dual-Inbox Triage</span>
                <span className="text-primary">2–3h Saved Daily</span>
              </div>
            </div>
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
              Answers about agent security, hallucination controls, and infrastructure ownership.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>What is the actual difference between a chatbot and an AI agent?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                A chatbot is a conversational text interface — it replies when spoken to. An <strong>AI agent</strong> has autonomy:
                it has tools (ability to execute APIs, scrape websites, run calculations), persistent memory (state and vector databases),
                and a reasoning loop (it can plan multi-step actions, check its own work, and correct mistakes without human prompting).
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>How do you prevent the AI agent from hallucinating?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                We use three layers of guardrails: First, <strong>Vector RAG Grounding</strong> restricts the agent to verified internal documents.
                Second, <strong>Structured Schema Validation</strong> (using Pydantic / Zod JSON schemas) enforces exact output formatting.
                Third, <strong>Human-in-the-Loop checkpoints</strong> pause any critical database modification or financial action until approved.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Can we host the AI agent on our own cloud infrastructure?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                Yes. We deploy agent workflows directly to your private AWS, DigitalOcean, Hetzner, or on-premise Docker server.
                You retain complete ownership of the source code, prompts, vector embeddings, and API keys. We never lock you into proprietary hosting.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>Which LLM models do you build on?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                We are model-agnostic. We integrate Anthropic (Claude 3.5 Sonnet), Google (Gemini 1.5 Pro/Flash & 2.0), OpenAI (GPT-4o),
                as well as open-weights models (Llama 3.3 via Groq or self-hosted Ollama) depending on your cost, speed, and privacy requirements.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-base text-white hover:text-primary transition-colors">
                <span>How long does it take to develop and deploy an AI agent?</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                A single focused AI agent (e.g. Inbound Sales Qualifier or Research Agent) typically takes 7 to 14 days from scoping to live production deployment.
                Complex multi-agent collaborative workflows with custom internal ERP integrations typically require 3 to 4 weeks.
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
            Ready To Deploy Your <span className="text-primary">First Autonomous AI Agent</span>?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Talk directly with Founder & Automation Architect Krishna Prajapati. We will review your manual processes,
            identify high-leverage agent opportunities, and calculate your deployment timeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Scope Architecture on WhatsApp</span>
            </a>
            <a
              href={`mailto:${EMAIL}?subject=AI%20Agent%20Development%20Inquiry`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Krishna Directly</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            Direct founder consultation • Technical feasibility review • No sales pressure
          </div>
        </div>
      </section>
    </main>
  );
}
