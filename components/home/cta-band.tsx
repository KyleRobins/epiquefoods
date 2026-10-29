import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-burgundy px-6 py-14 text-center text-cream sm:px-12">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-cream/10 blur-2xl" />
          <h2 className="font-display text-3xl sm:text-4xl">Have a question before you order?</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Chat with us directly on WhatsApp for pricing, bulk orders, or delivery details.
          </p>
          <Button
            size="lg"
            className="mt-7 h-12 rounded-full bg-cream px-6 text-base text-burgundy hover:bg-cream/90"
            nativeButton={false}
            render={<Link href={buildGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer" />}
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
