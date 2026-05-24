import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "installo — Invoice & Get Paid Faster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #1D4ED8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
              color: "white",
            }}
          >
            i
          </div>
          <span style={{ fontSize: 48, fontWeight: 900, color: "white", letterSpacing: "-2px" }}>
            installo
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 860,
            letterSpacing: "-2px",
          }}
        >
          Get paid.{" "}
          <span style={{ color: "#93C5FD" }}>Stay in control.</span>
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Invoicing & payment plans for small service businesses.
        </div>

        {/* URL pill */}
        <div
          style={{
            marginTop: 48,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 99,
            padding: "10px 28px",
            fontSize: 20,
            color: "rgba(255,255,255,0.8)",
            fontWeight: 600,
          }}
        >
          tryinstallo.com
        </div>
      </div>
    ),
    { ...size }
  );
}
