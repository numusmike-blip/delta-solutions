type LogoProps = {
  theme?: "color" | "light";
  className?: string;
};

export function LogoMark({ theme = "color", className }: LogoProps) {
  const triangleColor = theme === "light" ? "#ffffff" : "var(--navy-900)";
  const arrowColor = theme === "light" ? "var(--amber-300)" : "var(--amber-500)";

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 33 L20 7 L34 33 Z"
        stroke={triangleColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M11 33 C 18 33, 24 28, 27 20 L32 8"
        stroke={arrowColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M32 8 L33.5 15 M32 8 L25.5 10.5" stroke={arrowColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ theme = "color", className }: LogoProps) {
  const textColor = theme === "light" ? "text-white" : "text-navy-900";
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark theme={theme} className="h-9 w-9 shrink-0" />
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
        Delta Solutions
      </span>
    </span>
  );
}
