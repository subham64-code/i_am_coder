import { v2 as cloudinary } from "cloudinary";
import { env } from "../config/env";
import logger from "../config/logger";

cloudinary.config({
  cloud_name: env.cloudinary.cloudName,
  api_key: env.cloudinary.apiKey,
  api_secret: env.cloudinary.apiSecret,
});

export interface UploadResult {
  url: string;
  publicId: string;
}

/** Upload a file buffer to Cloudinary. */
export async function uploadBuffer(
  buffer: Buffer,
  resourceType: "image" | "raw" | "video" = "image",
  filename = "file",
): Promise<UploadResult> {
  if (!env.cloudinary.cloudName) {
    logger.warn("Cloudinary not configured; skipping real upload");
    return { url: `mock://${filename}`, publicId: filename };
  }
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType, folder: env.cloudinary.folder, public_id: filename },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve({ url: result.secure_url, publicId: result.public_id });
      },
    );
    stream.end(buffer);
  });
}

export function deleteResource(publicId: string, resourceType: "image" | "raw" | "video") {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

export default cloudinary;
