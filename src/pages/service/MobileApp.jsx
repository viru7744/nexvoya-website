import React from 'react'

const MobileApp = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;800&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = LIME)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = LINE)}
        aria-label="Go back to previous page"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 2.5L3.5 7L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <span>BACK</span>
      </button>

      {/* Hero */}
      <header style={styles.header}>
        <p style={styles.eyebrow}>DEVICE TARGET — HANDHELD</p>
        <h1 style={styles.h1}>Built for a screen you hold, not one you sit at</h1>
        <p style={styles.subhead}>
          A phone changes the constraints: one thumb, a few inches of comfortable reach,
          and a user who's walking, not seated. The layout has to answer to that.
        </p>
      </header>

      <Rule />

      {/* Signature — phone + thumb reach */}
      <section style={styles.section}>
        <SheetLabel n="01" title="Where the thumb actually goes" />
        <ThumbReachDiagram />
      </section>

      <Rule />

      {/* Platform compare */}
      <section style={styles.section}>
        <SheetLabel n="02" title="Two platforms, two rulebooks" />
        <div style={styles.compareGrid}>
          <PlatformCard
            name="iOS"
            store="App Store"
            review="1–3 days"
            points={['Human Interface Guidelines', 'Swipe-back gesture is system-owned', 'Push needs explicit opt-in prompt']}
          />
          <PlatformCard
            name="Android"
            store="Google Play"
            review="Hours, usually"
            points={['Material Design 3', 'Back button/gesture is hardware-level', 'Push granted by default pre-Android 13']}
          />
        </div>
      </section>

      <Rule />

      {/* What a phone gives you that a website can't */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What the home screen buys you" />
        <div style={styles.dimList}>
          <DimRow metric="1" label="Tap to reopen" detail="An icon on the home screen skips the browser, the bookmark, and the typed URL entirely." />
          <DimRow metric="0ms" label="Perceived load, cached" detail="Local storage and offline-first data mean the last screen can render before the network responds." />
          <DimRow metric="24/7" label="Reachable without a tab open" detail="Push notifications work while the app is closed — a website has no equivalent." />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>BUILD TARGET — iOS 17+ / ANDROID 13+</span>
        <span style={styles.footerNote}>Test on the smallest screen first. It's the least forgiving.</span>
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

const PlatformCard = ({ name, store, review, points }) => (
  <div style={styles.platCard}>
    <div style={styles.platHead}>
      <span style={styles.platName}>{name}</span>
      <span style={styles.platStore}>{store}</span>
    </div>
    <ul style={styles.platList}>
      {points.map((p) => (
        <li key={p} style={styles.platListItem}>{p}</li>
      ))}
    </ul>
    <div style={styles.platFoot}>
      <span style={styles.platFootLabel}>REVIEW TIME</span>
      <span style={styles.platFootValue}>{review}</span>
    </div>
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

const ThumbReachDiagram = () => (
  <div style={styles.reachWrap}>
    <div style={styles.phone}>
      <div style={styles.notch} />
      <div style={styles.screen}>
        <div style={styles.statusBar} />

        <div style={{ ...styles.zoneBand, ...styles.zoneStretch }}>
          <span style={styles.zoneLabel}>STRETCH</span>
        </div>
        <div style={{ ...styles.zoneBand, ...styles.zoneOk }}>
          <span style={styles.zoneLabel}>OK REACH</span>
        </div>
        <div style={{ ...styles.zoneBand, ...styles.zoneEasy }}>
          <span style={{ ...styles.zoneLabel, color: '#0D0F10' }}>EASY REACH</span>
        </div>

        <div style={styles.tabBar}>
          <div style={styles.tabDot} />
          <div style={{ ...styles.tabDot, background: '#C6F135' }} />
          <div style={styles.tabDot} />
        </div>
      </div>
    </div>
    <div style={styles.reachLegend}>
      <LegendRow color="#C6F135" label="Easy reach" detail="Bottom third — primary actions, nav, the tab bar live here" />
      <LegendRow color="#5B5E52" label="OK reach" detail="Middle of the screen — content, scrollable lists" />
      <LegendRow color="#2A2C27" label="Stretch" detail="Top corners — back buttons here get missed one-handed" />
    </div>
  </div>
)

const LegendRow = ({ color, label, detail }) => (
  <div style={styles.legendRow}>
    <span style={{ ...styles.legendDot, background: color }} />
    <div>
      <p style={styles.legendLabel}>{label}</p>
      <p style={styles.legendDetail}>{detail}</p>
    </div>
  </div>
)

const BG = '#15171A'
const PANEL = '#1D1F22'
const LINE = 'rgba(255,255,255,0.1)'
const TEXT = '#EDEEEA'
const TEXT_SOFT = 'rgba(237,238,234,0.62)'
const LIME = '#C6F135'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    padding: '48px 40px 56px',
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
    borderRadius: 8,
    padding: '8px 14px',
    marginBottom: 32,
    fontFamily: "'Space Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.1em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
  },
  header: {},
  eyebrow: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11.5,
    letterSpacing: '0.1em',
    color: LIME,
    margin: '0 0 16px',
  },
  h1: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.15,
    margin: '0 0 16px',
    maxWidth: 600,
    letterSpacing: '-0.015em',
  },
  subhead: {
    fontSize: 16,
    lineHeight: 1.65,
    color: TEXT_SOFT,
    margin: 0,
    maxWidth: 540,
  },
  rule: { height: 1, background: LINE, margin: '40px 0' },
  section: {},
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 },
  sheetLabelNum: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 13,
    color: LIME,
    border: `1px solid ${LIME}`,
    padding: '2px 8px',
  },
  sheetLabelTitle: { fontSize: 20, fontWeight: 600 },
  reachWrap: { display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' },
  phone: {
    width: 210,
    height: 420,
    background: '#0D0F10',
    borderRadius: 32,
    padding: 10,
    position: 'relative',
    border: `1px solid ${LINE}`,
    flexShrink: 0,
  },
  notch: {
    position: 'absolute',
    top: 10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 16,
    background: '#0D0F10',
    borderRadius: 10,
    zIndex: 2,
  },
  screen: {
    background: PANEL,
    width: '100%',
    height: '100%',
    borderRadius: 22,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  statusBar: { height: 28 },
  zoneBand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `1px solid ${LINE}`,
  },
  zoneStretch: { flex: 1, background: '#2A2C27' },
  zoneOk: { flex: 1, background: '#3F4238' },
  zoneEasy: { flex: 1.3, background: LIME },
  zoneLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.08em',
    color: TEXT_SOFT,
  },
  tabBar: {
    position: 'absolute',
    bottom: 14,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
  },
  tabDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'rgba(237,238,234,0.35)',
  },
  reachLegend: { display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minWidth: 220 },
  legendRow: { display: 'flex', gap: 12, alignItems: 'flex-start' },
  legendDot: { width: 12, height: 12, borderRadius: 3, marginTop: 4, flexShrink: 0 },
  legendLabel: { fontSize: 14.5, fontWeight: 600, margin: '0 0 3px' },
  legendDetail: { fontSize: 13, color: TEXT_SOFT, margin: 0, lineHeight: 1.55 },
  compareGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 },
  platCard: { background: PANEL, border: `1px solid ${LINE}`, padding: '20px 20px', borderRadius: 12 },
  platHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14, paddingBottom: 14, borderBottom: `1px solid ${LINE}` },
  platName: { fontSize: 17, fontWeight: 700 },
  platStore: { fontFamily: "'Space Mono', monospace", fontSize: 11.5, color: TEXT_SOFT },
  platList: { margin: '0 0 16px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 },
  platListItem: { fontSize: 13.5, lineHeight: 1.5, color: TEXT_SOFT },
  platFoot: { display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${LINE}`, paddingTop: 12, fontFamily: "'Space Mono', monospace", fontSize: 11.5 },
  platFootLabel: { color: TEXT_SOFT, letterSpacing: '0.06em' },
  platFootValue: { color: LIME, fontWeight: 700 },
  dimList: { display: 'flex', flexDirection: 'column' },
  dimRow: { display: 'flex', gap: 24, padding: '20px 0', borderBottom: `1px solid ${LINE}`, alignItems: 'flex-start' },
  dimMetric: { fontFamily: "'Space Mono', monospace", fontSize: 26, fontWeight: 700, color: LIME, minWidth: 64 },
  dimText: { display: 'flex', flexDirection: 'column', gap: 4 },
  dimLabel: { fontSize: 16, fontWeight: 700 },
  dimDetail: { fontSize: 14, lineHeight: 1.6, color: TEXT_SOFT },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  footerNote: { fontSize: 13, color: TEXT_SOFT },
}

export default MobileApp