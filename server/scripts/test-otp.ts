import { sendMail, otpEmailTemplate } from "../src/utils/email";

const to = process.argv[2] ?? "subhambehera89418@gmail.com";
const otp = Math.floor(100000 + Math.random() * 900000).toString();

async function main() {
  await sendMail({
    to,
    subject: "I AM CODER — Your OTP (Brevo)",
    html: otpEmailTemplate(otp, "login"),
    text: `Your I AM CODER OTP is ${otp}`,
  });
  console.log(`➡️  OTP ${otp} attempted for ${to} (see logs for delivery result)`);
}

main().catch((e) => {
  console.error("❌ Failed:", e);
  process.exit(1);
});
