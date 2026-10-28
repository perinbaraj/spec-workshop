# Exercise 2: Install and initialize Spec Kit

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../../README.md#start-here) |
[Next: Exercise 3](exercise-3-create-the-specification.md)

## Objective

Install and initialize Spec Kit in the existing project, then create a reviewed
constitution: the project rules Copilot will follow. This does not implement the
claims feature.

## Prerequisites

- Finish [Exercise 1](exercise-1-explore-the-app.md); keep the app stopped.
- Open your own project in the folder containing `package.json`.
- Use **Terminal > New Terminal** for terminal commands, not Copilot Chat.
- Python 3.11+ and uv. Install them from the
  [Python downloads](https://www.python.org/downloads/) and
  [official uv installation guide](https://docs.astral.sh/uv/getting-started/installation/)
  if needed.

Spec Kit is the toolkit; `specify-cli` is its package; `specify` is the terminal
command. The `/speckit-...` Chat skills become available after initialization.

## The Backlog Item

Prepare project rules for the same claims-filter and pagination change.
Use [the acceptance contract](../acceptance.md), not a new feature scope.

## Step-by-step Instructions

### Step 1: Install Spec Kit (Terminal)

Confirm Python reports 3.11 or later and uv is available:

```text
python --version
uv --version
uv tool install specify-cli
```

On macOS/Linux, use `python3 --version` if `python` is unavailable.

**Expected output:** Python and uv report their versions and the current Specify
CLI release installs.
If blocked, use the [official uv alternatives](https://docs.astral.sh/uv/getting-started/installation/)
with the facilitator. For a certificate, proxy, or package-source restriction,
use an organization-approved index or wheel; do not bypass security settings or
disable TLS verification.

### Step 2: Verify the command (Terminal)

```text
specify version
```

**Expected output:** Specify reports its installed version.

If the command is missing, run `uv tool update-shell`, then reopen VS Code and
its terminal so the updated PATH is loaded. Do not install a conflicting copy
through another package manager.

### Step 3: Initialize this project once (Terminal)

Confirm the terminal is at the project root. If `.specify` already exists,
inspect it with the facilitator and resume that setup instead of initializing
over it. Otherwise run once:

```text
specify init . --integration copilot
```

**Expected output:** Spec Kit merges its tooling into the existing project.
It does not create another app. If the command fails or is interrupted, inspect
existing and partially generated files before rerunning it.

### Step 4: Inspect the generated tooling (Editor)

In Explorer, inspect `.specify` and `.github\skills\speckit-...`. Open
**Source Control** to review changed files, and open new files from Explorer.

**Expected output:** `.specify` contains templates/helper scripts and the skill
folders contain `SKILL.md`. Existing application/package files,
`.github\copilot-instructions.md`, and the reviewer profile are preserved.
Do not add `.github` to `.gitignore`; it holds required workshop files.

### Step 5: Generate project rules (Copilot Chat)

Select the normal implementation agent with the Copilot harness. Type
`/speckit-constitution`, select its completion, and submit:

```text
/speckit-constitution
Read .github/copilot-instructions.md and inspect the existing application.
Create project principles for this bounded brownfield claims-filter change.
Reuse Express, Zod, React, the typed client, synthetic in-memory fixtures,
and existing Vitest/Supertest tests. Preserve unrelated behavior.
Require member isolation before filtering, counting, and pagination,
route input validation, generic errors, no PHI logging, accessible controls,
focused tests, actual test/build evidence, and human acceptance.
No new packages, services, Redis, database, deployment, or broad refactoring.
Keep normal tool approvals and the workshop reviewer's read/search-only tools.
Generate the constitution only; do not modify application code or shared
Copilot instructions, commit, or push. Report the generated file paths.
Do not invent performance, accessibility, or test results.
```

**Expected output:** A constitution at `.specify\memory\constitution.md`, with
any related template changes reported. Later exercises use `/speckit-specify`,
`/speckit-plan`, `/speckit-tasks`, `/speckit-implement`, and
`/speckit-converge`; do not run those yet.

### Step 6: Review the constitution (Editor)

Read the constitution and reported template changes. Correct placeholders or
invented requirements, then inspect Source Control again.

**Expected output:** Human-reviewed project rules preserve repository privacy,
security, accessibility, and evidence requirements without adding infrastructure.
Only expected tooling/rules artifacts have changed, not application code.

## Exit Criteria

- [ ] Specify reports its version; you initialized this existing project once.
- [ ] The generated helpers and Chat skills exist and are discoverable.
- [ ] You reviewed all generated changes, the constitution, and related tooling.
- [ ] Application code is unchanged and the app remains stopped.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| Package, certificate, or proxy error | Use an organization-approved index or wheel with the facilitator; do not disable TLS verification. |
| Initialization fails or is interrupted | Preserve output, inspect `.specify` and the generated diff, then ask the facilitator before rerunning the same command. |
| Platform helper is blocked | Do not weaken security settings. Preserve generated files and ask the facilitator to inspect the selected platform helper. |
| Skills missing in Chat | Confirm project root and generated `SKILL.md` files, save, and use **Developer: Reload Window** if needed. Do not substitute obsolete command syntax. |
| Unexpected application/configuration changes | Inspect and use [workshop recovery](exercise-0-setup.md#recovery-during-the-workshop), not reset/clean. |

Resources: [Spec Kit installation](https://github.github.io/spec-kit/installation.html)
and [VS Code Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../../README.md#start-here) |
[Next: Exercise 3](exercise-3-create-the-specification.md)
