import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FiFolder, 
  FiExternalLink, 
  FiGithub, 
  FiCheckCircle, 
  FiLayers, 
  FiCalendar, 
  FiLink, 
  FiDownload, 
  FiBarChart2, 
  FiGlobe, 
  FiLock, 
  FiCopy, 
  FiActivity,
  FiShoppingCart,
  FiBox,
  FiMonitor
} from 'react-icons/fi';
import { FaQrcode, FaShopify } from 'react-icons/fa';

const PROJECTS = [
  {
    id: "01",
    title: "SliceURL",
    subtitle: "Smart URL Shortener",
    category: "Full Stack Platform",
    type: "Personal Project",
    status: "LIVE",
    date: "2025",
    image: "/images/projects/slice-url-two.vercel.app_.png",
    shortDescription: "A full-stack URL shortener that transforms long URLs into short, shareable links with custom aliases, bulk shortening, QR code generation, click tracking and an analytics dashboard.",
    overview: "SliceURL is a full-stack URL management platform that generates short links from long URLs. Users can create custom aliases, shorten multiple URLs simultaneously, generate downloadable QR codes, and monitor link performance through an analytics dashboard.",
    summary: "A full-stack URL shortener that transforms long URLs into short, shareable links with custom aliases, bulk shortening, QR code generation, click tracking and an analytics dashboard.",
    liveUrl: "https://slice-url-two.vercel.app/",
    sourceUrl: null, // Add only after repo link is provided
    highlights: [
      { name: "Custom URL Aliases", icon: <FiLink className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Bulk URL Shortening (up to 10 URLs)", icon: <FiLayers className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "QR Code Generation & PNG Download", icon: <FaQrcode className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "Click Tracking & Analytics Dashboard", icon: <FiBarChart2 className="w-4 h-4 text-[#00ff88]" /> },
    ],
    features: [
      "Automatic 6-character short URL generation",
      "Custom aliases with duplicate detection",
      "Server-side URL and alias validation",
      "Click tracking and automatic redirection",
      "Bulk shortening for up to 10 URLs",
      "QR code generation with PNG download",
      "Search and filter links",
      "Delete links with confirmation",
      "Analytics showing total links, total clicks, most-clicked link and top-five link statistics",
      "WhatsApp and X sharing with clipboard support"
    ],
    techCategories: [
      { name: "Frontend", skills: ["React", "Vite", "Tailwind CSS v4", "Axios", "Recharts", "Lucide React"] },
      { name: "Backend", skills: ["Node.js", "Express.js", "Zod", "Prisma ORM v5", "Nanoid"] },
      { name: "Database", skills: ["PostgreSQL", "Neon"] },
      { name: "Deployment", skills: ["Vercel", "Render", "Neon"] }
    ],
    previewType: "sliceurl"
  },
  {
    id: "02",
    title: "Justmixx",
    subtitle: "Shopify E-commerce Store",
    category: "Commercial E-commerce",
    type: "Commercial E-commerce Project",
    status: "LIVE",
    date: "2024",
    image: "/images/projects/justmixx.png",
    shortDescription: "Designed and developed a live e-commerce storefront for Justmixx using Shopify Liquid. The platform enables customers to explore household cleaning and DIY care products, browse collections, view product details, add products to their shopping cart and place orders online.",
    overview: "Designed and developed a live e-commerce storefront for Justmixx using Shopify Liquid. The platform enables customers to explore household cleaning and DIY care products, browse collections, view product details, add products to their shopping cart and place orders online.",
    summary: "Designed and developed a live e-commerce storefront for Justmixx using Shopify Liquid. The platform enables customers to explore household cleaning and DIY care products, browse collections, view product details, add products to their shopping cart and place orders online.",
    liveUrl: "https://www.justmixx.com/",
    sourceUrl: null, // Live commercial project - no repo link
    highlights: [
      { name: "Shopify Liquid Development", icon: <FaShopify className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Dynamic Product Catalog", icon: <FiBox className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "E-commerce Cart & Checkout", icon: <FiShoppingCart className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "Responsive Storefront", icon: <FiMonitor className="w-4 h-4 text-[#00ff88]" /> },
    ],
    features: [
      "Custom Shopify storefront development",
      "Dynamic product and collection pages",
      "Product detail pages",
      "Shopping cart and add-to-cart functionality",
      "Product categorization and navigation",
      "Responsive mobile-friendly storefront",
      "Product pricing and availability display",
      "Online ordering and Shopify checkout integration"
    ],
    techCategories: [
      { name: "Platform", skills: ["Shopify", "Shopify Liquid", "Shopify Theme Development"] },
      { name: "Frontend", skills: ["HTML5", "CSS3", "JavaScript"] }
    ]
  },
  {
    id: "03",
    title: "Smart Billing System",
    subtitle: "Billing & Inventory Platform",
    category: "Full Stack Application",
    type: "Production System",
    status: "LIVE",
    date: "2024",
    image: "/images/projects/smart-billing.png",
    shortDescription: "Production-ready billing app with product image support, stock tracking, dine-in/take-away orders, multiple payment modes, and CSV import/export.",
    overview: "Production-ready billing app with product image support, stock tracking, dine-in/take-away orders, multiple payment modes, and CSV import/export.",
    summary: "Production-ready billing app with product image support, stock tracking, dine-in/take-away orders, multiple payment modes, and CSV import/export.",
    liveUrl: "https://smart-billing-system-taupe.vercel.app",
    sourceUrl: "#",
    highlights: [
      { name: "Product Image Support", icon: <FiLayers className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Stock Tracking & Management", icon: <FiBarChart2 className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "Dine-in & Takeaway Ordering", icon: <FiCheckCircle className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "CSV Import & Export Engine", icon: <FiDownload className="w-4 h-4 text-[#00ff88]" /> },
    ],
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
    id: "04",
    title: "Influencer Calendar 2.0",
    subtitle: "Campaign Management",
    category: "Marketing Platform",
    type: "Internal Tool",
    status: "LIVE",
    date: "2024",
    image: "/images/projects/influencer-calender.png",
    shortDescription: "Full influencer campaign tool — calendar view, posting & payment tracking, analytics dashboard, platform filters, notifications, and CSV import/export.",
    overview: "Full influencer campaign tool — calendar view, posting & payment tracking, analytics dashboard, platform filters, notifications, and CSV import/export.",
    summary: "Full influencer campaign tool — calendar view, posting & payment tracking, analytics dashboard, platform filters, notifications, and CSV import/export.",
    liveUrl: "https://influencer-calendar-nu.vercel.app",
    sourceUrl: "#",
    highlights: [
      { name: "Interactive Calendar View", icon: <FiCalendar className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Posting & Payment Tracking", icon: <FiBarChart2 className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "Analytics Dashboard & Filters", icon: <FiLayers className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "Automated Notifications", icon: <FiCheckCircle className="w-4 h-4 text-[#00ff88]" /> },
    ],
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
    id: "05",
    title: "Image Gallery — CRUD",
    subtitle: "Cloud File Manager",
    category: "File Management",
    type: "Personal Project",
    status: "LIVE",
    date: "2024",
    image: "/images/projects/photo-gallery-six-eta.vercel.app_folder_8.png",
    shortDescription: "File manager with folder create/rename/delete and image upload, view, replace, and delete per folder — full CRUD with Supabase backend.",
    overview: "File manager with folder create/rename/delete and image upload, view, replace, and delete per folder — full CRUD with Supabase backend.",
    summary: "File manager with folder create/rename/delete and image upload, view, replace, and delete per folder — full CRUD with Supabase backend.",
    liveUrl: "https://photo-gallery-six-eta.vercel.app",
    sourceUrl: "#",
    highlights: [
      { name: "Folder Create / Rename / Delete", icon: <FiFolder className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Image Upload, View & Replace", icon: <FiLayers className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "Full CRUD Operations", icon: <FiCheckCircle className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "Supabase Backend Integration", icon: <FiGlobe className="w-4 h-4 text-[#00ff88]" /> },
    ],
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
    id: "06",
    title: "Developer Portfolio",
    subtitle: "Developer Operating System",
    category: "Personal Brand",
    type: "Personal Project",
    status: "LIVE",
    date: "2024",
    image: "/images/projects/photogravper-portfolio.png",
    shortDescription: "Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.",
    overview: "Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.",
    summary: "Personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.",
    liveUrl: "https://portfolio-sigma-jade-10.vercel.app",
    sourceUrl: "#",
    highlights: [
      { name: "Two-Column Project Navigator", icon: <FiFolder className="w-4 h-4 text-[#ff6b00]" /> },
      { name: "Skills Ecosystem & Metrics", icon: <FiLayers className="w-4 h-4 text-[#00f5ff]" /> },
      { name: "Living Interface Loop Motion", icon: <FiActivity className="w-4 h-4 text-[#9d4edd]" /> },
      { name: "Dark Luxury Glassmorphic UI", icon: <FiCheckCircle className="w-4 h-4 text-[#00ff88]" /> },
    ],
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

// Helper to extract clean domain for browser bar display
const getDomain = (url) => {
  if (!url || url === '#') return 'localhost';
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  }
};

// Reusable Project Status Badge component supporting LIVE, COMPLETED, and IN DEVELOPMENT
function ProjectStatusBadge({ status, size = "md", className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const normalized = (status || 'LIVE').toUpperCase();

  if (normalized === 'LIVE') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full shrink-0 ${
        size === 'sm' ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-xs'
      } ${className}`}>
        <motion.span
          animate={!shouldReduceMotion ? { scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className={`rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] ${size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'}`}
        />
        <span>LIVE</span>
      </span>
    );
  }

  if (normalized === 'COMPLETED') {
    return (
      <motion.span 
        initial={!shouldReduceMotion ? { opacity: 0, scale: 0.95 } : {}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/20 rounded-full shrink-0 ${
          size === 'sm' ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-xs'
        } ${className}`}
      >
        <FiCheckCircle className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
        <span>COMPLETED</span>
      </motion.span>
    );
  }

  // IN DEVELOPMENT
  return (
    <span className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full shrink-0 ${
      size === 'sm' ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-xs'
    } ${className}`}>
      <motion.span
        animate={!shouldReduceMotion ? { opacity: [0.4, 1, 0.4] } : {}}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className={`rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00] ${size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'}`}
      />
      <span>IN DEV</span>
    </span>
  );
}

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0].id);
  const [imgError, setImgError] = useState(false);
  const activeProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];
  const shouldReduceMotion = useReducedMotion();

  // Reset image error state when switching projects
  useEffect(() => {
    setImgError(false);
  }, [selectedProjectId]);

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
          Explore my collection of high-performance applications, full-stack tools, and digital solutions.
        </p>
      </motion.div>

      {/* 2-Column Grid Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 lg:gap-8">
        
        {/* LEFT COLUMN: Project Navigator */}
        <div className="flex flex-col gap-3">
          {PROJECTS.map((project) => {
            const isActive = selectedProjectId === project.id;
            
            return (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                whileHover={!shouldReduceMotion ? { y: -3 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`relative flex items-center p-4 rounded-2xl transition-all duration-300 text-left overflow-hidden group w-full ${
                  isActive 
                    ? "bg-[#161616] border border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.12)]" 
                    : "bg-[#111111] border border-white/5 hover:bg-[#161616] hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b00] to-[#9d4edd]" />
                )}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/5 to-transparent opacity-60 pointer-events-none" />
                )}

                <div className="relative z-10 w-full flex items-center justify-between pl-2">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`text-xl font-black transition-colors shrink-0 ${isActive ? "text-[#ff6b00]" : "text-white/20"}`}>
                      {project.id}
                    </span>
                    
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base font-bold transition-colors truncate ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                          {project.title}
                        </h3>
                        <ProjectStatusBadge status={project.status} size="sm" />
                      </div>
                      <span className="text-xs text-white/40 mt-0.5 truncate">
                        {project.subtitle || project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Project Detail Panel */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectId}
              initial={!shouldReduceMotion ? { opacity: 0, x: 12 } : { opacity: 0 }}
              animate={!shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
              exit={!shouldReduceMotion ? { opacity: 0, x: -12 } : { opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="w-full h-full bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* 1. Detail Header (Animated sequentially) */}
                <motion.div 
                  initial={!shouldReduceMotion ? { opacity: 0, y: 8 } : {}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.04, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between mb-8"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <ProjectStatusBadge status={activeProject.status} size="md" />
                      {activeProject.type && (
                        <span className="text-xs font-semibold text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          {activeProject.type}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {activeProject.date}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-1.5">
                      {activeProject.title}
                    </h2>
                    <h3 className="text-sm font-semibold text-[#9d4edd] tracking-wider uppercase mb-3">
                      {activeProject.subtitle || activeProject.category}
                    </h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed max-w-2xl mb-2">
                      {activeProject.shortDescription || activeProject.summary}
                    </p>
                    {activeProject.overview && activeProject.overview !== activeProject.shortDescription && (
                      <p className="text-white/50 text-xs leading-relaxed max-w-2xl">
                        {activeProject.overview}
                      </p>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 shrink-0 flex-wrap">
                    {activeProject.liveUrl && (
                      <motion.a 
                        href={activeProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                        transition={{ duration: 0.2 }}
                        className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff6b00] hover:bg-[#ff8533] text-white font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </motion.a>
                    )}
                    {activeProject.sourceUrl && activeProject.sourceUrl !== "#" ? (
                      <motion.a 
                        href={activeProject.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-colors"
                      >
                        Source <FiGithub />
                      </motion.a>
                    ) : activeProject.sourceUrl === "#" ? (
                      <button 
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 font-semibold text-sm transition-colors cursor-not-allowed opacity-60"
                        title="Repository link coming soon"
                      >
                        Source <FiGithub />
                      </button>
                    ) : null}
                  </div>
                </motion.div>

                {/* 2. Project Highlights Grid (Animated sequentially) */}
                {activeProject.highlights && (
                  <motion.div 
                    initial={!shouldReduceMotion ? { opacity: 0, y: 10 } : {}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
                  >
                    {activeProject.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={!shouldReduceMotion ? { y: -3 } : {}}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#ff6b00]/30 hover:shadow-[0_4px_20px_rgba(255,107,0,0.12)] transition-all duration-300 group shadow-sm"
                      >
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-[#ff6b00]/10 transition-colors shrink-0">
                          <motion.div
                            whileHover={!shouldReduceMotion ? { scale: 1.08 } : {}}
                            transition={{ duration: 0.2 }}
                          >
                            {highlight.icon}
                          </motion.div>
                        </div>
                        <span className="text-xs font-semibold text-white/90 leading-tight">
                          {highlight.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* 3. Interactive Browser-Style Project Preview with Actual Screenshot */}
                <motion.div
                  initial={!shouldReduceMotion ? { opacity: 0, y: 10 } : {}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.16, ease: "easeOut" }}
                  className="w-full mb-10"
                >
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="link"
                    tabIndex={0}
                    aria-label={`Explore live demo of ${activeProject.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.open(activeProject.liveUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="block w-full aspect-[21/9] min-h-[250px] sm:min-h-[300px] rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#ff6b00]/40 hover:shadow-[0_0_25px_rgba(255,107,0,0.18)] transition-all duration-300 overflow-hidden relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/50"
                  >
                    {/* Scaled & Brightened Content Wrapper */}
                    <div className="w-full h-full flex flex-col transition-all duration-300 group-hover:scale-[1.01] group-hover:brightness-105">
                      
                      {/* Browser Header Bar */}
                      <div className="flex items-center justify-between p-3 sm:px-6 sm:py-3 border-b border-white/5 bg-[#121212]/90 backdrop-blur-md shrink-0 z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-white/5 text-[11px] text-white/50 font-mono">
                          <FiLock className="w-3 h-3 text-[#00ff88]" />
                          <span className="hidden sm:inline">https://</span>{getDomain(activeProject.liveUrl)}
                        </div>
                        <ProjectStatusBadge status={activeProject.status} size="sm" />
                      </div>

                      {/* App Body Content: Actual Screenshot or Graceful Fallback */}
                      <div className="flex-1 relative overflow-hidden bg-[#0c0c0c] flex items-center justify-center">
                        {activeProject.image && !imgError ? (
                          <img
                            src={activeProject.image}
                            alt={`${activeProject.title} live interface preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            loading="lazy"
                            onError={() => setImgError(true)}
                          />
                        ) : activeProject.previewType === 'sliceurl' ? (
                          /* Bespoke SliceURL Visual Application Preview (Fallback) */
                          <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-[#121212] via-[#0d0d0d] to-[#080808]">
                            <div className="my-auto py-1 flex flex-col gap-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-base sm:text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#9d4edd]">
                                    SliceURL
                                  </span>
                                  <span className="text-[10px] sm:text-xs text-white/40">| Smart URL Shortener</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-[10px] text-white/40">
                                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">PostgreSQL + Neon</span>
                                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Express + Prisma</span>
                                </div>
                              </div>

                              <div className="p-2 sm:p-2.5 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-between gap-2 shadow-inner">
                                <div className="flex items-center gap-2 text-white/70 text-xs font-mono min-w-0 pl-1">
                                  <FiLink className="text-[#ff6b00] shrink-0 w-3.5 h-3.5" />
                                  <span className="truncate text-white/90 text-[11px] sm:text-xs">
                                    https://github.com/autbruba22it007/super-lengthy-production-campaign-url...
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <span className="hidden md:inline-block px-2 py-1 rounded bg-[#1e1e1e] border border-white/10 text-[10px] font-mono text-white/50">
                                    /custom-alias
                                  </span>
                                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#ff6b00] to-[#9d4edd] text-white font-semibold text-[11px] sm:text-xs shadow-sm">
                                    Slice URL
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                                <div className="sm:col-span-7 flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#141414]/80 border border-[#00f5ff]/20">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shrink-0 animate-pulse" />
                                    <span className="font-mono text-[11px] sm:text-xs text-[#00f5ff] font-semibold truncate">
                                      slice.url/live26
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[10px] shrink-0">
                                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 text-white/60">
                                      <FiCopy className="w-3 h-3" /> Copy
                                    </span>
                                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#9d4edd]/20 text-[#9d4edd] border border-[#9d4edd]/30">
                                      <FaQrcode className="w-3 h-3" /> QR PNG
                                    </span>
                                  </div>
                                </div>

                                <div className="sm:col-span-5 grid grid-cols-2 gap-1.5">
                                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-[#141414]/80 border border-white/5">
                                    <span className="text-[9px] text-white/40 uppercase">Clicks</span>
                                    <span className="text-xs font-mono font-bold text-[#00ff88]">2,840</span>
                                  </div>
                                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-[#141414]/80 border border-white/5">
                                    <span className="text-[9px] text-white/40 uppercase">Top Link</span>
                                    <span className="text-xs font-mono font-bold text-[#ff6b00]">1.2k</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Wireframe UI Fallback */
                          <div className="w-full h-full p-4 sm:p-6 flex flex-col gap-4 opacity-60">
                            <div className="flex gap-6 h-full">
                              <div className="w-1/4 h-full flex flex-col gap-2.5 border-r border-white/5 pr-4">
                                {[1, 2, 3, 4].map(i => (
                                  <div key={i} className="w-full h-7 rounded-lg bg-white/5" />
                                ))}
                              </div>
                              <div className="flex-1 flex flex-col gap-3">
                                <div className="flex gap-3">
                                  {[1, 2, 3].map(i => (
                                    <div key={i} className="flex-1 h-16 sm:h-20 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5" />
                                  ))}
                                </div>
                                <div className="flex-1 min-h-[60px] rounded-xl bg-gradient-to-tr from-[#ff6b00]/10 via-transparent to-[#9d4edd]/10 border border-white/5" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Centered "Explore Project" interaction label */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center backdrop-blur-xs">
                      <div className="px-6 py-2.5 rounded-full bg-[#111111]/90 border border-[#ff6b00]/50 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(255,107,0,0.3)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <span>Explore Project</span>
                        <FiExternalLink className="w-4 h-4 text-[#ff6b00]" />
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* 4. Content Split: Key Features & Tech Stack (Animated sequentially) */}
                <motion.div 
                  initial={!shouldReduceMotion ? { opacity: 0, y: 10 } : {}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.22, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-auto"
                >
                  {/* Key Features */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-5">
                      <FiCheckCircle className="text-[#00f5ff]" /> Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={!shouldReduceMotion ? { opacity: 0, x: -10 } : {}}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + Math.min(i * 0.025, 0.25) }}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70"
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
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest w-24 shrink-0 mt-2">
                            {category.name}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, j) => (
                              <motion.span 
                                key={skill}
                                initial={!shouldReduceMotion ? { opacity: 0, scale: 0.9 } : {}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.08 + (i * 0.04) + (j * 0.02) }}
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

                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
