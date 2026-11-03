import Image from "next/image";
import usFlag from "flag-icons/flags/4x3/us.svg";
import mxFlag from "flag-icons/flags/4x3/mx.svg";

// Flags come from the flag-icons package. Only the two SVGs we use are imported,
// instead of the package's full stylesheet with every country in it.
const flags = {
  us: { src: usFlag, label: "United States" },
  mx: { src: mxFlag, label: "Mexico" },
};

export function Flag({ country, className = "" }: { country: "us" | "mx"; className?: string }) {
  const flag = flags[country];
  return (
    <Image
      src={flag.src}
      alt={flag.label}
      width={22}
      height={16}
      unoptimized
      className={`h-4 w-[22px] shrink-0 rounded-[2px] object-cover shadow-sm ${className}`}
    />
  );
}
