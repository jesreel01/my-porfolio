"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build things for the web.";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col justify-center relative pb-8 lg:pb-18 lg:pt-3"
    >
      <div className="max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <span className="text-muted-foreground font-mono mb-3">Hello, my name is</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Jesreel</span>
            <span className="block text-primary/80">Full Stack Developer</span>
          </h1>

          <div className="h-10 overflow-hidden font-mono text-lg text-muted-foreground mb-2 sm:h-10 sm:mt-2 sm:*:mb-4 lg:mb-8">
            <p className="whitespace-nowrap">
              {typedText}
              <span className="cursor-line"></span>
            </p>
          </div>

          {/* <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            View my work
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          </motion.a> */}
          <div className="flex space-x-3.5">
            <a
              href="https://github.com/jesreel01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/jesreel01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
