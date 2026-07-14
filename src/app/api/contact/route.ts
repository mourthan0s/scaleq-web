import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Integration point: set CONTACT_WEBHOOK_URL in the environment to forward
 * submissions to email, a CRM or any webhook (Zapier/Make/n8n/custom).
 * Until it is configured, valid submissions are accepted and logged server-side
 * so the form remains fully functional in every environment.
 */

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
    locale: body.locale === "en" ? "en" : "el",
    submittedAt: new Date().toISOString(),
  };

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
      console.error("[contact] webhook delivery failed:", error);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } else {
    // No delivery channel configured yet — keep a server-side record.
    console.info("[contact] submission received (no CONTACT_WEBHOOK_URL configured):", data);
  }

  return NextResponse.json({ ok: true });
}
