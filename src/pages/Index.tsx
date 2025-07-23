import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <HeroSection setActiveSection={setActiveSection} />,
    about: <AboutSection />,
    projects: <ProjectsSection />,
    skills: <SkillsSection />,
    contact: <ContactSection />,
    articles: <div className="min-h-screen flex items-center justify-center"><h2 className="text-4xl text-primary">Articles Coming Soon</h2></div>,
    profiles: <div className="min-h-screen flex items-center justify-center"><h2 className="text-4xl text-primary">Coding Profiles Coming Soon</h2></div>,
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic text-foreground overflow-x-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-16"
        >
          {sections[activeSection as keyof typeof sections]}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Index;
