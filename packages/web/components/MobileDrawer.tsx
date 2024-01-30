"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
// import Drawer from "../neobrutalism/Drawer";
// import components from "@/data/components";
import { useRouter } from "next/navigation";

export default function MobileDrawer() {
  const router = useRouter();

  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const handleLinkClick = (path: string) => {
    setIsDrawerActive(false);
    router.push(path);
  };

  return (
    <>
      <button
        onClick={() => setIsDrawerActive(true)}
        className="hidden items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m600:flex"
      >
        <FaBars className="h-6 w-6 m500:h-4 m500:w-4" />
      </button>

    </>
  );
}
