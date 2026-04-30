"use client";

import { motion } from "framer-motion";
import { Terminal, User, MapPin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Terminal className="text-neon-green" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            <span className="text-neon-green">./</span>about_me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-white/20 p-6 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <User size={16} className="text-neon-green" />
                <span className="text-sm text-white/60">profile.txt</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                <span className="text-neon-green">const</span>{" "}
                <span className="text-white">developer</span>{" "}
                <span className="text-neon-green">=</span>{" "}
                <span className="text-white/80">{"{"}</span>
              </p>
              <p className="text-white/80 leading-relaxed ml-4 mb-2">
                <span className="text-neon-cyan">name</span>:{" "}
                <span className="text-white/60">"Wasik Ahmed Khan"</span>,
              </p>
              <p className="text-white/80 leading-relaxed ml-4 mb-2">
                <span className="text-neon-cyan">role</span>:{" "}
                <span className="text-white/60">"IT Operations &amp; Systems Engineer"</span>,
              </p>
              <p className="text-white/80 leading-relaxed ml-4 mb-2">
                <span className="text-neon-cyan">bio</span>:{" "}
                <span className="text-white/60">
                  "I am an IT Operations & Automation Engineer specializing in
                  building smart digital systems that streamline workflows and
                  improve efficiency. I work extensively with Google Workspace,
                  Apps Script, and cloud tools to automate processes like
                  approvals, payments, reporting, and data management. My focus
                  is on turning manual operations into scalable, reliable
                  systems that save time and reduce errors."
                </span>
                ,
              </p>
              <p className="text-white/80 leading-relaxed ml-4 mb-6">
                <span className="text-neon-cyan">status</span>:{" "}
                <span className="text-white/60">"Available for hire"</span>
              </p>
              <p className="text-white/80 leading-relaxed">
                <span className="text-white/80">{"}"}</span>;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-white/70">
              <MapPin size={18} className="text-neon-green" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <Mail size={18} className="text-neon-green" />
              <a
                href="mailto:khanwasik02@gmail.com"
                className="hover:text-neon-green transition-colors"
              >
                khanwasik02@gmail.com
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6 leading-relaxed">
              I am a passionate developer with expertise in modern web
              technologies. I love creating innovative solutions and pushing the
              boundaries of what is possible on the web. When I am not coding,
              you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
