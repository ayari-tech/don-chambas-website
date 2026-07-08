# Don Chambas Website — Activity Log

Most recent first. Scope: desarrollo, contenido, diseño y deploy del sitio público.
Para historial de negocio/producto ver `don-chambas-hq/LOG.md`.

Convención: usa el skill `/log` para añadir entradas (y `/log --decision "..."` cuando haya
una decisión no obvia, que va a `DECISIONS.md`). Protocolo completo en `CLAUDE.md` §1.3.
Categorías: `dev`, `content`, `design`, `deploy`, `docs`, `planning`, `admin`.

---

## 2026-07-07

- **Instrumentación de analytics con PostHog cookieless** (Claude · `dev`, `docs`)
  Se agrega `posthog-js` + `src/components/Analytics.tsx` (cliente global en `layout.tsx`):
  pageviews por cambio de ruta y evento `cta_contacto_click` (props: `cta`, `medio`, `destino`,
  `pagina`) en los 5 CTAs de contacto (hero home, piloto ×2, carreras, contacto) marcados con
  `data-analytics-event`/`data-analytics-cta`. Modo cookieless (`sessionStorage`, sin banner),
  `autocapture` off, y no-op sin `NEXT_PUBLIC_POSTHOG_KEY` — activar la key en Vercel es
  TASK-305 en Notion. Verificado: `npm run build` ✓. Ver DEC-W006; parte del proyecto
  «Analytics — Telemetría de producto y website» (`don-chambas-hq` DEC-051).

## 2026-07-06

- **Alineación completa con `don-chambas-brand` (sync brand v1)** (Claude · `design`, `dev`, `docs`)
  Auditoría sitio ↔ manual de marca (con comparación visual en Artifact para decidir) y migración en
  7 commits: (1) restyle **C3** — Space Grotesk + Inter + Caveat 600 vía `next/font` (salen Baloo 2 /
  Nunito, cierra el pendiente del brand repo); (2) watermark de los heros pasa de texto "DONDON…" en
  fuente viva (prohibido) al **tile oficial** vía `<Watermark>`, opacidad 4 %; (3) **sync brand v1** —
  `tokens.css` y `componentes.css` copiados de `dist/derivados/`, `base.css` fusionado en `site.css`
  con renombres canónicos (`--dc-primary`/`--dc-accent`/`--dc-error`/`--dc-brand-red`), CSS muerto
  podado, tokens lúdicos retirados (`--grad-warm`, `--brush-shadow`, `.highlight`, `.marker`), botones
  canónicos (`.btn-cta` ámbar en piloto y nuevo CTA único del hero, mailto mientras no haya WhatsApp),
  fixes de contraste (ámbar ya no es texto sobre claro) y apóstrofe C4 (`pa'` U+2019); (4) assets
  canónicos copiados literal (`personaje_*_rojo`, `mascota_color`, `mascota-busto_blanco`,
  `wordmark_amarillo-blanco` full-res; cajera y lavaloza corrigen los mal llamados anfitriona/lavaplatos);
  (5) favicon = **busto de la mascota** y OG image = **lockup oficial embebido** (antes wordmark
  tecleado, prohibido); (6) **Instagram `@don_chambas`** en footer (§7.4); (7) docs. Verificado:
  `npm run build` ✓ por commit, greps de vars legacy/apóstrofe en cero, pase visual en las 4 páginas
  (fuentes, watermark, botones, footer) y render real de favicon/OG. (commits `f2ac6d4`…)
  _Next: push a `main` para deploy; avisar en el LOG de `don-chambas-brand` que el restyle C3 del
  website quedó cerrado; cablear "Mándanos un wats" cuando exista número real._

## 2026-07-04

- **Nota manuscrita en el hero de la landing** (Claude · `design`, `content`)
  "Estamos construyendo Don Chambas. Nos emociona tenerte aquí." entre el headline y la tira del
  crew — Caveat naranja, rotación -1°, una sola línea (`.hero-note`). Pedido por Alex; verificado
  en local y en producción tras el deploy. (commit `5786661`)

- **Fixes al sitio desde el ticket de Notion "Fixes al website de don chambas"** (Claude · `design`, `dev`, `content`)
  Ronda de fixes pedidos por Alex en el ticket #1 de la DB Tickets de Don Chambas HQ: (1) **Landing** —
  se agregó la mascota Don Chambas (mesero retro con megáfono y charola) junto al headline, en fila
  flex (`.hero-row`/`.hero-mascota`, stack en móvil). El asset salió del Drive
  (`Branding Don chambas/Personajes para presentaciones (PNG)/donchambas_personaje_mesero-mascota_rojo.png`),
  optimizado con PIL a 720px/41KB → `public/images/brand/characters/don-chambas.png`. (2) **Páginas
  interiores** (piloto, carreras, contacto) — la tira del crew se movió arriba: `<CharacterStrip size="sm">`
  dentro del `page-hero` (`.page-hero-characters`) y `Footer showCharacters={false}` para no duplicar.
  (3) **Piloto** — se quitó el bullet "Retener al talento"; se reemplazó el párrafo/quote de
  "automatizar con IA" por copy sobre entender problemas y procesos de reclutamiento de los negocios;
  y en "¿Te suena familiar?" se agregaron 2 quotes reales de validación (no-shows en cadena y costo de
  Indeed/filtrado, de los decks pitch/clientes-mvp, validación 2026-05-09) atribuidos como "Dueña de
  restaurante, CDMX". Verificado en desktop (landing/piloto/carreras/contacto); `npm run build` ✓.
  _Next: commitear y push a `main` cuando Alex lo pida; marcar el ticket como Done en Notion._

## 2026-06-28

- **Watermarks de marca + variante de wordmark sombra-blanca + adenda al manual** (Claude · `design`, `dev`, `docs`)
  A partir de los recursos nuevos de Alex en el Drive: (1) cambié el nav a la variante
  **amarillo + sombra blanca** — no existía, la generé recoloreando el wordmark plano y componiendo
  una sombra dura blanca con PIL (`wordmark-amarillo-blanco.png`). (2) **Watermarks**: componente
  reutilizable `<Watermark tone="dark|light">` + CSS (`.has-watermark`/`.watermark`, tiles en
  `public/images/brand/`), aplicado de ejemplo en secciones `.alt` de piloto y carreras; y fondos
  PNG 1920×1080 para presentaciones (navy + claro, mosaico del wordmark a ~8 %) en
  `docs/brand-assets/`. (3) **Adenda al manual**: leí `donchambas_manual-de-marca.pdf` (colores
  primarios, usos incorrectos, el patrón watermark ya en págs. 08–11). Recomendación = adenda
  digital, no reeditar el PDF. Creada en `docs/brand-addendum.md` y como Google Doc en
  `Drive/Branding/Manual de marca/`. Detecté que el rojo del manual (#B23636) ≠ rojo web
  (#d31e1d) — pendiente reconciliar. **Nota:** las imágenes NO se pudieron subir al Drive vía MCP
  (el contenido va como base64 en la llamada y se corrompe); quedan en `docs/brand-assets/` y en
  el folder `Digital/Watermarks - fondos (ejemplos)/` (creado, vacío) para que Alex las arrastre.
  _Next: Alex sube los PNG al Drive; decidir rojo canónico (#B23636 vs #d31e1d)._

- **Wordmark amarillo+rojo como brand del nav** (Claude · `design`, `dev`)
  Alex subió recursos nuevos al Drive (`Branding Don chambas/Digital/Variaciones de logotipo/
  Wordmark - solo nombre (PNG)/`): wordmarks "solo nombre" (sin tagline, con estrellitas, fondo
  transparente, ~2600px). Sustituí el texto "DON CHAMBAS" del nav (arriba a la izq.) por la
  variante `amarillo-sombra-roja` (relleno amarillo + sombra roja), optimizada a 353×160 PNG en
  `public/images/brand/wordmark-amarillo-rojo.png`. Se quitó el `<Sparkle>` inline (el asset ya
  trae estrellitas). Nuevo `.brand-logo` (48px / 42px en mobile). Verificado en `/`.
  _Next: si se quiere, generar SVG de este wordmark para nitidez perfecta a cualquier escala._

- **Correcciones al sitio desde Notion (TASK-257)** (Claude · `design`, `dev`)
  Ronda de fixes de UI/contenido pedidos por Alex en la task "Correcciones al sitio web":
  **Carreras** — las "Áreas en las que buscamos talento" pasan de cards a bullets con ícono
  (`.icon-bullets`), y el CTA final se simplificó (se quitó el botón "Escríbenos →" y el
  subtítulo "Cuéntanos quién eres…", queda sólo el correo `careers@`). **Piloto** — las
  fricciones de contratación pasan de cards a bullets con ícono. **Contacto** — se redujo a un
  solo correo (`hola@`, contacto general); se quitó la lista larga (piloto / careers / ARCO /
  ubicación / horario) y se mantuvo la tarjeta "¿Tienes un negocio restaurantero?". **Footer** —
  se quitaron los dos links que ya viven en el navbar ("Ayúdanos a construir" / "Participa en el
  piloto"); quedan sólo los legales. **CSS** — `.section-tag` y `h4` más grandes (de `fs-xs`/`fs-sm`
  a `fs-base`) por la nota de "títulos más grandes"; nuevo estilo `.icon-bullets`. Verificado en
  mobile (~390px) en carreras/piloto/contacto: alineación consistente. `npm run build` ✓.
  _Next: commitear y push a `main` cuando Alex lo pida; marcar TASK-257 como Done en Notion._

- **Estrategia de logs / trackeo para agentes** (Claude · `docs`, `planning`)
  Se replicó en el repo el patrón maduro del ecosistema (don-chambas-hq, out-running-hq,
  bitacora-de-viajes-hq, second-brain): se crearon `LOG.md` (esta bitácora) y `DECISIONS.md`
  (decisiones `DEC-WXXX`), el skill `/log` en `.claude/skills/log-activity/SKILL.md` (con flag
  `--decision`), y una sección de protocolo nueva (`CLAUDE.md` §1.3). `LOG.md` y `DECISIONS.md`
  se sembraron con el historial ya hecho (back-fill desde `docs/HANDOFF.md` + git). `HANDOFF.md`
  se mantiene como traspaso detallado de sesión. De paso se corrigieron referencias a "§5" que
  apuntaban mal al protocolo de archivado (vive en §1.2). Registrada DEC-W004.
  _Next: probar `/log` en una sesión nueva; commitear cuando Alex lo pida._

---

## 2026-06-27

- **Rebrand lúdico + páginas internas (Piloto / Carreras)** (Claude · `design`, `dev`, `content`)
  Se aplicó la identidad real de marca (Manual Doberman + Drive `Branding Don chambas`): fuentes
  vía alternativas libres de Google (**Baloo 2** display, **Caveat** script, **Nunito** cuerpo),
  **lockup brush oficial** SVG (variantes white/navy/red en `public/images/brand/`), **5 personajes**
  line-art (`public/images/brand/characters/`), tokens lúdicos (`--grad-warm`, `--brush-shadow`,
  `.highlight`, `.marker`, rojo co-primario) y componentes nuevos `BrushWordmark` / `CharacterStrip`
  / `Sparkle`. Se añadieron las páginas `/piloto` (programa piloto para negocios → `partnerships@`)
  y `/carreras` (reclutamiento de talento → `careers@`). Tweaks de hero/nav (nav amarillo, CTA a la
  derecha, esquinas menos redondeadas), watermark "DON" + sparkles en el fondo, y ajuste de spacing
  en páginas internas. (commits `b61a1a4`→`41e8cbf`)
  _Next: conectar dominio `donchambas.com.mx` en Vercel; confirmar buzones reales._

- **Handoff inicial + estado vivo en CLAUDE.md** (Claude · `docs`)
  Se creó `docs/HANDOFF.md` (traspaso de la sesión inicial, con protocolo de archivado) y se
  actualizó `CLAUDE.md` con el estado actual del sitio y notas de handoff. (commits `7c854d1`,
  `dbeb84a`)

## 2026-06-26

- **Reducción a sitio público mínimo + recorte de contenido sensible** (Claude · `content`, `dev`)
  Se decidió reducir el sitio a una slide de presentación + legales + contacto, para no exponer
  estrategia (moats, pricing, roadmap, screenshots) a competidores; el material sensible se comparte
  1:1 en privado. Se eliminó `/inversionistas`. En paralelo se afinó el mensaje del hero (sector
  restaurantero + slogan + subtítulo de fricción de comunicación) y se quitó "WhatsApp-first" de la
  metadata/términos. Antes, en la misma fecha: scaffold completo de Next.js con todas las páginas y
  el sistema de marca, menú móvil, OG image dinámica, componentes compartidos y SEO. (commits
  `3985996`→`b019ec2`)
  _Next: definir copy final tras decisión del sitio mínimo._

## 2026-06-25

- **Inicialización del repo + acceso a fuentes externas** (Claude · `admin`, `dev`)
  Se inicializó el repo (Next.js planeado, diseño TBD) y se habilitó acceso a Notion + Google Drive
  (settings locales + notas en docs/CLAUDE.md). (commits `4695cfc`, `142f929`)
