"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaWhatsapp } from "react-icons/fa6";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(6, "WhatsApp / Phone number is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(3, "Tell us what you want automated"),
});

type FormData = z.infer<typeof schema>;

const PROJECT_TYPES = [
  "LEAD GEN AI",
  "WHATSAPP & CRM",
  "SUPPORT AGENT",
  "CUSTOM WORKFLOW",
] as const;

const RED = "oklch(59.71% 0.23 23.86)";
const RED_RGBA = "rgba(201, 58, 42,";

const WORDS = [
  { text: "YOUR", accent: false },
  { text: "BUSINESS.", accent: true },
  { text: "OUR", accent: false },
  { text: "AGENTS.", accent: true },
];

const SUCCESS_WORDS = [
  { text: "INQUIRY", accent: false },
  { text: "DISPATCHED.", accent: true },
];

const CORNERS = [
  { id: "tl", top: 20, left: 20 },
  { id: "tr", top: 20, right: 20 },
  { id: "bl", bottom: 20, left: 20 },
  { id: "br", bottom: 20, right: 20 },
] as const;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CollabModal({ isOpen, onClose }: Props) {
  const [selectedType, setSelectedType] = useState<string>("LEAD GEN AI");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  // Reset state after close animation
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setIsSuccess(false);
        setSubmitError(false);
        reset();
        setSelectedType("LEAD GEN AI");
        setIsSubmitting(false);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmittedName(data.name);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a957aa51-07fa-46b1-a740-35a1b4143049",
          name: data.name,
          phone: data.phone,
          email: data.email,
          service_needed: selectedType || "Custom Automation",
          message: data.message,
          subject: `⚡ Modal Lead Transmission: ${data.name} (${data.phone}) - ${selectedType}`,
          from_name: "NewEra Automations Lead Engine",
        }),
      });

      const result = await res.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderBottom = (field: string) =>
    `1px solid ${focusedField === field ? RED : "rgba(255,255,255,0.18)"}`;

  const baseInput: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    outline: "none",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "var(--font-poppins)",
    fontWeight: "400",
    padding: "6px 0",
    transition: "border-color 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-poppins)",
    fontSize: "9px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    display: "block",
    marginBottom: "2px",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-poppins)",
    fontSize: "10px",
    color: RED,
    marginTop: "3px",
    letterSpacing: "0.04em",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Collaboration Form"
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(5, 5, 5, 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Chrome autofill dark reset */}
          <style dangerouslySetInnerHTML={{ __html: `
            .collab-dark-input:-webkit-autofill,
            .collab-dark-input:-webkit-autofill:hover,
            .collab-dark-input:-webkit-autofill:focus {
              -webkit-text-fill-color: #ffffff !important;
              -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset !important;
              transition: background-color 5000s ease-in-out 0s !important;
            }
          `}} />

          {/* ── CARD SHELL ── */}
          <motion.div
            data-lenis-prevent="true"
            className="relative w-full max-w-4xl max-h-[96vh] md:max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.97, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "#090909",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Corner accents */}
            {CORNERS.map((c) => (
              <div
                key={c.id}
                aria-hidden="true"
                className="hidden md:block absolute w-2.5 h-2.5 pointer-events-none"
                style={{
                  top: "top" in c ? c.top : undefined,
                  bottom: "bottom" in c ? c.bottom : undefined,
                  left: "left" in c ? c.left : undefined,
                  right: "right" in c ? c.right : undefined,
                  borderTop: "top" in c ? `1px solid ${RED}` : undefined,
                  borderBottom: "bottom" in c ? `1px solid ${RED}` : undefined,
                  borderLeft: "left" in c ? `1px solid ${RED}` : undefined,
                  borderRight: "right" in c ? `1px solid ${RED}` : undefined,
                }}
              />
            ))}

            {/* ── HEADER ── */}
            <div
              className="flex items-center justify-between px-5 md:px-8 py-3.5 shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: RED,
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "9px",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: "500",
                  }}
                >
                  NEWERA AUTOMATIONS • INTAKE ENGINE
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close form"
                className="group flex items-center gap-2 cursor-pointer transition-colors p-1"
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                  className="group-hover:text-white"
                >
                  CLOSE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px",
                    lineHeight: 1,
                  }}
                  className="group-hover:text-white"
                >
                  ✕
                </span>
              </button>
            </div>

            {/* ── BODY (Scrollable with custom smooth scroll) ── */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto px-5 md:px-8 py-5 md:py-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
              style={{
                overscrollBehavior: "contain",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
                {/* ── LEFT — Typography Panel ── */}
                <div className="lg:w-[38%] flex flex-col justify-between shrink-0">
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "9px",
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: RED,
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>✦</span>
                      <span>CUSTOM WORKFLOW INTAKE</span>
                    </div>

                    {WORDS.map(({ text, accent }) => (
                      <h2
                        key={text}
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontSize: "clamp(28px, 3.8vw, 48px)",
                          lineHeight: 0.95,
                          color: accent ? RED : "white",
                          fontWeight: "bold",
                          letterSpacing: "-0.02em",
                          margin: 0,
                        }}
                      >
                        {text}
                      </h2>
                    ))}

                    <p
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "11px",
                        lineHeight: "1.6",
                        color: "rgba(255,255,255,0.45)",
                        marginTop: "16px",
                        maxWidth: "260px",
                      }}
                    >
                      We engineer autonomous AI agents and enterprise automation pipelines. Get a tailored architecture breakdown in under 2 hours.
                    </p>
                  </div>

                  <div className="hidden lg:block pt-6">
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
                      Direct Founder Review • 0 Cost Audit
                    </p>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div
                  className="hidden lg:block w-px self-stretch shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />

                {/* ── RIGHT — Form / Success ── */}
                <div className="lg:w-[62%] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="modal-name" style={labelStyle}>
                            YOUR NAME <span style={{ color: RED }}>*</span>
                          </label>
                          <input
                            id="modal-name"
                            {...register("name")}
                            placeholder="e.g. John Doe / Rahul Sharma"
                            className="collab-dark-input"
                            style={{
                              ...baseInput,
                              borderBottom: borderBottom("name"),
                            }}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                          />
                          {errors.name && (
                            <p style={errorStyle}>↳ {errors.name.message}</p>
                          )}
                        </div>

                        {/* WhatsApp / Phone & Email Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* WhatsApp / Phone */}
                          <div>
                            <label htmlFor="modal-phone" style={labelStyle}>
                              WHATSAPP / PHONE <span style={{ color: RED }}>*</span>
                            </label>
                            <input
                              id="modal-phone"
                              type="tel"
                              {...register("phone")}
                              placeholder="e.g. +91 98765 43210"
                              className="collab-dark-input"
                              style={{
                                ...baseInput,
                                borderBottom: borderBottom("phone"),
                              }}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                            />
                            {errors.phone && (
                              <p style={errorStyle}>↳ {errors.phone.message}</p>
                            )}
                          </div>

                          {/* Email */}
                          <div>
                            <label htmlFor="modal-email" style={labelStyle}>
                              WORK EMAIL <span style={{ color: RED }}>*</span>
                            </label>
                            <input
                              id="modal-email"
                              type="email"
                              {...register("email")}
                              placeholder="you@company.com"
                              className="collab-dark-input"
                              style={{
                                ...baseInput,
                                borderBottom: borderBottom("email"),
                              }}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                            />
                            {errors.email && (
                              <p style={errorStyle}>↳ {errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Project Type */}
                        <div>
                          <label style={labelStyle}>SERVICE NEEDED</label>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {PROJECT_TYPES.map((type) => {
                              const active = selectedType === type;
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => setSelectedType(type)}
                                  className="text-[11px] px-3 py-1.5 rounded-lg transition-all duration-200 border"
                                  style={{
                                    fontFamily: "var(--font-poppins)",
                                    letterSpacing: "0.06em",
                                    borderColor: active ? RED : "rgba(255,255,255,0.12)",
                                    backgroundColor: active ? RED : "rgba(255,255,255,0.03)",
                                    color: active ? "white" : "rgba(255,255,255,0.65)",
                                    fontWeight: active ? "600" : "400",
                                    cursor: "pointer",
                                  }}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="modal-message" style={labelStyle}>
                            WHAT DO YOU WANT AUTOMATED? <span style={{ color: RED }}>*</span>
                          </label>
                          <textarea
                            id="modal-message"
                            {...register("message")}
                            rows={2}
                            placeholder="Briefly describe your manual bottlenecks or workflow requirements..."
                            className="collab-dark-input"
                            style={{
                              ...baseInput,
                              resize: "none",
                              lineHeight: "1.5",
                              borderBottom: borderBottom("message"),
                            }}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                          />
                          {errors.message && (
                            <p style={errorStyle}>↳ {errors.message.message}</p>
                          )}
                        </div>

                        {/* Submit Error */}
                        {submitError && (
                          <p style={{ ...errorStyle, marginBottom: "8px" }}>
                            ↳ Could not dispatch. Please message directly on WhatsApp!
                          </p>
                        )}

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative overflow-hidden w-full rounded-xl transition-transform hover:scale-[1.01] active:scale-[0.99]"
                          style={{
                            border: `1px solid ${RED}`,
                            backgroundColor: RED,
                            padding: "14px 20px",
                            cursor: isSubmitting ? "wait" : "pointer",
                            boxShadow: `0 8px 20px -4px ${RED_RGBA} 0.45)`,
                          }}
                        >
                          <span
                            style={{
                              position: "relative",
                              zIndex: 1,
                              fontFamily: "var(--font-poppins)",
                              fontSize: "11px",
                              letterSpacing: "0.22em",
                              textTransform: "uppercase",
                              color: "white",
                              fontWeight: "600",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                            }}
                          >
                            {isSubmitting ? "DISPATCHING INQUIRY..." : "REQUEST FREE AUDIT & ROADMAP →"}
                          </span>
                        </motion.button>
                      </form>
                    ) : (
                      /* Success State */
                      <div className="py-6 flex flex-col justify-center">
                        {SUCCESS_WORDS.map(({ text, accent }) => (
                          <h3
                            key={text}
                            style={{
                              fontFamily: "var(--font-poppins)",
                              fontSize: "clamp(28px, 4vw, 50px)",
                              lineHeight: 0.95,
                              color: accent ? RED : "white",
                              fontWeight: "bold",
                              margin: 0,
                            }}
                          >
                            {text}
                          </h3>
                        ))}

                        <div
                          style={{
                            height: "1px",
                            background: `linear-gradient(to right, ${RED}, transparent)`,
                            marginTop: "16px",
                            marginBottom: "16px",
                          }}
                        />

                        <p
                          style={{
                            fontFamily: "var(--font-poppins)",
                            fontSize: "12px",
                            lineHeight: "1.7",
                            color: "rgba(255,255,255,0.7)",
                            marginBottom: "20px",
                          }}
                        >
                          Thank you {submittedName}! Your automation brief has been delivered directly to Founder Krishna Prajapati.
                          <br />
                          We will review your requirements and reach out via WhatsApp &amp; Email within 2 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3">
                          <a
                            href={`https://wa.me/917078994915?text=${encodeURIComponent(
                              `Hi Krishna, I just submitted an inquiry on neweraautomations.com regarding automation for ${submittedName}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium px-5 py-3 text-xs transition-all w-full sm:w-auto justify-center shadow-lg shadow-green-900/30"
                          >
                            <FaWhatsapp className="w-4 h-4" />
                            <span>Prefer Instant Chat? WhatsApp Krishna</span>
                          </a>

                          <button
                            type="button"
                            onClick={onClose}
                            style={{
                              fontFamily: "var(--font-poppins)",
                              fontSize: "10px",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.45)",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            className="hover:text-white py-2"
                          >
                            ← RETURN TO SITE
                          </button>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
