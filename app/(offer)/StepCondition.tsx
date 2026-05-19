"use client";

import { UseFormSetValue } from "react-hook-form";
import type { OfferFormData } from "./OfferModal";

interface Props {
  setValue: UseFormSetValue<OfferFormData>;
  condition: string;
}

const CONDITIONS = [
  { v: "turnkey",  l: "Turnkey",        sub: "Move-in ready" },
  { v: "cosmetic", l: "Light cosmetic",  sub: "Paint, flooring, dated" },
  { v: "major",    l: "Major repairs",   sub: "Roof, mechanicals, plumbing" },
  { v: "rough",    l: "Rough shape",     sub: "Significant damage" },
];

export default function StepCondition({ setValue, condition }: Props) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        What kind of shape is it in?
      </h3>
      <p style={{ color: "var(--ink-mute)", marginBottom: 22 }}>
        Be honest — we buy in <em>any</em> condition. No deductions for being rough.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {CONDITIONS.map((c) => {
          const active = condition === c.v;
          return (
            <button
              key={c.v}
              type="button"
              onClick={() => setValue("condition", c.v)}
              style={{
                textAlign: "left",
                cursor: "pointer",
                padding: "16px 18px",
                borderRadius: 14,
                border: active
                  ? "1.5px solid var(--blue)"
                  : "1px solid var(--line-soft)",
                background: active ? "var(--blue-wash)" : "var(--paper)",
                transition: "all .15s",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>
                {c.l}
              </span>
              {c.sub && (
                <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{c.sub}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
