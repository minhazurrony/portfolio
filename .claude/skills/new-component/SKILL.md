---
name: new-component
description: Create a React component in the correct layer (components/ui, common, form, layout, icons, or a feature's own components/) following the project's kebab-case filename + PascalCase export convention and import-boundary rules. Use when adding a shared or feature-local UI component.
---

# new-component

Place a component in the right layer so the import-boundary linter stays green. **Consult the boundary matrix in `AGENTS.md` (§ Import boundaries) — it is the source of truth.**

## Pick the layer

| The component is…                                     | Put it in                                          | Barrel to update       |
| ----------------------------------------------------- | -------------------------------------------------- | ---------------------- |
| a design-system **primitive** (button, dialog, input) | `src/components/ui/` — prefer `npx shadcn add <x>` | (shadcn manages)       |
| a **cross-feature composite** (used by 2+ features)   | `src/components/common/`                           | `common/index.ts`      |
| a **form field**                                      | `src/components/form/`                             | `form/index.ts`        |
| **global chrome** (navbar/footer)                     | `src/components/layout/`                           | `layout/index.ts`      |
| a custom **SVG icon**                                 | `src/components/icons/`                            | `icons/index.ts`       |
| used by **one feature only**                          | `src/features/<name>/components/`                  | none (relative import) |

## Steps

1. Create `…/<kebab-name>.tsx` with a PascalCase default export. Add `"use client";` as the first line only if it uses hooks / browser APIs / framer-motion.

   ```tsx
   type <PascalName>Props = {
     /* props */
   };

   function <PascalName>({}: <PascalName>Props) {
     return <div className="..." />;
   }

   export default <PascalName>;
   ```

2. If it lives in a barreled shared folder, add `export { default as <PascalName> } from "./<kebab-name>";` to that folder's `index.ts`. Feature-local components are imported by relative path — no barrel.

3. **Respect boundaries:** e.g. `ui` and `common` must not import `features` or `content`; primitives depend only on `ui`/`icons`/`lib`/`types`. Use the palette tokens (`bg-one`, `brand-one`, …) and let Prettier sort Tailwind classes.

4. Verify with the **verify** skill (or `npm run lint && npm run typecheck`).
