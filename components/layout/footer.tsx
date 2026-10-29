import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">Epique Foods</p>
            <p className="mt-2 text-sm italic text-cream/70">Healthy, Organic &amp; Nutritious</p>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Kenyan agro-processed foods — wholesome, organic and nutritious, made to nourish
              families and support healthy lifestyles.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-cream/90 uppercase">Shop</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/70">
              {categories.map((c) => (
                <li key={c.key}>
                  <Link href={`/products?category=${c.key}`} className="transition-colors hover:text-cream">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-cream/90 uppercase">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/70">
              <li>
                <Link href="/about" className="transition-colors hover:text-cream">About us</Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-cream">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-cream">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-cream">Terms of service</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-cream/90 uppercase">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href="tel:+254747175780" className="transition-colors hover:text-cream">0747 175 780</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href="mailto:hello@epiquefoods.co.ke" className="transition-colors hover:text-cream">
                  hello@epiquefoods.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Epique Foods Limited. All rights reserved.</p>
          <p>Made with care in Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
