import React from 'react'

const Healthcare = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    }
  }

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        @keyframes pulseTrace {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = TEAL
          e.currentTarget.style.color = TEAL
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = LINE
          e.currentTarget.style.color = TEXT
        }}
        aria-label="Go back to previous page"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Back</span>
      </button>

      {/* Hero */}
      <header style={styles.header}>
        <p style={styles.eyebrow}>INDUSTRY — HEALTHCARE</p>
        <h1 style={styles.h1}>
          Software that stays<br />steady when someone's <span style={styles.hAccent}>vitals</span> don't.
        </h1>
        <p style={styles.subhead}>
          Patient portals, EMR systems, and clinical workflows built to be legible under pressure —
          for the nurse mid-shift, the doctor between rounds, and the patient checking a result at 2am.
        </p>
      </header>

      <Rule />

      {/* Signature — vitals monitor */}
      <section style={styles.section}>
        <SheetLabel n="01" title="Built like the monitor beside the bed" />
        <VitalsMonitor />
      </section>

      <Rule />

      {/* What we build */}
      <section style={styles.section}>
        <SheetLabel n="02" title="What we build" />
        <div style={styles.grid}>
          <Card
            title="Patient portals"
            desc="Appointments, results, and messages a patient can actually find without calling the front desk."
          />
          <Card
            title="EMR & records systems"
            desc="One chart, one source of truth, accessible to every clinician who's cleared to see it."
          />
          <Card
            title="Care coordination"
            desc="Referrals, handoffs, and follow-ups tracked so nothing depends on someone remembering."
          />
          <Card
            title="Telehealth"
            desc="Video visits that hold up on hospital wifi and a patient's spotty home connection alike."
          />
        </div>
      </section>

      <Rule />

      {/* Compliance / trust row */}
      <section style={styles.section}>
        <SheetLabel n="03" title="Non-negotiables" />
        <div style={styles.complianceRow}>
          <ComplianceTag label="HIPAA-aware architecture" />
          <ComplianceTag label="Encrypted at rest & in transit" />
          <ComplianceTag label="Role-based access control" />
          <ComplianceTag label="Full audit trails" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>SECTOR — HEALTHCARE & LIFE SCIENCES</span>
        <span style={styles.footerNote}>Uptime isn't a metric here. It's a duty of care.</span>
      </footer>
    </div>
  )
}

const Rule = () => <div style={styles.rule} />

const SheetLabel = ({ n, title }) => (
  <div style={styles.sheetLabel}>
    <span style={styles.sheetLabelNum}>{n}</span>
    <span style={styles.sheetLabelTitle}>{title}</span>
  </div>
)

const Card = ({ title, desc }) => (
  <div style={styles.card}>
    <div style={styles.cardDot} />
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </div>
)

const ComplianceTag = ({ label }) => (
  <div style={styles.tag}>
    <span style={styles.tagCheck}>✓</span>
    <span>{label}</span>
  </div>
)

const VitalsMonitor = () => (
  <div style={styles.monitorWrap}>
    <div style={styles.monitorTopRow}>
      <div style={styles.monitorReading}>
        <span style={styles.monitorNum}>72</span>
        <span style={styles.monitorUnit}>BPM</span>
      </div>
      <div style={styles.monitorReading}>
        <span style={{ ...styles.monitorNum, color: CORAL }}>98%</span>
        <span style={styles.monitorUnit}>SPO2</span>
      </div>
      <div style={styles.monitorReading}>
        <span style={{ ...styles.monitorNum, color: '#8FA9C4' }}>120/80</span>
        <span style={styles.monitorUnit}>BP</span>
      </div>
      <div style={styles.liveTag}>
        <span style={styles.liveDot} />
        LIVE
      </div>
    </div>
    <svg viewBox="0 0 800 140" style={styles.monitorSvg} preserveAspectRatio="none">
      <line x1="0" y1="70" x2="800" y2="70" stroke={LINE} strokeWidth="1" strokeDasharray="4 6" />
      <path
        d="M0,70 L120,70 L145,70 L160,20 L180,120 L200,60 L220,70 L340,70 L365,70 L380,20 L400,120 L420,60 L440,70 L560,70 L585,70 L600,20 L620,120 L640,60 L660,70 L800,70"
        fill="none"
        stroke={TEAL}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: 1000, animation: 'pulseTrace 3.2s linear infinite' }}
      />
    </svg>
    <div style={styles.monitorFoot}>
      <span style={styles.monitorFootLabel}>PATIENT MONITORING · NON-INVASIVE</span>
    </div>
  </div>
)

const BG = '#0A0B0D'
const PANEL = '#131518'
const LINE = 'rgba(255,255,255,0.09)'
const TEXT = '#EDEFEF'
const TEXT_SOFT = 'rgba(237,239,239,0.62)'
const TEAL = '#3FD6C4'
const CORAL = '#F17E6B'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'IBM Plex Sans', sans-serif",
    padding: '44px 40px 60px',
    maxWidth: 880,
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    color: TEXT,
    border: `1px solid ${LINE}`,
    borderRadius: 100,
    padding: '8px 16px',
    marginBottom: 36,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease, color 0.15s ease',
  },
  header: {},
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.12em',
    color: TEAL,
    margin: '0 0 18px',
  },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontSize: 38,
    fontWeight: 600,
    lineHeight: 1.22,
    margin: '0 0 18px',
    maxWidth: 620,
    letterSpacing: '-0.01em',
  },
  hAccent: {
    color: CORAL,
    fontStyle: 'italic',
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.7,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 540,
  },
  rule: { height: 1, background: LINE, margin: '40px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12.5,
    color: TEAL,
    border: `1px solid ${TEAL}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 19,
    fontWeight: 600,
  },
  monitorWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 16,
    padding: '22px 24px 18px',
  },
  monitorTopRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 36,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  monitorReading: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  monitorNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 26,
    fontWeight: 500,
    color: TEAL,
    lineHeight: 1,
  },
  monitorUnit: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.08em',
    color: TEXT_SOFT,
  },
  liveTag: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.08em',
    color: CORAL,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: CORAL,
    display: 'inline-block',
    animation: 'pulseDot 1.4s ease-in-out infinite',
  },
  monitorSvg: {
    width: '100%',
    height: 100,
    display: 'block',
  },
  monitorFoot: {
    borderTop: `1px solid ${LINE}`,
    paddingTop: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  monitorFootLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.1em',
    color: 'rgba(237,239,239,0.4)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 16,
  },
  card: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 14,
    padding: '22px 22px',
    position: 'relative',
  },
  cardDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: TEAL,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 17,
    fontWeight: 600,
    margin: '0 0 8px',
  },
  cardDesc: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: TEXT_SOFT,
    margin: 0,
  },
  complianceRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: `1px solid ${LINE}`,
    borderRadius: 100,
    padding: '9px 16px',
    fontSize: 13,
    color: TEXT_SOFT,
    background: PANEL,
  },
  tagCheck: {
    color: TEAL,
    fontWeight: 700,
    fontSize: 12,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  footerNote: {
    fontSize: 13,
    color: TEXT_SOFT,
  },
}

export default Healthcare