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
        {/* ── WHY US ── */}
<div className="relative bg-white py-20 px-6 overflow-hidden">
  
  {/* Organic blobs background */}
  <div 
    className="absolute w-[800px] h-[800px] -top-[300px] -left-[200px] opacity-40 blur-3xl"
    style={{
      background: 'radial-gradient(circle, rgba(79,110,247,0.08) 0%, transparent 70%)',
      borderRadius: '43% 57% 38% 62% / 48% 35% 65% 52%',
      animation: 'morph 20s ease-in-out infinite'
    }}
  />
  <div 
    className="absolute w-[600px] h-[600px] -bottom-[200px] -right-[150px] opacity-40 blur-3xl"
    style={{
      background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
      borderRadius: '57% 43% 62% 38% / 35% 65% 35% 65%',
      animation: 'morph 25s ease-in-out infinite reverse'
    }}
  />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* Header */}
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 mb-4"
      >
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
        WHY CHOOSE NEXVOYA
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Built on trust, driven by results
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed"
      >
        We're not just developers — we're your growth partners. Here's what sets us apart in the global tech landscape.
      </motion.p>
    </div>

    {/* Stats Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { icon: "✓", num: "500+", label: "Projects delivered across 40+ countries", color: "from-blue-100 to-blue-200", iconColor: "text-blue-700" },
        { icon: "👥", num: "1200+", label: "Developers in our global talent network", color: "from-purple-100 to-purple-200", iconColor: "text-purple-700" },
        { icon: "😊", num: "98%", label: "Client satisfaction & retention rate", color: "from-yellow-100 to-yellow-200", iconColor: "text-yellow-800" },
        { icon: "⚡", num: "48hr", label: "Average time to match & onboard talent", color: "from-green-100 to-green-200", iconColor: "text-green-700" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(79,110,247,0.12)" }}
          className="relative bg-white border border-slate-100 rounded-2xl p-9 group overflow-hidden transition-all duration-300"
        >
          {/* Glow effect on hover */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
          
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} ${stat.iconColor} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
            {stat.icon}
          </div>
          
          {/* Number */}
          <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {stat.num}
            </span>
          </div>
          
          {/* Label */}
          <div className="text-slate-500 text-sm font-medium leading-relaxed">
            {stat.label}
          </div>

          {/* Bottom line decoration */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
      ))}
    </div>

  </div>

  <style>{`
    @keyframes morph {
      0%, 100% { border-radius: 43% 57% 38% 62% / 48% 35% 65% 52%; }
      50% { border-radius: 57% 43% 62% 38% / 62% 48% 52% 38%; }
    }
  `}</style>
</div>
{/* ── BLOG SECTION ── */}
<div className="relative bg-gray-50 py-20 px-6 overflow-hidden">
  
  {/* Subtle gradient */}
  <div className="absolute w-full h-96 bg-gradient-to-b from-transparent to-gray-100/60 bottom-0 left-0 pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* Header */}
    <div className="text-center mb-14">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-semibold tracking-widest text-slate-500 mb-3 uppercase"
      >
        Insights & Resources
      </motion.p>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
        style={{ fontFamily: 'serif' }}
      >
        Latest from the blog
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-xl mx-auto leading-relaxed"
      >
        Deep dives, practical guides, and real-world case studies from our engineering team and industry experts.
      </motion.p>
    </div>

    {/* Blog Grid */}
    <div className="grid md:grid-cols-3 gap-7 mb-12">
      {[
        {
          icon: "🤖",
          tag: "AI Development",
          tagColor: "bg-blue-100 text-blue-700",
          gradientBg: "from-blue-100 to-indigo-100",
          title: "Building Production-Ready AI Apps: Lessons from 50+ Deployments",
          excerpt: "From prototype to scale — learn how we helped startups ship AI features that handle millions of requests without breaking the bank.",
          date: "Apr 18, 2026",
          readTime: "8 min read"
        },
        {
          icon: "⚡",
          tag: "Performance",
          tagColor: "bg-yellow-100 text-yellow-800",
          gradientBg: "from-yellow-100 to-pink-100",
          title: "How We Cut API Response Time by 73% Using Edge Computing",
          excerpt: "A technical breakdown of migrating a fintech app to edge functions — and the surprising cost savings that came with it.",
          date: "Apr 12, 2026",
          readTime: "6 min read"
        },
        {
          icon: "🚀",
          tag: "Startup Playbook",
          tagColor: "bg-green-100 text-green-700",
          gradientBg: "from-green-100 to-cyan-100",
          title: "MVP to Series A: The Tech Stack Decisions That Actually Mattered",
          excerpt: "We tracked 30 startups from MVP to funding. Here's what they wish they knew about choosing tech early on.",
          date: "Apr 5, 2026",
          readTime: "10 min read"
        },
      ].map((post, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -8, boxShadow: "0 24px 56px rgba(15,23,42,0.1)" }}
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col cursor-pointer group transition-all duration-300"
        >
          {/* Thumbnail */}
          <div className={`h-48 bg-gradient-to-br ${post.gradientBg} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 mix-blend-multiply" />
            <div className="absolute bottom-4 right-4 w-14 h-14 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              {post.icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-direction-column">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.tagColor} inline-block mb-3 uppercase tracking-wide`}>
              {post.tag}
            </span>
            <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-auto line-clamp-3">
              {post.excerpt}
            </p>
            
            {/* Meta */}
            <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-100 text-xs text-slate-400">
              <span className="font-medium">{post.date}</span>
              <span className="flex items-center gap-1">📖 {post.readTime}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-300">
        View All Articles
        <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
      </button>
    </motion.div>

  </div>
</div>

       {/* ── CONTACT SECTION ── */}
<div className="relative bg-gray-50 py-20 px-6 overflow-hidden">
  
  {/* Animated gradient orbs */}
  <div 
    className="absolute w-[500px] h-[500px] -top-24 -left-24 rounded-full opacity-60 blur-3xl"
    style={{
      background: 'radial-gradient(circle, rgba(79,110,247,0.08), transparent 70%)',
      animation: 'float 20s ease-in-out infinite'
    }}
  />
  <div 
    className="absolute w-[400px] h-[400px] -bottom-12 -right-12 rounded-full opacity-60 blur-3xl"
    style={{
      background: 'radial-gradient(circle, rgba(167,139,250,0.06), transparent 70%)',
      animation: 'float 25s ease-in-out infinite reverse'
    }}
  />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* Header */}
    <div className="text-center mb-14">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-semibold tracking-widest text-blue-600 mb-3 uppercase"
      >
        Ready to Build?
      </motion.p>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight"
      >
        Let's Talk About Your Project
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-lg mx-auto leading-relaxed"
      >
        Share your vision with us. We'll turn it into a roadmap, timeline, and dedicated team — all within 48 hours.
      </motion.p>
    </div>

    {/* Split Layout */}
    <div className="grid md:grid-cols-2 gap-12 items-start">
      
      {/* LEFT - CTA */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
          Let's build something amazing together
        </h3>
        <p className="text-slate-500 leading-relaxed mb-7">
          Whether you need a single developer or a full product team, we're here to help you scale fast without compromising quality.
        </p>
        
        <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-300 mb-9">
          Book Free Consultation
          <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
        </button>

        {/* Steps */}
        <ul className="space-y-4">
          {[
            { num: "01", text: "Share your app idea or project requirements with us" },
            { num: "02", text: "Get a free project assessment and cost estimate" },
            { num: "03", text: "Receive a tailored development plan and team proposal" },
          ].map((step, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-sm font-bold text-blue-700">
                {step.num}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed pt-0.5">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* RIGHT - Contact Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
        
        {/* Contact Items */}
        <ul className="space-y-0 divide-y divide-gray-100">
          {[
            { icon: "💬", label: "WhatsApp", value: "xxxxxxxxxx", link: "https://wa.me/919754352051", gradient: "from-green-100 to-emerald-100", iconColor: "text-green-700" },
            { icon: "📞", label: "Phone", value: "xxxxxxxxx", link: "tel:xxxxxxxxx", gradient: "from-blue-100 to-cyan-100", iconColor: "text-blue-700" },
            { icon: "✉️", label: "Email", value: "hello@nexvoya.com", link: "mailto:hello@nexvoya.com", gradient: "from-yellow-100 to-orange-100", iconColor: "text-yellow-800" },
            { icon: "🌍", label: "Address", value: "Working remotely worldwide", link: null, gradient: "from-purple-100 to-pink-100", iconColor: "text-purple-700" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 py-4 group">
              <div className={`flex-shrink-0 w-11 h-11 bg-gradient-to-br ${item.gradient} ${item.iconColor} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">
                  {item.label}
                </p>
                {item.link ? (
  <a
    href={item.link}
    className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
  >
    {item.value}
  </a>
) : (
  <p className="text-sm font-medium text-slate-900">
    {item.value}
  </p>
)}
              </div>
            </li>
          ))}
        </ul>

        {/* Trust Badge */}
        <div className="mt-6 flex items-start gap-3 bg-gray-50 rounded-xl p-4">
          <span className="text-2xl">⚡</span>
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Average response time:</strong> Under 2 hours during business hours (9 AM - 6 PM IST)
          </p>
        </div>
      </motion.div>

    </div>

  </div>

  <style>{`
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(30px, -30px) scale(1.05); }
    }
  `}</style>
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
