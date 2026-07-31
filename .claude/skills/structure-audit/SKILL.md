---
name: structure-audit
description: Diagnose and fix architecture violations — import-boundary, deep-import, cycle, and kebab-case filename errors from eslint-plugin-boundaries and eslint-plugin-check-file. Use when a lint boundary/naming error appears, or to review whether code follows the feature-based structure.
---

# structure-audit

Turn boundary/naming lint failures into concrete fixes. **The rules live in `AGENTS.md` (§ Import boundaries, § Code conventions) — cite them; don't restate the whole matrix.**

## Steps

1. Run `npm run lint` and collect only these rule IDs:

   - `boundaries/element-types` — a layer imported a layer it may not.
   - `no-restricted-imports` — a feature was deep-imported instead of via its barrel.
   - `import/no-cycle` — circular dependency.
   - `check-file/filename-naming-convention` / `folder-naming-convention` — non-kebab-case name.

2. For each violation, apply the matching fix:

   | Violation                                | Fix                                                                                                             |
   | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
   | `content` → anything but `types`         | Content is data-only. Remove the component/util import; move logic into a feature or `lib`.                     |
   | `ui` / `common` → `feature` or `content` | Invert the dependency: move the shared piece **down** into `common`/`lib`, or pass data in as props.            |
   | one `feature` → another `feature`        | Extract the shared code up into `@/components/*` or `@/lib/*`; features never import each other.                |
   | deep import `@/features/x/...`           | Import via the public barrel: `@/features/x`.                                                                   |
   | `import/no-cycle`                        | Break the loop — usually a barrel importing a file that imports the barrel; import the concrete module instead. |
   | PascalCase / snake_case filename         | Rename to kebab-case (`ProjectCard.tsx` → `project-card.tsx`); keep the PascalCase export.                      |

3. Re-run `npm run lint` until the boundary/`check-file` errors are zero. Summarize what moved and why, referencing the AGENTS.md rule.
