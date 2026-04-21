import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Target, ShieldCheck, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <Zap size={16}/>,         label: "High Performance" },
  { icon: <Smartphone size={16}/>,  label: "Mobile Responsive" },
  { icon: <Search size={16}/>,      label: "SEO Optimized" },
  { icon: <Target size={16}/>,      label: "Conversion Focused" },
  { icon: <ShieldCheck size={16}/>, label: "Secure & Scalable" },
];

const Hero = () => {
  const [isNight, setIsNight] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const sync = () =>
      setIsNight(document.documentElement.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // ── Theme tokens ──────────────────────────────────────────────
  const t = {
    bg:         isNight ? "bg-black text-white"         : "bg-white text-gray-900",
    glowL:      isNight ? "bg-blue-600 opacity-60"      : "bg-blue-300 opacity-40",
    glowR:      isNight ? "bg-blue-400 opacity-40"      : "bg-indigo-200 opacity-50",
    badge:      isNight ? "bg-white text-black"         : "bg-gray-900 text-white",
    dot:        isNight ? "bg-blue-500"                 : "bg-blue-400",
    heading:    isNight ? "text-white"                  : "text-gray-900",
    accent:     isNight ? "text-blue-400"               : "text-blue-600",
    cursor:     isNight ? "border-white"                : "border-gray-900",
    subhead:    isNight ? "text-white/90"               : "text-gray-800",
    desc:       isNight ? "text-white/60"               : "text-gray-500",
    btnPriIdle: isNight
      ? "border-white/25 text-white bg-blue-500 hover:bg-blue-600"
      : "border-gray-300 bg-blue-500 text-white ",
    btnSecIdle: isNight
      ? "bg-white/5 border-white/15 text-white hover:bg-white/10"
      : "bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-400",
    chip:       isNight
      ? "border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
      : "border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900",
    label:      isNight ? "text-white/40"               : "text-gray-400",
  };
  // ──────────────────────────────────────────────────────────────

  return (
    <div
      className={`relative w-full pb-10 flex flex-col justify-center pt-24 px-5 sm:px-8 overflow-hidden transition-colors duration-500 ${t.bg}`}
    >

      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`
          absolute -bottom-24 -left-16
          w-[260px] h-[260px] sm:w-[480px] sm:h-[380px] md:w-[680px] md:h-[480px]
          rounded-full blur-[100px] sm:blur-[140px] md:blur-[180px]
          transition-all duration-700 ${t.glowL}
        `} />
        <div className={`
          absolute -bottom-32 -right-20
          w-[220px] h-[220px] sm:w-[420px] sm:h-[340px] md:w-[620px] md:h-[440px]
          rounded-full blur-[100px] sm:blur-[140px] md:blur-[180px]
          transition-all duration-700 ${t.glowR}
        `} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-5 sm:gap-7">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-500 ${t.badge}`}
        >
          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className={`w-2 h-2 rounded-full blur-[1.5px] shrink-0 transition-colors duration-500 ${t.dot}`}
          />
          High Performance Web Solutions
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-1 sm:space-y-2"
        >
          <h1 className={`text-[30px] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight transition-colors duration-500 ${t.heading}`}>
            We Build The{" "}
            <span className={`transition-colors duration-500 great-vibes-regular ${t.accent}`}>
              Engines
            </span>{" "}
            That
          </h1>

          {/* Typewriter — sm+ only */}
          <div className="hidden sm:block overflow-hidden">
            <motion.h1
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, delay: 0.4, ease: "easeOut" }}
              className={`whitespace-nowrap border-r-2 text-[30px] sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight transition-colors duration-500 ${t.heading} ${t.cursor}`}
            >
              Drive Digital Growth
            </motion.h1>
          </div>

          {/* Plain text — mobile only */}
          <h1 className={`sm:hidden text-[2rem] leading-tight font-medium tracking-tight transition-colors duration-500 ${t.subhead}`}>
            Drive Digital Growth
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className={`max-w-sm sm:max-w-lg text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0 transition-colors duration-500 ${t.desc}`}
        >
          We craft scalable, high-performance web experiences that help brands
          grow faster and smarter in the digital world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          {/* Start a Project → /contact */}
          <Link
            to="/contact"
            className={`group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3 rounded-full border text-sm hover:bg-blue-500 sm:text-base font-medium transition-all duration-300 ${t.btnPriIdle}`}
          >
            Start a Project
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Schedule a Call → WhatsApp */}
          <a
            href="https://wa.me/916374462402?text=Hi%2C%20I%20want%20to%20schedule%20a%20call"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full border text-sm sm:text-base font-medium transition-all duration-300 ${t.btnSecIdle}`}
          >
            <CalendarDays size={16} />
            Schedule a Call
          </a>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="w-full pt-2 sm:pt-4"
        >
          <p className={`text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 transition-colors duration-500 ${t.label}`}>
            Every Website We Build Comes With
          </p>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-2.5 max-w-[280px] sm:max-w-none mx-auto">
            {features.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95 + i * 0.07 }}
                className={`flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-full border text-[11px] sm:text-xs font-medium transition-all duration-300 ${t.chip} ${
                  i === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="leading-none">{item.icon}</span>
                {item.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;