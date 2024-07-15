import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 pb-24">
      <ul className="flex space-x-6 font-medium">
        <li>
          <Link href="https://www.linkedin.com/in/jesreel-john-miole-ba2ba0215/">LinkedIn</Link>
        </li>
        <li>
          <Link href="https://x.com/imjesreel">Twitter</Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/profile.php?id=100012019380515">Facebook</Link>
        </li>
        <li>
          <Link href="https://github.com/jesreel01">Github</Link>
        </li>
      </ul>

      <div className="text-rose-100/50 mt-5 w-full">
        <p>Built with Next.js, Tailwind CSS, and TypeScript.</p>
      </div>
    </footer>
  );
};

export default Footer;
