"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const biosLines = [
  "MODULAR BIOS v6.00PG",
  "Energy Star Ally",
  "",
  "Detecting primary master ... WASIK_AHMED_KHAN",
  "Detecting primary slave  ... NONE",
  "Detecting secondary master ... CREATIVE_MIND",
  "Detecting secondary slave  ... NONE",
  "",
  "Checking RAM ... 640K OK",
  "Initializing peripherals ...",
  "  > Keyboard: DETECTED",
  "  > Mouse: DETECTED",
  "  > Display: ONLINE",
  "",
  "Loading portfolio modules...",
  "  > About.exe .............. LOADED",
  "  > Projects.exe ........... LOADED",
  "  > Experience.exe ......... LOADED",
  "  > Skills.exe ............. LOADED",
  "  > Contact.exe ............ LOADED",
  "",
  "All systems operational.",
  "",
  "Press any key to continue...",
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine < biosLines.length) {
      const delay = biosLines[currentLine] === "" ? 50 : 80 + Math.random() * 120;
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, biosLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#000080] text-white font-mono p-6 md:p-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20" />
      <div className="flex flex-col h-full max-w-4xl mx-auto relative z-20">
        <div className="flex justify-between items-start mb-8 border-b-2 border-white pb-4">
          <div className="text-xl md:text-2xl font-bold">MODULAR BIOS v6.00PG</div>
          <div className="text-sm md:text-base opacity-70">Energy Star Ally</div>
        </div>

        <div className="flex-1 overflow-auto font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {visibleLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={
                i === 0
                  ? "text-xl font-bold mb-4"
                  : i === visibleLines.length - 1
                  ? "text-neon-green"
                  : ""
              }
            >
              {line}
              {i === visibleLines.length - 1 && showCursor && "_"}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t-2 border-white flex justify-between text-xs md:text-sm">
          <div>Press any key to continue</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-gradient-to-b from-transparent via-white to-transparent animate-scanline" />
    </motion.div>
  );
}
