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
import { Card } from "./ui/card";
import Link from "next/link";
import type { BlogPost } from "@/lib/mdx";

interface BlogPostHomeProps {
  posts: BlogPost[];
}

const BlogPostHome: React.FC<BlogPostHomeProps> = ({ posts }) => {
  return (
    <section id="blog" className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-primary/70 font-mono text-sm">
          Latest Writing
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Blog Posts</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-right mb-6"
      >
        <Link
          href="/blog"
          className="inline-flex items-center font-mono text-sm text-primary hover:underline"
        >
          View all blog posts
          <ExternalLinkIcon className="ml-1 h-3 w-3" />
        </Link>
      </motion.div>

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No featured blog posts yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="project-card">
                <div className="flex flex-col gap-4">
                  {/* Header with icon and title */}
                  <div className="flex items-start gap-3">
                    <BookOpenIcon className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-foreground">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer with metadata and read more */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <ClockIcon className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      Read more
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogPostHome;
