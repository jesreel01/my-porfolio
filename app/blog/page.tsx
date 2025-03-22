"use client";

import React from "react";
import { motion } from "framer-motion";
import BlogPosts from "@/components/BlogPosts";

const Blog = () => {
  return (
      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary/70 font-mono text-sm">My Writings</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Blog</h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            I write about web development, design, and my experiences as a developer. Here's a
            collection of my latest articles.
          </p>
        </motion.div>

        <BlogPosts />
      </div>
  );
};

export default Blog;
