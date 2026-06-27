import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Don Chambas",
  description:
    "Aviso de privacidad de Don Chambas. Conoce cómo tratamos tus datos personales conforme a la LFPDPPP y cómo ejercer tus derechos ARCO.",
};

const LAST_UPDATED = "2026-06-26";

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-body">
          <h1>Aviso de Privacidad</h1>
          <p className="last-updated">Última actualización: {LAST_UPDATED}</p>
          <div className="banner">
            ⚠️ <strong>Versión preliminar.</strong> Este aviso está en proceso
            de revisión legal externa conforme a la LFPDPPP. Antes del
            lanzamiento del piloto, será revisado por un abogado especializado
            en protección de datos en México.
          </div>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>Don Chambas</strong> (en proceso de constitución como
            persona moral en México, Ciudad de México) es el responsable del
            tratamiento de los datos personales que recabe en el marco de sus
            servicios de plataforma de reclutamiento.
          </p>
          <p>
            Para cualquier asunto relacionado con este aviso de privacidad,
            incluyendo el ejercicio de derechos ARCO, puedes contactarnos en:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

          <h2>2. Datos personales que recabamos</h2>

          <h3>2.1 Candidatos</h3>
          <ul>
            <li>
              <strong>Identificación:</strong> nombre completo, número de
              teléfono celular, CURP, número de INE/IFE, fotografía (liveness
              check digital).
            </li>
            <li>
              <strong>Perfil profesional:</strong> historial laboral, habilidades,
              nivel de estudios, disponibilidad horaria, zonas de desplazamiento.
            </li>
            <li>
              <strong>Datos de cumplimiento:</strong> asistencia a entrevistas,
              puntualidad, permanencia en la primera semana de empleo. Estos
              datos conforman el ranking de cumplimiento del candidato.
            </li>
            <li>
              <strong>Comunicaciones:</strong> mensajes enviados a través del
              bot de WhatsApp y la plataforma.
            </li>
          </ul>

          <h3>2.2 Negocios</h3>
          <ul>
            <li>
              <strong>Datos de la empresa:</strong> nombre comercial, razón
              social, RFC, domicilio del establecimiento, giro comercial.
            </li>
            <li>
              <strong>Representante legal:</strong> nombre, cargo, teléfono de
              contacto, correo electrónico.
            </li>
            <li>
              <strong>Datos de operación:</strong> vacantes publicadas,
              candidatos contactados, historial de contrataciones.
            </li>
          </ul>

          <h2>3. Finalidades del tratamiento</h2>

          <h3>3.1 Finalidades primarias (necesarias para el servicio)</h3>
          <ul>
            <li>
              Conectar candidatos con negocios de servicio que tienen vacantes
              disponibles.
            </li>
            <li>
              Generar y gestionar el perfil del candidato, incluyendo su ranking
              de cumplimiento.
            </li>
            <li>
              Verificar la identidad del candidato mediante INE y selfie liveness.
            </li>
            <li>
              Facilitar la comunicación entre candidato y negocio a través de la
              plataforma.
            </li>
            <li>
              Gestionar la verificación física del establecimiento del negocio
              (a través de un partner externo).
            </li>
            <li>
              Procesar el pago del día de prueba cuando aplique.
            </li>
            <li>
              Resolver disputas previas a la contratación con apoyo del equipo
              de Backoffice.
            </li>
          </ul>

          <h3>3.2 Finalidades secundarias (opcionales)</h3>
          <ul>
            <li>
              Enviarte comunicaciones sobre el estado de la plataforma,
              actualizaciones de servicio o información sobre el piloto.
            </li>
            <li>
              Usar datos agregados y anonimizados para análisis estadístico del
              mercado laboral del sector servicio en México.
            </li>
          </ul>
          <p>
            Si no deseas que tus datos sean tratados para finalidades secundarias,
            puedes indicarlo escribiéndonos a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>4. Transferencias de datos</h2>
          <p>
            Don Chambas podrá transferir tus datos personales a los siguientes
            terceros, en los términos que indica la LFPDPPP:
          </p>
          <ul>
            <li>
              <strong>Meta Platforms (WhatsApp):</strong> como canal primario de
              comunicación. Los mensajes enviados a través de WhatsApp están
              sujetos a las{" "}
              <a
                href="https://www.whatsapp.com/legal/business-data-processing-terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Condiciones de datos empresariales de WhatsApp
              </a>
              .
            </li>
            <li>
              <strong>Proveedor de telefonía / BSP (por definir):</strong>{" "}
              Twilio, 360dialog u otro Business Solution Provider para el envío
              de mensajes a través de la WhatsApp Business API.
            </li>
            <li>
              <strong>Partner de verificación física:</strong> empresa externa
              que realiza visitas de verificación a los establecimientos de los
              negocios registrados.
            </li>
            <li>
              <strong>Proveedor de verificación de identidad:</strong> para el
              proceso de validación de INE y selfie liveness del candidato.
            </li>
          </ul>
          <p>
            Estas transferencias son necesarias para la prestación del servicio
            y no requieren tu consentimiento adicional conforme al artículo 37
            de la LFPDPPP. No vendemos tus datos personales a terceros con fines
            publicitarios.
          </p>

          <h2 id="eliminar-datos">5. Derechos ARCO y eliminación de datos</h2>
          <p>
            Tienes derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong>{" "}
            (derechos ARCO) al tratamiento de tus datos personales. Para
            ejercer estos derechos:
          </p>
          <ul>
            <li>
              Envía un correo a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> con asunto
              "Ejercicio de derechos ARCO".
            </li>
            <li>
              Incluye tu nombre completo, número de teléfono registrado y una
              descripción del derecho que deseas ejercer.
            </li>
            <li>
              Te responderemos en un plazo máximo de 20 días hábiles conforme a
              la LFPDPPP.
            </li>
          </ul>

          <h2>6. Mecanismo de consentimiento</h2>
          <p>
            Al registrarte en Don Chambas a través de WhatsApp o la plataforma
            web, manifiestas tu consentimiento expreso para el tratamiento de
            tus datos personales conforme a este aviso de privacidad.
          </p>
          <p>
            El uso de la plataforma implica que has leído y aceptado este aviso.
            Para candidatos, el consentimiento también se obtiene en el flujo de
            onboarding del bot de WhatsApp, donde se te solicita confirmación
            explícita.
          </p>

          <h2>7. Cookies y tecnologías de rastreo</h2>
          <p>
            El sitio web de Don Chambas (<strong>donchambas.com.mx</strong>)
            puede utilizar cookies esenciales para el funcionamiento del sitio.
            No utilizamos cookies de rastreo publicitario de terceros.
          </p>
          <p>
            Puedes configurar tu navegador para rechazar o eliminar cookies, sin
            que esto afecte el acceso a la información del sitio.
          </p>

          <h2>8. Seguridad de los datos</h2>
          <p>
            Don Chambas implementa medidas técnicas y organizativas razonables
            para proteger tus datos personales contra acceso no autorizado,
            pérdida o alteración. Las comunicaciones entre tu dispositivo y
            nuestra plataforma se realizan mediante conexiones cifradas (HTTPS).
          </p>

          <h2>9. Plazo de conservación</h2>
          <p>
            Conservamos tus datos personales mientras tengas una cuenta activa
            en la plataforma y por el tiempo necesario para cumplir con
            obligaciones legales. Si solicitas la cancelación de tu cuenta,
            eliminaremos o anonimizaremos tus datos en un plazo de 30 días
            hábiles, salvo que la ley nos obligue a conservarlos por más tiempo.
          </p>

          <h2>10. Cambios a este aviso</h2>
          <p>
            Nos reservamos el derecho de modificar este aviso de privacidad en
            cualquier momento. Las modificaciones se publicarán en esta página
            con la fecha de actualización indicada al inicio del documento. Te
            recomendamos revisarlo periódicamente.
          </p>
          <p>
            Si los cambios son significativos, te notificaremos a través del
            canal de comunicación registrado (WhatsApp o correo electrónico).
          </p>

          <h2>11. Autoridad de protección de datos</h2>
          <p>
            Si consideras que tu derecho a la protección de datos personales ha
            sido lesionado, puedes acudir al Instituto Nacional de Transparencia,
            Acceso a la Información y Protección de Datos Personales (INAI) en{" "}
            <a
              href="https://home.inai.org.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              home.inai.org.mx
            </a>
            .
          </p>

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
