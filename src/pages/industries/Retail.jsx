import React from 'react'

const Retail = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        @keyframes scanIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = VERMILION
          e.currentTarget.style.color = VERMILION
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
        <p style={styles.eyebrow}>INDUSTRY — RETAIL</p>
        <h1 style={styles.h1}>
          KNOW WHAT'S ON THE<br />SHELF <span style={styles.hAccent}>BEFORE THE CUSTOMER DOES.</span>
        </h1>
        <p style={styles.subhead}>
          E-commerce, POS, and inventory systems built so stock counts are true the moment
          someone scans, clicks, or walks out with it — online and in-store, same number.
        </p>
      </header>

      <Rule />

      {/* Signature — live POS / inventory feed */}
      <section style={styles.section}>
        <SheetLabel n="01" title="One count, every channel" />
        <PosFeed />
      </section>

      <Rule />

      {/* What we build */}
      <section style={styles.section}>
        <SheetLabel n="02" title="What we build" />
        <div style={styles.grid}>
          <Card title="E-commerce platforms" desc="Storefronts that load fast, checkout in one page, and never show a size that isn't actually there." />
          <Card title="Point of sale systems" desc="In-store checkout that updates the same inventory the website reads from, instantly." />
          <Card title="Inventory & warehouse tools" desc="Stock levels, transfers, and reorder points tracked across every location, not just one." />
          <Card title="Loyalty & promotions" desc="Points, discounts, and offers that apply correctly at checkout, every time, no manual override." />
        </div>
      </section>

      <Rule />

      {/* Outcomes row */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What changes at the register" />
        <div style={styles.statRow}>
          <Stat value="0.4%" label="Inventory mismatch rate, down from manual counts" />
          <Stat value="1.8×" label="Faster checkout with unified POS + online cart" />
          <Stat value="Real-time" label="Stock sync between warehouse, store, and site" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>SECTOR — RETAIL & E-COMMERCE</span>
        <span style={styles.footerNote}>"Out of stock" should be rare, and always true.</span>
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

const PosFeed = () => {
  const items = [
    { sku: 'SKU-10482', name: 'Ceramic Mug — Sand', channel: 'IN-STORE', qty: -1, stock: 214, delay: 0 },
    { sku: 'SKU-20117', name: 'Linen Throw — Charcoal', channel: 'ONLINE', qty: -2, stock: 46, delay: 0.12 },
    { sku: 'SKU-30559', name: 'Oak Cutting Board', channel: 'IN-STORE', qty: -1, stock: 88, delay: 0.24 },
    { sku: 'SKU-40221', name: 'Wool Throw Pillow', channel: 'ONLINE', qty: +25, stock: 130, delay: 0.36, restock: true },
  ]
  return (
    <div style={styles.feedWrap}>
      <div style={styles.feedHead}>
        <span style={styles.feedHeadLabel}>UNIFIED INVENTORY</span>
        <span style={styles.liveTag}>
          <span style={styles.liveDot} />
          SYNCING
        </span>
      </div>
      <div style={styles.feedDivider} />
      {items.map((it) => (
        <div key={it.sku} style={{ ...styles.feedRow, animation: `scanIn 0.5s ease-out ${it.delay}s both` }}>
          <div style={styles.feedRowLeft}>
            <span style={styles.feedSku}>{it.sku}</span>
            <span style={styles.feedName}>{it.name}</span>
          </div>
          <div style={styles.feedRowMid}>
            <span style={{ ...styles.channelTag, color: it.channel === 'ONLINE' ? INDIGO : VERMILION }}>
              {it.channel}
            </span>
          </div>
          <div style={styles.feedRowRight}>
            <span style={{ ...styles.feedQty, color: it.restock ? '#33D6A0' : TEXT_SOFT }}>
              {it.qty > 0 ? `+${it.qty}` : it.qty}
            </span>
            <span style={styles.feedStock}>{it.stock} in stock</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const BG = '#0A0A0A'
const PANEL = '#151515'
const LINE = 'rgba(255,255,255,0.1)'
const TEXT = '#F2F1EF'
const TEXT_SOFT = 'rgba(242,241,239,0.6)'
const VERMILION = '#E14F3D'
const INDIGO = '#6C8CF2'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Archivo', sans-serif",
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
    color: VERMILION,
    margin: '0 0 18px',
  },
  h1: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: 34,
    lineHeight: 1.28,
    margin: '0 0 18px',
    maxWidth: 640,
    letterSpacing: '-0.01em',
  },
  hAccent: {
    color: VERMILION,
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.7,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 540,
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 400,
  },
  rule: { height: 1, background: LINE, margin: '40px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12.5,
    color: VERMILION,
    border: `1px solid ${VERMILION}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 19,
    fontWeight: 700,
  },
  feedWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 16,
    padding: '22px 24px 18px',
  },
  feedHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  feedHeadLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.1em',
    color: 'rgba(242,241,239,0.4)',
  },
  liveTag: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.08em',
    color: VERMILION,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: VERMILION,
    display: 'inline-block',
    animation: 'blink 1.4s ease-in-out infinite',
  },
  feedDivider: {
    height: 1,
    background: LINE,
    margin: '14px 0 4px',
  },
  feedRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: `1px solid ${LINE}`,
    gap: 16,
    flexWrap: 'wrap',
  },
  feedRowLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    minWidth: 160,
  },
  feedSku: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    color: 'rgba(242,241,239,0.4)',
  },
  feedName: {
    fontSize: 13.5,
    color: TEXT,
  },
  feedRowMid: {
    flexShrink: 0,
  },
  channelTag: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.06em',
    border: '1px solid currentColor',
    borderRadius: 100,
    padding: '3px 10px',
  },
  feedRowRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 3,
  },
  feedQty: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 14,
    fontWeight: 600,
  },
  feedStock: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    color: 'rgba(242,241,239,0.45)',
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
    background: VERMILION,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'Archivo', sans-serif",
    fontSize: 17,
    fontWeight: 700,
    margin: '0 0 8px',
  },
  cardDesc: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: TEXT_SOFT,
    margin: 0,
    fontWeight: 400,
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
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: 30,
    color: VERMILION,
  },
  statLabel: {
    fontSize: 13,
    color: TEXT_SOFT,
    lineHeight: 1.5,
    fontWeight: 400,
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
    fontWeight: 400,
  },
}

export default Retail