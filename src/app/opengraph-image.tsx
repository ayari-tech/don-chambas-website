import { ImageResponse } from "next/og";

export const alt =
  "Don Chambas — Reclutamiento de personal para el sector restaurantero";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Marca: navy #06275C, naranja #F49F08, rojo #d31e1d (Manual de Marca Doberman)
function Star({ size: s, color }: { size: number; color: string }) {
  return (
    <svg width={s} height={s} viewBox="0 0 100 100">
      <path
        d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0 Z"
        fill={color}
      />
    </svg>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06275C",
          padding: "76px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Sparkles decorativos */}
        <div style={{ position: "absolute", top: 70, right: 110, display: "flex" }}>
          <Star size={44} color="#d31e1d" />
        </div>
        <div style={{ position: "absolute", bottom: 150, left: 70, display: "flex" }}>
          <Star size={30} color="#F49F08" />
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", gap: "14px", fontSize: "40px", fontWeight: 700 }}>
          <span style={{ color: "#FFFFFF" }}>DON</span>
          <span style={{ color: "#F49F08" }}>CHAMBAS</span>
        </div>

        {/* Headline + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              color: "#FFFFFF",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              maxWidth: "1040px",
            }}
          >
            <span>Reclutamiento de personal para el&nbsp;</span>
            <span
              style={{
                display: "flex",
                background: "linear-gradient(170deg, #F49F08, #d31e1d)",
                color: "#FFFFFF",
                padding: "2px 20px",
                borderRadius: "12px",
              }}
            >
              sector restaurantero
            </span>
          </div>
          <div style={{ color: "#F49F08", fontSize: "36px", fontWeight: 700 }}>
            ¿Buscas jale o quien jale?
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "24px",
          }}
        >
          <span>Sector restaurantero</span>
          <span>·</span>
          <span>México</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
