"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn("top-0 left-0 right-0 z-40 py-3 bg-white transition-transform duration-300")}
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
              { href: "/projects", label: "Projects", disabled: false },
              { href: "/blog", label: "Blog", disabled: false },
              { href: "/about", label: "About", disabled: false },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.disabled ? {} : item.href}
                  className={cn(
                    "nav-link",
                    isActive(item.href) && "text-primary",
                    item.disabled && "text-muted-foreground cursor-not-allowed opacity-50"
                  )}
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
