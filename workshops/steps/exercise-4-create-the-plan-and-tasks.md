# Exercise 4: Create and review the plan and tasks

[Previous: Exercise 3](exercise-3-create-the-specification.md) |
[Workshop home](../../README.md#start-here) | [Next: Exercise 5](exercise-5-implement-and-test.md)

## Objective

Generate a technical plan from the approved specification and existing code.
Review the plan **before** generating executable tasks. Do not implement yet.

## Prerequisites

- Finish [Exercise 3](exercise-3-create-the-specification.md), including human
  specification approval and its completed requirements checklist.
- Use the same reported feature folder and keep the app stopped.
- Keep [the acceptance contract](../acceptance.md) available.

## The Backlog Item

Plan the already-approved claims-filter and pagination change. Translate the
behavior into work on the existing API, typed client, and Claims view without
introducing a new architecture or feature.

## Step-by-step Instructions

### Step 1: Inspect the code before planning (Editor)

Read your `spec.md` and constitution alongside these existing files:

| File | Planning question |
| --- | --- |
| [API](../../server/server.ts) | Where are authentication, claims-list handling, and route validation? |
| [Data helper](../../server/data.ts) | How does `getClaimsForMember` already isolate claims? |
| [Types](../../src/types.ts) and [client](../../src/services/httpClient.ts) | What returns `Claim[]` today, and which consumers must change with metadata? |
| [Claims view](../../src/components/ClaimsList.tsx) and [styles](../../src/App.css) | Where do request state, controls, and claims-scoped styles belong? |
| [Tests](../../tests/server.test.ts) and [packages](../../package.json) | Which fixtures, dependencies, and test patterns are already available? |

**Expected output:** You recognize the existing Express/Zod, React hooks,
typed-client, and Vitest/Supertest approach. The plan should extend the claims
flow coherently, not add packages, a service layer, new data exports, or a
route-wide refactor. The fixtures need no changes.

### Step 2: Generate the plan and supporting documents (Copilot Chat)

In the normal implementation agent, submit:

```text
/speckit-plan
Plan the SAME active claims-filter feature from its human-reviewed spec,
constitution, workshops/acceptance.md, and the existing application code.
Inspect Express/Zod, getClaimsForMember, the Claim status union, the typed
HTTP client, React hooks, styles, and Vitest/Supertest tests before designing.
Preserve the claims response property and update pagination metadata,
client types, and UI consumers together. Keep synthetic fixtures unchanged.
Cover query validation, member isolation before filtering/counting/paging,
browser pageSize behavior, obsolete requests, and accessible UI states.
Generate the normal plan.md, research.md, data-model.md, contracts, and
quickstart.md in this feature folder. Report their exact paths.
Include test-first API coverage using pageSize=1, actual automated checks,
and a separate human browser/reviewer/acceptance handoff.
Do not invent results or add packages, services, storage, deployment,
or broad refactors. Generate planning artifacts only; do not implement,
change permissions, commit, or push.
```

**Expected output:** A technical plan grounded in your reviewed requirements and
actual code, plus the supporting documents in the **same** feature folder.
No application changes or implementation tasks should be generated yet.

### Step 3: Review and approve the plan (Editor)

Open all reported planning outputs:

| Output | What to check |
| --- | --- |
| `plan.md` | Concrete source/test paths and an approach consistent with the spec and constitution |
| `research.md` | Existing-code findings and resolved validation, compatibility, page-size, and stale-request decisions |
| `data-model.md` | Existing claims and query/pagination types, not new persistence |
| `contracts` | Local `GET /api/claims` inputs, response, auth, invalid-input and empty/out-of-range rules, not a downstream service |
| `quickstart.md` | Verification commands, synthetic-member/page-size examples, evidence location, and later human handoff—not claimed passes |

Check these technical agreements before approving:

- Member scope precedes filtering, counting, and slicing. Defaults apply only
  when API inputs are omitted; invalid/empty/repeated/structured inputs receive
  generic errors rather than coercion or clamping.
- The API, client types, and view agree on the response and existing status union.
  Auth headers and other routes stay intact.
- Existing fixtures cover all statuses, empty matches, stable order, size-1
  pages, out-of-range pages, size 100/101, and two-member results **and** totals.
  Missing-auth evidence unsets `DEV_MEMBER_ID` and restores test-managed state.
- The view resets the page with the filter, handles the browser page-size
  choice, and cancels/ignores obsolete success, error, and completion callbacks.
  Controls remain available through empty/error/loading states without needless
  focus loss; any error-contrast styles are claims-scoped, not shared changes.
- Privacy, validation, and accessibility apply to every story. Automated checks
  and human browser/review/acceptance work remain distinct.

**Expected output:** Supporting files agree, unknowns/placeholders are resolved,
and the plan fits the existing app. Request revisions in the same planning
session if needed. **Do not proceed until you have reviewed and approved it.**

### Step 4: Generate tasks from the reviewed plan (Copilot Chat)

Only after approval, submit a separate prompt:

```text
/speckit-tasks
Generate tasks.md for the SAME active feature from its human-reviewed
spec, plan, contracts, data model, and research.
Use workshops/acceptance.md for the binding behavior requirements.
Write unique - [ ] T001-style executable tasks with concrete file paths,
dependencies, and story/parallel markers only where appropriate.
Add and RUN focused tests BEFORE implementing the behavior they test,
so expected new-contract failures are observed and recorded.
Keep the API/client/UI update coherent. Cover validation, filtering,
pagination, auth, member isolation, and resilient accessible UI.
Include npm test, npm run typecheck, and npm run build with actual results.
Do not add setup already satisfied, dependencies, or fixture changes.
Keep human browser checks, reviewer customization/finding decisions,
scope approval, and final acceptance OUT of executable checkbox tasks.
Describe those as the separate Exercise 6 handoff.
Generate tasks only. Do not implement, change permissions, commit, or push.
```

**Expected output:** An executable `tasks.md` derived from the reviewed plan,
not a supplied task list or a prose-only table. For example, a task's format is:

```markdown
- [ ] T001 [US1] Add focused claims-filter contract tests in tests\server.test.ts
```

This single illustrative line is not the complete task list.

### Step 5: Review task order and the handoff (Editor)

Read `spec.md`, `plan.md`, and `tasks.md` together. Inspect changed files in
Source Control and new files in Explorer.

**Expected output:** Tasks have unique IDs, concrete paths, real dependencies,
and coverage of the approved behavior. Adding **and running** focused tests
precedes production changes. Shared-file/API-client-view changes are not
incorrectly marked parallel. Missing dependencies, port conflicts, or syntax
errors are not expected test-first evidence.

The tasks include actual final checks and evidence recording, but no
agent-completable human acceptance tasks. Only tooling/feature documents have
changed. Correct the list before approving implementation.

## Exit Criteria

- [ ] You approved the plan and all required supporting artifacts.
- [ ] The same feature has a coherent, executable, test-first `tasks.md`.
- [ ] Human review, browser checks, and acceptance remain a separate handoff.
- [ ] Application code is unchanged; you approve moving to implementation.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| A skill cannot find the feature | Check the reported folder/state from Exercise 3; use [workshop recovery](exercise-0-setup.md#recovery-during-the-workshop), not a new feature. |
| Supporting files missing | Ask the same planning skill/session to finish this feature before generating tasks. |
| Tasks lack checkboxes/paths or put tests last | Ask `/speckit-tasks` to correct this list before implementation. |
| The plan adds packages or infrastructure | Reject the expansion and revise against the existing code and contract. |
| Browser acceptance is executable | Remove those tasks and retain the human handoff to Exercise 6. |

[Previous: Exercise 3](exercise-3-create-the-specification.md) |
[Workshop home](../../README.md#start-here) | [Next: Exercise 5](exercise-5-implement-and-test.md)
