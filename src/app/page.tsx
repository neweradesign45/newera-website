"use client";

import dynamic from "next/dynamic";
import AboutMe from "@/components/sections/about/about-me";

// High-Performance Below-The-Fold Dynamic Imports
// Slashes initial client JS payload so Hero renders in <100ms with 0 delay
const AboutScrollSection = dynamic(
  () => import("@/components/sections/about/about-scroll-section"),
  { ssr: true }
);
const TimelineDemo = dynamic(
  () => import("@/components/sections/home/timeline-demo").then((mod) => mod.TimelineDemo),
  { ssr: true }
);
const N8nWorkflowShowcase = dynamic(
  () => import("@/components/sections/home/n8n-workflow-showcase"),
  { ssr: true }
);
const CollabSec = dynamic(
  () => import("@/components/sections/home/collab-section"),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/sections/home/testimonials"),
  { ssr: true }
);
const FAQSection = dynamic(
  () => import("@/components/sections/home/faq-section"),
  { ssr: true }
);
const CalBooking = dynamic(
  () => import("@/components/sections/home/cal-booking"),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
      {/* Hero Section — Renders Instantly at 0ms (Zero Preloader Gate) */}
      <section id="hero" className="w-full scroll-mt-24">
        <AboutMe />
      </section>

      {/* About Scroll Section */}
      <section id="about" className="w-full">
        <AboutScrollSection />
      </section>

      {/* Workflows & Case Studies Timeline */}
      <section id="projects" className="w-full scroll-mt-24">
        <TimelineDemo />
      </section>

      {/* Live n8n Architecture Showcase */}
      <section className="w-full">
        <N8nWorkflowShowcase />
      </section>

      {/* Custom Workflow Intake Section */}
      <CollabSec />

      {/* Testimonials */}
      <Testimonials />

      {/* Multi-Industry FAQ Section (GEO & SEO Optimized) */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-24">
        <CalBooking />
      </section>
    </div>
  );
}
