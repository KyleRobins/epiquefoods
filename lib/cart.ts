export interface CartItem {
  slug: string;
  name: string;
  size: string;
  priceKes?: number;
  qty: number;
  image: string;
}

export const CART_STORAGE_KEY = "epique-cart";

export function readCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        item &&
        typeof item.slug === "string" &&
        typeof item.name === "string" &&
        typeof item.size === "string" &&
        typeof item.qty === "number"
    );
  } catch {
    return [];
  }
}

export function writeCartToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — cart stays in-memory only
  }
}

export function cartItemKey(slug: string, size: string): string {
  return `${slug}__${size}`;
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.priceKes ?? 0) * item.qty, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.qty, 0);
}
