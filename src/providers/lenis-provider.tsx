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
 * Desktop: Butter-smooth 60FPS inertial scroll.
 * Mobile: 100% native compositor hardware scroll (Zero JS lag, zero touch delay).
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

    // Smooth recovery on frame drops
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
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        syncTouch: false, // 100% native compositor hardware touch scroll on phones
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
