import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  Zap,
  ShoppingCart,
  Rocket,
  ArrowRight,
  Star,
  Headphones,
} from "lucide-react";

const plans = [
  {
    id: "website",
    icon: <Zap size={22} />,
    badge: "Basic",
    name: "Business Website",
    tagline: "Perfect for startups & personal brands",
    price: { "6months": 7999, "1year": 8999 },
    accent: "from-blue-500 to-cyan-400",
    accentText: "text-blue-400",
    accentTextLight: "text-blue-600",
    accentGlow: "",
    featured: true,
    features: [
      "Up to 8 Pages (Home, About, Services, Contact & more)",
      "Fully Responsive — Mobile, Tablet, Desktop",
      "SEO Optimized Structure",
      "Contact Form with Email Integration",
      "Fast Loading — Optimized Performance",
      "Google Analytics Setup",
      "Social Media Links & Integration",
      "Free Domain & Hosting Guidance",
    ],
    cta: "Start Your Website",
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart size={22} />,
    badge: "Most Popular",
    name: "E-Commerce Store",
    tagline: "Built to sell — fast, secure & scalable",
    price: { "6months": 14999, "1year": 17499 },
    accent: "from-blue-500 to-indigo-500",
    accentText: "text-blue-400",
    accentTextLight: "text-blue-600",
    accentGlow: "shadow-[0_0_60px_rgba(59,130,246,0.2)]",
    featured: true,
    features: [
      "Up to 60 Product Listings",
      "Secure Payment Gateway (Razorpay / Stripe)",
      "Cart, Wishlist & Checkout Flow",
      "Order Management Dashboard",
      "Coupon & Discount System",
      "Product Search & Filter",
      "Customer Account Portal",
      "Email Order Confirmations",
      "Mobile-First Shopping Experience",
    ],
    cta: "Launch Your Store",
  },
  {
  id: "premium",
  icon: <Rocket size={22} />,
  badge: "Premium",
  name: "Premium Website",
  tagline: "High-end websites with advanced features & animations",
  price: { "6months": 49999, "1year": 59999 },
  accent: "from-violet-500 to-indigo-500",
  accentText: "text-violet-400",
  accentTextLight: "text-violet-600",
  accentGlow: "shadow-[0_0_60px_rgba(139,92,246,0.2)]",
  featured: true,
  features: [
    "Up to 40 Pages — Fully Custom Design",
    "Smooth Animations & Micro-Interactions",
    "Advanced SEO & Performance Optimization",
    "Blog / Portfolio / Gallery Section",
    "Multi-Language Support",
    "Social Media & Analytics Integration",
    "Lightning Fast Load Time",
    "Admin Panel for Content Management",
    "Free Domain & Hosting Guidance",
  ],
  cta: "Get Premium Website",
},
];

const formatINR = (num) => num.toLocaleString("en-IN");

const supportOptions = [
  { key: "6months", label: "6 Months Support" },
  { key: "1year", label: "1 Year Support" },
];

const Pricing = () => {
  const [isNight, setIsNight] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [support, setSupport] = useState("6months");

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
        <div
          className={`absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[280px] rounded-full blur-[130px] transition-all duration-700 ${
            d ? "bg-blue-700/25" : "bg-blue-300/50"
          }`}
        />
        <div
          className={`absolute bottom-[-60px] left-[-80px] w-[300px] h-[300px] rounded-full blur-[120px] transition-all duration-700 ${
            d ? "bg-indigo-800/20" : "bg-indigo-200/40"
          }`}
        />
        <div
          className={`absolute bottom-[-40px] right-[-60px] w-[260px] h-[260px] rounded-full blur-[100px] transition-all duration-700 ${
            d ? "bg-violet-800/15" : "bg-violet-200/55"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 transition-colors duration-500 ${
              d
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "bg-blue-100 text-blue-600 border border-blue-200"
            }`}
          >
            <Star size={11} className="fill-current" />
            Simple, Transparent Pricing
          </span>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 transition-colors duration-500 ${
              d ? "text-white" : "text-gray-900"
            }`}
          >
            Choose Your <span className="text-blue-500">Growth</span> Plan
          </h2>

          <p
            className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
              d ? "text-white/50" : "text-gray-500"
            }`}
          >
            From landing pages to fully custom web applications — we build
            digital products that perform. No hidden fees, ever.
          </p>

          {/* Support Toggle */}
          <div className="flex flex-col items-center gap-2 mt-8">
            <div
              className={`inline-flex items-center gap-1 p-1 rounded-full transition-colors duration-500 ${
                d
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {supportOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSupport(opt.key)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    support === opt.key
                      ? "bg-blue-500 text-white shadow-md"
                      : d
                        ? "text-white/50 hover:text-white"
                        : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <span className="flex cursor-pointer items-center gap-2">
                    <Headphones size={13} />
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {support === "1year" && (
                <motion.span
                  key="savings"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full"
                >
                  🎉 Get 6 extra months of support — best value!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 ${
                plan.id === "website"
                  ? d
                    ? `bg-gradient-to-b from-[#0a1628] to-[#080c14] border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.15)]`
                    : `bg-white border-cyan-400 shadow-[0_8px_40px_rgba(6,182,212,0.12)]`
                  : plan.id === "ecommerce"
                    ? d
                      ? `bg-gradient-to-b from-[#0c1835] to-[#080c14] border-blue-500/45 ${plan.accentGlow}`
                      : `bg-white border-blue-400 shadow-[0_8px_40px_rgba(59,130,246,0.15)]`
                    : plan.id === "premium"
                      ? d
                        ? `bg-gradient-to-b from-[#130c2a] to-[#080c14] border-violet-500/40 ${plan.accentGlow}`
                        : `bg-white border-violet-300 shadow-[0_8px_40px_rgba(139,92,246,0.12)]`
                      : d
                        ? "bg-white/[0.03] border-white/[0.07] hover:border-white/15 hover:bg-white/[0.05]"
                        : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span
                    className={`text-white text-[11px] font-bold uppercase tracking-widest px-6 py-1 rounded-b-xl ${
                      plan.id === "premium"
                        ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col flex-1 p-6 sm:p-7 ${plan.badge ? "pt-10" : ""}`}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${plan.accent} text-white shrink-0`}
                  >
                    {plan.icon}
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${
                        d ? plan.accentText : plan.accentTextLight
                      }`}
                    >
                      {plan.id === "website"
                        ? "Starter"
                        : plan.id === "ecommerce"
                          ? "Professional"
                          : "Premium"}
                    </p>
                    <h3
                      className={`text-[15px] font-semibold leading-tight transition-colors duration-500 ${
                        d ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                </div>

                {/* Tagline */}
                <p
                  className={`text-xs sm:text-sm mb-5 leading-relaxed transition-colors duration-500 ${
                    d ? "text-white/40" : "text-gray-400"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-lg font-semibold mb-1 transition-colors duration-500 ${
                        d ? "text-white/60" : "text-gray-500"
                      }`}
                    >
                      ₹
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={support + plan.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.22 }}
                        className={`text-4xl sm:text-5xl font-bold tracking-tight transition-colors duration-500 ${
                          d ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {formatINR(plan.price[support])}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 mt-2 text-[11px] font-medium transition-colors duration-500 ${
                      d ? "text-white/40" : "text-gray-400"
                    }`}
                  >
                    <Headphones size={11} />
                    <span>
                      {support === "6months" ? "6 Months" : "1 Year"} Free
                      Support Included
                    </span>
                  </div>

                  {support === "1year" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full"
                    >
                      +₹{formatINR(plan.price["1year"] - plan.price["6months"])}{" "}
                      for double support
                    </motion.div>
                  )}
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px mb-5 transition-colors duration-500 ${
                    d ? "bg-white/[0.07]" : "bg-gray-100"
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className={`mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br ${plan.accent}`}
                      >
                        <Check size={9} className="text-white stroke-[3]" />
                      </span>
                      <span
                        className={`text-xs sm:text-[13px] leading-relaxed transition-colors duration-500 ${
                          d ? "text-white/60" : "text-gray-600"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}

                  <li className="flex items-start gap-2.5 mt-1">
                    <span
                      className={`mt-[3px] w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br ${plan.accent}`}
                    >
                      <Headphones size={8} className="text-white" />
                    </span>
                    <span
                      className={`text-xs sm:text-[13px] font-semibold leading-relaxed transition-colors duration-500 ${
                        d ? plan.accentText : plan.accentTextLight
                      }`}
                    >
                      {support === "6months" ? "6 Months" : "1 Year"} Dedicated
                      Support
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <Link to="/contact"
                  className={`group w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.featured
                      ? `bg-gradient-to-r ${plan.accent} text-white hover:shadow-[0_0_28px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98]`
                      : d
                        ? "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                        : "bg-gray-100 border border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.5 }}
          className={`text-center text-xs sm:text-sm mt-10 sm:mt-12 transition-colors duration-500 ${
            d ? "text-white/30" : "text-gray-400"
          }`}
        >
          Free consultation call included in every plan.{" "}
         <Link
  to="/contact"
  className="underline underline-offset-2 text-blue-500 hover:text-blue-400 transition-colors font-medium"
>
  Need a custom plan? Let's talk →
</Link>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
