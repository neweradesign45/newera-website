"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import PhraseAnimation from "@/components/common/phrase-reveal";
import { WHATSAPP_LINK, EMAIL } from "@/lib/constants";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const CalBooking = () => {
  const containerRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full py-10 md:py-20 overflow-hidden px-4 md:px-8"
    >
      {/* 1. Heading with scroll-triggered reveal */}
      <div
        ref={headerRef}
        className="container relative z-10 mb-16 px-6 text-center mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={
            headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary uppercase tracking-widest"
        >
          Get In Touch
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={
            headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <PhraseAnimation phrase="Ready  To  Automate " />
            <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              <PhraseAnimation
                phrase="Your  Business?"
                className="text-primary"
              />
            </span>
          </h3>
        </motion.div>

        {/* Sweeping line */}
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
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Tell us what you need — we&apos;ll show you how automation can transform it.
        </motion.div>
      </div>

      {/* 2. Contact Cards */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
        {/* WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <Link href={WHATSAPP_LINK} target="_blank">
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-green-500/30 hover:bg-green-500/[0.04] transition-all duration-500 cursor-pointer text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors duration-300">
                <FaWhatsapp className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Quick response, direct conversation
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-green-500 group-hover:gap-3 transition-all duration-300">
                Message Now
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <Link href={`mailto:${EMAIL}`}>
            <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-500 cursor-pointer text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <FaEnvelope className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed proposals & documentation
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                Send Email
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CalBooking;
