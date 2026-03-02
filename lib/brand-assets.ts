import fs from "node:fs/promises";
import path from "node:path";

const brandLogoPath = path.join(process.cwd(), "public", "brand", "logo.png");

let logoDataUrlPromise: Promise<string | null> | null = null;

export function getBrandLogoDataUrl() {
  if (!logoDataUrlPromise) {
    logoDataUrlPromise = fs
      .readFile(brandLogoPath)
      .then((buffer) => `data:image/png;base64,${buffer.toString("base64")}`)
      .catch(() => null);
  }

  return logoDataUrlPromise;
}
