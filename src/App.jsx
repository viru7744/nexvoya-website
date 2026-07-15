
import "./index.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import NexvoyaFlow from "./assets/NexvoyaFlow";
import { useState } from "react";
import StaffAugmentation from "./pages/StaffAugmentation";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import healthcare from "./assets/industries/healthcare.png";
import edtech from "./assets/industries/edtech.png";
import fintech from "./assets/industries/fintech.png";
import realestate from "./assets/industries/realestate.png";
import retail from "./assets/industries/retail.png";
import restaurant from "./assets/industries/restaurant.png";
import staff from "./assets/services/staff.png";
import custom from "./assets/services/custom.png";
import web from "./assets/services/web.png";
import mobile from "./assets/services/mobile.png";
import design from "./assets/services/design.png";
import product from "./assets/services/product.png";
import About from "./pages/About";
import Navbar from "./Navbar"; // ✅ Import new Navbar
import Careers from "./pages/Careers";

function App() {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ CONTACT MODAL */}
      {showContact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-60 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded-3xl p-px bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500"
          >
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 relative shadow-2xl">
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition text-sm"
              >
                ✕
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-sm text-slate-400 mt-1">We usually respond within a few hours 🚀</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "💬", label: "WhatsApp", value: "+91-9111709269", bg: "from-green-900/40 to-emerald-900/40", color: "text-green-400" },
                  { icon: "📞", label: "Phone", value: "+91-9111709269", bg: "from-blue-900/40 to-cyan-900/40", color: "text-blue-400" },
                  { icon: "✉️", label: "Email", value: "hr@nexvoyatech.com", bg: "from-yellow-900/40 to-orange-900/40", color: "text-yellow-400" },
                  { icon: "🌍", label: "Address", value: "Kolar Road Bhopal, Madhya Pradesh India ", bg: "from-purple-900/40 to-pink-900/40", color: "text-purple-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition group">
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.bg} ${item.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold text-white text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-5 border-t border-slate-800" />
              <div className="flex items-center gap-3 bg-linear-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-4">
                <span className="text-xl">⚡</span>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Avg response time:</span>{" "}
                  Under 2 hours (9 AM – 6 PM IST)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ✅ NAVBAR — lives outside Routes so it's on every page */}
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />

        <Route
          path="/"
          element={
            <div className="relative text-white min-h-screen bg-black">

              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

              <div className="relative z-10">

                {/* ── HERO WITH VIDEO BACKGROUND ── */}
                <div className="relative text-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden min-h-[90vh] flex items-center justify-center">
                  <video
                    autoPlay loop muted playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  >
                    <source src="/big.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

                  <div className="relative z-20 text-white max-w-5xl w-full mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 sm:mb-6"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                      GLOBAL STAFF AUGMENTATION PLATFORM
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 sm:mb-6"
                    >
                      Hire{" "}
                      <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        World-Class
                      </span>{" "}
                      IT Talent.<br />
                      Build Faster. Scale Smarter.
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                      className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-8"
                    >
                      From individual developers to full dedicated teams —
                      matched by AI, delivered in <strong className="text-white">48 hours</strong>.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="flex justify-center gap-3 sm:gap-4 flex-wrap"
                    >
                      <button
                        onClick={() => setShowContact(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 text-sm sm:text-base"
                      >
                        Get Dedicated Team →
                      </button>
                      <button
                        onClick={() => setShowContact(true)}
                        className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 sm:px-7 py-3 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:bg-white/20 text-sm sm:text-base"
                      >
                        Book Free Consultation
                      </button>
                    </motion.div>
                  </div>

                  {/* Floating stat chips — desktop only */}
                  {[
                    { icon: "🌍", num: "40+", label: "Countries Served", pos: "left-6 top-32" },
                    { icon: "⚡", num: "48hr", label: "Avg Match Time", pos: "right-6 top-32" },
                    { icon: "👨‍💻", num: "100+", label: "Vetted Developers", pos: "left-6 bottom-32" },
                    { icon: "⭐", num: "4.9/5", label: "Client Rating", pos: "right-6 bottom-32" },
                  ].map((chip, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                      className={`absolute ${chip.pos} hidden lg:flex items-center gap-3 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-2xl px-4 py-3 shadow-lg z-30`}
                    >
                      <span className="text-2xl">{chip.icon}</span>
                      <div>
                        <div className="text-base font-bold text-white">{chip.num}</div>
                        <div className="text-xs text-slate-400 font-medium">{chip.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* ── FLOW ANIMATION ── */}
                <div className="mt-2 px-4 md:px-10">
                  <NexvoyaFlow />
                </div>

                {/* ── SERVICES ── */}
                <div className="mt-24 px-4 sm:px-6 text-center">
                  <p className="text-blue-400 text-sm font-bold tracking-widest mb-2">WHAT WE DO</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">What We Offer</h2>
                  <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
                    End-to-end technology services to help you build, launch, and scale globally.
                  </p>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 text-left">
                    {[
                      { title: "Staff Augmentation", icon: staff, tag: "Core Service", tagColor: "bg-blue-900/40 text-blue-300", hoverBg: "hover:bg-gradient-to-br hover:from-blue-950 hover:to-indigo-950", border: "border-blue-500 border-2", badge: "MOST POPULAR", desc: "Top engineers on demand...", path: "/staff-augmentation" },
                      { title: "Custom Software", icon: custom, tag: "Build", tagColor: "bg-green-900/40 text-green-300", hoverBg: "hover:bg-gradient-to-br hover:from-green-950 hover:to-emerald-950", desc: "Tailor-made solutions...", path: "/system-integration" },
                      { title: "Web Development", icon: web, tag: "Web", tagColor: "bg-purple-900/40 text-purple-300", hoverBg: "hover:bg-gradient-to-br hover:from-purple-950 hover:to-fuchsia-950", desc: "Fast, modern...", path: "/web-development" },
                      { title: "Mobile Apps", icon: mobile, tag: "Mobile", tagColor: "bg-orange-900/40 text-orange-300", hoverBg: "hover:bg-gradient-to-br hover:from-orange-950 hover:to-amber-950", desc: "Native iOS...", path: "/mobile-app" },
                      { title: "UI/UX Design", icon: design, tag: "Design", tagColor: "bg-pink-900/40 text-pink-300", hoverBg: "hover:bg-gradient-to-br hover:from-pink-950 hover:to-rose-950", desc: "Research-led...", path: "/quality-assurance" },
                      { title: "Product Development", icon: product, tag: "End-to-End", tagColor: "bg-teal-900/40 text-teal-300", hoverBg: "hover:bg-gradient-to-br hover:from-teal-950 hover:to-cyan-950", desc: "From idea to launch...", path: "/clinical" },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        onClick={() => navigate(s.path)}
                        className={`relative ${s.border || "border border-slate-800"} rounded-2xl p-6 sm:p-7 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group bg-cover bg-center bg-no-repeat overflow-hidden cursor-pointer`}
                        style={{ backgroundImage: `url(${s.icon})` }}
                      >
                        {/* Overlay so text stays readable over the image */}
                        <div className="absolute inset-0 bg-white/85 group-hover:bg-white/70 transition-colors duration-300" />

                        {/* Content sits above the overlay */}
                        <div className="relative z-10">
                          {s.badge && (
                            <span className="absolute -top-6 right-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-b-lg tracking-wider">
                              {s.badge}
                            </span>
                          )}
  
                          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-red-600 text-white mb-3 inline-block tracking-wide shadow-md">
                            {s.tag}
                          </span>
                          <h3 className="font-bold text-slate-900 text-base mb-2">{s.title}</h3>
                          <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p>
                          <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            Learn more <span>→</span>
                          </div>
                        </div>
                      </motion.div>

                    ))}
                  </div>




                </div>

                {/* ── INDUSTRIES ── */}
                <div className="mt-28 px-4 sm:px-6 text-center">
                  <p className="text-blue-400 text-sm font-semibold tracking-widest mb-2">INDUSTRIES</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">Industries We Serve</h2>
                  <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                    We bring domain-specific expertise and innovative solutions to transform businesses across sectors.
                  </p>

                
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
                    {[
                      { icon: healthcare, title: "Healthcare", desc: "Patient portals, health apps, and EMR systems.", delay: 0, hoverBg: "hover:bg-gradient-to-br hover:from-blue-950 hover:to-indigo-950", path: "/healthcare" },
                      { icon: edtech, title: "EdTech", desc: "LMS, virtual classrooms, and e-learning platforms.", delay: 0.1, hoverBg: "hover:bg-gradient-to-br hover:from-green-950 hover:to-emerald-950", path: "/edtech" },
                      { icon: fintech, title: "FinTech", desc: "Payment gateways, wallets, and finance apps.", delay: 0.2, hoverBg: "hover:bg-gradient-to-br hover:from-purple-950 hover:to-fuchsia-950", path: "/fintech" },
                      { icon: realestate, title: "Real Estate", desc: "Property platforms and virtual tours.", delay: 0.15, hoverBg: "hover:bg-gradient-to-br hover:from-orange-950 hover:to-amber-950", path: "/real-estate" },
                      { icon: retail, title: "Retail", desc: "E-commerce, POS systems, inventory solutions.", delay: 0.25, hoverBg: "hover:bg-gradient-to-br hover:from-pink-950 hover:to-rose-950", path: "/retail" },
                      { icon: restaurant, title: "Restaurants", desc: "Online ordering, reservation & loyalty systems.", delay: 0.3, hoverBg: "hover:bg-gradient-to-br hover:from-teal-950 hover:to-cyan-950", path: "/restaurants" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        whileHover={{ y: -6 }}
                        onClick={() => navigate(item.path)}
                        className={`bg-slate-900 p-6 rounded-2xl border border-slate-800 ${item.hoverBg} hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                      >
                        <div
                          className="w-16 h-16 rounded-xl mb-5 bg-cover bg-center bg-no-repeat group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
                          style={{ backgroundImage: `url(${item.icon})` }}
                        />
                        <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                </div>

                {/* ── WHY US ── */}
                <div className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mt-16 sm:mt-20">
                  <div className="absolute w-200 h-200 -top-75 -left-50 opacity-40 blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(79,110,247,0.12) 0%, transparent 70%)", borderRadius: "43% 57% 38% 62% / 48% 35% 65% 52%", animation: "morph 20s ease-in-out infinite" }}
                  />
                  <div className="absolute w-150 h-150 -bottom-50 -right-37.5 opacity-40 blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)", borderRadius: "57% 43% 62% 38% / 35% 65% 35% 65%", animation: "morph 25s ease-in-out infinite reverse" }}
                  />

                  <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-300 mb-4"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                        WHY CHOOSE NEXVOYA
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3"
                      >
                        Built on trust, driven by results
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed"
                      >
                        We're not just developers — we're your growth partners.
                      </motion.p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      {[
                        { icon: "✓", num: "500+", label: "Projects delivered across 40+ countries", color: "from-blue-900/40 to-blue-800/40", iconColor: "text-blue-300" },
                        { icon: "👥", num: "1200+", label: "Developers in our global talent network", color: "from-purple-900/40 to-purple-800/40", iconColor: "text-purple-300" },
                        { icon: "😊", num: "98%", label: "Client satisfaction & retention rate", color: "from-yellow-900/40 to-yellow-800/40", iconColor: "text-yellow-300" },
                        { icon: "⚡", num: "48hr", label: "Average time to match & onboard talent", color: "from-green-900/40 to-green-800/40", iconColor: "text-green-300" },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ y: -6 }}
                          className="relative bg-slate-900 border border-slate-800 rounded-2xl p-7 sm:p-9 group overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                          <div className={`w-12 h-12 bg-linear-to-br ${stat.color} ${stat.iconColor} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                            {stat.icon}
                          </div>
                          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                              {stat.num}
                            </span>
                          </div>
                          <div className="text-slate-400 text-sm font-medium leading-relaxed">{stat.label}</div>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <style>{`@keyframes morph { 0%, 100% { border-radius: 43% 57% 38% 62% / 48% 35% 65% 52%; } 50% { border-radius: 57% 43% 62% 38% / 62% 48% 52% 38%; } }`}</style>
                </div>

                {/* ── BLOG SECTION ── */}
                <div className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
                  <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-14">
                      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-sm font-semibold tracking-widest text-slate-400 mb-3 uppercase"
                      >
                        Insights & Resources
                      </motion.p>
                      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                        style={{ fontFamily: "serif" }}
                      >
                        Latest from the blog
                      </motion.h2>
                      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base"
                      >
                        Deep dives, practical guides, and real-world case studies from our engineering team.
                      </motion.p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
                      {[
                        { icon: "🤖", tag: "AI Development", tagColor: "bg-blue-900/40 text-blue-300", gradientBg: "from-blue-950 to-indigo-950", title: "Building Production-Ready AI Apps: Lessons from 50+ Deployments", excerpt: "From prototype to scale — learn how we helped startups ship AI features that handle millions of requests.", date: "Apr 18, 2026", readTime: "8 min read" },
                        { icon: "⚡", tag: "Performance", tagColor: "bg-yellow-900/40 text-yellow-300", gradientBg: "from-yellow-950 to-pink-950", title: "How We Cut API Response Time by 73% Using Edge Computing", excerpt: "A technical breakdown of migrating a fintech app to edge functions — and the surprising cost savings.", date: "Apr 12, 2026", readTime: "6 min read" },
                        { icon: "🚀", tag: "Startup Playbook", tagColor: "bg-green-900/40 text-green-300", gradientBg: "from-green-950 to-cyan-950", title: "MVP to Series A: The Tech Stack Decisions That Actually Mattered", excerpt: "We tracked 30 startups from MVP to funding. Here's what they wish they knew about choosing tech early.", date: "Apr 5, 2026", readTime: "10 min read" },
                      ].map((post, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ y: -6 }}
                          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col cursor-pointer group transition-all duration-300 hover:shadow-lg"
                        >
                          <div className={`h-40 sm:h-44 bg-linear-to-br ${post.gradientBg} relative overflow-hidden`}>
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-slate-900/90 backdrop-blur rounded-lg flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition">
                              {post.icon}
                            </div>
                          </div>
                          <div className="p-5 sm:p-6 flex-1 flex flex-col">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.tagColor} inline-block mb-3 uppercase tracking-wide`}>
                              {post.tag}
                            </span>
                            <h3 className="font-bold text-white text-sm sm:text-base mb-3 leading-snug">{post.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-auto">{post.excerpt}</p>
                            <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-800 text-xs text-slate-500">
                              <span className="font-medium">{post.date}</span>
                              <span>📖 {post.readTime}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                      <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-1 hover:shadow-blue-800/40 text-sm sm:text-base">
                        View All Articles
                        <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* ── CONTACT SECTION ── */}
                <div className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
                  <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-14">
                      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-xs font-semibold tracking-widest text-blue-400 mb-3 uppercase"
                      >
                        Ready to Build?
                      </motion.p>
                      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight"
                      >
                        Let's Talk About Your Project
                      </motion.h2>
                      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-lg mx-auto leading-relaxed text-sm sm:text-base"
                      >
                        Share your vision with us. We'll turn it into a roadmap, timeline, and dedicated team — all within 48 hours.
                      </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
                      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                          Let's build something amazing together
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-7 text-sm sm:text-base">
                          Whether you need a single developer or a full product team, we're here to help you scale fast without compromising quality.
                        </p>
                        <button
                          onClick={() => setShowContact(true)}
                          className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-1 hover:shadow-blue-800/40 mb-9 text-sm sm:text-base"
                        >
                          Book Free Consultation
                          <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
                        </button>

                        <ul className="space-y-4">
                          {[
                            { num: "01", text: "Share your app idea or project requirements with us" },
                            { num: "02", text: "Get a free project assessment and cost estimate" },
                            { num: "03", text: "Receive a tailored development plan and team proposal" },
                          ].map((step, i) => (
                            <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className="shrink-0 w-8 h-8 bg-linear-to-br from-blue-900/40 to-indigo-900/40 rounded-lg flex items-center justify-center text-sm font-bold text-blue-300">
                                {step.num}
                              </div>
                              <p className="text-slate-300 font-medium leading-relaxed pt-0.5 text-sm sm:text-base">{step.text}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg"
                      >
                        <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                        <ul className="space-y-0 divide-y divide-slate-800">
                          {[
                            { icon: "💬", label: "WhatsApp", value: "+91-9111709269", link: "https://wa.me/+91-9111709269", gradient: "from-green-900/40 to-emerald-900/40", iconColor: "text-green-300" },
                            { icon: "📞", label: "Phone", value: "+91-9111709269", gradient: "from-blue-900/40 to-cyan-900/40", iconColor: "text-blue-300" },
                            { icon: "✉️", label: "Email", value: "hr@nexvoyatech.com", link: "mailto:hr@nexvoyatech.com", gradient: "from-yellow-900/40 to-orange-900/40", iconColor: "text-yellow-300" },
                            { icon: "🌍", label: "Address", value: "Kolar Road, Bhopal Madhya Pradesh India", link: null, gradient: "from-purple-900/40 to-pink-900/40", iconColor: "text-purple-300" },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 py-4 group">
                              <div className={`shrink-0 w-11 h-11 bg-linear-to-br ${item.gradient} ${item.iconColor} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">{item.label}</p>
                                {item.link ? (
                                  <a href={item.link} className="text-sm font-medium text-white hover:text-blue-400 transition-colors">{item.value}</a>
                                ) : (
                                  <p className="text-sm font-medium text-white">{item.value}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex items-start gap-3 bg-slate-800 rounded-xl p-4">
                          <span className="text-xl shrink-0">⚡</span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            <strong className="text-white font-semibold">Average response time:</strong> Under 2 hours (9 AM – 6 PM IST)
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* ── FOOTER ── */}
                <div className="bg-black text-white px-6 sm:px-10 py-10 sm:py-12 border-t border-slate-900">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                    <div>
                      <h2 className="text-xl font-bold">Nexvoya</h2>
                      <p className="text-slate-400 text-sm mt-2 max-w-xs">
                        Global staff augmentation — connecting companies with world-class IT talent.
                      </p>
                      <div className="flex gap-4 mt-5 text-slate-400">
                        <FaLinkedin className="hover:text-white cursor-pointer transition text-lg" />
                        <FaInstagram className="hover:text-white cursor-pointer transition text-lg" />
                        <FaFacebook className="hover:text-white cursor-pointer transition text-lg" />
                      </div>
                    </div>
                    <div className="flex gap-12 sm:gap-16 text-sm">
                      <div>
                        <p className="font-semibold text-slate-300 mb-3">Company</p>
                        <ul className="space-y-2 text-slate-500">
                          <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                          <li><a href="#" className="hover:text-white transition">Services</a></li>
                          <li>
                            <Link to="/careers" className="hover:text-white transition">
                              Careers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-300 mb-3">Contact</p>
                        <ul className="space-y-2 text-slate-500">
                          <li><a href="mailto:hr@nexvoyatech.com" className="hover:text-white transition">hr@nexvoyatech.com</a></li>
                          <li><button onClick={() => setShowContact(true)} className="hover:text-white transition">Book a Call</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
                    © 2026 Nexvoya. All rights reserved.
                  </div>
                </div>

              </div>
            </div>
          }
        />

        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
      </Routes>
    </>
  );
}

export default App;