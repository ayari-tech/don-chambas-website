import type { Metadata } from "next";
import { Baloo_2, Caveat, Nunito } from "next/font/google";

// Display chunky/redondeada — sustituto libre al wordmark brush de marca
const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-next",
  display: "swap",
});

// Script a pincel — acentos manuscritos al estilo del tagline de marca
const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-script-next",
  display: "swap",
});

// Cuerpo redondeado y legible — marida con Baloo 2
const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
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
      "Reclutamiento de personal para el sector restaurantero. ¿Buscas jale o quien jale?",
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
      className={`${baloo.variable} ${caveat.variable} ${nunito.variable}`}
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
