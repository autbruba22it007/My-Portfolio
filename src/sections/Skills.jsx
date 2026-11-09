import { motion, useReducedMotion } from 'framer-motion';
import { FiLayers, FiCode, FiDatabase, FiTool, FiMonitor, FiTarget, FiDroplet, FiCpu, FiUsers, FiShoppingCart } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaShopify, FaWordpress, FaGitAlt, FaAmazon } from 'react-icons/fa';
import { SiJavascript, SiVite, SiMysql, SiSqlite, SiSupabase, SiPostgresql, SiVercel, SiGoogle } from 'react-icons/si';

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <FiMonitor className="w-5 h-5" />,
    colorClasses: {
      text: "text-[#00f5ff]",
      borderHover: "hover:border-[#00f5ff]/50",
      groupTextHover: "group-hover/skill:text-[#00f5ff]",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]",
      borderGlowHover: "group-hover:border-[#00f5ff]/30",
    },
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
    ]
  },
  {
    title: "Backend",
    icon: <FiCode className="w-5 h-5" />,
    colorClasses: {
      text: "text-[#9d4edd]",
      borderHover: "hover:border-[#9d4edd]/50",
      groupTextHover: "group-hover/skill:text-[#9d4edd]",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]",
      borderGlowHover: "group-hover:border-[#9d4edd]/30",
    },
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PHP", icon: <FaPhp /> },
    ]
  },
  {
    title: "Databases",
    icon: <FiDatabase className="w-5 h-5" />,
    colorClasses: {
      text: "text-[#ff6b00]",
      borderHover: "hover:border-[#ff6b00]/50",
      groupTextHover: "group-hover/skill:text-[#ff6b00]",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]",
      borderGlowHover: "group-hover:border-[#ff6b00]/30",
    },
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ]
  },
  {
    title: "Platforms",
    icon: <FiLayers className="w-5 h-5" />,
    colorClasses: {
      text: "text-[#00ff88]",
      borderHover: "hover:border-[#00ff88]/50",
      groupTextHover: "group-hover/skill:text-[#00ff88]",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]",
      borderGlowHover: "group-hover:border-[#00ff88]/30",
    },
    skills: [
      { name: "Shopify", icon: <FaShopify /> },
      { name: "Liquid", icon: <FiDroplet /> },
      { name: "WordPress", icon: <FaWordpress /> },
    ]
  },
  {
    title: "Marketing",
    icon: <FiTarget className="w-5 h-5" />,
    colorClasses: {
      text: "text-pink-500",
      borderHover: "hover:border-pink-500/50",
      groupTextHover: "group-hover/skill:text-pink-500",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      borderGlowHover: "group-hover:border-pink-500/30",
    },
    skills: [
      { name: "Meta Ads", icon: <FiTarget /> },
      { name: "Google Ads", icon: <SiGoogle /> },
      { name: "Amazon Ads", icon: <FaAmazon /> },
      { name: "Flipkart Ads", icon: <FiShoppingCart /> },
      { name: "Influencer Mktg", icon: <FiUsers /> },
    ]
  },
  {
    title: "Tools & AI",
    icon: <FiTool className="w-5 h-5" />,
    colorClasses: {
      text: "text-gray-300",
      borderHover: "hover:border-gray-300/50",
      groupTextHover: "group-hover/skill:text-gray-300",
      glowHover: "group-hover:shadow-[0_0_30px_rgba(209,213,219,0.15)]",
      borderGlowHover: "group-hover:border-gray-300/30",
    },
    skills: [
      { name: "Claude AI", icon: <FiCpu /> },
      { name: "Gemini", icon: <FiCpu /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Vercel", icon: <SiVercel /> },
    ]
  }
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  // Entrance variants
  const cardEntrance = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: (idx) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: idx * 0.08, duration: 0.45, ease: "easeOut" }
    })
  };

  // Skill Cascade Variants (triggered on card hover)
  const pillCascadeContainer = {
    rest: { transition: { staggerChildren: 0 } },
    cardHover: { transition: { staggerChildren: 0.05 } }
  };

  const pillCascadeItem = {
    rest: { y: 0 },
    cardHover: { y: [0, -3, 0], transition: { duration: 0.3 } }
  };

  return (
    <div className="relative w-full py-4 md:py-8 max-w-none mx-auto z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiLayers className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills Dashboard</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          
          <motion.div
            key={category.title}
            custom={idx}
            variants={cardEntrance}
            initial="hidden"
            animate="show"
            className="h-full"
          >
            {/* Hover Wrapper to separate hover 'y' from loop 'y' */}
            <motion.div
               whileHover="cardHover"
               initial="rest"
               variants={{
                 rest: { scale: 1, y: 0 },
                 cardHover: { scale: 1.02, y: -8, transition: { duration: 0.25 } }
               }}
               className="h-full"
            >
              {/* Loop Animation Wrapper + Styling */}
              <motion.div 
                animate={!shouldReduceMotion ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                className={`p-6 md:p-8 rounded-3xl bg-[#111111] border border-white/5 h-full relative overflow-hidden transition-all duration-300 group ${category.colorClasses.glowHover} ${category.colorClasses.borderGlowHover}`}
              >
                {/* Subtle Radial Glow Loop */}
                {!shouldReduceMotion && (
                  <motion.div 
                    animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 opacity-[0.06] rounded-full blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4 w-[150%] h-[150%] bg-gradient-to-br from-white to-transparent`}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-white/20 ${category.colorClasses.text}`}>
                      <motion.div
                        animate={!shouldReduceMotion ? { scale: [1, 1.08, 1], rotate: [0, 3, 0] } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      >
                        {category.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  {/* Skills Container (Receives Cascade) */}
                  <motion.div 
                    variants={pillCascadeContainer}
                    className="flex flex-wrap gap-3 mt-auto"
                  >
                    {category.skills.map((skill, j) => (
                      <motion.div
                        key={skill.name}
                        variants={pillCascadeItem}
                        whileHover={{ scale: 1.08, y: -2, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)" }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-white/10 hover:bg-[#1c1c1c] transition-colors cursor-default shadow-sm group/skill ${category.colorClasses.borderHover}`}
                      >
                        <span className={`text-white/50 transition-colors ${category.colorClasses.groupTextHover}`}>
                          <motion.div
                            animate={!shouldReduceMotion ? (j % 2 === 0 ? { rotate: [0, 6, 0] } : { y: [0, -2, 0] }) : {}}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: j * 0.2 }}
                          >
                            {skill.icon}
                          </motion.div>
                        </span>
                        <span className="text-sm font-medium text-white/80 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
