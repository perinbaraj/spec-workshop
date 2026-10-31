# Exercise 0: Set up your workshop environment

[Workshop home](../../README.md#start-here) |
[Next: Exercise 1](exercise-1-explore-the-app.md)

## Objective and prerequisites

Before the event, prepare a separate clone and verify the unchanged starter,
browser assertions, bundled skills and read-only reviewer. You need Git,
VS Code with a compatible Copilot Chat installation, a Copilot account with
access and connectivity, and a JavaScript-enabled browser. The app and its
tests run directly from files without a server, runtime installation, package
manager, browser storage or build step. Copilot itself is not offline.

Only synthetic data is allowed. This browser-only simulation offers no real
server, authentication, authorization, privacy, security or HIPAA guarantee.

## Steps

1. **Clone** the dedicated workshop branch into a new directory. For example,
   from the desired parent directory in a Git-capable terminal:

   ```text
   git clone --branch pthangavel-microsoft-zero-install-workshop https://github.com/perinbaraj/spec-workshop.git spec-workshop-zero-install
   ```

   Open `spec-workshop-zero-install` as the VS Code workspace root and verify
   the status bar shows `pthangavel-microsoft-zero-install-workshop`. Do not
   change or reset an existing checkout, and leave the full-stack main branch
   untouched. The terminal and Git are for the clone, not running the app.
2. **Browser:** open the clone's `index.html` directly from the file manager.
   The address should be a native `file://` URL. For example, on Windows it
   could be `file:///C:/Users/Example/My%20Workshop/index.html`, with spaces
   encoded; use your actual path. Confirm Profile, Claims and Prescriptions
   render. There are no claims filter or pagination controls yet.
3. **Browser:** switch the app to M-10002, then refresh it. The selected member
   resets to M-10001 and Profile. Open `tests\index.html` directly. Wait for
   the visible summary: the unchanged
   baseline has 11 tests. Copy the real summary and individual results; if any
   fail or remain `NOT RUN`/`RUNNING`, stop and troubleshoot. Reopening or
   reloading the normal test page reruns it. The optional deliberate harness
   failure and incomplete-suite links should each report a failure; reopen
   the normal page afterwards.
4. **Editor/Copilot:** inspect `.specify\README.md` and the seven
   `.github\skills\speckit-*\SKILL.md` files. In normal Copilot Chat verify
   `/speckit-constitution` and the other six skills are discoverable; do not
   invoke them yet. Skill discovery depends on the installed VS Code/Copilot
   version and workspace support. If unavailable, stop with the facilitator;
   do not install the upstream CLI or substitute a different workflow.
5. **Editor/Copilot:** inspect `.github\agents\workshop-reviewer.agent.md`;
   verify `workshop-reviewer` is available in the agent picker and retains
   only read/search tools. Do not change tool permissions.

## Exit criteria

Correct branch clone and workspace; direct-file app works; all 11 unchanged
baseline assertions have actual passing output; seven skills and the
read/search-only reviewer are available. No generated feature or implementation
has been created.

## Recovery during the workshop

Stop and preserve the entire existing checkout, including hidden files,
generated artifacts, unsaved edits and evidence. Make a separate copy before
experimenting; do not reset, overwrite, clean or switch its branch. For a fresh
comparison, clone **the same branch** into a different directory:

```text
git clone --branch pthangavel-microsoft-zero-install-workshop https://github.com/perinbaraj/spec-workshop.git spec-workshop-recovery
```

Keep both copies and ask the facilitator to reconcile any partial
`.specify\feature.json`, feature outputs or conflicting edits according to
`.specify\README.md`. Do not guess or silently create another feature. A failed
test or missing skill/reviewer remains a blocker; do not skip evidence or
install an alternative toolkit to catch up.
