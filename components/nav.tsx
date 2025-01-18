import Link from "next/link";
import React from "react";

const menu = [
  {
    href: "/",
    label: "Home",
    disable: false,
  },
  {
    href: "/about",
    label: "About",
    disable: false,
  },
  {
    href: "/projects",
    label: "Projects",
    disable: true,
  },
  {
    href: "/blog",
    label: "Blog",
    disable: true,
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 sm:space-x-8 font-medium">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
