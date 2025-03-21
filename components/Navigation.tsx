"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  //   useEffect(() => {
  //     const controlNavbar = () => {
  //       if (typeof window !== "undefined") {
  //         if (window.scrollY > 100) {
  //           // Adjust this value as needed
  //           if (window.scrollY > lastScrollY) {
  //             // Scrolling down
  //             setIsVisible(false);
  //           } else {
  //             // Scrolling up
  //             setIsVisible(true);
  //           }
  //         } else {
  //           // At the top
  //           setIsVisible(true);
  //         }
  //         setLastScrollY(window.scrollY);
  //       }
  //     };

  //     window.addEventListener("scroll", controlNavbar);
  //     return () => {
  //       window.removeEventListener("scroll", controlNavbar);
  //     };
  //   }, [lastScrollY]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 py-3 bg-white shadow-sm transition-transform duration-300",
        !isVisible && "-translate-y-full"
      )}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="font-mono text-lg font-medium">
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              <span className="text-primary">&gt;</span> Jesreel
            </Link>
          </div>

          <ul className="flex items-center space-x-8">
            {[
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <li
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={cn("nav-link", isActive(item.href) && "text-primary")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
