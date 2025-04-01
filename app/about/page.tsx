"use client";

import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, GraduationCapIcon, BriefcaseIcon, HeartIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { ArrowUpIcon } from "lucide-react";
import Contact from "@/components/Contact";

const About = () => {
  return (
    <div className="pb-10">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary/70 font-mono text-sm">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-muted-foreground mb-4">
              I'm a passionate frontend developer with expertise in building user-centric web
              applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in
              creating intuitive and responsive interfaces that provide exceptional user
              experiences.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in web development began during the pandemic, where I learned programming
              on my own and discovered my passion for combining technical skills with creative
              problem-solving. Over the years, I've honed my abilities through professional
              experiences and personal projects, always staying updated with the latest technologies
              and best practices.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you’ll find me exploring new technologies or sharing my knowledge
              through technical writing and mentorship.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <CodeIcon className="h-5 w-5 mr-2 text-primary/70" />
                  Skills
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>HTML / CSS / Tailwind</li>
                  <li>Node.js / Express / NestJS</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-primary/70" />
                  Interests
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Architecture</li>
                  <li>Security</li>
                  <li>DevOps</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-5 flex items-center">
              <BriefcaseIcon className="h-5 w-5 mr-2 text-primary/70" />
              Experience
            </h3>

            <div className="space-y-5">
              <div className="border-l-2 border-muted pl-4 pb-5">
                <span className="text-xs font-mono text-muted-foreground">Jul 2022 - 2025</span>
                <h4 className="text-base font-semibold mt-1">Full-stack Developer</h4>
                <p className="text-sm text-muted-foreground">N-LITE</p>
              </div>

              <div className="border-l-2 border-muted pl-4 pb-5">
                <span className="text-xs font-mono text-muted-foreground">Jun 2021 - Jul 2022 </span>
                <h4 className="text-base font-semibold mt-1">React Developer Developer</h4>
                <p className="text-sm text-muted-foreground">Boxtypd Technologies</p>
              </div>

              <div className="border-l-2 border-muted pl-4 pb-5">
                <span className="text-xs font-mono text-muted-foreground">Jun 2021 - Aug 2021</span>
                <h4 className="text-base font-semibold mt-1">OJT / QA</h4>
                <p className="text-sm text-muted-foreground">Zzagl</p>
              </div>
            </div>

            {/* <h3 className="text-lg font-semibold mt-8 mb-5 flex items-center">
              <GraduationCapIcon className="h-5 w-5 mr-2 text-primary/70" />
              Education
            </h3>

            <div className="border-l-2 border-muted pl-4">
              <span className="text-xs font-mono text-muted-foreground">2012 - 2016</span>
              <h4 className="text-base font-semibold mt-1">BSc in Computer Science</h4>
              <p className="text-sm text-muted-foreground">STI College - General Santos</p>
            </div> */}
          </motion.div>
        </div>
      </section>
      <div className="border-t border-border my-20" />
      <Contact />
    </div>
  );
};

export default About;
