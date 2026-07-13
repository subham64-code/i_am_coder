import { Response } from "express";
import { mysql, prisma } from "../../config/db";
import { asyncHandler } from "../../utils/asyncHandler";
import { BadRequestError } from "../../utils/errors";
import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/auth";
import ExcelJS from "exceljs";

function toCsv(headers: string[], rows: (string | number)[][]) {
  const esc = (v: string | number) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [headers.map(esc).join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n");
}

export const exportReport = asyncHandler(async (req: any, res: Response) => {
  const type = (req.query.type as string) ?? "applications";
  const format = (req.query.format as string) ?? "csv";

  if (type === "applications") {
    const rows = await mysql.applicationForm.findMany({ orderBy: { createdAt: "desc" } });
    const headers = ["id", "fullName", "email", "phone", "collegeName", "course", "status", "createdAt"];
    const data = rows.map((r) => [
      r.id, r.fullName, r.email, r.phone, r.collegeName, r.interestedCourse, r.status,
      r.createdAt.toISOString().slice(0, 10),
    ]);
    return sendExport(res, "applications", format, headers, data);
  }

  if (type === "students") {
    const rows = await prisma.user.findMany({ where: { role: "STUDENT" } });
    const headers = ["id", "fullName", "email", "studentId", "username", "status", "createdAt"];
    const data = rows.map((r) => [
      r.id, r.fullName, r.email, r.studentId ?? "", r.username ?? "", r.status,
      r.createdAt.toISOString().slice(0, 10),
    ]);
    return sendExport(res, "students", format, headers, data);
  }

  if (type === "attendance") {
    const rows = await prisma.attendance.findMany({ orderBy: { date: "desc" }, take: 5000 });
    const headers = ["id", "userId", "date", "status", "method"];
    const data = rows.map((r) => [r.id, r.userId, r.date.toISOString().slice(0, 10), r.status, r.method]);
    return sendExport(res, "attendance", format, headers, data);
  }

  throw new BadRequestError("Unknown report type");
});

async function sendExport(
  res: Response,
  name: string,
  format: string,
  headers: string[],
  rows: (string | number)[][],
) {
  if (format === "xlsx") {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet(name);
    ws.addRow(headers);
    rows.forEach((r) => ws.addRow(r));
    const buf = await wb.xlsx.writeBuffer();
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );
    res.setHeader("Content-Disposition", `attachment; filename=${name}.xlsx`);
    return res.send(Buffer.from(buf));
  }
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", `attachment; filename=${name}.csv`);
  res.send(toCsv(headers, rows));
}
