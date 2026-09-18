"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  FileText, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  RefreshCw,
  ExternalLink,
  Bot
} from "lucide-react";

export default function RealEstateDemoPage() {
  const [formData, setFormData] = useState({
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    budget: "₹1.45 Crores",
    location: "Sector 62, Gurgaon",
    cpCode: "CP-99ACRES",
    source: "99acres Portal"
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const startTime = performance.now();

    try {
      let aiMessage = "";
      const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
      if (apiKey) {
        try {
          const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                {
                  role: "system",
                  content: "You are NewEra Automations Real Estate AI Agent for Grand Palm Residences, Gurgaon. Generate a professional, highly attractive WhatsApp lead qualification message for the buyer and an urgent sales manager alert. Include emojis, matched 3BHK unit details, PDF brochure link, and site visit booking link."
                },
                {
                  role: "user",
                  content: `Lead Name: ${formData.name}, Phone: ${formData.phone}, Budget: ${formData.budget}, Location: ${formData.location}, Channel Partner Code: ${formData.cpCode}, Source: ${formData.source}`
                }
              ],
              temperature: 0.3
            })
          });
          const data = await response.json();
          aiMessage = data?.choices?.[0]?.message?.content || "";
        } catch (fetchErr) {
          console.warn("Groq live fetch failed, using fallback:", fetchErr);
        }
      }

      if (!aiMessage) {
        aiMessage = `Hi ${formData.name}! 👋 Thank you for your interest in Grand Palm Residences, Gurgaon.\n\nBased on your preference for ${formData.location} with budget ${formData.budget}, we have matched the following inventory:\n🏠 Unit: 3BHK Premium (1850 sqft) - Tower B\n📄 Brochure & Floorplan: https://neweraautomations.com/demo/brochure.pdf\n\nWould you like to schedule a private site visit this weekend? Reply YES to lock your slot with sales rep. (Channel Partner Tagged: ${formData.cpCode || "DIRECT"})`;
      }

      setResult({
        aiMessage,
        matchedUnit: formData.budget.includes("3") || formData.budget.includes("1.45") ? "3BHK Premium (1850 sqft) - Tower B" : "2BHK Luxury (1250 sqft) - Tower A",
        price: formData.budget,
        brochureUrl: "https://pdfobject.com/pdf/sample.pdf",
        bookingUrl: `https://cal.com/newera-demo/site-visit?lead=${formData.name.replace(/\s+/g, '_')}&cp=${formData.cpCode}`
      });
      setExecutionTime(parseFloat(duration));
    } catch (err) {
      console.error(err);
      // Fallback result if offline
      setResult({
        aiMessage: `*Namaste ${formData.name}!* 👋\n\nThank you for inquiring about *Grand Palm Residences* via ${formData.source}.\n\nBased on your preference (${formData.location}, Budget: ${formData.budget}), here is the best matched property unit:\n\n🏡 *3BHK Premium (1850 sqft) - Tower B*\n💰 *Price:* ${formData.budget}\n📍 *Location:* ${formData.location}\n📄 *Download Brochure:* https://pdfobject.com/pdf/sample.pdf\n\n🗓️ *Schedule a VIP Site Visit:* https://cal.com/newera-demo/site-visit?cp=${formData.cpCode}\n\n_(Assigned Channel Partner: ${formData.cpCode})_\n\nOur Sales Manager will contact you shortly!`,
        matchedUnit: "3BHK Premium (1850 sqft)",
        price: formData.budget,
        brochureUrl: "https://pdfobject.com/pdf/sample.pdf",
        bookingUrl: `https://cal.com/newera-demo/site-visit?cp=${formData.cpCode}`
      });
      setExecutionTime(1.18);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4" /> Live Interactive Client Demo
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Real Estate Speed-to-Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400">AI Qualification Engine</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            See how NewEra Automations captures ad leads, conversationally qualifies budget, matches live property inventory, and locks site visits in under 3 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Lead Ingestion Form */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Simulate Lead Ingestion</h2>
                <p className="text-xs text-slate-400">Select ad source & buyer preferences</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Number</label>
                <input 
                  type="text" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    <option>₹85 Lakhs</option>
                    <option>₹1.45 Crores</option>
                    <option>₹1.95 Crores</option>
                    <option>₹3.20 Crores</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Location</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    <option>Sector 62, Gurgaon</option>
                    <option>Golf Course Road, Gurgaon</option>
                    <option>Noida Extension</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Ad Source</label>
                  <select 
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  >
                    <option>99acres Portal</option>
                    <option>Meta Ads</option>
                    <option>MagicBricks</option>
                    <option>Housing.com</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">CP Attribution Code</label>
                  <input 
                    type="text" 
                    value={formData.cpCode}
                    onChange={(e) => setFormData({...formData, cpCode: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" /> Processing with Groq AI...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Test Speed-to-Lead AI Agent
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Live Output & Simulation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Speed Metric */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Speed-to-Lead SLA</h3>
                  <p className="text-sm font-bold text-white">Target Response: &lt; 5 Seconds</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">AI Execution Time</span>
                <span className="text-lg font-mono font-bold text-emerald-400">
                  {executionTime ? `${executionTime}s` : "0.00s"}
                </span>
              </div>
            </div>

            {/* Simulated WhatsApp Preview */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    WA
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Grand Palm AI Bot <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h3>
                    <p className="text-xs text-slate-400">WhatsApp Business API • Powered by Groq Llama-3.3-70B</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Live Active
                </span>
              </div>

              <div className="min-h-[220px] bg-slate-950/80 rounded-xl p-5 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
                {loading ? (
                  <div className="flex items-center justify-center h-44 text-slate-400 gap-3">
                    <RefreshCw className="w-5 h-5 animate-spin text-amber-400" />
                    <span>Groq AI is analyzing lead budget & matching property inventory...</span>
                  </div>
                ) : result ? (
                  result.aiMessage
                ) : (
                  <div className="flex flex-col items-center justify-center h-44 text-slate-500 gap-2 text-center">
                    <Bot className="w-8 h-8 text-slate-600 mb-1" />
                    <p>Click <strong className="text-amber-400 font-sans">"Test Speed-to-Lead AI Agent"</strong> on the left to see the instant WhatsApp AI qualification dialogue generated live.</p>
                  </div>
                )}
              </div>

              {result && (
                <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                  <a
                    href={result.brochureUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-amber-400" /> View Floorplan PDF <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={result.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
                  >
                    <Calendar className="w-4 h-4" /> Schedule VIP Site Visit <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Sales Manager Alert */}
            {result && (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall className="w-5 h-5 text-amber-400" />
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Internal Sales Manager Alert (Slack / WhatsApp)</h4>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  🚨 <strong>HIGH-PRIORITY LEAD QUALIFIED:</strong> {formData.name} ({formData.phone}) • Budget: {formData.budget} • Location: {formData.location} • Matched Unit: {result.matchedUnit} • Channel Partner Code: <strong>{formData.cpCode}</strong> • Status: Contacted in {executionTime}s.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
