import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { ContactButton } from "./Buttons";
import { Terminal, Menu, X } from "lucide-react";

const HeroSection = ({ onOpenContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "What I Build", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", onClick: onOpenContact },
  ];

  const handleNavClick = (item) => {
    setMenuOpen(false);
    if (item.onClick) {
      setTimeout(() => item.onClick(), 250);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden select-none bg-[#000000] text-white">
      {/* Subtle Monochrome Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* ─── Top Navbar ─── */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <header className="w-full px-5 sm:px-8 md:px-12 pt-6 md:pt-8 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 font-mono text-xs text-white/50">
            <span className="text-white font-bold">&gt;</span>
            <span className="tracking-widest uppercase text-[11px] sm:text-xs">abdulquadri.dev</span>
          </div>

          {/* Desktop Nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
          </nav>

          {/* Mobile Hamburger — visible on small screens only */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2.5 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white/15 transition-all cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </header>
      </FadeIn>

      {/* ─── Mobile Fullscreen Menu Overlay ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Drawer from top */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/15 px-6 pt-6 pb-10 md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                  <span className="text-white font-bold">&gt;</span>
                  <span className="tracking-widest uppercase text-[11px]">abdulquadri.dev</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white hover:text-black transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item)}
                        className="flex items-center justify-between w-full py-4 border-b border-white/10 text-white/80 hover:text-white font-mono uppercase tracking-widest text-sm transition-colors group"
                      >
                        <span>{item.label}</span>
                        <span className="text-white/30 group-hover:text-white text-xs font-mono transition-colors">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleNavClick(item)}
                        className="flex items-center justify-between w-full py-4 border-b border-white/10 text-white/80 hover:text-white font-mono uppercase tracking-widest text-sm transition-colors group bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer text-left"
                      >
                        <span>{item.label}</span>
                        <span className="text-white/30 group-hover:text-white text-xs font-mono transition-colors">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Bottom stack hint */}
              <p className="mt-8 text-[11px] font-mono text-white/30 uppercase tracking-widest">
                JAVASCRIPT · C++ · NODE.JS · REACT · NESTJS
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── Centered Hero Heading ─── */}
      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center justify-center my-auto z-10 text-center">
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/20 text-xs font-mono text-white/80 uppercase tracking-widest mb-4 sm:mb-6">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>[ Software Engineer · Full-Stack &amp; Systems ]</span>
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
            I write software across the full spectrum: C++ systems, distributed backends, full-stack web apps, and AI integrations.
            I care about things that actually work at scale, and I enjoy figuring out the hard parts.
          </p>
        </FadeIn>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full px-5 sm:px-8 md:px-12 pb-7 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 z-20 max-w-7xl mx-auto">
        <FadeIn delay={0.4} y={20}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <p className="text-white/60 font-mono uppercase tracking-wider text-xs sm:text-sm text-center sm:text-left">
              JAVASCRIPT · C++ · NODE.JS · REACT · NESTJS
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
