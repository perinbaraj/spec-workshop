# Exercise 2: Install and initialize Spec Kit

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../README.md) |
[Next: Exercise 3](exercise-3-create-the-specification.md)

## Objective

Initialize Spec Kit yourself in the existing project and create a reviewed
constitution: the project rules Copilot will follow. This does not implement
the claims feature.

## Prerequisites

- Finish [Exercise 1](exercise-1-explore-the-app.md); keep the app stopped.
- Open your own project on `main`, in the folder containing `package.json`.
- Use **Terminal > New Terminal** for terminal commands, not Copilot Chat.

Spec Kit is the toolkit; `specify-cli` is its package; `specify` is the terminal
command. The `/speckit-...` Chat skills become available after initialization.

## The Backlog Item

Prepare project rules for the same claims-filter and pagination change.
Use [the acceptance contract](../acceptance.md), not a new feature scope.

## Step-by-step Instructions

### Step 1: Install the tools if needed (Terminal)

**Already installed during prework? Skip this step and go to Step 2.**
Otherwise complete this installation before running any `specify` command.

Check Python with `python --version` on Windows or `python3 --version` on
macOS/Linux. Install [Python](https://www.python.org/downloads/) if missing.
Then run:

```text
uv --version
```

**Expected output:** Python reports 3.11 or later and uv reports its version.
If uv is missing, choose **one** installation command for your platform.

**Windows PowerShell:**

```powershell
winget install --id=astral-sh.uv -e
```

**macOS/Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Expected output:** uv installs. Save your work, close and reopen VS Code and
this folder, and open a new terminal for the updated PATH.

Run:

```text
uv --version
uv tool install specify-cli==1.2.3
```

**Expected output:** uv is available and the pinned Specify CLI installs.
If blocked, use the [official uv alternatives](https://docs.astral.sh/uv/getting-started/installation/)
and [installation recovery](../prework.md#3-install-and-verify-spec-kit) with the
facilitator. Do not bypass security settings or disable TLS verification.

### Step 2: Verify the pinned command (Terminal)

```text
specify version
specify init --help
```

**Expected output:** Version `1.2.3`, with `--here`, `--integration`, and
`--script` in init help. Do not upgrade during the workshop.

If the command is missing, run `uv tool update-shell`, then reopen VS Code and
its terminal. If the version is wrong, use
[installation recovery](../prework.md#3-install-and-verify-spec-kit); do not
keep conflicting installations.

### Step 3: Initialize this project once (Terminal)

Confirm the terminal is at the project root. If `.specify` already exists,
inspect it with the facilitator and resume that setup instead of initializing
over it. Otherwise choose **exactly one** command:

**Windows: Python helpers** (no PowerShell policy change needed):

```text
specify init --here --integration copilot --script py
```

**macOS/Linux: Bash helpers:**

```text
specify init --here --integration copilot --script sh
```

**Windows alternative:** only if the facilitator confirms PowerShell scripts
are permitted, use this **instead of** the Python command:

```text
specify init --here --integration copilot --script ps
```

`--here` uses this folder; `--integration copilot` installs Copilot integration;
`--script` selects helper scripts for your platform. Read the non-empty-folder
merge warning and enter `y` **yourself**. Do not add `--force`.

**Expected output:** Spec Kit merges its tooling into the existing project.
It does not create another app or require a new Git branch. If you see
`Operation cancelled`, verify files before assuming initialization succeeded.

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
Stay on main; do not create or switch branches.
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

- [ ] Specify reports `1.2.3`; you ran one platform initialization yourself.
- [ ] The generated helpers and Chat skills exist and are discoverable.
- [ ] You reviewed the constitution and related tooling changes.
- [ ] Application code is unchanged and the app remains stopped on `main`.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| Package, certificate, or proxy error | Use [installation recovery](../prework.md#3-install-and-verify-spec-kit) and the approved source; do not disable TLS verification. |
| `Operation cancelled` and no artifacts | Rerun only the same chosen init command interactively and answer its prompt. Preserve partial output and ask before rerunning over it. |
| PowerShell helpers blocked | Do not change policy. Before initialization choose Python; after partial initialization preserve files and ask the facilitator. |
| Skills missing in Chat | Confirm project root and generated `SKILL.md` files, save, and use **Developer: Reload Window** if needed. Do not substitute obsolete command syntax. |
| Unexpected application/configuration changes | Inspect and use [workshop recovery](../prework.md#recovery-during-the-workshop), not reset/clean. |

Resources: [Spec Kit installation](https://github.github.io/spec-kit/installation.html)
and [VS Code Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../README.md) |
[Next: Exercise 3](exercise-3-create-the-specification.md)
