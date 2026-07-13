import "reflect-metadata";

/**
 * Centralized, validated environment configuration.
 * Fails fast if required variables are missing in production.
 */
import dotenv from "dotenv";

dotenv.config();

function required(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return "";
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: (process.env.NODE_ENV ?? "development") as "development" | "production" | "test",
  isProd: (process.env.NODE_ENV ?? "development") === "production",
  apiPrefix: process.env.API_PREFIX ?? "/api/v1",
  clientUrl: process.env.CLIENT_URL ?? "http://localhost:3000",

  jwtSecret: required("JWT_SECRET", "dev_jwt_secret"),
  jwtRefreshSecret: required("JWT_REFRESH_SECRET", "dev_refresh_secret"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "15m",
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  bcryptRounds: Number(process.env.BCRYPT_SALT_ROUNDS ?? 12),
  otpExpiresMin: Number(process.env.OTP_EXPIRES_MIN ?? 10),

  databaseUrl: required("DATABASE_URL", "mongodb://localhost:27017/iamcoder"),
  mysqlUrl: required("MYSQL_URL", "mysql://root:root@localhost:3306/iamcoder"),
  redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",

  mail: {
    host: process.env.MAIL_HOST ?? "smtp.gmail.com",
    port: Number(process.env.MAIL_PORT ?? 587),
    secure: process.env.MAIL_SECURE === "true",
    user: process.env.MAIL_USER ?? "",
    pass: process.env.MAIL_PASS ?? "",
    from: process.env.MAIL_FROM ?? "I AM CODER <subhambehera2023@gift.edu.in>",
    // Resend (fallback) — API key from https://resend.com
    resendKey: process.env.RESEND_API_KEY ?? "",
    resendFrom: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    // Brevo (primary) — REST API key (xkeysib-…) from https://brevo.com
    brevoKey: process.env.BREVO_API_KEY ?? "",
    brevoUser: process.env.BREVO_SMTP_USER ?? "apikey",
    // Predefined admin emails allowed to OTP-login to the admin panel
    adminEmails: (process.env.ADMIN_EMAILS ?? "admin@iamcoder.dev")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean),
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? "",
    apiKey: process.env.CLOUDINARY_API_KEY ?? "",
    apiSecret: process.env.CLOUDINARY_API_SECRET ?? "",
    folder: process.env.CLOUDINARY_FOLDER ?? "iamcoder",
  },
} as const;
