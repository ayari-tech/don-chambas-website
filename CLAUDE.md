# Agent Protocol — don-chambas-website

Entry point para cualquier agente que trabaje en este repo. Léelo antes de empezar.

---

## 1. What This Is

Sitio web público de **Don Chambas** — reclutamiento de personal para el sector restaurantero en México. Stack: **Next.js 16 (App Router) + TypeScript**, sin Tailwind (usa los design tokens de la marca). Desplegado en **Vercel** con auto-deploy desde `main`.

Para contexto completo de negocio, decisiones de producto, wireframes y branding ver `don-chambas-hq`.

---

## 1.1 Estado actual (2026-07-06)

**Vivo en:** https://don-chambas-website.vercel.app/ (dominio `donchambas.com.mx` aún SIN conectar).

### Decisión clave: sitio público MÍNIMO
El sitio se redujo a propósito a una **pantalla de presentación** + legales, para **no dar información que sirva de inspiración a competidores**. Lo sensible (moats, modelo de pricing, trayectoria fintech, roadmap, pasos del producto, screenshots de la app) **NO va en la web** — se comparte 1:1 en privado usando el pitch deck de `don-chambas-hq/docs/comms/`.

**Páginas actuales:**
- `/` — slide de presentación: lockup brush oficial (wordmark + tagline + sparkles), headline "Reclutamiento de personal para el **sector restaurantero**" (acento ámbar), nota manuscrita, CTA único "Contáctanos" (mailto; pasará a "Mándanos un wats" cuando exista número real, §7.4), mascota `mascota_color`, tira de personajes. Watermark de tile oficial + sparkles animados en el fondo.
- `/piloto` — programa piloto para negocios restauranteros (fricciones de contratación). CTA `.btn-cta` → `partnerships@donchambas.com.mx`.
- `/carreras` — "Ayúdanos a construir Don Chambas": reclutamiento de talento (marketing, tech, diseño de producto). CTA → `careers@donchambas.com.mx`.
- `/contacto` — email + derechos ARCO + ubicación. Sin WhatsApp CTA.
- `/privacidad` — aviso LFPDPPP (borrador, pendiente revisión legal). Ancla `#eliminar-datos` para Meta.
- `/terminos` — términos (borrador).
- `opengraph-image` (lockup oficial embebido), `icon.tsx` (busto de la mascota sobre navy), `sitemap.ts`, `robots.ts`.

### Branding (sync brand v1, 2026-07-06 — DEC-W005)
El sitio consume la marca canónica del repo **`don-chambas-brand`** (manual v1 + tokens):
- **Sync de derivados:** `public/styles/tokens.css` y `componentes.css` son copias de
  `don-chambas-brand/dist/derivados/` — **NUNCA se editan a mano**. Para actualizar:
  `sed '/Dev local/,/fonts.googleapis.com/d' ../don-chambas-brand/dist/derivados/tokens.css > public/styles/tokens.css`
  (quita el `@import` dev, autorizado por el header del archivo) + `cp` literal de `componentes.css`,
  en un commit `sync brand vX`. Lo único editable a mano es `site.css`.
- **Fuentes canónicas (C3):** display **Space Grotesk** (500/700), cuerpo **Inter**, script **Caveat 600**
  (solo acentos de marketing). Cargadas vía `next/font` en `src/app/layout.tsx` → variables
  `--font-*-next` cableadas a los tokens al inicio de `site.css`.
- **Color:** roles canónicos — `--dc-primary` navy dominante, `--dc-accent` ámbar (**nunca texto sobre
  fondo claro**), `--dc-brand-red #D31E1D` (decorativo marketing: sparkles), `--dc-error #B23636`
  (solo funcional). Los tokens lúdicos viejos (`--grad-warm`, `--brush-shadow`, `.highlight`, `.marker`)
  se retiraron (DEC-W005).
- **Botones canónicos:** `.btn-primary` navy sólido, `.btn-secondary` borde navy, `.btn-cta` ámbar
  (un CTA crítico por pantalla).
- **Assets en `public/images/brand/`**: copias literales de `don-chambas-brand/assets/` con nombres
  canónicos — lockups SVG, `wordmark_amarillo-blanco.png` (nav), `personaje_*_rojo.png` (banda de
  oficios: mesero-clasico, cocinero, cajera, bartender, lavaloza), `mascota_color.png`,
  `mascota-busto_blanco.png` (favicon), tiles de watermark (opacidad 4 % en web; rango del manual 3–6 %).
- **Reglas duras:** el wordmark jamás se reconstruye con fuentes vivas (favicon/OG/watermark usan
  assets); tagline con apóstrofe U+2019 (`pa'`); sin `font-family` ni hex de marca hardcodeados
  fuera de tokens (excepción: `icon.tsx`/`opengraph-image.tsx`, que no leen CSS vars).
- **Componentes** (`src/components/`): `BrushWordmark` (lockup por variante de fondo), `CharacterStrip`, `Sparkle`, `Watermark`.

**Estructura:** `src/app/*` (páginas), `src/components/` (`Nav`, `Footer`, `BrushWordmark`, `CharacterStrip`, `Sparkle`, `Watermark`, `Icon`), `src/lib/config.ts` (contacto + Instagram centralizados), `public/styles/` (`tokens.css` + `componentes.css` synced + `site.css` local), `public/images/brand/` (assets de marca).

### Requisitos de Meta (app WhatsApp Business `n8n-don-chambas`, App ID 2249880045750740)
El sitio cubre los campos de la app: Privacy Policy URL → `/privacidad`, Terms URL → `/terminos`, Data Deletion URL → `/privacidad#eliminar-datos`. Ícono 1024×1024 generado (en el Escritorio del owner). Falta verificación de negocio (requiere razón social real).

### Pendientes
- [ ] Conectar dominio `donchambas.com.mx` en Vercel (Settings → Domains)
- [ ] Buzones reales: el sitio usa `hola@donchambas.com.mx` (general), `partnerships@donchambas.com.mx` (piloto) y `careers@donchambas.com.mx` (talento) — definidos en `src/lib/config.ts`. Confirmar que existen y se monitorean. Meta usa `a.blascoalmeida@gmail.com`.
- [ ] Razón social / entidad legal (para legales y verificación de negocio de Meta)
- [ ] Subir el ícono 1024 a la app de Meta
- [ ] Cifras de mercado y nombres del equipo: actualmente NO se muestran en el sitio mínimo; viven en el material privado.
- [ ] CTA "Mándanos un wats" (§7.4): cablearlo cuando exista el número real de WhatsApp Business (`WHATSAPP_NUMBER` en `src/lib/config.ts` es placeholder).

### Dev / deploy
- `npm run dev` (localhost:3000) · `npm run build` · push a `main` → Vercel redeploya solo (~1 min).

---

## 1.2 Handoff y archivado

El traspaso detallado de la sesión inicial (qué se hizo, commits, decisiones, estado
y pendientes) vive en **`docs/HANDOFF.md`**. Léelo al retomar el proyecto.

**Protocolo de archivado:** cuando todos los pendientes de `docs/HANDOFF.md` §4 estén
cerrados, **archívalo** — no lo borres:

1. Cambia su encabezado `> **Status:** ACTIVO` por `> **Status:** ARCHIVADO (YYYY-MM-DD)`.
2. Muévelo a `docs/archive/` (ej. `docs/archive/HANDOFF-2026-06.md`).
3. Quita o actualiza esta sección y `## 1.1` para reflejar el nuevo estado.

Un handoff archivado es registro histórico; el estado vivo siempre se refleja en `## 1.1`.

---

## 1.3 Bitácora y decisiones (protocolo de logs)

El repo sigue el patrón de trackeo para agentes del ecosistema (igual que `don-chambas-hq`,
`out-running-hq`, `bitacora-de-viajes-hq`). Tres registros, cada uno con un propósito:

- **`LOG.md`** (raíz) — **bitácora de actividad continua**, cronológico inverso. El "qué/por qué"
  narrativo de cada trabajo significativo, con un `_Next:_`. Es lo que un agente nuevo lee para
  saber qué pasó últimamente.
- **`DECISIONS.md`** (raíz) — **decisiones no obvias** con rationale, formato `DEC-WXXX` (la `W` es
  de website, para no chocar con los `DEC-XXX` de `don-chambas-hq`).
- **`docs/HANDOFF.md`** — **traspaso detallado de una sesión** (snapshot completo). Sigue vigente;
  se archiva por el protocolo de §1.2 cuando se cierran sus pendientes.

**Cuándo loguear:** al cerrar trabajo significativo (dev / contenido / diseño / deploy / docs),
usa el skill **`/log <qué se hizo>`**. Si hubo una decisión no obvia, **`/log --decision "rationale" <qué se hizo>`**
(también la registra en `DECISIONS.md`, auto-incrementando el `DEC-WXXX`). El skill vive en
`.claude/skills/log-activity/SKILL.md`.

**Relación con git y el ecosistema:** el **git log** sigue siendo el registro canónico de cambios de
código; `LOG.md` aporta el contexto y el siguiente paso que el commit no captura. Lo de
**negocio/producto** va a `don-chambas-hq/LOG.md`; lo del **sitio** va a este `LOG.md`.
Categorías: `dev`, `content`, `design`, `deploy`, `docs`, `planning`, `admin`.

---

## 2. Fuentes externas (Notion + Google Drive)

- **PM** — el product management del sitio vive en **Notion** (workspace institucional Don Chambas — DEC-058 de `don-chambas-hq`, 2026-07-22): proyecto `PROJ-10 — Website — Sitio público Don Chambas`, producto `PROD-2`. El `pm/` de `don-chambas-hq` quedó como snapshot histórico congelado.
- **Notion** — vía el conector de cuenta claude.ai (`mcp__claude_ai_Notion__*`). Documentación y el lado operations/marketing/sales en las DBs de Don Chambas (IDs y schema en `don-chambas-hq/CLAUDE.md` §3 y §3 bis).
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

- **Repo padre (negocio):** https://github.com/ayari-tech/don-chambas-hq — el PM de este repo vive en Notion (PROJ-10; DEC-058 de hq — su `pm/` es snapshot histórico congelado)
- **App (backend):** https://github.com/ayari-tech/don-chambas-app
- **Notion Home (workspace institucional):** https://app.notion.com/p/3914faa91871804a8f5dce3d90dc414c
