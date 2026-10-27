# Exercise 5: Implement and test the feature

[Previous: Exercise 4](exercise-4-create-the-plan-and-tasks.md) |
[Workshop home](../README.md) | [Next: Exercise 6](exercise-6-review-and-accept.md)

## What you will do

Have Copilot execute the reviewed tasks, inspect the changes yourself, and run
the existing automated checks. Then start the app for human review.

## Before you start

Finish [Exercise 4](exercise-4-create-the-plan-and-tasks.md). Your same feature
folder must have reviewed specification/planning files, a complete requirements
checklist, and executable test-first tasks. Stay on `main`.
Keep [the acceptance contract](../acceptance.md) open.

## Do this

### 1. Terminal: make sure the development server is stopped

If a terminal is still running `npm run dev`, press **Ctrl+C** there.
The API tests start a listener on port 3000; leaving the development API running
can cause a port conflict. Stop only processes you started.

### 2. Copilot Chat: implement the approved tasks

In the normal implementation agent, submit:

```text
/speckit-implement
Implement only the SAME active claims-filter feature's approved tasks.
Follow its constitution, .github/copilot-instructions.md, and
workshops/acceptance.md. Keep the existing synthetic fixtures unchanged.
Run the focused tests before their implementation and record expected
failures, then implement and rerun. Report exact commands and actual results.
Repair failures caused by this change; state any checks not run.
Do not expand scope, implement optional workshops, modify package/ignore/
configuration files, change permissions, weaken checks, commit, or push.
Do not perform or tick human browser/reviewer/acceptance work.
If a checklist or planning prerequisite is incomplete, stop and report it.
```

Review tool requests normally. Check the reported test-first evidence; a ticked
task is not proof that a test ran.

### 3. Editor: inspect what changed

Open **Source Control** in VS Code. Click each changed application/test file
to see its comparison. Open new files from Explorer as well.

Compare the changes with your plan, especially the
[API](../../server/server.ts), [client](../../src/services/httpClient.ts),
[types](../../src/types.ts), [Claims view](../../src/components/ClaimsList.tsx),
[styles](../../src/App.css), and [tests](../../tests/server.test.ts).

Check that member scope comes before filtering/counting/slicing, the API and
client agree on pagination metadata, and controls handle empty/error/stale
responses accessibly. Ask for a focused correction if needed; do not accept
unrelated cleanup or remove someone else's existing work.

### 4. Terminal: run the checks yourself

With the development server stopped, run these **one at a time** in the project
terminal. Read each result before running the next:

```text
npm test
npm run typecheck
npm run build
```

On Windows use `npm.cmd` if npm's PowerShell script is blocked.
Keep the actual output available for Exercise 6. Record failures or limitations
honestly; fix in-scope failures and rerun affected checks.

| Check | What it proves |
| --- | --- |
| `npm test` | Existing Vitest/Supertest tests, including the feature cases, ran |
| `npm run typecheck` | The configured backend TypeScript check passed |
| `npm run build` | The configured TypeScript/Vite build passed |

These are not a full frontend TSX typecheck or proof of accessibility.
Do not add lint tooling: the starter's lint script lacks its required setup.

### 5. Copilot Chat: check for remaining requirement gaps

Submit:

```text
/speckit-converge
Compare the SAME active claims-filter code with its reviewed spec, plan,
tasks, and workshops/acceptance.md. Report only in-scope requirement gaps.
Do not treat missing human browser/review/acceptance as executable tasks.
Do not claim to run tests or accept the feature.
```

Convergence compares code and artifacts; **it does not run tests**. If it adds
tasks, review them and accept only genuine in-scope implementation gaps.
Remove any human-only tasks. Run `/speckit-implement` for the accepted tasks,
then repeat actions 3-4 for the resulting changes.

Use **at most two convergence passes total**. If substantive gaps remain after
the second pass, ask the facilitator rather than looping indefinitely.
`Converged` does not mean automated checks or human acceptance passed.

### 6. Terminal and browser: restart for acceptance

After the final code changes have passed the checks, run:

```text
npm run dev
```

Wait for readiness, then open `http://localhost:5173/?pageSize=1` and select
Claims. With synthetic member M-10001 and All statuses, you should be able to
see two pages. Without `pageSize=1`, the default page size puts both claims on
one page. Do not enlarge the fixtures to demonstrate paging.

Leave the app running for Exercise 6.

## Check your result

The intended feature is implemented, you have inspected the changed/new files,
and the three required checks pass for the final code. Convergence has no
unresolved blocking implementation gaps. The app is running for human review.

Continue to [Exercise 6: review and accept](exercise-6-review-and-accept.md).

## If you get stuck

| Problem | What to do |
| --- | --- |
| Implementation stops at a checklist | Return to [Exercise 3](exercise-3-create-the-specification.md) and fix the missing requirement. Do not bypass the gate. |
| `EADDRINUSE` / port 3000 conflict | Stop your development terminal, then rerun the tests. Ask about unknown processes instead of killing them. |
| The missing-auth test succeeds unexpectedly | Ask the facilitator to check whether `DEV_MEMBER_ID` is set. Missing-auth evidence requires that fallback unset; preserve/restore the environment. |
| No second page | Use `http://localhost:5173/?pageSize=1`, M-10001, and All statuses. Inspect the agreed URL/client/API behavior. |
| Checks still fail or gaps remain | Preserve the current work and exact failures and ask the facilitator. Do not delete tests or claim success. |

[Previous: Exercise 4](exercise-4-create-the-plan-and-tasks.md) |
[Workshop home](../README.md) | [Next: Exercise 6](exercise-6-review-and-accept.md)
