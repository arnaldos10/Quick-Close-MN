import HouseSilhouette from "@/app/illustrations/HouseSilhouette";
import PineMark from "@/app/illustrations/PineMark";

const STATS = [
  { n: "144",    l: "Homes purchased" },
  { n: "$48M",   l: "Cash deployed" },
  { n: "7 cities", l: "Avg active service" },
  { n: "4.9 / 5", l: "Across 89 sellers" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
        background: "var(--cream)",
      }}
    >
      <div
        className="wrap abt-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left — illustration card */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              aspectRatio: "4/5",
              borderRadius: 24,
              overflow: "hidden",
              background: "linear-gradient(180deg, #6FA0C4 0%, #ECE4D4 65%, #5A6B3F 100%)",
              border: "1px solid rgba(21,23,28,.12)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: 24,
              position: "relative",
            }}
          >
            {/* Top chips */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                right: 24,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.7)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--ink-soft)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--moss)",
                  }}
                />
                BURNSVILLE, MN
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.7)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: "var(--ink-mute)",
                }}
              >
                EST 2021
              </span>
            </div>

            {/* House silhouette — bleeds at bottom */}
            <div style={{ transform: "translateY(20%)" }}>
              <HouseSilhouette tone="ink" size={220} />
            </div>
          </div>

          {/* Floating stamp */}
          <div
            style={{
              position: "absolute",
              right: -20,
              top: "40%",
              transform: "rotate(-4deg)",
              background: "var(--paper)",
              padding: "12px 18px",
              borderRadius: 14,
              border: "1px solid rgba(21,23,28,.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,.1)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--ink)",
            }}
          >
            <PineMark size={20} />
            <span
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}
            >
              Real Minnesotans
            </span>
          </div>
        </div>

        {/* Right — copy */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Who we are</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4.6vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.1,
              marginBottom: 24,
              color: "var(--ink)",
            }}
          >
            We&rsquo;re a small, local team — not a national franchise.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              lineHeight: 1.55,
              marginBottom: 18,
            }}
          >
            Quick Close was built to make selling your home as simple as possible.
            We&rsquo;re a small team based in the south metro — four people who
            answer their own phones.
          </p>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              lineHeight: 1.55,
              marginBottom: 32,
            }}
          >
            We close on every offer we make. If we say we&rsquo;ll be there Tuesday
            at 10, we&rsquo;ll be there Tuesday at 10.
          </p>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {STATS.map((s) => (
              <div
                key={s.l}
                style={{
                  padding: "18px 20px",
                  background: "var(--paper)",
                  border: "1px solid rgba(21,23,28,.12)",
                  borderRadius: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 26,
                    color: "var(--blue)",
                  }}
                >
                  {s.n}
                </div>
                <div style={{ color: "var(--ink-mute)", fontSize: 13, marginTop: 4 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .abt-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
