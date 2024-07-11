import Link from "next/link";
import React from "react";

const ProjectPreviewCard = () => {
  return (
    <Link
      href=""
      className="block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"
    >
      <h2 className="font-medium text-lg tracking-wider text-rose-100/80">
        Project name
      </h2>
      <p className="mt-2">My portfolio built with Next.js, Tailwind</p>
    </Link>
  );
};

export default ProjectPreviewCard;
