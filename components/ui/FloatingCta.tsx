"use client";

import { useEffect, useState } from "react";

interface Props {
  openOffer: () => void;
  modalOpen: boolean;
}

export default function FloatingCta({ openOffer, modalOpen }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible || modalOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 150,
        animation: "slide-up-cta .4s cubic-bezier(.2,.8,.2,1) both",
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "14px 20px 14px 24px",
        borderRadius: 999,
        boxShadow: "0 16px 48px rgba(0,0,0,.3)",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontWeight: 500, fontSize: 15 }}>Cash offer in 24 hrs</span>
      <button
        onClick={() => openOffer()}
        style={{
          padding: "8px 18px",
          borderRadius: 999,
          border: 0,
          background: "var(--terra)",
          color: "#fff",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Start →
      </button>
    </div>
  );
}
