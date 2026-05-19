interface Props {
  w?: number | string;
  h?: number | string;
}

export default function HouseScene({ w = 360, h = 240 }: Props) {
  return (
    <svg
      viewBox="0 0 360 240"
      width={w}
      height={h}
      style={{ display: "block", maxWidth: "100%" }}
      aria-hidden="true"
    >
      {/* sky */}
      <rect x="0" y="0" width="360" height="240" fill="#E6EEF4" />
      {/* sun */}
      <circle cx="290" cy="58" r="26" fill="#D4A845" />
      {/* far pines */}
      <polygon points="40,170 60,120 80,170" fill="#5A6B3F" opacity="0.55" />
      <polygon points="70,170 92,110 114,170" fill="#5A6B3F" opacity="0.55" />
      <polygon points="240,170 264,118 288,170" fill="#5A6B3F" opacity="0.55" />
      <polygon points="278,170 298,128 318,170" fill="#5A6B3F" opacity="0.55" />
      {/* water line */}
      <path
        d="M0 168 Q 60 160, 120 168 T 240 168 T 360 168 L 360 200 L 0 200 Z"
        fill="#6FA0C4"
        opacity="0.35"
      />
      {/* ground */}
      <rect x="0" y="180" width="360" height="60" fill="#F4EFE6" />
      <rect x="0" y="180" width="360" height="1" fill="#15171C" opacity="0.1" />
      {/* house: body */}
      <rect
        x="130"
        y="130"
        width="120"
        height="60"
        fill="#F4EFE6"
        stroke="#15171C"
        strokeWidth="1.2"
      />
      {/* roof */}
      <polygon points="120,130 190,82 260,130" fill="#1C3D5A" />
      {/* chimney */}
      <rect x="230" y="92" width="12" height="20" fill="#1C3D5A" />
      {/* door */}
      <rect x="178" y="158" width="20" height="32" fill="#C66B3D" />
      <circle cx="194" cy="174" r="1.2" fill="#15171C" />
      {/* window left */}
      <rect
        x="142"
        y="146"
        width="22"
        height="22"
        fill="#E6EEF4"
        stroke="#15171C"
        strokeWidth="1"
      />
      <line x1="153" y1="146" x2="153" y2="168" stroke="#15171C" strokeWidth=".6" />
      <line x1="142" y1="157" x2="164" y2="157" stroke="#15171C" strokeWidth=".6" />
      {/* window right */}
      <rect
        x="214"
        y="146"
        width="22"
        height="22"
        fill="#E6EEF4"
        stroke="#15171C"
        strokeWidth="1"
      />
      <line x1="225" y1="146" x2="225" y2="168" stroke="#15171C" strokeWidth=".6" />
      <line x1="214" y1="157" x2="236" y2="157" stroke="#15171C" strokeWidth=".6" />
      {/* near pine */}
      <polygon points="86,196 108,140 130,196" fill="#5A6B3F" />
      <rect x="106" y="196" width="4" height="6" fill="#15171C" opacity="0.5" />
    </svg>
  );
}
