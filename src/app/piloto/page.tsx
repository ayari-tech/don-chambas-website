import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { PARTNERSHIPS_EMAIL, mailto } from "@/lib/config";

const FRICTIONS = [
  {
    icon: "search",
    title: "Encontrar candidatos",
    desc: "Dificultad para dar con el perfil adecuado.",
  },
  {
    icon: "heart",
    title: "Retener al talento",
    desc: "El equipo rota más de lo que quisieras.",
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
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Programa piloto</span>
            <h1>Participa en el programa piloto</h1>
            <p className="lead">
              Construyamos juntos la solución a tus contrataciones.
            </p>
          </div>
        </header>

        <section className="alt">
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
            <p className="lead">
              Queremos hablar contigo para idear juntos soluciones efectivas. En
              Don Chambas nos entusiasman las posibilidades que abren la
              automatización y la inteligencia artificial para resolver estos
              retos.
            </p>
            <p className="quote" style={{ marginBottom: 0 }}>
              Si estás en la industria restaurantera y tienes ideas de cómo se
              podría automatizar o integrar con IA algún proceso, nos gustaría
              hablar contigo.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap tight">
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
                className="btn btn-primary"
                style={{ display: "inline-block", marginTop: "var(--sp-5)" }}
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
      <Footer />
    </>
  );
}
