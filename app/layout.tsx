import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import { CSPProvider } from "@base-ui/react/csp-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/components/cart/cart-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fontSans = Schibsted_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Epique Foods | Healthy, Organic & Nutritious",
    template: "%s | Epique Foods",
  },
  description:
    "Epique Foods is a Kenyan agro-processing company crafting healthy, organic and nutritious porridge flours, natural powders and spices — made to nourish families and support healthy living.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://epiquefoods.co.ke"),
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <CSPProvider nonce={nonce}>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
        </CSPProvider>
      </body>
    </html>
  );
}
