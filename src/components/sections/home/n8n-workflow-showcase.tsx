"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconZoomIn, IconX, IconArrowRight, IconGitBranch } from "@tabler/icons-react";

const WORKFLOWS = [
  {
    id: "lead-scorer",
    title: "AI Lead Scorer & Email Generator Agent",
    tagline: "OpenRouter LLM AI Agent & Automatic Qualification",
    image: "/workflows/n8n-pipeline-3.png",
    tabLabel: "01. AI Lead Scorer",
    description:
      "Reads leads from Google Sheets, scrapes target websites, passes enrichment data to OpenRouter LLM to score lead quality (Score >= 70 threshold), generates customized outreach emails via AI Agent Email Writer, and dispatches via Gmail API.",
    tech: ["OpenRouter LLM", "n8n AI Agent", "Gmail API", "Web Scraper", "Google Sheets"],
  },
  {
    id: "multi-channel",
    title: "Multi-Channel Parallel Outreach Engine",
    tagline: "4-Branch Parallel Messaging & Follow-up Automation",
    image: "/workflows/n8n-pipeline-4.png",
    description:
      "Executes 4 parallel automation branches for lead follow-ups across Gmail and WhatsApp with custom JS logic, automated anti-spam delays (30s), sheet row status updates, and loop control.",
    tabLabel: "02. Multi-Channel Outreach",
    tech: ["Parallel Routing", "Gmail API", "WhatsApp API", "JS Code Node", "Loop Controller"],
  },
  {
    id: "social-scraper",
    title: "Social Lead & Hashtag Scraper",
    tagline: "Target Niche Hashtag Extraction & Lead Discovery",
    image: "/workflows/n8n-pipeline-1.png",
    tabLabel: "03. Hashtag Scraper",
    description:
      "Scheduled trigger system that inputs target industry hashtags, scrapes post data via Apify, extracts unique user profiles, applies follower & engagement filters, and appends clean leads into Google Sheets.",
    tech: ["Apify API", "n8n Schedule", "Filter Node", "Google Sheets API"],
  },
  {
    id: "profile-extractor",
    title: "Async Profile Extraction & Polling Engine",
    tagline: "Asynchronous Scraping with Polling & Retry Logic",
    image: "/workflows/n8n-pipeline-2.png",
    tabLabel: "04. Async Profile Extractor",
    description:
      "Advanced asynchronous scraping workflow that handles batch runs, polls execution status until finished, extracts detailed user datasets, deduplicates leads, and saves verified records.",
    tech: ["Async Polling", "Status Checkers", "Dataset Extractor", "Deduplication"],
  },
  {
    id: "lead-ingestion",
    title: "Automated Lead Ingestion Pipeline",
    tagline: "End-to-End Scraping & Database Sync Workflow",
    image: "/workflows/n8n-pipeline-5.png",
    tabLabel: "05. Lead Ingestion",
    description:
      "Linear end-to-end lead ingestion pipeline for rapid lead discovery, hashtag scraping, profile verification, smart categorization, and automatic database appending.",
    tech: ["Linear Pipeline", "Hashtag Scraper", "Smart Classifier", "Sheet Sync"],
  },
];

export default function N8nWorkflowShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const currentWorkflow = WORKFLOWS[activeTab];

  return (
    <section className="w-full py-20 bg-[#090a0c] text-white border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-primary px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block mb-3">
            ✦ Live n8n Architecture Showcase ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Production-Grade n8n Workflows
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Inspect the exact autonomous n8n pipelines, AI scoring agents, and multi-channel engines built by NewEra Automations.
          </p>
        </div>

        {/* Workflow Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {WORKFLOWS.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeTab === idx
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-white/[0.03] text-muted-foreground border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <IconGitBranch className="w-4 h-4" />
              <span>{wf.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Active Workflow Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWorkflow.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden p-6 md:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview Container */}
              <div className="lg:col-span-8 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden border border-primary/30 bg-black/80 cursor-pointer group-hover:border-primary transition-all duration-500 shadow-xl"
                  onClick={() => setZoomImage(currentWorkflow.image)}
                >
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentWorkflow.image}
                    alt={currentWorkflow.title}
                    className="w-full h-auto object-contain max-h-[440px] transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ filter: "contrast(1.08) brightness(1.05)" }}
                  />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm">
                    <IconZoomIn className="w-5 h-5 text-primary" />
                    <span>Click to Inspect Full Resolution</span>
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-4 flex flex-col justify-center gap-4">
                <span className="text-xs font-mono uppercase text-primary tracking-wider font-semibold">
                  {currentWorkflow.tagline}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {currentWorkflow.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentWorkflow.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentWorkflow.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setZoomImage(currentWorkflow.image)}
                  className="mt-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-primary text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-white/15 cursor-pointer w-fit"
                >
                  <span>Full High-Res View</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* High-Res Fullscreen Inspection Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={() => setZoomImage(null)}
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-primary text-white transition-colors cursor-pointer z-50"
            >
              <IconX className="w-6 h-6" />
            </button>
            <div className="relative max-w-6xl max-h-[90vh] overflow-auto rounded-2xl border border-white/20 shadow-2xl p-2 bg-neutral-900" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomImage}
                alt="n8n Workflow Fullscreen View"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
