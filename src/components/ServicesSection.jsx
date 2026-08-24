import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    name: "Systems & Low-Level Engineering",
    description:
      "Custom memory allocators, network protocols, inverted-index search engines, and multithreaded load balancers built from scratch in C++ with CMake. No third-party abstractions, just direct memory management, socket I/O, and algorithms that are correct by construction.",
  },
  {
    number: "02",
    name: "Backend & API Architecture",
    description:
      "RESTful APIs and server-side systems built with Node.js, Express, and NestJS, backed by PostgreSQL with TypeORM. JWT authentication, role-based access control, Docker containerisation, and OpenAPI documentation are standard parts of the workflow, not afterthoughts.",
  },
  {
    number: "03",
    name: "Full-Stack Web Development",
    description:
      "Complete products built across the entire stack: React and Next.js on the frontend with SSR, dynamic routing, and Tailwind CSS; Node.js and PostgreSQL on the backend. I handle state management, API design, auth, and deployment end-to-end.",
  },
  {
    number: "04",
    name: "AI & Intelligent Integrations",
    description:
      "Integrating LLMs and generative APIs like OpenAI and Gemini into production applications with proper context management, token-aware chunking, streaming responses, and structured output parsing. The goal is useful AI behaviour, not demos.",
  },
  {
    number: "05",
    name: "Creative & Interactive Web",
    description:
      "Animated interfaces built with Framer Motion, real-time collaborative features over WebSockets, WebRTC peer-to-peer video and data channels, and physics-driven UI interactions. Optimised for consistent 60fps and responsive across all viewports.",
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
            <span>[ what_i_build ]</span>
          </div>
          <h2
            className="text-[#000000] font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 9vw, 140px)" }}
          >
            What I Build
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
