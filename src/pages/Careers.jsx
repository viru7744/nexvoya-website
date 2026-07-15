
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Careers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        @keyframes driftGlow {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-16px,-12px) scale(1.06); }
        }
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tokenGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Subtle grid */}
      <div className="fixed inset-0 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none z-0" />

      {/* ── HERO ── */}
      <div className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,110,247,0.16), transparent 70%)", animation: "driftGlow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.1), transparent 70%)", animation: "driftGlow 15s ease-in-out infinite reverse" }}
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
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.14em] text-emerald-300">WE'RE HIRING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Build the tools that<br />
            <span className="italic bg-linear-to-r from-blue-300 via-indigo-300 to-white bg-clip-text text-transparent">
              build other people's ideas.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-white/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Join a team shipping real products for clients across 40+ countries — modern stack,
            real ownership, and a review process that actually respects your time.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-24">

        {/* WHY JOIN US */}
        <section className="mb-6">
          <SectionLabel n="01" title="Why join us" />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: "⌘", title: "Modern tech stack", desc: "React, Spring Boot, cloud-native tooling — no legacy systems to fight." },
              { icon: "↗", title: "Growth opportunities", desc: "Ship client-facing work fast enough to actually build a track record." },
              { icon: "◐", title: "Flexible work culture", desc: "Async-friendly, outcome-focused, and light on unnecessary meetings." },
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
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base mb-4 border border-blue-400/25 text-blue-300 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(79,110,247,0.12)" }}
                >
                  {item.icon}
                </div>
                <p className="text-white font-semibold text-sm mb-1.5">{item.title}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* HOW HIRING WORKS — signature element */}
        <section className="mb-6">
          <SectionLabel n="02" title="How hiring works" />
          <HiringFunnel />
        </section>

        <Divider />

        {/* OPEN POSITIONS */}
        <section className="mb-6">
          <SectionLabel n="03" title="Open positions" />
          <div className="space-y-4">
            {[
              {
                title: "Java Full Stack Developer",
                tags: ["Spring Boot", "React / Angular", "MySQL"],
                level: "Mid – Senior",
              },
              {
                title: "Frontend Developer",
                tags: ["React.js", "Tailwind CSS", "API Integration"],
                level: "Junior – Mid",
              },
            ].map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/3 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 text-white/60"
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className="text-[11px] tracking-wide text-blue-300 border border-blue-400/25 rounded-full px-3 py-1 self-start sm:self-center whitespace-nowrap"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", background: "rgba(79,110,247,0.1)" }}
                  >
                    {role.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* APPLY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-9 sm:p-12 text-center overflow-hidden border border-white/10"
          style={{ background: "linear-gradient(135deg, rgba(79,110,247,0.16), rgba(20,10,50,0.4))" }}
        >
          <h2 className="text-2xl sm:text-3xl font-medium mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
            Apply now
          </h2>
          <p className="text-white/60 mb-7 text-sm sm:text-base max-w-md mx-auto">
            Submit your application using our official form — we review every one.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScZqEZqqvqPZjZ8QP3mC41GdVWKqR-lcNEarvjaPwsgZyy50g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition hover:-translate-y-1 shadow-lg shadow-blue-900/30 text-sm sm:text-base"
          >
            Apply Now
            <span>→</span>
          </a>
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

const SectionLabel = ({ n, title }) => (
  <div className="flex items-baseline gap-3 mb-6">
    <span
      className="text-[11px] px-2 py-0.5 rounded border border-white/20 text-white/50"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {n}
    </span>
    <h2 className="text-xl font-medium text-white" style={{ fontFamily: "'Fraunces', serif" }}>
      {title}
    </h2>
  </div>
);

const HiringFunnel = () => {
  const steps = [
    { label: "Apply", desc: "Submit the form, 10 minutes", delay: 0 },
    { label: "Screen", desc: "A short call, no trick questions", delay: 0.12 },
    { label: "Technical round", desc: "Real problems, not puzzles", delay: 0.24 },
    { label: "Offer", desc: "Decision within days, not weeks", delay: 0.36 },
  ]
  return (
    <div className="bg-white/3 border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="grid sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/10">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="sm:px-6 first:sm:pl-0 last:sm:pr-0"
            style={{ animation: `stepIn 0.5s ease-out ${s.delay}s both` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] border border-blue-400/30 text-blue-300"
                style={{ fontFamily: "'IBM Plex Mono', monospace", background: "rgba(79,110,247,0.1)" }}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden sm:block flex-1 h-px bg-white/10 relative">
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-300"
                    style={{ animation: "tokenGlow 1.8s ease-in-out infinite" }}
                  />
                </span>
              )}
            </div>
            <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
            <p className="text-white/50 text-[12.5px] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}