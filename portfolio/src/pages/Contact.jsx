import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail, Phone, MapPin, Send, MessageSquare,
  CheckCircle2, Loader2, IndianRupee, User, ChevronDown
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

// ── EmailJS Config ──────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID // ← replace
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID // ← replace
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
// ────────────────────────────────────────────

const countryCodes = [
  { code: "+91",  flag: "🇮🇳", country: "India" },
  { code: "+1",   flag: "🇺🇸", country: "USA" },
  { code: "+44",  flag: "🇬🇧", country: "UK" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+60",  flag: "🇲🇾", country: "Malaysia" },
  { code: "+65",  flag: "🇸🇬", country: "Singapore" },
  { code: "+61",  flag: "🇦🇺", country: "Australia" },
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "mohideen.s1022@gmail.com",
    href: "mailto:mohideen.s1022@gmail.com",
    accent: "from-blue-500 to-cyan-400",
    accentText: "text-blue-400",
    accentTextLight: "text-blue-600",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone / WhatsApp",
    value: "+91 63744 62402",
    href: "tel:+916374462402",
    accent: "from-indigo-500 to-blue-400",
    accentText: "text-indigo-400",
    accentTextLight: "text-indigo-600",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
    accent: "from-blue-500 to-indigo-500",
    accentText: "text-blue-400",
    accentTextLight: "text-blue-600",
  },
];

const socials = [
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/irsath",
    color: "hover:bg-[#24292e] hover:border-[#24292e] hover:text-white",
    colorLight: "hover:bg-[#24292e] hover:border-[#24292e] hover:text-white",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohideen-ismail-s-0654aa347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white",
    colorLight: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://www.instagram.com/irsath_.s?igsh=bmkyMXpoeGF3c2w1",
    color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-pink-500 hover:text-white",
    colorLight: "hover:bg-pink-500 hover:border-pink-500 hover:text-white",
  },
  {
    icon: <FaXTwitter size={18} />,
    label: "Twitter / X",
    href: "https://twitter.com/irsath",
    color: "hover:bg-black hover:border-black hover:text-white",
    colorLight: "hover:bg-black hover:border-black hover:text-white",
  },
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹60,000",
  "₹60,000 – ₹1,00,000",
  "Let's Discuss",
];

const Contact = () => {
  const [isNight, setIsNight] = useState(() =>
  document.documentElement.classList.contains("dark")
);
  const [countryCode, setCountryCode] = useState("+91");
  const [showDropdown, setShowDropdown] = useState(false);
  const [form, setForm] = useState({
    from_name: "",
    from_phone: "",
    from_email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

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

  // close dropdown on outside click
  useEffect(() => {
    const close = () => setShowDropdown(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);


  const d = isNight;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_phone || !form.from_email || !form.message) return;
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.from_name,
          from_phone: `${countryCode} ${form.from_phone}`,
          from_email: form.from_email,
          budget:     form.budget || "Not specified",
          message:    form.message,
          to_email:   "mohideen.s1022@gmail.com",
          reply_to:   form.from_email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_phone: "", from_email: "", budget: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // input base style — new bg
  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border ${
    d
      ? "bg-[#0d1422] border-white/[0.08] text-white placeholder-white/20 focus:border-blue-500/40 focus:bg-[#111827]"
      : "bg-blue-50/60 border-blue-100 text-gray-900 placeholder-gray-300 focus:border-blue-300 focus:bg-white"
  }`;

  const selectedFlag = countryCodes.find(c => c.code === countryCode)?.flag || "🇮🇳";

  return (
    <section
      className={`relative w-full px-5 sm:px-8 py-20 sm:py-28 overflow-hidden transition-colors duration-500 ${
        d ? "bg-[#080c14] text-white" : "bg-[#f0f4ff] text-gray-900"
      }`}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full blur-[130px] transition-all duration-700 ${d ? "bg-blue-700/20" : "bg-blue-300/40"}`} />
        <div className={`absolute top-[50%] left-[-80px] w-[280px] h-[280px] rounded-full blur-[110px] transition-all duration-700 ${d ? "bg-cyan-800/15" : "bg-cyan-200/30"}`} />
        <div className={`absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full blur-[110px] transition-all duration-700 ${d ? "bg-indigo-800/20" : "bg-indigo-200/35"}`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 transition-colors duration-500 ${
            d ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-100 text-blue-600 border border-blue-200"
          }`}>
            <MessageSquare size={11} />
            Get In Touch
          </span>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 transition-colors duration-500 ${d ? "text-white" : "text-gray-900"}`}>
            Let's Build Something{" "}
            <span className="text-blue-500">Together</span>
          </h2>

          <p className={`max-w-lg mx-auto text-sm sm:text-base leading-relaxed transition-colors duration-500 ${d ? "text-white/50" : "text-gray-500"}`}>
            Have a project in mind? Fill the form — we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 sm:gap-8">

          {/* Left */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {info.href ? (
                  <a href={info.href} className={`flex items-center gap-4 p-5 rounded-2xl border group transition-all duration-300 ${
                    d ? "bg-white/[0.03] border-white/[0.07] hover:border-white/14 hover:bg-white/[0.05]" : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-sm"
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${info.accent} text-white shrink-0`}>{info.icon}</div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${d ? info.accentText : info.accentTextLight}`}>{info.label}</p>
                      <p className={`text-sm font-medium transition-colors duration-300 ${d ? "text-white/75 group-hover:text-white" : "text-gray-700 group-hover:text-blue-600"}`}>{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors duration-500 ${d ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-gray-200"}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${info.accent} text-white shrink-0`}>{info.icon}</div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${d ? info.accentText : info.accentTextLight}`}>{info.label}</p>
                      <p className={`text-sm font-medium transition-colors duration-500 ${d ? "text-white/75" : "text-gray-700"}`}>{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Socials — brand colors on hover */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className={`p-5 rounded-2xl border transition-colors duration-500 ${d ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-gray-200"}`}
            >
              <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-4 ${d ? "text-white/35" : "text-gray-400"}`}>Find Me Online</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95 ${
                      d
                        ? `bg-white/[0.04] border-white/[0.08] text-white/50 ${s.color}`
                        : ` border-gray-200 text-gray-500 ${s.colorLight}`
                    }`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${d ? "bg-emerald-500/[0.05] border-emerald-500/15" : "bg-emerald-50 border-emerald-200"}`}
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
              />
              <p className={`text-xs font-medium ${d ? "text-emerald-400" : "text-emerald-600"}`}>
                Usually responds within <span className="font-bold">24 hours</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`relative rounded-2xl border overflow-hidden transition-colors duration-500 ${
              d ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

            <div className="p-6 sm:p-8">
              <h3 className={`text-base font-semibold mb-6 transition-colors duration-500 ${d ? "text-white" : "text-gray-900"}`}>
                Send a Message
              </h3>

              <AnimatePresence mode="wait">

                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  >
                    <motion.div animate={{ scale: [0.8, 1.15, 1] }} transition={{ duration: 0.5 }}>
                      <CheckCircle2 size={52} className="text-emerald-400" />
                    </motion.div>
                    <h4 className={`text-xl font-bold ${d ? "text-white" : "text-gray-900"}`}>Message Sent! 🎉</h4>
                    <p className={`text-sm max-w-xs ${d ? "text-white/50" : "text-gray-500"}`}>
                      Thanks for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-3"
                  >
                    <p className="text-3xl">⚠️</p>
                    <h4 className={`text-base font-bold ${d ? "text-white" : "text-gray-900"}`}>Something went wrong</h4>
                    <p className={`text-sm ${d ? "text-white/45" : "text-gray-500"}`}>
                      Please try again or email directly at{" "}
                      <a href="mailto:mohideen.s1022@gmail.com" className="text-blue-400 underline">
                        mohideen.s1022@gmail.com
                      </a>
                    </p>
                  </motion.div>
                )}

                {(status === "idle" || status === "loading") && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      {/* Full Name */}
                      <div>
                        <label className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest mb-1.5 ${d ? "text-white/35" : "text-gray-400"}`}>
                          <User size={10} /> Full Name *
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          value={form.from_name}
                          onChange={handleChange}
                          placeholder="eg. Irsath"
                          className={inputCls}
                          required
                        />
                      </div>

                      {/* Phone with Country Code */}
                      <div>
                        <label className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest mb-1.5 ${d ? "text-white/35" : "text-gray-400"}`}>
                          <Phone size={10} /> Phone Number *
                        </label>
                        <div className="flex gap-2">

                          {/* Country code picker */}
                          <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              onClick={() => setShowDropdown(!showDropdown)}
                              className={`h-full px-3 rounded-xl border text-sm flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap ${
                                d
                                  ? "bg-[#0d1422] border-white/[0.08] text-white hover:border-blue-500/40"
                                  : "bg-blue-50/60 border-blue-100 text-gray-700 hover:border-blue-300"
                              }`}
                            >
                              <span className="text-base leading-none">{selectedFlag}</span>
                              <span className="text-xs font-medium">{countryCode}</span>
                              <ChevronDown size={12} className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown */}
                            <AnimatePresence>
                              {showDropdown && (
                                <motion.div
                                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                                  transition={{ duration: 0.15 }}
                                  className={`absolute top-full mt-1.5 left-0 z-50 rounded-xl border overflow-hidden shadow-xl min-w-[160px] ${
                                    d ? "bg-[#0d1422] border-white/10" : "bg-white border-gray-200"
                                  }`}
                                >
                                  {countryCodes.map((c) => (
                                    <button
                                      key={c.code}
                                      type="button"
                                      onClick={() => {
                                        setCountryCode(c.code);
                                        setShowDropdown(false);
                                      }}
                                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left transition-colors duration-150 ${
                                        countryCode === c.code
                                          ? d ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"
                                          : d ? "text-white/70 hover:bg-white/5" : "text-gray-700 hover:bg-gray-50"
                                      }`}
                                    >
                                      <span className="text-base">{c.flag}</span>
                                      <span className="font-medium">{c.country}</span>
                                      <span className={`ml-auto ${d ? "text-white/40" : "text-gray-400"}`}>{c.code}</span>
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Number input */}
                          <input
                            type="tel"
                            name="from_phone"
                            value={form.from_phone}
                            onChange={handleChange}
                            placeholder="63744 62402"
                            className={`${inputCls} flex-1`}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest mb-1.5 ${d ? "text-white/35" : "text-gray-400"}`}>
                        <Mail size={10} /> Email Address *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={form.from_email}
                        onChange={handleChange}
                        placeholder="eg. yourname@gmail.com"
                        className={inputCls}
                        required
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest mb-1.5 ${d ? "text-white/35" : "text-gray-400"}`}>
                        <IndianRupee size={10} /> Your Budget
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputCls} cursor-pointer`}
                      >
                        <option value="" className="bg-[#0d1422] text-white">Select budget range…</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#0d1422] text-white">{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest mb-1.5 ${d ? "text-white/35" : "text-gray-400"}`}>
                        <MessageSquare size={10} /> Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project idea…"
                        rows={4}
                        className={`${inputCls} resize-none`}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center gap-2.5 hover:shadow-[0_0_28px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </motion.button>

                    <p className={`text-center text-[11px] ${d ? "text-white/20" : "text-gray-300"}`}>
                      We'll reply to your email & phone within 24 hours.
                    </p>
                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;