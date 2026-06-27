import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FlowSteps from "@/components/FlowSteps";
import MoatCard from "@/components/MoatCard";
import CtaFinal from "@/components/CtaFinal";
import { mailto } from "@/lib/config";

export const metadata: Metadata = {
  title: "Inversionistas — Don Chambas",
  description:
    "Don Chambas: la plataforma WhatsApp-first de reclutamiento para restaurantes en México con moat fintech. Conoce el modelo de negocio, los tres moats y el equipo.",
};

const INVESTOR_SUBJECT = "Interés en Don Chambas - Inversionista";

export default function InversionistasPage() {
  return (
    <>
      <Nav />

      <Hero
        eyebrow="Pitch · Confidencial · 2026"
        title={
          <>
            Una plataforma de reclutamiento.{" "}
            <span className="accent">La primera</span> de una empresa AI-first.
          </>
        }
        subtitle="Don Chambas resuelve el problema de comunicación bilateral en el reclutamiento del sector servicio en México — y construye el dataset propietario para un moat fintech defensible."
        meta={[
          { label: "Mercado objetivo", value: "~42M trabajadores operativos MX" },
          { label: "Vertical inicial", value: "Restaurantería CDMX" },
          { label: "Fase actual", value: "Diseño de producto — piloto Q3 2026" },
        ]}
      >
        <a href={mailto(INVESTOR_SUBJECT)} className="btn btn-primary">
          Agendar llamada
        </a>
      </Hero>

      {/* ── MERCADO ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">El mercado</p>
          <h2>Un problema masivo, sin solución vertical.</h2>
          <p className="lead">
            42 millones de trabajadores operativos en México. 500,000 de déficit
            solo en restaurantería. Rotación del 70–100% anual. Y todos los
            canales actuales fallan en el mismo punto: la comunicación.
          </p>
          <div className="stat-row">
            <div className="stat-block">
              <div className="num">42M</div>
              <div className="label">Trabajadores operativos en México</div>
            </div>
            <div className="stat-block">
              <div className="num">500K</div>
              <div className="label">Déficit de personal en restaurantería (CANIRAC 2026)</div>
            </div>
            <div className="stat-block">
              <div className="num">$240</div>
              <div className="label">Costo por día/vacante en Indeed — benchmark de mercado</div>
            </div>
          </div>
          <p className="lead" style={{ marginTop: "var(--sp-6)" }}>
            El sector restaurantero mexicano no se digitalizó durante el ciclo
            SaaS pasado. Sigue siendo terreno verde para el primer vertical que
            entre con un producto que respete sus dinámicas culturales.
          </p>
        </div>
      </section>

      {/* ── PROBLEMA REFRAMED ── */}
      <section>
        <div className="wrap">
          <p className="section-tag">El reencuadre</p>
          <h2>No es "encontrar candidatos". Es el costo de la vacante abierta.</h2>
          <p className="lead">
            Encontrar candidatos no es el problema — todos lo hacen. El problema
            real es la cadena de no-shows pre-contratación y la carga de
            comunicación bilateral que mata el proceso aunque ya hayas encontrado
            al candidato.
          </p>
          <blockquote className="quote">
            "La gente agenda entrevistas pero no llega y no avisa; agenda día de
            prueba y no llega; agenda primer día contratado y no llega; ya no
            vuelve al segundo o tercer día."
            <cite>— Luisa, propietaria de restaurante, CDMX · Validación directa del equipo</cite>
          </blockquote>
          <div className="grid two" style={{ marginTop: "var(--sp-8)" }}>
            <div className="card">
              <h3>Lo que los competidores resuelven</h3>
              <p>
                Distribución de vacantes. Volumen de candidatos. Filtros básicos
                de CV. Postulación masiva.
              </p>
            </div>
            <div className="card">
              <h3>Lo que Don Chambas resuelve</h3>
              <p>
                La cadena completa post-match: confirmación, recordatorios, día
                de prueba, ranking de cumplimiento, resolución de disputas.
                End-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUCIÓN ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">La solución</p>
          <h2>Seis pasos. La plataforma hace el trabajo.</h2>
          <p className="lead">
            WhatsApp como canal primario porque ya es la herramienta cultural del
            segmento NSE C/D operativo. Sin migración de usuario.
          </p>
          <FlowSteps />
        </div>
      </section>

      {/* ── MOATS ── */}
      <section className="dark">
        <div className="wrap">
          <p className="section-tag">Ventajas defensibles</p>
          <h2>Tres moats. Ningún competidor los tiene hoy.</h2>

          <MoatCard title="Ranking del candidato" badge="MOAT 1 · DEC-013">
            <p>
              Score numérico de cumplimiento — asistencia, llegada, permanencia.
              Sin reviews abiertas. El negocio ve el dato <b>antes</b> de agendar
              entrevista.
            </p>
            <p>
              <b>Por qué es defensible:</b> requiere flujo operativo cerrado (no
              solo agregar un campo). Crea el dataset propietario para
              underwriting de crédito (moat fintech).
            </p>
          </MoatCard>

          <MoatCard title="Verificación física del negocio" badge="MOAT 2 · DEC-012">
            <p>
              Visita física obligatoria al establecimiento. Outsourced a partner
              (modelo Hireright MX). Renovación anual.
            </p>
            <p>
              <b>Por qué es defensible:</b> Facebook Groups y Computrabajo no
              verifican. Indeed/OCC solo verifican domicilio fiscal. La visita
              física detecta el patrón "negocio fantasma" que los demás no ven.
            </p>
          </MoatCard>

          <MoatCard title="Reducción bilateral de fricción" badge="MOAT 3 · DEC-021">
            <p>
              Bot WA absorbe preguntas frecuentes. Confirmaciones 1-tap,
              recordatorios automáticos. Voz como modalidad de primera clase.
            </p>
            <p>
              <b>Por qué es defensible:</b> Chambas AI solo hace pre-filtro; el
              negocio sigue cargando con confirmaciones. Nadie automatiza el flujo
              bilateral end-to-end. Ventaja estructural, no feature replicable
              rápido.
            </p>
          </MoatCard>
        </div>
      </section>

      {/* ── MODELO DE NEGOCIO ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">Modelo de negocio</p>
          <h2>Pricing híbrido. Candidato siempre gratis.</h2>
          <p className="lead">
            El negocio paga una membresía con vacantes incluidas + pay-as-you-go
            para extras. El candidato nunca paga — ni por features premium.
          </p>
          <div className="biz-model-grid">
            <div className="biz-card">
              <h4 style={{ color: "var(--dc-orange)", marginBottom: "var(--sp-3)" }}>
                Negocio (B2B)
              </h4>
              <h3>Membresía mensual</h3>
              <ul>
                <li>N vacantes incluidas en la membresía base</li>
                <li>Pago por vacantes adicionales</li>
                <li>Premium per-match (expediente RH completo)</li>
                <li>Tarifa calibrada contra $240/día benchmark de Indeed</li>
              </ul>
            </div>
            <div className="biz-card">
              <h4 style={{ color: "var(--dc-orange)", marginBottom: "var(--sp-3)" }}>
                Candidato (freemium)
              </h4>
              <h3>Siempre gratis</h3>
              <ul>
                <li>Perfil completo sin costo</li>
                <li>Skills + psicométricas + antecedentes: gratis</li>
                <li>El negocio absorbe el premium vía membresía Pro/RH</li>
                <li>Sin barrera de entrada para el candidato NSE C/D</li>
              </ul>
            </div>
          </div>

          <h3 style={{ marginTop: "var(--sp-10)" }}>Trayectoria fintech</h3>
          <p style={{ color: "var(--ink-dim)", marginBottom: "var(--sp-6)" }}>
            El dataset de cumplimiento del candidato (Moat 1) + historial de
            pagos + infraestructura transaccional crean una escalera natural
            hacia servicios financieros para el sector.
          </p>
          <div className="fintech-ladder">
            <div className="ladder-step">
              <div className="step-badge">1</div>
              <div>
                <h3>Pago del día de prueba</h3>
                <p>
                  El negocio paga al candidato vía Don Chambas. Define la
                  infraestructura de dispersión desde el día 1.
                </p>
              </div>
            </div>
            <div className="ladder-step">
              <div className="step-badge">2</div>
              <div>
                <h3>Dispersión de nómina</h3>
                <p>
                  Derivado natural. El negocio que ya paga el día de prueba puede
                  dispersar la nómina completa.
                </p>
              </div>
            </div>
            <div className="ladder-step">
              <div className="step-badge">3</div>
              <div>
                <h3>Fintech vertical</h3>
                <p>
                  Dataset de cumplimiento + historial de pagos = underwriting de
                  productos financieros para trabajadores operativos del sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSICIONAMIENTO ── */}
      <section>
        <div className="wrap">
          <p className="section-tag">Posicionamiento competitivo</p>
          <h2>WhatsApp-first, verificado, ranking transparente.</h2>
          <p className="lead">
            Para el sector que Indeed/OCC ignoran y que Facebook Groups no
            protege.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="compare">
              <thead>
                <tr>
                  <th></th>
                  <th className="dc-col">Don Chambas</th>
                  <th>Indeed / OCC</th>
                  <th>Facebook Groups</th>
                  <th>Chambas AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature">Canal primario</td>
                  <td className="dc-col yes">WhatsApp + voz</td>
                  <td className="partial">Web + email</td>
                  <td className="no">FB Groups</td>
                  <td className="partial">Web/app</td>
                </tr>
                <tr>
                  <td className="feature">Ranking del candidato</td>
                  <td className="dc-col yes">Sí, numérico</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                </tr>
                <tr>
                  <td className="feature">Verificación física negocio</td>
                  <td className="dc-col yes">Sí, obligatoria</td>
                  <td className="partial">Solo fiscal</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                </tr>
                <tr>
                  <td className="feature">Automatización end-to-end</td>
                  <td className="dc-col yes">Sí</td>
                  <td className="partial">Parcial</td>
                  <td className="no">No</td>
                  <td className="partial">Solo pre-filtro</td>
                </tr>
                <tr>
                  <td className="feature">Verticalizado al sector</td>
                  <td className="dc-col yes">Sí (servicios MX)</td>
                  <td className="no">No (horizontal)</td>
                  <td className="no">No</td>
                  <td className="partial">Parcial</td>
                </tr>
                <tr>
                  <td className="feature">Pago día de prueba</td>
                  <td className="dc-col yes">Sí</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="alt">
        <div className="wrap">
          <p className="section-tag">Roadmap</p>
          <h2>De reclutamiento a fintech vertical.</h2>
          <div className="timeline">
            <div className="phase">Fase 0</div>
            <div className="label">
              <b>Concepción y Research</b>
              <span>Análisis competitivo · Plan de negocio · HUs canónicas · Validación con negocios</span>
            </div>
            <div className="when">✓ Completada</div>

            <div className="phase">Fase 1</div>
            <div className="label">
              <b>Plan de Negocios</b>
              <span>Executive summary · Sizing · Proyecciones · Go-to-market</span>
            </div>
            <div className="when">En curso</div>

            <div className="phase">Fase 2</div>
            <div className="label">
              <b>Diseño de Producto</b>
              <span>Wireframes hi-fi (29 HUs) ✓ · Spec técnica MVP · PoC WhatsApp</span>
            </div>
            <div className="when">Q3 2026</div>

            <div className="phase">Fase 3</div>
            <div className="label">
              <b>Desarrollo</b>
              <span>App MVP: Candidato WA + Negocio web + Backoffice</span>
            </div>
            <div className="when">2027</div>

            <div className="phase">Fase 4</div>
            <div className="label">
              <b>Procesos Operativos</b>
              <span>Onboarding negocios · Validación candidatos · SLAs · Playbooks</span>
            </div>
            <div className="when">2027+</div>

            <div className="phase">Fintech</div>
            <div className="label">
              <b>Trayectoria fintech</b>
              <span>Pago día prueba → Dispersión nómina → Fintech vertical</span>
            </div>
            <div className="when">2028+</div>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section>
        <div className="wrap">
          <p className="section-tag">Equipo</p>
          <h2>Tres socios. Empresa AI-first.</h2>
          <p className="lead">
            Don Chambas es el primer vertical end-to-end de una empresa de
            transformación digital AI-native. El moat de la empresa madre es la
            velocidad de iteración: producimos en semanas lo que antes tomaba
            años.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Alex Blasco</h3>
              <p>
                Fundador. Producto y operaciones. Arquitectura de la plataforma y
                protocolo de agentes AI.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Diseño de producto y UX. Validación con negocios y candidatos
                reales.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Go-to-market, relaciones institucionales. Red CANIRAC y escuelas
                de gastronomía.
              </p>
            </div>
          </div>
          <div className="grid four" style={{ marginTop: "var(--sp-8)" }}>
            <div className="card">
              <div className="num">35+</div>
              <h3>Decisiones documentadas</h3>
              <p>Con rationale completo. Cada elección de producto es trazable.</p>
            </div>
            <div className="card">
              <div className="num">36</div>
              <h3>HUs canónicas</h3>
              <p>Cortadas a MVP v0 con criterios de aceptación.</p>
            </div>
            <div className="card">
              <div className="num">29</div>
              <h3>Wireframes hi-fi</h3>
              <p>Validados con propietarios de restaurantes reales en CDMX.</p>
            </div>
            <div className="card">
              <div className="num">8 sem</div>
              <h3>README a diseño validado</h3>
              <p>De concepto a wireframes hi-fi en menos de 8 semanas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ SIGUE ── */}
      <section className="dark">
        <div className="wrap">
          <p className="section-tag">Qué sigue</p>
          <h2>Próximos hitos antes de Fase 3.</h2>
          <div className="grid two">
            <div>
              <h3>Bloque C — Especificación Técnica MVP</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Auth, validadores de identidad, motores de ranking/match/comunicación
                WA. Gate antes de iniciar desarrollo.
              </p>
            </div>
            <div>
              <h3>Bloque D — PoC WhatsApp</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Prototipo funcional del flujo candidato↔bot en WhatsApp. Valida
                stack técnico y viabilidad de la integración WA Cloud API.
              </p>
            </div>
            <div>
              <h3>Validación de pricing</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Calibrar membresía + extras con datos de pilotos reales. Cuánto
                captura mejor el mercado vs. benchmark $240/día de Indeed.
              </p>
            </div>
            <div>
              <h3>Partner de verificación física</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Identificar y contratar el partner de visitas físicas (modelo
                Hireright MX). Input directo a unit economics.
              </p>
            </div>
          </div>
          <CtaFinal
            title={
              <>
                ¿Quieres saber más? <span className="accent">Hablemos.</span>
              </>
            }
            description="Compartimos el pitch completo, proyecciones y unit economics en una llamada confidencial de 30 minutos."
            style={{ marginTop: "var(--sp-10)" }}
          >
            <a href={mailto(INVESTOR_SUBJECT)} className="btn btn-primary">
              Agendar llamada →
            </a>
          </CtaFinal>
        </div>
      </section>

      <Footer />
    </>
  );
}
