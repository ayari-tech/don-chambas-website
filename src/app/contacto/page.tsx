import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CharacterStrip from "@/components/CharacterStrip";
import Icon from "@/components/Icon";
import Watermark from "@/components/Watermark";
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
        <header className="page-hero has-watermark">
          <Watermark tone="dark" />
          <div className="wrap">
            <span className="eyebrow">Contacto</span>
            <h1>Hablemos</h1>
            <CharacterStrip size="sm" className="page-hero-characters" />
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <h2>Escríbenos directamente</h2>

                <ul className="contact-methods">
                  <li>
                    <span className="ic"><Icon name="mail" size={22} /></span>
                    <div className="method-body">
                      <b>Contacto general</b>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        data-analytics-event="cta_contacto_click"
                        data-analytics-cta="contacto_email_general"
                      >
                        {CONTACT_EMAIL}
                      </a>
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
                    style={{ marginTop: "var(--sp-4)" }}
                  >
                    Ver programa piloto →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer showCharacters={false} />
    </>
  );
}
