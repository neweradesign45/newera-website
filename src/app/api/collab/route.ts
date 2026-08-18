import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL, BRAND_NAME, BASE_URL } from "@/lib/constants";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const rateLimit = new Map<string, number[]>();

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    if (!origin.includes("neweraautomations.com") && !origin.includes("localhost")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000;
    const maxRequests = 5;
    
    const timestamps = rateLimit.get(ip) || [];
    const recentTimestamps = timestamps.filter((time) => now - time < windowMs);
    if (recentTimestamps.length >= maxRequests) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    recentTimestamps.push(now);
    rateLimit.set(ip, recentTimestamps);

    const body = await req.json();
    const { name, email, projectType, message } = body as {
      name?: string;
      email?: string;
      projectType?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      (projectType && projectType.length > 100) ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Input length limit exceeded" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType ?? "—");
    const safeMessage = escapeHtml(message);

    // If Resend API key is configured, send actual email
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: `${BRAND_NAME} <leads@neweraautomations.com>`,
        to: [EMAIL],
        replyTo: email,
        subject: `New Lead Transmission — ${safeName} (${safeProjectType})`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Intake Transmission</title>
</head>
<body style="margin:0;padding:0;background:#080808;color:#f0f0ef;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:48px 32px;">

    <p style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.3em;color:#c93a2a;text-transform:uppercase;margin:0 0 16px;">✦ NEWERA AUTOMATIONS × INTAKE</p>

    <h1 style="font-size:42px;font-weight:bold;line-height:1.05;margin:0 0 28px;color:#ffffff;">
      New Lead<br/><span style="color:#c93a2a;">Transmission.</span>
    </h1>

    <div style="height:1px;background:linear-gradient(to right,#c93a2a,transparent);margin-bottom:40px;"></div>

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="font-family:'Courier New',Courier,monospace;font-size:9px;letter-spacing:0.25em;color:rgba(255,255,255,0.4);text-transform:uppercase;padding-bottom:6px;white-space:nowrap;padding-right:28px;vertical-align:top;width:80px;">FROM</td>
        <td style="font-size:18px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;">${safeName}</td>
      </tr>
      <tr><td colspan="2" style="height:20px;"></td></tr>
      <tr>
        <td style="font-family:'Courier New',Courier,monospace;font-size:9px;letter-spacing:0.25em;color:rgba(255,255,255,0.4);text-transform:uppercase;padding-bottom:6px;white-space:nowrap;padding-right:28px;vertical-align:top;">EMAIL</td>
        <td style="font-size:18px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <a href="mailto:${safeEmail}" style="color:#c93a2a;text-decoration:none;">${safeEmail}</a>
        </td>
      </tr>
      <tr><td colspan="2" style="height:20px;"></td></tr>
      <tr>
        <td style="font-family:'Courier New',Courier,monospace;font-size:9px;letter-spacing:0.25em;color:rgba(255,255,255,0.4);text-transform:uppercase;padding-bottom:6px;white-space:nowrap;padding-right:28px;vertical-align:top;">TYPE</td>
        <td style="font-size:18px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;">${safeProjectType}</td>
      </tr>
      <tr><td colspan="2" style="height:20px;"></td></tr>
      <tr>
        <td style="font-family:'Courier New',Courier,monospace;font-size:9px;letter-spacing:0.25em;color:rgba(255,255,255,0.4);text-transform:uppercase;padding-bottom:6px;white-space:nowrap;padding-right:28px;vertical-align:top;">MESSAGE</td>
        <td style="font-size:15px;line-height:1.75;color:rgba(255,255,255,0.85);white-space:pre-wrap;">${safeMessage}</td>
      </tr>
    </table>

    <div style="margin-top:48px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.07);">
      <p style="font-family:'Courier New',Courier,monospace;font-size:9px;letter-spacing:0.25em;color:rgba(255,255,255,0.3);text-transform:uppercase;margin:0;">NEWERAAUTOMATIONS.COM</p>
    </div>
  </div>
</body>
</html>`,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, id: data?.id });
    }

    // Fallback response if RESEND_API_KEY is not set during local dev/demo
    console.log("Collab form received (Local Mode) from:", safeEmail);
    return NextResponse.json({ success: true, message: "Transmission received" });
  } catch (err) {
    console.error("Collab API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
