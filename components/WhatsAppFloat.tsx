"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { generalMessage, waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`wa-float group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-700 ease-out sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-75 opacity-0"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="pointer-events-none hidden origin-right scale-90 rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:block">
        Chat &amp; order
      </span>
      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.65)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </span>
    </a>
  );
}
