import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { FiHome, FiBriefcase, FiAward, FiCode, FiFolder } from 'react-icons/fi';

import ThreeBackground from './components/animations/ThreeBackground';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

const TABS = [
  { id: 'intro', label: 'Intro', icon: <FiHome className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', icon: <FiBriefcase className="w-4 h-4" /> },
  { id: 'education', label: 'Education', icon: <FiAward className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <FiCode className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder className="w-4 h-4" /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-neon-orange/30 selection:text-neon-orange flex flex-col items-center justify-center py-6 md:py-10">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>

      <motion.div 
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative z-10 w-[95%] md:w-[92%] max-w-[1600px] bg-[#111111]/90 backdrop-blur-3xl rounded-[2rem] border border-white/5 px-6 py-8 lg:px-12 lg:py-12 shadow-2xl overflow-hidden"
      >
        {/* Navigation Wizard */}
        <div className="w-full flex justify-center mb-8 lg:mb-12">
          <nav className="inline-flex items-center p-1.5 rounded-full bg-[#161616] border border-white/5 shadow-inner">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-[#888888] hover:text-white"
                  }`}
                >
                  <motion.div
                    animate={
                      isActive 
                        ? { scale: [1, 1.05, 1], y: [0, -2, 0] }
                        : { y: [0, -2, 0] }
                    }
                    transition={{
                      duration: isActive ? 2.5 : 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {tab.icon}
                  </motion.div>
                  <span className="hidden sm:inline">{tab.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {/* Gradient Border Box */}
                      <div className="absolute inset-0 rounded-full border border-transparent"
                           style={{
                             background: 'linear-gradient(#1a1a1a, #1a1a1a) padding-box, linear-gradient(to right, rgba(255,107,0,0.6), rgba(157,78,221,0.6)) border-box',
                           }}
                      />
                      {/* Glowing Underline */}
                      <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-[#ff6b00] to-[#ff6b00] rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Content Area */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-none"
            >
              {activeTab === 'intro' && <Hero onExplore={() => setActiveTab('projects')} />}
              {activeTab === 'experience' && <Experience />}
              {activeTab === 'education' && <Education />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'projects' && <Projects />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
