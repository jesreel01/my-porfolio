import React from "react";
import { motion } from "framer-motion";
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon, SendIcon } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold">Let's Connect</h3>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free
            to reach out to me through any of the channels below.
          </p>

          <div className="space-y-4 mt-6">
            <a href="mailto:jesreelmiole101@gmail.com" className="flex items-center group">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary mr-4 group-hover:bg-primary/10 transition-colors duration-200">
                <MailIcon className="h-5 w-5 text-primary/70" />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block group-hover:text-primary transition-colors duration-200">
                  jesreelmiole101@gmail.com
                </span>
              </div>
            </a>

            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Social Profiles</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm/>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
