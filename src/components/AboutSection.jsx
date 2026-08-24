import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { GraduationCap, Users, Cpu } from "lucide-react";

const AboutSection = ({ onOpenContact }) => {
  const bioText =
    "With a strong foundation in software engineering and low-level systems, i focus on scalable backend architectures, full-stack platforms, distributed systems, and creative high-performance web experiences. I truly enjoy building software that solves hard engineering challenges and scales gracefully. Let's build something incredible together!";

  const badges = [
    {
      icon: <GraduationCap className="w-4 h-4 text-white" />,
      label: "FUTA Software Engineering",
      sub: "B.Tech (4th Year)",
    },
    {
      icon: <Users className="w-4 h-4 text-white" />,
      label: "GDG on Campus",
      sub: "Co-Technical Lead · 50+ Mentees",
    },
    {
      icon: <Cpu className="w-4 h-4 text-white" />,
      label: "Systems & Cloud",
      sub: "C++, NestJS, Next.js, PostgreSQL",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#000000] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden select-none border-t border-white/10"
    >
      {/* Corner 3D Decorative Assets */}
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 w-[110px] sm:w-[150px] md:w-[190px] grayscale opacity-80 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D moon icon"
            className="w-full h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 w-[110px] sm:w-[150px] md:w-[190px] grayscale opacity-80 hover:opacity-100 transition-opacity">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D lego icon"
            className="w-full h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10 w-[90px] sm:w-[130px] md:w-[160px] grayscale opacity-80">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D element"
            className="w-full h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10 w-[120px] sm:w-[150px] md:w-[190px] grayscale opacity-80">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D group element"
            className="w-full h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto gap-8 sm:gap-12 md:gap-14">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/60 uppercase tracking-widest mb-3">
            <span>[ engineering_philosophy ]</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Credentials Badges */}
        <FadeIn delay={0.2} y={20} className="w-full">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-lg"
              >
                {badge.icon}
                <div className="text-left">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
                    {badge.label}
                  </div>
                  <div className="text-[10px] text-white/50 font-mono">
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Character-by-Character Scroll Animated Text */}
        <div className="max-w-[580px] px-4">
          <AnimatedText
            text={bioText}
            className="text-white/80 font-normal text-center leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30} className="mt-2 sm:mt-4">
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
