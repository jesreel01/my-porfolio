import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export default function Home() {
  return (
    <main className=" min-h-[100svh] flex-col bg-[#FAF4F0] py-20 px-5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pt-6">
        <section className="mt-2 sm:mt-6 mb-12 flex flex-col items-center gap-x-14 xl:flex-row">
          <div>
            <h1 className="text-4xl font-bold sm:text-6xl">Hi, I am Jesreel</h1>
            <br />
            <h2 className="text-xl font-normal">
              Welcome to my personal blog, where I share my passion and
              expertise as a software developer. I love building software
              products that are innovative, scalable, and user-friendly. I have
              experience with various technologies, such as React, NodeJs,
              NestJs, and many more. I enjoy working on projects that challenge
              me and help me learn new things.
            </h2>

            <p className="text-xl font-normal mt-4">
              I&apos;m open to collaboration—feel free to reach out and connect
              with me.
            </p>

            <div className="flex items-center  mt-4">
              <p className="text-xl">Social Links:</p>
              <div className="flex gap-3 ml-3 items-center">
                <a target="_blank" href="https://github.com/jesreel01" className="hover:text-slate-600 hover:rotate-6 transition" >
                  <FaGithub size={28} />
                </a>

                <a target="_blank" href="https://linkedin.com/in/jesreel-john-miole-ba2ba0215"  className="hover:text-slate-600 hover:rotate-6 transition">
                  <AiOutlineLinkedin size={34} />
                </a>
                <a href="https://twitter.com/imjesreel" target="_blank">
                <FiTwitter size={30} className="hover:text-slate-600 hover:rotate-6 transition"/>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full sm:mt-5">
            <div className="grid grid-rows-3 gap-6 py-12 w-full max-w-96 text-center sm-12 sm:gap-8">
              <a
                target="_blank"
                // href=""
                className="rounded-md border-2 bg-white border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                Projects
              </a>
              <a
                target="_blank"
                // href=""
                aria-disabled
                className="rounded-md border-2 bg-white border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                Blogs
              </a>
              <a
                target="_blank"
                className="rounded-md border-2  bg-white border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
