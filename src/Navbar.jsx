


import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import logo from "./assets/logo.png";
import logo from "./assets/nexvoya_logo_red_yellow.png";
import TypingText from "./TypingText";

const services = [
  { name: "System Integration", path: "/system-integration" },
  { name: "Medical Coding", path: "/medical-coding" },
  { name: "Clinical SAS", path: "/clinical" },
  { name: "Cloud Computing", path: "/cloud-computing" },
  { name: "Staff Augmentation", path: "/staff-augmentation" },
  { name: "Mobile App Development", path: "/mobile-app" },
  { name: "ERP Solutions", path: "/erp-solutions" },
  { name: "Quality Assurance", path: "/quality-assurance" },
  { name: "Web Development", path: "/web-development" },
];

export default function Navbar({ onContactClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Scroll detection for navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleServiceClick = (path) => {
    navigate(path);
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-slate-100"
            : "bg-black"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 md:h-16 gap-4">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img src={logo} className="w-9 h-9 md:w-10 md:h-10 object-contain" alt="Nexvoya" />
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">Nexvoya</span>
            </Link>

            {/* ── CENTER TAGLINE (desktop only, flex-centered, no clipping) ── */}
            <div className="hidden lg:flex flex-1 justify-center items-center min-w-0 px-2 pointer-events-none">
              <TypingText />
            </div>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden md:flex items-center gap-1 shrink-0">

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-mist-50 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full right-0 mt-2 w-60 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden py-2"
                    >
                      {services.map((service, i) => (
                        <button
                          key={i}
                          onClick={() => handleServiceClick(service.path)}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 shrink-0" />
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Us */}
              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium text-zinc-50 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                About Us
              </Link>

              {/* Contact button */}
              <button
                onClick={handleContactClick}
                className="ml-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
              </button>
            </div>

            {/* ── HAMBURGER (mobile only) ── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>

          </div>

          {/* ── MOBILE TAGLINE ROW — only visible on mobile ── */}
          <div className="md:hidden border-t border-slate-100 py-1.5 px-1 flex items-center justify-center overflow-hidden">
            <TypingText />
          </div>

        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <img src={logo} className="w-8 h-8 object-contain" alt="Nexvoya" />
                  <span className="text-lg font-bold text-slate-900">Nexvoya</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600 text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-blue-100 pl-4">
                          {services.map((service, i) => (
                            <button
                              key={i}
                              onClick={() => handleServiceClick(service.path)}
                              className="w-full text-left px-3 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us */}
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>

              </div>

              {/* CTA at bottom */}
              <div className="px-4 py-5 border-t border-slate-100 space-y-3">
                <button
                  onClick={handleContactClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-200 transition-all active:scale-95 text-sm"
                >
                  Contact Us →
                </button>
                <p className="text-center text-xs text-slate-400">⚡ Avg response under 2 hours</p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── SPACER to push content below fixed navbar ── */}
      {/* Mobile: h-14 (nav row) + ~32px (tagline row) ≈ h-24; Desktop: h-16 */}
      <div className="h-24 md:h-16" />
    </>
  );
}