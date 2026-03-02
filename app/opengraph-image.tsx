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

export default async function OpenGraphImage() {
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
          justifyContent: "space-between",
          padding: "56px 72px",
          background:
            "radial-gradient(circle at 10% 15%, rgba(173,229,255,0.34), transparent 45%), radial-gradient(circle at 85% 20%, rgba(254,231,173,0.25), transparent 34%), radial-gradient(circle at 78% 86%, rgba(94,234,212,0.16), transparent 32%), linear-gradient(138deg,#041128,#0b3658 50%,#0f5d74)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-20px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            opacity: 0.12,
            background: "radial-gradient(circle, rgba(173,229,255,0.85), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {logoDataUrl ? (
            <img
              src={logoDataUrl}
              alt="もちめだか ロゴ"
              width={112}
              height={112}
              style={{
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.76)",
                background: "rgba(245,252,255,0.93)",
                boxShadow: "0 10px 20px rgba(8,32,56,0.24)",
              }}
            />
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: 24, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.92 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 18, opacity: 0.92 }}>{siteConfig.heroTagline}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>{`${siteConfig.name} Official Site`}</div>
          <div style={{ fontSize: 34, opacity: 0.95 }}>{siteConfig.heroTagline}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

