import Link from "next/link";
import ProductImage from "./ProductImage";
import { ArrowRight, WhatsAppIcon } from "./Icons";
import { formatPrice, startingPrice, type Product } from "@/lib/products";
import { orderMessage, waLink } from "@/lib/whatsapp";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const first = product.sizes[0];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_0_0_rgba(46,29,16,0.04),0_18px_40px_-24px_rgba(46,29,16,0.35)] ring-1 ring-cream-300/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(31,61,43,0.55)]">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden" aria-label={`View ${product.name}`}>
        <ProductImage product={product} priority={priority} />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-forest-900/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-jag-300 backdrop-blur">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-white/90 text-forest-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-jag-600">{product.category}</p>
        <h3 className="font-display mt-1 text-xl font-semibold leading-snug text-forest-900">
          <Link href={`/shop/${product.slug}`} className="hover:text-forest-600">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-medium text-bark-500">{product.localName}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-bark-700/90">{product.short}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span key={s.label} className="rounded-full bg-cream-100 px-2.5 py-1 text-xs font-semibold text-bark-700 ring-1 ring-cream-300">
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-bark-500">From</span>
            <span className="font-display text-2xl font-semibold text-forest-800">{formatPrice(startingPrice(product))}</span>
          </div>
          <a
            href={waLink(orderMessage(product.name, first.label, 1))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-forest-950 shadow-md shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
