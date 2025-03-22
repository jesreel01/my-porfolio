"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import Link from "next/link";

// Sample blog posts data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a Portfolio Website with React and Tailwind CSS",
    excerpt: "Learn how to create a modern portfolio website using React and Tailwind CSS with smooth animations and responsive design.",
    date: "June 15, 2023",
    readTime: "8 min read",
    slug: "building-portfolio-with-react-tailwind",
    tags: ["React", "Tailwind CSS", "Web Development"]
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    excerpt: "A comprehensive guide to TypeScript generics - what they are, why they're useful, and how to use them effectively in your projects.",
    date: "July 22, 2023",
    readTime: "10 min read",
    slug: "understanding-typescript-generics",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
  {
    id: 3,
    title: "Creating Custom Hooks in React",
    excerpt: "Dive deep into creating and using custom hooks in React to make your code more reusable and your components cleaner.",
    date: "August 5, 2023",
    readTime: "7 min read",
    slug: "creating-custom-hooks-react",
    tags: ["React", "JavaScript", "Hooks"]
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Discover practical techniques for improving the performance of your React applications - from memoization to code splitting.",
    date: "September 18, 2023",
    readTime: "12 min read",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Web Development"]
  },
  {
    id: 5,
    title: "An Introduction to Framer Motion",
    excerpt: "Get started with Framer Motion, a production-ready animation library for React that makes implementing complex animations easy.",
    date: "October 3, 2023",
    readTime: "9 min read",
    slug: "introduction-to-framer-motion",
    tags: ["React", "Animation", "Framer Motion"]
  }
];

const BlogPosts: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="space-y-16">
      {BLOG_POSTS.map((post, index) => (
        <motion.article 
          key={post.id}
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
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md">
                {tag}
              </span>
            ))}
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </motion.article>
      ))}
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPosts;
