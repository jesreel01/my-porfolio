import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { CodeIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard : React.FC<ProjectCardProps> = ({ codeUrl, demoUrl, description, tags, title }) => {
  return (
    <Card className="project-card">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-grow">
          <CardHeader className="flex-row items-center">
            <CodeIcon className="h-5 w-5 mr-2 text-primary/70 mb-0" />
            <h3 className="text-xl font-bold">{title}</h3>
          </CardHeader>
          <CardDescription className="text-muted-foreground text-base my-4">
            {description}
          </CardDescription>
          <CardContent className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </CardContent>
        </div>
        <div className="flex items-center gap-3 md:self-end">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-background transition-colors duration-200"
            aria-label="View Demo"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-background transition-colors duration-200"
            aria-label="View Code"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
