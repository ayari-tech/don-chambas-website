/**
 * Configuración central de contacto y marca.
 *
 * ⚠️ PLACEHOLDERS — reemplazar antes de lanzar:
 *  - CONTACT_EMAIL: confirmar que el buzón existe y se monitorea.
 *  - WHATSAPP_NUMBER: número real de WhatsApp Business en formato internacional
 *    sin "+" ni espacios (ej. 5215512345678). Mientras sea placeholder, los
 *    enlaces wa.me NO funcionarán.
 */

export const CONTACT_EMAIL = "hola@donchambas.com.mx";

// PLACEHOLDER — número de WhatsApp Business (formato internacional, sin +).
export const WHATSAPP_NUMBER = "525500000000";

export const SITE_URL = "https://donchambas.com.mx";

/** Construye un enlace mailto con asunto y cuerpo opcional. */
export function mailto(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

/** Construye un enlace click-to-chat de WhatsApp con mensaje pre-llenado. */
export function whatsapp(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
