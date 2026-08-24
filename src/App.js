import React, { useState } from "react";
import "./App.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen font-kanit bg-[#000000] text-[#EDEDED] selection:bg-white selection:text-black overflow-x-clip relative">
      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Main Single-Page Sections */}
      <main className="w-full flex flex-col">
        <HeroSection onOpenContact={openContact} />
        <AboutSection onOpenContact={openContact} />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
      <FooterSection onOpenContact={openContact} />

      {/* Interactive Contact & Direct Channels Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default App;

