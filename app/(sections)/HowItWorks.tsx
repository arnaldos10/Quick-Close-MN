"use client";

interface Props {
  openOffer: () => void;
}

const STEPS = [
  {
    n: "01",
    t: "Tell us about it",
    d: "Two minutes. Address, condition, situation. No appraisal needed.",
  },
  {
    n: "02",
    t: "We make a real offer",
    d: "Within 24 hours. Cash. No bank involved. No financing contingencies.",
  },
  {
    n: "03",
    t: "You pick the date",
    d: "Close in 7 days or 90. Our in-house closer comes to you if you want.",
  },
  {
    n: "04",
    t: "Get paid, walk away",
    d: "Wire or certified check at the table. Take what you want. Leave the rest.",
  },
];

export default function HowItWorks({ openOffer }: Props) {
  return (
    <section
      id="how"
      style={{
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
        background: "var(--cream)",
      }}
    >
      <div className="wrap">
        {/* Section head */}
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <div className="eyebrow">How it works</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.05,
              color: "var(--ink)",
            }}
          >
            Four steps.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>No surprises.</em>
          </h2>
        </div>

        {/* Steps grid */}
        <div
          className="how-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            position: "relative",
          }}
        >
          {/* Dashed connector */}
          <div
            className="how-connector"
            style={{
              position: "absolute",
              top: 36,
              left: "8%",
              right: "8%",
              height: 1,
              background:
                "repeating-linear-gradient(90deg, var(--ink-mute) 0 4px, transparent 4px 10px)",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {STEPS.map((s, i) => (
            <div
              key={s.n}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--blue)" : "var(--paper)",
                  color: i === 0 ? "var(--cream)" : "var(--ink)",
                  border: "1px solid rgba(21,23,28,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 22,
                  position: "relative",
                  zIndex: 1,
                  flexShrink: 0,
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                {s.t}
              </h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee callout */}
        <div
          style={{
            marginTop: 64,
            padding: "36px 40px",
            background: "var(--ink)",
            color: "var(--cream)",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".14em",
                opacity: 0.6,
                marginBottom: 8,
              }}
            >
              GUARANTEE
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 2.4vw, 32px)",
                fontWeight: 600,
                lineHeight: 1.15,
                maxWidth: 640,
                color: "var(--cream)",
              }}
            >
              If we make you an offer, we close. If we walk, we pay you{" "}
              <span style={{ color: "var(--terra)" }}>$1,000</span> for your time.
            </div>
          </div>
          <button
            onClick={() => openOffer()}
            style={{
              padding: "16px 28px",
              borderRadius: 999,
              border: 0,
              background: "var(--terra)",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background .15s",
              flexShrink: 0,
            }}
          >
            Start now →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: repeat(2,1fr) !important; }
          .how-connector { display: none !important; }
        }
        @media (max-width: 520px) {
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
