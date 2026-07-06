import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CharacterStrip from "@/components/CharacterStrip";
import Icon from "@/components/Icon";
import Watermark from "@/components/Watermark";
import { PARTNERSHIPS_EMAIL, mailto } from "@/lib/config";

const FRICTIONS = [
  {
    icon: "search",
    title: "Encontrar candidatos",
    desc: "Dificultad para dar con el perfil adecuado.",
  },
  {
    icon: "calendar-x",
    title: "Ausencias y no-shows",
    desc: "Candidatos que no llegan a la entrevista o al primer día.",
  },
] as const;

export const metadata: Metadata = {
  title: "Participa en el programa piloto — Don Chambas",
  description:
    "¿Tienes un negocio restaurantero con fricciones en sus contrataciones? Participa en el programa piloto de Don Chambas e ideemos juntos soluciones efectivas.",
};

export default function PilotoPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero has-watermark">
          <Watermark tone="dark" />
          <div className="wrap">
            <span className="eyebrow">Programa piloto</span>
            <h1>Participa en el programa piloto</h1>
            <p className="lead">
              Construyamos juntos la solución a tus contrataciones.
            </p>
            <CharacterStrip size="sm" className="page-hero-characters" />
          </div>
        </header>

        <section className="alt has-watermark">
          <Watermark tone="light" />
          <div className="wrap tight">
            <p className="lead">
              ¿Tienes un negocio en la industria restaurantera? Queremos
              escucharte. Buscamos negocios que vivan fricciones en sus
              contrataciones:
            </p>
            <ul className="icon-bullets pain">
              {FRICTIONS.map((f) => (
                <li key={f.title}>
                  <span className="ic">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <div>
                    <b>{f.title}</b>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="lead" style={{ marginBottom: 0 }}>
              Queremos sentarnos contigo a entender de primera mano los
              problemas que enfrentas y cómo es hoy tu proceso de
              reclutamiento. Ese aprendizaje es lo que nos permite diseñar una
              solución que de verdad funcione para negocios como el tuyo.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap tight">
            <blockquote className="quote">
              &ldquo;La gente agenda entrevistas pero no llega y no avisa;
              agenda día de prueba y no llega; agenda primer día contratado y
              no llega; ya no vuelve al segundo o tercer día.&rdquo;
              <cite>— Dueña de restaurante, CDMX</cite>
            </blockquote>
            <blockquote className="quote">
              &ldquo;Tengo 4 vacantes al mismo tiempo y pagué $3,500 para
              recibir candidatos 5 días. Y es tardadísimo yo filtrar
              todo.&rdquo;
              <cite>— Dueña de restaurante, CDMX</cite>
            </blockquote>
            <div className="cta-final">
              <h3>¿Te suena familiar?</h3>
              <p>
                Cuéntanos sobre tu negocio y los retos que enfrentas al
                contratar. Te contactamos para platicar.
              </p>
              <a
                href={mailto(
                  "Quiero participar en el programa piloto",
                  undefined,
                  PARTNERSHIPS_EMAIL,
                )}
                className="btn btn-cta"
                style={{ marginTop: "var(--sp-5)" }}
              >
                Participar en el piloto →
              </a>
              <p style={{ marginTop: "var(--sp-4)", fontSize: "var(--fs-sm)" }}>
                o directo a{" "}
                <a href={`mailto:${PARTNERSHIPS_EMAIL}`} className="accent">
                  {PARTNERSHIPS_EMAIL}
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
