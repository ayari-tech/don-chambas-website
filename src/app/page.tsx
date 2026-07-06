import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BrushWordmark from "@/components/BrushWordmark";
import CharacterStrip from "@/components/CharacterStrip";
import Sparkle from "@/components/Sparkle";
import Watermark from "@/components/Watermark";
import { mailto } from "@/lib/config";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento de personal para el sector restaurantero",
  description:
    "Reclutamiento de personal para el sector restaurantero. Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye.",
};

export default function LandingPage() {
  return (
    <>
      <Nav />

      <div className="hero center has-watermark">
        <Watermark tone="dark" />
        <Sparkle size={40} color="var(--dc-brand-red)" className="hero-sparkle s1" />
        <Sparkle size={26} color="var(--dc-accent)" className="hero-sparkle s2" />
        <Sparkle size={32} color="var(--dc-accent)" className="hero-sparkle s3" />

        <div className="wrap">
          <BrushWordmark variant="navy" className="hero-lockup" />

          <div className="hero-row">
            <h1>
              Reclutamiento de personal para el{" "}
              <span className="accent">sector restaurantero</span>
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/characters/don-chambas.png"
              alt="Don Chambas, el mesero de la marca, corriendo con megáfono y charola"
              className="hero-mascota"
              draggable={false}
            />
          </div>

          <p className="hero-note">
            Estamos construyendo Don Chambas. Nos emociona tenerte aquí.
          </p>

          <div className="hero-ctas">
            <a href={mailto("Hola Don Chambas")} className="btn btn-cta">
              Contáctanos
            </a>
          </div>

          <CharacterStrip size="lg" className="hero-characters" />
        </div>
      </div>

      <Footer showCharacters={false} />
    </>
  );
}
