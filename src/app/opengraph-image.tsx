import { ImageResponse } from "next/og";

export const alt =
  "Don Chambas — Reclutamiento WhatsApp-first para negocios de servicio en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Marca: azul #06275C, naranja #F49F08 (Manual de Marca Doberman)
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
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "12px",
              background: "#04193d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F49F08",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            DON
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              color: "#FFFFFF",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            <span>DON</span>
            <span style={{ color: "#F49F08" }}>CHAMBAS</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "#FFFFFF",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            <span>Reclutamiento&nbsp;</span>
            <span style={{ color: "#F49F08" }}>WhatsApp-first&nbsp;</span>
            <span>para negocios de servicio en México.</span>
          </div>
          <div
            style={{
              color: "#F49F08",
              fontSize: "30px",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            ¿Buscas jale o quien jale pa´ tu restaurante?
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "24px",
          }}
        >
          <span>Candidatos verificados</span>
          <span>·</span>
          <span>Comunicación automatizada</span>
          <span>·</span>
          <span>Piloto CDMX 2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
