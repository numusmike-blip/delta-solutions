import Link from "next/link";
import { foundingMembers } from "@/data/site";

export function FoundingBanner() {
  const { totalSpots, spotsRemaining } = foundingMembers;

  return (
    <div className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 text-center text-xs font-medium sm:text-sm">
        <span className="text-amber-400">●</span>
        <span>
          We're keeping this personal — real attention, no outsourcing. That only works
          for the first {totalSpots} businesses at founding rates.
        </span>
        <Link href="/pricing" className="font-semibold text-amber-400 underline underline-offset-2 hover:text-amber-300">
          {spotsRemaining} of {totalSpots} spots remaining →
        </Link>
      </div>
    </div>
  );
}

export function FoundingCallout() {
  const { totalSpots, spotsRemaining } = foundingMembers;
  const filled = totalSpots - spotsRemaining;

  return (
    <div className="rounded-2xl border border-amber-400/30 bg-navy-900 p-8 text-white sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
        Founding member rates
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
        {spotsRemaining} of {totalSpots} spots left
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
        We're keeping this personal — real attention, no outsourcing, no account managers.
        That only works for the first {totalSpots} businesses we take on at these rates.
        After that, prices adjust to protect the quality of attention everyone gets —
        including you.
      </p>
      <div className="mt-6 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-amber-400"
          style={{ width: `${(filled / totalSpots) * 100}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-white/50">
        {filled} of {totalSpots} founding spots filled
      </p>
    </div>
  );
}
