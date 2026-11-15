"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/whatsapp";

/** No backend needed: builds a WhatsApp link from the typed message. */
export default function QuickMessage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const text = [
    "Hello Khalis Kothi!",
    name.trim() ? `My name is ${name.trim()}.` : "",
    msg.trim() || "I'd like to know more about your products.",
  ].filter(Boolean).join("\n");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(text), "_blank", "noopener,noreferrer");
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="qm-name" className="mb-1.5 block text-sm font-bold text-forest-900">Your name</label>
        <input id="qm-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="e.g. Ayesha" className="w-full rounded-2xl border-2 border-cream-300 bg-cream-50 px-4 py-3.5 text-base text-bark-900 outline-none transition focus:border-forest-600 focus:bg-white" />
      </div>
      <div>
        <label htmlFor="qm-msg" className="mb-1.5 block text-sm font-bold text-forest-900">Your message</label>
        <textarea id="qm-msg" value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="What would you like to order or ask?" className="w-full resize-none rounded-2xl border-2 border-cream-300 bg-cream-50 px-4 py-3.5 text-base text-bark-900 outline-none transition focus:border-forest-600 focus:bg-white" />
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-forest-950 shadow-xl shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]">
        <WhatsAppIcon className="h-6 w-6" /> Send on WhatsApp
      </button>
    </form>
  );
}
