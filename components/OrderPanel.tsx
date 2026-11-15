"use client";

import { useState } from "react";
import { CheckIcon, MinusIcon, PlusIcon, WhatsAppIcon } from "./Icons";
import { formatPrice, type Product } from "@/lib/products";
import { orderMessage, waLink } from "@/lib/whatsapp";

export default function OrderPanel({ product }: { product: Product }) {
  const [idx, setIdx] = useState(Math.min(1, product.sizes.length - 1));
  const [qty, setQty] = useState(1);
  const size = product.sizes[idx];
  const total = size.price * qty;

  return (
    <div className="rounded-3xl bg-white p-5 shadow-[0_24px_60px_-30px_rgba(31,61,43,0.5)] ring-1 ring-cream-300 sm:p-7">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-bark-500" id="pack-label">Choose pack size</h2>
        <p className="font-display text-3xl font-semibold text-forest-800" aria-live="polite">{formatPrice(size.price)}</p>
      </div>

      <div role="radiogroup" aria-labelledby="pack-label" className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {product.sizes.map((s, i) => {
          const active = i === idx;
          return (
            <button
              key={s.label}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setIdx(i)}
              className={`relative rounded-2xl border-2 px-3 py-3 text-left transition-all duration-300 active:scale-95 ${
                active ? "border-forest-700 bg-forest-100 shadow-inner" : "border-cream-300 bg-cream-50 hover:border-forest-500/60"
              }`}
            >
              <span className="block text-base font-bold text-forest-900">{s.label}</span>
              <span className="block text-sm text-bark-500">{formatPrice(s.price)}</span>
              {active && (
                <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-forest-700 text-white">
                  <CheckIcon className="h-3 w-3" strokeWidth={3} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-bark-500">Quantity</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-cream-100 p-1 ring-1 ring-cream-300">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest-800 shadow transition active:scale-90 disabled:opacity-40" disabled={qty <= 1}>
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-lg font-bold tabular-nums text-forest-900" aria-live="polite">{qty}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(20, q + 1))} className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest-800 shadow transition active:scale-90">
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-cream-100 px-4 py-3 text-sm">
        <span className="text-bark-700">
          {qty} × {size.label}
        </span>
        <span className="font-display text-xl font-semibold text-forest-900">{formatPrice(total)}</span>
      </div>

      <a
        href={waLink(orderMessage(product.name, size.label, qty))}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mt-5 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-forest-950 shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98]"
      >
        <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-[120%]" />
        <WhatsAppIcon className="relative h-6 w-6" />
        <span className="relative">Order Now on WhatsApp</span>
      </a>
      <p className="mt-3 text-center text-xs text-bark-500">
        Opens WhatsApp with your order pre-filled. We confirm availability, payment and delivery there.
      </p>
    </div>
  );
}
