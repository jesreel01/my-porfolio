"use client"

import React from 'react'
import clsx from "clsx"
import { useIntersection } from "react-use"
import { cn } from '@/lib/utils'

const IntersectionSwap = ({
    nav,
    children,
    }: {
    nav: React.ReactNode
    children: React.ReactNode
}) => {
    const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-100px",
  })

  // we do the reverse `intersection.isIntersecting` to ensure we show the
  // correct state even before React initializes
  let showPrimary = false
  if (intersection && !intersection.isIntersecting) {
    showPrimary = true
  }

  return (
    <>
      <div
        className={cn(
          "sticky top-6 z-30 -mx-px transition duration-75 will-change-transform",
          {
            "-translate-y-2 scale-95 opacity-0": !showPrimary,
            "opacity-100": showPrimary,
          },
        )}
      >
        {nav}
      </div>
      <div ref={intersectionRef}>
        <div
          className={cn("transition duration-150 will-change-transform", {
            "-translate-y-2 scale-[0.98] opacity-0": showPrimary,
            "opacity-100 delay-100": !showPrimary,
          })}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default IntersectionSwap