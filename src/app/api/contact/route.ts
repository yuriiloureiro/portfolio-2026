export {};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const RESEND_KEY = process.env.RESEND_API_KEY;
if (!RESEND_KEY) {
  console.warn(
    "Warning: RESEND_API_KEY is not set. The contact API will fail until you add it to .env.local / environment variables.",
  );
}
const resend = new Resend(RESEND_KEY || "");

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  if (!RESEND_KEY) {
    return NextResponse.json(
      { error: "Server misconfiguration: missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  try {
    const body: Body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email and message are required.",
        },
        { status: 400 },
      );
    }

    const from = process.env.EMAIL_FROM || `onboarding@resend.dev`;
    const to = process.env.EMAIL_TO || from;

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Arial, sans-serif; color:#111">
        <h2 style="margin-bottom:8px">New contact from portfolio</h2>
        <p style="margin:4px 0"><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p style="margin:4px 0"><strong>Phone:</strong> ${escapeHtml(body.phone || "—")}</p>
        <p style="margin:4px 0"><strong>Service:</strong> ${escapeHtml(body.service || "—")}</p>
        <hr style="margin:12px 0" />
        <div style="white-space:pre-wrap">${escapeHtml(body.message)}</div>
      </div>
    `;

    await resend.emails.send({
      from,
      to,
      subject: `New message from ${body.name} — Portfolio Contact`,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
