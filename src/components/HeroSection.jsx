import React from "react";
import FadeIn from "./FadeIn";
import { ContactButton } from "./Buttons";
import { Terminal } from "lucide-react";

const HeroSection = ({ onOpenContact }) => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", onClick: onOpenContact },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden select-none bg-[#000000] text-white">
      {/* Subtle Monochrome Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="w-full px-5 sm:px-8 md:px-12 pt-6 md:pt-8 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-xs text-white/50">
            <span className="text-white font-bold">&gt;</span>
            <span className="tracking-widest uppercase text-[11px] sm:text-xs">abdulquadri.dev</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            {navItems.map((item, idx) =>
              item.href ? (
                <a
                  key={idx}
                  href={item.href}
                  className="text-white/70 font-mono uppercase tracking-wider text-xs sm:text-sm hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={idx}
                  type="button"
                  onClick={item.onClick}
                  className="text-white/70 font-mono uppercase tracking-wider text-xs sm:text-sm hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </header>
      </FadeIn>

      {/* Centered Hero Heading */}
      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center my-auto z-10 text-center">
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/20 text-xs font-mono text-white/80 uppercase tracking-widest mb-4 sm:mb-6">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>[ Software Engineer · Systems & Full-Stack ]</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] text-center w-full">
            <span className="block text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw]">
              Hi, I&apos;m
            </span>
            <span className="block text-[8.5vw] sm:text-[7.5vw] md:text-[6.5vw] lg:text-[5.8vw] mt-1 sm:mt-2 text-white">
              Abdulquadri Ibrahim
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto mt-6 sm:mt-8 leading-relaxed">
            Building high-throughput low-level systems in C++, resilient distributed backends with NestJS & PostgreSQL, and high-performance WebRTC platforms.
          </p>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-5 sm:px-8 md:px-12 pb-7 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 z-20 max-w-7xl mx-auto">
        <FadeIn delay={0.4} y={20}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <p className="text-white/60 font-mono uppercase tracking-wider text-xs sm:text-sm text-center sm:text-left">
              SCALABLE SYSTEMS · ARCHITECTURE · CODE
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
