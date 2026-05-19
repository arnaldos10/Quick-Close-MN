"use client";

interface Props {
  openOffer: () => void;
}

const ITEMS = [
  { l: "Damage",       d: "Fire, flood, foundation. We see past it." },
  { l: "Bad tenants",  d: "Skip the eviction. We handle it." },
  { l: "Job loss",     d: "Move on without a long listing." },
  { l: "Retirement",   d: "Cash out without renovations." },
  { l: "Downsizing",   d: "Closing on your timeline." },
  { l: "Relocating",   d: "Don’t carry two mortgages." },
  { l: "Foreclosure",  d: "Stop the clock — we close fast." },
  { l: "Divorce",      d: "A clean, private sale." },
  { l: "Bankruptcy",   d: "Discreet and verifiable." },
  { l: "Inherited",    d: "No clean-out required." },
  { l: "Repairs",      d: "Skip the contractor calls." },
  { l: "Health issues",d: "Simple, dignified, kind." },
];

export default function Situations({ openOffer }: Props) {
  return (
    <section
      id="situations"
      style={{
        background: "var(--paper)",
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
      }}
    >
      <div className="wrap">
        {/* Section head */}
        <div style={{ maxWidth: 680, marginBottom: 48 }}>
          <div className="eyebrow">Why people sell to us</div>
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
            Every situation.{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Any shape.</em>
          </h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 18, maxWidth: 560, lineHeight: 1.55 }}>
            Some folks come to us in a rush, others just don&rsquo;t want the hassle
            of a listing. We&rsquo;ve bought through all of it.
          </p>
        </div>

        {/* Grid */}
        <div
          className="sit-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(21,23,28,.12)",
            border: "1px solid rgba(21,23,28,.12)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {ITEMS.map((it) => (
            <div
              key={it.l}
              style={{
                background: "var(--paper)",
                padding: "28px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--blue)",
                    color: "var(--cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "var(--ink)",
                  }}
                >
                  {it.l}
                </div>
              </div>
              <div style={{ color: "var(--ink-mute)", fontSize: 14, lineHeight: 1.5 }}>
                {it.d}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <button
            onClick={() => openOffer()}
            style={{
              padding: "16px 28px",
              borderRadius: 999,
              border: 0,
              background: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              transition: "background .15s",
            }}
          >
            See what we&rsquo;d pay for yours →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .sit-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .sit-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
