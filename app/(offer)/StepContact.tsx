"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import type { OfferFormData } from "./OfferModal";

interface Props {
  register: UseFormRegister<OfferFormData>;
  errors: FieldErrors<OfferFormData>;
}

export default function StepContact({ register, errors }: Props) {
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
        Where should we send your offer?
      </h3>
      <p style={{ color: "var(--ink-mute)", marginBottom: 22 }}>
        We&apos;ll have a no-obligation cash offer to you within 24 hours.
      </p>

      <div style={{ marginBottom: 14 }}>
        <label className="eyebrow" htmlFor="name" style={{ marginBottom: 6 }}>
          Your name
        </label>
        <input
          id="name"
          className="field"
          placeholder="Jamie Lindstrom"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p style={{ color: "var(--terra)", fontSize: 13, marginTop: 4 }}>
            Please enter your name.
          </p>
        )}
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
      >
        <div>
          <label className="eyebrow" htmlFor="phone" style={{ marginBottom: 6 }}>
            Phone
          </label>
          <input
            id="phone"
            className="field"
            placeholder="(952) 555 0188"
            inputMode="tel"
            {...register("phone")}
          />
        </div>
        <div>
          <label className="eyebrow" htmlFor="email" style={{ marginBottom: 6 }}>
            Email
          </label>
          <input
            id="email"
            className="field"
            placeholder="jamie@example.com"
            inputMode="email"
            type="email"
            {...register("email")}
          />
        </div>
      </div>
      {errors.phone && errors.email && (
        <p style={{ color: "var(--terra)", fontSize: 13, marginBottom: 14 }}>
          Please enter a phone number or email.
        </p>
      )}

      <div
        style={{
          marginTop: 18,
          padding: 14,
          background: "var(--blue-wash)",
          borderRadius: 12,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
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
        <div style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5 }}>
          No spam. No selling your info. One call from a real human in Burnsville
          — you choose what happens next.
        </div>
      </div>
    </div>
  );
}
