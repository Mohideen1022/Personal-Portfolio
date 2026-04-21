/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/static-components */
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isNight, setIsNight] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Route change ஆகும்போது active sync ஆகும்
  useEffect(() => {
    const match = links.find((l) => l.path === location.pathname);
    if (match) setActive(match.name);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/", id: "home" },
    { name: "Pricing", path: "/pricing", id: "pricing" },
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "About", path: "/about", id: "about" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isNight]);

  // Animated Hamburger Icon
  const HamburgerIcon = ({ open }) => (
    <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`block h-[2px] w-5 rounded-full origin-center transition-colors ${
          isNight ? "bg-white" : "bg-gray-800"
        }`}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className={`block h-[2px] w-5 rounded-full transition-colors ${
          isNight ? "bg-white" : "bg-gray-800"
        }`}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`block h-[2px] w-5 rounded-full origin-center transition-colors ${
          isNight ? "bg-white" : "bg-gray-800"
        }`}
      />
    </div>
  );

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isNight
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-white/70 backdrop-blur-xl border-b border-black/10 shadow-sm"
      }`}
    >
      {/* Main Row */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl font-semibold tracking-widest uppercase transition ${
            isNight ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="text-blue-500">I</span>rsath
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActive(link.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === link.name
                  ? isNight
                    ? "bg-white text-black shadow-lg"
                    : "bg-gray-900 text-white shadow-lg"
                  : isNight
                    ? "text-white/70 hover:bg-white/10 hover:text-white"
                    : "text-gray-600 hover:bg-black/10 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setIsNight(!isNight)}
            whileTap={{ scale: 0.85, rotate: 20 }}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isNight
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/10"
            }`}
          >
            <AnimatePresence mode="wait">
              {isNight ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon size={16} className="text-blue-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun size={16} className="text-yellow-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA */}
          <motion.a
            href="https://ig.me/m/irsath_.s"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 transition shadow-md hover:shadow-blue-500/30"
          >
            Dm Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.85 }}
            className={`md:hidden w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isNight
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/10"
            }`}
          >
            <HamburgerIcon open={menuOpen} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={`flex flex-col text-center gap-2 px-4 pb-5 pt-3 border-t backdrop-blur-xl ${
                isNight
                  ? "border-white/10 bg-black/70"
                  : "border-black/10 bg-white/80"
              }`}
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setActive(link.name);
                      setMenuOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      active === link.name
                        ? isNight
                          ? "bg-white text-black"
                          : "bg-gray-900 text-white"
                        : isNight
                          ? "text-white/70 hover:bg-white/10 hover:text-white"
                          : "text-gray-600 hover:bg-black/10 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://ig.me/m/irsath_.s"
                target="irsath_.s"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 }}
                className="mt-2 w-full px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"
              >
                Dm Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
