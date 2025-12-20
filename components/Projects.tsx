"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";

const Projects: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section id="projects" className={`mb-8 ${className || ''}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <span className="text-muted-foreground font-mono text-sm">
          Featured Work
        </span>
        <div className="flex items-baseline justify-between mt-1">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <a
            href="https://github.com/jesreel01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-4"
          >
            More projects on GitHub
            <ExternalLinkIcon className="ml-1 h-3 w-3" />
          </a>
        </div>
      </motion.div>

      {/* Projects List */}
      <div>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
