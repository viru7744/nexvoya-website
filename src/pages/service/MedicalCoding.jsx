import React from 'react'
import { useNavigate } from 'react-router-dom'

const MedicalCoding = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
      `}</style>

      <button
        type="button"
        onClick={() => navigate(-1)}
        style={styles.backButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = TEAL
          e.currentTarget.style.color = TEAL
          e.currentTarget.style.boxShadow = `0 0 0 1px ${TEAL}, 0 0 16px rgba(58,196,178,0.28)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = LINE
          e.currentTarget.style.color = TEXT
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <span style={styles.backArrow}>←</span>
        Back
      </button>

      {/* Header */}
      <header style={styles.header}>
        <p style={styles.chartId}>CHART REF. MC-2026-014 · STATUS: CODED</p>
        <h1 style={styles.h1}>Every sentence in the chart becomes a claim line</h1>
        <p style={styles.subhead}>
          Medical coding is translation work — clinical language on one side, ICD-10-CM,
          CPT and HCPCS codes on the other. Miss the nuance and the claim gets denied.
        </p>
      </header>

      <Rule />

      {/* Signature — annotated chart note */}
      <section style={styles.section}>
        <SheetLabel n="01" title="A note, coded line by line" />
        <ChartAnnotation />
      </section>

      <Rule />

      {/* Code systems */}
      <section style={styles.section}>
        <SheetLabel n="02" title="The systems a coder works across" />
        <div style={styles.grid}>
          <SystemCard
            code="ICD-10-CM"
            name="Diagnosis"
            desc="What the patient has. Roughly 70,000 codes, specific down to laterality and encounter type."
          />
          <SystemCard
            code="CPT"
            name="Procedure"
            desc="What was done to treat it. Owned by the AMA, updated annually, billed per encounter."
          />
          <SystemCard
            code="HCPCS"
            name="Supplies & services"
            desc="Durable equipment, ambulance rides, drugs — the things CPT doesn't cover."
          />
          <SystemCard
            code="DRG"
            name="Inpatient grouping"
            desc="Bundles diagnosis and procedure into one payment weight for a hospital stay."
          />
        </div>
      </section>

      <Rule />

      {/* Stakes */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What a missed code costs" />
        <div style={styles.stakesList}>
          <StakeRow
            metric="1"
            label="Wrong digit, wrong claim"
            detail="ICD-10-CM codes run up to 7 characters — a mismatched 6th character can flip a covered claim into a denial."
          />
          <StakeRow
            metric="30"
            label="Days to appeal, on average"
            detail="A denied claim doesn't disappear, it becomes a second job: gather documentation, resubmit, wait again."
          />
          <StakeRow
            metric="100%"
            label="Specificity required"
            detail="'Fracture' isn't billable on its own — coders must capture site, laterality, and whether it's initial or subsequent care."
          />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.chartId}>SIGNED OFF · READY FOR SUBMISSION</span>
        <span style={styles.footerNote}>Clean claims move faster than corrected ones.</span>
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

const SystemCard = ({ code, name, desc }) => (
  <div style={styles.sysCard}>
    <div style={styles.sysCardHead}>
      <span style={styles.sysCode}>{code}</span>
      <span style={styles.sysName}>{name}</span>
    </div>
    <p style={styles.sysDesc}>{desc}</p>
  </div>
)

const StakeRow = ({ metric, label, detail }) => (
  <div style={styles.stakeRow}>
    <span style={styles.stakeMetric}>{metric}</span>
    <div style={styles.stakeText}>
      <span style={styles.stakeLabel}>{label}</span>
      <span style={styles.stakeDetail}>{detail}</span>
    </div>
  </div>
)

const ChartAnnotation = () => {
  const lines = [
    {
      text: 'Patient presents with ',
      hi: 'type 2 diabetes mellitus with diabetic nephropathy',
      rest: ', well controlled on current regimen.',
      code: 'E11.21',
      note: 'Diagnosis — diabetes with kidney complication',
    },
    {
      text: 'Performed ',
      hi: 'office visit, established patient, moderate complexity',
      rest: ' for medication management and labs review.',
      code: '99214',
      note: 'Procedure — E/M level 4 visit',
    },
    {
      text: 'Patient supplied with ',
      hi: 'home blood glucose monitor',
      rest: ' for ongoing self-monitoring.',
      code: 'E0607',
      note: 'HCPCS — durable medical equipment',
    },
  ]
  return (
    <div style={styles.chartWrap}>
      {lines.map((l, i) => (
        <div key={i} style={styles.chartLine}>
          <div style={styles.chartTextCol}>
            <p style={styles.chartP}>
              {l.text}
              <span style={styles.highlight}>{l.hi}</span>
              {l.rest}
            </p>
          </div>
          <div style={styles.connector} />
          <div style={styles.codeTag}>
            <span style={styles.codeTagCode}>{l.code}</span>
            <span style={styles.codeTagNote}>{l.note}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const BG = '#0A0B0B'
const PANEL = '#141615'
const PANEL_RAISED = '#191C1B'
const LINE = 'rgba(255,255,255,0.1)'
const TEXT = '#ECEFED'
const TEXT_SOFT = 'rgba(236,239,237,0.62)'
const TEAL = '#3AC4B2'
const AMBER_HI = 'rgba(242,193,78,0.22)'
const CORAL = '#E2685A'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'IBM Plex Sans', sans-serif",
    padding: '48px 40px 56px',
    maxWidth: 880,
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    border: `1px solid ${LINE}`,
    borderRadius: 20,
    color: TEXT,
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    padding: '7px 16px',
    marginBottom: 32,
    cursor: 'pointer',
    transition: 'all 0.18s ease',
  },
  backArrow: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 14 },
  header: {},
  chartId: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.1em',
    color: TEAL,
    margin: '0 0 14px',
  },
  h1: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: '0 0 16px',
    maxWidth: 620,
    letterSpacing: '-0.015em',
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.65,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 560,
  },
  rule: {
    height: 1,
    background: LINE,
    margin: '40px 0',
  },
  section: {},
  sheetLabel: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 22,
  },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    color: TEAL,
    border: `1px solid ${TEAL}`,
    borderRadius: 4,
    padding: '2px 8px',
  },
  sheetLabelTitle: { fontSize: 20, fontWeight: 600 },
  chartWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderLeft: `4px solid ${TEAL}`,
    borderRadius: 10,
    padding: '8px 24px',
  },
  chartLine: {
    display: 'grid',
    gridTemplateColumns: '1fr 24px 200px',
    alignItems: 'center',
    gap: 8,
    padding: '18px 0',
    borderBottom: `1px solid ${LINE}`,
  },
  chartTextCol: {},
  chartP: {
    fontSize: 14.5,
    lineHeight: 1.7,
    margin: 0,
    color: TEXT,
  },
  highlight: {
    background: AMBER_HI,
    color: '#F2C14E',
    borderRadius: 3,
    padding: '1px 4px',
    fontWeight: 500,
  },
  connector: {
    height: 1,
    background: LINE,
    width: '100%',
  },
  codeTag: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    background: PANEL_RAISED,
    border: `1px solid ${TEAL}`,
    borderRadius: 8,
    padding: '8px 12px',
  },
  codeTagCode: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 14,
    fontWeight: 700,
    color: TEAL,
  },
  codeTagNote: {
    fontSize: 11.5,
    color: TEXT_SOFT,
    lineHeight: 1.4,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
  },
  sysCard: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 10,
    padding: '18px 18px',
  },
  sysCardHead: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: `1px solid ${LINE}`,
  },
  sysCode: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13.5,
    fontWeight: 700,
    color: TEAL,
  },
  sysName: { fontSize: 13.5, color: TEXT_SOFT },
  sysDesc: {
    fontSize: 13.5,
    lineHeight: 1.6,
    color: TEXT_SOFT,
    margin: 0,
  },
  stakesList: { display: 'flex', flexDirection: 'column' },
  stakeRow: {
    display: 'flex',
    gap: 24,
    padding: '20px 0',
    borderBottom: `1px solid ${LINE}`,
    alignItems: 'flex-start',
  },
  stakeMetric: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 26,
    fontWeight: 700,
    color: CORAL,
    minWidth: 64,
  },
  stakeText: { display: 'flex', flexDirection: 'column', gap: 4 },
  stakeLabel: { fontSize: 16, fontWeight: 700 },
  stakeDetail: { fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  footerNote: { fontSize: 13, color: TEXT_SOFT },
}

export default MedicalCoding
