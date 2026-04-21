import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  Lightbulb,
  Heart,
  Rocket,
  Globe,
  Coffee,
  ArrowRight,
  Target,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  { label: "React / Next.js",   level: 90 },
  { label: "Node.js / Express", level: 85 },
  { label: "MongoDB",           level: 82 },
  { label: "Tailwind CSS",      level: 95 },
  { label: "UI / UX Design",   level: 80 },
];

const values = [
  {
    icon: <Code2 size={18} />,
    title: "Clean Code",
    desc: "Every line written with purpose — readable, scalable, and maintainable.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Lightbulb size={18} />,
    title: "Creative Thinking",
    desc: "Turning complex problems into elegant, simple solutions.",
    accent: "from-indigo-500 to-blue-400",
  },
  {
    icon: <Target size={18} />,
    title: "Result Driven",
    desc: "We ship products that actually work — fast, focused, and on time.",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Heart size={18} />,
    title: "Built with Passion",
    desc: "Every project gets the same love — whether it's a landing page or a full platform.",
    accent: "from-cyan-500 to-blue-500",
  },
];

const stats = [
  { icon: <Rocket size={16} />, value: "01", label: "Projects Built" },
  { icon: <Globe size={16} />,  value: "01", label: "Happy Clients" },
  { icon: <Coffee size={16} />, value: "∞",  label: "Cups of Coffee" },
  { icon: <Layers size={16} />, value: "3+", label: "Years Learning" },
];

const About = () => {
  const [isNight, setIsNight] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [imgError, setImgError] = useState(false);

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

  return (
    <section
      className={`relative w-full px-5 sm:px-8 py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${
        d ? "bg-[#080c14] text-white" : "bg-[#f0f4ff] text-gray-900"
      }`}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full blur-[130px] transition-all duration-700 ${
          d ? "bg-blue-700/20" : "bg-blue-300/40"
        }`} />
        <div className={`absolute top-[40%] left-[-80px] w-[300px] h-[300px] rounded-full blur-[120px] transition-all duration-700 ${
          d ? "bg-cyan-800/15" : "bg-cyan-200/30"
        }`} />
        <div className={`absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full blur-[110px] transition-all duration-700 ${
          d ? "bg-indigo-800/20" : "bg-indigo-200/35"
        }`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16 sm:space-y-20">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 transition-colors duration-500 ${
            d ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
              : "bg-blue-100 text-blue-600 border border-blue-200"
          }`}>
            <User size={11} />
            Who We Are
          </span>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 transition-colors duration-500 ${
            d ? "text-white" : "text-gray-900"
          }`}>
            About <span className="text-blue-500">Us</span>
          </h2>

          <p className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
            d ? "text-white/50" : "text-gray-500"
          }`}>
            We're a passionate team of developers and designers who love
            turning ideas into digital products that make a difference.
          </p>
        </motion.div>

        {/* ── Intro Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className={`relative rounded-2xl border overflow-hidden transition-colors duration-500 ${
            d ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

          <div className="p-7 sm:p-10 flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">

            {/* ── Photo ── */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="shrink-0 mx-auto sm:mx-0"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 blur-[18px] opacity-40" />

                {/* Image — fallback to User icon if error */}
                {!imgError ? (
                  <img
                    src="/mypic.jpeg"
                    alt="Irsath"
                    onError={() => setImgError(true)}
                    className="relative w-full h-full rounded-full object-cover border-3 border-blue-500/30"
                  />
                ) : (
                  <div className={`relative w-full h-full rounded-full flex flex-col items-center justify-center border-2 border-dashed transition-colors duration-500 ${
                    d
                      ? "bg-white/[0.04] border-blue-500/30 text-white/30"
                      : "bg-blue-50 border-blue-300 text-blue-300"
                  }`}>
                    <User size={32} className="mb-0.5" />
                    <span className="text-[9px] font-semibold uppercase tracking-widest">
                      Photo
                    </span>
                  </div>
                )}

                {/* Online dot */}
                <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 shadow-md border-2 ${
                  d ? "border-[#080c14]" : "border-white"
                }`} />
              </div>
            </motion.div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${
                  d ? "text-white" : "text-gray-900"
                }`}>
                  Hi, I'm Irsath 👋
                </h3>
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border transition-colors duration-500 ${
                  d ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    : "bg-blue-50 text-blue-600 border-blue-200"
                }`}>
                  Full Stack Developer
                </span>
              </div>

              <p className={`text-sm sm:text-[15px] leading-relaxed mb-4 transition-colors duration-500 ${
                d ? "text-white/55" : "text-gray-500"
              }`}>
                I'm a self-taught full-stack developer from Tamil Nadu, India —
                passionate about building fast, beautiful web apps that solve
                real problems. I work with the MERN stack, Next.js, and modern
                tools to craft experiences that users love.
              </p>

              <p className={`text-sm sm:text-[15px] leading-relaxed transition-colors duration-500 ${
                d ? "text-white/55" : "text-gray-500"
              }`}>
                Beyond code, I'm drawn to creative fields — UI design,
                animation, and film. I believe great software is like great
                storytelling: every detail matters, and the best products feel
                effortless to use.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex flex-col items-center justify-center text-center p-5 rounded-2xl border transition-all duration-500 ${
                d
                  ? "bg-white/[0.03] border-white/[0.07] hover:border-white/15"
                  : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-sm"
              }`}
            >
              <span className={`mb-2 transition-colors duration-500 ${
                d ? "text-blue-400" : "text-blue-600"
              }`}>
                {stat.icon}
              </span>
              <span className={`text-2xl sm:text-3xl font-bold mb-0.5 transition-colors duration-500 ${
                d ? "text-white" : "text-gray-900"
              }`}>
                {stat.value}
              </span>
              <span className={`text-[11px] sm:text-xs transition-colors duration-500 ${
                d ? "text-white/40" : "text-gray-400"
              }`}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border p-7 sm:p-10 transition-colors duration-500 ${
            d ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <p className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-7 transition-colors duration-500 ${
            d ? "text-white/35" : "text-gray-400"
          }`}>
            Technical Skills
          </p>

          <div className="flex flex-col gap-5">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium transition-colors duration-500 ${
                    d ? "text-white/75" : "text-gray-700"
                  }`}>
                    {skill.label}
                  </span>
                  <span className={`text-xs font-semibold transition-colors duration-500 ${
                    d ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-1.5 rounded-full overflow-hidden transition-colors duration-500 ${
                  d ? "bg-white/[0.07]" : "bg-gray-100"
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Values Grid ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-6 text-center transition-colors duration-500 ${
              d ? "text-white/35" : "text-gray-400"
            }`}
          >
            What We Stand For
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 p-5 sm:p-6 rounded-2xl border transition-all duration-500 ${
                  d
                    ? "bg-white/[0.03] border-white/[0.07] hover:border-white/14 hover:bg-white/[0.05]"
                    : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-sm"
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${val.accent} text-white shrink-0`}>
                  {val.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                    d ? "text-white" : "text-gray-900"
                  }`}>
                    {val.title}
                  </h4>
                  <p className={`text-xs sm:text-[13px] leading-relaxed transition-colors duration-500 ${
                    d ? "text-white/45" : "text-gray-500"
                  }`}>
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-2xl border overflow-hidden p-8 sm:p-12 text-center transition-colors duration-500 ${
            d ? "bg-white/[0.02] border-white/[0.07]" : "bg-white border-gray-200"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`w-48 h-48 rounded-full blur-[80px] transition-colors duration-500 ${
                d ? "bg-blue-600/20" : "bg-blue-200/60"
              }`}
            />
          </div>

          <p className={`relative z-10 text-[10px] font-bold uppercase tracking-[0.15em] mb-4 transition-colors duration-500 ${
            d ? "text-white/35" : "text-gray-400"
          }`}>
            Ready to Build Together?
          </p>

          <h3 className={`relative z-10 text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-500 ${
            d ? "text-white" : "text-gray-900"
          }`}>
            Let's Create Something{" "}
            <span className="text-blue-500">Amazing</span>
          </h3>

          <p className={`relative z-10 max-w-sm mx-auto text-sm leading-relaxed mb-7 transition-colors duration-500 ${
            d ? "text-white/45" : "text-gray-500"
          }`}>
            Have a project in mind? Let's talk about how we can bring your idea
            to life — fast, clean, and built to last.
          </p>

          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-[0_0_28px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;