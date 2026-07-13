import { PrismaClient } from "@prisma/client";
import { PrismaClient as MySqlPrismaClient } from "../../generated/mysql";
import { env } from "./env";

/** MongoDB-backed Prisma client (primary document store). */
export const prisma = new PrismaClient({
  log: env.isProd ? ["error", "warn"] : ["error", "warn"],
});

/** MySQL-backed Prisma client (relational records, audit, applications). */
export const mysql = new MySqlPrismaClient();

/** Graceful shutdown for both clients. */
export async function disconnectDb(): Promise<void> {
  await prisma.$disconnect();
  await mysql.$disconnect();
}
