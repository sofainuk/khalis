export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2c5a3d" />
          <stop offset="1" stopColor="#16301f" />
        </linearGradient>
        <linearGradient id="lm-y" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3cd78" />
          <stop offset="1" stopColor="#c98a24" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#lm-g)" />
      <circle cx="24" cy="24" r="20.5" fill="none" stroke="#efc46a" strokeOpacity="0.5" strokeDasharray="1.5 3" />
      {/* granary dome (kothi) with grain sprout */}
      <path d="M12 33c0-7 5-12 12-12s12 5 12 12Z" fill="url(#lm-y)" />
      <path d="M12 33h24v3a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2Z" fill="#a86c16" />
      <path d="M24 21c-4-1-5-5-4-8 3 0 5 3 4 8Z" fill="#8fd09f" />
      <path d="M24 21c4-1 5-5 4-8-3 0-5 3-4 8Z" fill="#5fae78" />
      <path d="M24 21v-3" stroke="#3b7551" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0 drop-shadow-sm" />
      <span className="leading-none">
        <span className={`font-display block text-[1.35rem] font-semibold tracking-tight ${light ? "text-cream-50" : "text-forest-900"}`}>
          Khalis Kothi
        </span>
        <span className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-jag-300" : "text-jag-600"}`}>
          Desi Pantry
        </span>
      </span>
    </span>
  );
}
