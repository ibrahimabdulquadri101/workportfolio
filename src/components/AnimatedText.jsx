import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.25"],
  });

  const characters = text.split("");
  const total = characters.length;

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(start + 1 / total, 1);
        return (
          <Char
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
