"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Industries & Flexibility",
    question: "Which industries does NewEra Automations build AI systems for?",
    answer: "We design custom AI agents and workflow automations for EVERY industry — including Real Estate, E-Commerce, SaaS, Healthcare, Education, Legal, Financial Services, Logistics, Digital Agencies, and Local Services. Whether you run a B2B SaaS startup or a multi-location real estate agency, our systems adapt to your exact business rules."
  },
  {
    category: "Capabilities & Workflows",
    question: "What specific workflows and AI agents can you build for my business?",
    answer: "We build end-to-end automation pipelines across all operational areas: 1) WhatsApp & Instagram AI Sales Chatbots 2) Automated Lead Scraping, Enrichment & Scoring 3) Multi-Inbox Cold Email Infrastructure 4) 24/7 AI Customer Support Auto-Resolvers 5) E-Commerce Abandoned Cart & COD Verification 6) Real Estate Property Matching & Visit Booking 7) Automated Invoicing, Receivables & CRM Data Sync 8) Custom n8n / Make.com pipelines."
  },
  {
    category: "Integration & Tech Stack",
    question: "Can NewEra Automations integrate with our existing software tools?",
    answer: "Yes, 100%! We seamlessly connect with all major platforms including HubSpot, Salesforce, Zoho, WhatsApp Business API, Shopify, WooCommerce, Google Workspace, Slack, Notion, Airtable, Stripe, and custom REST APIs. We leverage enterprise orchestration tools like n8n and advanced LLMs (OpenAI GPT-4o, Claude 3.5, Gemini, Llama 3) to power your agents."
  },
  {
    category: "Customization",
    question: "What if our business has a very unique or complex workflow?",
    answer: "That is our specialty. We don't sell rigid off-the-shelf templates. We analyze your exact operational bottleneck, map out a custom architecture blueprint, and engineer bespoke AI agents that match your brand tone, compliance rules, and internal logic."
  },
  {
    category: "Timeline & Delivery",
    question: "How long does it take to build and deploy an automated AI system?",
    answer: "Most custom workflow automations and AI chatbots are fully developed, tested, and deployed within 3 to 7 business days. Complex multi-agent enterprise architectures typically take 2 weeks with continuous optimization."
  },
  {
    category: "Pricing & ROI",
    question: "What is the cost structure, and what ROI can we expect?",
    answer: "We offer transparent project-based pricing as well as retainer options. Most clients recover 20 to 50+ hours per week of manual labor and see a positive return on investment within the first 30 days through increased lead conversions and reduced payroll overhead."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data JSON-LD for Search Engines & GEO AI Models
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Schema.org Injection for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-white/90">Everything You Need To Know</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-accent text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg font-light">
            Answers to common questions about our AI agents, multi-industry custom workflows, integrations, and deployment process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.07] border-primary/40 shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-primary" : "text-white/40"}`} />
                    <span className="text-lg md:text-xl font-medium font-accent text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-primary text-black rotate-180" : "bg-white/5 text-white/70"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-white/70 text-base leading-relaxed border-t border-white/5">
                        <div className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                          {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Google Preferred Sources Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div>
            <p className="text-white/90 font-medium text-sm">Love what we do?</p>
            <p className="text-white/50 text-xs mt-1">Add NewEra as a preferred source to see us more in Google Search & AI results.</p>
          </div>
          <div google-add-preferred-source-btn data-theme="dark" />
        </div>
      </div>
    </section>
  );
}
