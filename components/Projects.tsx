
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring product search, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio website with smooth animations and responsive design, showcasing my skills and projects.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A clean and intuitive weather application that provides real-time weather data and forecasts for locations worldwide.",
    tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary/70 font-mono text-sm">Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects</h2>
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
              <div className="project-card group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <CodeIcon className="h-5 w-5 mr-2 text-primary/70" />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:self-end">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-background transition-colors duration-200"
                      aria-label="View Demo"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-background transition-colors duration-200"
                      aria-label="View Code"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-sm text-primary hover:underline"
          >
            More projects on GitHub
            <ExternalLinkIcon className="ml-1 h-3 w-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
