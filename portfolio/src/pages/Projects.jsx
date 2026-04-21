import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, ArrowRight, Plus } from "lucide-react";

const Projects = () => {
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

  const d = isNight;

  // Placeholder cards
  const placeholders = [1, 2, 3];

  return (
    <section
      className={`relative w-full min-h-screen px-5 sm:px-8 py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${
        d ? "bg-[#080c14] text-white" : "bg-[#f0f4ff] text-gray-900"
      }`}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full blur-[130px] transition-all duration-700 ${
          d ? "bg-blue-700/20" : "bg-blue-300/40"
        }`} />
        <div className={`absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full blur-[110px] transition-all duration-700 ${
          d ? "bg-cyan-800/15" : "bg-cyan-200/35"
        }`} />
        <div className={`absolute bottom-[-40px] right-[-60px] w-[260px] h-[260px] rounded-full blur-[100px] transition-all duration-700 ${
          d ? "bg-indigo-800/15" : "bg-indigo-200/30"
        }`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 transition-colors duration-500 ${
            d
              ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
              : "bg-blue-100 text-blue-600 border border-blue-200"
          }`}>
            <Code2 size={11} />
            Our Work
          </span>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 transition-colors duration-500 ${
            d ? "text-white" : "text-gray-900"
          }`}>
            Our{" "}
            <span className="text-blue-500">Projects</span>
          </h2>

          <p className={`max-w-lg mx-auto text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
            d ? "text-white/50" : "text-gray-500"
          }`}>
            Real-world apps built with modern tech — clean code, great UI, and
            performance that speaks for itself.
          </p>
        </motion.div>

        {/* ── Placeholder Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-500 group ${
                d
                  ? "bg-white/[0.02] border-white/[0.06] hover:border-white/12"
                  : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {/* Subtle top strip */}
              <div className={`h-[2px] w-full transition-all duration-500 ${
                d ? "bg-white/5 group-hover:bg-white/10" : "bg-gray-100 group-hover:bg-blue-100"
              }`} />

              <div className="p-6 flex flex-col items-center justify-center text-center min-h-[220px] gap-4">

                {/* Plus icon circle */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed transition-colors duration-500 ${
                    d
                      ? "border-white/10 text-white/20 group-hover:border-blue-500/30 group-hover:text-blue-400/50"
                      : "border-gray-200 text-gray-300 group-hover:border-blue-300 group-hover:text-blue-400"
                  }`}
                >
                  <Plus size={20} />
                </motion.div>

                {/* Text */}
                <div>
                  <p className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                    d ? "text-white/25 group-hover:text-white/40" : "text-gray-300 group-hover:text-gray-400"
                  }`}>
                    This place awaits for you
                  </p>
                  <p className={`text-[11px] transition-colors duration-500 ${
                    d ? "text-white/15" : "text-gray-200"
                  }`}>
                    Something great is coming
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Center CTA / Empty State ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`relative rounded-2xl border overflow-hidden p-10 sm:p-14 text-center transition-colors duration-500 ${
            d
              ? "bg-white/[0.02] border-white/[0.07]"
              : "bg-white border-gray-200"
          }`}
        >

          {/* Animated glow behind icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`w-48 h-48 rounded-full blur-[80px] transition-colors duration-500 ${
                d ? "bg-blue-600/20" : "bg-blue-200/60"
              }`}
            />
          </div>

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-6 shadow-[0_0_32px_rgba(59,130,246,0.35)]"
          >
            <Sparkles size={28} />
          </motion.div>

          {/* Heading */}
          <h3 className={`relative z-10 text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-500 ${
            d ? "text-white" : "text-gray-900"
          }`}>
            This Place Awaits{" "}
            <span className="text-blue-500">for You</span>
          </h3>

          <p className={`relative z-10 max-w-sm mx-auto text-sm sm:text-base leading-relaxed mb-8 transition-colors duration-500 ${
            d ? "text-white/45" : "text-gray-500"
          }`}>
            We're working on something amazing. Our projects will be showcased
            here soon — each one built with care, precision, and passion.
          </p>

          {/* Animated dots row */}
          <div className="relative z-10 flex justify-center gap-2 mb-8">
            {[0, 1, 2, 3, 4].map((j) => (
              <motion.span
                key={j}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: j * 0.18,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 rounded-full bg-blue-500"
              />
            ))}
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-[0_0_28px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start a Project with Us
            <ArrowRight size={14} />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;