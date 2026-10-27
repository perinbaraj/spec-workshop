# Exercise 5: Implement and test the feature

[Previous: Exercise 4](exercise-4-create-the-plan-and-tasks.md) |
[Workshop home](../README.md) | [Next: Exercise 6](exercise-6-review-and-accept.md)

## Objective

Execute the approved tasks with observed test-first evidence, inspect the code,
run the existing checks, and prepare the app for human review.

## Prerequisites

- Finish [Exercise 4](exercise-4-create-the-plan-and-tasks.md).
- The same feature folder contains human-reviewed specification/planning files,
  a complete requirements checklist, and approved executable test-first tasks.
- Stay on `main`; keep [the acceptance contract](../acceptance.md) available.

## The Backlog Item

Implement only the approved claims-filter and pagination behavior. Completed
tasks or a convergence message cannot replace test evidence or human acceptance.

## Step-by-step Instructions

### Step 1: Stop development processes (Terminal)

If your terminal is still running `npm run dev`, press **Ctrl+C** there.
Stop only processes you started.

**Expected output:** Your development API/UI are stopped. The API tests start
a listener on port 3000, so a running development API can cause a conflict.
Ask the facilitator about unknown processes rather than terminating them.

### Step 2: Implement the approved tasks (Copilot Chat)

In the normal implementation agent, submit:

```text
/speckit-implement
Implement only the SAME active claims-filter feature's approved tasks.
Follow its constitution, .github/copilot-instructions.md, and
workshops/acceptance.md. Keep the existing synthetic fixtures unchanged.
Run focused tests before their implementation and record expected
new-contract failures, then implement and rerun. Report exact commands
and actual results. Repair failures caused by this change;
state any checks not run. Keep normal tool approvals.
Stay on main; do not create or switch branches.
Do not expand scope, implement optional workshops, modify package/ignore/
configuration files, change permissions, weaken checks, commit, or push.
Do not perform or tick human browser/reviewer/acceptance work.
If a checklist or planning prerequisite is incomplete, stop and report it.
```

**Expected output:** Approved implementation/test changes, updated executable
tasks, and actual failing-then-passing test evidence. Review tool requests
normally. A ticked task is not proof: confirm the new behavior failed assertions
before its implementation, not because of missing tools, syntax, or port errors.

### Step 3: Inspect the changes (Editor)

Open **Source Control** and inspect each changed application/test file.
Open new files from Explorer as well. Compare with your plan, especially:

- [API](../../server/server.ts), [types](../../src/types.ts), and
  [HTTP client](../../src/services/httpClient.ts).
- [Claims view](../../src/components/ClaimsList.tsx) and
  [styles](../../src/App.css).
- [Tests](../../tests/server.test.ts).

**Expected output:** Member scope comes before filtering/counting/paging; the
API and client agree on metadata; the view has accessible controls and
empty/error/loading/stale-response handling. Fixtures and unrelated behavior
remain intact. Request only focused corrections; do not accept unrelated
cleanup or discard someone else's work.

### Step 4: Run the checks yourself (Terminal)

With the development server stopped, run these **one at a time**. Read each
result before running the next:

```text
npm test
npm run typecheck
npm run build
```

**Expected output:** All three checks pass for the current code. Keep the exact
commands and real output for Exercise 6; record limitations or failures
honestly. On Windows, use `npm.cmd` if npm's PowerShell shim is blocked.

| Check | Evidence provided |
| --- | --- |
| `npm test` | Existing Vitest/Supertest tests plus focused feature cases ran |
| `npm run typecheck` | The configured backend TypeScript check passed |
| `npm run build` | The configured TypeScript/Vite build passed |

These are not a full frontend TSX typecheck or proof of accessibility. Do not
add lint tooling; the starter's lint script lacks its required setup.
Fix in-scope failures and rerun affected checks before continuing.

### Step 5: Check for remaining requirement gaps (Copilot Chat)

Submit:

```text
/speckit-converge
Compare the SAME active claims-filter code with its reviewed spec, plan,
tasks, and workshops/acceptance.md. Report only in-scope requirement gaps.
Do not treat missing human browser/review/acceptance as executable tasks.
Do not claim to run tests or accept the feature.
```

**Expected output:** A comparison of code and requirements, with genuine
remaining implementation gaps or no such gaps. **Convergence does not run
tests.** Review any added tasks and accept only in-scope code/test corrections;
remove human-only tasks.

If you accept new tasks, use `/speckit-implement` to execute them, then repeat
Steps 3–4. Use **at most two convergence passes total**, not two per correction.
If substantive gaps remain after the second, preserve the work and ask the
facilitator instead of looping. `Converged` is not a test pass or acceptance.

### Step 6: Restart the checked app (Terminal)

After final changes pass the checks, run:

```text
npm run dev
```

**Expected output:** Both API and Vite report readiness. Leave the app running
for this browser check and Exercise 6.

### Step 7: Confirm the two-page demonstration (Browser)

Open `http://localhost:5173/?pageSize=1`, select Claims, and use synthetic member
M-10001 with All statuses.

**Expected output:** The existing two claims can be viewed on two pages. Without
`pageSize=1`, the default size puts both on one page. Do not enlarge fixtures
to demonstrate paging. This quick check does not replace full human acceptance.

## Exit Criteria

- [ ] The approved feature is implemented and you inspected changed/new files.
- [ ] Actual test-first evidence and final test/typecheck/build output are available.
- [ ] No blocking implementation gaps remain within the two-pass converge limit.
- [ ] The app is running at `?pageSize=1` for Exercise 6.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| Implementation stops at a checklist | Repair the missing requirement in the same feature; do not bypass the gate. See [workshop recovery](../prework.md#recovery-during-the-workshop). |
| `EADDRINUSE` / port 3000 conflict | Stop your development terminal, then rerun tests. Ask about unknown processes instead of killing them. |
| Missing-auth test unexpectedly succeeds | Ask the facilitator whether `DEV_MEMBER_ID` is set. Missing-auth evidence requires it unset; preserve/restore test-managed environment state. |
| No second page | Use M-10001, All statuses, and `http://localhost:5173/?pageSize=1`; inspect agreed URL/client/API behavior. |
| Checks still fail or gaps remain | Preserve work and exact failures; ask the facilitator. Do not delete tests or claim success. |

[Previous: Exercise 4](exercise-4-create-the-plan-and-tasks.md) |
[Workshop home](../README.md) | [Next: Exercise 6](exercise-6-review-and-accept.md)
