const ROWS = [
  {
    a: "Guaranteed Closing",
    us: "Yes. We actually purchase every property we make an offer on.",
    them: 'Often abandon contracts they intended to "flip" to a real investor.',
  },
  {
    a: "Cash to Close",
    us: "We provide a verifiable proof of funds.",
    them: 'Beware of "creative financing" strategies.',
  },
  {
    a: "Closing Costs",
    us: "We pay all closing costs.",
    them: "May deduct legal fees, tax stamps, etc. from your cut.",
  },
  {
    a: "Legally-Reviewed Paperwork",
    us: "Always. Complies with local laws and regulations.",
    them: "Printed from the internet.",
  },
  {
    a: "Zero Contingencies",
    us: "None! No bank inspections or appraisals needed.",
    them: "Multiple third-party inspections or appraisals.",
  },
  {
    a: "In-House Closing",
    us: "Yes! You choose the closing date.",
    them: "No. Longer waits and rescheduling.",
  },
];

export default function Compare() {
  return (
    <section
      id="compare"
      style={{
        background: "var(--cream-deep)",
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
      }}
    >
      <div className="wrap">
        {/* Section head */}
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <div className="eyebrow">Us vs. the &ldquo;we buy houses&rdquo; crowd</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.05,
              marginBottom: 18,
              color: "var(--ink)",
            }}
          >
            Not all cash buyers{" "}
            <em style={{ fontStyle: "italic", color: "var(--terra)" }}>are the same.</em>
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 18, maxWidth: 640, lineHeight: 1.55 }}>
            Not every cash buyer operates the same way. Here&rsquo;s how we stack up
            against the typical listing process and other buyers.
          </p>
        </div>

        {/* Table */}
        <div
          style={{
            background: "var(--paper)",
            border: "1px solid rgba(21,23,28,.12)",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            className="cmp-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.3fr 1.3fr",
              alignItems: "stretch",
            }}
          >
            <div style={{ padding: "18px 22px", background: "var(--cream-deep)" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: "var(--ink-mute)",
                }}
              >
                ASPECT
              </div>
            </div>
            <div
              style={{
                padding: "18px 22px",
                background: "var(--blue)",
                borderLeft: "1px solid rgba(21,23,28,.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  opacity: 0.7,
                  color: "var(--cream)",
                }}
              >
                WORKING WITH US
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop: 4,
                  color: "var(--cream)",
                }}
              >
                Quick Close Home Buyers
              </div>
            </div>
            <div
              style={{
                padding: "18px 22px",
                borderLeft: "1px solid rgba(21,23,28,.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: "var(--ink-mute)",
                }}
              >
                &ldquo;COMPETITORS&rdquo;
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop: 4,
                  color: "var(--ink-soft)",
                }}
              >
                Traditional agents &amp; listing process
              </div>
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((r) => (
            <div
              key={r.a}
              className="cmp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.3fr 1.3fr",
                borderTop: "1px solid rgba(21,23,28,.12)",
              }}
            >
              <div
                style={{
                  padding: 22,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 17,
                  background: "var(--cream-deep)",
                  color: "var(--ink)",
                }}
              >
                {r.a}
              </div>
              <div
                style={{
                  padding: 22,
                  borderLeft: "1px solid rgba(21,23,28,.12)",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  color: "var(--ink-soft)",
                  lineHeight: 1.5,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--moss)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  ✓
                </div>
                {r.us}
              </div>
              <div
                style={{
                  padding: 22,
                  borderLeft: "1px solid rgba(21,23,28,.12)",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  color: "var(--ink-mute)",
                  lineHeight: 1.5,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(21,23,28,.08)",
                    color: "var(--ink-mute)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  ✕
                </div>
                {r.them}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .cmp-row { grid-template-columns: 1fr !important; }
          .cmp-row > div { border-left: 0 !important; border-top: 1px solid rgba(21,23,28,.12) !important; }
          .cmp-row:first-of-type > div:first-child { border-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
