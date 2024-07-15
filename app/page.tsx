import ProfileImg, { ProfileImageLarge } from "@/components/profile-img";
import FeaturedPosts from "@/components/sections/featured-posts";
import Projects from "@/components/sections/projects";
import { Github, Linkedin, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="mr-6">
          <ProfileImageLarge />
        </div>

        <div>
          <h1 className="text-4xl font-medium tracking-wide">Jesreel</h1>
          <h2 className="text-rose-100/50 text-lg font-medium mt-1">
            Full Stack Developer
          </h2>
        </div>
      </div>

      <p className="text-lg text-rose-100/70 mt-6">
        I love building innovative, scalable, and user-friendly software
        products. With experience in React, Node.js, Nest.js, and more, I enjoy
        tackling challenging projects that help me learn and grow.
      </p>


      <Projects />
      <FeaturedPosts />
    </div>
  );
}
