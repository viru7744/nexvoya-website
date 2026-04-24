import "./index.css";
import ParticlesBg from "./ParticlesBg";
import logo from "./assets/logo.png";
import heroGif from "./assets/hero.gif";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="relative bg-[#0b0f2a] text-white min-h-screen">

      {/* Background particles (optional) */}
      <ParticlesBg />

      {/* Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <h2 className="text-xl font-semibold">Nexvoya</h2>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        </nav>

        {/* 🔥 Hero Section with GIF */}
        <div className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">

          {/* GIF Background */}
          <img
            src={heroGif}
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Hero Content */}
          <div className="relative z-10 px-6">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Trusted IT Partner for <br /> Business Growth
            </h1>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge IT solutions and expert support 
              to drive your digital transformation.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started Today
              </button>
              <button className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                Learn More
              </button>
            </div>

          </div>
        </div>

        {/* 🔥 Services Section */}
       {/* 🔥 Services Section */}
<motion.div
  className="mt-32 px-10"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

  <h2 className="text-3xl font-bold text-center mb-12">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-3">HR Consulting</h3>
      <p className="text-gray-300">
        We help businesses hire the right talent and build strong teams.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-3">Internship Program</h3>
      <p className="text-gray-300">
        Get real-world experience with certification and live projects.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-3">Recruitment Services</h3>
      <p className="text-gray-300">
        Fast and efficient hiring solutions for startups and enterprises.
      </p>
    </motion.div>

  </div>
</motion.div>
          </div>
          {/* 🔥 Stats Section */}
  <div className="mt-32 px-6">

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl py-12 px-8 text-center">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Stat 1 */}
      <div>
        <h2 className="text-4xl font-bold">9+</h2>
        <div className="w-16 h-[2px] bg-gray-500 mx-auto my-4"></div>
        <p className="text-gray-300">
          Years of IT Consulting Experience
        </p>
      </div>

      {/* Stat 2 */}
      <div>
        <h2 className="text-4xl font-bold">1600+</h2>
        <div className="w-16 h-[2px] bg-gray-500 mx-auto my-4"></div>
        <p className="text-gray-300">
          Tech-Mavericks under One Roof
        </p>
      </div>

      {/* Stat 3 */}
      <div>
        <h2 className="text-4xl font-bold">3000+</h2>
        <div className="w-16 h-[2px] bg-gray-500 mx-auto my-4"></div>
        <p className="text-gray-300">
          Successful Projects Delivered
        </p>
      </div>

      {/* Stat 4 */}
      <div>
        <h2 className="text-4xl font-bold">95%</h2>
        <div className="w-16 h-[2px] bg-gray-500 mx-auto my-4"></div>
        <p className="text-gray-300">
          Clients Stay for More
        </p>
      </div>

    </div>

    {/* CTA Button */}
    <div className="mt-10">
      <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Let's Reimagine Your Business
      </button>
    </div>

  </div>

</div>
        {/* 🔥 Who We Are Section */}
{/* 🔥 Who We Are Section */}
<div id="about" className="mt-32 px-6 flex justify-center">

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 text-center max-w-4xl">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Who We Are
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Nexvoya is your trusted technology partner delivering high-performance 
      software solutions, developer staffing, and UI/UX services tailored to your 
      business needs. We serve startups, SMEs, and enterprises across industries 
      including Healthcare, Ed-Tech, FinTech, Real Estate, Retail, and more.
    </p>

  </div>

</div>
{/* 🔥 Our Services Advanced Section */}
{/* 🔥 Our Services Advanced Section (Animated) */}
<div className="mt-32 px-6 text-center">

  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-1 rounded-full">
    Our Services
  </span>

  <h2 className="text-3xl md:text-4xl font-bold mt-4">
    What We Offer
  </h2>

  <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
    Explore our wide range of IT services designed to accelerate your digital transformation.
  </p>

  {/* 🔥 Cards */}
  <div className="grid md:grid-cols-3 gap-8 mt-12">

    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
        🚀
      </div>
      <h3 className="text-lg font-semibold mb-2">IT Staff Augmentation</h3>
      <p className="text-gray-400 text-sm">
        Hire experienced developers across any tech stack.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500">
        ⚙️
      </div>
      <h3 className="text-lg font-semibold mb-2">Custom Software</h3>
      <p className="text-gray-400 text-sm">
        Tailor-made software for your business.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-500">
        🌐
      </div>
      <h3 className="text-lg font-semibold mb-2">Web Development</h3>
      <p className="text-gray-400 text-sm">
        SEO optimized modern websites.
      </p>
    </motion.div>

    {/* Card 4 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
        📱
      </div>
      <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
      <p className="text-gray-400 text-sm">
        iOS & Android apps for modern businesses.
      </p>
    </motion.div>

    {/* Card 5 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-red-500">
        🎨
      </div>
      <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
      <p className="text-gray-400 text-sm">
        Modern interfaces that improve user experience.
      </p>
    </motion.div>

    {/* Card 6 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500">
        💡
      </div>
      <h3 className="text-lg font-semibold mb-2">Product Development</h3>
      <p className="text-gray-400 text-sm">
        Build scalable digital products from scratch.
      </p>
    </motion.div>

  </div>

</div>
{/* 🔥 Industries Section (Animated) */}
<div className="mt-32 px-6 text-center">

  {/* Tag */}
  <span className="bg-white/10 text-blue-400 text-sm px-4 py-1 rounded-full">
    Industry Expertise
  </span>

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold mt-4">
    Industries We Serve
  </h2>

  <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
    We bring domain-specific expertise and innovative solutions to transform businesses across sectors.
  </p>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8 mt-12">

    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">🩺</div>
      <h3 className="font-semibold text-lg">Healthcare</h3>
      <p className="text-gray-400 text-sm mt-2">
        Patient portals, health apps, and EMR systems.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">🎓</div>
      <h3 className="font-semibold text-lg">EdTech</h3>
      <p className="text-gray-400 text-sm mt-2">
        LMS, virtual classrooms, and e-learning platforms.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">💰</div>
      <h3 className="font-semibold text-lg">FinTech</h3>
      <p className="text-gray-400 text-sm mt-2">
        Payment gateways, wallets, and finance apps.
      </p>
    </motion.div>

    {/* Card 4 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">🏢</div>
      <h3 className="font-semibold text-lg">Real Estate</h3>
      <p className="text-gray-400 text-sm mt-2">
        Property platforms and virtual tours.
      </p>
    </motion.div>

    {/* Card 5 */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">🛒</div>
      <h3 className="font-semibold text-lg">Retail</h3>
      <p className="text-gray-400 text-sm mt-2">
        E-commerce, POS systems, inventory solutions.
      </p>
    </motion.div>

    {/* Card 6 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
    >
      <div className="text-3xl mb-3">🍽️</div>
      <h3 className="font-semibold text-lg">Restaurants</h3>
      <p className="text-gray-400 text-sm mt-2">
        Online ordering, reservation & loyalty systems.
      </p>
    </motion.div>

  </div>

  {/* Bottom CTA */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mt-10 text-gray-400"
  >
    Ready to transform your industry →
  </motion.div>

</div>
{/* 🔥 CTA Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-32 bg-gradient-to-r from-blue-500 to-purple-600 py-16 text-center px-6"
>
  <h2 className="text-3xl md:text-4xl font-bold text-white">
    Get Started Today
  </h2>

  <p className="text-white/80 mt-4 max-w-xl mx-auto">
    Contact us for a free consultation and let's shape the future of your business together.
  </p>

  <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
    Contact Us Now
  </button>
</motion.div>


{/* 🔥 Footer */}
<div className="bg-[#0b0f2a] px-10 py-16 text-white">

  <div className="grid md:grid-cols-3 gap-10">

    {/* Left */}
    <div>
      <h2 className="text-xl font-bold mb-4">Nexvoya</h2>
      <p className="text-gray-400 text-sm">
        Empowering businesses with cutting-edge IT solutions and expert support 
        to drive digital transformation.
      </p>

      <div className="mt-4 flex gap-4">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/nexvoya-consultancy-services/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:scale-110 hover:bg-blue-500 transition duration-300"
  >
    <FaLinkedin size={18} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/your-page"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:scale-110 hover:bg-pink-500 transition duration-300"
  >
    <FaInstagram size={18} />
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/your-page"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-3 rounded-full hover:scale-110 hover:bg-blue-600 transition duration-300"
  >
    <FaFacebook size={18} />
  </a>

</div>
    </div>

    {/* Middle */}
    <div>
      <h3 className="font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Custom Software</li>
        <li>UI/UX Design</li>
        <li>Staff Augmentation</li>
      </ul>
    </div>

    {/* Right */}
    <div>
      <h3 className="font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-400 text-sm mb-4">
        Get the latest insights and updates delivered to your inbox.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
      />

      <button className="mt-3 w-full bg-gradient-to-r from-blue-500 to-purple-500 py-2 rounded-lg">
        Subscribe
      </button>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
    <p>© 2026 Nexvoya. All rights reserved.</p>

    <div className="flex gap-6 mt-4 md:mt-0">
      <span>Privacy Policy</span>
      <span>Terms</span>
      <span>Contact</span>
    </div>
  </div>

</div>
      
    </div>
  );
}

export default App;