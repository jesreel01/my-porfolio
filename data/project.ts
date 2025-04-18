interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
  }
  
  
export const projects: Project[] = [
    {
      id: 1,
      title: "Nexcent",
      description:
        "Agency website for a digital marketing company, showcasing their services and portfolio.",
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "",
      codeUrl: "https://github.com/jesreel01/nexcent",
    },
  ];