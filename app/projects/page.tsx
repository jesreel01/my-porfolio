"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";



const Projects = () => {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-primary/70 font-mono text-sm">My Work</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Projects</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A collection of my recent projects, showcasing my skills in web development, UI/UX design,
          and problem-solving.
        </p>
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
    </div>
  );
};

export default Projects;
