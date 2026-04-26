import { useEffect, useRef, useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────
const SCENARIOS = [
  {
    client: "Fintech Startup",
    req: "Need React Developer",
    devs: [
      { name: "Arjun S.", skill: "React · 5yr", color: "#4f6ef7", match: 98 },
      { name: "Priya M.", skill: "React · 4yr", color: "#a78bfa", match: 94 },
    ],
  },
  {
    client: "Healthcare SaaS",
    req: "Need AWS Engineer",
    devs: [
      { name: "Rohit K.", skill: "AWS · 6yr", color: "#06b6d4", match: 97 },
      { name: "Sneha P.", skill: "DevOps · 4yr", color: "#10b981", match: 91 },
    ],
  },
  {
    client: "E-commerce Brand",
    req: "Need Flutter Dev",
    devs: [
      { name: "Dev R.", skill: "Flutter · 3yr", color: "#f59e0b", match: 96 },
      { name: "Aisha T.", skill: "Mobile · 5yr", color: "#ef4444", match: 93 },
    ],
  },
  {
    client: "EdTech Platform",
    req: "Need Python ML Dev",
    devs: [
      { name: "Karan B.", skill: "Python·ML·4yr", color: "#8b5cf6", match: 99 },
      { name: "Nisha L.", skill: "Data Sci · 3yr", color: "#ec4899", match: 90 },
    ],
  },
];

// Phase durations in frames (at ~60fps)
// Phase 0 = idle/reset, 1 = particles L→Hub, 2 = hub pulse, 3 = particles Hub→R
const PHASE_DUR = [60, 100, 80, 80];

const LEFT_NODES = [
  { lx: 0.13, ly: 0.28 }, { lx: 0.10, ly: 0.48 }, { lx: 0.14, ly: 0.68 },
  { lx: 0.22, ly: 0.38 }, { lx: 0.20, ly: 0.60 },
];
const RIGHT_NODES = [
  { lx: 0.83, ly: 0.28 }, { lx: 0.86, ly: 0.48 }, { lx: 0.81, ly: 0.68 },
  { lx: 0.75, ly: 0.38 }, { lx: 0.77, ly: 0.60 },
];
const CLIENT_LABELS = ["Fin", "SaaS", "B2B", "EdTech", "Hlth"];
const DEV_LABELS    = ["RD", "AW", "FL", "PY", "ND"];
const DEV_COLORS    = ["#4f6ef7","#a78bfa","#06b6d4","#10b981","#f59e0b"];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r},${g},${b})`;
}
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function NexvoyaFlow() {
  const canvasRef  = useRef(null);
  const rootRef    = useRef(null);
  const stateRef   = useRef({
    t: 0, scIdx: 0, phase: 0, phaseT: 0, particles: [],
  });

  const [scenario,   setScenario]   = useState(SCENARIOS[0]);
  const [statusText, setStatusText] = useState("AI Matching in Progress");

  // ─── CANVAS RENDER LOOP ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const root   = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext("2d");
    let rafId;
    let W, H, dpr;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      W   = root.clientWidth;
      H   = root.clientHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(root);

    // ── draw helpers ──
    function drawGlowCircle(x, y, r, color, alpha) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color.replace(")", `,${alpha})`).replace("rgb", "rgba"));
      g.addColorStop(1, color.replace(")", ",0)").replace("rgb", "rgba"));
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    }

    function drawNode(x, y, r, color, label, active, pulseAmt) {
      const { t } = stateRef.current;
      if (active) {
        drawGlowCircle(x, y, r * (1.8 + 0.4 * Math.sin(t * 0.08)), hexToRgb(color), 0.18);
      }
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle   = active ? color : "rgba(180,196,255,0.35)"; ctx.fill();
      ctx.strokeStyle = active ? color + "99" : "rgba(120,150,255,0.25)";
      ctx.lineWidth   = active ? 1.5 : 1; ctx.stroke();

      if (pulseAmt > 0) {
        ctx.beginPath(); ctx.arc(x, y, r + pulseAmt * 18, 0, Math.PI * 2);
        const a = Math.floor((1 - pulseAmt) * 255).toString(16).padStart(2, "0");
        ctx.strokeStyle = color + a;
        ctx.lineWidth   = 1.5 * (1 - pulseAmt); ctx.stroke();
      }
      if (label) {
        ctx.font         = `500 10px sans-serif`;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle    = active ? "#fff" : "rgba(100,120,200,0.7)";
        ctx.fillText(label, x, y + 0.5);
      }
    }

    function drawHub(x, y) {
      const { t } = stateRef.current;
      const R    = Math.min(W, H) * 0.1;
      const pulse = Math.sin(t * 0.05) * 0.5 + 0.5;

      for (let i = 3; i > 0; i--) {
        ctx.beginPath(); ctx.arc(x, y, R + i * 14, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79,110,247,${0.04 * i * (0.7 + 0.3 * pulse)})`;
        ctx.lineWidth = 10; ctx.stroke();
      }
      const g = ctx.createRadialGradient(x - 10, y - 10, 4, x, y, R);
      g.addColorStop(0, "#6a8eff"); g.addColorStop(0.6, "#4f6ef7"); g.addColorStop(1, "#3a4fd4");
      ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = "rgba(150,180,255,0.4)"; ctx.lineWidth = 1.5; ctx.stroke();

      ctx.beginPath(); ctx.arc(x, y, R - 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.15)"; ctx.lineWidth = 1; ctx.stroke();

      ctx.font = `700 13px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = "#fff"; ctx.fillText("Nexvoya", x, y - 6);
      ctx.font = `400 10px sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,.7)"; ctx.fillText("Staff Hub", x, y + 8);

      for (let i = 0; i < 6; i++) {
        const angle = t * 0.015 + i * (Math.PI / 3);
        ctx.beginPath(); ctx.arc(x + Math.cos(angle) * (R + 22), y + Math.sin(angle) * (R + 22), 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,180,255,${0.3 + 0.4 * (i % 2)})`; ctx.fill();
      }
    }

    function drawLine(x1, y1, x2, y2, color, alpha) {
      ctx.save(); ctx.globalAlpha = alpha;
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = color; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.setLineDash([]); ctx.restore();
    }

    function drawParticle(p) {
      const ep = easeInOut(Math.min(p.prog, 1));
      const cx = p.x + (p.tx - p.x) * ep;
      const cy = p.y + (p.ty - p.y) * ep + p.wobble * Math.sin(Math.PI * ep);
      const alpha = ep < 0.1 ? ep * 10 : ep > 0.85 ? (1 - ep) / 0.15 : 1;

      ctx.beginPath(); ctx.arc(cx, cy, p.size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = p.color + "44"; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, p.size * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = p.color; ctx.globalAlpha = alpha; ctx.fill();
      ctx.globalAlpha = 1;
    }

    function spawnParticles(fx, fy, tx, ty, color, count) {
      const s = stateRef.current;
      for (let i = 0; i < count; i++) {
        s.particles.push({
          x: fx, y: fy, tx, ty, color,
          prog: 0, delay: i * (8 + Math.random() * 6),
          speed: 0.018 + Math.random() * 0.01,
          size: 3 + Math.random() * 2,
          wobble: (Math.random() - 0.5) * 30,
          done: false,
        });
      }
    }

    // ── main loop ──
    function frame() {
      ctx.clearRect(0, 0, W, H);
      const s   = stateRef.current;
      const hx  = W / 2, hy = H / 2;

      // phase advancement
      s.phaseT++;
      if (s.phaseT > PHASE_DUR[s.phase]) {
        s.phase  = (s.phase + 1) % 4;
        s.phaseT = 0;

        if (s.phase === 0) {
          s.scIdx = (s.scIdx + 1) % SCENARIOS.length;
          s.particles = [];
          setScenario(SCENARIOS[s.scIdx]);
        }
        if (s.phase === 1) {
          const cn = LEFT_NODES[s.scIdx % LEFT_NODES.length];
          spawnParticles(cn.lx * W, cn.ly * H, hx, hy, "#4f6ef7", 12);
        }
        if (s.phase === 3) {
          const sc = SCENARIOS[s.scIdx];
          sc.devs.forEach((d, i) => {
            const dn = RIGHT_NODES[i];
            spawnParticles(hx, hy, dn.lx * W, dn.ly * H, d.color, 10);
          });
          setStatusText("Developer Matched ✓");
          setTimeout(() => setStatusText("AI Matching in Progress"), 2000);
        }
      }

      const sc = SCENARIOS[s.scIdx];

      // connector lines
      LEFT_NODES.forEach((n, i) => {
        const active = i === s.scIdx % LEFT_NODES.length;
        drawLine(n.lx * W, n.ly * H, hx, hy, "#4f6ef7", active ? 0.2 : 0.07);
      });
      RIGHT_NODES.forEach((n, i) => {
        const active = i < sc.devs.length;
        drawLine(hx, hy, n.lx * W, n.ly * H, active ? sc.devs[i]?.color || "#4f6ef7" : "#4f6ef7", active ? 0.2 : 0.07);
      });

      // left nodes
      LEFT_NODES.forEach((n, i) => {
        const active = i === s.scIdx % LEFT_NODES.length;
        const pulse  = (s.phase === 0 || s.phase === 1) && active ? s.phaseT / PHASE_DUR[s.phase] : 0;
        drawNode(n.lx * W, n.ly * H, active ? 16 : 11, "#4f6ef7", CLIENT_LABELS[i], active, pulse);
      });

      // right nodes
      RIGHT_NODES.forEach((n, i) => {
        const active = i < sc.devs.length && (s.phase === 2 || s.phase === 3);
        const color  = sc.devs[i]?.color || DEV_COLORS[i];
        const pulse  = s.phase === 3 && i < sc.devs.length ? Math.min(s.phaseT / PHASE_DUR[3], 1) : 0;
        drawNode(n.lx * W, n.ly * H, active ? 16 : 11, color, DEV_LABELS[i], active, pulse);
      });

      // particles
      s.particles.forEach(p => {
        if (p.delay > 0) { p.delay--; return; }
        p.prog += p.speed;
        drawParticle(p);
        if (p.prog >= 1) p.done = true;
      });
      s.particles = s.particles.filter(p => !p.done);

      // hub (drawn last so it's on top)
      drawHub(hx, hy);

      s.t++;
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  // ─── JSX ────────────────────────────────────────────────────────────────
  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden rounded-3xl"
      style={{
        height: 500,
        background: "linear-gradient(135deg,#eef3ff 0%,#f5f7ff 60%,#eaf0ff 100%)",
        backgroundImage: `
          linear-gradient(135deg,#eef3ff 0%,#f5f7ff 60%,#eaf0ff 100%),
          linear-gradient(rgba(99,130,255,.07) 1px,transparent 1px),
          linear-gradient(90deg,rgba(99,130,255,.07) 1px,transparent 1px)
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,130,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,.07) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* ── CLIENT CARD (top-left) ── */}
      <div
        className="absolute top-5 left-5 rounded-2xl px-4 py-3 z-10 pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99,130,255,.18)",
          boxShadow: "0 4px 20px rgba(80,110,240,.1)",
          minWidth: 170,
        }}
      >
        <p style={{ fontSize: 11, color: "#7c8fcc", fontWeight: 600, marginBottom: 4 }}>
          CLIENT REQUEST
        </p>
        <p style={{ fontSize: 14, color: "#1e3a8a", fontWeight: 700 }}>
          {scenario.client}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span
            className="rounded-full"
            style={{ width: 7, height: 7, background: "#4f6ef7", animation: "blink 1.4s ease-in-out infinite", display:"inline-block" }}
          />
          <span style={{ fontSize: 12, color: "#4f6ef7", fontWeight: 500 }}>
            {scenario.req}
          </span>
        </div>
      </div>

      {/* ── MATCHED TALENT CARD (top-right) ── */}
      <div
        className="absolute top-5 right-5 rounded-2xl px-4 py-3 z-10 pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(99,130,255,.18)",
          boxShadow: "0 4px 20px rgba(80,110,240,.1)",
          minWidth: 200,
        }}
      >
        <p style={{ fontSize: 11, color: "#7c8fcc", fontWeight: 600, marginBottom: 8 }}>
          MATCHED TALENT
        </p>
        {scenario.devs.map((d, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <div
              className="flex items-center justify-center rounded-full text-white flex-shrink-0"
              style={{ width: 28, height: 28, background: d.color, fontSize: 10, fontWeight: 700 }}
            >
              {d.name.slice(0, 2)}
            </div>
            <div className="flex-1">
              <p style={{ fontSize: 12, fontWeight: 600, color: "#1e3a8a" }}>{d.name}</p>
              <p style={{ fontSize: 11, color: "#7c8fcc" }}>{d.skill}</p>
            </div>
            <span
              className="rounded-full px-2 py-0.5"
              style={{ fontSize: 10, fontWeight: 700, background: "#ecfdf5", color: "#059669", border: "1px solid #6ee7b7" }}
            >
              {d.match}%
            </span>
          </div>
        ))}
      </div>

      {/* ── STATUS PILL (bottom-center) ── */}
      <div
        className="absolute bottom-5 left-1/2 flex items-center gap-2 rounded-full px-5 py-2 z-10 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(34,197,94,.25)",
          fontSize: 13,
          fontWeight: 600,
          color: "#059669",
          whiteSpace: "nowrap",
        }}
      >
        <span
          className="rounded-full"
          style={{ width: 8, height: 8, background: "#22c55e", animation: "pd 1.6s ease-in-out infinite", display:"inline-block" }}
        />
        {statusText}
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes pd    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.55)} }
      `}</style>
    </div>
  );
}
