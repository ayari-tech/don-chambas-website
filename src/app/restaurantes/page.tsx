import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CtaFinal from "@/components/CtaFinal";
import { whatsapp } from "@/lib/config";

export const metadata: Metadata = {
  title: "Para Restaurantes — Don Chambas",
  description:
    "Llena tus vacantes en días, no semanas. Candidatos verificados, comunicación automatizada, ranking de cumplimiento. Únete al programa piloto en CDMX.",
};

const PILOT_MSG =
  "Hola, me interesa el programa piloto de Don Chambas. Mi restaurante está en CDMX y tenemos más de 5 vacantes al año.";

export default function RestaurantesPage() {
  return (
    <>
      <Nav />

      <Hero
        eyebrow="Programa piloto · CDMX · 2026"
        title={
          <>
            Llena tus vacantes en{" "}
            <span className="accent">días, no semanas.</span>
          </>
        }
        subtitle="Candidatos verificados físicamente, con ranking de cumplimiento visible antes de agendar entrevista. Sin perseguir no-shows. Sin prestar tu WhatsApp personal."
        meta={[
          { label: "Costo del piloto", value: "$0 — completamente gratis" },
          { label: "Duración", value: "60–90 días" },
          { label: "Post-piloto", value: "Tarifa preferencial 12 meses" },
        ]}
      >
        <a href={whatsapp(PILOT_MSG)} className="btn btn-primary">
          Quiero el piloto — es gratis
        </a>
      </Hero>

      {/* ── DOLORES ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">El problema que ya conoces</p>
          <h2>Reclutamiento roto en cuatro frentes.</h2>
          <p className="lead">
            No es difícil encontrar candidatos. El problema es la cadena de
            no-shows, las confirmaciones que nunca llegan y el tiempo que consume
            tu semana en perseguir gente que nunca va a llegar.
          </p>
          <div className="grid four">
            <div className="card">
              <div className="num">70%</div>
              <h3>Rotación anual</h3>
              <p>
                La industria restaurantera convive con rotación sostenidamente
                alta. Cada vacante cubierta vuelve a abrirse en meses.
              </p>
            </div>
            <div className="card">
              <div className="num">$240</div>
              <h3>Por día en Indeed</h3>
              <p>
                Pagas y aún así filtras 100+ mensajes irrelevantes a mano. El
                tiempo del dueño vale más que eso.
              </p>
            </div>
            <div className="card">
              <div className="num">0</div>
              <h3>Verificación real</h3>
              <p>
                Facebook Groups no verifica a nadie. Negocios fantasma, scams de
                "depósito de uniforme", candidatos que no existen.
              </p>
            </div>
            <div className="card">
              <div className="num">∞</div>
              <h3>Mensajes sin respuesta</h3>
              <p>
                Confirmaciones manuales, mismo mensaje enviado 50 veces,
                WhatsApp personal prestado, nadie que sepa si lo vieron.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section>
        <div className="wrap">
          <p className="section-tag">Lo que hace Don Chambas por tu negocio</p>
          <h2>Seis herramientas en una plataforma.</h2>
          <p className="lead">
            Todo lo que hoy haces a mano, automatizado. Todo lo que hoy no
            puedes ver, visible.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon" aria-hidden="true">✓</div>
              <h3>Verificación física del negocio</h3>
              <p>
                Antes de publicar cualquier vacante, verificamos tu
                establecimiento con una visita física. El candidato sabe que el
                negocio es real.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon" aria-hidden="true">📊</div>
              <h3>Ranking de cumplimiento</h3>
              <p>
                Cada candidato tiene un score numérico — asistencias, puntualidad,
                permanencia. Lo ves antes de agendar. Sin sorpresas.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon" aria-hidden="true">💬</div>
              <h3>Chat directo sin WhatsApp personal</h3>
              <p>
                Comunicación con el candidato desde la plataforma. Sin prestar tu
                número. Sin mezclar candidatos con amigos.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon" aria-hidden="true">📋</div>
              <h3>Kanban de candidatos</h3>
              <p>
                Visualiza tu funnel de reclutamiento: quién aplicó, quién
                confirmó entrevista, quién pasó el día de prueba.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon" aria-hidden="true">🤖</div>
              <h3>Confirmaciones automáticas</h3>
              <p>
                Recordatorios automáticos antes de entrevista y día de prueba.
                El bot absorbe las preguntas del candidato. Sin perseguir.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon" aria-hidden="true">🕐</div>
              <h3>Historial entre empleadores</h3>
              <p>
                El candidato tiene un historial cruzado entre negocios — no solo
                lo que dice de sí mismo. Toma decisiones con datos reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO ES EL PILOTO ── */}
      <section id="piloto" className="dark">
        <div className="wrap">
          <p className="section-tag">El programa piloto</p>
          <h2>Gratis. Con soporte directo. Sin compromisos de largo plazo.</h2>
          <p className="lead">
            Buscamos 10 restaurantes en CDMX para validar la plataforma antes del
            lanzamiento. Tú pones la vacante; nosotros ponemos el producto y el
            equipo.
          </p>
          <div className="grid two">
            <div>
              <h3>¿Qué buscamos en un negocio piloto?</h3>
              <ul className="criteria-list">
                <li>📍 Ubicado en CDMX</li>
                <li>📋 Mínimo 5 vacantes al año</li>
                <li>🕐 Compromiso de 60–90 días</li>
                <li>💬 1 vacante activa para probar desde el día 1</li>
                <li>🤝 Retroalimentación semanal (30 min)</li>
                <li>📸 Disponibilidad para visita de verificación</li>
              </ul>
            </div>
            <div>
              <h3>¿Qué obtiene tu negocio?</h3>
              <ul className="criteria-list">
                <li>✓ Uso 100% gratuito durante el piloto</li>
                <li>✓ Soporte directo del equipo fundador</li>
                <li>✓ Tarifa preferencial por 12 meses al terminar</li>
                <li>✓ Candidatos verificados y rankeados</li>
                <li>✓ Comunicación automatizada desde día 1</li>
                <li>✓ Reporte de resultados del piloto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">Preguntas frecuentes</p>
          <h2>Lo que más nos preguntan.</h2>
          <div className="faq">
            <div className="faq-item">
              <h4>¿Necesito instalar alguna app?</h4>
              <p>
                No. El candidato se registra por WhatsApp sin descargar nada. El
                negocio accede al Kanban desde cualquier navegador web.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Qué pasa después del piloto?</h4>
              <p>
                Si los resultados son buenos, te ofrecemos tarifa preferencial
                por 12 meses. Sin presión — el piloto es para validar que el
                producto funciona para tu operación específica.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Cómo funciona la verificación del negocio?</h4>
              <p>
                Un partner de verificación agenda una visita corta a tu
                establecimiento. Confirmamos que la operación es real y que
                cumple con los criterios de Don Chambas. Renovación anual.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Los candidatos saben que están siendo rankeados?</h4>
              <p>
                Sí. La transparencia es parte del modelo. El candidato sabe que
                su cumplimiento genera un score que los negocios pueden ver. Eso
                es exactamente lo que crea el accountability que reduce los
                no-shows.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Qué tipo de vacantes puedo publicar?</h4>
              <p>
                Cualquier posición operativa de servicio: mesero, cocinero,
                ayudante de cocina, host, barista, repartidor. El piloto empieza
                con restaurantes; después expandimos.
              </p>
            </div>
            <div className="faq-item">
              <h4>¿Cuánto tiempo toma llenar una vacante?</h4>
              <p>
                El objetivo del piloto es demostrarlo con datos. Hoy el benchmark
                del sector es semanas. Don Chambas apunta a días — con candidatos
                que realmente lleguen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section>
        <div className="wrap">
          <CtaFinal
            title={
              <>
                ¿Tu restaurante califica?{" "}
                <span className="accent">Escríbenos hoy.</span>
              </>
            }
            description="Respondemos en menos de 24 horas para agendar una llamada corta de 20 minutos. Sin compromiso. Sin letra chica."
          >
            <a href={whatsapp(PILOT_MSG)} className="btn btn-primary">
              Escríbenos por WhatsApp →
            </a>
          </CtaFinal>
        </div>
      </section>

      <Footer />
    </>
  );
}
