import nodemailer, { Transporter } from "nodemailer";
import { Resend } from "resend";
import { env } from "../config/env";
import logger from "../config/logger";

/**
 * Unified mail sender with provider fallback:
 *   1. Brevo (REST API) — if BREVO_API_KEY is set
 *   2. Resend (API)     — if RESEND_API_KEY is set
 *   3. Console/log      — dev fallback (never throws)
 */
let resend: Resend | null = null;
if (env.mail.resendKey) resend = new Resend(env.mail.resendKey);

const brevoEnabled = Boolean(env.mail.brevoKey);

const fromMatch = env.mail.from.match(/<(.+?)>/);
const fromEmail = fromMatch ? fromMatch[1] : env.mail.from;
const fromName = (env.mail.from.match(/^(.*?)\s*</)?.[1] ?? "I AM CODER").trim();

async function sendViaBrevo(opts: MailOptions): Promise<void> {
  const senderRaw = opts.from ?? env.mail.from;
  const sMatch = senderRaw.match(/<(.+?)>/);
  const sEmail = sMatch ? sMatch[1] : senderRaw;
  const sName = (senderRaw.match(/^(.*?)\s*</)?.[1] ?? "I AM CODER").trim();
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.mail.brevoKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: sName, email: sEmail },
      to: [{ email: opts.to }],
      subject: opts.subject,
      htmlContent: opts.html,
      textContent: opts.text ?? "",
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Brevo API ${res.status}: ${detail}`);
  }
  const body = (await res.json().catch(() => ({}))) as { messageId?: string };
  logger.info(`[Brevo] accepted — messageId=${body.messageId ?? "n/a"}`);
}

let fallbackSmtp: Transporter | null = null;
if (env.mail.user) {
  fallbackSmtp = nodemailer.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.secure,
    auth: { user: env.mail.user, pass: env.mail.pass },
  });
}

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export async function sendMail(opts: MailOptions): Promise<void> {
  const from = env.mail.from;
  try {
    if (brevoEnabled) {
      try {
        await sendViaBrevo(opts);
        logger.info(`[Brevo] Email sent to ${opts.to}`);
        return;
      } catch (err) {
        logger.warn(`[Brevo] failed: ${(err as Error).message}; falling back`);
      }
    }
    if (resend) {
      const { error } = await resend.emails.send({
        from: env.mail.resendFrom,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
      });
      if (!error) {
        logger.info(`[Resend] Email sent to ${opts.to}`);
        return;
      }
      logger.warn(`[Resend] failed: ${error?.message}; falling back`);
    }
    if (fallbackSmtp) {
      await fallbackSmtp.sendMail({ from, to: opts.to, subject: opts.subject, html: opts.html, text: opts.text });
      logger.info(`[SMTP] Email sent to ${opts.to}`);
      return;
    }
    // Dev fallback
    logger.info(`[DEV] Would send email to ${opts.to}: ${opts.subject}`);
  } catch (err) {
    logger.error(`Failed to send email to ${opts.to}`, err);
  }
}

export function applicationPendingTemplate(name: string, email: string): string {
  const steps = [
    ["📨", "Application Received", "We've got your details safely."],
    ["🔍", "Under Review", "Our admin team verifies your documents."],
    ["🎓", "Get Credentials", "Approved students receive login ID & password."],
  ];
  const items = steps
    .map(
      ([icon, title, text]) => `
      <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:20px">${icon}</div>
        <div>
          <div style="font-weight:600;color:#e2e8f0">${title}</div>
          <div style="font-size:13px;color:#94a3b8">${text}</div>
        </div>
      </div>`,
    )
    .join("");
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;background:#060914;color:#e2e8f0;padding:0;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
    <div style="background:linear-gradient(120deg,#3b82f6,#a78bfa,#22d3ee);padding:32px;text-align:center">
      <div style="font-size:32px">🎉</div>
      <h1 style="margin:10px 0 0;font-size:24px;color:#fff">Application Received!</h1>
      <p style="margin:6px 0 0;color:#e0f2fe;font-size:15px">You're one step closer to I AM CODER</p>
    </div>
    <div style="padding:28px">
      <p style="font-size:16px;margin:0 0 4px">Hi <b style="color:#22d3ee">${name}</b>,</p>
      <p style="color:#94a3b8;line-height:1.6;margin:0 0 18px">
        Thanks for applying! Your application from <b>${email}</b> is now <b style="color:#a78bfa">PENDING</b>
        and queued for admin verification. Here's what happens next:
      </p>
      <div style="background:#111936;border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:8px 18px;margin-bottom:22px">${items}</div>
      <p style="color:#94a3b8;font-size:14px;margin:0 0 18px">
        You'll receive another email with your Student ID, username and password as soon as an admin approves your application.
        Please keep an eye on this inbox (and the Spam folder, just in case).
      </p>
      <p style="font-size:12px;color:#64748b;text-align:center;margin:20px 0 0">
        This is an automated confirmation. Need help? Just reply to this email.
      </p>
    </div>
  </div>`;
}

export function credentialsEmailTemplate(
  name: string,
  username: string,
  password: string,
  studentId: string,
  loginUrl: string,
): string {
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;background:#060914;color:#e2e8f0;padding:0;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
    <div style="background:linear-gradient(120deg,#22c55e,#3b82f6,#a78bfa);padding:32px;text-align:center">
      <div style="font-size:32px">🎓</div>
      <h1 style="margin:10px 0 0;font-size:24px;color:#fff">You're Approved!</h1>
      <p style="margin:6px 0 0;color:#e0f2fe;font-size:15px">Welcome to I AM CODER 🚀</p>
    </div>
    <div style="padding:28px">
      <p style="font-size:16px;margin:0 0 4px">Hi <b style="color:#22d3ee">${name}</b>,</p>
      <p style="color:#94a3b8;line-height:1.6;margin:0 0 18px">
        Great news — your application has been <b style="color:#a78bfa">approved</b>! Your student account is ready.
        Use the credentials below to log in, and <b>change your password on first sign-in</b>.
      </p>
      <div style="background:#111936;border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px 20px;margin-bottom:22px">
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <span style="color:#94a3b8">Student ID</span><b style="color:#e2e8f0">${studentId}</b>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
          <span style="color:#94a3b8">Username</span><b style="color:#e2e8f0">${username}</b>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0">
          <span style="color:#94a3b8">Password</span><b style="color:#e2e8f0">${password}</b>
        </div>
      </div>
      <div style="text-align:center">
        <a href="${loginUrl}" style="display:inline-block;background:linear-gradient(90deg,#3b82f6,#a78bfa,#22d3ee);background-size:200% 200%;padding:14px 32px;border-radius:12px;color:#fff;text-decoration:none;font-weight:700">
          Login &amp; Set Password →
        </a>
      </div>
      <p style="font-size:12px;color:#64748b;text-align:center;margin:22px 0 0">
        Keep your credentials safe. This is an automated message — do not share your password.
      </p>
    </div>
  </div>`;
}

export function otpEmailTemplate(otp: string, purpose = "login"): string {
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:480px;margin:auto;background:#0b1020;color:#fff;padding:32px;border-radius:16px">
    <h2 style="color:#22d3ee">Your I AM CODER OTP</h2>
    <p>Use the following One-Time Password for <b>${purpose}</b>:</p>
    <div style="font-size:32px;letter-spacing:8px;font-weight:700;margin:16px 0;color:#a78bfa">${otp}</div>
    <p style="font-size:12px;color:#64748b">This OTP is valid for 10 minutes. If you did not request it, ignore this email.</p>
  </div>`;
}

/** Name derived from an email's local part, e.g. "subhambehera2023" -> "Subhambehera2023". */
export function nameFromEmail(email: string): string {
  const local = email.split("@")[0] ?? email;
  return local.charAt(0).toUpperCase() + local.slice(1);
}

export function adminWelcomeTemplate(name: string, loginUrl: string): string {
  const features = [
    ["📚", "Courses & Roadmaps", "Curate the full free curriculum"],
    ["🧪", "Quizzes & Leaderboard", "Author MCQ/OMR assessments"],
    ["📝", "Applications", "Review & approve students"],
    ["📣", "Broadcast", "Send announcements & replies"],
  ];
  const cards = features
    .map(
      ([icon, title, text]) => `
      <div style="background:#111936;border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:16px">
        <div style="font-size:22px">${icon}</div>
        <div style="font-weight:600;margin-top:8px;color:#e2e8f0">${title}</div>
        <div style="font-size:12px;color:#94a3b8;margin-top:4px">${text}</div>
      </div>`,
    )
    .join("");
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto;background:#060914;color:#e2e8f0;padding:0;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
    <div style="background:linear-gradient(120deg,#3b82f6,#a78bfa,#22d3ee);padding:36px 32px;text-align:center">
      <div style="font-size:34px">🚀</div>
      <h1 style="margin:12px 0 0;font-size:26px;color:#fff">Welcome to I AM CODER</h1>
      <p style="margin:6px 0 0;color:#e0f2fe;font-size:15px">Admin Access Granted</p>
    </div>
    <div style="padding:32px">
      <p style="font-size:16px;margin:0 0 4px">Hi <b style="color:#22d3ee">${name}</b>,</p>
      <p style="color:#94a3b8;line-height:1.6;margin:0 0 24px">
        You've been added as an administrator of the I AM CODER platform — a 100% free,
        beginner-to-advanced learning ecosystem. Use your admin panel to manage courses, review
        applications, run quizzes and keep the community thriving.
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px">${cards}</div>
      <div style="text-align:center">
        <a href="${loginUrl}" style="display:inline-block;background:linear-gradient(90deg,#3b82f6,#a78bfa,#22d3ee);background-size:200% 200%;padding:14px 32px;border-radius:12px;color:#fff;text-decoration:none;font-weight:700;letter-spacing:0.3px">
          Go to Admin Dashboard →
        </a>
      </div>
      <p style="font-size:12px;color:#64748b;margin-top:28px;text-align:center">
        This is an automated welcome message. If you believe this was sent in error, please ignore it.
      </p>
    </div>
  </div>`;
}

