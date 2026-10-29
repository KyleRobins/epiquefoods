import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-display text-4xl text-ink">Terms of service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>

      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-display text-xl text-ink">Ordering</h2>
          <p className="mt-2">
            This website is a catalogue for browsing Epique Foods products. Adding items to your
            cart and selecting &ldquo;Checkout via WhatsApp&rdquo; opens a pre-filled WhatsApp
            message to our business number — it is a request to order, not a confirmed purchase.
            Orders are confirmed, and pricing and availability finalised, directly with our team
            over WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Pricing</h2>
          <p className="mt-2">
            Prices shown are in Kenyan Shillings (KES) and are indicative; some products are
            priced on request due to seasonal availability. We&apos;ll always confirm final
            pricing before your order is processed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Delivery</h2>
          <p className="mt-2">
            Doorstep delivery is available at a fee, arranged and confirmed with our team at the
            time of ordering.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Product information</h2>
          <p className="mt-2">
            We describe our products accurately to the best of our knowledge. As natural,
            minimally processed foods, slight variation in colour, texture or taste between
            batches is normal.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Reach us at{" "}
            <a href="mailto:hello@epiquefoods.co.ke" className="text-forest underline">
              hello@epiquefoods.co.ke
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
