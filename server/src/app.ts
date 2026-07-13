import "reflect-metadata";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import logger from "./config/logger";
import { errorHandler, notFound } from "./middleware/errorHandler";
import { rateLimiter } from "./middleware/rateLimiter";
import { router as apiRouter } from "./routes";

export function createApp(): Application {
  const app = express();

  // Security headers
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "https://vercel.live"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "https:"],
          connectSrc: ["'self'", "https://*.cloudinary.com"],
          frameSrc: ["'self'", "https://www.youtube.com"],
        },
      },
      crossOriginEmbedderPolicy: false,
    }),
  );

  app.use(
    cors({
      origin: env.isProd ? [env.clientUrl] : true,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    }),
  );

  app.use(compression());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  app.use(morgan(env.isProd ? "combined" : "dev"));
  app.use(rateLimiter);

  // Health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  app.use(env.apiPrefix, apiRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}

export function startServer(): void {
  const app = createApp();
  app.listen(env.port, () => {
    logger.info(`🚀 I AM CODER server listening on port ${env.port} [${env.nodeEnv}]`);
  });
}
