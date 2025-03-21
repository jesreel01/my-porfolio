"use client";

import React, { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!visible) {
        setVisible(true);
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    
    const handleMouseEnter = () => {
      document.body.classList.add("cursor-none");
      setVisible(true);
    };
    
    const handleMouseLeave = () => {
      document.body.classList.remove("cursor-none");
      setVisible(false);
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button');
      
      setHovering(!!isLink);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleLinkHover);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleLinkHover);
      document.body.classList.remove("cursor-none");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 flex items-center justify-center transition-all duration-100 ease-out ${
          clicking ? "scale-90" : ""
        } ${hovering ? "scale-150" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <div className={`h-1 w-1 rounded-full bg-primary ${hovering ? "opacity-50" : ""}`}></div>
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border border-primary ${
              hovering ? "opacity-100 scale-75" : "opacity-50 scale-0"
            } transition-all duration-200`}
          ></div>
        </div>
      </div>
      
      {/* Trailing effect */}
      <div
        className="fixed pointer-events-none z-40 h-1 w-1 rounded-full bg-primary/30 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};

export default Cursor;
