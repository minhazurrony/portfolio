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

Single-page personal portfolio built with **Next.js 14 App Router** (`app/` directory) and TypeScript. The whole site is one route: `app/page.tsx` composes six section containers in order — Hero, About, Skills, Experience, Projects, Contact.

The three-layer structure is the key thing to understand:

- **`app/containers/home-page/`** — one file per page section. These own the layout and content of each section and are the top-level building blocks assembled in `page.tsx`.
- **`app/components/`** — reusable presentational pieces (`Title`, `Reveal`, `ProjectCard`, `Timeline`, form fields, etc.), re-exported through `app/components/index.ts`.
- **`app/layouts/global/`** — `Navbar` and `Footer`, mounted once in `app/layout.tsx` around all page content.

Static content lives in **`app/constants/`** (`projects.ts`, `experience.ts`, `skills.tsx`), each exporting typed data arrays consumed by the containers. To change what the site displays, edit these files rather than the JSX. Note `skills.tsx` (not `.ts`) because it embeds SVG icon components.

Path alias `@/*` maps to `./app/*` (see `tsconfig.json`). Import shared code via barrel files — e.g. `@/components`, `@/containers/home-page`, `@/components/form` — not deep paths.

### Animation (framer-motion)

Uses framer-motion's **`LazyMotion` with `domAnimation`** to keep bundle size down — this was a deliberate optimization. Consequences:

- `LazyMotionContainer` wraps the app in `layout.tsx`. Because of it, **use the lowercase `m` component (`import { m } from "framer-motion"`), never `motion`** — `motion` pulls in the full feature set and defeats the lazy loading.
- The reusable `Reveal` component wraps children in a scroll-triggered fade-up (`useInView` + `useAnimation`, fires once). Wrap section content in `<Reveal>` for the standard entrance animation.

### Styling

Tailwind CSS with a **custom fixed color palette** defined in `tailwind.config.ts` (`colors` overrides the defaults entirely — no default Tailwind colors are available). Use the semantic names: `bg-one`, `bg-two`, `brand-one`, `brand-two`, `grey`, `white`, `red`.

Two Google fonts are loaded via `next/font` in `public/assets/fonts/index.ts` and exposed as CSS variables / Tailwind families: `font-ubuntu` and `font-ibm-plex-mono` (the body default).

`ContainerWrapper` provides the standard responsive horizontal padding — reuse it for full-width sections instead of hand-writing the `px-*` breakpoints.

### Contact form

`Contact.tsx` uses **react-hook-form + zod** (via `@hookform/resolvers/zod`) with a `Controller`-based generic `Input`/`Textarea` in `app/components/form/`. On submit it POSTs to an external form service configured through env vars:

- `NEXT_PUBLIC_FORM_API_URL`
- `NEXT_PUBLIC_FORM_API_KEY`

These must be set (e.g. in `.env.local` — see `.env.example`) for the contact form to work. Feedback is shown via `react-hot-toast`.

## Code conventions

- Components that use hooks, browser APIs, or framer-motion must start with `"use client"` (server components are the default in the App Router).
- Default-export one component per file; aggregate exports through the directory's `index.ts` barrel.
- Import via the `@/*` alias and barrel files, not deep relative paths.

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
