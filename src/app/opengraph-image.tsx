import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview image shown when a link to the site is shared. Edit the colors and text here. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 65%)", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: "#3b4fd8", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, fontWeight: 700 }}>A</div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#1f2430" }}>{site.name}</div>
        </div>
        <div style={{ marginTop: 52, fontSize: 68, fontWeight: 700, color: "#1f2430", lineHeight: 1.1, maxWidth: 980 }}>Build what customers actually ask for</div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#5b6070" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
