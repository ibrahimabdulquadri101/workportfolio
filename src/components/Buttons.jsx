import React from "react";
import { ArrowUpRight } from "lucide-react";

export const ContactButton = ({
  onClick,
  href,
  label = "Contact Me",
  className = "",
  target,
  rel,
}) => {
  const buttonStyles = `
    inline-flex items-center justify-center gap-2 rounded-full 
    bg-white text-black font-semibold uppercase tracking-widest font-mono
    px-7 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4
    text-xs sm:text-sm md:text-sm
    border border-white
    shadow-[0_0_20px_rgba(255,255,255,0.15)]
    hover:bg-black hover:text-white hover:border-white
    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
    cursor-pointer select-none
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonStyles}
      >
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyles}
    >
      <span>{label}</span>
    </button>
  );
};

export const LiveProjectButton = ({
  href = "#",
  label = "Live Project",
  className = "",
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const classes = `
    inline-flex items-center justify-center gap-1.5 rounded-full
    border border-white bg-white text-black font-mono font-medium uppercase tracking-wider
    px-5 py-2.5 sm:px-6 sm:py-3
    text-xs sm:text-sm
    hover:bg-black hover:text-white
    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
    cursor-pointer select-none
    ${className}
  `;

  if (href && href !== "#") {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        <span>{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5" />
    </button>
  );
};

export const GitHubButton = ({
  href,
  label = "Source Code",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-1.5 rounded-full
        border border-white/25 text-white font-mono font-medium uppercase tracking-wider
        px-5 py-2.5 sm:px-6 sm:py-3
        text-xs sm:text-sm
        bg-white/[0.04] backdrop-blur-md
        hover:bg-white hover:text-black hover:border-white
        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
        cursor-pointer select-none
        ${className}
      `}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
    </a>
  );
};
