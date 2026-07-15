
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        @keyframes nodePulse {
          0%, 100% { opacity: 0.4; r: 2.4; }
          50% { opacity: 1; r: 3.4; }
        }
        @keyframes linkDraw {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes driftGlow {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-16px,-12px) scale(1.06); }
        }
      `}</style>

      {/* Subtle grid, whole page */}
      <div className="fixed inset-0 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none z-0" />

      {/* ── HERO ── */}
      <div className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
        {/* Ambient glows */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,110,247,0.16), transparent 70%)", animation: "driftGlow 11s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.14), transparent 70%)", animation: "driftGlow 14s ease-in-out infinite reverse" }}
        />

        {/* Back button */}
        <div className="absolute left-5 top-5 sm:left-8 sm:top-8 z-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white/4 backdrop-blur border border-white/10 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-white/70 hover:text-white hover:border-white/25 transition"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-7"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.14em] text-blue-300">WHO WE ARE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            A network of talent,<br />
            <span className="italic bg-linear-to-r from-blue-300 via-indigo-300 to-white bg-clip-text text-transparent">
              built like one team.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-white/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            We connect businesses with world-class engineers across 40+ countries — matched,
            onboarded, and shipping in days, not months.
          </motion.p>
        </div>

        {/* Signature — talent network constellation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 max-w-3xl mx-auto mt-14"
        >
          <NetworkGraphic />
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-24">

        <Divider />

        {/* WHO WE ARE + MISSION */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/3 border border-white/10 rounded-2xl p-7 sm:p-8"
          >
            <SectionLabel n="01" title="Who we are" />
            <p className="text-white/65 leading-relaxed text-[15px]">
              Nexvoya is a global technology partner helping startups and enterprises build
              scalable products — from staff augmentation to full product development, we
              deliver speed, quality, and reliability.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative rounded-2xl p-7 sm:p-8 overflow-hidden border border-blue-400/20"
            style={{ background: "linear-gradient(155deg, rgba(79,110,247,0.14), rgba(30,20,70,0.5))" }}
          >
            <SectionLabel n="02" title="Our mission" accent />
            <p className="text-blue-50/80 leading-relaxed text-[15px]">
              To empower businesses with world-class engineering talent, so they can innovate
              at the speed their ambition actually calls for.
            </p>
          </motion.section>
        </div>

        <Divider />

        {/* WHY CHOOSE US */}
        <section>
          <div className="text-center mb-10">
            <p
              className="text-blue-400 text-[11px] font-semibold tracking-[0.14em] mb-3"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              OUR STRENGTHS
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
              Why teams choose Nexvoya
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { icon: "★", text: "Top 1% vetted engineers", desc: "Only the best make it through our rigorous vetting process." },
              { icon: "⚡", text: "Fast hiring within 48 hours", desc: "Get matched with the right talent in under two days." },
              { icon: "↗", text: "Scalable and flexible teams", desc: "Scale up or down based on your project needs, anytime." },
              { icon: "◎", text: "End-to-end product support", desc: "From idea to launch, we're with you every step of the way." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white/3 border border-white/10 rounded-2xl p-6 transition-all duration-300 group hover:border-white/20 hover:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 border border-blue-400/25 text-blue-300 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(79,110,247,0.12)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1.5">{item.text}</p>
                    <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-4 h-px w-0 group-hover:w-full bg-linear-to-r from-blue-400/60 to-indigo-300/0 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-9 sm:p-11 text-center overflow-hidden border border-white/10"
          style={{ background: "linear-gradient(135deg, rgba(79,110,247,0.16), rgba(20,10,50,0.4))" }}
        >
          <h3 className="text-2xl sm:text-3xl font-medium mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
            Ready to work with us?
          </h3>
          <p className="text-white/60 mb-7 text-sm sm:text-base">Get your dedicated team in 48 hours.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-slate-900 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition hover:-translate-y-1 shadow-lg shadow-blue-900/30 text-sm sm:text-base"
          >
            Get Started →
          </button>
        </motion.div>
      </div>

      {/* FOOTER STRIP */}
      <div className="border-t border-white/10 text-white/40 text-center text-xs sm:text-sm py-6">
        © 2026 Nexvoya. All rights reserved.
      </div>
    </div>
  );
}

const Divider = () => <div className="h-px bg-white/10 my-10 sm:my-12" />;

const SectionLabel = ({ n, title, accent }) => (
  <div className="flex items-baseline gap-3 mb-4">
    <span
      className={`text-[11px] px-2 py-0.5 rounded border ${accent ? "border-blue-300/40 text-blue-200" : "border-white/20 text-white/50"}`}
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {n}
    </span>
    <h2 className={`text-xl font-medium ${accent ? "text-white" : "text-white"}`} style={{ fontFamily: "'Fraunces', serif" }}>
      {title}
    </h2>
  </div>
);

const NetworkGraphic = () => {
  const nodes = [
    { x: 60, y: 40, r: 3.4, delay: 0 },
    { x: 180, y: 20, r: 2.6, delay: 0.3 },
    { x: 300, y: 55, r: 3, delay: 0.6 },
    { x: 420, y: 25, r: 2.4, delay: 0.9 },
    { x: 540, y: 50, r: 3.2, delay: 1.2 },
    { x: 660, y: 30, r: 2.6, delay: 1.5 },
    { x: 120, y: 100, r: 2.4, delay: 0.5 },
    { x: 260, y: 110, r: 3, delay: 0.8 },
    { x: 400, y: 95, r: 2.6, delay: 1.1 },
    { x: 540, y: 105, r: 2.4, delay: 1.4 },
  ]
  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [0, 6], [1, 7], [2, 7], [3, 8], [4, 9],
    [6, 7], [7, 8], [8, 9],
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-white/2 px-4 sm:px-8 py-8 overflow-hidden">
      <svg viewBox="0 0 720 150" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {links.map(([a, b], i) => {
          const n1 = nodes[a]
          const n2 = nodes[b]
          return (
            <line
              key={i}
              x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
              stroke="rgba(129,140,248,0.35)"
              strokeWidth="1"
              strokeDasharray="400"
              style={{ animation: `linkDraw 2.4s ease-out ${i * 0.08}s both` }}
            />
          )
        })}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x} cy={n.y} r={n.r}
            fill={i % 3 === 0 ? "#93C5FD" : "#A5B4FC"}
            style={{ animation: `nodePulse 3s ease-in-out ${n.delay}s infinite` }}
          />
        ))}
      </svg>
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="text-[10px] tracking-[0.14em] text-white/35" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          40+ COUNTRIES
        </span>
        <span className="text-[10px] tracking-[0.14em] text-white/35" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          1200+ ENGINEERS
        </span>
      </div>
    </div>
  )
}