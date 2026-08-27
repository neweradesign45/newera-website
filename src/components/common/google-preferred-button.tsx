"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface GooglePreferredButtonProps {
  className?: string;
  variant?: "compact" | "card";
}

function PreferredSourceWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && containerRef.current.childElementCount === 0) {
      const btn = document.createElement("div");
      btn.setAttribute("google-add-preferred-source-btn", "");
      btn.setAttribute("data-theme", "dark");
      containerRef.current.appendChild(btn);
    }
  }, []);

  return <div ref={containerRef} className="min-h-[40px] flex items-center" />;
}

export default function GooglePreferredButton({
  className = "",
  variant = "card",
}: GooglePreferredButtonProps) {
  if (variant === "compact") {
    return (
      <div className={`${className}`}>
        <PreferredSourceWidget />
      </div>
    );
  }

  return (
    <div
      className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:border-primary/40 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <p className="text-white/90 font-medium text-sm">Add NewEra on Google AI</p>
          <p className="text-white/50 text-xs mt-0.5">
            See us more in Google Search, AI Overviews & Discover feeds.
          </p>
        </div>
      </div>
      <PreferredSourceWidget />
    </div>
  );
}
