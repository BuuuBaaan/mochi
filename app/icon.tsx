/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { getBrandLogoDataUrl } from "@/lib/brand-assets";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Icon() {
  const logoDataUrl = await getBrandLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          background:
            "radial-gradient(circle at 24% 20%, rgba(189,239,255,0.96) 0%, rgba(115,231,246,0.88) 36%, rgba(16,92,128,0.95) 70%, rgba(6,28,54,1) 100%)",
        }}
      >
        {logoDataUrl ? (
          <img
            src={logoDataUrl}
            alt="もちめだか ロゴ"
            width={56}
            height={56}
            style={{
              borderRadius: "999px",
              background: "rgba(245,252,255,0.95)",
              border: "1px solid rgba(255,255,255,0.78)",
              boxShadow: "0 6px 14px rgba(7,28,54,0.28)",
            }}
          />
        ) : (
          <span style={{ color: "#082f49", fontSize: 34, fontWeight: 800 }}>M</span>
        )}
      </div>
    ),
    {
      ...size,
    },
  );
}

