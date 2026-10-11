"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PhraseAnimation from "@/components/common/phrase-reveal";
import { WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { Sparkles, Send, CheckCircle2, User, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const PROJECT_TYPES = [
  "Lead Qualification AI",
  "WhatsApp & CRM Automation",
  "Customer Support Bot",
  "Cold Outreach System",
  "Custom Workflow",
] as const;

const CalBooking = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("Lead Qualification AI");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }

    const isMobile =
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${EMAIL}?subject=Automation%20Inquiry%20-%20NewEra%20Automations`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Automation%20Inquiry%20-%20NewEra%20Automations`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a957aa51-07fa-46b1-a740-35a1b4143049",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service_needed: selectedType,
          message: formData.message || "No specific details provided",
          subject: `⚡ New Inbound Lead: ${formData.name} (${selectedType})`,
          from_name: "NewEra Automations Lead Engine",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || "Failed to submit. Please message on WhatsApp directly.");
      }
    } catch {
      setErrorMessage("Network error. Please message directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      id="contact"
      className="w-full h-full py-12 md:py-24 overflow-hidden px-4 md:px-8 relative"
    >
      {/* 1. Header with Phrase Animation */}
      <div
        ref={headerRef}
        className="container relative z-10 mb-12 px-6 text-center mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-widest flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Here • 0 Cost Audit</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <PhraseAnimation phrase="Ready  To  Automate " />
            <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              <PhraseAnimation phrase="Your  Business?" className="text-primary" />
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-primary/60 via-primary/20 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Tell us what you need. We&apos;ll design a tailored AI automation architecture and roadmap for your business within 2 hours.
        </motion.div>
      </div>

      {/* 2. Interactive Lead Capture Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-3xl mx-auto mb-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-10 shadow-2xl"
      >
        {isSuccess ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 text-primary">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-3">
              Inquiry Received, {formData.name}!
            </h4>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Your automation request has been dispatched directly to Founder Krishna Prajapati. We will review your workflow and reply via email or WhatsApp within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/917078994915?text=${encodeURIComponent(
                  `Hi Krishna, I just submitted an inquiry on neweraautomations.com for ${formData.name} regarding ${selectedType}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3.5 text-sm transition-all shadow-lg shadow-green-900/20"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Prefer Instant Chat? Open WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: "", phone: "", email: "", message: "" });
                }}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 py-2"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project / Automation Category Pills */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                1. Select Service Needed
              </label>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`text-xs md:text-sm px-3.5 py-2 rounded-xl transition-all duration-300 border ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 font-semibold"
                          : "bg-white/[0.03] text-muted-foreground border-white/10 hover:border-white/20 hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="bottom-name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  2. Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="bottom-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Rahul Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="bottom-phone" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  3. WhatsApp / Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="bottom-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="bottom-email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                4. Work Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="bottom-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. contact@yourbusiness.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
                />
              </div>
            </div>

            {/* Message / Details */}
            <div>
              <label htmlFor="bottom-message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                5. What would you like to automate? (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                <textarea
                  id="bottom-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us a bit about your current operations, tools used (CRM, WhatsApp, Sheets), or pain points..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Dispatching Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span>Request Free Automation Audit &amp; Roadmap</span>
                  </>
                )}
              </span>
            </button>

            <p className="text-center text-[11px] text-muted-foreground">
              🔒 100% Confidential. Zero spam. We reply directly with actionable architecture.
            </p>
          </form>
        )}
      </motion.div>

      {/* 3. Direct Quick Contact Options */}
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          Or Contact Founder Directly
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        {/* WhatsApp Card */}
        <div className="w-full md:w-1/2">
          <Link href={WHATSAPP_LINK} target="_blank" className="block">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 hover:border-green-500/30 hover:bg-green-500/[0.04] transition-all duration-300 cursor-pointer flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shrink-0">
                <FaWhatsapp className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold">WhatsApp Chat</h4>
                <p className="text-xs text-muted-foreground">
                  Direct message with Krishna
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Email Card */}
        <div className="w-full md:w-1/2">
          <div
            onClick={handleEmailClick}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300 cursor-pointer flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
              <FaEnvelope className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left overflow-hidden">
              <h4 className="text-sm font-semibold truncate">
                {copied ? "✓ Copied to Clipboard!" : "Official Email"}
              </h4>
              <p className="text-xs text-muted-foreground truncate font-mono">
                {EMAIL}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalBooking;
