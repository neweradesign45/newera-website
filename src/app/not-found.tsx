import Link from "next/link";
import { IconArrowLeft, IconBrandWhatsapp, IconHome, IconTerminal2 } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f0f0ef] flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-primary selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
          <IconTerminal2 className="w-4 h-4 text-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/70">
            ERR_ROUTE_NOT_FOUND // 404
          </span>
        </div>

        {/* Big Code */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
          This system route does not exist.
        </h2>

        <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed mb-10">
          The node or workflow sequence you are searching for has been migrated, decommissioned, or never existed in production.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <IconHome className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white font-medium text-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            <IconArrowLeft className="w-4 h-4" />
            Explore Workflows
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-sm hover:bg-emerald-500/20 transition-all duration-300"
          >
            <IconBrandWhatsapp className="w-4 h-4" />
            Direct WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center text-xs font-mono text-white/30 tracking-widest uppercase">
        NewEra Automations // Operational Excellence
      </div>
    </main>
  );
}
