import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX = 2000;
const clean = (v: unknown) =>
  typeof v === "string" ? v.trim().slice(0, MAX) : "";

/**
 * Lead intake.
 * Always: logs a structured `LEAD_SUBMISSION` line (visible in Vercel runtime logs).
 * Optional routing, enabled only when env vars are configured:
 *   - LEAD_WEBHOOK_URL: POSTs the lead JSON (e.g. Google Apps Script → Sheet, Zapier, Make).
 *   - RESEND_API_KEY + LEAD_NOTIFY_EMAIL (+ LEAD_FROM_EMAIL): emails the site owner.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without routing them.
  if (clean(body.company_website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    zip: clean(body.zip),
    projectType: clean(body.projectType),
    budget: clean(body.budget),
    timeline: clean(body.timeline),
    message: clean(body.message),
    source: clean(body.source),
    page: clean(body.page),
    receivedAt: new Date().toISOString(),
    userAgent: (req.headers.get("user-agent") || "").slice(0, 300),
  };

  if (!lead.name || !lead.email || !lead.phone || !/^\d{5}$/.test(lead.zip) || !lead.projectType) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "bad_email" }, { status: 422 });
  }

  console.log("LEAD_SUBMISSION " + JSON.stringify(lead));

  const tasks: Promise<unknown>[] = [];
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    tasks.push(
      fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }),
    );
  }
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    const text = Object.entries(lead)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Leads <onboarding@resend.dev>",
          to: [notify],
          reply_to: lead.email,
          subject: `New décor lead: ${lead.projectType} · ${lead.zip} · ${lead.budget || "no budget"}`,
          text,
        }),
      }),
    );
  }
  const results = await Promise.allSettled(tasks);
  results.forEach((r) => {
    if (r.status === "rejected") console.error("LEAD_ROUTING_ERROR", r.reason);
  });

  return NextResponse.json({ ok: true });
}
