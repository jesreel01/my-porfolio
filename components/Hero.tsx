"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

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
    <section id="home" className="flex flex-col justify-center relative pb-14 lg:pb-18">
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

          <div className="h-10 overflow-hidden font-mono text-lg text-muted-foreground mt-2 mb-8 sm:h-20">
            <p className="whitespace-nowrap">
              {typedText}
              <span className="cursor-line"></span>
            </p>
          </div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            View my work
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
