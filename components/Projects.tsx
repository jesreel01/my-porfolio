"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";

const Projects: React.FC<{className?: string}> = ({className}) => {
  return (
    <section id="projects" className={`mb-4 lg:mb-6 ${className || ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-primary/70 font-mono text-sm">Featured Work</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-right mb-6"
      >
        <a
          href="https://github.com/jesreel01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-mono text-sm text-primary hover:underline"
        >
          More projects on GitHub
          <ExternalLinkIcon className="ml-1 h-3 w-3" />
        </a>
      </motion.div>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
