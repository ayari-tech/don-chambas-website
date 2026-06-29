import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — Don Chambas",
  description: "Ponte en contacto con el equipo de Don Chambas.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Contacto</span>
            <h1>Hablemos</h1>
            <p className="lead">Respondemos personalmente a cada mensaje.</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <h2>Escríbenos directamente</h2>
                <p className="lead" style={{ marginBottom: 0 }}>
                  Somos un equipo fundador pequeño — tu mensaje llega
                  directamente a nosotros.
                </p>

                <ul className="contact-methods">
                  <li>
                    <span className="ic"><Icon name="mail" size={22} /></span>
                    <div className="method-body">
                      <b>Contacto general</b>
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="card">
                  <h3>¿Tienes un negocio restaurantero?</h3>
                  <p>
                    Conoce el programa piloto e ideemos juntos cómo resolver tus
                    contrataciones.
                  </p>
                  <Link
                    href="/piloto"
                    className="btn btn-primary"
                    style={{ display: "inline-block", marginTop: "var(--sp-4)" }}
                  >
                    Ver programa piloto →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
