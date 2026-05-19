type Tone = "blue" | "terra" | "moss" | "ink";

interface Props {
  tone?: Tone;
  size?: number;
}

const FILLS: Record<Tone, string> = {
  blue:  "#1C3D5A",
  terra: "#C66B3D",
  moss:  "#5A6B3F",
  ink:   "#15171C",
};

export default function HouseSilhouette({ tone = "blue", size = 64 }: Props) {
  const fill = FILLS[tone] ?? FILLS.blue;
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden="true">
      <polygon points="10,42 40,14 70,42" fill={fill} />
      <rect x="18" y="42" width="44" height="28" fill={fill} />
      <rect x="36" y="50" width="10" height="20" fill="#F4EFE6" />
      <rect x="24" y="48" width="8" height="8" fill="#F4EFE6" />
      <rect x="50" y="48" width="8" height="8" fill="#F4EFE6" />
    </svg>
  );
}
