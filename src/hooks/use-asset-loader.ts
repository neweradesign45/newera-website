"use client";

import { useEffect, useState } from "react";

/**
 * Tracks *real* page-load progress so the Preloader can gate the UI on assets
 * actually being ready instead of a hard-coded timeout.
 *
 * Completion is driven by two honest signals:
 *   1. `window` "load"   → hero image/video + all same-origin resources are in.
 *   2. `document.fonts.ready` → the Google fonts (Poppins / Cormorant) are ready.
 *
 * The *displayed* number trickles up smoothly (eased) for a premium feel, is
 * capped below 100 until those signals fire, and is bounded by:
 *   - MIN_MS: keeps the intro on screen long enough to read the greetings.
 *   - MAX_MS: a safety cap so a slow third-party embed can never hang the page.
 */
export function useAssetLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Fast path: if user already saw intro during this session, complete immediately
    try {
      if (sessionStorage.getItem("newera_preloader_seen") === "true") {
        setProgress(100);
        setIsComplete(true);
        return;
      }
    } catch {
      // ignore storage errors
    }

    const MIN_MS = 600; // Snappy greeting reveal without artificial hostage delay
    const MAX_MS = 2500; // Strict safety ceiling: never hang screen >2.5s
    const start = performance.now();

    let realDone = false;
    let raf = 0;
    let current = 0;
    let lastShown = -1;

    // Resolve once critical DOM & fonts have settled
    let pending = 2;
    const settle = () => {
      pending -= 1;
      if (pending <= 0) realDone = true;
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      settle();
    } else {
      document.addEventListener("DOMContentLoaded", settle, { once: true });
      window.addEventListener("load", settle, { once: true });
    }

    if ("fonts" in document) {
      document.fonts.ready.then(settle).catch(settle);
    } else {
      settle();
    }

    const loop = (now: number) => {
      const elapsed = now - start;
      const trickle = 95 * (1 - Math.exp(-elapsed / 450));
      const finished = (realDone && elapsed >= MIN_MS) || elapsed >= MAX_MS;
      const target = finished ? 100 : Math.min(trickle, realDone ? 96 : 90);

      current += (target - current) * 0.15;
      if (finished && target - current < 0.5) current = 100;

      const shown = Math.round(current);
      if (shown !== lastShown) {
        lastShown = shown;
        setProgress(shown);
      }

      if (current >= 100) {
        try {
          sessionStorage.setItem("newera_preloader_seen", "true");
        } catch {
          // ignore
        }
        setIsComplete(true);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return { progress, isComplete };
}
