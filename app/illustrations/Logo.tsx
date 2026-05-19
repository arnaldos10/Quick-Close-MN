interface Props {
  height?: number;
}

export default function Logo({ height = 32 }: Props) {
  return (
    <svg
      viewBox="0 0 210 40"
      height={height}
      width={(height / 40) * 210}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Quick Close MN"
    >
      {/* House icon */}
      {/* Roof */}
      <path d="M4 18L20 6L36 18" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Walls */}
      <rect x="8" y="18" width="24" height="16" rx="1.5" fill="var(--blue)" />
      {/* Door */}
      <rect x="16" y="26" width="8" height="8" rx="1" fill="var(--cream)" />
      {/* Chimney */}
      <rect x="26" y="10" width="4" height="7" rx="1" fill="var(--terra)" />

      {/* Wordmark */}
      <text
        x="46"
        y="24"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="20"
        fill="var(--ink)"
        letterSpacing="-0.03em"
      >
        Quick Close
      </text>
      {/* MN */}
      <text
        x="46"
        y="35"
        fontFamily="var(--font-mono)"
        fontWeight="500"
        fontSize="9"
        fill="var(--ink-mute)"
        letterSpacing="0.18em"
      >
        MINNESOTA
      </text>
    </svg>
  );
}
