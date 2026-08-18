"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// 16 Completely Unique 4K Slides (Zero Duplicates, Zero Crop, 100% Full Title Visibility)
const ALL_16_SLIDES = [
  { src: "/scroll-slides/pdf-slide-5.png", alt: "Systems Showcase Cover", type: "canva4k" },
  { src: "/scroll-slides/pdf-slide-1.png", alt: "AI Agent Dashboard", type: "canva4k" },
  { src: "/scroll-slides/pdf-slide-4.png", alt: "Social Profile Extractor", type: "canva4k" },
  { src: "/scroll-slides/pdf-slide-2.png", alt: "Multi-Channel Outreach Engine", type: "canva4k" },
  { src: "/scroll-slides/pdf-slide-3.png", alt: "85% Qualified Leads Overview", type: "canva4k" },
  
  // Real n8n Workflow Screenshots (Slides 6 to 10)
  { src: "/workflows/n8n-pipeline-1.png", alt: "Real n8n Social Lead & Hashtag Scraper", type: "n8n" },
  { src: "/workflows/n8n-pipeline-2.png", alt: "Real n8n Async Profile Scraping Engine", type: "n8n" },
  { src: "/workflows/n8n-pipeline-3.png", alt: "Real n8n AI Agent Lead Scoring", type: "n8n" },
  { src: "/workflows/n8n-pipeline-4.png", alt: "Real n8n Automated Outreach Engine", type: "n8n" },
  { src: "/workflows/n8n-pipeline-5.png", alt: "Real n8n Lead Ingestion & CRM Sync", type: "n8n" },
  
  // 4K Widescreen System Slides (Slides 11 to 15 - All 100% Unique)
  { src: "/scroll-slides/pdf-slide-6.png", alt: "Real-Time CRM Sync Engine", type: "canva4k" },
  { src: "/scroll-slides/pdf-slide-7.png", alt: "24/7 AI Support Agent", type: "canva4k" },
  { src: "/scroll-slides/slide-8.png", alt: "Enterprise Cold Email Infrastructure", type: "canva" },
  { src: "/scroll-slides/slide-9.png", alt: "AI Support Waveform Interface", type: "canva" },
  { src: "/scroll-slides/slide-1.png", alt: "Master Systems Architecture", type: "canva" },
];

const TOTAL_SLIDES = ALL_16_SLIDES.length; // 15 images
const TOTAL_SLOTS = TOTAL_SLIDES + 1;       // 16 slots (15 slides + Slide 16 Final About)
const redColor = "oklch(59.71% 0.23 23.86)";

const AboutScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isFinalSlideActive, setIsFinalSlideActive] = useState(false);

  // Pre-load all 16 slide images
  useEffect(() => {
    ALL_16_SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current || !pinWrapperRef.current || !slidesContainerRef.current)
        return;

      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinWrapperRef.current,
          scrub: 0.35,
          onUpdate: (self) => {
            const p = self.progress; // 0.0 to 1.0

            // Symmetrical Bi-Directional Index Calculation (Scroll Down & Scroll Up)
            const idx = Math.min(
              Math.floor(p * TOTAL_SLOTS),
              TOTAL_SLOTS - 1
            );
            setActiveSlideIndex(idx);

            // Slide 16 Final About Screen triggers ONLY on the last slot (idx >= 15 or progress >= 0.93)
            if (idx >= TOTAL_SLIDES || p >= 0.93) {
              setIsFinalSlideActive(true);
            } else {
              setIsFinalSlideActive(false);
            }
          },
        },
      });

      if (textRef.current) {
        const lines = textRef.current.querySelectorAll<HTMLElement>("[data-reveal-line]");
        tl.fromTo(
          lines,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          0.93
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0c0d0e]" style={{ height: `${TOTAL_SLOTS * 45}vh` }}>
      <div ref={pinWrapperRef} className="relative h-screen w-full overflow-hidden bg-[#0c0d0e]">
        {/* Centered Container with Top Offset Padding (pt-24 md:pt-28) so Navbar NEVER covers top headlines */}
        <div ref={slidesContainerRef} className="absolute inset-0 h-full w-full flex items-center justify-center pt-20 pb-6 px-4 md:pt-24 md:pb-8 md:px-10">
          {ALL_16_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 h-full w-full flex items-center justify-center pt-20 pb-8 px-4 md:pt-24 md:pb-12 md:px-12 transition-opacity duration-300 ease-out ${
                activeSlideIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                decoding="sync"
                loading="eager"
                className="max-h-full max-w-full object-contain object-center select-none rounded-xl shadow-2xl mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Slide Counter Badge (Top Right) */}
        <div className="absolute top-20 right-8 z-30 px-4 py-1.5 rounded-full border border-white/20 bg-black/80 backdrop-blur-md text-white font-mono text-xs tracking-widest pointer-events-none shadow-xl">
          {isFinalSlideActive ? "SLIDE 16 / 16 — ABOUT US" : `SLIDE ${activeSlideIndex + 1} / 16`}
        </div>

        {/* Scroll Hint */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none transition-opacity duration-300"
          style={{ opacity: activeSlideIndex === 0 ? 1 : 0 }}
        >
          <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-white/70">Scroll To Explore 16 Systems</span>
          <div className="w-4 h-6 border border-white/40 rounded-full flex justify-center p-0.5">
            <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>

        {/* SLIDE 16: PURE HIGH-CONTRAST DARK FINALE ABOUT US SCREEN */}
        <div
          ref={textRef}
          className={`absolute inset-0 z-40 bg-[#0c0d0e] transition-opacity duration-500 ${
            isFinalSlideActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
          }`}
        >
          {/* Red Corner Brackets */}
          <div className="absolute top-10 left-10 w-10 h-10 border-t-2 border-l-2 md:top-14 md:left-14" style={{ borderColor: redColor }} />
          <div className="absolute bottom-10 left-10 w-10 h-10 border-b-2 border-l-2 md:bottom-14 md:left-14" style={{ borderColor: redColor }} />
          <div className="absolute top-10 right-10 w-10 h-10 border-t-2 border-r-2 md:top-14 md:right-14" style={{ borderColor: redColor }} />
          <div className="absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 md:bottom-14 md:right-14" style={{ borderColor: redColor }} />

          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-20 lg:px-28 pt-20 md:pt-24 pb-12">
            {/* Left Side Content */}
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* Badge */}
              <p
                data-reveal-line
                className="mb-4 text-xs font-mono uppercase tracking-[0.35em] flex items-center gap-2"
                style={{ color: redColor }}
              >
                <span>✦</span>
                <span>ABOUT US</span>
                <span>✦</span>
              </p>

              {/* Main Heading */}
              <h2
                data-reveal-line
                className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]"
              >
                We don&apos;t just build{" "}
                <span
                  className="font-normal italic"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: redColor }}
                >
                  systems
                </span>{" "}
                — we build growth.
              </h2>

              {/* Subtext */}
              <p
                data-reveal-line
                className="mb-8 text-base text-white/85 leading-relaxed max-w-xl sm:text-lg"
              >
                NewEra Automations builds intelligent AI workflows, chatbots, and automation pipelines that help businesses capture more leads, close faster, and operate leaner. No fluff. Just results.
              </p>

              {/* Red Accent Line */}
              <div
                data-reveal-line
                className="w-20 h-0.5 mb-8"
                style={{ backgroundColor: redColor }}
              />

              {/* Chips */}
              <div data-reveal-line className="flex flex-wrap items-center gap-3 mb-10">
                {["AI AGENTS", "WORKFLOWS", "LEAD GEN", "AUTOMATION"].map((chip, idx) => (
                  <span key={chip} className="flex items-center gap-3 text-xs font-mono tracking-widest text-white/90 uppercase">
                    {idx > 0 && <span style={{ color: redColor }}>●</span>}
                    <span>{chip}</span>
                  </span>
                ))}
              </div>

              {/* Red CTA Link Button */}
              <a
                data-reveal-line
                href="#contact"
                className="inline-flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-white bg-white/10 hover:bg-primary px-6 py-3.5 rounded-xl border border-white/15 hover:border-primary transition-all duration-300 shadow-xl cursor-pointer group"
              >
                <span>LET&apos;S BUILD TOGETHER</span>
                <span style={{ color: redColor }} className="group-hover:translate-x-1 transition-transform">✦</span>
              </a>
            </div>

            {/* Right Side B2B Performance Metrics Card (Balances the Screen Beautifully) */}
            <div className="hidden lg:flex flex-col gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl max-w-sm w-full shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: redColor }} />
                <span className="text-xs font-mono uppercase tracking-widest text-white/80 font-semibold">Engine Performance</span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">10+</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mt-1">Live AI Workflows</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight" style={{ color: redColor }}>&lt;200ms</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mt-1">Agent Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">99.8%</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mt-1">Execution Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 tracking-tight">0%</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 mt-1">Bounce Lead Verification</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>STATUS: OPERATIONAL</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* NewEra Logo Bottom Left */}
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black text-[10px] font-bold">N</div>
            <span className="text-xs font-mono uppercase text-white/60 tracking-widest">NewEra Automations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScrollSection;
