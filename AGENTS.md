# AGENTS.md

Single source of truth for AI coding agents and human contributors working in this repository. All agent-specific files (`CLAUDE.md`, `.cursor/rules/`, `.github/copilot-instructions.md`, `GEMINI.md`, `.windsurf/rules/`, `.clinerules/`) point here — **edit this file, not the pointers.**

Agents that read `AGENTS.md` natively (OpenAI Codex, Zed, Aider, and others) need no pointer file.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint-config-next`)
- `npm run format` — format the repo with Prettier; `npm run format:check` to verify without writing
- `npm run typecheck` — type-check with `tsc --noEmit`

There is no test suite.

## Architecture

Single-page personal portfolio (growing into agency + portfolio + an AI chat) built with **Next.js 14 App Router** and TypeScript, organized **feature-first** under `src/`. The whole site is one route: `src/app/page.tsx` composes six section features in order — Hero, About, Skills, Experience, Projects, Contact.

## Project structure

```
src/
  app/                 routes only — layouts, pages, and (future) api route handlers
  components/
    ui/                shadcn/ui primitives (owned, restyleable) — add via `npx shadcn add …`
    common/            cross-feature composites: container-wrapper, reveal, title, tag, logo, scroll-bottom, lazy-motion-container
    form/              shared form primitives: input, textarea, error-message
    layout/            global chrome: navbar, footer
    icons/             custom SVG icon components
  features/<name>/     self-contained section (hero, about, skills, experience, projects, contact)
    components/         feature-only components
    index.ts           PUBLIC entry point — the ONLY file other layers may import from a feature
  content/             the "my info" data layer (profile, projects, experience, skills) — pure & serializable, also the future RAG source
  lib/                 shared utils/clients: utils.ts (`cn`), fonts.ts
  types/               shared domain types (Project, Skill, Experience, Profile)
  hooks/               shared hooks
```

**Rules of thumb**

- To change what the site displays, edit **`src/content/`** (typed via `src/types`), not the JSX. Content is plain data only — no React/components — so it stays serializable for the future RAG chat. (Skill icons are referenced by a string `icon` key; the key→component map lives in `features/skills/skill-icons.tsx`.)
- A **feature** is imported only through its barrel: `import { Hero } from "@/features/hero"`. Never deep-import `@/features/hero/components/...` from outside the feature; inside a feature use relative paths.
- Cross-feature sharing goes **up** into `components/` or `lib/`, never sideways between features.
- Future seams (documented, not yet built): AI chat → `src/features/chat/` (UI) + `src/app/api/chat/route.ts` (server) + `src/lib/ai/` (Anthropic client + vector store), fed from `src/content`.

### Import boundaries (enforced by ESLint — `eslint-plugin-boundaries`)

Each layer may import only the layers below. Violations fail `npm run lint` (and the pre-commit hook).

| layer             | may import                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `app`             | anything                                                                                                            |
| `feature`         | `common`, `form`, `ui`, `icons`, `content`, `lib`, `hooks`, `types`, **its own** feature files (not other features) |
| `layout`          | `common`, `ui`, `icons`, `content`, `lib`, `hooks`, `types`                                                         |
| `common`          | `common`, `ui`, `icons`, `lib`, `hooks`, `types`                                                                    |
| `form`            | `form`, `ui`, `icons`, `lib`, `types`                                                                               |
| `ui`              | `ui`, `icons`, `lib`, `types`                                                                                       |
| `content`         | `types` only                                                                                                        |
| `lib` / `hooks`   | `lib`, `types`                                                                                                      |
| `icons` / `types` | themselves only                                                                                                     |

Path alias `@/*` maps to `./src/*` (see `tsconfig.json`).

### Animation (framer-motion)

Uses framer-motion's **`LazyMotion` with `domAnimation`** to keep bundle size down — this was a deliberate optimization. Consequences:

- `LazyMotionContainer` wraps the app in `layout.tsx`. Because of it, **use the lowercase `m` component (`import { m } from "framer-motion"`), never `motion`** — `motion` pulls in the full feature set and defeats the lazy loading.
- The reusable `Reveal` component wraps children in a scroll-triggered fade-up (`useInView` + `useAnimation`, fires once). Wrap section content in `<Reveal>` for the standard entrance animation.

### Styling

Tailwind CSS with a **custom fixed color palette** defined in `tailwind.config.ts` (`colors` overrides the defaults entirely — no default Tailwind colors are available). Use the semantic names: `bg-one`, `bg-two`, `brand-one`, `brand-two`, `grey`, `white`, `red`.

Two Google fonts are loaded via `next/font` in `src/lib/fonts.ts` and exposed as CSS variables / Tailwind families: `font-ubuntu` and `font-ibm-plex-mono` (the body default). `src/components/ui/` + `components.json` + `cn()` in `src/lib/utils.ts` are scaffolded for shadcn/ui, ready for the redesign phase.

`ContainerWrapper` provides the standard responsive horizontal padding — reuse it for full-width sections instead of hand-writing the `px-*` breakpoints.

### Contact form

The contact feature (`src/features/contact/`) uses **react-hook-form + zod** (via `@hookform/resolvers/zod`) with a `Controller`-based generic `Input`/`Textarea` in `src/components/form/`. On submit it POSTs to an external form service configured through env vars:

- `NEXT_PUBLIC_FORM_API_URL`
- `NEXT_PUBLIC_FORM_API_KEY`

These must be set (e.g. in `.env.local` — see `.env.example`) for the contact form to work. Feedback is shown via `react-hot-toast`.

## Code conventions

- Components that use hooks, browser APIs, or framer-motion must start with `"use client"` (server components are the default in the App Router).
- Default-export one component per file; aggregate exports through the directory's `index.ts` barrel. A feature's `index.ts` is its public API.
- **Filenames and folders are kebab-case** (e.g. `project-card.tsx`, `use-vertical-scroll.ts`); component/hook _exports_ stay PascalCase/camelCase. Enforced by `eslint-plugin-check-file`.
- Import shared code via the `@/*` alias and barrel files (`@/components/common`, `@/components/form`, `@/features/<name>`, `@/content/*`, `@/types`), not deep relative paths.
- Respect the import-boundary matrix above; put new profile/portfolio data in `src/content`, not inline in components.

## Coding style (enforced)

Style is enforced at the tooling layer, so it stays consistent across every agent and every contributor:

- **Prettier** formats all code (defaults) with `prettier-plugin-tailwindcss` auto-sorting Tailwind class names. Do not hand-order class names or fight the formatter.
- **ESLint** extends `next/core-web-vitals`.
- **`.editorconfig`** sets UTF-8, LF line endings, a final newline, and 2-space indentation.
- On every commit a **pre-commit hook** runs `lint-staged`, which auto-formats and `eslint --fix`es staged files. Run `npm run format` and `npm run lint` before committing to avoid surprises.

## Commit conventions (enforced)

Commit messages must follow **[Conventional Commits](https://www.conventionalcommits.org/)**. A **commit-msg hook** (commitlint) rejects non-conforming messages.

Format:

```
type(optional-scope): short imperative subject
```

Allowed `type` values:

| type       | when to use                                                |
| ---------- | ---------------------------------------------------------- |
| `feat`     | a new feature                                              |
| `fix`      | a bug fix                                                  |
| `refactor` | code change that neither fixes a bug nor adds a feature    |
| `perf`     | performance improvement                                    |
| `style`    | formatting only (whitespace, semicolons) — no logic change |
| `chore`    | tooling, deps, config, housekeeping                        |
| `docs`     | documentation only                                         |
| `test`     | adding or fixing tests                                     |
| `build`    | build system or dependency changes                         |
| `ci`       | CI configuration                                           |
| `revert`   | reverting a previous commit                                |

Keep the subject lowercase, imperative, and without a trailing period. Examples from this repo's history:

```
feat: add projects carousel
fix: optimize images
chore: add vercel analytics
refactor: image optimization
```
