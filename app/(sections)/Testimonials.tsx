import AvatarBlock from "@/app/illustrations/AvatarBlock";

const TESTIMONIALS = [
  {
    q: "They didn’t flinch when I told them about the basement. I’d had two “investors” walk after seeing it. Quick Close just made the offer and stuck to it.",
    n: "Sandra K.",
    loc: "Apple Valley · inherited duplex",
    tone: "blue" as const,
  },
  {
    q: "I was three weeks from foreclosure when I called. We closed in 11 days and I had cash to start over. Decent humans.",
    n: "Marcus T.",
    loc: "Bloomington · pre-foreclosure",
    tone: "terra" as const,
  },
  {
    q: "My mom needed to downsize and couldn’t deal with showings. Their closer came to her assisted living. That meant everything.",
    n: "Priya R.",
    loc: "Lakeville · relocation",
    tone: "moss" as const,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
        background: "var(--cream)",
      }}
    >
      <div className="wrap">
        {/* Section head */}
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <div className="eyebrow">Words from Minnesota sellers</div>
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
            Real neighbors.{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Real outcomes.</em>
          </h2>
        </div>

        <div
          className="tst-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((x, i) => (
            <figure
              key={i}
              style={{
                background: i === 1 ? "var(--blue)" : "var(--paper)",
                color: i === 1 ? "var(--cream)" : "var(--ink)",
                border: i === 1 ? "none" : "1px solid rgba(21,23,28,.12)",
                padding: "32px 28px",
                borderRadius: 24,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Opening quote */}
              <div
                style={{
                  fontSize: 48,
                  lineHeight: 0.6,
                  fontFamily: "var(--font-display)",
                  opacity: i === 1 ? 0.9 : 0.35,
                  color: i === 1 ? "var(--terra)" : "var(--blue)",
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 1.5vw, 21px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.005em",
                  color: i === 1 ? "var(--cream)" : "var(--ink)",
                }}
              >
                {x.q}
              </blockquote>

              <figcaption
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <AvatarBlock
                  initials={x.n
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                  tone={i === 1 ? "terra" : x.tone}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 16,
                      color: i === 1 ? "var(--cream)" : "var(--ink)",
                    }}
                  >
                    {x.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      opacity: 0.7,
                      marginTop: 2,
                    }}
                  >
                    {x.loc}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .tst-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
