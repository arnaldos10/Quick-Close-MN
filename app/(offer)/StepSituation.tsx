"use client";

import { UseFormSetValue } from "react-hook-form";
import type { OfferFormData } from "./OfferModal";

interface Props {
  setValue: UseFormSetValue<OfferFormData>;
  situation: string[];
  timeline: string;
}

const SITUATIONS = [
  "Damage", "Bad tenants", "Job loss", "Retirement", "Downsizing",
  "Relocating", "Foreclosure", "Divorce", "Bankruptcy", "Inherited",
  "Repairs", "Health issues", "Just exploring",
];

const TIMELINES = [
  { v: "asap", l: "ASAP",       sub: "Within 2 weeks" },
  { v: "30",   l: "30 days",    sub: "On your terms" },
  { v: "60",   l: "1–2 months", sub: undefined },
  { v: "flex", l: "Flexible",   sub: "Whenever works" },
];

export default function StepSituation({ setValue, situation, timeline }: Props) {

  function toggleSituation(opt: string) {
    if (situation.includes(opt)) {
      setValue("situation", situation.filter((s) => s !== opt));
    } else {
      setValue("situation", [...situation, opt]);
    }
  }

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
        What&apos;s the situation?
      </h3>
      <p style={{ color: "var(--ink-mute)", marginBottom: 18 }}>
        Pick anything that applies. Helps us understand how to help.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {SITUATIONS.map((opt) => {
          const active = situation.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggleSituation(opt)}
              style={{
                padding: "9px 14px",
                borderRadius: 999,
                cursor: "pointer",
                border: active
                  ? "1.5px solid var(--blue)"
                  : "1px solid var(--line-soft)",
                background: active ? "var(--blue)" : "transparent",
                color: active ? "var(--cream)" : "var(--ink-soft)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                transition: "all .12s",
              }}
            >
              {active && "✓ "}
              {opt}
            </button>
          );
        })}
      </div>

      <label
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: ".14em",
          color: "var(--ink-mute)",
          display: "block",
          marginBottom: 10,
        }}
      >
        Ideal timeline to close
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {TIMELINES.map((t) => {
          const active = timeline === t.v;
          return (
            <button
              key={t.v}
              type="button"
              onClick={() => setValue("timeline", t.v)}
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
                {t.l}
              </span>
              {t.sub && (
                <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{t.sub}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
