"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Assistant Manager, IT",
    company: "BRAC Institute of Educational Development",
    org: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "2023 - Present",
    promoted: true,
    description:
      "Promoted from Officer to Senior Officer to Assistant Manager",
    achievements: [
      "Leading IT operations, automation initiatives, and team management across multiple BRAC branches.",
      "Lead and manage a team of IT support staff for hardware, networking, website and software issue resolution across multiple branches",
      "Design automation systems for contracts, payslips, salary statements, car requisitions, depreciation & certificates via GSheets & Apps Script",
      "Manage institutional email systems coordinating with BRAC IT & BRAC University IT",
      "Oversee ICT procurement & inventory using ERP systems",
      "Configure routers, switches, and Windows Active Directory for secure server environments",
      "Automate short course enrollment & payment tracking via WooCommerce",
      "Develop real-time dashboards for process monitoring using Google Sheets & Looker Studio",
      "Support online classes via Zoom & Google Meet, manage IT setup & faculty attendance",
      "Conduct training sessions for staff on digital tools & platforms",
      "Deliver IT support for central and field operations across diverse environments",
    ],
  },
  {
    title: "Senior Officer, IT",
    company: "BRAC Institute of Educational Development",
    org: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "2021 - 2023",
    promoted: true,
    description:
      "Expanded responsibilities in IT infrastructure management, automation development, and cross-branch support coordination.",
    achievements: [
      "Provided end-to-end IT support across Windows, Ubuntu, and MacOS systems",
      "Managed network infrastructure including routers, switches, and Active Directory",
      "Developed Google Sheets automation and Apps Script solutions for administrative workflows",
      "Supported online classes (M.ED, ECD, short courses) via Zoom and Google Meet",
      "Coordinated with sister concerns and central IT leadership to standardize infrastructure",
      "Maintained strong vendor relationships for ICT procurement and equipment availability",
    ],
  },
  {
    title: "Officer, IT",
    company: "BRAC Institute of Educational Development",
    org: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "Feb 2019 - 2021",
    promoted: false,
    description:
      "Started as IT Officer handling core IT support, system administration, and institutional technology operations.",
    achievements: [
      "Installed, configured, and troubleshot hardware, software, and operating systems",
      "Handled account setups, password resets, and user support for institutional email systems",
      "Delivered IT support for both central and field operations",
      "Maintained network infrastructure and server environments across multiple branches",
    ],
  },
  {
    title: "IT Intern",
    company: "Nanotech Solutions & Consultancy Ltd.",
    org: "",
    location: "Dhaka, Bangladesh",
    period: "Dec 2018 - Feb 2019",
    promoted: false,
    description:
      "Prepared ICT-related documents and uploaded course contents to the BASIS platform.",
    achievements: [
      "Prepared ICT documents and agreements",
      "Uploaded course contents to the BASIS platform",
      "Identified and reported ICT issues for timely resolution",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Briefcase className="text-neon-green" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            <span className="text-neon-green">./</span>experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 md:mb-16"
            >
              <div className="absolute left-4 top-6 w-4 h-4 bg-neon-green rounded-full -translate-x-1/2 border-4 border-black z-10" />

              <div className="ml-12">
                <div className={`border p-6 hover:border-neon-green/50 transition-colors ${
                  exp.promoted
                    ? "border-neon-green/30 bg-neon-green/5"
                    : "border-white/10 bg-white/5"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-neon-green">
                      {exp.title}
                    </h3>
                    {exp.promoted && (
                      <span className="text-[10px] px-2 py-0.5 bg-neon-green text-black font-bold uppercase tracking-wider rounded-full">
                        Promoted
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 font-semibold mb-1">
                    {exp.company}
                  </p>
                  {exp.org && (
                    <p className="text-white/50 text-sm mb-3">{exp.org}</p>
                  )}

                  <div className="flex items-center gap-4 mb-4 text-white/50 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-white/50 text-sm before:content-['>'] before:text-neon-green before:mr-2"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
