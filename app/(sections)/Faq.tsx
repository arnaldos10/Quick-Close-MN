"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "How fast can you actually close?",
    a: "Our fastest is 5 days. Average is 7–10 days. If you need more time — say, you're waiting on movers or your next place — we'll close whenever works for you, up to 90 days out.",
  },
  {
    q: "Will you give me a low-ball offer?",
    a: "We give honest offers. Yes, they're under retail — that's the trade-off for cash, no repairs, no commissions, no contingencies, and a guaranteed close. If retail price is what you want, you should list with an agent.",
  },
  {
    q: "What if my house is really rough?",
    a: "Bring it. We've bought hoarder homes, fire-damaged duplexes, condemned properties, and houses with active tenants who refuse to leave. We're flippers — that's our day job.",
  },
  {
    q: "Are you actually buying, or are you a wholesaler?",
    a: "We are the buyer. We close in our LLC, we use our own funds, and we keep the property to flip ourselves. We're happy to send proof of funds before you sign anything.",
  },
  {
    q: "Do you only buy in the south metro?",
    a: "We focus on the Twin Cities and south metro. We do occasionally buy in the broader 7-county area. We don't currently service northern Minnesota.",
  },
  {
    q: "What does it cost me?",
    a: "Zero. No fees, no commissions, no closing costs. The price we offer is the wire amount that hits your account.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      style={{
        background: "var(--cream-deep)",
        paddingTop: "clamp(60px, 9vw, 120px)",
        paddingBottom: "clamp(60px, 9vw, 120px)",
      }}
    >
      <div
        className="wrap faq-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 64,
          alignItems: "flex-start",
        }}
      >
        {/* Left */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Questions</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4.6vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            What people
            <br />
            ask us most.
          </h2>
          <p style={{ color: "var(--ink-soft)", marginTop: 18, fontSize: 17, lineHeight: 1.55 }}>
            Don&rsquo;t see yours? Call{" "}
            <a
              href="tel:9522348099"
              style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}
            >
              952-234-8099
            </a>{" "}
            and we&rsquo;ll answer.
          </p>
        </div>

        {/* Right — accordion */}
        <div>
          {ITEMS.map((it, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid rgba(21,23,28,.12)" : "none",
                borderBottom: "1px solid rgba(21,23,28,.12)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: 0,
                  padding: "24px 0",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 24,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  color: "var(--ink)",
                  lineHeight: 1.25,
                }}
              >
                <span>{it.q}</span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: open === i ? "var(--blue)" : "var(--paper)",
                    color: open === i ? "var(--cream)" : "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    lineHeight: 1,
                    transition: "transform .25s, background .25s, color .25s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    border: "1px solid rgba(21,23,28,.12)",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 360 : 0,
                  overflow: "hidden",
                  transition: "max-height .35s ease, padding .35s ease",
                  paddingBottom: open === i ? 24 : 0,
                }}
              >
                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: 17,
                    lineHeight: 1.6,
                    maxWidth: 640,
                    margin: 0,
                  }}
                >
                  {it.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
