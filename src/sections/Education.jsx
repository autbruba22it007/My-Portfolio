import { motion } from 'framer-motion';
import { FiBook, FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "1st Place – Digital Markets",
    description: "Built a wholesale product ordering web application.",
    icon: "🏆"
  },
  {
    id: 2,
    title: "1st Place – Home Automation",
    description: "Arduino-based auto lighting system controlled via web.",
    icon: "🏆"
  },
  {
    id: 4,
    title: "Professional Milestone",
    description: "Web Developer at Velmora.",
    icon: "💼"
  }
];

export default function Education() {
  return (
    <div className="w-full flex flex-col pt-4 pb-8">
      
      {/* 2-Column Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16">
        
        {/* LEFT COLUMN: Academic Background */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/20 text-[#00f5ff] text-xs font-semibold uppercase tracking-wider mb-4">
              <FiBook className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative glass-card p-8 md:p-10 rounded-3xl overflow-hidden group bg-[#111111] border border-white/5 hover:border-[#00f5ff]/30 transition-all duration-500"
          >
            {/* Soft Cyan Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f5ff]/10 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-lg backdrop-blur-md text-[#00f5ff]">
                <FiBook className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-colors duration-300">
                B.Sc Information Technology
              </h3>
              
              <p className="text-lg text-white/60 font-medium mb-8 leading-relaxed max-w-sm">
                RD National College of Arts & Science, Erode
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                <FiCheckCircle className="w-4 h-4" />
                Graduated 2025
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Achievements & Awards */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-xs font-semibold uppercase tracking-wider mb-4">
              <FiAward className="w-3.5 h-3.5" />
              <span>Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Awards & Recognition</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex items-start gap-5 p-5 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#ff6b00]/40 transition-all duration-300 group shadow-lg hover:shadow-[0_8px_30px_rgba(255,107,0,0.15)] relative overflow-hidden"
              >
                {/* Subtle Hover Glow Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b00] to-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Trophy Icon Container */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#ff6b00]/20 to-[#ff6b00]/5 border border-[#ff6b00]/20 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                  {achievement.icon}
                </div>
                
                <div className="flex flex-col pt-1">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#ff6b00] transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
