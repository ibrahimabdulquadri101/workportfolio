import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    name: "Systems & C++ Engineering",
    description:
      "Architecting high-throughput low-level software, custom inverted index search engines, network load balancers, and memory-efficient algorithms built from first principles without 3rd-party dependencies.",
  },
  {
    number: "02",
    name: "Backend & Distributed Architecture",
    description:
      "Building resilient RESTful APIs and microservices with NestJS, TypeScript, PostgreSQL, TypeORM, Docker containerization, custom JWT authentication guards, and comprehensive OpenAPI/Swagger documentation.",
  },
  {
    number: "03",
    name: "Full-Stack Web Platforms",
    description:
      "Engineering full-scale web platforms with Next.js (App Router), React 19, TypeScript, and Tailwind CSS. Implementing robust SSR/SSG caching, RBAC, and secure HTTP-only cookie authentication flows.",
  },
  {
    number: "04",
    name: "AI Integrations & Intelligent Agents",
    description:
      "Developing automated OpenAI API pipelines, resume/CV scoring engines with animated analytics, autonomous TypeScript agents, and scheduled resilient data crawlers that normalize external data.",
  },
  {
    number: "05",
    name: "Creative Engineering & 3D Web",
    description:
      "Crafting fluid interactive web interfaces with Framer Motion, 3D graphics rendering pipelines, magnetic physics, and custom shaders optimized for smooth 60fps performance across all devices.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 text-xs font-mono text-black/60 uppercase tracking-widest mb-3">
            <span>[ core_capabilities ]</span>
          </div>
          <h2
            className="text-[#000000] font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={30} className="w-full">
              <div
                className={`w-full flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-70"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
