interface Props {
  height?: number;
  mono?: boolean; // single-color mode (for embroidery preview)
}

export default function Logo({ height = 40, mono = false }: Props) {
  const ink = mono ? "currentColor" : "var(--ink)";
  const fill = mono ? "currentColor" : "var(--blue)";
  const accent = mono ? "currentColor" : "var(--terra)";
  const light = mono ? "transparent" : "var(--cream)";
  const muted = mono ? "currentColor" : "var(--ink-mute)";

  const iconW = 44;
  const totalW = 240;
  const totalH = 44;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      height={height}
      width={(height / totalH) * totalW}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Quick Close MN"
    >
      {/* ── House monogram mark ── */}

      {/* Roof */}
      <path
        d={`M${iconW / 2} 2 L${iconW - 2} 18 L2 18 Z`}
        fill={fill}
        stroke={fill}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Chimney */}
      <rect x="30" y="5" width="5" height="9" rx="1" fill={accent} />

      {/* House body */}
      <rect x="3" y="18" width={iconW - 6} height="24" rx="2" fill={fill} />

      {/* QC letters inside house */}
      <text
        x={iconW / 2}
        y="35"
        fontFamily="var(--font-display)"
        fontWeight="800"
        fontSize="14"
        fill={light}
        textAnchor="middle"
        letterSpacing="-0.04em"
      >
        QC
      </text>

      {/* ── Wordmark ── */}
      <text
        x={iconW + 10}
        y="22"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="20"
        fill={ink}
        letterSpacing="-0.03em"
      >
        Quick Close
      </text>
      <text
        x={iconW + 10}
        y="36"
        fontFamily="var(--font-mono)"
        fontWeight="500"
        fontSize="9"
        fill={muted}
        letterSpacing="0.18em"
      >
        MINNESOTA
      </text>
    </svg>
  );
}
