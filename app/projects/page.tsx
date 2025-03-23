"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

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
    <div>
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
              key={project.id}
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
