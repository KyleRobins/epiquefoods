"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatKes } from "@/lib/utils";
import { buildCartOrderUrl } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, subtotal, setQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <ShoppingBag className="size-10 text-muted-foreground" />
        <h1 className="font-display text-3xl text-ink">Your cart is empty</h1>
        <p className="text-muted-foreground">Browse our range and add something nourishing.</p>
        <Button
          size="lg"
          className="mt-2 h-12 rounded-full px-6"
          nativeButton={false}
          render={<Link href="/products" />}
        >
          Shop products
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-ink">Your cart</h1>

      <div className="mt-8 flex flex-col gap-5">
        {items.map((item) => (
          <div
            key={`${item.slug}-${item.size}`}
            className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4"
          >
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
              <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <Link href={`/products/${item.slug}`} className="truncate font-medium hover:underline">
                {item.name}
              </Link>
              <p className="text-sm text-muted-foreground">{item.size}</p>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-border px-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                onClick={() => setQty(item.slug, item.size, item.qty - 1)}
              >
                <Minus className="size-3.5" />
              </button>
              <span className="min-w-6 text-center text-sm tabular-nums">{item.qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                onClick={() => setQty(item.slug, item.size, item.qty + 1)}
              >
                <Plus className="size-3.5" />
              </button>
            </div>

            <div className="w-28 text-right">
              {item.priceKes ? (
                <span className="font-display text-lg text-burgundy">
                  {formatKes(item.priceKes * item.qty)}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">Price on request</span>
              )}
            </div>

            <button
              type="button"
              aria-label="Remove item"
              className="text-muted-foreground hover:text-secondary"
              onClick={() => removeItem(item.slug, item.size)}
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4 border-t border-border pt-6">
        <div className="flex w-full max-w-xs items-center justify-between text-base">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-display text-xl">{formatKes(subtotal)}</span>
        </div>
        <p className="max-w-xs text-right text-xs text-muted-foreground">
          Items marked &ldquo;price on request&rdquo; aren&apos;t included in the subtotal —
          we&apos;ll confirm pricing on WhatsApp.
        </p>
        <Button
          size="lg"
          className="h-12 w-full max-w-xs rounded-full px-6 text-base"
          nativeButton={false}
          render={<a href={buildCartOrderUrl(items)} target="_blank" rel="noopener noreferrer" />}
        >
          Checkout via WhatsApp
        </Button>
      </div>
    </div>
  );
}
