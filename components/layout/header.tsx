"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { NavLink } from "@/components/layout/nav-link";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useCart } from "@/components/cart/cart-provider";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-cream/90 backdrop-blur-md supports-backdrop-filter:bg-cream/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md border border-ink/15 px-3 py-1.5 transition-colors hover:border-ink/30"
        >
          <Image
            src="/icon.png"
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.08em] text-ink uppercase">
              Epique Foods
            </span>
            <span className="mt-1 text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              Since the heart of Kenya
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
            className="flex h-10 items-center gap-2 rounded-full border border-ink/15 px-3.5 text-foreground transition-colors hover:border-ink/30 hover:bg-accent"
          >
            <ShoppingBag className="size-4" />
            <span className="hidden text-xs font-medium tracking-[0.1em] uppercase sm:inline">
              Cart
            </span>
            <span className="flex size-4 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground">
              {count}
            </span>
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="ml-1 flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xs">
          <SheetHeader className="flex-row items-center justify-between border-b border-border">
            <SheetTitle className="font-display text-lg">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4 py-2">
            {NAV_LINKS.map((link) => (
              <SheetClose key={link.href} render={<Link href={link.href} />} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent">
                {link.label}
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
