---
name: log
description: Log activity to LOG.md. Optionally record a decision in DECISIONS.md.
argument-hint: [--decision "rationale"] <what was done>
allowed-tools: Bash, Write, Read, Edit, Glob, Grep
---

# Log Activity

Log work done on Don Chambas website.

**Full arguments:** $ARGUMENTS

## Steps

### 1. Parse arguments

- **`--decision "rationale"`** (optional): also log a decision to `DECISIONS.md`
- **Description**: everything after flags is the activity description

If no description is provided, ask the user what was done.

### 2. Gather entry details

From the arguments or by asking the user, determine:

- **What was done** (required): one-line summary
- **Who did it**: default to `Claude` unless the user says otherwise
- **Category**: infer from context — `dev`, `content`, `design`, `deploy`, `docs`, `planning`, `admin`
- **Description** (optional): additional detail beyond the one-liner
- **Next step** (optional): what comes next

### 3. Write to LOG.md

Append an entry to `/Users/ablascoa/GitHub/don-chambas-website/LOG.md`.

If today's date header (`## YYYY-MM-DD`) already exists, add the entry under it. Otherwise, add a new date header after the `---` separator (most recent first).

Entry format:

```markdown
## YYYY-MM-DD

- **<What was done>** (<who> · `<category>`)
  <description if any>
  _Next: <next step if any>_
```

### 4. If `--decision` flag: write to DECISIONS.md

Read `/Users/ablascoa/GitHub/don-chambas-website/DECISIONS.md` first. Find the highest `DEC-WXXX` number and auto-increment (note the `W` prefix — website-scoped, distinct from `don-chambas-hq`'s `DEC-XXX`).

If today's date header already exists, add under it. Otherwise, add a new date header (most recent first).

Entry format:

```markdown
## YYYY-MM-DD

### DEC-WXXX: <Decision title>

**Decisión:** <what was decided>

**Contexto:** <what was being done when the decision was made>

**Rationale:** <why this choice — from the --decision flag>
```

### 5. Confirm

Tell the user what was logged and where. Include the full entry text so they can verify.
