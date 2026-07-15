import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ClinicalSas = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black min-h-screen text-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />

      {/* ── BACK BUTTON ── */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-all hover:-translate-x-1"
      >
        <span>←</span> Back
      </button>

      <div className="relative z-10">
        {/* ── HERO ── */}
        <div className="relative text-center px-4 sm:px-6 py-20 sm:py-28 overflow-hidden">
          <div
            className="absolute w-96 h-96 -top-32 -left-20 opacity-40 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(79,110,247,0.15) 0%, transparent 70%)" }}
          />
          <div
            className="absolute w-96 h-96 -bottom-32 -right-20 opacity-40 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 relative z-10"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            CLINICAL SAS PROGRAMMING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 relative z-10 max-w-4xl mx-auto"
          >
            Reliable{" "}
            <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Clinical SAS
            </span>{" "}
            Programming & Analysis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 relative z-10"
          >
            CDISC-compliant SDTM, ADaM, and TLF programming for clinical trials —
            accurate, audit-ready, and delivered on regulatory timelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center gap-4 flex-wrap relative z-10"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1">
              Get a Free Assessment →
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-3 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:bg-white/20">
              Talk to an Expert
            </button>
          </motion.div>
        </div>

        {/* ── SERVICES ── */}
        <div className="mt-8 px-4 sm:px-6 text-center">
          <p className="text-blue-400 text-sm font-bold tracking-widest mb-2">WHAT WE DELIVER</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End Clinical Programming
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            From raw data to submission-ready deliverables, our SAS programmers cover the full clinical trial lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 text-left max-w-6xl mx-auto">
            {[
              { icon: "📊", tag: "SDTM", tagButton: "bg-blue-600 text-white", title: "SDTM Mapping", desc: "Standardized SDTM datasets built to CDISC specifications for regulatory submission." },
              { icon: "📈", tag: "ADaM", tagButton: "bg-purple-600 text-white", title: "ADaM Programming", desc: "Analysis-ready ADaM datasets supporting efficacy and safety reporting." },
              { icon: "📋", tag: "TLFs", tagButton: "bg-teal-600 text-white", title: "Tables, Listings & Figures", desc: "Production of validated TLFs for clinical study reports and submissions." },
              { icon: "✅", tag: "QC", tagButton: "bg-green-600 text-white", title: "Independent QC", desc: "Double-programming and validation to ensure 100% data integrity and traceability." },
              { icon: "📁", tag: "Submission", tagButton: "bg-orange-600 text-white", title: "eCTD Submission Support", desc: "Define.xml, reviewer's guides, and submission packages ready for FDA/EMA review." },
              { icon: "🧬", tag: "Biostatistics", tagButton: "bg-pink-600 text-white", title: "Statistical Programming", desc: "Support for statistical analysis plans (SAP) and complex derived endpoints." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl mb-4 bg-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {s.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${s.tagButton} mb-3 inline-block tracking-wide shadow-md`}>
                  {s.tag}
                </span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="mt-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold tracking-widest mb-2">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">How We Work</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              A rigorous, GCP-aligned workflow that keeps your trial on schedule and audit-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Protocol Review", desc: "We review the protocol and SAP to scope programming requirements." },
              { num: "02", title: "Dataset Development", desc: "We build SDTM and ADaM datasets aligned to CDISC standards." },
              { num: "03", title: "TLF Production", desc: "We generate and validate tables, listings, and figures for reporting." },
              { num: "04", title: "QC & Delivery", desc: "Independent QC and sign-off before submission-ready delivery." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative"
              >
                <div className="text-4xl font-black text-slate-800 mb-3">{step.num}</div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── WHY US STATS ── */}
        <div className="mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { num: "150+", label: "Clinical studies supported", color: "text-blue-400" },
              { num: "100%", label: "CDISC-compliant deliverables", color: "text-green-400" },
              { num: "40+", label: "Certified SAS programmers", color: "text-purple-400" },
              { num: "FDA", label: "& EMA submission experience", color: "text-orange-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-7 text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.num}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-24 px-4 sm:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-linear-to-br from-blue-950 to-emerald-950 border border-blue-900 rounded-3xl p-10 sm:p-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need clinical SAS support for your trial?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Let's talk about your study timeline and how our programmers can help you stay submission-ready.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1"
            >
              Book Free Consultation
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSas;
