# Spec — Portal Don Chambas

> **Status:** BORRADOR (2026-06-27)
> **Tipo:** Documento de diseño de producto. No es implementación; define alcance, flujos y decisiones antes de tocar código.
> **Decisiones tomadas:** una sola puerta de acceso con contenido por rol · nombre "Portal Don Chambas".

---

## 1. Qué es y por qué

El **Portal Don Chambas** es el área **con acceso controlado** del sitio. Encaja con la
estrategia del sitio público mínimo (ver `CLAUDE.md` §1.1): lo sensible no se publica
abierto para no inspirar a competidores, pero detrás de un acceso sí podemos mostrar
material a la persona correcta.

Un solo acceso (`/portal`); lo que ves depende de **tu rol**. Tres roles:

| Rol | Quién | Qué quiere | Confidencialidad | Estado de relación |
|---|---|---|---|---|
| `piloto` | Negocios restauranteros en el programa piloto | Onboarding, cómo funciona, soporte, seguimiento | Media | Ya dijeron sí |
| `talento` | Gente que quiere aplicar a Don Chambas | Cómo prepararse, qué buscamos, prefiltro | Baja | Aún no entran |
| `inversionista` | Inversionistas | Moats, pricing, roadmap, deck, métricas | **Alta** | Conversación 1:1 |

**Principio rector:** el portal NO reemplaza el material privado 1:1. Es una capa
curada y gateada. Lo más sensible (deck completo, cifras finas) puede seguir
compartiéndose de forma controlada; el portal hospeda un subconjunto apropiado por rol.

---

## 2. Naming y lenguaje

- **Nombre del área:** "Portal Don Chambas" (o "el Portal" en corto).
- **Ruta:** `/portal`.
- **Tono:** español neutro mexicano, voz lúdica de marca (Baloo 2 / Caveat / Nunito),
  pero sobrio en la zona de inversionistas.
- Cada rol puede tener su propia "bienvenida" con copy distinto, pero la puerta es una.

---

## 3. Modelo de acceso (una puerta, contenido por rol)

### 3.1 Flujo general

```
                          ┌─────────────────────────┐
   Visitante  ──────────► │  /portal  (pantalla de  │
                          │   acceso / login)        │
                          └───────────┬──────────────┘
                                      │  autenticación
                                      ▼
                          ┌─────────────────────────┐
                          │   Resuelve ROL del user  │
                          └───────────┬──────────────┘
                ┌─────────────────────┼─────────────────────┐
                ▼                     ▼                     ▼
        /portal (piloto)     /portal (talento)     /portal (inversionista)
        onboarding+soporte   prep + recursos       deck + métricas + roadmap
```

### 3.2 Autenticación — recomendación

Dado que (a) el volumen es bajo, (b) el acceso es **por invitación** y (c) hay material
de alta sensibilidad (inversión), se recomienda:

- **Magic link / passwordless por email** (sin contraseñas que gestionar).
- **Allowlist + mapeo de rol:** el email autorizado se asocia a un rol al invitarlo.
  Acceso = invitación explícita; nadie se "registra" solo en piloto/inversionista.
- Sesiones cortas para inversionista; opción de expiración/revocación de invitación.

**Implicación importante:** el sitio hoy NO tiene backend ni auth. Introducir auth es el
**lift principal** de este proyecto. Opciones (a decidir en §7):
- Auth.js (NextAuth) con email provider — encaja con Next 16 + Vercel.
- Servicio gestionado (Clerk / Supabase Auth) — más rápido, dependencia externa.
- Acceso por código de invitación firmado (más simple, menos robusto) para v0.

### 3.3 Roles y autorización

- Rol vive en el registro de invitación (no auto-declarado por el usuario).
- Middleware protege `/portal/*`; sin sesión → pantalla de acceso.
- Contenido se renderiza según `session.role`. Un usuario podría tener más de un rol
  (raro, pero p.ej. un piloto que también invierte) — soportar lista de roles.

---

## 4. Contenido por rol

### 4.1 `piloto` — negocios en el programa piloto
- Bienvenida + estado de su piloto.
- Cómo funciona el producto (guía de uso, no la versión pública diluida).
- Soporte / contacto directo (`partnerships@donchambas.com.mx`).
- Seguimiento: próximos pasos, qué esperar, hitos.
- (Futuro) métricas de su propio piloto.

### 4.2 `talento` — quienes quieren aplicar
- **Qué buscamos:** valores y capacidades (perfil de quién encaja en Don Chambas).
- **Cómo prepararte:** recursos, expectativas del proceso.
- Acceso al resultado del **prefiltro** (ver §5) y siguientes pasos si pasaron.
- CTA a `careers@donchambas.com.mx` solo para quienes avanzan.

### 4.3 `inversionista` — alta confidencialidad
- Tesis / moats, modelo de pricing, trayectoria, roadmap.
- Métricas de mercado y tracción.
- Deck (o subconjunto curado; el deck completo puede seguir siendo 1:1).
- Considerar: marca de agua con el email del visitante, no descargable / descarga
  controlada, registro de accesos.

---

## 5. Prefiltro de candidatos (`talento`)

La pieza más "producto" de las tres. Antes de que el equipo hable con alguien, un
prefiltro asegura que sea candidato con los **valores y capacidades** que buscamos.

Hace dos cosas:
1. **Informa** ("esto es lo que buscamos, así te preparas") → **autoselección**: quien
   no encaja se va solo.
2. **Filtra** (preguntas de valores + capacidades) → el equipo solo habla con quienes pasan.

### 5.1 Forma propuesta
- Formulario con lógica de evaluación (no necesita login el día uno).
- El prefiltro puede ser **público-pero-discreto** (enlace, no indexado); el "portal"
  de talento empieza una vez que pasaron.
- Resultado: pasa / no pasa / revisión manual. Quien pasa recibe invitación al portal
  (magic link con rol `talento`).

### 5.2 Por definir
- Criterios concretos de valores y capacidades (input de negocio, vive en `don-chambas-hq`).
- ¿Scoring automático, manual, o híbrido?
- ¿Dónde se guardan las respuestas? (implica almacenamiento de datos personales → ver §6).

---

## 6. Seguridad, privacidad y legal

- **Datos personales:** el prefiltro y las invitaciones recopilan PII (emails, respuestas).
  Encaja bajo el aviso LFPDPPP (`/privacidad`); revisar si requiere actualización al
  añadir el portal y el prefiltro. Derechos ARCO ya cubiertos.
- **Inversionista:** el material es competitivamente sensible. Considerar marca de agua,
  no-descarga, expiración de acceso y log de accesos.
- **Confidencialidad de marca/estrategia:** el portal es la excepción controlada al
  "sitio público mínimo" — el contenido sensible vive aquí, gateado, no en rutas públicas.
- **`robots`/`sitemap`:** excluir `/portal/*` y el prefiltro de indexación.

---

## 7. Decisiones abiertas (requieren tu input)

1. **Método de auth:** Auth.js (email) · servicio gestionado (Clerk/Supabase) · códigos
   de invitación v0. → impacta tiempo y dependencias.
2. **Almacenamiento de datos** (invitaciones, respuestas de prefiltro): ¿base de datos
   (Vercel Postgres / Supabase), Notion como backend, o Google Sheet?
3. **Criterios del prefiltro:** valores y capacidades concretos + cómo se evalúan.
4. **Nivel de protección del material de inversión:** ¿marca de agua / no-descarga / log?
5. **¿Qué público construimos primero?** (Aunque la arquitectura es una sola puerta,
   el contenido por rol se puede entregar por fases.)

---

## 8. Fases sugeridas

- **Fase 0 — Andamiaje de acceso:** `/portal`, auth por invitación, resolución de rol,
  middleware de protección, exclusión de indexación. Una pantalla por rol con copy stub.
- **Fase 1 — Talento + prefiltro:** formulario de prefiltro, lógica de evaluación,
  invitación automática a quienes pasan, contenido "qué buscamos / cómo prepararte".
- **Fase 2 — Piloto:** onboarding, soporte, seguimiento.
- **Fase 3 — Inversionista:** material curado + protecciones de §6.

---

## 9. Estructura técnica tentativa

```
src/app/portal/
  page.tsx              # pantalla de acceso (no autenticado) / dashboard (autenticado)
  layout.tsx            # layout del portal (sin nav pública, marca propia)
  piloto/...            # vistas rol piloto
  talento/...           # vistas rol talento
  inversionista/...     # vistas rol inversionista
src/app/prefiltro/      # formulario público-discreto de talento
src/lib/auth.ts         # config de auth + resolución de rol
middleware.ts           # protege /portal/*
```

(Ajustar según el método de auth elegido en §7.1.)

---

## 10. Cómo encaja con lo existente

- Reusa tokens de marca (`public/styles/`) y componentes (`BrushWordmark`, etc.).
- Contacto centralizado en `src/lib/config.ts` (añadir mailboxes/roles si hace falta).
- No toca las páginas públicas existentes salvo, quizá, un enlace discreto de "Acceso".
- Actualizar `robots.ts` para excluir `/portal` y `/prefiltro`.
