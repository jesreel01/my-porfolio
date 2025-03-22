"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";

// Using the same project data from Projects component
const projects = [
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
  {
    id: 4,
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks, setting priorities, and tracking progress with collaborative features.",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media platforms, providing insights on audience engagement and content performance.",
    tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description:
      "A web application allowing users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    tags: ["React", "GraphQL", "Node.js", "Styled Components"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="pt-24">
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
    </div>
  );
};

export default Projects;
