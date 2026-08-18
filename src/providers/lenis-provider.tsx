"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children?: React.ReactNode;
};

/**
 * High-Performance Lenis-GSAP Synchronization Engine.
 * Configured for 60FPS desktop smooth scrolling & zero-lag 2GB RAM mobile performance.
 */
function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Keep ScrollTrigger updated on Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's optimized 60FPS ticker
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    // Re-enable lagSmoothing for buttery smooth recovery on frame drops
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  return null;
}

const LenisWrapper = ({ children }: Props) => {
  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        syncTouch: false, // Ensures native 60fps GPU-accelerated touch on low-end 2GB RAM mobiles
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
