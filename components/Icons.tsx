import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.04 3C8.84 3 3 8.8 3 15.95c0 2.28.6 4.5 1.74 6.46L3 29l6.76-1.7a13.1 13.1 0 0 0 6.28 1.6C23.2 28.9 29 23.1 29 15.95 29 8.8 23.2 3 16.04 3Zm0 23.7c-1.96 0-3.88-.52-5.56-1.5l-.4-.24-4.02 1 1.08-3.9-.26-.4a10.6 10.6 0 0 1-1.66-5.7c0-5.86 4.8-10.62 10.72-10.62 5.9 0 10.7 4.76 10.7 10.62 0 5.84-4.8 10.74-10.6 10.74Zm5.9-7.96c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.5-.16-.72.16-.2.32-.84 1.04-1.02 1.26-.2.2-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6a9.6 9.6 0 0 1-1.78-2.2c-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.2-.32.32-.54.1-.2.06-.4-.02-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.54-.72-.54h-.6c-.2 0-.56.08-.84.4-.3.32-1.12 1.1-1.12 2.66 0 1.56 1.14 3.08 1.3 3.3.16.2 2.24 3.4 5.4 4.76.76.32 1.34.52 1.8.66.76.24 1.44.2 2 .12.6-.1 1.9-.78 2.16-1.52.26-.74.26-1.38.18-1.52-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export const ArrowRight = (p: P) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const MenuIcon = (p: P) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = (p: P) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const PhoneIcon = (p: P) => (<svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
export const PinIcon = (p: P) => (<svg {...base} {...p}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const LeafIcon = (p: P) => (<svg {...base} {...p}><path d="M5 19c0-8 5-13 15-14 0 10-5 15-13 15" /><path d="M5 19c3-4 6-7 10-9" /></svg>);
export const FlameIcon = (p: P) => (<svg {...base} {...p}><path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9Z" /></svg>);
export const HandIcon = (p: P) => (<svg {...base} {...p}><path d="M7 11V6a1.5 1.5 0 0 1 3 0v4m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V12m0-3a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-3-5a1.5 1.5 0 0 1 2.5-1.6L7 14" /></svg>);
export const TruckIcon = (p: P) => (<svg {...base} {...p}><path d="M2 6h11v10H2zM13 10h4l4 3v3h-8" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>);
export const SparkIcon = (p: P) => (<svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>);
export const CheckIcon = (p: P) => (<svg {...base} {...p}><path d="M5 12.5 10 17.5 19 7" /></svg>);
export const MinusIcon = (p: P) => (<svg {...base} {...p}><path d="M5 12h14" /></svg>);
export const PlusIcon = (p: P) => (<svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const InstagramIcon = (p: P) => (<svg {...base} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="0.8" fill="currentColor" /></svg>);
export const FacebookIcon = (p: P) => (<svg {...base} {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8Z" /></svg>);
export const ClockIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const ChevronDown = (p: P) => (<svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>);
