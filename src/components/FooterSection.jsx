import React from "react";
import { ArrowUp, Mail, FileText } from "lucide-react";
import FadeIn from "./FadeIn";

const FooterSection = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#000000] text-white border-t border-white/15 px-6 sm:px-10 py-16 select-none z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <FadeIn delay={0} y={20} className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            Abdulquadri Ibrahim
          </span>
          <p className="text-xs sm:text-sm text-white/50 font-mono mt-1">
            Software Engineer · Full-Stack & Systems Developer
          </p>
        </FadeIn>

        {/* Social Links & Contact */}
        <FadeIn delay={0.1} y={20} className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/ibrahimabdulquadri101"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black transition-all"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/ibrahim-abdulquadri-abiodun"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="p-3 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </button>

          <a
            href="./cv1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white hover:text-black transition-all"
            aria-label="View CV"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black text-white transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
        <span>&copy; {new Date().getFullYear()} Abdulquadri Ibrahim. Built with React & Framer Motion.</span>
        <span>Akure / Lagos, Nigeria · Available Worldwide</span>
      </div>
    </footer>
  );
};

export default FooterSection;
