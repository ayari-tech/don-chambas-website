# Agent Protocol — don-chambas-website

Entry point para cualquier agente que trabaje en este repo. Léelo antes de empezar.

---

## 1. What This Is

Sitio web público de **Don Chambas** — reclutamiento de personal para el sector restaurantero en México. Stack: **Next.js 16 (App Router) + TypeScript**, sin Tailwind (usa los design tokens de la marca). Desplegado en **Vercel** con auto-deploy desde `main`.

Para contexto completo de negocio, decisiones de producto, wireframes y branding ver `don-chambas-hq`.

---

## 1.1 Estado actual (2026-06-27)

**Vivo en:** https://don-chambas-website.vercel.app/ (dominio `donchambas.com.mx` aún SIN conectar).

### Decisión clave: sitio público MÍNIMO
El sitio se redujo a propósito a una **pantalla de presentación** + legales, para **no dar información que sirva de inspiración a competidores**. Lo sensible (moats, modelo de pricing, trayectoria fintech, roadmap, pasos del producto, screenshots de la app) **NO va en la web** — se comparte 1:1 en privado usando el pitch deck de `don-chambas-hq/docs/comms/`.

**Páginas actuales:**
- `/` — slide de presentación: headline "Reclutamiento de personal para el sector restaurantero", slogan "¿Buscas jale o quien jale?", subtítulo "Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye", CTA "Contáctanos". Watermark "DON" de marca en el fondo.
- `/contacto` — email + derechos ARCO + ubicación. Sin piloto, sin WhatsApp CTA.
- `/privacidad` — aviso LFPDPPP (borrador, pendiente revisión legal). Ancla `#eliminar-datos` para Meta.
- `/terminos` — términos (borrador).
- `opengraph-image`, `icon.svg`, `sitemap.ts`, `robots.ts`.

**Estructura:** `src/app/*` (páginas), `src/components/` (`Nav`, `Footer`), `src/lib/config.ts` (contacto centralizado), `public/styles/` (`tokens.css` + `base.css` copiados de hq, `site.css` overrides).

### Requisitos de Meta (app WhatsApp Business `n8n-don-chambas`, App ID 2249880045750740)
El sitio cubre los campos de la app: Privacy Policy URL → `/privacidad`, Terms URL → `/terminos`, Data Deletion URL → `/privacidad#eliminar-datos`. Ícono 1024×1024 generado (en el Escritorio del owner). Falta verificación de negocio (requiere razón social real).

### Pendientes
- [ ] Conectar dominio `donchambas.com.mx` en Vercel (Settings → Domains)
- [ ] Email de contacto real: el sitio usa `hola@donchambas.com.mx` (placeholder en `src/lib/config.ts`); Meta usa `a.blascoalmeida@gmail.com`. Alinear / crear buzón.
- [ ] Razón social / entidad legal (para legales y verificación de negocio de Meta)
- [ ] Subir el ícono 1024 a la app de Meta
- [ ] Cifras de mercado y nombres del equipo: actualmente NO se muestran en el sitio mínimo; viven en el material privado.

### Dev / deploy
- `npm run dev` (localhost:3000) · `npm run build` · push a `main` → Vercel redeploya solo (~1 min).

---

## 2. Fuentes externas (Notion + Google Drive)

- **Notion** — vía el conector de cuenta claude.ai (`mcp__claude_ai_Notion__*`). PM y documentación del proyecto en las DBs de Don Chambas (IDs y schema en `don-chambas-hq/CLAUDE.md` §3).
- **Google Drive** — la carpeta `Don Chambas` del Drive personal se autoriza para lectura local agregando su ruta a `.claude/settings.local.json` (no versionado) bajo `permissions.additionalDirectories`:
  `~/<tu Drive personal>/My Drive/Don Chambas`
  Útil para el diseño del sitio: contiene `wireframes & mockups`, material de identidad de marca y `documents`. Assets de marca adicionales viven en `don-chambas-hq/docs/comms/` (logo `assets/images/logo-don.svg`, `tokens.css`, copy en `narrativa-don-chambas-v1.md`).
  Nota: los nativos de Google (`.gsheet`/`.gdoc`/`.gform`) son punteros sin contenido local — exportar a `.xlsx`/`.pdf` para leerlos.

---

## 3. Conventions

- **Language:** Contenido en español neutro mexicano. Commits en inglés.
- **Dates:** YYYY-MM-DD absolutas.
- Mismas convenciones del proyecto — ver `don-chambas-hq/CLAUDE.md`.

---

## 4. Links

- **Proyecto hq:** https://github.com/ablascoa/don-chambas-hq
- **App (backend):** https://github.com/ablascoa/don-chambas-app
- **Notion Home:** https://www.notion.so/32d666f0254781aa83a2cf791bd0856a
