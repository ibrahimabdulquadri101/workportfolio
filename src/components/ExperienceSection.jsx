import React from "react";
import FadeIn from "./FadeIn";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Engineer",
    company: "Workonnect.africa",
    location: "Remote",
    period: "May 2026 – Present",
    type: "Production Platform",
    highlights: [
      "Build and maintain a job platform for the Nigerian market: a NestJS and PostgreSQL backend, Next.js frontend, and a scheduled crawler that pulls and normalizes job listings.",
      "Shipped an AI-powered CV scoring feature backed by the OpenAI API, providing job seekers instant structured feedback with an animated frontend score visualization.",
      "Diagnosed and resolved silent cron failures, eliminated CORS and JWT signature mismatches, and stabilized multi-cloud deployments across Railway and Netlify.",
    ],
    tags: ["NestJS", "PostgreSQL", "Next.js", "OpenAI API", "Railway", "Netlify"],
  },
  {
    role: "Backend Developer Intern Finalist",
    company: "HNG i13 · DEENAI",
    location: "Remote",
    period: "Oct 2025 – Dec 2025",
    type: "Backend & Systems",
    highlights: [
      "Built RESTful APIs in NestJS and TypeScript for waitlist registration, chat message persistence, and AI token management with PostgreSQL schemas via TypeORM.",
      "Secured admin-only endpoints with JWT and custom NestJS Guards, documented every endpoint in Swagger/OpenAPI, and containerized services with Docker.",
    ],
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Docker", "Swagger"],
  },
  {
    role: "Full Stack Developer",
    company: "ShopMaster",
    location: "Remote",
    period: "Feb 2025 – Jun 2025",
    type: "E-Commerce Architecture",
    highlights: [
      "Built a complete authentication system in Next.js 14 (App Router) covering registration, login, and password reset with secure HTTP-only JWT cookies.",
      "Implemented role-based access control (RBAC) across inventory management and leveraged server-side rendering to cut initial load time and optimize SEO.",
    ],
    tags: ["Next.js 14", "React", "TypeScript", "JWT Auth", "RBAC", "SSR"],
  },
  {
    role: "Frontend Developer",
    company: "Halafund",
    location: "Lagos, Nigeria",
    period: "Dec 2023 – Dec 2024",
    type: "Frontend Engineering",
    highlights: [
      "Built responsive interfaces in React, TypeScript, and Tailwind CSS with a mobile-first approach.",
      "Cut page load times through code splitting and lazy loading, collaborating closely with backend engineers and designers in Agile sprints.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Performance", "Agile"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#000000] text-white px-5 sm:px-8 md:px-12 py-20 sm:py-24 select-none overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
            <span>[ track_record ]</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 10vw, 130px)" }}
          >
            Experience
          </h2>
          <p className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-mono mt-3">
            PROVEN ENGINEERING TRACK RECORD · PRODUCTION SYSTEMS
          </p>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={30} className="w-full">
              <div className="p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] bg-[#0A0A0A] border border-white/15 hover:border-white/40 transition-all duration-300 relative group overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono uppercase tracking-wider text-white/70 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/70 mt-1 font-medium font-mono">
                      <span className="text-white font-semibold">{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 opacity-60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-white/60 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5 text-white/70" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="py-6 space-y-3">
                  {exp.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-sm sm:text-base text-white/80 font-light leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 opacity-80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education & Leadership Card */}
        <FadeIn delay={0.3} y={30} className="w-full mt-8">
          <div className="p-6 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] bg-[#0A0A0A] border border-white/15 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    Federal University of Technology, Akure (FUTA)
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-mono">
                    B.Tech in Software Engineering · 4th Year
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono text-white/60 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 self-start md:self-auto">
                Feb 2024 – Feb 2028
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm sm:text-base text-white/90">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white font-mono text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Co-Technical Lead, GDG on Campus</span>
              </div>
              <p className="text-sm font-light text-white/70">
                Mentored over 50+ students in software engineering, modern web architecture, and low-level systems fundamentals.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
