"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validations";
import { isRateLimited } from "@/lib/rate-limit";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
}

async function getClientKey(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const clientKey = await getClientKey();

  if (isRateLimited(clientKey)) {
    return {
      status: "error",
      message: "You're sending messages too quickly. Please wait a minute and try again.",
    };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    company: formData.get("company"), // honeypot
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form for errors.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot tripped — pretend success so bots don't learn anything, but never send.
  if (parsed.data.company) {
    return { status: "success" };
  }

  const { name, email, phone, message } = parsed.data;

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "Epique Foods Website <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `New enquiry from ${name}`,
        text: `From: ${name} <${email}>\nPhone: ${phone || "—"}\n\n${message}`,
      });
    } catch {
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try WhatsApp instead.",
      };
    }
  } else {
    // Email sending isn't configured yet — log so the submission isn't silently lost
    // during setup, and still confirm success to the visitor.
    console.info("[contact] RESEND_API_KEY/CONTACT_TO_EMAIL not set — enquiry:", {
      name,
      email,
      phone,
      message,
    });
  }

  return { status: "success", message: "Thanks! We'll be in touch shortly." };
}
