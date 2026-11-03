type BlinkingDotProps = {
  height?: string;
  width?: string;
  color?: string;
  className?: string;
};

export default function BlinkingDot({
  height = "h-3",
  width = "w-3",
  color = "bg-orange",
  className = "",
}: BlinkingDotProps) {
  const isTailwind = color.startsWith("bg-");
  const colorClass = isTailwind ? color : "";
  const colorStyle = isTailwind ? undefined : { backgroundColor: color };

  return (
    <span className={`relative flex ${height} ${width} ${className}`}>
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorClass}`}
        style={colorStyle}
      />
      <span
        className={`relative inline-flex h-full w-full rounded-full ${colorClass}`}
        style={colorStyle}
      />
    </span>
  );
}