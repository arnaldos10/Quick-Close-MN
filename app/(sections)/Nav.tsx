"use client";

import BrandMark from "@/app/illustrations/BrandMark";

interface Props {
  openOffer: () => void;
}

export default function Nav({ openOffer }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "color-mix(in oklab, #F4EFE6 88%, transparent)",
        borderBottom: "1px solid rgba(21,23,28,.08)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          height: 64,
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--ink)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 16,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <BrandMark size={28} />
          Quick&nbsp;Close{" "}
          <span style={{ color: "var(--ink-mute)", fontWeight: 400 }}>· MN</span>
        </a>

        {/* Center links */}
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            gap: 28,
            flex: 1,
            justifyContent: "center",
          }}
          className="nav-links"
        >
          <a href="#how" style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
            How it works
          </a>
          <a href="#compare" style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
            Why us
          </a>
          <a href="#cases" style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
            Recent buys
          </a>
          <a href="#faq" style={{ color: "var(--ink-soft)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
            FAQ
          </a>
        </nav>

        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <a
            href="tel:9522348099"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "var(--ink)",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
            className="nav-phone"
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#5A6B3F",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            952-234-8099
          </a>
          <button
            onClick={() => openOffer()}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: 0,
              background: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background .15s, transform .15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--blue)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Get offer →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
          .nav-phone { display: none !important; }
        }
      `}</style>
    </header>
  );
}
