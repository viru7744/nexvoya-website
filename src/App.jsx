import "./index.css";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import NexvoyaFlow from "./assets/NexvoyaFlow";

function App() {
  return (
    <div className="relative text-black min-h-screen bg-[#f8fafc]">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

      <div className="relative z-10">

        {/* ── NAVBAR ── */}
        <nav className="flex justify-between items-center px-10 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10" alt="Nexvoya logo" />
            <h2 className="text-xl font-bold">Nexvoya</h2>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition">Services</a>
            <a href="#" className="hover:text-blue-600 transition">About Us</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition shadow-md shadow-blue-200">
              Contact Us
            </button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="relative text-center mt-10 px-6 py-16 overflow-hidden">

          {/* Radial glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            GLOBAL STAFF AUGMENTATION PLATFORM
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Hire{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              World-Class
            </span>{" "}
            IT Talent.<br />
            Build Faster. Scale Smarter.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-slate-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            From individual developers to full dedicated teams —<br className="hidden md:block" />
            matched by AI, delivered in <strong className="text-slate-700">48 hours</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
              Get Dedicated Team →
            </button>
            <button className="bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-800 px-7 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5">
              Book Free Consultation
            </button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="flex">
              {[
                { initials: "AR", color: "#4f6ef7" },
                { initials: "SK", color: "#a78bfa" },
                { initials: "MJ", color: "#06b6d4" },
                { initials: "PK", color: "#10b981" },
                { initials: "+",  color: "#f59e0b" },
              ].map((av, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: av.color }}
                >
                  {av.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-slate-500">
              Trusted by <strong className="text-slate-700">200+</strong> companies worldwide
            </span>
          </motion.div>

          {/* Floating stat chips — visible on large screens */}
          {[
            { icon: "🌍", num: "40+",   label: "Countries Served",   pos: "left-6 top-10"    },
            { icon: "⚡", num: "48hr",  label: "Avg Match Time",     pos: "right-6 top-10"   },
            { icon: "👨‍💻", num: "500+",  label: "Vetted Developers",  pos: "left-6 bottom-10" },
            { icon: "⭐", num: "4.9/5", label: "Client Rating",      pos: "right-6 bottom-10"},
          ].map((chip, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
              className={`absolute ${chip.pos} hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur border border-blue-100 rounded-2xl px-4 py-3 shadow-lg`}
            >
              <span className="text-2xl">{chip.icon}</span>
              <div>
                <div className="text-base font-bold text-slate-900">{chip.num}</div>
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
<div className="mt-24 px-6 text-center">
  <p className="text-blue-600 text-sm font-bold tracking-widest mb-2">WHAT WE DO</p>
  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">What We Offer</h2>
  <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
    End-to-end technology services to help you build, launch, and scale globally.
  </p>

  <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
    {[
      { title:"Staff Augmentation", icon:"🧑‍💻", tag:"Core Service", tagColor:"bg-blue-100 text-blue-700",   hoverBg:"hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-100", border:"border-blue-500 border-2", badge:"MOST POPULAR", desc:"Top engineers on demand, seamlessly integrated into your team within 48 hours." },
      { title:"Custom Software",    icon:"⚙️",   tag:"Build",        tagColor:"bg-green-100 text-green-700",  hoverBg:"hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-100", border:"", badge:"", desc:"Tailor-made solutions engineered for your exact business needs and scale." },
      { title:"Web Development",    icon:"🌐",   tag:"Web",          tagColor:"bg-purple-100 text-purple-700",hoverBg:"hover:bg-gradient-to-br hover:from-purple-50 hover:to-fuchsia-100", border:"", badge:"", desc:"Fast, modern, SEO-optimized web experiences that convert visitors to customers." },
      { title:"Mobile Apps",        icon:"📱",   tag:"Mobile",       tagColor:"bg-orange-100 text-orange-700",hoverBg:"hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-100", border:"", badge:"", desc:"Native iOS & Android apps with smooth UX that your users will love." },
      { title:"UI/UX Design",       icon:"🎨",   tag:"Design",       tagColor:"bg-pink-100 text-pink-700",    hoverBg:"hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-100", border:"", badge:"", desc:"Research-led, pixel-perfect interfaces that delight users and drive engagement." },
      { title:"Product Development",icon:"🚀",   tag:"End-to-End",   tagColor:"bg-teal-100 text-teal-700",    hoverBg:"hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-100", border:"", badge:"", desc:"From idea to launch — strategy, design, dev, and deployment under one roof." },
    ].map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.07 }}
        className={`relative bg-white ${s.border || "border border-slate-100"} rounded-2xl p-7 ${s.hoverBg} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group`}
      >
        {s.badge && (
          <span className="absolute top-0 right-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-b-lg tracking-wider">
            {s.badge}
          </span>
        )}
        <div className="text-3xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 inline-block">
          {s.icon}
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${s.tagColor} mb-3 inline-block tracking-wider`}>
          {s.tag}
        </span>
        <h3 className="font-bold text-slate-900 text-base mb-2">{s.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
        <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <span>→</span>
        </div>
      </motion.div>
    ))}
  </div>
</div>

        {/* ── INDUSTRIES ── */}
        <div className="mt-28 px-6 text-center">
          <p className="text-blue-600 text-sm font-semibold tracking-widest mb-2">INDUSTRIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
            Industries We Serve
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            We bring domain-specific expertise and innovative solutions to transform businesses across sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: "🩺", title: "Healthcare",   desc: "Patient portals, health apps, and EMR systems.",          delay: 0     },
              { icon: "🎓", title: "EdTech",       desc: "LMS, virtual classrooms, and e-learning platforms.",     delay: 0.1   },
              { icon: "💰", title: "FinTech",      desc: "Payment gateways, wallets, and finance apps.",           delay: 0.2   },
              { icon: "🏢", title: "Real Estate",  desc: "Property platforms and virtual tours.",                  delay: 0.15  },
              { icon: "🛒", title: "Retail",       desc: "E-commerce, POS systems, inventory solutions.",          delay: 0.25  },
              { icon: "🍽️", title: "Restaurants", desc: "Online ordering, reservation & loyalty systems.",        delay: 0.3   },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all text-left"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-24 mx-6 mb-2 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{backgroundImage:"radial-gradient(circle at 20% 50%,#fff 1px,transparent 1px),radial-gradient(circle at 80% 50%,#fff 1px,transparent 1px)",backgroundSize:"30px 30px"}}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-200 text-sm font-semibold tracking-widest mb-3">READY TO SCALE?</p>
            <h2 className="text-3xl md:text-4xl font-black">Get Started Today</h2>
            <p className="text-blue-100 mt-3 text-base max-w-md mx-auto">
              Talk to our experts and get your dedicated team in 48 hours.
            </p>
            <div className="mt-7 flex justify-center gap-4 flex-wrap">
              <button className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition shadow-lg">
                Contact Us →
              </button>
              <button className="border-2 border-white/40 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/10 transition">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── FOOTER ── */}
        <div className="bg-slate-950 text-white px-10 py-12 mt-2">
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
            <div className="flex gap-16 text-sm">
              <div>
                <p className="font-semibold text-slate-300 mb-3">Company</p>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-300 mb-3">Contact</p>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-white transition">hello@nexvoya.com</a></li>
                  <li><a href="#" className="hover:text-white transition">Book a Call</a></li>
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
  );
}

export default App;
