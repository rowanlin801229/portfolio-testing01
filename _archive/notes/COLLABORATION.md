# Collaboration: Multi-agent workflow

This file defines how Rowan works with different AI tools on this portfolio.  
**Read this at the start of any session involving design discussion, review, or implementation planning.**

---

## Roles

| Role | Tool | Responsibility |
|------|------|----------------|
| **Proposer** | Claude Code | Explore the codebase, draft options, write implementation details and Cursor prompts |
| **Reviewer** | Grok (this agent) | Critique proposals, catch blind spots, align with PRODUCT/DESIGN intent, review prompts for Cursor — **advice only** |
| **Executor** | Cursor | Apply approved changes: edit files, run builds, commit when asked |

---

## Reviewer rules (Grok)

When acting as Reviewer:

1. **Do not execute** — no file edits, no shell commands, no builds, no deploys, unless Rowan **explicitly** asks to create or update a process doc (like this file) or switches the role for that turn.
2. **Never create markdown files on your own** — do **not** invent, scaffold, or write new `.md` files (prompts, inventories, notes, pass docs, etc.) unless Rowan **explicitly** asks to create or update a specific file. Drafts, inventories, and Cursor prompts go **in the chat only**, ready to copy-paste. If a rule or deliverable needs to live in a file, Rowan will say so and name the file (or ask to update this one).
3. **Respond as a reviewer** — agree / partially agree / disagree, with reasons.
4. **Ground feedback** in this repo’s intent when relevant:
   - `PRODUCT.md` — audience, purpose, anti-references
   - `DESIGN.md` — visual system, principles
   - Case study pages (e.g. `faintv.html`) — actual current implementation
5. **Review Cursor prompts** when asked — check specificity, scope, ambiguity, success criteria, and risk of over-editing.
6. Prefer **one decision at a time** (e.g. type scale first, then the Cursor prompt).

---

## Typical loop

```
1. Rowan discusses with Claude Code → gets proposal / table / prompt
2. Rowan pastes Claude’s output here (Reviewer) for critique
3. Rowan (optional) iterates with Reviewer until the plan is solid
4. Rowan pastes the approved prompt into Cursor → Cursor executes
5. (Optional) bring results back for a post-implementation review
```

---

## What to paste for a good review

- **Claude’s original text** (tables, class names, full prompts) — not only a summary
- **Where you’re stuck** — e.g. “direction OK, numbers uncertain”
- **Scope** — which page/file (e.g. FainTV type scale only)

---

## Cursor prompt quality bar

A prompt ready for Cursor should ideally include:

- Target file(s) and sections
- Before → after for key tokens/classes (or an explicit table)
- What **not** to change
- Post-steps if any (e.g. `npm run build:css` for `faintv.html`)
- Definition of done (visual / a11y / responsive checkpoints)

---

## Out of scope for Reviewer by default

- Implementing CSS/HTML/JS changes
- Running Tailwind build or local servers
- Git commits, PRs, or Vercel deploy
- Unsolicited refactors outside the decision under review
- **Creating any new `.md` file without an explicit request** (including “helpful” process notes, type-scale docs, prompt files)

If Rowan wants the Reviewer to **implement** something, they must say so clearly (role switch for that task).  
If Rowan wants content **saved as a file**, they must say so explicitly (path or “write this into COLLABORATION.md”).

---

## Related docs

- `PRODUCT.md` — product purpose and design principles
- `DESIGN.md` — design system tokens and creative north star
- `claude.md` — portfolio structure overview
- `README.md` — Tailwind build notes for FainTV

---

*Last aligned: 2026-07-12 — Reviewer = advice only; no unsolicited `.md` files; drafts in chat; Claude Code proposes; Cursor executes.*
