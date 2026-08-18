"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  BRAND_NAME,
  FOUNDER_NAME,
  WHATSAPP_LINK,
} from "@/lib/constants";

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0c0d0e] text-white overflow-hidden flex flex-col items-center justify-between pt-28 pb-10 px-6"
    >
      {/* Background Noise & Ambient Radial Glow */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Founder Identity Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-30 text-center max-w-2xl mx-auto mb-4"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-primary px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 inline-block mb-3 shadow-lg">
          ✦ {FOUNDER_NAME} ✦
        </span>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          Founder &amp; Chief Automation Architect
        </h1>
      </motion.div>

      {/* Main Center Founder Portrait Card with Floating Stat Badges */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-center my-auto">

        {/* Left Floating Stat Card */}
        <StatCard
          position="hidden lg:block left-4 top-1/3 -translate-y-1/2"
          value="100%"
          label="Autonomous AI Workflows"
          delay={0.4}
        />

        {/* Right Floating Stat Card */}
        <StatCard
          position="hidden lg:block right-4 top-1/3 -translate-y-1/2"
          value="<200ms"
          label="Execution Latency"
          delay={0.6}
        />

        {/* Centered Founder Photo Frame (No navbar overlap, clean glassmorphic frame) */}
        <motion.div
          style={{ y: yImage }}
          className="relative group rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_20px_80px_rgba(0,0,0,0.9)] max-w-sm md:max-w-md w-full"
        >
          {/* Subtle Ambient Red Border Glow on Hover */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-founder.png"
            alt={`${FOUNDER_NAME} - ${BRAND_NAME}`}
            decoding="sync"
            loading="eager"
            className="w-full h-auto max-h-[520px] object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Bottom Card Title Banner */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/90 font-semibold">
              NewEra Automations
            </span>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Vertical Side Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <div className="flex items-center gap-4 [writing-mode:vertical-rl] rotate-180">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
            Our Expertise
          </span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span className="text-xs font-bold">AI Automation</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span className="text-xs font-bold">Workflow Design</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span className="text-xs font-bold">Business Growth</span>
        </div>
      </motion.div>

      {/* Bottom Info Strip (desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:flex relative z-30 w-full max-w-6xl px-6 flex-row justify-between items-center text-white pt-4 border-t border-white/10"
      >
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-mono uppercase text-white/50 tracking-wider">
            What We Build
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hover:text-primary transition-colors cursor-pointer">
              AI Agents
            </span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span className="hover:text-primary transition-colors cursor-pointer">
              Smart Workflows
            </span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span className="hover:text-primary transition-colors cursor-pointer">
              Growth Systems
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-[11px] font-mono text-right text-white/50 tracking-wider">
            Direct Connect
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href={WHATSAPP_LINK} target="_blank">
              <span className="hover:text-primary transition-colors cursor-pointer">
                WhatsApp
              </span>
            </Link>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <Link href="mailto:neweraagents45@gmail.com" target="_blank">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Email
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Floating Stat Card Component
const StatCard = ({
  position,
  label,
  value,
  delay,
}: {
  position: string;
  label: string;
  value: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`absolute ${position} z-30`}
    >
      <div className="backdrop-blur-xl bg-white/[0.04] border border-white/15 p-5 rounded-2xl shadow-2xl hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 w-44">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-1">{value}</h3>
        <p className="text-[11px] text-white/60 uppercase tracking-wider font-mono leading-tight">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
