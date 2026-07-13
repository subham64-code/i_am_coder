import { sendMail } from "../src/utils/email";

async function main() {
  // 1) The address you asked to test (third-party)
  await sendMail({
    to: "subhambehera4431@gmail.com",
    subject: "I AM CODER — Email Test (requested address)",
    html: "<p>Hello from I AM CODER — this is a delivery test.</p>",
    text: "I AM CODER email test.",
  });
  console.log("➡️  Attempted delivery to subhambehera4431@gmail.com (see logs above for result)");

  // 2) Verified owner email (Resend test mode allows this)
  await sendMail({
    to: "subhambehera89418@gmail.com",
    subject: "I AM CODER — Email Pipeline Test ✅",
    html: "<h1 style='color:#22d3ee'>Email delivery works! 🚀</h1><p>Resend/Brevo + Nodemailer pipeline confirmed.</p>",
    text: "I AM CODER email pipeline test OK.",
  });
  console.log("➡️  Attempted delivery to verified owner subhambehera89418@gmail.com");
}

main().catch((e) => {
  console.error("❌ Failed:", e);
  process.exit(1);
});
