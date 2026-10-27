# Exercise 2: Install and initialize Spec Kit

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../README.md) |
[Next: Exercise 3](exercise-3-create-the-specification.md)

## What you will do

Make the Spec Kit command available, initialize it in the existing project, and
create a constitution: the project rules Copilot must follow in later exercises.
**You run initialization yourself. It does not implement the claims feature.**

## Before you start

Finish [Exercise 1](exercise-1-explore-the-app.md) and stop its development server.
Use your own project folder on `main`. All terminal commands below run in
**VS Code > Terminal > New Terminal**, not in Copilot Chat.

Spec Kit is the toolkit; `specify-cli` is its installable package; `specify` is
the terminal command. `/speckit-...` skills appear in Copilot Chat only after
project initialization.

## Do this

### 1. Terminal: install the tools if needed

**Already installed during prework? Skip installation and go to action 2.**

You need Python 3.11+ and uv, the package installer. Check Python with
`python --version` on Windows or `python3 --version` on macOS/Linux.
If missing, install [Python](https://www.python.org/downloads/) before continuing.
Check uv:

```text
uv --version
```

If uv is not found, choose **one** installation command:

**Windows PowerShell:**

```powershell
winget install --id=astral-sh.uv -e
```

**macOS/Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Save your work, close and reopen VS Code, reopen this folder, and create a new
terminal so it receives the updated PATH. Run `uv --version` again. If the
command is still missing or installation is blocked, use the
[official uv installation alternatives](https://docs.astral.sh/uv/getting-started/installation/)
with the facilitator; do not bypass your machine's security settings.

Now install the workshop's pinned Spec Kit version:

```text
uv tool install specify-cli==1.2.3
```

### 2. Terminal: verify the command

```text
specify version
specify init --help
```

**Expected:** version `1.2.3` and help containing `--here`, `--integration`, and
`--script`. Do not upgrade during the exercises.

If `specify` is not found after installation, run `uv tool update-shell`, then
close and reopen VS Code and its terminal. If the version is wrong, use the
[prework installation recovery](../prework.md#3-install-and-verify-spec-kit)
before continuing. Do not keep two conflicting installations.

### 3. Terminal: initialize this project

Make sure the terminal is in the folder containing `package.json`.
If `.specify` already exists in Explorer, inspect it with the facilitator and
resume the existing setup instead of initializing over it.

Choose **one command only**:

**Windows: use Python helpers** (works without changing PowerShell policy):

```text
specify init --here --integration copilot --script py
```

**macOS/Linux: use Bash helpers:**

```text
specify init --here --integration copilot --script sh
```

**Windows alternative:** only if your facilitator has confirmed PowerShell
scripts are allowed, you may use this **instead of** the Python command:

```text
specify init --here --integration copilot --script ps
```

These commands initialize the current folder for Copilot; they do not create a
new app or require a new Git branch. At the non-empty-directory merge warning,
read the message and enter `y` yourself. Do not add `--force`.

### 4. Editor: check the generated files

In Explorer, confirm these exist:

- `.specify`, including templates and helper scripts.
- `.github\skills\speckit-...` folders containing `SKILL.md`.

If the terminal printed `Operation cancelled`, the files may be absent even if
the command appeared successful. Check the files, not just the exit code.

Open **Source Control** in VS Code and click changed files to inspect them.
Open new files from Explorer too. Existing application code, package files,
`.github\copilot-instructions.md`, and the reviewer profile must be preserved.
Do not add `.github` to `.gitignore`; it contains required workshop files.

### 5. Copilot Chat: discover the skills and create project rules

Open the normal implementation agent with the Copilot harness selected.
Type `/speckit-constitution` and select its completion. Later exercises use
`/speckit-specify`, `/speckit-plan`, `/speckit-tasks`, `/speckit-implement`, and
`/speckit-converge`; **do not run those yet**.

Submit:

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

### 6. Editor: review the constitution

Read `.specify\memory\constitution.md` and any reported template changes.
Correct placeholders or invented requirements. It must preserve repository
privacy and accessibility rules without adding infrastructure.
Use Source Control to confirm only expected tooling/rules artifacts changed.

## Check your result

`specify` works, generated skills are discoverable, and you have reviewed the
constitution. The claims app itself is unchanged.

Continue to [Exercise 3: create the specification](exercise-3-create-the-specification.md).

## If you get stuck

| Problem | What to do |
| --- | --- |
| Package, certificate, or proxy error | Use [prework recovery](../prework.md#3-install-and-verify-spec-kit) and the facilitator's approved source; do not disable TLS verification. |
| No generated files / `Operation cancelled` | If no artifacts exist, rerun the same selected init command interactively and answer its prompt. Preserve partial results and ask for help before rerunning over them. |
| PowerShell helpers are blocked | Do not change policy. If initialization has not happened, choose Python; otherwise preserve the partial setup and ask the facilitator to inspect it. |
| Skills are missing in Chat | Confirm the project root and generated `SKILL.md` files, save them, then use **Developer: Reload Window** if needed. Do not substitute old `/speckit.*` dotted commands. |
| Unexpected application/configuration changes | Inspect the changed files and ask the facilitator. Do not reset or clean the checkout to hide them. |

Official resources: [Spec Kit installation](https://github.github.io/spec-kit/installation.html)
and [VS Code Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).

[Previous: Exercise 1](exercise-1-explore-the-app.md) | [Workshop home](../README.md) |
[Next: Exercise 3](exercise-3-create-the-specification.md)
