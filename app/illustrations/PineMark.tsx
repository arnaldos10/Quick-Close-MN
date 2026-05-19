interface Props { size?: number }

export default function PineMark({ size = 22 }: Props) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <polygon points="12,2 20,20 4,20" fill="currentColor" />
      <rect x="11" y="20" width="2" height="3" fill="currentColor" />
    </svg>
  );
}
