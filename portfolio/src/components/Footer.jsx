import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const links = [
  { name: "Home",     path: "/" },
  { name: "About",    path: "/about" },
  { name: "Pricing",  path: "/pricing" },
  { name: "Projects", path: "/projects" },
  { name: "Contact",  path: "/contact" },
];

const services = [
  "Business Website",
  "E-Commerce Store",
  "Premium Website",
  "UI / UX Design",
];

const socials = [
  { icon: <FaGithub size={16} />,    label: "GitHub",    href: "https://github.com/irsath",
    hover: "hover:bg-[#24292e] hover:border-[#24292e] hover:text-white" },
  { icon: <FaLinkedin size={16} />,  label: "LinkedIn",  href: "https://www.linkedin.com/in/mohideen-ismail-s-0654aa347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    hover: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white" },
  { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://www.instagram.com/irsath_.s?igsh=bmkyMXpoeGF3c2w1",
    hover: "hover:bg-pink-500 hover:border-pink-500 hover:text-white" },
  { icon: <FaXTwitter size={16} />,  label: "Twitter",   href: "https://twitter.com/irsath",
    hover: "hover:bg-black hover:border-black hover:text-white" },
];

const Footer = () => {
  const [isNight, setIsNight] = useState(true);

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative w-full overflow-hidden transition-colors duration-500 ${
        d ? "bg-[#04070e] text-white" : "bg-[#04070e] text-white"
      }`}
    >
      {/* Top glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] rounded-full blur-[120px] transition-all duration-700 ${
          d ? "bg-blue-700/15" : "bg-blue-300/30"
        }`} />
      </div>

      {/* Top divider gradient line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={scrollToTop}
              className={`text-xl font-bold bg-gradient-to-br bg-clip-text text-transparent mb-3 block transition ${
                d
                  ? "from-white via-white to-blue-400"
                  : "from-gray-900 via-blue-700 to-blue-500"
              }`}
            >
              Irsath
            </button>

            <p className={`text-sm leading-relaxed mb-5 transition-colors duration-500 ${
              d ? "text-white/45" : "text-gray-500"
            }`}>
              Building fast, beautiful web experiences that help brands grow in the digital world.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95 ${
                    d
                      ? `bg-white/[0.04] border-white/[0.08] text-white/45 ${s.hover}`
                      : `bg-white border-gray-200 text-gray-400 ${s.hover}`
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 transition-colors duration-500 ${
              d ? "text-white/35" : "text-gray-400"
            }`}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-all duration-200 hover:translate-x-1 block ${
                      d
                        ? "text-white/50 hover:text-white"
                        : "text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 transition-colors duration-500 ${
              d ? "text-white/35" : "text-gray-400"
            }`}>
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/pricing"
                    className={`text-sm transition-all duration-200 hover:translate-x-1 block ${
                      d
                        ? "text-white/50 hover:text-white"
                        : "text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 transition-colors duration-500 ${
              d ? "text-white/35" : "text-gray-400"
            }`}>
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:mohideen.s1022@gmail.com"
                  className={`flex items-start gap-2.5 text-sm transition-colors duration-200 group ${
                    d ? "text-white/50 hover:text-white" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <Mail size={14} className="mt-0.5 shrink-0 group-hover:text-blue-400 transition-colors" />
                  mohideen.s1022@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916374462402"
                  className={`flex items-center gap-2.5 text-sm transition-colors duration-200 group ${
                    d ? "text-white/50 hover:text-white" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  <Phone size={14} className="shrink-0 group-hover:text-blue-400 transition-colors" />
                  +91 63744 62402
                </a>
              </li>
              <li>
                <span className={`flex items-center gap-2.5 text-sm transition-colors duration-500 ${
                  d ? "text-white/50" : "text-gray-500"
                }`}>
                  <MapPin size={14} className="shrink-0" />
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={`w-full h-px mb-6 transition-colors duration-500 ${
          d ? "bg-white/[0.06]" : "bg-gray-200"
        }`} />

        {/* ── Bottom Row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className={`text-xs text-center sm:text-left transition-colors duration-500 ${
            d ? "text-white/25" : "text-gray-400"
          }`}>
            © {new Date().getFullYear()} Irsath. Made with{" "}
            <Heart size={11} className="inline text-red-400 fill-red-400 mx-0.5" />
            in Tamil Nadu, India.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
              d
                ? "border-white/10 text-white/40 hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/10"
                : "border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;