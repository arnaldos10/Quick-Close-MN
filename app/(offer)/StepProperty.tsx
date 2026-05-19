"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import type { OfferFormData } from "./OfferModal";

interface Props {
  register: UseFormRegister<OfferFormData>;
  errors: FieldErrors<OfferFormData>;
}

export default function StepProperty({ register, errors }: Props) {
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
        Where&apos;s the property?
      </h3>
      <p style={{ color: "var(--ink-mute)", marginBottom: 22 }}>
        We buy throughout the South Metro &amp; Twin Cities. Tell us where.
      </p>

      <div style={{ marginBottom: 14 }}>
        <label className="eyebrow" htmlFor="address" style={{ marginBottom: 6 }}>
          Street address
        </label>
        <input
          id="address"
          className="field"
          placeholder="1247 Bluestem Way"
          {...register("address", { required: true, minLength: 4 })}
        />
        {errors.address && (
          <p style={{ color: "var(--terra)", fontSize: 13, marginTop: 4 }}>
            Please enter a street address.
          </p>
        )}
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
      >
        <div>
          <label className="eyebrow" htmlFor="city" style={{ marginBottom: 6 }}>
            City
          </label>
          <input
            id="city"
            className="field"
            placeholder="Burnsville"
            {...register("city", { required: true, minLength: 2 })}
          />
          {errors.city && (
            <p style={{ color: "var(--terra)", fontSize: 13, marginTop: 4 }}>
              Please enter a city.
            </p>
          )}
        </div>
        <div>
          <label className="eyebrow" htmlFor="zip" style={{ marginBottom: 6 }}>
            Zip
          </label>
          <input
            id="zip"
            className="field"
            placeholder="55337"
            {...register("zip")}
          />
        </div>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}
      >
        <div>
          <label className="eyebrow" htmlFor="beds" style={{ marginBottom: 6 }}>
            Bedrooms
          </label>
          <input
            id="beds"
            className="field"
            placeholder="3"
            {...register("beds")}
          />
        </div>
        <div>
          <label className="eyebrow" htmlFor="baths" style={{ marginBottom: 6 }}>
            Bathrooms
          </label>
          <input
            id="baths"
            className="field"
            placeholder="2"
            {...register("baths")}
          />
        </div>
        <div>
          <label className="eyebrow" htmlFor="sqft" style={{ marginBottom: 6 }}>
            Sq ft (approx)
          </label>
          <input
            id="sqft"
            className="field"
            placeholder="1,400"
            {...register("sqft")}
          />
        </div>
      </div>
    </div>
  );
}
