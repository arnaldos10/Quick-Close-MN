type Tone = "blue" | "terra" | "moss" | "blue-2";

interface Props {
  initials: string;
  tone?: Tone;
}

const BG: Record<Tone, string> = {
  blue:    "#1C3D5A",
  terra:   "#C66B3D",
  moss:    "#5A6B3F",
  "blue-2": "#3C6B91",
};

export default function AvatarBlock({ initials, tone = "blue" }: Props) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: BG[tone] ?? BG.blue,
        color: "#F4EFE6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: ".02em",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
