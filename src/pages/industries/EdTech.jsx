import React from 'react'

const EdTech = ({ onBack }) => {
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
        @import url('https://fonts.googleapis.com/css2?family=Literata:wght@500;600&family=Space+Grotesk:wght@400;500;600&display=swap');
        @keyframes fillBar {
          from { width: 0%; }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Back navigation */}
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = AMBER
          e.currentTarget.style.color = AMBER
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
        <p style={styles.eyebrow}>INDUSTRY — EDTECH</p>
        <h1 style={styles.h1}>
          Learning software that<br />tracks <span style={styles.hAccent}>progress</span>, not just logins.
        </h1>
        <p style={styles.subhead}>
          LMS platforms, virtual classrooms, and e-learning tools built around the thing that
          actually matters: whether a student understood the lesson, not whether the page loaded.
        </p>
      </header>

      <Rule />

      {/* Signature — course progress path */}
      <section style={styles.section}>
        <SheetLabel n="01" title="A course, mapped as mastery" />
        <ProgressPath />
      </section>

      <Rule />

      {/* What we build */}
      <section style={styles.section}>
        <SheetLabel n="02" title="What we build" />
        <div style={styles.grid}>
          <Card title="Learning management systems" desc="Courses, grading, and enrollment in one place instructors don't need training to use." />
          <Card title="Virtual classrooms" desc="Live video, breakout rooms, and shared whiteboards that hold up on a school's shared wifi." />
          <Card title="Adaptive assessment" desc="Quizzes and practice sets that adjust difficulty to where a student actually is." />
          <Card title="Content & curriculum tools" desc="Authoring tools for teachers to build lessons without touching a line of code." />
        </div>
      </section>

      <Rule />

      {/* Outcomes row */}
      <section style={styles.section}>
        <SheetLabel n="03" title="What changes for a classroom" />
        <div style={styles.statRow}>
          <Stat value="94%" label="Assignment completion, up from manual tracking" />
          <Stat value="3.2×" label="Faster grading turnaround for instructors" />
          <Stat value="1 login" label="Replacing five disconnected school tools" />
        </div>
      </section>

      <Rule />

      <footer style={styles.footer}>
        <span style={styles.eyebrow}>SECTOR — EDUCATION TECHNOLOGY</span>
        <span style={styles.footerNote}>Built for the student who logs in at 11pm, too.</span>
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

const ProgressPath = () => {
  const chapters = [
    { label: 'Foundations', state: 'done' },
    { label: 'Core concepts', state: 'done' },
    { label: 'Applied practice', state: 'active' },
    { label: 'Assessment', state: 'upcoming' },
    { label: 'Mastery', state: 'upcoming' },
  ]
  return (
    <div style={styles.pathWrap}>
      <div style={styles.pathTrack}>
        {chapters.map((c, i) => (
          <React.Fragment key={c.label}>
            <div style={styles.pathNode}>
              <div
                style={{
                  ...styles.pathDot,
                  ...(c.state === 'done'
                    ? styles.pathDotDone
                    : c.state === 'active'
                    ? styles.pathDotActive
                    : styles.pathDotUpcoming),
                }}
              >
                {c.state === 'done' ? '✓' : i + 1}
              </div>
              <span style={styles.pathLabel}>{c.label}</span>
            </div>
            {i < chapters.length - 1 && (
              <div
                style={{
                  ...styles.pathLine,
                  background: c.state === 'done' ? AMBER : LINE,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={styles.progressBarOuter}>
        <div style={styles.progressBarInner} />
      </div>
      <div style={styles.progressFoot}>
        <span style={styles.progressFootLabel}>COURSE PROGRESS</span>
        <span style={styles.progressFootValue}>52%</span>
      </div>
    </div>
  )
}

const BG = '#0A0B0D'
const PANEL = '#131518'
const LINE = 'rgba(255,255,255,0.09)'
const TEXT = '#EDEFEF'
const TEXT_SOFT = 'rgba(237,239,239,0.62)'
const AMBER = '#F2B84B'
const VIOLET = '#9C8CF0'

const styles = {
  page: {
    background: BG,
    color: TEXT,
    fontFamily: "'Space Grotesk', sans-serif",
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
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 12.5,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease, color 0.15s ease',
  },
  header: {},
  eyebrow: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: '0.12em',
    color: AMBER,
    margin: '0 0 18px',
  },
  h1: {
    fontFamily: "'Literata', serif",
    fontSize: 38,
    fontWeight: 600,
    lineHeight: 1.24,
    margin: '0 0 18px',
    maxWidth: 620,
    letterSpacing: '-0.01em',
  },
  hAccent: {
    color: VIOLET,
    fontStyle: 'italic',
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
  sheetLabel: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 },
  sheetLabelNum: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 12.5,
    color: AMBER,
    border: `1px solid ${AMBER}`,
    padding: '2px 8px',
    borderRadius: 4,
  },
  sheetLabelTitle: {
    fontFamily: "'Literata', serif",
    fontSize: 19,
    fontWeight: 600,
  },
  pathWrap: {
    background: PANEL,
    border: `1px solid ${LINE}`,
    borderRadius: 16,
    padding: '28px 28px 22px',
  },
  pathTrack: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 26,
  },
  pathNode: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    minWidth: 56,
  },
  pathDot: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    flexShrink: 0,
  },
  pathDotDone: {
    background: AMBER,
    color: '#0A0B0D',
  },
  pathDotActive: {
    background: 'transparent',
    color: VIOLET,
    border: `2px solid ${VIOLET}`,
  },
  pathDotUpcoming: {
    background: 'transparent',
    color: TEXT_SOFT,
    border: `1px solid ${LINE}`,
  },
  pathLabel: {
    fontSize: 11.5,
    color: TEXT_SOFT,
    textAlign: 'center',
    lineHeight: 1.3,
    maxWidth: 70,
  },
  pathLine: {
    height: 2,
    flex: 1,
    marginTop: 15,
    minWidth: 12,
  },
  progressBarOuter: {
    height: 8,
    borderRadius: 100,
    background: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarInner: {
    height: '100%',
    width: '52%',
    borderRadius: 100,
    background: `linear-gradient(90deg, ${AMBER}, ${VIOLET})`,
    animation: 'fillBar 1.4s ease-out',
  },
  progressFoot: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progressFootLabel: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 11,
    letterSpacing: '0.1em',
    color: 'rgba(237,239,239,0.4)',
  },
  progressFootValue: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: AMBER,
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
    background: AMBER,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "'Literata', serif",
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
    fontFamily: "'Literata', serif",
    fontSize: 32,
    fontWeight: 600,
    color: VIOLET,
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
  },
}

export default EdTech