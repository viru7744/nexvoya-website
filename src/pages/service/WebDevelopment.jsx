import React from 'react'
import { useNavigate } from 'react-router-dom'

const WebDevelopment = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Roboto:wght@400;500;700;800&display=swap');
      `}</style>

      {/* Browser chrome */}
      <div style={styles.browserChrome}>
        <div style={styles.trafficLights}>
          <span style={{ ...styles.dot, background: '#FF5F57' }} />
          <span style={{ ...styles.dot, background: '#FEBC2E' }} />
          <span style={{ ...styles.dot, background: '#28C840' }} />
        </div>
        <div style={styles.addressBar}>
          <span style={styles.lock}>🔒</span>
          <span style={styles.url}>localhost:5173</span>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = VIOLET
            e.currentTarget.style.color = VIOLET
            e.currentTarget.style.boxShadow = `0 0 0 1px ${VIOLET}, 0 0 16px rgba(124,111,240,0.35)`
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
      </div>

      <div style={styles.viewport}>
        {/* Hero */}
        <header style={styles.header}>
          <p style={styles.eyebrow}>&lt;html&gt; · view-source enabled</p>
          <h1 style={styles.h1}>Every pixel is one element, styled on purpose</h1>
          <p style={styles.subhead}>
            A web page is a document first — the framework, the bundler and the deploy pipeline
            all exist to serve one nested tree of elements the browser has to lay out and paint.
          </p>
        </header>

        <Rule />

        {/* Signature — box model */}
        <section style={styles.section}>
          <SheetLabel n="01" title="The box model, inspected" />
          <BoxModelDiagram />
        </section>

        <Rule />

        {/* Stack layers */}
        <section style={styles.section}>
          <SheetLabel n="02" title="Three languages, one page" />
          <div style={styles.grid}>
            <LayerCard tag="HTML" name="Structure" desc="The document tree — what exists, and in what order. Nothing renders without it." />
            <LayerCard tag="CSS" name="Presentation" desc="How that tree looks — box model, layout, typography, everything visual." />
            <LayerCard tag="JS" name="Behavior" desc="What happens when something changes — clicks, fetches, state, re-renders." />
          </div>
        </section>

        <Rule />

        {/* Performance dimensions */}
        <section style={styles.section}>
          <SheetLabel n="03" title="What the browser is actually timing" />
          <div style={styles.dimList}>
            <DimRow metric="<2.5s" label="Largest contentful paint" detail="How long until the biggest visible element shows up — Google's real ranking signal." />
            <DimRow metric="<0.1" label="Cumulative layout shift" detail="How much content jumps around while the page finishes loading. Users feel this before they can name it." />
            <DimRow metric="<200ms" label="Interaction to next paint" detail="The gap between a click and the screen actually responding to it." />
          </div>
        </section>
      </div>

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>DOM READY · 0 CONSOLE ERRORS</span>
        <span style={styles.footerNote}>Ship it, then watch the field data.</span>
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

const LayerCard = ({ tag, name, desc }) => (
  <div style={styles.layerCard}>
    <div style={styles.layerHead}>
      <span style={styles.layerTag}>{tag}</span>
      <span style={styles.layerName}>{name}</span>
    </div>
    <p style={styles.layerDesc}>{desc}</p>
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

const BoxModelDiagram = () => (
  <div style={styles.boxModelWrap}>
    <div style={styles.boxMargin}>
      <span style={{ ...styles.boxTag, color: '#E8A33D' }}>margin — 24px</span>
      <div style={styles.boxBorder}>
        <span style={{ ...styles.boxTag, color: '#E8D23D' }}>border — 2px</span>
        <div style={styles.boxPadding}>
          <span style={{ ...styles.boxTag, color: '#4FCB7A' }}>padding — 16px</span>
          <div style={styles.boxContent}>
            <span style={styles.boxContentLabel}>content</span>
            <span style={styles.boxContentDims}>320 × 96</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const BG = '#0A0A0C'
const PANEL = '#131318'
const PANEL_RAISED = '#181820'
const LINE = 'rgba(255,255,255,0.1)'
const TEXT = '#EDEDF2'
const TEXT_SOFT = 'rgba(237,237,242,0.62)'
const VIOLET = '#8A7CF5'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Roboto', sans-serif",
    maxWidth: 880,
    margin: '0 auto',
    border: `1px solid ${LINE}`,
    borderRadius: 14,
    overflow: 'hidden',
    boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
  },
  browserChrome: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '12px 16px',
    background: PANEL,
    borderBottom: `1px solid ${LINE}`,
  },
  trafficLights: { display: 'flex', gap: 7 },
  dot: { width: 11, height: 11, borderRadius: '50%' },
  addressBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: BG,
    border: `1px solid ${LINE}`,
    borderRadius: 20,
    padding: '6px 14px',
  },
  lock: { fontSize: 11 },
  url: { fontFamily: "'Roboto Mono', monospace", fontSize: 12.5, color: TEXT_SOFT },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    border: `1px solid ${LINE}`,
    borderRadius: 20,
    color: TEXT,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    padding: '7px 16px',
    cursor: 'pointer',
    transition: 'all 0.18s ease',
    flexShrink: 0,
  },
  backArrow: { fontFamily: "'Roboto Mono', monospace", fontSize: 14 },
  viewport: { padding: '44px 44px 8px' },
  header: {},
  eyebrow: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.06em',
    color: VIOLET,
    margin: '0 0 16px',
  },
  h1: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: '0 0 16px',
    maxWidth: 600,
    letterSpacing: '-0.015em',
  },
  subhead: { fontSize: 16, lineHeight: 1.65, color: TEXT_SOFT, margin: 0, maxWidth: 550 },
  rule: { height: 1, background: LINE, margin: '38px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 13,
    color: VIOLET,
    border: `1px solid ${VIOLET}`,
    borderRadius: 4,
    padding: '2px 8px',
  },
  sheetLabelTitle: { fontSize: 20, fontWeight: 700 },
  boxModelWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '28px 0 32px',
    background: PANEL,
    borderRadius: 12,
    border: `1px solid ${LINE}`,
  },
  boxMargin: {
    background: 'rgba(232,163,61,0.08)',
    border: '1px dashed rgba(232,163,61,0.4)',
    borderRadius: 10,
    padding: '30px',
    position: 'relative',
    display: 'inline-flex',
  },
  boxBorder: {
    background: 'rgba(232,210,61,0.08)',
    border: '1px dashed rgba(232,210,61,0.4)',
    borderRadius: 8,
    padding: '10px',
    display: 'inline-flex',
  },
  boxPadding: {
    background: 'rgba(79,203,122,0.08)',
    border: '1px dashed rgba(79,203,122,0.4)',
    borderRadius: 6,
    padding: '20px',
    display: 'inline-flex',
  },
  boxContent: {
    background: PANEL_RAISED,
    border: `1px solid ${VIOLET}`,
    borderRadius: 6,
    minWidth: 180,
    minHeight: 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  boxTag: {
    position: 'absolute',
    top: 6,
    left: 10,
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 10.5,
    fontWeight: 700,
  },
  boxContentLabel: { fontFamily: "'Roboto Mono', monospace", fontSize: 11.5, fontWeight: 700, color: VIOLET },
  boxContentDims: { fontFamily: "'Roboto Mono', monospace", fontSize: 11, color: TEXT_SOFT },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 },
  layerCard: { background: PANEL, border: `1px solid ${LINE}`, padding: '18px 18px', borderRadius: 10 },
  layerHead: { display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid ${LINE}` },
  layerTag: { fontFamily: "'Roboto Mono', monospace", fontSize: 12.5, fontWeight: 700, color: VIOLET },
  layerName: { fontSize: 13.5, color: TEXT_SOFT },
  layerDesc: { fontSize: 13.5, lineHeight: 1.6, color: TEXT_SOFT, margin: 0 },
  dimList: { display: 'flex', flexDirection: 'column' },
  dimRow: { display: 'flex', gap: 24, padding: '20px 0', borderBottom: `1px solid ${LINE}`, alignItems: 'flex-start' },
  dimMetric: { fontFamily: "'Roboto Mono', monospace", fontSize: 24, fontWeight: 700, color: VIOLET, minWidth: 78 },
  dimText: { display: 'flex', flexDirection: 'column', gap: 4 },
  dimLabel: { fontSize: 16, fontWeight: 700 },
  dimDetail: { fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    padding: '16px 44px 30px',
  },
  footerNote: { fontSize: 13, color: TEXT_SOFT },
}

export default WebDevelopment
