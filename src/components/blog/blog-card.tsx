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

          {/* Cover Image Placeholder */}
          <div 
            className="w-full h-48 sm:h-56 transition-transform duration-500 group-hover:scale-105"
            style={{ background: post.coverImage }}
          />

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
