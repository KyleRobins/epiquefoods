import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-display text-4xl text-ink">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: October 2026</p>

      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-display text-xl text-ink">What we collect</h2>
          <p className="mt-2">
            When you use our contact form, we collect the name, email address, phone number
            (optional) and message you provide, solely to respond to your enquiry. When you build
            a cart and check out via WhatsApp, your order details are sent directly to our
            WhatsApp number through WhatsApp&apos;s own service — we do not receive or store
            payment or card information, because we don&apos;t process payments on this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Cart data</h2>
          <p className="mt-2">
            Your shopping cart is stored only in your browser&apos;s local storage on your own
            device. We cannot see or access it, and it is never transmitted to us unless you
            choose to send it via the &ldquo;Checkout via WhatsApp&rdquo; button.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">How we use your information</h2>
          <p className="mt-2">
            We use contact form submissions only to respond to your enquiry. We do not sell or
            share your information with third parties, and we do not use it for advertising.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Cookies &amp; tracking</h2>
          <p className="mt-2">
            This site does not use advertising or third-party tracking cookies. Local storage is
            used only to remember your cart between visits.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink">Contact us</h2>
          <p className="mt-2">
            Questions about this policy? Reach us at{" "}
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
