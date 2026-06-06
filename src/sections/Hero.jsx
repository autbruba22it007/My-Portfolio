import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiCalendar, FiBriefcase, FiUsers, FiCoffee } from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center pt-4">

      {/* Full-width container */}
      <div className="w-full flex flex-col">

        {/* Top Profile Area: Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] gap-8 lg:gap-16 mb-12 items-center">

          {/* Profile Image Column (Aligned to right of its cell to meet text) */}
          <div className="relative flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-[#ff6b00] to-[#9d4edd] shadow-[0_0_30px_rgba(255,107,0,0.15)] relative"
            >
              {/* Inner Dark Circle */}
              <div className="w-full h-full rounded-full bg-[#1c1c1c] flex items-center justify-center">
                <span className="text-[#666666] text-xl font-medium tracking-wide">Image</span>
              </div>

              {/* Availability Badge */}
              <div className="absolute bottom-4 right-4 bg-[#111] border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.5)]"></span>
                <span className="text-white font-medium text-xs md:text-sm">Available</span>
              </div>
            </motion.div>
          </div>

          {/* Content Column (Full width within its cell) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* Full Stack Developer Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-white/5 mb-6">
              <span className="text-[#00f5ff] font-bold text-sm tracking-widest">{`>_`}</span>
              <span className="text-[#00f5ff] text-xs font-bold uppercase tracking-widest">FULL STACK DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter leading-[1.05] w-full">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b00] to-[#9d4edd]">Alex</span>
              <br />
              {/* <span className="text-white">Building the Future</span> */}
            </h1>

            {/* Paragraph */}
            <p className="text-[#888888] text-[15px] sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 w-full max-w-2xl text-left md:text-left">
              Full-stack web developer with 2+ years of real-world experience building production-grade systems — including a billing & inventory platform with AI assist, a Shopify e-commerce store, and a company-wide operations dashboard. Started as an intern mastering HTML, CSS, JS, PHP, and MySQL; now shipping full systems using React, Node.js, SQLite, and Supabase. Won 1st place in two hackathons (Digital Markets & Home Automation). Comfortable working across the full stack, managing projects independently, and using AI tools to ship faster.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Explore Button with gradient border */}
              <button className="relative group rounded-full p-[1px] bg-gradient-to-r from-[#ff6b00] to-[#9d4edd] shadow-[0_0_15px_rgba(255,107,0,0.1)] transition-shadow hover:shadow-[0_0_25px_rgba(255,107,0,0.25)]">
                <div className="px-8 py-3.5 rounded-full bg-[#111] flex items-center gap-3 transition-colors group-hover:bg-[#161616]">
                  <span className="text-white font-semibold">Explore My World</span>
                  <FiArrowRight className="text-white/70 group-hover:text-white transition-colors w-5 h-5" />
                </div>
              </button>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#888888]">
                <FiMapPin className="w-5 h-5" />
                <span className="font-medium text-lg">San Francisco, CA</span>
              </div>
            </div>

          </div>
        </div>

        {/* Stat Cards Row */}
        <div className="w-full border-t border-white/5 pt-8 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {[
              { value: "5+", label: "YEARS EXP", icon: <FiCalendar className="w-8 h-8 text-[#ff6b00]" /> },
              { value: "40+", label: "PROJECTS", icon: <FiBriefcase className="w-8 h-8 text-[#9d4edd]" /> },
              { value: "25+", label: "CLIENTS", icon: <FiUsers className="w-8 h-8 text-[#9d4edd]" /> },
              { value: "1k+", label: "CUPS OF COFFEE", icon: <FiCoffee className="w-8 h-8 text-[#ff6b00]" /> },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, backgroundColor: "#1c1c1c" }}
                className="flex items-center justify-between px-6 py-5 rounded-[1.25rem] bg-[#161616] border border-white/5 transition-colors duration-300 w-full"
              >
                <div className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] lg:text-xs font-bold text-[#888888] tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
                <div className="opacity-80">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
