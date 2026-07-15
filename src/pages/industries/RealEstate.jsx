import React from 'react'

const RealEstate = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        @keyframes walkDot {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = GOLD
          e.currentTarget.style.color = GOLD
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
        <p style={styles.eyebrow}>INDUSTRY — REAL ESTATE</p>
        <h1 style={styles.h1}>
          Let a buyer walk through<br />before they <span style={styles.hAccent}>walk in.</span>
        </h1>
        <p style={styles.subhead}>
          Property platforms and virtual tours built so a listing does the convincing —
          floorplans, availability, and pricing that stay accurate the moment they change.
        </p>
      </header>

      <Rule />

      {/* Signature — floorplan tour */}
      <section style={styles.section}>
        <SheetLabel n="01" title="A tour, not just a photo gallery" />
        <FloorplanTour />
      </section>

      <Rule />

      {/* What we build */}
      <section style={styles.section}>
        <SheetLabel n="02" title="What we build" />
        <div style={styles.grid}>
          <Card title="Listing platforms" desc="Search, filters, and saved alerts that surface the right property before a competitor's site does." />
          <Card title="Virtual tours" desc="3D walkthroughs and floorplans that answer the questions an open house would." />
          <Card title="Property management" desc="Leases, maintenance requests, and rent collection tracked in one system landlords actually check." />
          <Card title="CRM & lead routing" desc="Inquiries routed to the right agent in minutes, not whenever someone checks their inbox." />
        </div>
      </section>

      <Rule />

      {/* Outcomes row */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What changes for a listing" />
        <div style={styles.statRow}>
          <Stat value="61%" label="Fewer unqualified showings after adding virtual tours" />
          <Stat value="2.4×" label="More inquiries on listings with live floorplans" />
          <Stat value="Same day" label="Availability that updates the moment a unit is held" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>SECTOR — REAL ESTATE & PROPTECH</span>
        <span style={styles.footerNote}>The listing should sell the property. Not the site.</span>
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

const Stat = ({ value, label }) => (
  <div style={styles.statCard}>
    <span style={styles.statValue}>{value}</span>
    <span style={styles.statLabel}>{label}</span>
  </div>
)

const FloorplanTour = () => (
  <div style={styles.tourWrap}>
    <div style={styles.tourTopRow}>
      <div style={styles.tourPriceBlock}>
        <span style={styles.tourPrice}>$742,000</span>
        <span style={styles.tourAddress}>4 Birchwood Lane · 3 bd · 2 ba · 1,840 sqft</span>
      </div>
      <div style={styles.tourStatus}>
        <span style={styles.tourStatusDot} />
        AVAILABLE
      </div>
    </div>

    <svg viewBox="0 0 600 280" style={styles.floorSvg} preserveAspectRatio="xMidYMid meet">
      {/* Outer walls */}
      <rect x="20" y="20" width="560" height="240" fill="none" stroke={LINE} strokeWidth="2" />
      {/* Room dividers */}
      <line x1="220" y1="20" x2="220" y2="150" stroke={LINE} strokeWidth="2" />
      <line x1="220" y1="150" x2="580" y2="150" stroke={LINE} strokeWidth="2" />
      <line x1="400" y1="20" x2="400" y2="150" stroke={LINE} strokeWidth="2" />
      <line x1="20" y1="190" x2="220" y2="190" stroke={LINE} strokeWidth="2" />

      {/* Room labels */}
      <text x="115" y="110" fill={TEXT_SOFT} fontSize="13" fontFamily="Inter" textAnchor="middle">Living Room</text>
      <text x="115" y="225" fill={TEXT_SOFT} fontSize="13" fontFamily="Inter" textAnchor="middle">Kitchen</text>
      <text x="305" y="90" fill={TEXT_SOFT} fontSize="13" fontFamily="Inter" textAnchor="middle">Bedroom 1</text>
      <text x="485" y="90" fill={TEXT_SOFT} fontSize="13" fontFamily="Inter" textAnchor="middle">Bedroom 2</text>
      <text x="400" y="215" fill={TEXT_SOFT} fontSize="13" fontFamily="Inter" textAnchor="middle">Bath / Hall</text>

      {/* Walkthrough path */}
      <path
        id="tourPath"
        d="M115,225 L115,110 L305,90 L400,150 L485,90"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.55"
      />
      <circle r="6" fill={GOLD}>
        <animateMotion dur="6s" repeatCount="indefinite" path="M115,225 L115,110 L305,90 L400,150 L485,90" />
      </circle>
    </svg>

    <div style={styles.tourFoot}>
      <span style={styles.tourFootLabel}>VIRTUAL WALKTHROUGH · 5 ROOMS · 3D SCAN</span>
    </div>
  </div>
)

const BG = '#0A0A0B'
const PANEL = '#141416'
const LINE = 'rgba(255,255,255,0.14)'
const TEXT = '#EDEDEC'
const TEXT_SOFT = 'rgba(237,237,236,0.6)'
const GOLD = '#C9A15A'
const SLATE = '#7C8CA6'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Inter', sans-serif",
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
    color: GOLD,
    margin: '0 0 18px',
  },
  h1: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 40,
    fontWeight: 400,
    lineHeight: 1.22,
    margin: '0 0 18px',
    maxWidth: 620,
    letterSpacing: '-0.01em',
  },
  hAccent: {
    color: GOLD,
    fontStyle: 'italic',
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.7,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 540,
  },
  rule: { height: 1, background: LINE, margin: '40px 0', opacity: 0.6 },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12.5,
    color: GOLD,
    border: `1px solid ${GOLD}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 20,
    fontWeight: 400,
  },
  tourWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 16,
    padding: '22px 24px 18px',
  },
  tourTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
    flexWrap: 'wrap',
    gap: 12,
  },
  tourPriceBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  tourPrice: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 28,
    color: GOLD,
  },
  tourAddress: {
    fontSize: 13,
    color: TEXT_SOFT,
  },
  tourStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.08em',
    color: SLATE,
  },
  tourStatusDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: SLATE,
  },
  floorSvg: {
    width: '100%',
    height: 260,
    display: 'block',
  },
  tourFoot: {
    borderTop: `1px solid ${LINE}`,
    paddingTop: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  tourFootLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.1em',
    color: 'rgba(237,237,236,0.4)',
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
  },
  cardDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: GOLD,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 17,
    fontWeight: 400,
    margin: '0 0 8px',
  },
  cardDesc: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: TEXT_SOFT,
    margin: 0,
  },
  statRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
  },
  statCard: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 14,
    padding: '22px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  statValue: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 32,
    color: GOLD,
  },
  statLabel: {
    fontSize: 13,
    color: TEXT_SOFT,
    lineHeight: 1.5,
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

export default RealEstate