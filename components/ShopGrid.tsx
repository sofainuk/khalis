"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { categories, type Product } from "@/lib/products";

export default function ShopGrid({ products }: { products: Product[] }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <div>
      <div role="tablist" aria-label="Filter products" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map((c) => {
          const active = c === cat;
          const count = c === "All" ? products.length : products.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 ${
                active ? "bg-forest-800 text-cream-50 shadow-lg shadow-forest-900/25" : "bg-white text-bark-700 ring-1 ring-cream-300 hover:ring-forest-500"
              }`}
            >
              {c}
              <span className={`ml-2 rounded-full px-1.5 py-0.5 text-[0.68rem] ${active ? "bg-white/15" : "bg-cream-100"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div key={cat} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={p.slug} className="animate-pop-in" style={{ animationDelay: `${i * 60}ms` }}>
            <ProductCard product={p} priority={i < 3} />
          </div>
        ))}
      </div>
    </div>
  );
}
