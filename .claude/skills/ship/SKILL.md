---
name: ship
description: Prepare and open a pull request — run the verify gate, stage changes, write a Conventional Commit, commit through the git hooks, push the branch, and open a PR with gh. Use when the user asks to ship, commit and open a PR, or wrap up a change.
---

# ship

Take a finished change from working tree to open PR. Only run when the user has asked to commit/ship (invoking this skill counts).

## Steps

1. **Branch check** — never commit on `main`. If on `main`, create a branch first:

   ```bash
   git rev-parse --abbrev-ref HEAD          # confirm current branch
   git checkout -b <type>/<short-topic>     # only if on main
   ```

2. **Verify** — run the **verify** skill. Do not proceed if it fails.

3. **Stage & review**:

   ```bash
   git add -A && git status -s
   ```

4. **Commit** with a **Conventional Commit** message. The `type` must be one allowed by `commitlint.config.js`: `feat, fix, refactor, perf, style, chore, docs, test, build, ci, revert`. Subject: lowercase, imperative, no trailing period (see AGENTS.md § Commit conventions).

   ```bash
   git commit -m "<type>(<scope>): <subject>"
   ```

   The pre-commit hook runs lint-staged; the commit-msg hook runs commitlint. If the message is rejected, fix it and recommit.

5. **Push & PR**:
   ```bash
   git push -u origin <branch>
   gh pr create --title "<type>: <subject>" --body "<what & why, test notes>"
   ```
   Report the PR URL.

## Notes

- Prefer a small, focused commit; if the diff spans unrelated concerns, split it.
- If a `gh` remote/PR isn't available, stop after push and report the branch is ready for a PR.
