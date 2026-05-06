import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none z-0" />

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-24 text-center">

        {/* Glowing orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Back Button */}
        <div className="absolute left-6 top-6 z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/20 transition"
          >
            ← Back
          </button>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
        >
          <span className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" />
          WHO WE ARE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative text-4xl md:text-6xl font-black tracking-tight"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Nexvoya
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mt-4 text-blue-100 max-w-2xl mx-auto px-4 text-lg leading-relaxed"
        >
          We help businesses scale faster with top-tier tech talent and modern software solutions.
        </motion.p>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        {/* WHO WE ARE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg">🏢</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Who We Are</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full mb-5" />
          <p className="text-slate-600 leading-relaxed text-base">
            Nexvoya is a global technology partner helping startups and enterprises build scalable products.
            From staff augmentation to full product development, we deliver speed, quality, and reliability.
          </p>
        </motion.section>

        {/* MISSION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg shadow-blue-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          </div>
          <div className="w-16 h-1 bg-white/40 rounded-full mb-5" />
          <p className="text-blue-100 leading-relaxed text-base">
            To empower businesses with world-class engineering talent and help them innovate faster.
          </p>
        </motion.section>

        {/* WHY CHOOSE US */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <p className="text-blue-600 text-sm font-bold tracking-widest mb-2">OUR STRENGTHS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "⭐", text: "Top 1% vetted engineers", desc: "Only the best make it through our rigorous vetting process." },
              { icon: "⚡", text: "Fast hiring within 48 hours", desc: "Get matched with the right talent in under 2 days." },
              { icon: "📈", text: "Scalable and flexible teams", desc: "Scale up or down based on your project needs, anytime." },
              { icon: "🚀", text: "End-to-end product support", desc: "From idea to launch, we're with you every step of the way." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(79,110,247,0.12)" }}
                className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm mb-1">{item.text}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Bottom accent */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg shadow-blue-200"
        >
          <h3 className="text-2xl font-bold mb-2">Ready to work with us?</h3>
          <p className="text-blue-100 mb-6 text-sm">Get your dedicated team in 48 hours.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition hover:-translate-y-1 shadow-md"
          >
            Get Started →
          </button>
        </motion.div>

      </div>

      {/* FOOTER STRIP */}
      <div className="bg-slate-950 text-slate-500 text-center text-sm py-5 mt-8">
        © 2026 Nexvoya. All rights reserved.
      </div>

    </div>
  );
}
