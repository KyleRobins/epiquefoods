"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatKes } from "@/lib/utils";
import { buildCartOrderUrl } from "@/lib/whatsapp";

export function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { items, subtotal, setQty, removeItem } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="size-4 text-primary" />
            Your cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <SheetClose
              render={
                <Button
                  nativeButton={false}
                  render={<Link href="/products" />}
                  variant="secondary"
                  size="sm"
                />
              }
            >
              Browse products
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li
                    key={`${item.slug}-${item.size}`}
                    className="flex gap-3 border-b border-border/70 pb-4 last:border-none"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <p className="truncate text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-full border border-border px-1">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="flex size-6 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                            onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="min-w-4 text-center text-xs tabular-nums">{item.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="flex size-6 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                            onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        {item.priceKes ? (
                          <span className="text-sm font-medium">{formatKes(item.priceKes * item.qty)}</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Price on request</span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Remove item"
                      className="h-fit text-muted-foreground hover:text-secondary"
                      onClick={() => removeItem(item.slug, item.size)}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg">{formatKes(subtotal)}</span>
              </div>
              <Button
                nativeButton={false}
                render={<a href={buildCartOrderUrl(items)} target="_blank" rel="noopener noreferrer" />}
                className="w-full rounded-full"
                size="lg"
              >
                Checkout via WhatsApp
              </Button>
              <SheetClose
                render={
                  <Button
                    nativeButton={false}
                    render={<Link href="/cart" />}
                    variant="outline"
                    className="w-full rounded-full"
                  />
                }
              >
                View full cart
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
