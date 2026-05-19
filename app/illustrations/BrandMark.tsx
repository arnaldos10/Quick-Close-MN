interface Props { size?: number }

export default function BrandMark({ size = 28 }: Props) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#1C3D5A" />
      <polygon points="14,38 32,18 50,38" fill="#F4EFE6" />
      <rect x="20" y="38" width="24" height="14" fill="#F4EFE6" />
      <rect x="30" y="42" width="6" height="10" fill="#1C3D5A" />
      <rect x="22" y="40" width="5" height="5" fill="#1C3D5A" />
      <rect x="37" y="40" width="5" height="5" fill="#1C3D5A" />
    </svg>
  );
}
