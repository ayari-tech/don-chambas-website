"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

function ensureInit(): boolean {
  if (!KEY) return false;
  if (!initialized) {
    posthog.init(KEY, {
      api_host: HOST,
      // Cookieless: nada persiste entre visitas → sin banner de consentimiento.
      persistence: "sessionStorage",
      capture_pageview: false, // manual, por cambio de ruta (App Router)
      capture_pageleave: true,
      autocapture: false, // solo eventos explícitos vía data-analytics-event
    });
    initialized = true;
  }
  return true;
}

/**
 * Analítica cookieless con PostHog (DEC-W006). No-op si
 * NEXT_PUBLIC_POSTHOG_KEY no está definida (dev y previews sin key).
 *
 * Los enlaces a trackear se marcan en los server components con
 * data-analytics-event="<nombre>" + data-analytics-cta="<cta>"; el medio
 * (mailto/whatsapp) se deriva del href al momento del clic, para que el
 * evento sobreviva el cambio de mailto a wa.me sin tocar las páginas.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!ensureInit()) return;
    posthog.capture("$pageview", { $current_url: window.location.href });
  }, [pathname]);

  useEffect(() => {
    if (!KEY) return;
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!el || !ensureInit()) return;
      const href = el.getAttribute("href") ?? "";
      posthog.capture(el.dataset.analyticsEvent as string, {
        cta: el.dataset.analyticsCta,
        medio: href.startsWith("mailto:")
          ? "mailto"
          : href.includes("wa.me")
            ? "whatsapp"
            : "otro",
        destino: href.split("?")[0],
        pagina: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
