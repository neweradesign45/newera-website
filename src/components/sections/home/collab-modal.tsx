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
  message: z.string().min(5, "Tell us what you want automated"),
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
  { id: "tl", top: 24, left: 24 },
  { id: "tr", top: 24, right: 24 },
  { id: "bl", bottom: 24, left: 24 },
  { id: "br", bottom: 24, right: 24 },
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

  // Escape key + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
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
      }, 900);
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
          subject: `⚡ New Inbound Lead: ${data.name} (${data.phone}) - ${selectedType}`,
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
    `1px solid ${focusedField === field ? RED : "rgba(255,255,255,0.13)"}`;

  const baseInput: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    outline: "none",
    color: "white",
    fontSize: "15px",
    fontFamily: "var(--font-poppins)",
    fontWeight: "300",
    padding: "10px 0",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-poppins)",
    fontSize: "9px",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.38)",
    display: "block",
    marginBottom: "4px",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-poppins)",
    fontSize: "11px",
    color: RED,
    marginTop: "5px",
    letterSpacing: "0.04em",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Collaboration Form"
          className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "rgba(5, 5, 5, 0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* ── AMBIENT RED GLOW ── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: "500px",
                height: "500px",
                background: `radial-gradient(circle, ${RED_RGBA} 0.08) 0%, transparent 70%)`,
                filter: "blur(90px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                width: "400px",
                height: "400px",
                background: `radial-gradient(circle, ${RED_RGBA} 0.05) 0%, transparent 70%)`,
                filter: "blur(90px)",
              }}
            />
          </div>

          {/* ── CARD SHELL ── */}
          <motion.div
            className="relative w-full h-full md:h-auto md:max-w-5xl md:max-h-[92vh] flex flex-col overflow-hidden"
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "#080808",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* ── CORNER ACCENTS (desktop only) ── */}
            {CORNERS.map((c) => (
              <div
                key={c.id}
                aria-hidden="true"
                className="hidden md:block absolute w-3 h-3 pointer-events-none"
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
              className="flex items-center justify-between px-6 md:px-12 py-5 shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    backgroundColor: RED,
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  NEWERA AUTOMATIONS • INTAKE ENGINE
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close form"
                className="group flex items-center gap-2 cursor-pointer transition-colors"
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px 0",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "9px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
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
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-white"
                >
                  ✕
                </span>
              </button>
            </div>

            {/* ── BODY (Scrollable on small screens) ── */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-full">
                {/* ── LEFT — Typography Panel ── */}
                <div className="lg:w-[40%] flex flex-col justify-center">
                  <div
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: RED,
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>✦</span>
                    <span>INITIATE COLLABORATION</span>
                  </div>

                  {WORDS.map(({ text, accent }) => (
                    <h2
                      key={text}
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "clamp(34px, 4.5vw, 60px)",
                        lineHeight: 0.94,
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
                      fontSize: "12px",
                      lineHeight: "1.7",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "24px",
                      maxWidth: "280px",
                    }}
                  >
                    We build autonomous AI agents &amp; enterprise workflow automations. Get a customized architecture and proposal in under 2 hours.
                  </p>
                </div>

                {/* Vertical Divider */}
                <div
                  className="hidden lg:block w-px self-stretch shrink-0"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />

                {/* ── RIGHT — Form / Success ── */}
                <div className="lg:w-[60%] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name */}
                        <div>
                          <label htmlFor="modal-name" style={labelStyle}>
                            YOUR NAME <span style={{ color: RED }}>*</span>
                          </label>
                          <input
                            id="modal-name"
                            {...register("name")}
                            placeholder="e.g. John Doe / Rahul Sharma"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          <div className="flex flex-wrap gap-2 mt-2">
                            {PROJECT_TYPES.map((type) => {
                              const active = selectedType === type;
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => setSelectedType(type)}
                                  className="text-xs px-3.5 py-2 rounded-lg transition-all duration-200 border"
                                  style={{
                                    fontFamily: "var(--font-poppins)",
                                    letterSpacing: "0.08em",
                                    borderColor: active ? RED : "rgba(255,255,255,0.1)",
                                    backgroundColor: active ? RED : "rgba(255,255,255,0.03)",
                                    color: active ? "white" : "rgba(255,255,255,0.6)",
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
                            rows={3}
                            placeholder="Briefly describe your current manual bottlenecks or workflow requirements..."
                            style={{
                              ...baseInput,
                              resize: "none",
                              lineHeight: "1.65",
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
                          <p style={{ ...errorStyle, marginBottom: "12px" }}>
                            ↳ Could not dispatch. Please message directly on WhatsApp!
                          </p>
                        )}

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative overflow-hidden w-full rounded-xl transition-transform hover:scale-[1.01]"
                          style={{
                            border: `1px solid ${RED}`,
                            backgroundColor: RED,
                            padding: "18px 24px",
                            cursor: isSubmitting ? "wait" : "pointer",
                            boxShadow: `0 8px 24px -4px ${RED_RGBA} 0.4)`,
                          }}
                        >
                          <span
                            style={{
                              position: "relative",
                              zIndex: 1,
                              fontFamily: "var(--font-poppins)",
                              fontSize: "11px",
                              letterSpacing: "0.24em",
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
                      <div className="py-8 flex flex-col justify-center">
                        {SUCCESS_WORDS.map(({ text, accent }) => (
                          <h3
                            key={text}
                            style={{
                              fontFamily: "var(--font-poppins)",
                              fontSize: "clamp(34px, 4.5vw, 60px)",
                              lineHeight: 0.94,
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
                            marginTop: "24px",
                            marginBottom: "20px",
                          }}
                        />

                        <p
                          style={{
                            fontFamily: "var(--font-poppins)",
                            fontSize: "13px",
                            lineHeight: "1.7",
                            color: "rgba(255,255,255,0.6)",
                            marginBottom: "28px",
                          }}
                        >
                          Thank you {submittedName}! Your automation brief has been delivered directly to Founder Krishna Prajapati.
                          <br />
                          We will review your requirements and reach out within 2 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <a
                            href={`https://wa.me/917078994915?text=${encodeURIComponent(
                              `Hi Krishna, I just submitted an inquiry on neweraautomations.com regarding automation for ${submittedName}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium px-5 py-3 text-xs transition-all w-full sm:w-auto justify-center"
                          >
                            <FaWhatsapp className="w-4 h-4" />
                            <span>Prefer Instant Chat? WhatsApp Krishna</span>
                          </a>

                          <button
                            type="button"
                            onClick={onClose}
                            style={{
                              fontFamily: "var(--font-poppins)",
                              fontSize: "11px",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.4)",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            className="hover:text-white"
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
