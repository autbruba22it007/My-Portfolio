import { motion } from 'framer-motion';
import { FiLayers, FiCode, FiDatabase, FiTool, FiMonitor, FiTarget, FiDroplet, FiCpu, FiUsers } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaShopify, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiVite, SiMysql, SiSqlite, SiSupabase, SiPostgresql, SiVercel } from 'react-icons/si';

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <FiMonitor className="w-5 h-5" />,
    colorClasses: {
      text: "text-neon-cyan",
      borderHover: "hover:border-neon-cyan/50",
      groupTextHover: "group-hover/skill:text-neon-cyan"
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
      text: "text-neon-purple",
      borderHover: "hover:border-neon-purple/50",
      groupTextHover: "group-hover/skill:text-neon-purple"
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
      text: "text-neon-orange",
      borderHover: "hover:border-neon-orange/50",
      groupTextHover: "group-hover/skill:text-neon-orange"
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
      groupTextHover: "group-hover/skill:text-[#00ff88]"
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
      groupTextHover: "group-hover/skill:text-pink-500"
    },
    skills: [
      { name: "Meta Ads", icon: <FiTarget /> },
      { name: "Influencer Mktg", icon: <FiUsers /> },
    ]
  },
  {
    title: "Tools & AI",
    icon: <FiTool className="w-5 h-5" />,
    colorClasses: {
      text: "text-gray-300",
      borderHover: "hover:border-gray-300/50",
      groupTextHover: "group-hover/skill:text-gray-300"
    },
    skills: [
      { name: "Claude AI", icon: <FiCpu /> },
      { name: "Gemini", icon: <FiCpu /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Vercel", icon: <SiVercel /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="glass-card p-6 md:p-8 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${category.colorClasses.text}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-dark-bg/50 border border-white/10 hover:bg-white/10 transition-all cursor-default shadow-sm group/skill ${category.colorClasses.borderHover}`}
                >
                  <span className={`text-white/50 transition-colors ${category.colorClasses.groupTextHover}`}>
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-white/80 group-hover/skill:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
