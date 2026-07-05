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
- `/` — slide de presentación: lockup brush oficial (wordmark + tagline + sparkles), headline "Reclutamiento de personal para el **sector restaurantero**" (palabra con caja degradado), subtítulo "La plataforma donde la comunicación entre negocios y candidatos fluye", CTA "Contáctanos", tira de personajes. Watermark "DON" + sparkles animados en el fondo.
- `/piloto` — programa piloto para negocios restauranteros (fricciones de contratación). CTA → `partnerships@donchambas.com.mx`.
- `/carreras` — "Ayúdanos a construir Don Chambas": reclutamiento de talento (marketing, tech, diseño de producto). CTA → `careers@donchambas.com.mx`.
- `/contacto` — email + derechos ARCO + ubicación. Sin WhatsApp CTA.
- `/privacidad` — aviso LFPDPPP (borrador, pendiente revisión legal). Ancla `#eliminar-datos` para Meta.
- `/terminos` — términos (borrador).
- `opengraph-image`, `icon.svg`, `sitemap.ts`, `robots.ts`.

### Branding (rebrand 2026-06-27)
El sitio aplica la identidad lúdica real de la marca (Manual Doberman + carpeta Drive `Branding Don chambas`):
- **Fuentes** (alternativas libres de Google a las comerciales de marca): display **Baloo 2**, script **Caveat** (tagline/acentos), cuerpo **Nunito**. Cableadas en `src/app/layout.tsx` → tokens en `tokens.css`/`site.css`.
- **Assets en `public/images/brand/`**: lockups oficiales SVG (`lockup-{white,navy,red}.svg`, wordmark brush + tagline + sparkles, fondo transparente, recortados del Manual) y `characters/char-*.png` (5 personajes line-art extraídos del `.ai`, fondo transparente).
- **Color**: rojo es **co-primario** (no solo alerta); `--dc-red-logo #d31e1d` es el rojo vivo del wordmark. Tokens lúdicos: `--grad-warm`, `--brush-shadow`, `.highlight`, `.marker`.
- **Componentes** (`src/components/`): `BrushWordmark` (lockup por variante de fondo), `CharacterStrip`, `Sparkle`.

**Estructura:** `src/app/*` (páginas), `src/components/` (`Nav`, `Footer`, `BrushWordmark`, `CharacterStrip`, `Sparkle`), `src/lib/config.ts` (contacto centralizado), `public/styles/` (`tokens.css` + `base.css` + `site.css`), `public/images/brand/` (assets de marca).

### Requisitos de Meta (app WhatsApp Business `n8n-don-chambas`, App ID 2249880045750740)
El sitio cubre los campos de la app: Privacy Policy URL → `/privacidad`, Terms URL → `/terminos`, Data Deletion URL → `/privacidad#eliminar-datos`. Ícono 1024×1024 generado (en el Escritorio del owner). Falta verificación de negocio (requiere razón social real).

### Pendientes
- [ ] Conectar dominio `donchambas.com.mx` en Vercel (Settings → Domains)
- [ ] Buzones reales: el sitio usa `hola@donchambas.com.mx` (general), `partnerships@donchambas.com.mx` (piloto) y `careers@donchambas.com.mx` (talento) — definidos en `src/lib/config.ts`. Confirmar que existen y se monitorean. Meta usa `a.blascoalmeida@gmail.com`.
- [ ] Razón social / entidad legal (para legales y verificación de negocio de Meta)
- [ ] Subir el ícono 1024 a la app de Meta
- [ ] Cifras de mercado y nombres del equipo: actualmente NO se muestran en el sitio mínimo; viven en el material privado.

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
