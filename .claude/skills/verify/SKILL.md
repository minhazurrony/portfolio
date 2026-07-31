---
name: verify
description: Run this project's full verification gate — typecheck, lint (import boundaries + naming), format check, production build, and a serve-and-smoke of the homepage. Use before committing a non-trivial change or whenever asked whether the app builds / still works / wasn't broken.
---

# verify

The project-specific "does it actually work" gate. Run top to bottom; **stop and report at the first failure** with the error output.

## Steps

1. **Static checks** (one command, or run individually):

   ```bash
   npm run verify   # = typecheck && lint && build
   npm run format:check
   ```

   - `typecheck` → `tsc --noEmit` must be clean.
   - `lint` → `next lint`; there must be **zero errors** (a pre-existing `useEffect` exhaustive-deps _warning_ in `src/features/skills/skills.tsx` is acceptable). Boundary or `check-file` errors mean a structure violation — hand off to the **structure-audit** skill.
   - `build` → `next build` must succeed.

2. **Serve-and-smoke** the built app (catches runtime/render breakage that static checks miss):

   ```bash
   PORT=3111 npm start >/tmp/next-verify.log 2>&1 &
   SVR=$!
   for i in $(seq 1 30); do curl -sf http://localhost:3111 >/dev/null && break; sleep 1; done
   curl -s -o /dev/null -w "status=%{http_code}\n" http://localhost:3111
   HTML=$(curl -s http://localhost:3111)
   for m in "minhazur" "about me" "Skills" "Experience" "Projects" "Contact"; do
     echo "$HTML" | grep -q "$m" && echo "  ok $m" || echo "  MISSING $m"
   done
   kill $SVR
   ```

   Expect `status=200` and all markers present. Adjust markers to whatever the change should render.

3. Report a concise pass/fail summary per step. Do not claim success unless every step passed.
