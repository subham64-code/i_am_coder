import { asyncHandler } from "../../utils/asyncHandler";
import { sendSuccess } from "../../utils/apiResponse";
import { sendMail } from "../../utils/email";
import { contactSchema } from "./validation";
import { env } from "../../config/env";
import logger from "../../config/logger";

export const submitContact = asyncHandler(async (req, res) => {
  const data = contactSchema.parse(req.body);

  const to = env.mail.adminEmails.length ? env.mail.adminEmails.join(",") : env.mail.user;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:auto;background:#0b1020;color:#fff;padding:32px;border-radius:16px">
      <h2 style="color:#22d3ee">New Contact Message — I AM CODER</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Subject:</b> ${data.subject}</p>
      <p style="margin-top:12px">${data.message}</p>
    </div>`;

  if (to) {
    try {
      await sendMail({ to, subject: `Contact: ${data.subject}`, html, text: data.message });
    } catch (err) {
      logger.warn(`[contact] admin mail skipped: ${(err as Error).message}`);
    }
  }

  // Instant confirmation to the sender.
  try {
    await sendMail({
      to: data.email,
      subject: "We received your message — I AM CODER",
      html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:auto;background:#060914;color:#e2e8f0;padding:32px;border-radius:16px;border:1px solid rgba(255,255,255,0.08)">
        <h2 style="color:#22d3ee">Thanks for reaching out, ${data.name}! 🚀</h2>
        <p style="color:#94a3b8;line-height:1.6">We've received your message about "<b>${data.subject}</b>" and our team will get back to you shortly. Our admin can also be reached at <b>subhambehera89418@gmail.com</b> / <b>+91 9861289418</b>.</p>
        <p style="font-size:12px;color:#64748b">This is an automated confirmation.</p>
      </div>`,
      text: "We received your message and will respond soon.",
    });
  } catch (err) {
    logger.warn(`[contact] user confirmation skipped: ${(err as Error).message}`);
  }

  sendSuccess(res, { received: true }, "Message received — we'll get back to you soon!", 201);
});
