import React from 'react'
import { useNavigate } from 'react-router-dom'

const StaffAugmentation = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      <button
        type="button"
        onClick={() => navigate(-1)}
        style={styles.backButton}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
      >
        <span style={styles.backArrow}>←</span>
        Back
      </button>

      {/* Hero */}
      <header style={styles.header}>
        <p style={styles.eyebrow}>ROSTER — CURRENT SEASON</p>
        <h1 style={styles.h1}>Your squad, plus the players this sprint needs</h1>
        <p style={styles.subhead}>
          Staff augmentation isn't outsourcing the work — it's putting a specialist on the bench
          who can step onto your field, run your plays, and rotate off when the need ends.
        </p>
      </header>

      <Rule />

      {/* Signature — depth chart */}
      <section style={styles.section}>
        <SheetLabel n="01" title="Core squad and the bench filling gaps" />
        <DepthChart />
      </section>

      <Rule />

      {/* Engagement models */}
      <section style={styles.section}>
        <SheetLabel n="02" title="How a player joins the roster" />
        <div style={styles.grid}>
          <ModelCard num="7" name="Dedicated" desc="One augmented specialist, embedded full-time in your team, your stand-ups, your sprint." />
          <ModelCard num="11" name="Pod" desc="A pre-formed unit — say, two engineers and a QA — dropped in to own a whole workstream." />
          <ModelCard num="23" name="On-demand" desc="Time and materials, scaled up for a launch and back down once the surge passes." />
          <ModelCard num="9" name="Project-based" desc="A fixed scope, a fixed team, handed back to you complete at the final whistle." />
        </div>
      </section>

      <Rule />

      {/* Why teams do it */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What the substitution actually buys" />
        <div style={styles.dimList}>
          <DimRow metric="2–3 wks" label="Time to bench strength" detail="Versus 2–3 months to source, interview and onboard a full-time hire for the same skill gap." />
          <DimRow metric="0" label="Headcount left behind" detail="When the project ends, the seat goes with it — no severance, no bench cost after the whistle." />
          <DimRow metric="1" label="Skill gap, precisely filled" detail="You're not hiring a generalist and hoping — you're recruiting the exact position your depth chart is missing." />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>ROSTER LOCKED — KICKOFF READY</span>
        <span style={styles.footerNote}>Substitutions allowed at any stoppage in play.</span>
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

const ModelCard = ({ num, name, desc }) => (
  <div style={styles.modelCard}>
    <div style={styles.modelHead}>
      <span style={styles.jerseyNum}>{num}</span>
      <span style={styles.modelName}>{name}</span>
    </div>
    <p style={styles.modelDesc}>{desc}</p>
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

const DepthChart = () => {
  const core = [
    { pos: 'PM', name: 'Product owner' },
    { pos: 'FE', name: 'Frontend lead' },
    { pos: 'BE', name: 'Backend lead' },
    { pos: 'UX', name: 'Designer' },
  ]
  const bench = [
    { pos: 'FE2', name: 'React specialist', reason: 'Sprint velocity gap' },
    { pos: 'QA', name: 'Automation tester', reason: 'No QA on roster' },
    { pos: 'SEC', name: 'Security reviewer', reason: 'Pre-launch audit only' },
  ]
  return (
    <div style={styles.chartWrap}>
      <div style={styles.chartCol}>
        <span style={styles.chartColLabel}>STARTING LINEUP</span>
        <div style={styles.chartRows}>
          {core.map((p) => (
            <div key={p.pos} style={styles.playerRow}>
              <span style={styles.posBadge}>{p.pos}</span>
              <span style={styles.playerName}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.chartDivider} />
      <div style={styles.chartCol}>
        <span style={{ ...styles.chartColLabel, color: GOLD }}>THE BENCH</span>
        <div style={styles.chartRows}>
          {bench.map((p) => (
            <div key={p.pos} style={{ ...styles.playerRow, ...styles.playerRowBench }}>
              <span style={{ ...styles.posBadge, ...styles.posBadgeBench }}>{p.pos}</span>
              <div style={styles.benchTextCol}>
                <span style={styles.playerName}>{p.name}</span>
                <span style={styles.benchReason}>{p.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const BG = '#101822'
const PANEL = '#182230'
const LINE = 'rgba(255,255,255,0.1)'
const TEXT = '#EEF1F4'
const TEXT_SOFT = 'rgba(238,241,244,0.62)'
const GOLD = '#E8B84B'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Inter', sans-serif",
    padding: '48px 40px 56px',
    maxWidth: 880,
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.1)',
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
  backArrow: { fontFamily: "'Oswald', sans-serif", fontSize: 14, color: GOLD },
  header: {},
  eyebrow: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 12.5,
    letterSpacing: '0.1em',
    color: GOLD,
    margin: '0 0 16px',
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 38,
    fontWeight: 600,
    lineHeight: 1.15,
    margin: '0 0 16px',
    maxWidth: 620,
    letterSpacing: '-0.01em',
  },
  subhead: { fontSize: 16, lineHeight: 1.65, color: TEXT_SOFT, margin: 0, maxWidth: 560 },
  rule: { height: 1, background: LINE, margin: '40px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 14,
    color: GOLD,
    border: `1px solid ${GOLD}`,
    padding: '2px 9px',
  },
  sheetLabelTitle: { fontSize: 20, fontWeight: 600, fontFamily: "'Oswald', sans-serif" },
  chartWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 1px 1fr',
    gap: 24,
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 12,
    padding: '24px',
  },
  chartCol: { display: 'flex', flexDirection: 'column', gap: 14 },
  chartColLabel: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 12,
    letterSpacing: '0.1em',
    color: TEXT_SOFT,
  },
  chartDivider: { background: LINE },
  chartRows: { display: 'flex', flexDirection: 'column', gap: 10 },
  playerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 8,
    border: `1px solid ${LINE}`,
  },
  playerRowBench: { borderStyle: 'dashed', borderColor: 'rgba(232,184,75,0.4)' },
  posBadge: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: TEXT,
    background: 'rgba(255,255,255,0.08)',
    borderRadius: 6,
    padding: '3px 8px',
    minWidth: 34,
    textAlign: 'center',
  },
  posBadgeBench: { background: 'rgba(232,184,75,0.16)', color: GOLD },
  playerName: { fontSize: 14, fontWeight: 500 },
  benchTextCol: { display: 'flex', flexDirection: 'column', gap: 2 },
  benchReason: { fontSize: 11.5, color: TEXT_SOFT },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 },
  modelCard: { background: PANEL, border: `1px solid ${LINE}`, padding: '18px 18px', borderRadius: 10 },
  modelHead: { display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${LINE}` },
  jerseyNum: { fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: GOLD },
  modelName: { fontSize: 14.5, fontWeight: 600 },
  modelDesc: { fontSize: 13.5, lineHeight: 1.6, color: TEXT_SOFT, margin: 0 },
  dimList: { display: 'flex', flexDirection: 'column' },
  dimRow: { display: 'flex', gap: 24, padding: '20px 0', borderBottom: `1px solid ${LINE}`, alignItems: 'flex-start' },
  dimMetric: { fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 600, color: GOLD, minWidth: 88 },
  dimText: { display: 'flex', flexDirection: 'column', gap: 4 },
  dimLabel: { fontSize: 16, fontWeight: 700 },
  dimDetail: { fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  footerNote: { fontSize: 13, color: TEXT_SOFT },
}

export default StaffAugmentation
