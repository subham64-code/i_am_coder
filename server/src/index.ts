import { disconnectDb } from "./config/db";
import { startServer } from "./app";
import logger from "./config/logger";

startServer();

// Graceful shutdown
const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, shutting down gracefully...`);
  try {
    await disconnectDb();
  } finally {
    process.exit(0);
  }
};

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("unhandledRejection", (reason) => logger.error("Unhandled rejection", reason));
process.on("uncaughtException", (err) => logger.error("Uncaught exception", err));
