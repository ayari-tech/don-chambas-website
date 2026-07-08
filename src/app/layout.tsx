import type { Metadata } from "next";
import { Space_Grotesk, Caveat, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";

// Display canónica de marca (manual §2.3, resolución C3)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-display-next",
  display: "swap",
});

// Script manuscrita — solo acentos de marketing, nunca UI funcional
const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
  variable: "--font-script-next",
  display: "swap",
});

// Cuerpo canónico de marca
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donchambas.com.mx"),
  title: "Don Chambas — Reclutamiento de personal para el sector restaurantero",
  description:
    "Reclutamiento de personal para el sector restaurantero. Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye.",
  openGraph: {
    title: "Don Chambas",
    description:
      "Reclutamiento de personal para el sector restaurantero. ¿Buscas jale o quien jale pa’ tu restaurante?",
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
      className={`${spaceGrotesk.variable} ${caveat.variable} ${inter.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/componentes.css" />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
