import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-8", className)}
      {...props}
    >
      {/* Chevron > */}
      <path
        d="M15 10L35 30L15 50"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Underscore _ */}
      <rect x="45" y="42" width="20" height="8" fill="currentColor" />
      
      {/* Vertical Block Cursor [] */}
      <rect
        x="75"
        y="10"
        width="15"
        height="40"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
};

export default Logo;
