import { ImageResponse } from "next/og";

export const alt = "Gratitude Builds — Ideas turned into products people use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#2B1407",
        backgroundColor: "#FFF9F2",
        backgroundImage:
          "radial-gradient(circle at 78% 22%, #FFE0C5 0, #FFE0C5 18%, transparent 18.4%), linear-gradient(135deg, transparent 0 62%, rgba(232,111,37,.08) 62% 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 3 }}>
        <span>GRATITUDE BUILDS</span><span>FOUNDER × 2 · CTO × 1</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 80, lineHeight: 0.93, letterSpacing: -4 }}>
          <strong>I turn ideas into</strong><span style={{ color: "#E86F25" }}>products people use.</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 180 }}>
          <span style={{ width: 46, height: 72, background: "#F2A322", borderRadius: "22px 22px 0 0" }} />
          <span style={{ width: 46, height: 118, background: "#E98225", borderRadius: "22px 22px 0 0" }} />
          <span style={{ width: 46, height: 166, background: "#D95720", borderRadius: "22px 22px 0 0" }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22 }}>
        <span style={{ width: 12, height: 12, borderRadius: 20, background: "#E86F25" }} />
        <span>PRODUCT STRATEGY · UI/UX · FULL-STACK ENGINEERING · GROWTH</span>
      </div>
    </div>,
    size,
  );
}
