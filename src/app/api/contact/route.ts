import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactContent } from "@/content/contact";
import { internalNotificationEmail, autoReplyEmail } from "@/lib/email-templates";

/**
 * Contact form endpoint.
 *
 * Delivery: with RESEND_API_KEY set, every valid submission sends two
 * emails — a notification to CONTACT_TO_EMAIL (defaults to
 * info@scale-q.com) with reply-to set to the submitter for a one-click
 * reply, and an auto-reply to the submitter confirming receipt, in their
 * locale. Without RESEND_API_KEY, submissions are still accepted and
 * logged server-side so the form stays functional.
 *
 * CONTACT_WEBHOOK_URL remains available as an optional secondary forward
 * (CRM / automation) alongside email delivery.
 */

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@scale-q.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "SCALEQ Website <no-reply@scale-q.com>";

function labelFor(options: { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

interface ContactPayload {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  service?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown; // honeypot
  locale?: unknown;
}

const MAX_LENGTHS: Record<string, number> = {
  name: 200,
  company: 200,
  email: 320,
  phone: 50,
  interest: 50,
  service: 100,
  budget: 50,
  timeline: 50,
  message: 5000,
};

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; humans never see it.
  // Respond with success so bots learn nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const locale = body.locale === "en" ? "en" : "el";
  const data = {
    name: str(body.name, MAX_LENGTHS.name),
    company: str(body.company, MAX_LENGTHS.company),
    email: str(body.email, MAX_LENGTHS.email),
    phone: str(body.phone, MAX_LENGTHS.phone),
    interest: str(body.interest, MAX_LENGTHS.interest),
    service: str(body.service, MAX_LENGTHS.service),
    budget: str(body.budget, MAX_LENGTHS.budget),
    timeline: str(body.timeline, MAX_LENGTHS.timeline),
    message: str(body.message, MAX_LENGTHS.message),
    locale,
    submittedAt: new Date().toISOString(),
  } as const;

  // Server-side validation — mirrors the client but never trusts it.
  const fieldErrors: Record<string, string> = {};
  if (!data.name) fieldErrors.name = "required";
  if (!data.company) fieldErrors.company = "required";
  if (!data.email) fieldErrors.email = "required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fieldErrors.email = "invalid";
  if (!data.interest) fieldErrors.interest = "required";
  if (!data.message) fieldErrors.message = "required";
  if (body.consent !== true) fieldErrors.consent = "required";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  // Resolve dropdown values to human-readable labels for the email body.
  const c = contactContent[locale];
  const readable = {
    ...data,
    interest: labelFor(c.interests, data.interest),
    budget: data.budget ? labelFor(c.budgets, data.budget) : "",
    timeline: data.timeline ? labelFor(c.timelines, data.timeline) : "",
  };

  if (resend) {
    try {
      const notification = internalNotificationEmail(readable);
      const autoReply = autoReplyEmail(readable);

      await Promise.all([
        resend.emails.send({
          from: CONTACT_FROM_EMAIL,
          to: CONTACT_TO_EMAIL,
          replyTo: data.email,
          subject: notification.subject,
          html: notification.html,
        }),
        resend.emails.send({
          from: CONTACT_FROM_EMAIL,
          to: data.email,
          subject: autoReply.subject,
          html: autoReply.html,
        }),
      ]);
    } catch (error) {
      console.error("[contact] email delivery failed:", error);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } else {
    // No delivery channel configured yet — keep a server-side record.
    console.info("[contact] submission received (no RESEND_API_KEY configured):", data);
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "scale-q.com contact form", ...data }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      // Secondary channel — log but don't fail the request if email already succeeded.
      console.error("[contact] webhook delivery failed:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
