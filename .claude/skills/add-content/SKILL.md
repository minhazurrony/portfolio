---
name: add-content
description: Add or update typed data in src/content (projects, experience, skills, profile) against the shared types in src/types. Use when updating "my info", adding a project, experience, or skill. Keeps data pure and serializable so it can feed the future RAG chat.
---

# add-content

All displayed portfolio data lives in `src/content/*` and is typed by `src/types`. **Content must be pure, serializable data — no React components or JSX.** (This is what makes it usable as the future RAG knowledge source.)

## Targets

| Data                       | File                        | Type (`@/types`)                                                             |
| -------------------------- | --------------------------- | ---------------------------------------------------------------------------- |
| Projects                   | `src/content/projects.ts`   | `Project` (`id, name, imageUrl, author, date, technologies[], externalLink`) |
| Work history               | `src/content/experience.ts` | `Experience` (`organization, designation, serviceYearRange, achievements[]`) |
| Skills                     | `src/content/skills.ts`     | `Skill` (`name, icon: SkillIconKey, iconColor?`)                             |
| Identity / socials / stats | `src/content/profile.ts`    | `Profile`                                                                    |

## Steps

1. Open the target file, add/edit an entry matching the type imported from `@/types`. Follow the shape of existing entries.

2. **Skills — icon handling:** `icon` is a **string key** (`SkillIconKey`), not a component. To add a skill whose icon isn't in the union yet:

   - add the key to `SkillIconKey` in `src/types/skill.ts`, then
   - map the key → icon component in `src/features/skills/skill-icons.tsx` (this is the only place that couples a key to a `react-icons`/`@/components/icons` component).

3. Do **not** import components into `src/content` (the boundary linter forbids `content → anything but types`).

4. Verify: `npm run typecheck` (types must stay clean); the site picks up new entries automatically.
