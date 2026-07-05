import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CharacterStrip from "@/components/CharacterStrip";
import Icon from "@/components/Icon";
import Watermark from "@/components/Watermark";
import { CAREERS_EMAIL } from "@/lib/config";

const AREAS = [
  { icon: "trending-up", name: "Marketing" },
  { icon: "code", name: "Tecnología" },
  { icon: "layers", name: "Diseño de producto" },
  { icon: "sliders", name: "Operaciones" },
  { icon: "bar-chart", name: "Finanzas" },
] as const;

export const metadata: Metadata = {
  title: "Ayúdanos a construir Don Chambas — Carreras",
  description:
    "Buscamos personas excepcionales —en marketing, tecnología y diseño de producto— para construir Don Chambas. Si sientes que tienes algo único que aportar, hablemos.",
};

export default function CarrerasPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Únete al equipo</span>
            <h1>Ayúdanos a construir Don Chambas</h1>
            <p className="lead">
              Buscamos personas excepcionales con ganas de hacer algo grande.
            </p>
            <CharacterStrip size="sm" className="page-hero-characters" />
          </div>
        </header>

        <section className="alt">
          <div className="wrap tight">
            <p className="lead" style={{ marginBottom: "var(--sp-6)" }}>
              Tenemos grandes planes para Don Chambas y nos entusiasma sumar a
              gente con algo único que aportar. Si sientes que tienes ese algo
              especial, hablemos.
            </p>
            <h4>Áreas en las que buscamos talento</h4>
            <ul className="icon-bullets">
              {AREAS.map((a) => (
                <li key={a.name}>
                  <span className="ic">
                    <Icon name={a.icon} size={20} />
                  </span>
                  <b>{a.name}</b>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrap tight">
            <span className="section-tag">Por qué ahora</span>
            <h2>Un momento único para construir</h2>
            <p className="lead">
              Vivimos un momento irrepetible: las nuevas herramientas de
              inteligencia artificial nos permiten lograr lo que antes era
              impensable, con una agilidad nunca vista. Concebimos Don Chambas
              no sólo como un producto potenciado por buenas arquitecturas
              agénticas, sino como un equipo que usa esas mismas capacidades
              para mejorar y multiplicar cada uno de sus procesos internos.
            </p>
          </div>
        </section>

        <section className="alt has-watermark">
          <Watermark tone="light" />
          <div className="wrap tight">
            <span className="section-tag">Lo que vas a encontrar</span>
            <h2>Un espacio para crecer</h2>
            <p className="lead">
              Don Chambas será un lugar para desarrollar tu capacidad
              intelectual y analítica, tu sensibilidad de producto y tu
              intuición técnica. Si te emociona construir desde cero y crecer
              rápido junto a un equipo ambicioso, queremos conocerte.
            </p>
            <div className="cta-final">
              <h3>
                ¿Sientes que tienes algo especial que aportar?
              </h3>
              <p style={{ marginTop: "var(--sp-4)" }}>
                Escríbenos a{" "}
                <a href={`mailto:${CAREERS_EMAIL}`} className="accent">
                  {CAREERS_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer showCharacters={false} />
    </>
  );
}
