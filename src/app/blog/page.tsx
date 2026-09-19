import { Metadata } from "next";
import { blogPosts } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GooglePreferredButton from "@/components/common/google-preferred-button";

export const metadata: Metadata = {
  title: "Blog & Insights | NewEra Automations",
  description: "Explore the latest insights on AI agents, business automation, WhatsApp chatbots, and how to scale your business efficiently.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.15),transparent_50%)] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-white/90">Latest Articles</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-accent mb-6 tracking-tight">
          Insights & <span className="text-primary italic">Resources</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-white/70 font-light">
          Discover how AI automation is reshaping industries. Practical guides, case studies, and strategies to scale your operations in 2026.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>

      {/* Google Preferred Sources Banner */}
      <section className="px-6 max-w-5xl mx-auto mt-16">
        <GooglePreferredButton variant="card" />
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold font-accent mb-6 relative z-10">
            Ready to automate your business?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg relative z-10">
            Stop losing time on repetitive tasks. Let's build intelligent systems that work for you 24/7.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 relative z-10"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
