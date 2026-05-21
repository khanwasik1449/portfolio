"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillCategories = [
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Django / Python", level: 88 },
      { name: "Next.js / React", level: 82 },
      { name: "PostgreSQL / SQLite", level: 85 },
      { name: "REST API Design", level: 80 },
    ],
  },
  {
    name: "Frontend & UI",
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript / TypeScript", level: 82 },
      { name: "Framer Motion", level: 78 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    name: "Automation & Data",
    skills: [
      { name: "Google Sheets / Apps Script", level: 92 },
      { name: "Looker Studio / Dashboards", level: 88 },
      { name: "Process Automation", level: 90 },
      { name: "CSV / Data Pipelines", level: 85 },
    ],
  },
  {
    name: "DevOps & Deployment",
    skills: [
      { name: "Linux Server / systemd", level: 85 },
      { name: "Nginx / Gunicorn / Waitress", level: 82 },
      { name: "Docker / Git", level: 80 },
      { name: "DNS / SSL / Hosting", level: 85 },
    ],
  },
  {
    name: "Web & LMS",
    skills: [
      { name: "WordPress / WooCommerce", level: 82 },
      { name: "Moodle (LMS)", level: 85 },
      { name: "Google Workspace", level: 90 },
      { name: "ERPNext / SnipeIT", level: 80 },
    ],
  },
  {
    name: "Networking & Infrastructure",
    skills: [
      { name: "Mikrotik / Cisco (CCNA)", level: 82 },
      { name: "Firewall / VPN / VLAN", level: 85 },
      { name: "LAN / WAN / DHCP / DNS", level: 88 },
      { name: "CCTV / IP Camera / NVR", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Cpu className="text-neon-green" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            <span className="text-neon-green">./</span>skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold mb-6 text-neon-green uppercase tracking-wider">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-sm">{skill.name}</span>
                      <span className="text-neon-green text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-green to-neon-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
