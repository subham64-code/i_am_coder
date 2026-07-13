import { z } from "zod";

export const markAttendanceSchema = z.object({
  userId: z.string().optional(),
  status: z.enum(["PRESENT", "ABSENT", "LATE"]).default("PRESENT"),
  method: z.enum(["manual", "qr", "admin"]).default("manual"),
});
