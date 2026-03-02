/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { getBrandLogoDataUrl } from "@/lib/brand-assets";
import { siteConfig } from "@/site.config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default async function TwitterImage() {
  const logoDataUrl = await getBrandLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at 20% 20%, rgba(173,229,255,0.35), transparent 45%), radial-gradient(circle at 78% 30%, rgba(254,231,173,0.24), transparent 30%), radial-gradient(circle at 75% 82%, rgba(94,234,212,0.15), transparent 32%), linear-gradient(140deg,#041128,#0b3658,#0f5d74)",
          color: "white",
        }}
      >
        {logoDataUrl ? (
          <img
            src={logoDataUrl}
            alt="もちめだか ロゴ"
            width={160}
            height={160}
            style={{
              borderRadius: "999px",
              border: "3px solid rgba(255,255,255,0.72)",
              background: "rgba(245,252,255,0.93)",
              boxShadow: "0 12px 22px rgba(8,32,56,0.26)",
            }}
          />
        ) : null}
        <div style={{ marginTop: 28, fontSize: 70, fontWeight: 800 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 16, fontSize: 30, opacity: 0.96 }}>{siteConfig.heroTagline}</div>
      </div>
    ),
    {
      ...size,
    },
  );
}

