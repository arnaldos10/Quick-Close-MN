import BrandMark from "@/app/illustrations/BrandMark";
import PineMark from "@/app/illustrations/PineMark";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        paddingTop: "clamp(60px, 8vw, 96px)",
        paddingBottom: 40,
      }}
    >
      <div
        className="wrap ft-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        {/* Col 1 — Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <BrandMark size={28} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 18,
                color: "var(--cream)",
              }}
            >
              Quick Close Home Buyers
            </span>
          </div>
          <p
            style={{
              color: "rgba(244,239,230,.7)",
              maxWidth: 340,
              lineHeight: 1.55,
              fontSize: 15,
            }}
          >
            Local Minnesota cash home buyers. We close on every offer, on your
            timeline, with no fees.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 24, alignItems: "center", color: "var(--cream)" }}>
            <PineMark size={18} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                opacity: 0.7,
              }}
            >
              TWIN CITIES &amp; SOUTH METRO · MINNESOTA
            </span>
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              opacity: 0.6,
              marginBottom: 14,
              color: "var(--cream)",
            }}
          >
            CONTACT
          </div>
          <a
            href="tel:9522348099"
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 6,
              color: "var(--cream)",
              textDecoration: "none",
            }}
          >
            952-234-8099
          </a>
          <a
            href="mailto:info@quickclosemn.com"
            style={{
              display: "block",
              marginBottom: 14,
              color: "rgba(244,239,230,.8)",
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            info@quickclosemn.com
          </a>
          <div style={{ opacity: 0.7, fontSize: 14, lineHeight: 1.55 }}>
            Mon–Sat · 7am–7pm CT
            <br />
            Texts welcome
          </div>
        </div>

        {/* Col 3 — Explore */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              opacity: 0.6,
              marginBottom: 14,
              color: "var(--cream)",
            }}
          >
            EXPLORE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "#how",        label: "How it works" },
              { href: "#compare",    label: "Why us" },
              { href: "#situations", label: "Situations we buy" },
              { href: "#cases",      label: "Recent purchases" },
              { href: "#faq",        label: "FAQ" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(244,239,230,.8)",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 4 — Service Area */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: ".14em",
              opacity: 0.6,
              marginBottom: 14,
              color: "var(--cream)",
            }}
          >
            SERVICE AREA
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              opacity: 0.85,
              fontSize: 14,
            }}
          >
            <span>Twin Cities</span>
            <span>Burnsville · Eagan · Apple Valley</span>
            <span>Lakeville · Bloomington · Savage</span>
            <span>Prior Lake · Rosemount · Shakopee</span>
            <span
              style={{ opacity: 0.55, fontStyle: "italic", marginTop: 6 }}
            >
              South &amp; Metro MN only
            </span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="wrap"
        style={{
          borderTop: "1px solid rgba(244,239,230,.15)",
          marginTop: 48,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: ".12em",
            opacity: 0.6,
          }}
        >
          © 2026 QUICK CLOSE HOME BUYERS LLC · ALL RIGHTS RESERVED
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "Accessibility"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                opacity: 0.7,
                fontSize: 13,
                color: "var(--cream)",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .ft-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
