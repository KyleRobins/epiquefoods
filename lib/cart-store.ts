import {
  type CartItem,
  cartItemKey,
  readCartFromStorage,
  writeCartToStorage,
} from "@/lib/cart";

const EMPTY_CART: CartItem[] = [];
const listeners = new Set<() => void>();

// Lazily hydrated on first client read — stays null through SSR since
// localStorage isn't available there.
let cartState: CartItem[] | null = null;

function emit() {
  for (const listener of listeners) listener();
}

function setCart(updater: (prev: CartItem[]) => CartItem[]) {
  cartState = updater(cartState ?? []);
  writeCartToStorage(cartState);
  emit();
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot(): CartItem[] {
  if (cartState === null) {
    cartState = readCartFromStorage();
  }
  return cartState;
}

export function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

export function addItem(item: Omit<CartItem, "qty"> & { qty?: number }) {
  setCart((prev) => {
    const key = cartItemKey(item.slug, item.size);
    const existing = prev.find((p) => cartItemKey(p.slug, p.size) === key);
    const qtyToAdd = item.qty ?? 1;
    if (existing) {
      return prev.map((p) =>
        cartItemKey(p.slug, p.size) === key ? { ...p, qty: p.qty + qtyToAdd } : p
      );
    }
    return [...prev, { ...item, qty: qtyToAdd }];
  });
}

export function removeItem(slug: string, size: string) {
  setCart((prev) => prev.filter((p) => cartItemKey(p.slug, p.size) !== cartItemKey(slug, size)));
}

export function setQty(slug: string, size: string, qty: number) {
  setCart((prev) => {
    if (qty <= 0) {
      return prev.filter((p) => cartItemKey(p.slug, p.size) !== cartItemKey(slug, size));
    }
    return prev.map((p) =>
      cartItemKey(p.slug, p.size) === cartItemKey(slug, size) ? { ...p, qty } : p
    );
  });
}

export function clear() {
  setCart(() => []);
}
