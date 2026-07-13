import dotenv from "dotenv";
dotenv.config();
import { env } from "../src/config/env";
import { sendMail, adminWelcomeTemplate, nameFromEmail } from "../src/utils/email";

async function main() {
  const loginUrl = `${env.clientUrl}/login`;
  const admins = env.mail.adminEmails;
  if (!admins.length) {
    console.log("⚠️  No admin emails found (ADMIN_EMAILS).");
    return;
  }
  for (const email of admins) {
    const name = nameFromEmail(email);
    await sendMail({
      to: email,
      subject: `Welcome to I AM CODER, ${name} — Admin Access 🚀`,
      html: adminWelcomeTemplate(name, loginUrl),
      text: `Welcome to I AM CODER, ${name}! Admin dashboard: ${loginUrl}`,
    });
    console.log(`➡️  Welcome sent to ${email} (name: ${name})`);
  }
}

main().catch((e) => {
  console.error("❌ Failed:", e);
  process.exit(1);
});
