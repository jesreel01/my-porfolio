"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  BookOpenIcon,
} from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/mdx";

interface BlogPostHomeProps {
  posts: BlogPost[];
}

const BlogPostHome: React.FC<BlogPostHomeProps> = ({ posts }) => {
  return (
    <section id="blog" className="mb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <span className="text-muted-foreground font-mono text-sm">
          Latest Writing
        </span>
        <div className="flex items-baseline justify-between mt-1">
          <h2 className="text-2xl font-semibold">Blog Posts</h2>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-4"
          >
            View all blog posts
            <ExternalLinkIcon className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </motion.div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-sm">No featured blog posts yet.</p>
      ) : (
        <div>
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-6 border-b border-border/40 last:border-b-0"
            >
              {/* Title with icon */}
              <div className="flex items-start gap-3 mb-2">
                <BookOpenIcon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-medium">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer with date, time, and read more */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Read more
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogPostHome;
