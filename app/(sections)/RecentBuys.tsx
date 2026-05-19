import CaseIllustration from "@/app/illustrations/CaseIllustration";

const CASES = [
  { city: "Burnsville",  neigh: "Echo Park",    beds: "3 / 2", sqft: "1,420", sit: "Inherited · estate", price: "$247,500", days: 9,  v: 0 },
  { city: "Eagan",       neigh: "Cliff Road",   beds: "4 / 2", sqft: "2,100", sit: "Pre-foreclosure",   price: "$318,000", days: 11, v: 1 },
  { city: "Bloomington", neigh: "Penn South",   beds: "2 / 1", sqft: "960",   sit: "Bad tenants",       price: "$172,000", days: 7,  v: 2 },
  { city: "Lakeville",   neigh: "Crystal Lake", beds: "5 / 3", sqft: "2,860", sit: "Relocation",        price: "$402,000", days: 14, v: 0 },
];

export default function RecentBuys() {
  return (
    <section
      id="cases"
      style={{
        background: "var(--paper)",
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
      }}
    >
      <div className="wrap">
        {/* Section head — horizontal */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "flex-end",
            marginBottom: 40,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Recent purchases</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 5vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.018em",
                lineHeight: 1.05,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              We close on what{" "}
              <em style={{ fontStyle: "italic", color: "var(--terra)" }}>we offer.</em>
            </h2>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".12em",
              color: "var(--ink-mute)",
              whiteSpace: "nowrap",
            }}
          >
            UPDATED · MAY 2026 · MN-7-COUNTY
          </div>
        </div>

        {/* Cards grid */}
        <div
          className="rb-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {CASES.map((c, i) => (
            <article
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 20,
                overflow: "hidden",
                background: "var(--cream-deep)",
                border: "1px solid rgba(21,23,28,.12)",
              }}
            >
              <div style={{ aspectRatio: "16/10", position: "relative" }}>
                <CaseIllustration variant={c.v} />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    padding: "5px 10px",
                    background: "var(--paper)",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".12em",
                    color: "var(--ink-mute)",
                  }}
                >
                  SOLD
                </div>
              </div>

              <div
                style={{
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 18,
                      color: "var(--ink)",
                    }}
                  >
                    {c.neigh}
                  </div>
                  <div style={{ color: "var(--ink-mute)", fontSize: 14 }}>
                    {c.city}, MN · {c.beds} bd/ba · {c.sqft} sqft
                  </div>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    background: "var(--blue-wash)",
                    color: "var(--blue)",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                  }}
                >
                  {c.sit}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginTop: 6,
                    borderTop: "1px dashed rgba(21,23,28,.12)",
                    paddingTop: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: "var(--ink-mute)",
                      }}
                    >
                      CASH PAID
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 22,
                        color: "var(--ink)",
                      }}
                    >
                      {c.price}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: "var(--ink-mute)",
                      }}
                    >
                      CLOSED IN
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 22,
                        color: "var(--blue)",
                      }}
                    >
                      {c.days}{" "}
                      <span
                        style={{
                          fontSize: 14,
                          color: "var(--ink-mute)",
                          fontWeight: 400,
                        }}
                      >
                        days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) { .rb-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px)  { .rb-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
