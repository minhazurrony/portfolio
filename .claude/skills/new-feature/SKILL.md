---
name: new-feature
description: Scaffold a new feature module under src/features/ that complies with the project's import-boundary and naming rules. Use when adding a new page section or self-contained feature (e.g. services, testimonials, pricing, chat) to this portfolio/agency site.
---

# new-feature

Create a boundary-compliant feature module. **Read `AGENTS.md` (§ Project structure, § Import boundaries) first — it is the source of truth; this skill is only the procedure.**

## Inputs to confirm

- **name** — kebab-case (e.g. `services`, `case-studies`).
- **page section?** — will it render on the home page (`src/app/page.tsx`)?
- **interactive?** — does it use hooks / browser APIs / framer-motion? If yes, the section file needs `"use client"`.

## Steps

1. Create the module (PascalName = the name in PascalCase):

   `src/features/<name>/<name>.tsx`

   ```tsx
   // add "use client"; as the first line ONLY if interactive
   import { ContainerWrapper, Title } from "@/components/common";
   // import data from "@/content/..."; types from "@/types" as needed

   function <PascalName>() {
     return (
       <ContainerWrapper className="bg-bg-one p-[128px]">
         <Title title="<PascalName>" subtitle="..." />
         {/* ... */}
       </ContainerWrapper>
     );
   }

   export default <PascalName>;
   ```

   `src/features/<name>/index.ts` — the **only** public entry point:

   ```ts
   export { default as <PascalName> } from "./<name>";
   ```

2. Feature-only subcomponents go in `src/features/<name>/components/<child>.tsx` (kebab-case file, PascalCase export) and are imported with **relative** paths inside the feature.

3. Wire data from `@/content/*` (typed via `@/types`). **Never import another feature** — shared code belongs in `@/components/*` or `@/lib/*` (see the boundary matrix in AGENTS.md).

4. If it's a page section, add it to `src/app/page.tsx`:

   ```tsx
   import { <PascalName> } from "@/features/<name>";
   // ...place <<PascalName> /> in the <main> in the desired order
   ```

5. Verify: run the **verify** skill (or `npm run lint && npm run typecheck`). Boundary/naming violations must be zero.

## Guardrails

- Filenames & folders are **kebab-case**; exports are PascalCase. Enforced by `check-file`.
- One default export per file; expose the feature only through `index.ts`.
- Put displayed data in `src/content`, not hardcoded in the component.
