"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full group">
        <div className="relative h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Cover Image Container */}
          <div 
            className="relative w-full h-48 sm:h-56 transition-transform duration-500 group-hover:scale-105 overflow-hidden flex items-center justify-center p-6"
            style={{ background: post.coverImage }}
          >
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Ambient Center Glow */}
            <div className="absolute w-24 h-24 bg-primary/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            {/* Glowing Brand Icon Badge */}
            <div className="relative z-10 w-12 h-12 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <span className="text-lg font-bold font-mono tracking-tighter">NE</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white font-accent line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-white/70 text-sm mb-6 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>

            {/* Meta & Action */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
