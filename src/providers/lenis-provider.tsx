"use client";

import React, { useEffect, useState } from "react";
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
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        window.innerWidth < 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // On touch/mobile devices, use native GPU-composited scrolling (0ms lag, 100% fluid)
  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
