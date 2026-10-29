import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with Epique Foods for orders, bulk pricing, or general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
          — Contact
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Get in <span className="text-forest italic">touch</span>
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Questions about an order, bulk pricing, or just want to say hello? Send us a message or
          reach us directly on WhatsApp.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <Reveal delay={0.08} className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.14} className="lg:col-span-2">
          <div className="flex flex-col gap-5 rounded-3xl bg-forest p-7 text-cream">
            <a
              href={buildGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-cream/10 p-4 transition-colors hover:bg-cream/15"
            >
              <MessageCircle className="size-5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">Chat on WhatsApp</p>
                <p className="text-xs text-cream/70">Fastest way to reach us</p>
              </div>
            </a>

            <a href="tel:+254747175780" className="flex items-center gap-3 p-4">
              <Phone className="size-5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">0747 175 780</p>
                <p className="text-xs text-cream/70">Call or WhatsApp</p>
              </div>
            </a>

            <a href="mailto:hello@epiquefoods.co.ke" className="flex items-center gap-3 p-4">
              <Mail className="size-5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">hello@epiquefoods.co.ke</p>
                <p className="text-xs text-cream/70">For enquiries &amp; partnerships</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4">
              <MapPin className="size-5 shrink-0" />
              <div>
                <p className="text-sm font-semibold">Nairobi, Kenya</p>
                <p className="text-xs text-cream/70">Doorstep delivery available</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
