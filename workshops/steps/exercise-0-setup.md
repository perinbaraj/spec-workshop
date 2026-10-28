# Exercise 0: Set up your workshop environment

[Workshop home](../../README.md#start-here) |
[Next: Exercise 1](exercise-1-explore-the-app.md)

## Objective

Complete this setup exercise before the event: prepare your own clone, verify
the unchanged starter, and verify the custom reviewer.

## Prerequisites

- Node.js 22 LTS with npm, Git, and VS Code.
- GitHub Copilot access in VS Code, signed in and able to use Chat agent tools.
- PowerShell on Windows, or Bash on macOS/Linux.
- Internet access for Copilot and npm package installation.

Install missing prerequisites from [Git](https://git-scm.com/downloads),
[Node.js](https://nodejs.org/en/download),
[VS Code](https://code.visualstudio.com/download). Check
[Copilot access](https://code.visualstudio.com/docs/copilot/setup) before the event.

You do not need Redis, Docker, a database, GitHub Actions, a cloud account, or
healthcare-service credentials.

## The Backlog Item

You will add a status filter and pagination to the existing Claims view and API.
Setup only prepares the starter; it does not implement this change.
Use only the supplied synthetic members, never real member information.

## Step-by-step Instructions

### Step 1: Clone and open the correct repository (Terminal / Editor)

In a terminal, choose a parent folder for your clone and run:

```text
git clone https://github.com/perinbaraj/spec-workshop.git
cd spec-workshop
code .
```

**Expected output:** VS Code opens `spec-workshop` with `package.json`, `server`,
`src`, and `workshops`. Do not make checkpoint commits or push.

If `code` is not on PATH, use **File > Open Folder**. Open **Terminal > New
Terminal** in that folder for the remaining commands.

If a folder with your work already exists, preserve it. Choose a new clone name
instead:

```text
git clone https://github.com/perinbaraj/spec-workshop.git spec-workshop-event
cd spec-workshop-event
code .
```

**Expected output:** A separate starter opens; your original files are untouched.
Do not substitute a different repository URL. For an access error, check the URL
and your network/GitHub access, then tell the facilitator.

<a id="verify-the-starter"></a>

### Step 2: Verify the starter (Terminal)

From the folder containing `package.json`, run each command and read its output:

```text
node --version
npm --version
npm ci
npm test
npm run typecheck
npm run build
```

**Expected output:** Node reports version 22, npm reports its version, dependencies
install, and all three checks pass. The unchanged starter has six API smoke tests.
Resolve a failed baseline with the facilitator before adding feature code.

On Windows, use `npm.cmd` instead of `npm` throughout the workshop if PowerShell
blocks the `.ps1` shim; do not change execution policy. The first dependency
install can take several minutes, so complete it before the event.

The configured typecheck covers the backend. Vite transpiles the frontend but
does not provide a full TSX typecheck. The starter's lint script references
undeclared tooling; lint is not a workshop gate. Do not install extra tooling.

### Step 3: Run and inspect the app (Terminal / Browser)

In the project terminal:

```text
npm run dev
```

**Expected output:** Both the Express API on port 3000 and Vite on port 5173
report readiness. Leave this terminal open while using the browser.

Open `http://localhost:5173` and visit Profile, Claims, and Prescriptions.

**Expected output:** All three views load using synthetic data. Claims has no
status filter or pagination controls yet. Vite proxies `/api` to the backend.

### Step 4: Stop the app (Terminal)

Press **Ctrl+C** in the development terminal you started.

**Expected output:** Your development processes stop and the terminal accepts
commands again. Always stop them before `npm test`: the tests start an API
listener and can conflict with a running development API on port 3000.

### Step 5: Verify the custom reviewer (Editor / Copilot Chat)

Open `.github\agents\workshop-reviewer.agent.md`. In VS Code Chat, select
**workshop-reviewer** from the agent picker with the Copilot harness selected.
Do not run a feature review yet.

**Expected output:** The reviewer is selectable and its profile allows only
`read` and `search`. Keep that boundary: the normal implementation session
executes commands and fixes code.

If discovery fails, confirm the repository root and saved profile, then use
customization diagnostics or reload as needed. See the
[reviewer profile](../../.github/agents/workshop-reviewer.agent.md) and
[custom-agent documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents).

## Exit Criteria

- [ ] Your clone is from `perinbaraj/spec-workshop`.
- [ ] The starter runs and baseline test, typecheck, and build pass.
- [ ] The reviewer is selectable and read-only.
- [ ] The app is stopped.

Tell the facilitator about blockers before the event. When all exit criteria
are met, continue to [Exercise 1](exercise-1-explore-the-app.md).

## Recovery during the workshop

1. **Preserve your current files.** Keep the checkout and actual error output.
   Do not reset, clean, delete generated work, or overwrite someone else's work.
2. **Repair the same feature.** Read the reviewed constitution, your generated
   artifacts, and [the acceptance contract](../acceptance.md). In the normal
   implementation chat, use the relevant `/speckit-specify`,
   `/speckit-clarify`, `/speckit-plan`, or `/speckit-tasks` skill to repair the
   **existing** feature and missing scaffold/supporting files. State its exact
   reported folder. Review the repair before proceeding; do not create a second
   feature or copy incomplete files as a shortcut.
3. **Escalate when uncertain.** Give the facilitator your OS, failing command or
   skill, exact error, active feature path, and current checkpoint. Missing
   initialization, partial output, or conflicting active-feature state needs
   inspection, not a forced rerun or weakened permissions.
4. **Use a separate clone only if needed.** Keep the original untouched. Open a
   terminal in its **parent directory**, not inside the original checkout:

   ```text
   git clone https://github.com/perinbaraj/spec-workshop.git spec-workshop-recovery
   cd spec-workshop-recovery
   code .
   ```

   **Expected output:** A separate unfinished starter opens and the original
   checkout is preserved. If that recovery folder already exists,
   ask the facilitator for a fresh name instead of overwriting it.

   Repeat [starter verification](#verify-the-starter), then
   [Exercise 1](exercise-1-explore-the-app.md) and
   [Exercise 2](exercise-2-install-and-initialize-spec-kit.md) there.
   The new checkout still needs its own Spec Kit setup and reviewed constitution.
   Generate and review the new feature artifacts before resuming implementation.
5. **Keep secrets and member data out.** Do not copy tokens, environment files,
   or real member data into the recovery checkout.

[Workshop home](../../README.md#start-here) |
[Next: Exercise 1](exercise-1-explore-the-app.md)
