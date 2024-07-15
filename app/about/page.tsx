import { ProfileImageLarge } from "@/components/profile-img";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8 ">
      <h1 className="text-4xl font-medium tracking-wide">About me</h1>

      <div className="flex space-y-6 lg:space-x-5 mt-10 text-base text-rose-100/80 leading-relaxed">
        <div className="space-y-5 mt-0">
          {/* <ProfileImageLarge height={150} width={150} /> */}
          <Image
            src="/profile.png"
            alt="A photo of Jesreel"
            className="rounded-full float-left mr-6 mb-1 "
            width={130}
            height={130}
          />

          <p className="!mt-0">
            Hi, I&apos;m Jesreel John Miole, a Fullstack Developer from the
            Pearl of the Orient Seas, Philippines.
          </p>

          <p>
            I&apos;ve been passionate about technology since I was young. I
            enjoyed tinkering with my phone, like installing custom ROMs, and
            combining electronics with programming to create fun projects.
            During the pandemic, I started studying programming seriously. I got
            a job as a QA intern, and that&apos;s where it all started. I became
            deeply interested in web development and began my journey as a
            developer. It was challenging at first, as I learned everything from
            scratch and was self-taught until I reached my current proficiency
            level.
          </p>

          <p>
            I haven&apos;t stopped learning. To this date, I am continuously
            studying React, Next.js, TailwindCSS, and MaterialUI for the
            frontend, and NestJS and ExpressJS for the backend. I&apos;m also
            invested in learning about Distributed Systems and I am passionately
            exploring this area.
          </p>

          <p>
            In addition to my technical skills, I thrive on tackling complex
            problems and finding innovative solutions. My journey has taught me
            the importance of perseverance and continuous improvement. I believe
            in building software products that are not only functional but also
            scalable and user-friendly. I enjoy collaborating with others and
            sharing knowledge to create impactful projects. Looking ahead, I am
            excited about the endless possibilities in the tech world and I am
            eager to contribute to groundbreaking advancements.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-medium tracking-wide">Links</h2>
        <ul className="list-disc ml-8 mt-4 space-y-4">
          <li>
            Github:{" "}
            <Link
              className="underline decoration-1 underline-offset-4"
              href="https://github.com/jesreel01"
            >
              @jesreel01
            </Link>
          </li>
          <li>
            LinkedIn:{" "}
            <Link
              className="underline decoration-1 underline-offset-4"
              href="https://www.linkedin.com/in/jesreel01"
            >
              @jesreel01
            </Link>
          </li>
          <li>
            X:{" "}
            <Link
              className="underline decoration-1 underline-offset-4"
              href="https://x.com/imjesreel"
            >
              @imjesreel
            </Link>
          </li>
          <li>
            Facebook:{" "}
            <Link
              className="underline decoration-1 underline-offset-4"
              href="https://facebook.com/profile.php?id=100012019380515"
            >
              facebook.com/profile.php?id=100012019380515
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default page;
