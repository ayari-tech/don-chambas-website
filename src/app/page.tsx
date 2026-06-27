import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FlowSteps from "@/components/FlowSteps";
import CtaFinal from "@/components/CtaFinal";
import { whatsapp } from "@/lib/config";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento WhatsApp-first para restaurantes en México",
  description:
    "Don Chambas conecta negocios de servicio con candidatos verificados, usando WhatsApp como canal principal. Comunicación automatizada y un proceso que sí llega a la contratación.",
};

const PILOT_MSG =
  "Hola, me interesa el programa piloto de Don Chambas. Mi restaurante está en CDMX.";

export default function LandingPage() {
  return (
    <>
      <Nav />

      <Hero
        eyebrow="Piloto · CDMX · 2026"
        title={
          <>
            Reclutamiento <span className="accent">WhatsApp-first</span> para
            negocios de servicio en México.
          </>
        }
        subtitle="Candidatos verificados, comunicación automatizada y un proceso que de verdad llega a la contratación. La plataforma hace el trabajo; tú no."
        tagline
        meta={[
          { label: "Empezamos en", value: "Restaurantería CDMX" },
          { label: "Escalamos a", value: "Cafés · Bares · Hoteles · Retail" },
        ]}
      >
        <a href={whatsapp(PILOT_MSG)} className="btn btn-primary">
          Quiero el piloto
        </a>
        <Link href="/restaurantes" className="btn btn-outline">
          Soy restaurante
        </Link>
      </Hero>

      {/* ── PROBLEMA ── */}
      <section id="problema" className="alt">
        <div className="wrap">
          <p className="section-tag">El problema</p>
          <h2>El reclutamiento en negocios de servicio está roto en cuatro frentes.</h2>
          <p className="lead">
            No es difícil encontrar candidatos. Lo difícil es que lleguen, que
            no se pierdan en el camino, y que el proceso no consuma horas de tu
            semana.
          </p>
          <div className="grid four">
            <div className="card">
              <div className="num">70%</div>
              <h3>Rotación crónica</h3>
              <p>
                La industria restaurantera convive con rotación anual
                sostenidamente alta. Cada vacante cubierta vuelve a abrirse en
                meses.
              </p>
            </div>
            <div className="card">
              <div className="num">0</div>
              <h3>Talento sin verificar</h3>
              <p>
                Cartel en ventana, boca a boca, Facebook Groups — ninguno filtra
                por confiabilidad ni cumplimiento. El negocio paga el costo de
                los no-shows.
              </p>
            </div>
            <div className="card">
              <div className="num">$240</div>
              <h3>Canales rotos</h3>
              <p>
                Indeed/OCC cobran $240/día por vacante. El negocio paga y aún
                así filtra 100+ mensajes irrelevantes a mano.
              </p>
            </div>
            <div className="card">
              <div className="num">∞</div>
              <h3>Comunicación bilateral</h3>
              <p>
                Confirmaciones manuales, no-shows sin aviso, WhatsApp personal
                prestado, misma info repetida 50 veces. Nadie cubre el flujo
                end-to-end.
              </p>
            </div>
          </div>
          <blockquote className="quote">
            "La gente agenda entrevistas pero no llega y no avisa; agenda día de
            prueba y no llega; agenda primer día contratado y no llega; ya no
            vuelve al segundo o tercer día."
            <cite>— Luisa, propietaria de restaurante, CDMX</cite>
          </blockquote>
        </div>
      </section>

      {/* ── SOLUCIÓN ── */}
      <section id="solucion">
        <div className="wrap">
          <p className="section-tag">La solución</p>
          <h2>Seis pasos. La plataforma hace el trabajo. El usuario no.</h2>
          <p className="lead">
            El candidato se registra por WhatsApp sin descargar app. Ve vacantes
            ordenadas por cercanía real y turno. Aplica 1-tap. El negocio decide
            con datos — no con fe.
          </p>
          <FlowSteps />

          <h3 style={{ marginTop: "var(--sp-12)" }}>
            Lo que el usuario nunca tiene que hacer
          </h3>
          <div className="friction-grid">
            <div>
              <p className="section-tag" style={{ marginBottom: "var(--sp-3)" }}>
                Lado candidato
              </p>
              <ul className="friction">
                <li>Armar un CV formal</li>
                <li>Tener email activo o descargar app</li>
                <li>Saber qué escribir en mensajes</li>
                <li>Recordar citas manualmente</li>
                <li>Buscar vacantes por su cuenta</li>
                <li>Quedarse sin feedback tras rechazo</li>
              </ul>
            </div>
            <div>
              <p className="section-tag" style={{ marginBottom: "var(--sp-3)" }}>
                Lado negocio
              </p>
              <ul className="friction">
                <li>Filtrar 100+ mensajes irrelevantes</li>
                <li>Perseguir no-shows uno por uno</li>
                <li>Perseguir confirmaciones</li>
                <li>Explicar la misma vacante 50 veces</li>
                <li>Prestar el WhatsApp personal</li>
                <li>Verificar candidato a mano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTO ── */}
      <section id="producto" className="alt">
        <div className="wrap">
          <p className="section-tag">El producto</p>
          <h2>Así se ve.</h2>
          <p className="lead">
            Diseño validado con propietarios de restaurantes reales en CDMX.
            Toda la experiencia del candidato vive en WhatsApp.
          </p>
          <div className="screens">
            <div className="screen">
              <Image
                src="/images/wireframes/hu-c01-onboarding-wa.png"
                alt="Registro sin app por WhatsApp"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Registro sin app</b>
                <span>Por WhatsApp</span>
              </div>
            </div>
            <div className="screen">
              <Image
                src="/images/wireframes/hu-c06-vacantes-cercania.png"
                alt="Vacantes ordenadas por cercanía real"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Vacantes cercanas</b>
                <span>En tu celular</span>
              </div>
            </div>
            <div className="screen">
              <Image
                src="/images/wireframes/hu-c07-aplicar-1tap.png"
                alt="Aplicar a una vacante con un solo toque"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Aplicar en un toque</b>
                <span>Sin formularios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILOTO ── */}
      <section id="piloto">
        <div className="wrap">
          <p className="section-tag">Programa piloto</p>
          <h2>Buscamos 10 restaurantes en CDMX para el piloto.</h2>
          <p className="lead">
            Uso gratuito durante el piloto. Soporte directo del equipo. Tarifa
            preferencial por 12 meses al terminar.
          </p>

          <div className="grid two">
            <div>
              <h3>¿Qué busca Don Chambas en un negocio piloto?</h3>
              <ul className="criteria-list">
                <li>📍 Ubicado en CDMX</li>
                <li>📋 5+ vacantes al año</li>
                <li>🕐 Compromiso de 60–90 días</li>
                <li>💬 1 vacante activa para probar</li>
                <li>🤝 Retroalimentación semanal</li>
              </ul>
            </div>
            <div>
              <h3>¿Qué obtiene tu negocio?</h3>
              <ul className="criteria-list">
                <li>✓ Uso completamente gratis</li>
                <li>✓ Soporte directo del equipo fundador</li>
                <li>✓ Tarifa preferencial 12 meses post-piloto</li>
                <li>✓ Candidatos verificados</li>
                <li>✓ Comunicación automatizada</li>
              </ul>
            </div>
          </div>

          <CtaFinal
            title={
              <>
                ¿Tu restaurante califica?{" "}
                <span className="accent">Escríbenos por WhatsApp.</span>
              </>
            }
            description="Respondemos en menos de 24 horas para agendar una llamada corta y confirmar si el piloto es el siguiente paso correcto."
          >
            <a href={whatsapp(PILOT_MSG)} className="btn btn-primary">
              Escríbenos por WhatsApp →
            </a>
          </CtaFinal>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section id="equipo" className="alt">
        <div className="wrap">
          <p className="section-tag">Equipo</p>
          <h2>Tres socios fundadores. Empresa AI-first.</h2>
          <p className="lead">
            Don Chambas es el primer vertical de una empresa de transformación
            digital AI-native. Producimos en semanas lo que antes tomaba años.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Alex Blasco</h3>
              <p>
                Fundador. Producto y operaciones. Arquitectura de la plataforma
                y protocolo de agentes AI.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Diseño de producto y experiencia de usuario. Validación con
                negocios y candidatos reales.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Go-to-market, relaciones institucionales y expansión. Red
                CANIRAC y escuelas de gastronomía.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
