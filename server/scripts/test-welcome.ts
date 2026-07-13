import { sendMail } from "../src/utils/email";

const to = process.argv[2] ?? "subhambehera4431@gmail.com";
const from = process.argv[3] ?? "subhambehera89418@gmail.com";
const otp = Math.floor(100000 + Math.random() * 900000).toString();

const html = `
<div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:auto;background:#0b1020;color:#fff;padding:32px;border-radius:16px">
  <h1 style="color:#22d3ee">Welcome to I AM CODER 🚀</h1>
  <p>Hi there! We're thrilled to have you join our free coding community.</p>
  <p>Use the following OTP to verify your email and activate your account:</p>
  <div style="font-size:32px;letter-spacing:8px;font-weight:700;margin:16px 0;color:#a78bfa">${otp}</div>
  <p style="font-size:12px;color:#64748b">This OTP is valid for 10 minutes. If you did not request it, ignore this email.</p>
</div>`;

async function main() {
  await sendMail({
    to,
    from,
    subject: "Welcome to I AM CODER — Verify your email (OTP)",
    html,
    text: `Welcome to I AM CODER! Your OTP is ${otp}`,
  });
  console.log(`➡️  Welcome OTP ${otp} sent from ${from} to ${to} (see logs)`);
}

main().catch((e) => {
  console.error("❌ Failed:", e);
  process.exit(1);
});
