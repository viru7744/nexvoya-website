import React from 'react'

const FinTech = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        @keyframes rowIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tickGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = MINT
          e.currentTarget.style.color = MINT
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
        <p style={styles.eyebrow}>INDUSTRY — FINTECH</p>
        <h1 style={styles.h1}>
          Every transaction<br />lands where it's <span style={styles.hAccent}>supposed to.</span>
        </h1>
        <p style={styles.subhead}>
          Payment gateways, wallets, and ledgers built for the version of "fast" that never
          means "approximately correct." Money moves once, reconciles once, and no one has to guess.
        </p>
      </header>

      <Rule />

      {/* Signature — live ledger */}
      <section style={styles.section}>
        <SheetLabel n="01" title="A ledger that settles in real time" />
        <LedgerFeed />
      </section>

      <Rule />

      {/* What we build */}
      <section style={styles.section}>
        <SheetLabel n="02" title="What we build" />
        <div style={styles.grid}>
          <Card title="Payment gateways" desc="Cards, bank transfers, and wallets routed through one integration, not five." />
          <Card title="Digital wallets" desc="Balances, transfers, and holds that stay consistent even when three things happen at once." />
          <Card title="Fraud & risk tooling" desc="Anomaly detection that flags the transaction before it clears, not after the chargeback." />
          <Card title="Compliance infrastructure" desc="KYC, audit logs, and reporting built in from the first commit, not bolted on before a review." />
        </div>
      </section>

      <Rule />

      {/* Trust row */}
      <section style={styles.section}>
        <SheetLabel n="03" title="Non-negotiables" />
        <div style={styles.tagRow}>
          <Tag label="PCI-DSS aligned" />
          <Tag label="Idempotent by design" />
          <Tag label="Double-entry ledger integrity" />
          <Tag label="Real-time fraud signals" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>SECTOR — FINANCIAL TECHNOLOGY</span>
        <span style={styles.footerNote}>Debits equal credits. No exceptions, no rounding.</span>
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

const Tag = ({ label }) => (
  <div style={styles.tag}>
    <span style={styles.tagCheck}>✓</span>
    <span>{label}</span>
  </div>
)

const LedgerFeed = () => {
  const rows = [
    { id: 'TXN-88213', desc: 'Card settlement — Visa •• 4471', amt: '+$1,240.00', status: 'settled', delay: 0 },
    { id: 'TXN-88214', desc: 'Wallet transfer — user 22910', amt: '-$85.50', status: 'settled', delay: 0.12 },
    { id: 'TXN-88215', desc: 'ACH payout — vendor batch #12', amt: '+$9,410.20', status: 'processing', delay: 0.24 },
    { id: 'TXN-88216', desc: 'Refund — order #55021', amt: '-$32.00', status: 'settled', delay: 0.36 },
  ]
  return (
    <div style={styles.ledgerWrap}>
      <div style={styles.ledgerHead}>
        <span style={styles.ledgerHeadLabel}>ACCOUNT BALANCE</span>
        <div style={styles.ledgerHeadRight}>
          <span style={styles.liveTag}>
            <span style={styles.liveDot} />
            LIVE
          </span>
        </div>
      </div>
      <div style={styles.balanceRow}>
        <span style={styles.balanceValue}>$284,910.44</span>
        <span style={styles.balanceDelta}>+2.1% today</span>
      </div>
      <div style={styles.ledgerDivider} />
      {rows.map((r) => (
        <div key={r.id} style={{ ...styles.ledgerRow, animation: `rowIn 0.5s ease-out ${r.delay}s both` }}>
          <div style={styles.ledgerRowLeft}>
            <span style={styles.ledgerId}>{r.id}</span>
            <span style={styles.ledgerDesc}>{r.desc}</span>
          </div>
          <div style={styles.ledgerRowRight}>
            <span
              style={{
                ...styles.ledgerAmt,
                color: r.amt.startsWith('+') ? MINT : '#F17E6B',
              }}
            >
              {r.amt}
            </span>
            <span
              style={{
                ...styles.ledgerStatus,
                color: r.status === 'settled' ? MINT : INDIGO,
              }}
            >
              {r.status === 'settled' ? 'Settled' : 'Processing'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

const BG = '#08090B'
const PANEL = '#121417'
const LINE = 'rgba(255,255,255,0.09)'
const TEXT = '#EDEFEF'
const TEXT_SOFT = 'rgba(237,239,239,0.6)'
const MINT = '#33D6A0'
const INDIGO = '#8C9EF2'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Sora', sans-serif",
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
    color: MINT,
    margin: '0 0 18px',
  },
  h1: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 38,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: '0 0 18px',
    maxWidth: 620,
    letterSpacing: '-0.015em',
  },
  hAccent: {
    color: MINT,
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
    color: MINT,
    border: `1px solid ${MINT}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 19,
    fontWeight: 600,
  },
  ledgerWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 16,
    padding: '22px 24px',
  },
  ledgerHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  ledgerHeadLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.1em',
    color: 'rgba(237,239,239,0.4)',
  },
  ledgerHeadRight: { display: 'flex', alignItems: 'center' },
  liveTag: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.08em',
    color: MINT,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: MINT,
    display: 'inline-block',
    animation: 'tickGlow 1.6s ease-in-out infinite',
  },
  balanceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 18,
    flexWrap: 'wrap',
  },
  balanceValue: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 32,
    fontWeight: 600,
    color: TEXT,
  },
  balanceDelta: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    color: MINT,
  },
  ledgerDivider: {
    height: 1,
    background: LINE,
    marginBottom: 4,
  },
  ledgerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: `1px solid ${LINE}`,
    gap: 16,
    flexWrap: 'wrap',
  },
  ledgerRowLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  ledgerId: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    color: 'rgba(237,239,239,0.4)',
  },
  ledgerDesc: {
    fontSize: 13.5,
    color: TEXT,
  },
  ledgerRowRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 3,
  },
  ledgerAmt: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 14,
    fontWeight: 600,
  },
  ledgerStatus: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.05em',
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
    background: MINT,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'Sora', sans-serif",
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
  tagRow: {
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
    color: MINT,
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

export default FinTech