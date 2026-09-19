import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import GooglePreferredButton from "@/components/common/google-preferred-button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata
export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | NewEra Automations",
    };
  }

  return {
    title: `${post.title} | NewEra Automations Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current one, max 3)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-accent leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-6 border-y border-white/10">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-white/50">Founder, NewEra Automations</p>
            </div>
          </div>
        </header>

        {/* Article Content - Simple Markdown Parser */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-accent prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary/90 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-white/80 prose-p:leading-relaxed prose-strong:text-white prose-li:text-white/80"
          dangerouslySetInnerHTML={{ 
            __html: parseMarkdown(post.content) 
          }}
        />

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full bg-white/5 text-sm text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Google Preferred Sources Follow Card */}
        <div className="mt-10">
          <GooglePreferredButton variant="card" />
        </div>

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold font-accent">Related Articles</h2>
            <Link 
              href="/blog" 
              className="hidden sm:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
            ))}
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="mt-32 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold font-accent mb-6 relative z-10">
            Inspired by what you read?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg relative z-10">
            Turn these concepts into reality for your business. Book a free consultation with our automation experts.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 relative z-10"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

// Very basic markdown parser for the specific content we have
function parseMarkdown(content: string) {
  let html = content;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  
  // Bold
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  
  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/<\/li>\n<li>/gim, '</li><li>');
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  
  // Paragraphs (anything that's not a tag and not empty)
  html = html.replace(/^(?!<[a-z])([^<>\n]+)$/gim, '<p>$1</p>');
  
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/gim, '');
  
  return html;
}
