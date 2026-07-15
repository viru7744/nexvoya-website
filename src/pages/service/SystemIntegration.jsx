import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SystemIntegration = () => {
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
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 relative z-10"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            SYSTEM INTEGRATION SERVICES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 relative z-10 max-w-4xl mx-auto"
          >
            Connect Every System.{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Unify Your Operations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 relative z-10"
          >
            We connect your ERPs, CRMs, APIs, and legacy systems into one seamless,
            automated workflow — no more silos, no more manual data entry.
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

        {/* ── WHAT WE INTEGRATE ── */}
        <div className="mt-8 px-4 sm:px-6 text-center">
          <p className="text-blue-400 text-sm font-bold tracking-widest mb-2">WHAT WE INTEGRATE</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End System Integration
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            From cloud platforms to on-prem legacy tools, we make everything talk to each other.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12 text-left max-w-6xl mx-auto">
            {[
              { icon: "🔗", tag: "APIs", tagButton: "bg-blue-600 text-white", title: "API Integration", desc: "REST, GraphQL, SOAP, and webhook-based integrations connecting your apps in real time." },
              { icon: "🏢", tag: "Enterprise", tagButton: "bg-purple-600 text-white", title: "ERP & CRM Sync", desc: "Seamlessly connect SAP, Salesforce, HubSpot, Zoho, and other enterprise platforms." },
              { icon: "☁️", tag: "Cloud", tagButton: "bg-teal-600 text-white", title: "Cloud Migration", desc: "Move legacy systems to AWS, Azure, or GCP without disrupting daily operations." },
              { icon: "🤖", tag: "Automation", tagButton: "bg-orange-600 text-white", title: "Workflow Automation", desc: "Automate repetitive processes across systems with custom middleware and triggers." },
              { icon: "🗄️", tag: "Data", tagButton: "bg-green-600 text-white", title: "Data Pipeline Integration", desc: "Real-time data sync between databases, warehouses, and third-party services." },
              { icon: "🔐", tag: "Security", tagButton: "bg-pink-600 text-white", title: "Identity & SSO", desc: "Unify authentication across systems with SSO, OAuth, and enterprise-grade security." },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">How We Integrate Your Systems</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              A proven four-step approach that minimizes downtime and maximizes reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery & Audit", desc: "We map your existing systems, data flows, and integration gaps." },
              { num: "02", title: "Architecture Design", desc: "We design a scalable integration blueprint tailored to your stack." },
              { num: "03", title: "Build & Test", desc: "We build connectors and middleware, tested rigorously before go-live." },
              { num: "04", title: "Deploy & Monitor", desc: "We deploy with zero downtime and monitor performance continuously." },
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
              { num: "200+", label: "Systems integrated across industries", color: "text-blue-400" },
              { num: "99.9%", label: "Uptime across integrated pipelines", color: "text-green-400" },
              { num: "60%", label: "Average reduction in manual processes", color: "text-purple-400" },
              { num: "24/7", label: "Monitoring and support coverage", color: "text-orange-400" },
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
            className="max-w-4xl mx-auto text-center bg-linear-to-br from-blue-950 to-indigo-950 border border-blue-900 rounded-3xl p-10 sm:p-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to unify your systems?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Let's build an integration strategy that eliminates silos and streamlines your operations.
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

export default SystemIntegration;
