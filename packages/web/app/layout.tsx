import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { Public_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesreel",
  description:
    "Hi, I am Jesreel  Welcome to my personal blog, where I share my passion and expertise as a software developer. I love building software products that are innovative, scalable, and user-friendly. I have experience with various technologies, such as React, NodeJs, NestJs, and AWS, and many more. I enjoy working on projects that challenge me and help me learn new things.",
  keywords: [
    "Jesreel",
    "Jesreel.dev",
    "Jesreel John Miole",
    "Hiring",
    "Software developer",
    "Fullstack developer",
    "React",
    "NodeJs",
    "NestJs",
    "AWS",
    "Software Engineer",
    "Software Engineer",
  ],
  authors: [
    { name: "Jesreel John Miole", url: "https://github.com/jesreel01" },
  ],
  // openGraph: {
  //   type: "website",
  //   description:
  //     "'A collection of type-safe components written in React and Tailwind.'",
  //   images: ["https://neobrutalism-components.vercel.app/preview.png"],
  //   url: "https://neobrutalism-components.vercel.app/",
  //   title: "Neobrutalism components",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar title="Jesreel.dev" />
        {children}
        <div id="drawer"></div>
        <div id="modal"></div>
      </body>
    </html>
  );
}
