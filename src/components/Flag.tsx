type FlagProps = {
  country: "us" | "mx";
  className?: string;
};

export function Flag({ country, className = "" }: FlagProps) {
  const common = "h-4 w-[22px] shrink-0 rounded-[2px] shadow-sm";

  if (country === "mx") {
    return (
      <svg
        viewBox="0 0 24 16"
        className={`${common} ${className}`}
        role="img"
        aria-label="Mexico"
      >
        <rect width="24" height="16" fill="#fff" />
        <rect width="8" height="16" fill="#006847" />
        <rect x="16" width="8" height="16" fill="#ce1126" />
        <circle cx="12" cy="8" r="2" fill="#8b5a2b" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 16"
      className={`${common} ${className}`}
      role="img"
      aria-label="United States"
    >
      <rect width="24" height="16" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * (16 / 13)} width="24" height={16 / 13} fill="#b22234" />
      ))}
      <rect width="10" height="8.6" fill="#3c3b6e" />
    </svg>
  );
}
