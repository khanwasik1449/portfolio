"use client";

import { useState, useEffect } from "react";
import BootScreen from "@/components/BootScreen";
import CRTEffects from "@/components/CRTEffects";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      if (!booted) setBooted(true);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [booted]);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0]">
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {booted && (
        <>
          <CustomCursor />
          <CRTEffects />
          <Navigation />

          {/* Progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-neon-green origin-left z-[9999] mix-blend-difference shadow-[0_0_10px_#ccff00,0_0_20px_#ccff00]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative px-6">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 3 }}
              >
                <p className="text-neon-green text-sm md:text-base uppercase tracking-[0.3em] mb-4">
                  Hello, World!
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                  <span className="text-white">I am</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">
                    Wasik Ahmed Khan
                  </span>
                </h1>
                <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                  Automation Engineer &bull; System Designer &bull; Problem Solver
                  <br />
                  Transforming manual processes into intelligent, scalable digital systems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 4.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#projects"
                  className="px-8 py-4 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all uppercase tracking-wider font-bold text-sm"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-white/30 text-white hover:border-neon-green hover:text-neon-green transition-all uppercase tracking-wider font-bold text-sm"
                >
                  Get in Touch
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 6 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
              >
                <a
                  href="#about"
                  className="text-white/40 hover:text-neon-green transition-colors animate-bounce"
                >
                  <ChevronDown size={32} />
                </a>
              </motion.div>
            </div>

            {/* Background grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </section>

          {/* Sections */}
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />

          {/* Footer */}
          <footer className="border-t border-white/10 py-8 px-6 text-center">
            <p className="text-white/40 text-sm">
              Designed & Built by{" "}
              <span className="text-neon-green">Wasik Ahmed Khan</span> &copy;{" "}
              {new Date().getFullYear()}
            </p>
            <p className="text-white/20 text-xs mt-2 font-mono">
              Powered by Next.js &bull; Tailwind CSS &bull; Framer Motion
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
