// import { useEffect, useState } from "react";

// const industries = ["Healthcare", "FinTech", "E-commerce"];
// const techStack = ["React", "Node", "Python", "AWS", "Java"];

// export default function FlowPremium() {
//   const [index, setIndex] = useState(0);
//   const [industryIndex, setIndustryIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % techStack.length);
//       setIndustryIndex((prev) => (prev + 1) % industries.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentTech = techStack[index];
//   const currentIndustry = industries[industryIndex];

//   return (
//     <div className="relative h-[620px] flex items-center justify-center overflow-hidden">

//       {/* 🔥 BACKGROUND GLOW */}
//       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-500 opacity-10 blur-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

//       {/* 🔹 INDUSTRY */}
//       <div className="absolute top-8 bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg px-5 py-2 rounded-xl">
//         {currentIndustry} Industry
//       </div>

//       {/* 🔹 REQUIREMENT */}
//       <div className="absolute left-[150px] top-[300px] bg-white px-4 py-2 rounded-xl shadow">
//         {currentTech} Requirement
//       </div>

//       {/* 🔥 CORE */}
//       <div className="absolute left-[600px] top-[250px] w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center rounded-xl shadow-xl">
//         Nexvoya
//       </div>

//       {/* 🔹 OUTPUT */}
//       <div className="absolute right-10 top-[300px] bg-white px-4 py-2 rounded-xl shadow">
//         {currentTech} Developer Assigned ✅
//       </div>

//       {/* 🔥 SVG FLOW */}
//       <svg className="absolute w-full h-full pointer-events-none">

//         {/* PATH */}
//         <path
//           id="flowPath"
//           d="M150 320 Q 450 200 650 300 Q 900 420 1100 320"
//           stroke="#3b82f6"
//           strokeWidth="2"
//           fill="transparent"
//           strokeDasharray="4 6"
//         />

//         {/* 🔥 MULTIPLE MOVING DOTS */}
//         {[0, 0.8, 1.6].map((delay, i) => (
//           <circle key={i} r="5" fill="#3b82f6">
//             <animateMotion
//               dur="2.5s"
//               begin={`${delay}s`}
//               repeatCount="indefinite"
//             >
//               <mpath href="#flowPath" />
//             </animateMotion>
//           </circle>
//         ))}

//       </svg>

//       {/* 🔥 STATUS */}
//       <div className="absolute bottom-10 text-green-600 font-semibold">
//         ✔ AI Matching in Progress
//       </div>

//     </div>
//   );
// }