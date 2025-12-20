import React from "react";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  codeUrl,
  demoUrl,
  description,
  tags,
  title,
  index = 0,
}) => {
  return (
    <article className="group py-6 border-b border-border/40 last:border-b-0">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-medium">
            {title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="View Demo"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          )}
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="View Code"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
