import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolder, FiExternalLink, FiGithub, FiCheckCircle, FiLayers, FiCalendar } from 'react-icons/fi';

const PROJECTS = [
  {
    id: "01",
    title: "Smart Billing System",
    category: "Full Stack Application",
    date: "2024",
    summary: "Production-ready billing app with product image support, stock tracking, dine-in/take-away orders, multiple payment modes, and CSV import/export.",
    liveUrl: "https://smart-billing-system-taupe.vercel.app",
    sourceUrl: "#",
    features: [
      "Product image support",
      "Stock tracking & management",
      "Dine-in and take-away ordering",
      "CSV import/export functionality"
    ],
    techCategories: [
      { name: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
      { name: "Backend", skills: ["Node.js", "SQLite"] }
    ]
  },
  {
    id: "02",
    title: "Influencer Calendar 2.0",
    category: "Marketing Platform",
    date: "2024",
    summary: "Full influencer campaign tool — calendar view, posting & payment tracking, analytics dashboard, platform filters, notifications, and CSV import/export.",
    liveUrl: "https://influencer-calendar-nu.vercel.app",
    sourceUrl: "#",
    features: [
      "Interactive calendar view",
      "Posting & payment tracking",
      "Analytics dashboard with filters",
      "Automated notifications"
    ],
    techCategories: [
      { name: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
      { name: "Backend", skills: ["Node.js", "SQLite"] }
    ]
  },
  {
    id: "03",
    title: "Image Gallery — CRUD",
    category: "File Management",
    date: "2024",
    summary: "File manager with folder create/rename/delete and image upload, view, replace, and delete per folder — full CRUD with Supabase backend.",
    liveUrl: "https://photo-gallery-six-eta.vercel.app",
    sourceUrl: "#",
    features: [
      "Folder creation & management",
      "Image uploading & viewing",
      "Full CRUD operations",
      "Supabase backend integration"
    ],
    techCategories: [
      { name: "Frontend", skills: ["React", "Vite"] },
      { name: "Backend", skills: ["Node.js", "Supabase"] }
    ]
  },
  {
    id: "04",
    title: "Developer Portfolio",
    category: "Personal Brand",
    date: "2024",
    summary: "Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.",
    liveUrl: "https://portfolio-sigma-jade-10.vercel.app",
    sourceUrl: "#",
    features: [
      "Project showcase & details",
      "Skills & experience timeline",
      "Responsive layout design",
      "Interactive UI elements"
    ],
    techCategories: [
      { name: "Frontend", skills: ["HTML", "CSS", "JavaScript"] }
    ]
  }
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="w-full flex flex-col pt-4 pb-8">
      
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-xs font-semibold uppercase tracking-wider mb-4">
          <FiFolder className="w-3.5 h-3.5" />
          <span>Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Project Control Center</h2>
        <p className="text-white/50 text-sm max-w-xl">
          Explore my collection of high-performance applications and digital solutions.
        </p>
      </motion.div>

      {/* 2-Column Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 lg:gap-8">
        
        {/* LEFT COLUMN: Project Navigator */}
        <div className="flex flex-col gap-3">
          {PROJECTS.map((project) => {
            const isActive = selectedProjectId === project.id;
            
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`relative flex items-center p-4 rounded-2xl transition-all duration-300 text-left overflow-hidden group ${
                  isActive 
                    ? "bg-[#161616] border border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.1)]" 
                    : "bg-[#111111] border border-white/5 hover:bg-[#161616] hover:border-white/10"
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b00] to-[#9d4edd]" />
                )}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/5 to-transparent opacity-50 pointer-events-none" />
                )}

                <div className="relative z-10 w-full flex items-center gap-4 pl-2">
                  <span className={`text-xl font-black transition-colors ${isActive ? "text-[#ff6b00]" : "text-white/20"}`}>
                    {project.id}
                  </span>
                  
                  <div className="flex flex-col">
                    <h3 className={`text-base font-bold transition-colors ${isActive ? "text-white" : "text-white/70"}`}>
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/40 mt-0.5">
                      {project.category}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Project Detail Panel */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full h-full bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Detail Header */}
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#00f5ff] bg-[#00f5ff]/10 px-2.5 py-1 rounded-full border border-[#00f5ff]/20">
                        Featured Project
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {activeProject.date}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {activeProject.title}
                    </h2>
                    <h3 className="text-sm font-medium text-[#9d4edd] tracking-wider uppercase mb-4">
                      {activeProject.category}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                      {activeProject.summary}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 shrink-0">
                    <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff6b00] hover:bg-[#ff8533] text-white font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                      Live Demo <FiExternalLink />
                    </a>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-colors">
                      Source <FiGithub />
                    </button>
                  </div>
                </div>

                {/* Dashboard Thumbnail Placeholder */}
                <div className="w-full aspect-[21/9] rounded-2xl bg-[#0a0a0a] border border-white/10 mb-10 overflow-hidden relative group">
                  {/* Wireframe UI */}
                  <div className="absolute inset-0 p-6 flex flex-col gap-4 opacity-50">
                    {/* Fake Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <div className="w-32 h-4 rounded-full bg-white/10" />
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                    {/* Fake Content Area */}
                    <div className="flex gap-6 h-full">
                      {/* Sidebar */}
                      <div className="w-1/4 h-full flex flex-col gap-3 border-r border-white/5 pr-6">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="w-full h-8 rounded-lg bg-white/5" />
                        ))}
                      </div>
                      {/* Main Grid */}
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="flex gap-4">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex-1 h-24 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5" />
                          ))}
                        </div>
                        <div className="flex-1 rounded-xl bg-gradient-to-tr from-[#ff6b00]/10 via-transparent to-[#9d4edd]/10 border border-white/5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#ff6b00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                    <div className="px-6 py-2 rounded-full bg-[#111] border border-[#ff6b00]/30 text-[#ff6b00] font-bold text-sm tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      PREVIEW AVAILABLE
                    </div>
                  </div>
                </div>

                {/* Content Split: Features & Tech Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-auto">
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-5">
                      <FiCheckCircle className="text-[#00f5ff]" /> Key Features
                    </h4>
                    <ul className="space-y-3">
                      {activeProject.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-white/70"
                        >
                          <FiCheckCircle className="w-4 h-4 text-[#00f5ff] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-5">
                      <FiLayers className="text-[#9d4edd]" /> Technology Stack
                    </h4>
                    <div className="flex flex-col gap-4">
                      {activeProject.techCategories.map((category, i) => (
                        <div key={category.name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest w-20 shrink-0 mt-2">
                            {category.name}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, j) => (
                              <motion.span 
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (i * 0.1) + (j * 0.05) }}
                                className="px-3 py-1.5 rounded-md bg-[#161616] border border-white/5 text-xs font-medium text-white/60 transition-colors hover:border-[#9d4edd]/50 hover:text-white cursor-default"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
