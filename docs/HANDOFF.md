# Handoff — don-chambas-website

> **Status:** ACTIVO
> **Creado:** 2026-06-27 · **Owner:** Alex
> Documento de traspaso de la sesión inicial de construcción del sitio. Cuando todos
> los pendientes de §4 estén cerrados, archivar este documento (ver protocolo en
> `CLAUDE.md` §1.2).

---

## 0. Rebrand lúdico (2026-06-27)

Se aplicó la identidad real de marca (Manual Doberman + Drive `Branding Don chambas`):
fuentes de marca vía alternativas libres de Google (**Baloo 2** display, **Caveat** script,
**Nunito** cuerpo), **lockup brush oficial** en SVG (recortado del manual, fondo
transparente, variantes white/navy/red en `public/images/brand/`), **5 personajes** line-art
extraídos del `.ai` (`public/images/brand/characters/`), tokens lúdicos (`--grad-warm`,
`--brush-shadow`, `.highlight`, `.marker`, rojo co-primario) y componentes nuevos
`BrushWordmark` / `CharacterStrip` / `Sparkle`. Detalle de estado vivo en `CLAUDE.md` §1.1.

---

## 1. Qué se hizo en esta sesión (2026-06-25 → 2026-06-27)

Se construyó y desplegó desde cero el sitio público de Don Chambas, y luego se
redujo deliberadamente a una pantalla de presentación para no exponer estrategia
a competidores.

**Desplegado en Vercel** (Git integration, auto-deploy desde `main`):
👉 https://don-chambas-website.vercel.app/ — dominio `donchambas.com.mx` aún sin conectar.

### Decisiones de producto/contenido tomadas

1. **Stack:** Next.js 16 (App Router) + TypeScript, sin Tailwind. Reusa los design
   tokens de la marca (`tokens.css` + `base.css` de `don-chambas-hq/docs/comms/web/assets`).
2. **Sitio público mínimo:** se decidió que el sitio sea solo una slide de
   presentación + legales + contacto. **Nada de** moats, modelo de pricing,
   trayectoria fintech, roadmap, pasos del producto ni screenshots de la app —
   para no dar inspiración a competidores. El material sensible se comparte 1:1 en
   privado con el pitch deck de `don-chambas-hq/docs/comms/`.
3. **Audiencia de inversionistas:** se eliminó la página pública `/inversionistas`.
   Outreach 1:1 por email/Drive.
4. **Mensaje final del hero:** headline "Reclutamiento de personal para el sector
   restaurantero", slogan "¿Buscas jale o quien jale?", subtítulo "Don Chambas es
   la plataforma donde la comunicación entre negocios y candidatos fluye".
5. **Marca:** wordmark "DON CHAMBAS" (se quitaron los íconos sueltos "DON" del
   nav/hero a pedido, pero se restauró el watermark "DON" del fondo del hero por
   estar en el manual de marca Doberman).

### Commits de la sesión (más reciente primero)

| Commit | Fecha | Qué |
|--------|-------|-----|
| `b61a1a4` | 2026-06-27 | Headline al sector restaurantero + slogan "¿Buscas jale o quien jale?" |
| `b019ec2` | 2026-06-26 | Restaura watermark "DON" del hero (manual de marca) |
| `942fb4f` | 2026-06-26 | Subtítulo "plataforma donde la comunicación fluye" |
| `3e8b5b1` | 2026-06-26 | Acorta hero a "fricción" + subtítulo de una línea |
| `3593ad5` | 2026-06-26 | Quita "WhatsApp-first" de metadata y términos |
| `ff854be` | 2026-06-26 | Reenfoca mensaje a fricción de comunicación; quita chrome de marca |
| `68c2be0` | 2026-06-26 | Reduce el sitio público a una slide de presentación |
| `b48dafe` | 2026-06-26 | Recorta contenido competitivamente sensible del sitio |
| `0a6508d` | 2026-06-26 | Menú móvil, WhatsApp CTA, OG image, componentes compartidos, SEO |
| `3985996` | 2026-06-26 | Scaffold Next.js con todas las páginas y sistema de marca |
| `142f929` | 2026-06-25 | Habilita acceso a Notion + Google Drive |
| `4695cfc` | 2026-06-25 | Inicializa repo |

> Nota: varios commits de la primera mitad (páginas de inversionistas/restaurantes,
> screenshots, seis pasos, moats) fueron **revertidos a propósito** después por la
> decisión del sitio mínimo. El estado actual es la slide + legales + contacto.

---

## 2. Estado actual del sitio

Páginas vivas:
- `/` — slide de presentación (headline + slogan + subtítulo + CTA "Contáctanos" + watermark "DON").
- `/contacto` — email + derechos ARCO + ubicación.
- `/privacidad` — aviso LFPDPPP (borrador, pendiente revisión legal). Ancla `#eliminar-datos`.
- `/terminos` — términos (borrador).
- `opengraph-image` (dinámica), `icon.svg` (favicon), `sitemap.ts`, `robots.ts`.

Estructura:
- `src/app/*` — páginas (App Router)
- `src/components/` — `Nav`, `Footer`
- `src/lib/config.ts` — contacto centralizado (email + helper mailto; WhatsApp ya no se usa en el sitio)
- `public/styles/` — `tokens.css` + `base.css` (de hq) + `site.css` (overrides del sitio)

---

## 3. Requisitos de Meta (app WhatsApp Business)

App `n8n-don-chambas` · App ID `2249880045750740` · Categoría "Bots de Messenger para empresas".

El sitio ya cubre los campos de URL de la pantalla de Configuración básica:
- Privacy Policy URL → `https://donchambas.com.mx/privacidad`
- Terms of Service URL → `https://donchambas.com.mx/terminos`
- Data Deletion URL → `https://donchambas.com.mx/privacidad#eliminar-datos`
- Ícono 1024×1024 → generado (en el Escritorio del owner; falta subirlo a Meta)

Mientras no se conecte el dominio, se pueden usar las mismas rutas sobre
`https://don-chambas-website.vercel.app`.

Siguiente muro: **verificación de negocio** de Meta (requiere razón social / entidad
legal real + documentos). No depende del sitio.

---

## 4. Pendientes (cerrar para archivar este handoff)

- [ ] Conectar dominio `donchambas.com.mx` en Vercel (Settings → Domains + DNS)
- [ ] Email de contacto real: el sitio usa `hola@donchambas.com.mx` (placeholder en
      `src/lib/config.ts`); Meta usa `a.blascoalmeida@gmail.com`. Alinear / crear buzón.
- [ ] Razón social / entidad legal (legales + verificación de negocio Meta)
- [ ] Subir el ícono 1024 a la app de Meta
- [ ] Registrar las URLs en la app de Meta (privacidad, términos, eliminación de datos)

---

## 5. Cómo continuar

```
cd ~/GitHub/don-chambas-website
claude
```

Dev/deploy: `npm run dev` (localhost:3000) · `npm run build` · push a `main` →
Vercel redeploya solo (~1 min).
