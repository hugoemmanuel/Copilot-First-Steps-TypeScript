# Copilot Kata — TypeScript/Node

A deliberately small and slightly **imperfect** repo to practice your Copilot Kata: prompting, refactoring, testing, commits, and pull requests.

## Quick start
```bash
# 1) Run
npm i
npm run dev

# 2) Test
npm test

# 3) Benchmarks
npm run bench
```

> Tip: Keep your terminal and Copilot Chat side by side.

---

## Suggested Exercises (map to the Kata)

**Level 1 — Basics**
- Ask Copilot to add concise, standardized **docstrings** to 2–3 functions.
- Small refactor: remove dead code and magic numbers in `src/strings/slugify.ts` and `src/math/fibonacci.ts`.
- Naming pass: “Suggest clearer parameter names that match our conventions.”

**Level 2 — Skilled Practice**
- Create/iterate tests using `.github/prompts/tests.md` (naming, Arrange–Act–Assert, edge cases).
- Add **custom instructions** (house rules) so Copilot follows your conventions.
- Ask Copilot to draft a **Conventional Commit** message from your diff and a **PR description** using `.github/PULL_REQUEST_TEMPLATE.md`.

**Level 3 — Mastery**
- Compare **recursive vs iterative** Fibonacci for performance (see `scripts/bench.ts`).
- Identify and fix **code smells** in `src/user/repo.ts` (e.g., API clarity, validation).
- Add a **pre-commit checklist** to avoid secrets; propose a simple script or doc.

## Repo structure
```
.
├── src/
│   ├── cmd/katanasvc.ts
│   ├── math/fibonacci.ts
│   ├── parser/config.ts
│   ├── strings/slugify.ts
│   └── user/{user.ts,repo.ts}
├── test/parser.test.mjs
├── scripts/bench.ts
├── .github/prompts/{tests.md,refactor.md}
├── .github/PULL_REQUEST_TEMPLATE.md
├── LICENSE
├── package.json
├── tsconfig.json
├── .gitignore
└── testdata/sample_config.json
```
