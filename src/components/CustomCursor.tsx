"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10001] hidden md:block">
      <motion.div
        className="w-5 h-5 rounded-full bg-white mix-blend-difference absolute"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="absolute w-10 h-10 rounded-full border border-neon-green/50 -translate-x-1/2 -translate-y-1/2"
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
      />
    </div>
  );
}
