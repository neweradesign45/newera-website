"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutMe from "@/components/sections/about/about-me";
import CalBooking from "@/components/sections/home/cal-booking";
import Testimonials from "@/components/sections/home/testimonials";
import { TimelineDemo } from "@/components/sections/home/timeline-demo";
import N8nWorkflowShowcase from "@/components/sections/home/n8n-workflow-showcase";
import Preloader from "@/components/common/preloader";
import CollabSec from "@/components/sections/home/collab-section";
import AboutScrollSection from "@/components/sections/about/about-scroll-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handleLoaded} />}
      </AnimatePresence>

      {/* Hero Section */}
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

      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-24">
        <CalBooking />
      </section>
    </div>
  );
}
