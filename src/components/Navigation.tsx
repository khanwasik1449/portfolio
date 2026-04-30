"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-neon-green font-bold text-lg tracking-wider hover:text-white transition-colors"
          >
            <span className="text-white">{"{"}</span>WASIK<span className="text-white">{"}"}</span>
          </a>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-neon-green ${
                  active === item.href.replace("#", "")
                    ? "text-neon-green border-b border-neon-green"
                    : "text-white/60"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-neon-green transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-2xl uppercase tracking-widest text-white hover:text-neon-green transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
