interface Props { variant?: number }

const PALETTES = [
  { roof: "#1C3D5A", wall: "#ECE4D4", door: "#C66B3D" },
  { roof: "#5A6B3F", wall: "#F4EFE6", door: "#1C3D5A" },
  { roof: "#9E4F26", wall: "#ECE4D4", door: "#1C3D5A" },
];

export default function CaseIllustration({ variant = 0 }: Props) {
  const p = PALETTES[variant % 3];
  return (
    <svg
      viewBox="0 0 320 200"
      width="100%"
      height="100%"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="320" height="200" fill="#E6EEF4" />
      {/* ground */}
      <rect x="0" y="150" width="320" height="50" fill="#ECE4D4" />
      {/* trees */}
      <polygon
        points="36,160 56,108 76,160"
        fill="#5A6B3F"
        opacity={variant === 1 ? 1 : 0.55}
      />
      <polygon
        points="264,160 284,116 304,160"
        fill="#5A6B3F"
        opacity={variant === 2 ? 1 : 0.55}
      />
      {variant === 1 && (
        <polygon points="78,160 92,124 106,160" fill="#5A6B3F" opacity="0.75" />
      )}
      {/* house */}
      <rect
        x="110"
        y="110"
        width="100"
        height="50"
        fill={p.wall}
        stroke="#15171C"
        strokeWidth="1"
      />
      <polygon points="100,110 160,68 220,110" fill={p.roof} />
      <rect x="150" y="132" width="18" height="28" fill={p.door} />
      <rect
        x="120"
        y="122"
        width="18"
        height="18"
        fill="#E6EEF4"
        stroke="#15171C"
        strokeWidth=".8"
      />
      <rect
        x="180"
        y="122"
        width="18"
        height="18"
        fill="#E6EEF4"
        stroke="#15171C"
        strokeWidth=".8"
      />
    </svg>
  );
}
