"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import ProjectCard from "./ProjectCard";

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
    description:
      "A modern e-commerce platform built with React and Node.js, featuring product search, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website with smooth animations and responsive design, showcasing my skills and projects.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A clean and intuitive weather application that provides real-time weather data and forecasts for locations worldwide.",
    tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-secondary/30 mb-8">
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
    </section>
  );
};

export default Projects;
