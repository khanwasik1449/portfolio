"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Inventory Register & Meeting Room Booking",
    description:
      "Full-stack inventory management system with PIN-based login, 84 products, 275 users, stock tracking (Check Out/Stock In/Stock Out), low-stock alerts, CSV exports, and a separate meeting room booking app with conflict detection and time-slot management. Built for BRAC IED.",
    tech: ["Django 6.0", "Python 3.12", "PostgreSQL", "Waitress", "systemd", "JavaScript"],
    github: null,
    live: "http://10.10.11.205:8000",
    featured: true,
  },
  {
    title: "HR Contract Management System",
    description:
      "Web-based application for managing employee contracts at BRAC IED, BRAC University. Supports contract creation, PDF generation (New/Extension/Revision/Renewal), email delivery (individual & bulk), CSV bulk upload, payslip management, and employee records with date range, status, and type filters.",
    tech: ["Django", "Python", "SQLite", "WeasyPrint", "Django Q2", "Gunicorn"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "ICT Equipment Requisition System",
    description:
      "Dynamic multi-level approval workflow for ICT equipment requests. Routes to department heads then final approver with automated email notifications and real-time status tracking dashboard.",
    tech: ["Google Forms", "Google Sheets", "Apps Script"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Transport Requisition & Auto-Assignment",
    description:
      "Two-step transport approval system with automated driver and vehicle assignment. Dynamic + fixed approval flow with notifications to transport manager.",
    tech: ["Google Forms", "Apps Script"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Course Installment Tracking & EMI Reminders",
    description:
      "Manages course payments in installments with automated email reminders for participants. Handles 3-6 month payment plans with real-time status updates and due calculations.",
    tech: ["Google Sheets", "Apps Script", "Email Automation"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Income Tax Statement Generator",
    description:
      "PIN-based system that generates employee income tax statements dynamically. Auto-calculates salary components, generates structured reports and displays payment history.",
    tech: ["Google Apps Script", "Web App"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Employee Payment & Salary Report System",
    description:
      "Web-based reporting tool for HR/Finance that retrieves employee salary and payment data using unique PIN. Dual database integration with structured salary breakdown.",
    tech: ["Google Apps Script", "Web Interface"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Automated Bill Processing & Notification",
    description:
      "Tracks bill processing stages and automatically sends email notifications based on status. Includes request number generation, payment date tracking, and HTML email templates.",
    tech: ["Google Sheets", "Apps Script"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Certificate Generation System",
    description:
      "Automated bulk certificate generation for course participants with dynamic data population and template-based design for export-ready output.",
    tech: ["Google Apps Script", "Templates"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Zoom Class Management System",
    description:
      "On-demand Zoom link generation with course-wise organization and class tracking support for multiple courses including M.ED, ECD, and short courses.",
    tech: ["Google Sheets", "Apps Script", "Zoom API"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "LMS & Course Operations Support",
    description:
      "Handled LMS operations including certificate readiness tracking, course status monitoring, and student communication for online learning platforms.",
    tech: ["LMS", "Operations Support"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Website & Hosting Management",
    description:
      "Managed website hosting, domain renewal, and infrastructure support for bracied.com including payment troubleshooting and vendor coordination.",
    tech: ["Hostinger", "DNS", "Hosting"],
    github: null,
    live: "https://bracied.com",
    featured: false,
  },
  {
    title: "Data Backup & Dashboard System",
    description:
      "Automated data backup systems with Looker Studio dashboard visualization providing real-time insights and improved data reliability for decision-making.",
    tech: ["Google Apps Script", "Looker Studio"],
    github: null,
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Folder className="text-neon-green" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            <span className="text-neon-green">./</span>projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group border bg-white/5 hover:bg-white/10 transition-all duration-300 ${
                project.featured
                  ? "border-neon-green/50"
                  : "border-white/10 hover:border-neon-green/30"
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Code size={28} className="text-neon-green" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-neon-green transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.61-.22 1.24-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-neon-green transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-neon-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 border border-white/20 text-neon-green rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
