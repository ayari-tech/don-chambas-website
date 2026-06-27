import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donchambas.com.mx"),
  title: "Don Chambas — Reclutamiento para negocios de servicio en México",
  description:
    "Don Chambas hace que la comunicación entre negocios y candidatos fluya sin fricciones, en el reclutamiento para negocios de servicio en México.",
  openGraph: {
    title: "Don Chambas",
    description:
      "Resolvemos la fricción en el reclutamiento para negocios de servicio en México.",
    locale: "es_MX",
    type: "website",
    siteName: "Don Chambas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/base.css" />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
