"use client";

import { useEffect, useRef, useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";
import BrandMark from "@/app/illustrations/BrandMark";
import StepProperty from "./StepProperty";
import StepCondition from "./StepCondition";
import StepSituation from "./StepSituation";
import StepContact from "./StepContact";
import { submitOffer } from "./submitOffer";

export interface OfferFormData {
  address: string;
  city: string;
  zip: string;
  beds: string;
  baths: string;
  sqft: string;
  condition: string;
  situation: string[];
  timeline: string;
  name: string;
  phone: string;
  email: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  initialAddress?: string;
  step: number;
  setStep: (s: number) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  refNumber: string;
  setRefNumber: (r: string) => void;
}

const STEPS = ["Property", "Condition", "Situation", "Contact"];

export default function OfferModal({
  open,
  onClose,
  initialAddress = "",
  step,
  setStep,
  submitted,
  setSubmitted,
  refNumber,
  setRefNumber,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<OfferFormData>({
    defaultValues: {
      address: initialAddress,
      city: "",
      zip: "",
      beds: "",
      baths: "",
      sqft: "",
      condition: "",
      situation: [],
      timeline: "",
      name: "",
      phone: "",
      email: "",
    },
  });

  // Sync address when modal opens
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
      setValue("address", initialAddress || "");
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => { document.body.classList.remove("modal-open"); };
  }, [open, initialAddress, setValue]);

  // ESC key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const el = dialogRef.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first)?.focus();
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [open, step]);

  // Subscribe to field changes so canNext re-evaluates on input
  const address   = String(useWatch({ control, name: "address"   }) ?? "");
  const city      = String(useWatch({ control, name: "city"      }) ?? "");
  const condition = String(useWatch({ control, name: "condition" }) ?? "");
  const timeline  = String(useWatch({ control, name: "timeline"  }) ?? "");
  const name      = String(useWatch({ control, name: "name"      }) ?? "");
  const phone     = String(useWatch({ control, name: "phone"     }) ?? "");
  const email     = String(useWatch({ control, name: "email"     }) ?? "");
  const situation = (useWatch({ control, name: "situation" }) ?? []) as string[];

  const canNext = useCallback(() => {
    if (step === 0) return address.trim().length > 3 && city.trim().length > 1;
    if (step === 1) return condition !== "";
    if (step === 2) return timeline !== "";
    if (step === 3) return name.trim().length > 0 && (phone.trim().length > 0 || email.trim().length > 0);
    return false;
  }, [step, address, city, condition, timeline, name, phone, email]);

  const handleNext = async () => {
    let valid = true;
    if (step === 0) {
      valid = await trigger(["address", "city"]);
    } else if (step === 3) {
      valid = await trigger(["name"]);
      if (!phone.trim() && !email.trim()) valid = false;
    }
    if (valid && canNext()) setStep(step + 1);
  };

  const onSubmit = handleSubmit(async (data) => {
    const result = await submitOffer(data);
    setRefNumber(result.ref);
    setSubmitted(true);
  });

  if (!open) return null;

  const data = getValues();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(21,23,28,.56)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fade-in .25s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get your cash offer"
        style={{
          background: "var(--paper)",
          borderRadius: 24,
          width: "100%",
          maxWidth: 640,
          maxHeight: "92vh",
          overflow: "auto",
          boxShadow: "0 30px 80px rgba(0,0,0,.35)",
          border: "1px solid var(--line-soft)",
          display: "flex",
          flexDirection: "column",
          animation: "slide-up .35s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 28px",
            borderBottom: "1px solid var(--line-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            background: "var(--paper)",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <BrandMark size={24} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1,
                }}
              >
                Get your cash offer
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  marginTop: 4,
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                ~ 90 seconds · no obligation
              </div>
            </div>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            style={{
              border: 0,
              background: "transparent",
              fontSize: 24,
              cursor: "pointer",
              color: "var(--ink-mute)",
              width: 36,
              height: 36,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Stepper */}
        {!submitted && (
          <div style={{ padding: "18px 28px 0 28px", display: "flex", gap: 8 }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ flex: 1 }}>
                <div
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: i <= step ? "var(--blue)" : "var(--line-soft)",
                    transition: "background .3s",
                  }}
                />
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: i === step ? "var(--ink)" : "var(--ink-mute)",
                    fontWeight: i === step ? 700 : 400,
                  }}
                >
                  0{i + 1} {s}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div style={{ padding: 28, flex: 1 }}>
          {submitted ? (
            <ThanksPanel
              firstName={data.name.split(" ")[0] || "friend"}
              address={data.address}
              city={data.city}
              refNumber={refNumber}
              onClose={onClose}
            />
          ) : (
            <form id="offer-form" onSubmit={onSubmit}>
              {step === 0 && <StepProperty register={register} errors={errors} />}
              {step === 1 && <StepCondition setValue={setValue} condition={condition} />}
              {step === 2 && <StepSituation setValue={setValue} situation={situation} timeline={timeline} />}
              {step === 3 && <StepContact register={register} errors={errors} />}
            </form>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div
            style={{
              padding: "18px 28px",
              borderTop: "1px solid var(--line-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              background: "var(--paper)",
              position: "sticky",
              bottom: 0,
            }}
          >
            <button
              type="button"
              onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid var(--line-soft)",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 14,
                color: "var(--ink)",
              }}
            >
              {step === 0 ? "Cancel" : "← Back"}
            </button>
            <div style={{ flex: 1 }} />
            <button
              type={step < 3 ? "button" : "submit"}
              form={step === 3 ? "offer-form" : undefined}
              disabled={!canNext()}
              onClick={step < 3 ? handleNext : undefined}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                border: 0,
                background: "var(--ink)",
                color: "var(--cream)",
                cursor: canNext() ? "pointer" : "not-allowed",
                opacity: canNext() ? 1 : 0.45,
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 14,
                transition: "background .15s",
              }}
            >
              {step < 3 ? "Continue →" : "Get my offer →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ThanksPanel({
  firstName,
  address,
  city,
  refNumber,
  onClose,
}: {
  firstName: string;
  address: string;
  city: string;
  refNumber: string;
  onClose: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "12px 0 4px" }}>
      <div
        style={{
          display: "inline-flex",
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "var(--blue-wash)",
          color: "var(--blue)",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          marginBottom: 18,
        }}
      >
        ✓
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 30,
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        You&apos;re in, {firstName}.
      </h3>
      <p
        style={{
          color: "var(--ink-mute)",
          maxWidth: 420,
          margin: "0 auto 28px",
          lineHeight: 1.55,
        }}
      >
        We&apos;ll review{" "}
        {address ? (
          <strong style={{ color: "var(--ink)" }}>
            {address}
            {city ? `, ${city}` : ""}
          </strong>
        ) : (
          "your property"
        )}{" "}
        and call you back within 24 hours with a verified cash offer.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <a
          href="tel:9522348099"
          style={{
            padding: "12px 24px",
            borderRadius: 999,
            background: "var(--ink)",
            color: "var(--cream)",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Call us now · 952-234-8099
        </a>
        <button
          onClick={onClose}
          style={{
            padding: "12px 24px",
            borderRadius: 999,
            border: "1px solid var(--line-soft)",
            background: "transparent",
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--ink)",
          }}
        >
          Close
        </button>
      </div>
      <div
        style={{
          marginTop: 24,
          fontFamily: "var(--font-mono)",
          color: "var(--ink-mute)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: ".12em",
        }}
      >
        {refNumber}
      </div>
    </div>
  );
}
