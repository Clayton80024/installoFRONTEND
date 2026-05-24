const BG_COLORS = [
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#EDE9FE", text: "#5B21B6" },
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#FEF3C7", text: "#92400E" },
  { bg: "#FCE7F3", text: "#9D174D" },
  { bg: "#CFFAFE", text: "#164E63" },
];

function getColorFromName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffff;
  }
  return BG_COLORS[Math.abs(hash) % BG_COLORS.length];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const sizeMap = {
  xs: { container: "w-6 h-6", text: "text-[9px]" },
  sm: { container: "w-8 h-8", text: "text-xs" },
  md: { container: "w-10 h-10", text: "text-sm" },
  lg: { container: "w-12 h-12", text: "text-base" },
};

interface Props {
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

export default function InitialsAvatar({ name, size = "md", className = "" }: Props) {
  const color = getColorFromName(name);
  const { container, text } = sizeMap[size];
  return (
    <div
      className={`${container} rounded-full flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ backgroundColor: color.bg }}
    >
      <span
        className={`${text} font-semibold leading-none`}
        style={{ color: color.text }}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}
