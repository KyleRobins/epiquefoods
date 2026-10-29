import type { CartItem } from "@/lib/cart";
import { cartSubtotal } from "@/lib/cart";
import { formatKes } from "@/lib/utils";

const DEFAULT_WHATSAPP_NUMBER = "254747175780";

function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
}

function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildCartOrderUrl(items: CartItem[]): string {
  const lines = [
    "Hi Epique Foods! I'd like to place an order:",
    "",
    ...items.map(
      (item) =>
        `• ${item.name} (${item.size}) x${item.qty}${
          item.priceKes ? ` — ${formatKes(item.priceKes * item.qty)}` : ""
        }`
    ),
  ];

  const subtotal = cartSubtotal(items);
  if (subtotal > 0) {
    lines.push("", `Subtotal: ${formatKes(subtotal)}`);
  }
  lines.push("", "Please confirm availability and delivery details. Thank you!");

  return buildWhatsAppUrl(lines.join("\n"));
}

export function buildProductEnquiryUrl(productName: string, size?: string): string {
  const message = `Hi Epique Foods! I'd like to enquire about ${productName}${
    size ? ` (${size})` : ""
  } — availability, pricing and delivery. Thank you!`;
  return buildWhatsAppUrl(message);
}

export function buildGeneralEnquiryUrl(): string {
  return buildWhatsAppUrl("Hi Epique Foods! I'd like to find out more about your products.");
}
