import React from 'react'

const Restaurants = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        @keyframes emberDrift {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate(-14px, -18px) scale(1.08); opacity: 0.5; }
        }
        @keyframes ticketIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          45% { opacity: 0.55; }
          55% { opacity: 0.9; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Ambient ember glows */}
      <div style={styles.emberOne} />
      <div style={styles.emberTwo} />

      <div style={styles.content}>
        {/* Back navigation */}
        <button
          style={styles.backButton}
          onClick={handleBack}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = EMBER
            e.currentTarget.style.color = EMBER
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
          <p style={styles.eyebrow}>INDUSTRY — RESTAURANTS</p>
          <h1 style={styles.h1}>
            The kitchen should never<br />find out <span style={styles.hAccent}>last.</span>
          </h1>
          <p style={styles.subhead}>
            Ordering, reservations, and loyalty systems built around one table, one order, one
            ticket — so the front of house and the line are always working from the same night.
          </p>
        </header>

        <Rule />

        {/* Signature — kitchen ticket rail */}
        <section style={styles.section}>
          <SheetLabel n="01" title="Every table, one rail" />
          <TicketRail />
        </section>

        <Rule />

        {/* What we build */}
        <section style={styles.section}>
          <SheetLabel n="02" title="What we build" />
          <div style={styles.grid}>
            <Card title="Online ordering" desc="Menus, modifiers, and checkout that stay in sync with what the kitchen can actually make tonight." />
            <Card title="Reservations & waitlist" desc="Tables held, seated, and turned without a host juggling a paper book and three tabs." />
            <Card title="Kitchen display systems" desc="Tickets that route to the right station the instant an order fires, no printer jam required." />
            <Card title="Loyalty & guest data" desc="Repeat guests recognized at the door, not just remembered by whoever happened to serve them last time." />
          </div>
        </section>

        <Rule />

        {/* Outcomes row */}
        <section style={styles.section}>
          <SheetLabel n="03" title="What changes on a Friday night" />
          <div style={styles.statRow}>
            <Stat value="−9 min" label="Average ticket time from fire to plate" />
            <Stat value="31%" label="More repeat visits with loyalty tracking on" />
            <Stat value="0" label="Orders lost between the host stand and the line" />
          </div>
        </section>

        <Rule />

        <footer style={styles.footer}>
          <span style={styles.eyebrow}>SECTOR — FOOD & HOSPITALITY</span>
          <span style={styles.footerNote}>Built for the rush, not just the demo.</span>
        </footer>
      </div>
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

const TicketRail = () => {
  const tickets = [
    { table: 'TABLE 12', items: ['Duck breast, medium', 'Charred leeks, no salt'], status: 'FIRED', delay: 0 },
    { table: 'TABLE 04', items: ['Tagliatelle, extra chili', 'Burrata starter'], status: 'PLATING', delay: 0.14 },
    { table: 'TAKEOUT — R. Amaya', items: ['Margherita', '2× house salad'], status: 'READY', delay: 0.28 },
    { table: 'TABLE 09', items: ['Ribeye, rare, rest 4 min'], status: 'FIRED', delay: 0.42 },
  ]
  const statusColor = { FIRED: EMBER, PLATING: GOLD, READY: '#5FCB8F' }
  return (
    <div style={styles.railWrap}>
      <div style={styles.railHead}>
        <span style={styles.railHeadLabel}>PASS · LIVE</span>
        <span style={styles.liveTag}>
          <span style={styles.liveDot} />
          {tickets.length} OPEN
        </span>
      </div>
      <div style={styles.railScroll}>
        {tickets.map((t) => (
          <div key={t.table} style={{ ...styles.ticket, animation: `ticketIn 0.5s ease-out ${t.delay}s both` }}>
            <div style={styles.ticketHead}>
              <span style={styles.ticketTable}>{t.table}</span>
              <span style={{ ...styles.ticketStatus, color: statusColor[t.status], borderColor: statusColor[t.status] }}>
                {t.status}
              </span>
            </div>
            <div style={styles.ticketPerf} />
            <ul style={styles.ticketList}>
              {t.items.map((it) => (
                <li key={it} style={styles.ticketItem}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const BG = '#0A0908'
const PANEL = '#171310'
const LINE = 'rgba(255,246,235,0.1)'
const TEXT = '#F3ECE2'
const TEXT_SOFT = 'rgba(243,236,226,0.62)'
const EMBER = '#E2703B'
const GOLD = '#D9AE58'

const styles = {
  page: {
    background: `radial-gradient(1200px 600px at 15% -10%, rgba(226,112,59,0.08), transparent 60%), radial-gradient(900px 500px at 100% 30%, rgba(217,174,88,0.06), transparent 60%), ${BG}`,
    color: TEXT,
    fontFamily: "'Jost', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  emberOne: {
    position: 'absolute',
    top: -60,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(226,112,59,0.35), transparent 70%)',
    filter: 'blur(20px)',
    animation: 'emberDrift 9s ease-in-out infinite',
    pointerEvents: 'none',
  },
  emberTwo: {
    position: 'absolute',
    bottom: -80,
    right: -40,
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(217,174,88,0.25), transparent 70%)',
    filter: 'blur(24px)',
    animation: 'emberDrift 12s ease-in-out infinite reverse',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '44px 40px 64px',
    maxWidth: 880,
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,0.02)',
    color: TEXT,
    border: `1px solid ${LINE}`,
    borderRadius: 100,
    padding: '8px 16px',
    marginBottom: 40,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease, color 0.15s ease',
    backdropFilter: 'blur(6px)',
  },
  header: {},
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.14em',
    color: EMBER,
    margin: '0 0 20px',
  },
  h1: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 50,
    fontWeight: 600,
    lineHeight: 1.15,
    margin: '0 0 20px',
    maxWidth: 640,
    letterSpacing: '-0.01em',
  },
  hAccent: {
    color: EMBER,
    fontStyle: 'italic',
  },
  subhead: {
    fontSize: 16.5,
    lineHeight: 1.75,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 540,
  },
  rule: {
    height: 1,
    background: `linear-gradient(90deg, transparent, ${LINE} 20%, ${LINE} 80%, transparent)`,
    margin: '48px 0',
  },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 26 },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12.5,
    color: EMBER,
    border: `1px solid ${EMBER}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 23,
    fontWeight: 600,
    fontStyle: 'italic',
  },
  railWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 18,
    padding: '22px 22px 20px',
    boxShadow: '0 20px 60px -30px rgba(226,112,59,0.25)',
  },
  railHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  railHeadLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.12em',
    color: 'rgba(243,236,226,0.4)',
  },
  liveTag: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.08em',
    color: EMBER,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: EMBER,
    display: 'inline-block',
    animation: 'flicker 1.6s ease-in-out infinite',
  },
  railScroll: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 14,
  },
  ticket: {
    background: '#100D0B',
    border: `1px solid ${LINE}`,
    borderRadius: 10,
    padding: '16px 16px 14px',
    position: 'relative',
  },
  ticketHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  ticketTable: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.04em',
    color: TEXT_SOFT,
  },
  ticketStatus: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 9.5,
    letterSpacing: '0.06em',
    border: '1px solid',
    borderRadius: 100,
    padding: '2px 8px',
    whiteSpace: 'nowrap',
  },
  ticketPerf: {
    height: 0,
    borderTop: `1px dashed ${LINE}`,
    marginBottom: 12,
  },
  ticketList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  ticketItem: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 15.5,
    fontWeight: 500,
    color: TEXT,
    lineHeight: 1.35,
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
    background: EMBER,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 19,
    fontWeight: 600,
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
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 36,
    fontWeight: 600,
    color: EMBER,
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
    fontStyle: 'italic',
    fontFamily: "'Cormorant Garamond', serif",
  },
}

export default Restaurants