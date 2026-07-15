import React from 'react'

const ErpSolutions = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Courier+Prime:wght@400;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = BRICK)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = PAPER_LINE)}
        aria-label="Go back to previous page"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <span>BACK</span>
      </button>

      {/* Cover — ledger title page */}
      <header style={styles.cover}>
        <div>
          <p style={styles.folio}>FOLIO NO. 01 — CONSOLIDATED</p>
          <h1 style={styles.h1}>One ledger. Every department writes to it.</h1>
          <p style={styles.subhead}>
            ERP isn't another app — it's the shared book of record that finance, inventory,
            procurement and HR all post to, so the numbers agree by construction, not by reconciliation.
          </p>
        </div>
        <div style={styles.stamp}>
          <span style={styles.stampText}>SINGLE<br />SOURCE<br />OF TRUTH</span>
        </div>
      </header>

      <Rule />

      {/* Signature — modules posting into one ledger */}
      <section style={styles.section}>
        <SheetLabel n="I" title="Where every entry ends up" />
        <LedgerDiagram />
      </section>

      <Rule />

      {/* Modules */}
      <section style={styles.section}>
        <SheetLabel n="II" title="The modules on the books" />
        <div style={styles.grid}>
          <LedgerEntry code="FIN" name="Finance" desc="General ledger, accounts payable and receivable, close the books on a schedule instead of a scramble." />
          <LedgerEntry code="INV" name="Inventory" desc="Stock levels update the moment a shipment posts, not the next time someone runs a count." />
          <LedgerEntry code="PROC" name="Procurement" desc="Purchase orders, vendor terms and receipts tie back to the same ledger finance already trusts." />
          <LedgerEntry code="HR" name="Human capital" desc="Headcount, payroll and cost centers feed budgets directly, no export-and-email required." />
          <LedgerEntry code="MFG" name="Manufacturing" desc="Bill of materials and work orders consume inventory in real time as production runs." />
          <LedgerEntry code="SALES" name="Sales & revenue" desc="Orders recognize revenue against the same chart of accounts finance reports on." />
        </div>
      </section>

      <Rule />

      {/* What changes — ledger-style totals */}
      <section style={styles.section}>
        <SheetLabel n="III" title="What moves off the spreadsheet" />
        <div style={styles.totals}>
          <TotalRow label="Month-end close" before="9–12 days" after="2–3 days" />
          <TotalRow label="Copies of the truth" before="6 spreadsheets" after="1 ledger" />
          <TotalRow label="Manual reconciliation" before="Weekly ritual" after="Not required" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.folio}>POSTED & BALANCED</span>
        <span style={styles.footerNote}>Debits equal credits. Every time.</span>
      </footer>
    </div>
  )
}

const Rule = () => <div style={styles.rule} />

const SheetLabel = ({ n, title }) => (
  <div style={styles.sheetLabel}>
    <span style={styles.sheetLabelNum}>{n}.</span>
    <span style={styles.sheetLabelTitle}>{title}</span>
  </div>
)

const LedgerEntry = ({ code, name, desc }) => (
  <div style={styles.entry}>
    <div style={styles.entryHead}>
      <span style={styles.entryCode}>{code}</span>
      <span style={styles.entryName}>{name}</span>
    </div>
    <p style={styles.entryDesc}>{desc}</p>
  </div>
)

const TotalRow = ({ label, before, after }) => (
  <div style={styles.totalRow}>
    <span style={styles.totalLabel}>{label}</span>
    <span style={styles.totalBefore}>{before}</span>
    <span style={styles.totalArrow}>→</span>
    <span style={styles.totalAfter}>{after}</span>
  </div>
)

const LedgerDiagram = () => {
  const feeders = ['Finance', 'Inventory', 'Procurement', 'HR', 'Manufacturing', 'Sales']
  return (
    <div style={styles.ledgerWrap}>
      <div style={styles.feederGrid}>
        {feeders.map((f) => (
          <div key={f} style={styles.feederBox}>
            <span style={styles.feederText}>{f}</span>
          </div>
        ))}
      </div>
      <div style={styles.postLines}>
        {feeders.map((f) => (
          <div key={f} style={styles.postLine} />
        ))}
      </div>
      <div style={styles.mainLedger}>
        <span style={styles.mainLedgerLabel}>GENERAL LEDGER</span>
        <span style={styles.mainLedgerSub}>One chart of accounts. Every department posts here.</span>
      </div>
    </div>
  )
}

const PAPER = '#E7EBDE'
const PAPER_LINE = '#B7C2A9'
const INK = '#20291F'
const INK_SOFT = 'rgba(32,41,31,0.68)'
const BRICK = '#7B2E2A'
const FOREST = '#3E5A3F'

const styles = {
  page: {
    background: PAPER,
    color: INK,
    fontFamily: "'Inter', sans-serif",
    padding: '48px 40px 56px',
    maxWidth: 880,
    margin: '0 auto',
    backgroundImage: `linear-gradient(${PAPER_LINE} 1px, transparent 1px)`,
    backgroundSize: '100% 32px',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: PAPER,
    color: INK,
    border: `1px solid ${PAPER_LINE}`,
    borderRadius: 2,
    padding: '8px 14px',
    marginBottom: 32,
    fontFamily: "'Courier Prime', monospace",
    fontSize: 12,
    letterSpacing: '0.06em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
  },
  cover: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 32,
    flexWrap: 'wrap',
  },
  folio: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 12,
    letterSpacing: '0.1em',
    color: FOREST,
    margin: '0 0 14px',
  },
  h1: {
    fontFamily: "'Roboto Slab', serif",
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.18,
    margin: '0 0 18px',
    maxWidth: 560,
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.65,
    color: INK_SOFT,
    margin: 0,
    maxWidth: 520,
  },
  stamp: {
    width: 108,
    height: 108,
    border: `3px solid ${BRICK}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotate(-9deg)',
    flexShrink: 0,
  },
  stampText: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 11,
    fontWeight: 700,
    color: BRICK,
    textAlign: 'center',
    lineHeight: 1.4,
    letterSpacing: '0.04em',
  },
  rule: {
    height: 2,
    background: INK,
    margin: '40px 0',
    opacity: 0.15,
  },
  section: {},
  sheetLabel: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 22,
  },
  sheetLabelNum: {
    fontFamily: "'Roboto Slab', serif",
    fontSize: 18,
    color: BRICK,
    fontWeight: 700,
  },
  sheetLabelTitle: {
    fontFamily: "'Roboto Slab', serif",
    fontSize: 20,
    fontWeight: 500,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 0,
    border: `1px solid ${PAPER_LINE}`,
  },
  entry: {
    padding: '18px 20px',
    borderRight: `1px solid ${PAPER_LINE}`,
    borderBottom: `1px solid ${PAPER_LINE}`,
  },
  entryHead: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 8,
  },
  entryCode: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 12,
    fontWeight: 700,
    color: BRICK,
    letterSpacing: '0.04em',
  },
  entryName: {
    fontFamily: "'Roboto Slab', serif",
    fontSize: 15,
    fontWeight: 500,
  },
  entryDesc: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: INK_SOFT,
    margin: 0,
  },
  totals: {
    border: `1px solid ${PAPER_LINE}`,
  },
  totalRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto auto',
    alignItems: 'center',
    gap: 16,
    padding: '16px 20px',
    borderBottom: `1px solid ${PAPER_LINE}`,
    fontFamily: "'Courier Prime', monospace",
  },
  totalLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 500,
  },
  totalBefore: {
    fontSize: 13,
    color: INK_SOFT,
    textDecoration: 'line-through',
    textDecorationColor: BRICK,
  },
  totalArrow: { color: FOREST, fontSize: 14 },
  totalAfter: {
    fontSize: 13,
    fontWeight: 700,
    color: FOREST,
  },
  ledgerWrap: {
    border: `1px solid ${PAPER_LINE}`,
    padding: '28px 24px 0',
  },
  feederGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: 10,
    marginBottom: 0,
  },
  feederBox: {
    border: `1px solid ${PAPER_LINE}`,
    padding: '10px 6px',
    textAlign: 'center',
    background: 'rgba(62,90,63,0.06)',
  },
  feederText: {
    fontFamily: "'Courier Prime', monospace",
    fontSize: 11,
    fontWeight: 700,
    color: FOREST,
  },
  postLines: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: 10,
    height: 28,
  },
  postLine: {
    justifySelf: 'center',
    width: 1,
    height: '100%',
    background: PAPER_LINE,
  },
  mainLedger: {
    border: `2px solid ${BRICK}`,
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginBottom: 24,
    textAlign: 'center',
  },
  mainLedgerLabel: {
    fontFamily: "'Roboto Slab', serif",
    fontSize: 16,
    fontWeight: 700,
    color: BRICK,
    letterSpacing: '0.04em',
  },
  mainLedgerSub: {
    fontSize: 12.5,
    color: INK_SOFT,
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
    color: INK_SOFT,
  },
}

export default ErpSolutions