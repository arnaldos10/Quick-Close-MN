const STATS = [
  { n: "144",     l: "Minnesota homes purchased" },
  { n: "2021",    l: "Local since" },
  { n: "13 days", l: "Average close time" },
  { n: "$0",     l: "Fees, commissions, surprises" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        padding: "40px 0",
        borderTop: "1px solid rgba(21,23,28,.12)",
        borderBottom: "1px solid rgba(21,23,28,.12)",
        background: "var(--cream-deep)",
      }}
    >
      <div
        className="wrap trust-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {STATS.map((s) => (
          <div key={s.l}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1,
                color: "var(--blue)",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                marginTop: 8,
                color: "var(--ink-mute)",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 740px) {
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
