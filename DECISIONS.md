# Don Chambas Website — Decisions

Decisiones no obvias del sitio, con rationale y contexto. Most recent first.

Numeración **`DEC-WXXX`** (W = website) para no chocar con la secuencia `DEC-XXX` de
`don-chambas-hq`. Usa `/log --decision "..."` para añadir entradas (auto-incrementa el número).

---

## 2026-07-06

### DEC-W005: Adoptar los derivados de marca tal cual y retirar los tokens lúdicos legacy

**Decisión:** `public/styles/tokens.css` y `componentes.css` son copias generadas de
`don-chambas-brand/dist/derivados/` y **nunca se editan a mano** (única transformación documentada:
quitar el bloque `@import` dev de Google Fonts, autorizado por el header del propio archivo, porque
las fuentes vienen de `next/font`). Se actualizan con commits `sync brand vX`. Los tokens lúdicos
del rebrand anterior (`--grad-warm`, `--brush-shadow*`, `.highlight`, `.marker`, `.dc-tagline`) se
retiran: no existen en los tokens canónicos y el hero usa acento ámbar plano + `.btn-cta`.

**Contexto:** Alex pidió alinear el sitio con el manual de marca v1 del nuevo repo canónico
`don-chambas-brand` (que ya listaba "Website pendiente — restyle C3"). Se le mostró una comparación
visual (Artifact) del sitio actual vs. los tokens canónicos y eligió: quitar el gradiente, adoptar
derivados tal cual, mantener CTA mailto mientras no haya WhatsApp, y enlazar Instagram `@don_chambas`.

**Rationale:**
- Una sola fuente de verdad: la gobernanza del brand repo manda consumir derivados generados, no
  mantener copias divergentes a mano — el drift estructural desaparece.
- El sitio queda 100 % derivable de la marca; cambios de identidad futuros = regenerar + `sync brand vX`.
- Los tokens lúdicos eran drift legacy no canonizado; conservarlos habría requerido un DEC en el
  brand repo que Alex decidió no abrir.

**Implicaciones inmediatas:**
- `base.css` desaparece (fusionado en `site.css`, lo único editable a mano); botones canónicos
  (`.btn-primary` navy, `.btn-cta` ámbar); fuentes Space Grotesk + Inter (cierra el restyle C3).
- Assets con nombres canónicos copiados literal del brand repo.

**Supersede:** DEC-W003 (Baloo 2/Nunito y tokens lúdicos).

**Relacionada con:** DEC-W001, DEC-W002.

---

## 2026-06-28

### DEC-W004: Convención de logs del repo (LOG.md + DECISIONS.md + skill `/log`)

**Decisión:** El sitio adopta el patrón de trackeo del ecosistema: `LOG.md` (bitácora de actividad,
cronológico inverso), `DECISIONS.md` (decisiones `DEC-WXXX`) y el skill `/log` que automatiza ambos
escritos. `docs/HANDOFF.md` se mantiene como traspaso detallado de sesión.

**Contexto:** Alex pidió replicar las buenas prácticas de trackeo para agentes de IA que ya existen
en sus otros repos. La exploración confirmó un patrón maduro y consistente (don-chambas-hq,
out-running-hq, bitacora-de-viajes-hq, second-brain) que este repo no tenía.

**Rationale:**
- Reusa un estándar ya probado en el ecosistema en vez de inventar uno nuevo.
- `LOG.md` aporta el "qué/por qué" narrativo y el `_Next:_` que el git log no captura.
- Separar decisiones (`DECISIONS.md`) crea un grafo navegable del porqué, no solo del qué.
- El skill `/log` baja la fricción a una línea, así que la bitácora sí se mantiene.

**Implicaciones inmediatas:**
- Se crean `LOG.md`, `DECISIONS.md` y `.claude/skills/log-activity/SKILL.md`; back-fill del historial.
- Nueva sección de protocolo `CLAUDE.md` §1.3.
- Prefijo `DEC-WXXX` para evitar colisión con `don-chambas-hq`.

**Relacionada con:** patrón de `don-chambas-hq` (DEC-008 ecosistema de logging).

---

## 2026-06-27

### DEC-W003: Rebrand lúdico con alternativas libres de Google a las fuentes de marca

**Decisión:** El sitio aplica la identidad lúdica real (Manual Doberman) usando alternativas libres
de Google a las fuentes comerciales de marca: **Baloo 2** (display), **Caveat** (script/acentos),
**Nunito** (cuerpo). Rojo `--dc-red-logo #d31e1d` pasa a co-primario y se añaden tokens lúdicos.

**Contexto:** Tras el sitio mínimo se quería que la pantalla reflejara la marca real (lockup brush,
personajes, sparkles), pero las fuentes comerciales del manual no son redistribuibles en la web.

**Rationale:**
- Las alternativas de Google son libres, web-safe y visualmente cercanas a las de marca.
- Mantiene fidelidad a la identidad sin riesgo de licencias.
- Centralizar en `layout.tsx` + tokens permite cambiar a las fuentes comerciales después sin tocar
  los componentes.

**Implicaciones inmediatas:**
- Assets oficiales SVG/PNG en `public/images/brand/`; componentes `BrushWordmark`/`CharacterStrip`/`Sparkle`.

**Relacionada con:** DEC-W001, DEC-W002.

---

## 2026-06-26

### DEC-W002: Stack Next.js 16 (App Router) + TypeScript, sin Tailwind

**Decisión:** El sitio se construye con Next.js 16 (App Router) + TypeScript, **sin Tailwind**,
reusando los design tokens de la marca (`tokens.css` + `base.css` de `don-chambas-hq`) más overrides
en `site.css`.

**Contexto:** Sitio público de marketing desplegado en Vercel con auto-deploy desde `main`.

**Rationale:**
- App Router + TS es el stack estándar y bien soportado en Vercel.
- Sin Tailwind: reusar los tokens de marca ya existentes da consistencia visual con el resto del
  ecosistema y evita una capa de utilidades extra para un sitio pequeño.

**Implicaciones inmediatas:**
- `public/styles/` con `tokens.css` + `base.css` + `site.css`; contacto centralizado en `src/lib/config.ts`.

**Relacionada con:** DEC-W001.

---

### DEC-W001: Sitio público mínimo (slide de presentación + legales)

**Decisión:** El sitio público se reduce deliberadamente a una pantalla de presentación + legales +
contacto. Lo sensible (moats, pricing, trayectoria fintech, roadmap, pasos del producto, screenshots
de la app) **no va en la web**; se comparte 1:1 en privado con el pitch deck. Se eliminó la página
pública `/inversionistas`.

**Contexto:** El sitio había crecido con páginas de inversionistas/restaurantes, screenshots y
detalle de producto. Surgió la preocupación de dar información que sirva de inspiración a competidores.

**Rationale:**
- No exponer estrategia ni moats públicamente a competidores.
- El outreach valioso es 1:1 (email/Drive/pitch deck), no la web.
- Un sitio mínimo es más fácil de mantener y cumple los requisitos de Meta (privacidad/términos).

**Implicaciones inmediatas:**
- Varios commits de la primera mitad (inversionistas, screenshots, seis pasos, moats) fueron
  revertidos a propósito. Estado actual: slide + legales + contacto (+ luego `/piloto` y `/carreras`).

**Relacionada con:** DEC-W002, DEC-W003.
