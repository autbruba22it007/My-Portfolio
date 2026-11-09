import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiDownload, FiTrendingUp, FiUsers, FiFolder, FiBox, FiStar, FiLayers, FiCode, FiServer, FiActivity, FiCpu, FiTerminal, FiShoppingCart } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaShopify, FaGitAlt, FaGithub, FaAmazon } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss, SiMysql, SiSqlite, SiSupabase, SiPostgresql, SiVercel, SiOpenai, SiMeta, SiGoogle } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const EXPERIENCES = [
  {
    id: 'velmora',
    title: "AI-POWERED FULL STACK DEVELOPER",
    company: "Velmora Consumer Products LLP",
    date: "Jun 2025 - Present",
    location: "Tamil Nadu, Erode",
    type: "Full-time",
    level: "LEVEL 03",
    logoText: "V",
    metrics: [
      { label: "Core Systems", value: "3+", icon: <FiBox className="w-5 h-5 text-[#ff6b00]" /> },
      { label: "Role Focus", value: "Full Stack", icon: <FiCode className="w-5 h-5 text-[#9d4edd]" /> },
      { label: "Live Automations", value: "15+", icon: <FiServer className="w-5 h-5 text-[#00f5ff]" /> },
      { label: "Live Campaigns", value: "15+", icon: <FiActivity className="w-5 h-5 text-[#ff6b00]" /> }
    ],
    summary: "Designing and developing production-grade full-stack applications using modern web technologies and AI-powered development workflows. Building scalable business systems including billing & inventory management, company operations platforms, Shopify e-commerce solutions, marketing automation tools, and custom dashboards while integrating AI to accelerate development and improve productivity.",
    achievements: [
      "Built a full billing and inventory management system with AI-assisted billing.",
      "Developed an influencer campaign management tool with calendar, analytics, and automated notifications.",
      "Built and customized a Shopify e-commerce store using theme editing and Liquid code.",
      "Managed influencer marketing campaigns end-to-end and ran targeted Meta Ads campaigns."
    ],
    techCategories: [
      { name: "Frontend", skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ] },
      { name: "Backend", skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PHP", icon: <FaPhp /> }
      ] },
      { name: "Database", skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ] },
      { name: "Tools & AI", skills: [
        { name: "Shopify", icon: <FaShopify /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Claude AI", icon: <FiCpu /> },
        { name: "Antigravity", icon: <FiTerminal /> },
        { name: "Gemini", icon: <SiGoogle /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "Google AI Studio", icon: <SiGoogle /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiVercel /> }
      ] },
      { name: "Digital Marketing", skills: [
        { name: "Meta Ads", icon: <SiMeta /> },
        { name: "Google Ads", icon: <SiGoogle /> },
        { name: "Amazon Ads", icon: <FaAmazon /> },
        { name: "Flipkart Ads", icon: <FiShoppingCart /> },
        { name: "Influencer Marketing", icon: <FiUsers /> }
      ] }
    ]
  },
  {
    id: 'skynet-bee',
    title: "Junior Developer",
    company: "Skynet Bee",
    date: "2023 - 2024",
    location: "Tamil Nadu, Erode",
    type: "Internship",
    level: "LEVEL 01",
    logoText: "S",
    metrics: [
      { label: "Features", value: "20+", icon: <FiCode className="w-5 h-5 text-[#ff6b00]" /> },
      { label: "Bug Fixes", value: "100+", icon: <FiActivity className="w-5 h-5 text-[#9d4edd]" /> },
      { label: "Hackathons", value: "1st", icon: <FiStar className="w-5 h-5 text-[#00f5ff]" /> },
      { label: "Code Coverage", value: "85%", icon: <FiTrendingUp className="w-5 h-5 text-[#ff6b00]" /> }
    ],
    summary: "Started as an intern mastering the fundamentals; won 1st place in two hackathons (Digital Markets & Home Automation). Quickly transitioned to shipping full systems.",
    achievements: [
      "Built scalable microservices for a remote productivity suite.",
      "Implemented real-time collaborative interfaces.",
      "Managed projects independently with agile methodologies.",
      "Won 1st place in two hackathons — Digital Markets (wholesale ordering web app) and Home Automation (Arduino auto-lighting via web interface)."
    ],
    techCategories: [
      { name: "Full Stack", skills: [
        { name: "HTML/CSS", icon: <FaHtml5 /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "PhP", icon: <FaPhp /> },
        { name: "MySQL", icon: <SiMysql /> }
      ] },
      { name: "Tools", skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FiBox /> },
        { name: "Jest", icon: <FiCheckCircle /> }
      ] }
    ]
  }
];

export default function Experience() {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0].id);
  const activeExperience = EXPERIENCES.find(exp => exp.id === activeExpId);

  return (
    <div className="w-full flex flex-col pt-4 pb-8">

      {/* 2-Column Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[28%_72%] gap-6 lg:gap-8">

        {/* LEFT COLUMN: Career Journey Navigator */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9d4edd]/10 border border-[#9d4edd]/20 text-[#9d4edd] text-xs font-semibold uppercase tracking-wider mb-4">
              <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <FiBriefcase className="w-3.5 h-3.5" />
              </motion.div>
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
            <p className="text-white/50 text-sm">My professional journey and the impact I've made along the way.</p>
          </div>

          <div className="relative flex flex-col gap-4 pl-4 border-l-2 border-white/5">
            {/* Animated Gradient Timeline Line Overlay */}
            <motion.div
              className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff6b00] via-[#9d4edd] to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {EXPERIENCES.map((exp) => {
              const isActive = activeExpId === exp.id;

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`relative flex flex-col items-start p-5 rounded-2xl transition-all duration-300 text-left overflow-hidden group ${isActive
                    ? "bg-[#161616] border border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.1)]"
                    : "bg-[#111111] border border-white/5 hover:bg-[#161616] hover:border-white/10"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-21px] top-[26px] w-3 h-3 rounded-full border-2 transition-colors duration-300 ${isActive ? "bg-[#ff6b00] border-[#ff6b00] shadow-[0_0_10px_#ff6b00]" : "bg-[#0a0a0a] border-white/20 group-hover:border-white/50"
                    }`} />

                  {/* Background Glow for Active Card */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/10 to-transparent opacity-50" />
                  )}

                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-xs font-bold tracking-wider ${isActive ? "text-[#ff6b00]" : "text-white/40"}`}>
                        {exp.date}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded-full border border-[#00ff88]/20 tracking-wider">
                          <motion.span 
                            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" 
                          /> Active
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-white" : "text-white/70"}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm transition-colors ${isActive ? "text-white/80" : "text-white/40"}`}>
                      {exp.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <button className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all font-medium text-sm">
              <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <FiDownload className="w-4 h-4" />
              </motion.div>
              Download Resume
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience Detail Panel */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full h-full bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#9d4edd]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b00]/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 pb-8 border-b border-white/5">

                  {/* Company Avatar */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div 
                      animate={{ boxShadow: ["0 0 0px rgba(157,78,221,0)", "0 0 20px rgba(157,78,221,0.4)", "0 0 0px rgba(157,78,221,0)"] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-3xl font-black text-white relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/20 to-[#9d4edd]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {activeExperience.logoText}
                    </motion.div>
                  </motion.div>

                  <div className="flex-1">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {activeExperience.title}
                    </h2>
                    <h3 className="text-lg text-[#9d4edd] font-medium mb-4">
                      {activeExperience.company}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50 font-medium">
                      <span className="flex items-center gap-2"><FiCalendar /> {activeExperience.date}</span>
                      <span className="flex items-center gap-2"><FiMapPin /> {activeExperience.location}</span>
                      <span className="flex items-center gap-2"><FiBriefcase /> {activeExperience.type}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {activeExperience.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex flex-col p-4 rounded-2xl bg-[#161616] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl -mr-8 -mt-8 transition-colors group-hover:bg-white/10" />
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mb-3 origin-left inline-block"
                      >
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        >
                          <motion.div
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                          >
                            {metric.icon}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <span className="text-2xl font-bold text-white mb-1">{metric.value}</span>
                      <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase">{metric.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-10">

                  {/* Role & Impact */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                      <motion.div animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                        <FiTrendingUp className="text-[#ff6b00]" />
                      </motion.div> 
                      Role & Impact
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {activeExperience.summary}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                      <motion.div animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                        <FiCheckCircle className="text-[#9d4edd]" />
                      </motion.div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {activeExperience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-white/70"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                            className="shrink-0 mt-0.5"
                          >
                            <FiCheckCircle className="w-4 h-4 text-[#9d4edd]" />
                          </motion.div>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto border-t border-white/5 pt-8">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-6">
                    <motion.div animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                      <FiLayers className="text-[#00f5ff]" />
                    </motion.div>
                    Technology Stack
                  </h4>

                  <div className="flex flex-col gap-6">
                    {activeExperience.techCategories.map((category, i) => (
                      <div key={category.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest w-28 shrink-0">
                          {category.name}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, j) => (
                            <motion.div
                              key={skill.name || skill}
                              variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                show: { opacity: 1, scale: 1, transition: { delay: 0.3 + (i * 0.1) + (j * 0.05) } },
                                hover: { scale: 1.06, y: -2, backgroundColor: "#1c1c1c", boxShadow: "0 0 15px rgba(255,255,255,0.1)", transition: { duration: 0.2 } }
                              }}
                              initial="hidden"
                              animate="show"
                              whileHover="hover"
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-[#161616] text-xs font-medium text-white/70 transition-colors cursor-default group/pill"
                            >
                              {skill.icon && (
                                <motion.span
                                  variants={{
                                    hover: { rotate: 4, filter: "drop-shadow(0 0 5px rgba(255,255,255,0.8))", color: "#fff", transition: { duration: 0.2 } }
                                  }}
                                  className="text-white/50 transition-all duration-200"
                                >
                                  {skill.icon}
                                </motion.span>
                              )}
                              <span className="group-hover/pill:text-white transition-colors">{skill.name || skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
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
