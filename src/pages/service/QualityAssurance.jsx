import React from 'react'
import { useNavigate } from 'react-router-dom'

const QualityAssurance = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      <button
        type="button"
        onClick={() => navigate(-1)}
        style={styles.backButton}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)' }}
      >
        <span style={styles.backArrow}>←</span>
        Back
      </button>

      {/* Hero */}
      <header style={styles.header}>
        <p style={styles.eyebrow}>RUN #2847 — main branch</p>
        <h1 style={styles.h1}>Nothing ships until the run is green</h1>
        <p style={styles.subhead}>
          Quality assurance isn't a final check before release — it's the thing that decides
          whether release happens at all. A single red line holds the whole build.
        </p>
      </header>

      <Rule />

      {/* Signature — live test console */}
      <section style={styles.section}>
        <SheetLabel n="01" title="What a run actually looks like" />
        <TestConsole />
      </section>

      <Rule />

      {/* Testing types */}
      <section style={styles.section}>
        <SheetLabel n="02" title="Four ways to break it on purpose" />
        <div style={styles.grid}>
          <TypeCard code="UNIT" name="Unit" desc="One function, isolated. Fast enough to run on every keystroke." />
          <TypeCard code="INTG" name="Integration" desc="Do the pieces still agree once they're wired together for real." />
          <TypeCard code="REGR" name="Regression" desc="Yesterday's fix, checked again, so it doesn't quietly come undone." />
          <TypeCard code="EXPL" name="Exploratory" desc="A human, off-script, trying to do the one thing no test case predicted." />
        </div>
      </section>

      <Rule />

      {/* Metrics */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What the numbers are actually for" />
        <div style={styles.dimList}>
          <DimRow metric="87%" label="Coverage isn't the goal" detail="High coverage with no meaningful assertions is a vanity metric — it measures lines touched, not bugs caught." />
          <DimRow metric="<1%" label="Defect escape rate" detail="The share of bugs that make it to production despite the suite. The number that actually matters to users." />
          <DimRow metric="0" label="Flaky tests tolerated" detail="A test that fails at random gets ignored, then the next real failure gets ignored right along with it." />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>34 passed · 0 failed · 2 skipped</span>
        <span style={styles.footerNote}>Green means ready. Not means perfect.</span>
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

const TypeCard = ({ code, name, desc }) => (
  <div style={styles.typeCard}>
    <div style={styles.typeHead}>
      <span style={styles.typeCode}>{code}</span>
      <span style={styles.typeName}>{name}</span>
    </div>
    <p style={styles.typeDesc}>{desc}</p>
  </div>
)

const DimRow = ({ metric, label, detail }) => (
  <div style={styles.dimRow}>
    <span style={styles.dimMetric}>{metric}</span>
    <div style={styles.dimText}>
      <span style={styles.dimLabel}>{label}</span>
      <span style={styles.dimDetail}>{detail}</span>
    </div>
  </div>
)

const TestConsole = () => {
  const rows = [
    { name: 'auth › rejects expired token', state: 'pass', ms: 12 },
    { name: 'checkout › applies discount before tax', state: 'pass', ms: 34 },
    { name: 'checkout › blocks negative quantity', state: 'pass', ms: 8 },
    { name: 'search › paginates past 100 results', state: 'fail', ms: 210 },
    { name: 'search › debounces rapid input', state: 'pass', ms: 19 },
    { name: 'notifications › retries on network drop', state: 'pending', ms: null },
  ]
  return (
    <div style={styles.console}>
      <div style={styles.consoleBar}>
        <span style={{ ...styles.dot, background: '#E5484D' }} />
        <span style={{ ...styles.dot, background: '#F0B429' }} />
        <span style={{ ...styles.dot, background: '#3DD68C' }} />
        <span style={styles.consoleTitle}>qa-suite.spec.js</span>
      </div>
      <div style={styles.consoleBody}>
        {rows.map((r) => (
          <div key={r.name} style={styles.consoleRow}>
            <StateMark state={r.state} />
            <span style={styles.rowName}>{r.name}</span>
            <span style={styles.rowMs}>{r.ms !== null ? `${r.ms}ms` : '—'}</span>
          </div>
        ))}
      </div>
      <div style={styles.consoleFoot}>
        <span style={{ color: '#3DD68C' }}>4 passed</span>
        <span style={{ color: '#E5484D' }}>1 failed</span>
        <span style={{ color: '#F0B429' }}>1 pending</span>
      </div>
    </div>
  )
}

const StateMark = ({ state }) => {
  const map = {
    pass: { sym: '✓', color: '#3DD68C' },
    fail: { sym: '✕', color: '#E5484D' },
    pending: { sym: '○', color: '#F0B429' },
  }
  const s = map[state]
  return <span style={{ ...styles.stateMark, color: s.color }}>{s.sym}</span>
}

const BG = '#0A0A0B'
const PANEL = '#131416'
const LINE = 'rgba(255,255,255,0.09)'
const TEXT = '#EDEFEC'
const TEXT_SOFT = 'rgba(237,239,236,0.6)'
const GREEN = '#3DD68C'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Inter', sans-serif",
    padding: '48px 40px 56px',
    maxWidth: 880,
    margin: '0 auto',
  },
  header: {},
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 8,
    color: TEXT,
    fontFamily: "'Inter', sans-serif",
    fontSize: 13.5,
    fontWeight: 500,
    padding: '8px 14px',
    marginBottom: 32,
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
  },
  backArrow: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 14,
    color: GREEN,
  },
  eyebrow: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.08em',
    color: GREEN,
    margin: '0 0 16px',
  },
  h1: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.16,
    margin: '0 0 16px',
    maxWidth: 600,
    letterSpacing: '-0.015em',
  },
  subhead: { fontSize: 16, lineHeight: 1.65, color: TEXT_SOFT, margin: 0, maxWidth: 540 },
  rule: { height: 1, background: LINE, margin: '40px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: GREEN,
    border: `1px solid ${GREEN}`,
    padding: '2px 8px',
  },
  sheetLabelTitle: { fontSize: 20, fontWeight: 600 },
  console: { background: PANEL, border: `1px solid ${LINE}`, borderRadius: 10, overflow: 'hidden' },
  consoleBar: { display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: `1px solid ${LINE}` },
  dot: { width: 9, height: 9, borderRadius: '50%' },
  consoleTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: TEXT_SOFT,
    marginLeft: 8,
  },
  consoleBody: { padding: '8px 0' },
  consoleRow: {
    display: 'grid',
    gridTemplateColumns: '20px 1fr 56px',
    alignItems: 'center',
    gap: 12,
    padding: '9px 20px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
  },
  stateMark: { fontWeight: 700, fontSize: 13 },
  rowName: { color: TEXT },
  rowMs: { color: TEXT_SOFT, textAlign: 'right', fontSize: 11.5 },
  consoleFoot: {
    display: 'flex',
    gap: 20,
    padding: '12px 20px',
    borderTop: `1px solid ${LINE}`,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    fontWeight: 700,
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 },
  typeCard: { background: PANEL, border: `1px solid ${LINE}`, padding: '18px 18px', borderRadius: 10 },
  typeHead: { display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${LINE}` },
  typeCode: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, fontWeight: 700, color: GREEN, letterSpacing: '0.04em' },
  typeName: { fontSize: 13.5, color: TEXT_SOFT },
  typeDesc: { fontSize: 13.5, lineHeight: 1.6, color: TEXT_SOFT, margin: 0 },
  dimList: { display: 'flex', flexDirection: 'column' },
  dimRow: { display: 'flex', gap: 24, padding: '20px 0', borderBottom: `1px solid ${LINE}`, alignItems: 'flex-start' },
  dimMetric: { fontFamily: "'JetBrains Mono', monospace", fontSize: 26, fontWeight: 700, color: GREEN, minWidth: 72 },
  dimText: { display: 'flex', flexDirection: 'column', gap: 4 },
  dimLabel: { fontSize: 16, fontWeight: 700 },
  dimDetail: { fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  footerNote: { fontSize: 13, color: TEXT_SOFT },
}

export default QualityAssurance