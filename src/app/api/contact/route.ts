import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_ADDRESS = "neo.pinwheel@gmail.com";
const FROM_ADDRESS = "SyncME Vault <onboarding@resend.dev>";
const QUERY_TYPES = [
  "General question",
  "Press & media",
  "Partnership",
  "Investor",
  "Support",
  "Other",
];

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, unknown>;
  const cleanName = clean(name, 100);
  const cleanEmail = clean(email, 200);
  const cleanSubject = QUERY_TYPES.includes(clean(subject, 50))
    ? clean(subject, 50)
    : QUERY_TYPES[0];
  const cleanMessage = typeof message === "string" ? message.trim().slice(0, 5000) : "";

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }
  if (!EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: cleanEmail,
      subject: `[${cleanSubject}] SyncME Vault contact form — ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nQuery type: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
