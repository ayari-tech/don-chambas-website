import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Términos de Uso — Don Chambas",
  description:
    "Términos y condiciones de uso de la plataforma Don Chambas para candidatos y negocios de servicio en México.",
};

const LAST_UPDATED = "2026-06-26";

export default function TerminosPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-body">
          <h1>Términos de Uso</h1>
          <p className="last-updated">Última actualización: {LAST_UPDATED}</p>
          <div className="banner">
            ⚠️ <strong>Versión preliminar.</strong> Estos términos están en
            proceso de revisión legal. Serán revisados por un abogado antes del
            lanzamiento del piloto y publicados en su versión final.
          </div>

          <h2>1. Descripción del servicio</h2>
          <p>
            Don Chambas es una plataforma digital de reclutamiento WhatsApp-first
            que conecta a negocios de servicio (principalmente restaurantes) con
            candidatos para posiciones operativas en México, comenzando en Ciudad
            de México.
          </p>
          <p>
            El servicio incluye: registro de candidatos vía WhatsApp, generación
            de perfil asistida por IA, publicación de vacantes por parte de
            negocios verificados, matching de candidatos, ranking de cumplimiento,
            comunicación automatizada, Kanban de candidatos para el negocio, y
            soporte de Backoffice para disputas pre-contratación.
          </p>

          <h2>2. Elegibilidad y registro</h2>
          <p>
            Para usar Don Chambas debes:
          </p>
          <ul>
            <li>
              <strong>Si eres candidato:</strong> tener 18 años o más, residir
              en México y contar con un número de teléfono celular con WhatsApp
              activo.
            </li>
            <li>
              <strong>Si eres negocio:</strong> operar un establecimiento de
              servicio en México con actividad económica real. Los negocios
              deben completar el proceso de verificación física antes de publicar
              vacantes.
            </li>
          </ul>
          <p>
            Al registrarte, aceptas que la información proporcionada es
            verdadera, completa y actualizada.
          </p>

          <h2>3. Uso aceptable</h2>
          <p>Está prohibido usar Don Chambas para:</p>
          <ul>
            <li>
              Publicar vacantes falsas, fraudulentas o con información engañosa.
            </li>
            <li>
              Solicitar depósitos, pagos de uniformes o cualquier cantidad de
              dinero a candidatos como condición para aplicar o ser contratados.
            </li>
            <li>
              Contactar candidatos fuera de la plataforma con fines de acoso,
              discriminación o explotación.
            </li>
            <li>
              Crear perfiles falsos de candidatos o negocios.
            </li>
            <li>
              Enviar mensajes no solicitados (spam) a través de los canales de
              comunicación de la plataforma.
            </li>
            <li>
              Intentar eludir los mecanismos de verificación de identidad o
              del negocio.
            </li>
            <li>
              Usar la plataforma para actividades ilegales o contrarias a las
              leyes aplicables en México.
            </li>
          </ul>

          <h2>4. WhatsApp y consentimiento de mensajes</h2>
          <p>
            Al registrarte en Don Chambas a través de WhatsApp, otorgas tu
            consentimiento <strong>explícito</strong> para recibir mensajes
            relacionados con el servicio — confirmaciones, recordatorios,
            notificaciones de vacantes y actualizaciones de tu proceso de
            reclutamiento.
          </p>
          <p>
            Don Chambas no enviará mensajes publicitarios de terceros sin tu
            consentimiento previo. Puedes retirar tu consentimiento en cualquier
            momento respondiendo "STOP" o escribiendo a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            El uso de WhatsApp como canal de comunicación está sujeto adicionalmente
            a las{" "}
            <a
              href="https://www.whatsapp.com/legal/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Condiciones de Servicio de WhatsApp
            </a>
            .
          </p>

          <h2>5. Ranking de cumplimiento</h2>
          <p>
            Don Chambas genera un score numérico de cumplimiento para cada
            candidato basado en datos objetivos: asistencia a entrevistas,
            llegada al primer día de prueba y permanencia durante la primera
            semana de empleo.
          </p>
          <p>
            El candidato reconoce y acepta que este ranking será visible para
            los negocios registrados antes de que decidan agendar una entrevista.
            Los comentarios cualitativos de los negocios sobre el candidato son
            privados y no se comparten públicamente.
          </p>
          <p>
            Si el candidato considera que su ranking refleja información
            incorrecta, puede solicitar revisión escribiendo a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>6. Verificación física del negocio</h2>
          <p>
            Todo negocio que desee publicar vacantes en Don Chambas debe
            completar una visita de verificación física a su establecimiento,
            realizada por un partner autorizado de Don Chambas. Esta verificación
            confirma que el negocio opera en la dirección declarada y cumple
            con los criterios básicos de la plataforma.
          </p>
          <p>
            La verificación tiene vigencia anual y debe renovarse cuando cambie
            el representante legal o la dirección del establecimiento.
          </p>

          <h2>7. Responsabilidades</h2>

          <h3>7.1 Don Chambas se compromete a:</h3>
          <ul>
            <li>Mantener la plataforma disponible con esfuerzos comercialmente razonables.</li>
            <li>Proteger los datos personales conforme al Aviso de Privacidad.</li>
            <li>Proporcionar soporte de Backoffice para disputas pre-contratación.</li>
            <li>Notificar cambios significativos en el servicio o estos términos con anticipación razonable.</li>
          </ul>

          <h3>7.2 El usuario (candidato o negocio) se compromete a:</h3>
          <ul>
            <li>Proporcionar información veraz y actualizada en su perfil.</li>
            <li>Usar la plataforma de buena fe y conforme a estos términos.</li>
            <li>No compartir sus credenciales de acceso con terceros.</li>
            <li>Notificar a Don Chambas cualquier uso no autorizado de su cuenta.</li>
          </ul>

          <h2>8. Limitación de responsabilidad</h2>
          <p>
            Don Chambas facilita la conexión entre candidatos y negocios, pero
            no es parte de la relación laboral resultante. No garantiza que el
            candidato sea contratado ni que el negocio llene su vacante en un
            plazo determinado.
          </p>
          <p>
            Don Chambas no es responsable por daños directos, indirectos o
            incidentales derivados del uso de la plataforma, incluyendo — sin
            limitarse a — pérdidas de ingresos, tiempo o datos.
          </p>
          <p>
            La responsabilidad máxima de Don Chambas ante cualquier reclamación
            no excederá el monto pagado por el usuario en los últimos tres meses
            de servicio. Para usuarios del programa piloto (uso gratuito), la
            responsabilidad máxima es de $0.
          </p>

          <h2>9. Propiedad intelectual</h2>
          <p>
            El contenido, marca, nombre comercial, logotipo y tecnología de Don
            Chambas son propiedad de sus fundadores y están protegidos por las
            leyes de propiedad intelectual aplicables en México. Queda prohibida
            su reproducción, distribución o uso sin autorización escrita.
          </p>

          <h2>10. Modificaciones al servicio y estos términos</h2>
          <p>
            Don Chambas puede modificar estos términos en cualquier momento.
            Los cambios se publicarán en esta página con la fecha de actualización.
            El uso continuado de la plataforma tras la publicación de cambios
            implica su aceptación.
          </p>

          <h2>11. Terminación</h2>
          <p>
            Don Chambas puede suspender o cancelar tu acceso a la plataforma si
            incumples estos términos, sin previo aviso en casos de uso fraudulento
            o que cause daño a otros usuarios.
          </p>
          <p>
            Puedes cancelar tu cuenta en cualquier momento escribiendo a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. La
            cancelación implica la eliminación de tu perfil conforme al Aviso de
            Privacidad.
          </p>

          <h2>12. Legislación aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
            Para cualquier controversia derivada de estos términos, las partes
            se someten a la jurisdicción de los tribunales competentes de la
            Ciudad de México, renunciando a cualquier otro fuero que pudiera
            corresponderles.
          </p>

          <h2>13. Contacto</h2>
          <p>
            Para cualquier pregunta sobre estos términos o el servicio:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>Ciudad de México, México</li>
          </ul>

          <p style={{ marginTop: "var(--sp-10)", color: "var(--ink-muted)", fontSize: "var(--fs-sm)" }}>
            Don Chambas — Ciudad de México |{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
