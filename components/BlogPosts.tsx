"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/mdx";

const BlogPosts: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="space-y-16" ref={ref}>
      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No blog posts found.</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-border pb-8 last:border-0"
          >
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center text-muted-foreground text-sm">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2 hover:text-primary transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            <p className="text-muted-foreground mb-4">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Read more <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.article>
        ))
      )}

      {/* {posts.length > 0 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )} */}
    </div>
  );
};

export default BlogPosts;
