# Don Chambas Website — Activity Log

Most recent first. Scope: desarrollo, contenido, diseño y deploy del sitio público.
Para historial de negocio/producto ver `don-chambas-hq/LOG.md`.

Convención: usa el skill `/log` para añadir entradas (y `/log --decision "..."` cuando haya
una decisión no obvia, que va a `DECISIONS.md`). Protocolo completo en `CLAUDE.md` §1.3.
Categorías: `dev`, `content`, `design`, `deploy`, `docs`, `planning`, `admin`.

---

## 2026-06-28

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
