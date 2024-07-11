import React from "react";
import PostPreviewCard from "../post-preview-card";
import ProjectPreviewCard from "../project-preview-card";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-medium tracking-wider">Projects</h2>

      <div className="flex mt-6 justify-between space-x-5">
        <ProjectPreviewCard />
        <ProjectPreviewCard />
        <ProjectPreviewCard />
      </div>

      <div className="mt-5 text-rose-100/80">
        <Link href="/projects">
          See all projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
