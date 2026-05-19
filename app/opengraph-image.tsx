import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quick Close Home Buyers — We buy houses in the Twin Cities & South Metro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 1200,
          height: 630,
          background: "#F4EFE6",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "serif",
        }}
      >
        {/* Left side */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 580 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* BrandMark inline SVG */}
            <svg viewBox="0 0 64 64" width={56} height={56}>
              <circle cx="32" cy="32" r="32" fill="#1C3D5A" />
              <polygon points="14,38 32,18 50,38" fill="#F4EFE6" />
              <rect x="20" y="38" width="24" height="14" fill="#F4EFE6" />
              <rect x="30" y="42" width="6" height="10" fill="#1C3D5A" />
              <rect x="22" y="40" width="5" height="5" fill="#1C3D5A" />
              <rect x="37" y="40" width="5" height="5" fill="#1C3D5A" />
            </svg>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#15171C" }}>
              Quick Close Home Buyers
            </span>
          </div>

          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, color: "#15171C" }}>
            We buy houses in{" "}
            <span style={{ color: "#1C3D5A", fontStyle: "italic" }}>any shape.</span>
          </div>

          <div style={{ fontSize: 24, color: "#3A3D45", lineHeight: 1.5 }}>
            Cash offer in 24 hrs. Close in 7 days. No fees.
            <br />
            Twin Cities &amp; South Metro · Local since 2014.
          </div>

          <div
            style={{
              display: "inline-flex",
              padding: "14px 28px",
              background: "#15171C",
              color: "#F4EFE6",
              borderRadius: 999,
              fontSize: 20,
              fontWeight: 700,
              marginTop: 8,
            }}
          >
            952-234-8099
          </div>
        </div>

        {/* Right — house scene */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 360 240" width={380} height={253}>
            <rect x="0" y="0" width="360" height="240" fill="#E6EEF4" />
            <circle cx="290" cy="58" r="26" fill="#D4A845" />
            <polygon points="40,170 60,120 80,170" fill="#5A6B3F" opacity="0.55" />
            <polygon points="70,170 92,110 114,170" fill="#5A6B3F" opacity="0.55" />
            <polygon points="240,170 264,118 288,170" fill="#5A6B3F" opacity="0.55" />
            <polygon points="278,170 298,128 318,170" fill="#5A6B3F" opacity="0.55" />
            <path d="M0 168 Q 60 160, 120 168 T 240 168 T 360 168 L 360 200 L 0 200 Z" fill="#6FA0C4" opacity="0.35" />
            <rect x="0" y="180" width="360" height="60" fill="#F4EFE6" />
            <rect x="130" y="130" width="120" height="60" fill="#F4EFE6" stroke="#15171C" strokeWidth="1.2" />
            <polygon points="120,130 190,82 260,130" fill="#1C3D5A" />
            <rect x="230" y="92" width="12" height="20" fill="#1C3D5A" />
            <rect x="178" y="158" width="20" height="32" fill="#C66B3D" />
            <rect x="142" y="146" width="22" height="22" fill="#E6EEF4" stroke="#15171C" strokeWidth="1" />
            <line x1="153" y1="146" x2="153" y2="168" stroke="#15171C" strokeWidth=".6" />
            <line x1="142" y1="157" x2="164" y2="157" stroke="#15171C" strokeWidth=".6" />
            <rect x="214" y="146" width="22" height="22" fill="#E6EEF4" stroke="#15171C" strokeWidth="1" />
            <line x1="225" y1="146" x2="225" y2="168" stroke="#15171C" strokeWidth=".6" />
            <line x1="214" y1="157" x2="236" y2="157" stroke="#15171C" strokeWidth=".6" />
            <polygon points="86,196 108,140 130,196" fill="#5A6B3F" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
