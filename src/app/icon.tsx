import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: busto de la mascota, el asset canónico para avatares/íconos
// (manual §2b); variante blanca sobre navy. El hex va inline porque
// next/og no lee CSS vars (#06275C = --dc-primary).
export default async function Icon() {
  const busto = await readFile(
    join(process.cwd(), "public/images/brand/mascota-busto_blanco.png"),
  );
  const src = `data:image/png;base64,${busto.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06275C",
          borderRadius: 12,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={60} height={60} alt="" />
      </div>
    ),
    { ...size },
  );
}
