interface Props {
  color?: string;
  height?: number;
  opacity?: number;
}

export default function WaveBand({ color = "#1C3D5A", height = 28, opacity = 1 }: Props) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      width="100%"
      height={height}
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <path
        d="M0 20 Q 100 4, 200 20 T 400 20 T 600 20 T 800 20 T 1000 20 T 1200 20 V40 H0 Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}
