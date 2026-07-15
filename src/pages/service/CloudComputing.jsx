import React from 'react'

const CloudComputing = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;700;800&display=swap');
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(239, 243, 244, 0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(239, 243, 244, 0.28)')}
        aria-label="Go back to previous page"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <span>BACK</span>
      </button>

      {/* Title block — drafting-sheet header */}
      <header style={styles.titleBlock}>
        <div style={styles.titleBlockLeft}>
          <p style={styles.dwgLabel}>DWG NO. CC-001</p>
          <h1 style={styles.h1}>The cloud, drafted</h1>
          <p style={styles.subhead}>
            Compute, storage and networking — rented by the hour instead of bolted to a rack.
            This sheet walks through how the stack actually fits together.
          </p>
        </div>
        <div style={styles.titleBlockRight}>
          <Row label="SCALE" value="1 : ∞" />
          <Row label="REV" value="03" />
          <Row label="STATUS" value="LIVE" />
        </div>
      </header>

      <div style={styles.hairline} />

      {/* Signature element — annotated stack schematic */}
      <section style={styles.section}>
        <SheetLabel n="01" title="The stack, elevation view" />
        <StackDiagram />
      </section>

      <div style={styles.hairline} />

      {/* Service models */}
      <section style={styles.section}>
        <SheetLabel n="02" title="Three ways to rent it" />
        <div style={styles.grid3}>
          <SpecCard
            code="IaaS"
            name="Infrastructure"
            desc="Raw virtual machines, storage volumes, networks. You patch the OS, you own the runtime."
            keep="Full control"
          />
          <SpecCard
            code="PaaS"
            name="Platform"
            desc="Push code, the platform handles servers, scaling and patching underneath it."
            keep="Faster shipping"
          />
          <SpecCard
            code="SaaS"
            name="Software"
            desc="Open a browser, the software already runs somewhere else, fully managed."
            keep="Zero upkeep"
          />
        </div>
      </section>

      <div style={styles.hairline} />

      {/* Why it matters — dimension-line callouts */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What you stop doing" />
        <div style={styles.dimList}>
          <DimRow
            metric="0"
            label="Servers to physically own"
            detail="Capacity is requested through an API, not ordered from a vendor with a six-week lead time."
          />
          <DimRow
            metric="Min"
            label="Billing granularity"
            detail="Pay for the compute-seconds you use — not for machines idling overnight."
          />
          <DimRow
            metric="3"
            label="Major providers, one shared vocabulary"
            detail="AWS, Azure and Google Cloud disagree on names, agree on the underlying primitives: compute, storage, network."
          />
        </div>
      </section>

      <div style={styles.hairline} />

      {/* Footer — title block echo */}
      <footer style={styles.footer}>
        <p style={styles.dwgLabel}>DRAWN — CHECKED — APPROVED</p>
        <p style={styles.footerNote}>Sheet 1 of 1 · No physical hardware was harmed in this explanation.</p>
      </footer>
    </div>
  )
}

const Row = ({ label, value }) => (
  <div style={styles.row}>
    <span style={styles.rowLabel}>{label}</span>
    <span style={styles.rowValue}>{value}</span>
  </div>
)

const SheetLabel = ({ n, title }) => (
  <div style={styles.sheetLabel}>
    <span style={styles.sheetLabelNum}>{n}</span>
    <span style={styles.sheetLabelTitle}>{title}</span>
  </div>
)

const SpecCard = ({ code, name, desc, keep }) => (
  <div style={styles.specCard}>
    <div style={styles.specCardHead}>
      <span style={styles.specCode}>{code}</span>
      <span style={styles.specName}>{name}</span>
    </div>
    <p style={styles.specDesc}>{desc}</p>
    <div style={styles.specFoot}>
      <span style={styles.specFootLabel}>YOU KEEP</span>
      <span style={styles.specFootValue}>{keep}</span>
    </div>
  </div>
)

const DimRow = ({ metric, label, detail }) => (
  <div style={styles.dimRow}>
    <span style={styles.dimMetric}>{metric}</span>
    <div style={styles.dimTextBlock}>
      <span style={styles.dimLabel}>{label}</span>
      <span style={styles.dimDetail}>{detail}</span>
    </div>
  </div>
)

const StackDiagram = () => {
  const layers = [
    { name: 'Applications', sub: 'Your code, your users', h: 56 },
    { name: 'Platform services', sub: 'Managed runtimes, databases, queues', h: 56 },
    { name: 'Virtual infrastructure', sub: 'VMs, containers, virtual networks', h: 56 },
    { name: 'Physical data centers', sub: 'Real racks, real power, real cooling', h: 56 },
  ]
  return (
    <div style={styles.stackWrap}>
      {layers.map((l, i) => (
        <div key={l.name} style={{ ...styles.stackLayer, height: l.h }}>
          <div style={styles.stackLayerLeft}>
            <span style={styles.stackIndex}>L{layers.length - i}</span>
          </div>
          <div style={styles.stackLayerBody}>
            <span style={styles.stackName}>{l.name}</span>
            <span style={styles.stackSub}>{l.sub}</span>
          </div>
          <div style={styles.stackTick} />
        </div>
      ))}
      <div style={styles.stackBaseline}>
        <span style={styles.stackBaselineText}>GROUND LEVEL — where the actual servers live</span>
      </div>
    </div>
  )
}

const INK = '#EFF3F4'
const PAPER = '#0D2B45'
const PAPER_DEEP = '#0A2237'
const LINE = 'rgba(239, 243, 244, 0.28)'
const LINE_STRONG = 'rgba(239, 243, 244, 0.5)'
const AMBER = '#E8A33D'

const styles = {
  page: {
    background: PAPER,
    color: INK,
    fontFamily: "'Manrope', sans-serif",
    padding: '48px 40px 64px',
    maxWidth: 880,
    margin: '0 auto',
    backgroundImage:
      'linear-gradient(' + LINE + ' 1px, transparent 1px), linear-gradient(90deg, ' + LINE + ' 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    backgroundPosition: '-1px -1px',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    color: INK,
    border: `1px solid ${LINE}`,
    borderRadius: 0,
    padding: '8px 14px',
    marginBottom: 32,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.12em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
  },
  titleBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 32,
    flexWrap: 'wrap',
  },
  titleBlockLeft: { maxWidth: 520 },
  titleBlockRight: {
    border: `1px solid ${LINE_STRONG}`,
    minWidth: 160,
  },
  dwgLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.12em',
    color: AMBER,
    margin: '0 0 12px',
  },
  h1: {
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1.1,
    margin: '0 0 16px',
    letterSpacing: '-0.01em',
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.6,
    color: 'rgba(239,243,244,0.72)',
    margin: 0,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 14px',
    borderBottom: `1px solid ${LINE}`,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
  },
  rowLabel: { color: 'rgba(239,243,244,0.55)', letterSpacing: '0.08em' },
  rowValue: { color: INK, fontWeight: 500 },
  hairline: {
    height: 1,
    background: LINE_STRONG,
    margin: '40px 0',
  },
  section: {},
  sheetLabel: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 24,
  },
  sheetLabelNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    color: AMBER,
    border: `1px solid ${AMBER}`,
    padding: '2px 8px',
    borderRadius: 0,
  },
  sheetLabelTitle: {
    fontSize: 20,
    fontWeight: 700,
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20,
  },
  specCard: {
    border: `1px solid ${LINE_STRONG}`,
    padding: '20px 18px',
    background: PAPER_DEEP,
  },
  specCardHead: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 12,
    borderBottom: `1px solid ${LINE}`,
    paddingBottom: 12,
  },
  specCode: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 15,
    fontWeight: 600,
    color: AMBER,
  },
  specName: {
    fontSize: 14,
    color: 'rgba(239,243,244,0.65)',
  },
  specDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'rgba(239,243,244,0.78)',
    margin: '0 0 16px',
    minHeight: 66,
  },
  specFoot: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.06em',
    borderTop: `1px solid ${LINE}`,
    paddingTop: 12,
  },
  specFootLabel: { color: 'rgba(239,243,244,0.45)' },
  specFootValue: { color: INK, fontWeight: 500 },
  dimList: { display: 'flex', flexDirection: 'column', gap: 0 },
  dimRow: {
    display: 'flex',
    gap: 24,
    padding: '20px 0',
    borderBottom: `1px solid ${LINE}`,
    alignItems: 'flex-start',
  },
  dimMetric: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 28,
    fontWeight: 600,
    color: AMBER,
    minWidth: 64,
  },
  dimTextBlock: { display: 'flex', flexDirection: 'column', gap: 4 },
  dimLabel: { fontSize: 16, fontWeight: 700 },
  dimDetail: { fontSize: 14, lineHeight: 1.6, color: 'rgba(239,243,244,0.7)' },
  stackWrap: {
    border: `1px solid ${LINE_STRONG}`,
    background: PAPER_DEEP,
    padding: '4px',
  },
  stackLayer: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${LINE}`,
    position: 'relative',
  },
  stackLayerLeft: {
    width: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: `1px solid ${LINE}`,
    height: '100%',
  },
  stackIndex: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    color: AMBER,
  },
  stackLayerBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 18px',
    gap: 2,
  },
  stackName: { fontSize: 15, fontWeight: 700 },
  stackSub: { fontSize: 12.5, color: 'rgba(239,243,244,0.6)' },
  stackTick: {
    position: 'absolute',
    right: 14,
    width: 8,
    height: 1,
    background: LINE_STRONG,
  },
  stackBaseline: {
    padding: '10px 18px',
    textAlign: 'center',
  },
  stackBaselineText: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '0.08em',
    color: 'rgba(239,243,244,0.45)',
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
    color: 'rgba(239,243,244,0.5)',
    margin: 0,
  },
}

export default CloudComputing