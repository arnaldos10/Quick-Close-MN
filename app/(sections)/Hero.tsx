"use client";

import { useState } from "react";
import HouseScene from "@/app/illustrations/HouseScene";

interface Props {
  openOffer: (address?: string) => void;
}

export default function Hero({ openOffer }: Props) {
  const [address, setAddress] = useState("");

  return (
    <section
      id="top"
      style={{
        paddingTop: "clamp(40px, 6vw, 80px)",
        paddingBottom: "clamp(40px, 6vw, 90px)",
      }}
    >
      <div
        className="wrap hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            — Twin Cities &amp; South Metro · cash buyers since 2021
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.05,
              marginBottom: 24,
              color: "var(--ink)",
            }}
          >
            We buy houses
            <br />
            in{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>any shape.</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 1.4vw, 20px)",
              color: "var(--ink-soft)",
              maxWidth: 520,
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            Run-down. Pre-foreclosure. Inherited. We pay cash and close on your
            timeline — no agents, no fees, no delays.
          </p>

          {/* Inline address form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              openOffer(address);
            }}
            style={{
              display: "flex",
              gap: 10,
              background: "var(--paper)",
              padding: 8,
              borderRadius: 18,
              border: "1px solid var(--line-soft)",
              boxShadow: "0 10px 30px rgba(28,61,90,.08)",
              maxWidth: 560,
              flexWrap: "wrap",
            }}
          >
            <label htmlFor="hero-address" className="sr-only">
              Property address
            </label>
            <input
              id="hero-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your property address"
              style={{
                border: 0,
                background: "transparent",
                flex: "1 1 240px",
                padding: "12px 14px",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "var(--ink)",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                flex: "0 0 auto",
                padding: "14px 24px",
                borderRadius: 999,
                border: 0,
                background: "var(--ink)",
                color: "var(--cream)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background .15s",
              }}
            >
              Get cash offer →
            </button>
          </form>

          {/* Chips */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            {["No fees · no commissions", "Offer in 24 hrs", "Close in 7 days"].map(
              (chip) => (
                <span
                  key={chip}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
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
                      flexShrink: 0,
                    }}
                  />
                  {chip}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right — illustration */}
        <div className="hero-art" style={{ position: "relative" }}>
          <div
            style={{
              background: "var(--paper)",
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid var(--line-soft)",
              boxShadow: "0 20px 60px rgba(28,61,90,.12)",
              position: "relative",
            }}
          >
            <HouseScene w="100%" h={380} />
            <div
              style={{
                padding: "22px 26px",
                borderTop: "1px solid var(--line-soft)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".12em",
                    color: "var(--ink-mute)",
                  }}
                >
                  RECENT · BURNSVILLE
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 18,
                    marginTop: 4,
                    color: "var(--ink)",
                  }}
                >
                  Offer in 19 hours, closed in 9 days
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
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
                    color: "var(--terra)",
                  }}
                >
                  $247,500
                </div>
              </div>
            </div>
          </div>

          {/* Proof-of-funds floating card */}
          <div
            style={{
              position: "absolute",
              left: -22,
              bottom: -24,
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "16px 20px",
              borderRadius: 16,
              boxShadow: "0 16px 40px rgba(0,0,0,.25)",
              display: "flex",
              gap: 12,
              alignItems: "center",
              maxWidth: 280,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "var(--terra)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
                flexShrink: 0,
                color: "#fff",
              }}
            >
              $
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  opacity: 0.7,
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                }}
              >
                VERIFIED · BANK OF AMERICA
              </div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--cream)" }}>
                $2.4M proof of funds
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-art { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        .sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }
      `}</style>
    </section>
  );
}
