"use client";

import WaveBand from "@/app/illustrations/WaveBand";

interface Props {
  openOffer: () => void;
}

export default function FinalCta({ openOffer }: Props) {
  return (
    <section
      style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        background: "var(--blue)",
        color: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative wave bands */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        <WaveBand color="#6FA0C4" opacity={0.6} />
        <div style={{ height: 80 }} />
        <WaveBand color="#3C6B91" opacity={0.4} />
      </div>

      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 32,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              color: "var(--cream)",
              opacity: 0.8,
              marginBottom: 18,
            }}
          >
            Ready when you are
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.6vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.05,
              color: "var(--cream)",
            }}
          >
            One call.{" "}
            <em style={{ fontStyle: "italic", color: "var(--terra)" }}>Real cash.</em>
            <br />
            Your timeline.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
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
            }}
          >
            Get my cash offer →
          </button>
          <a
            href="tel:9522348099"
            style={{
              padding: "16px 28px",
              borderRadius: 999,
              border: "1px solid rgba(244,239,230,.3)",
              background: "transparent",
              color: "var(--cream)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            or call 952-234-8099
          </a>
        </div>
      </div>
    </section>
  );
}
