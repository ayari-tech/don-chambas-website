import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Don Chambas — ¿Buscas jale o quien jale pa’ tu restaurante?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El lockup oficial (wordmark brush + tagline + destellos) va como asset:
// el manual prohíbe reconstruir el wordmark con fuentes vivas. El hex va
// inline porque next/og no lee CSS vars (#06275C = --dc-primary).
export default async function OpengraphImage() {
  const lockup = await readFile(
    join(process.cwd(), "public/images/brand/lockup-navy.svg"),
  );
  const src = `data:image/svg+xml;base64,${lockup.toString("base64")}`;

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
          gap: "40px",
          background: "#06275C",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={760} height={415} alt="" />
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.85)",
            fontSize: "28px",
          }}
        >
          Reclutamiento de personal para el sector restaurantero · México
        </div>
      </div>
    ),
    { ...size },
  );
}
