# Agent Protocol — don-chambas-website

Entry point para cualquier agente que trabaje en este repo. Léelo antes de empezar.

---

## 1. What This Is

Sitio web de marketing / landing de **Don Chambas** — plataforma WhatsApp-first de reclutamiento para negocios de servicio en México. Stack previsto: **Next.js**. Diseño y contenido **por definir** (TBD); hoy el repo es solo la base mínima.

Para contexto completo de negocio, decisiones de producto, wireframes y branding ver `don-chambas-hq`.

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
