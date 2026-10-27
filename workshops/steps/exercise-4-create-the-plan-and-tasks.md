# Exercise 4: Create and review the plan and tasks

[Previous: Exercise 3](exercise-3-create-the-specification.md) |
[Workshop home](../README.md) | [Next: Exercise 5](exercise-5-implement-and-test.md)

## What you will do

Create a technical plan for the approved specification, review it, then generate
the tasks Copilot will execute. **Review the plan before asking for tasks.
Do not implement code in this exercise.**

## Before you start

Finish [Exercise 3](exercise-3-create-the-specification.md), including its
requirements checklist. Use the same feature folder throughout. Stay on `main`
and keep the development server stopped.

## Do this

### 1. Editor: read the example approach

Open [the reference plan](../reference/plan.md) and
[the acceptance contract](../acceptance.md).
Compare the approach with the existing [API](../../server/server.ts),
[client](../../src/services/httpClient.ts),
[Claims view](../../src/components/ClaimsList.tsx), and
[tests](../../tests/server.test.ts).

The plan should extend those files, preserve member scoping, and update the API
and its client/view together. The app already has the needed dependencies.

### 2. Copilot Chat: generate the plan

In the normal implementation agent, submit:

```text
/speckit-plan
Use the SAME active claims-filter feature's reviewed spec and constitution.
Read workshops/reference/plan.md and workshops/acceptance.md.
Adapt the reference plan to the existing Express/Zod API, member-scoped
in-memory helper, typed HTTP client, React hooks, and Vitest/Supertest tests.
Preserve the claims response property and update pagination metadata and
its client/UI consumers together. Keep fixtures unchanged.
Include browser pageSize behavior and API tests using pageSize=1.
Generate the normal plan.md, research.md, data-model.md, contracts, and
quickstart.md artifacts in this feature folder. Report their exact paths.
Include actual automated checks and a separate human browser/review handoff.
Do not invent measurements or add packages, services, storage, deployment,
or broad refactors. Do not implement, change permissions, commit, or push.
```

### 3. Editor: review the plan before continuing

Open the reported files in your feature folder:

| Output | What to check |
| --- | --- |
| `plan.md` | The technical approach and intended source-file changes |
| `research.md` | Decisions fit the existing app, rather than inventing dependencies |
| `data-model.md` | Existing claims and pagination metadata, not a new database |
| `contracts` | The local API response and input rules |
| `quickstart.md` | How to verify the feature later, not claims that checks already passed |

Read `plan.md` and skim the others for disagreement or placeholders. Confirm
member scope precedes filtering/counting/slicing, invalid inputs get generic
errors, the API/client/view agree, and the UI handles empty/error/stale responses.
The verification plan must cover authentication, member isolation, and paging
boundaries using existing fixtures.

If anything is wrong, ask the same session to revise these planning artifacts.
**Continue only when you have reviewed and approved the plan.**

### 4. Copilot Chat: generate implementation tasks

Now submit a separate prompt:

```text
/speckit-tasks
Generate tasks.md for the SAME active feature from its human-reviewed
spec, plan, contracts, data model, and research.
Read workshops/reference/tasks.md for format/coverage guidance and
workshops/acceptance.md for the binding requirements.
Use executable - [ ] T001-style tasks with concrete file paths,
dependencies, and story/parallel markers where appropriate.
Add and RUN focused tests BEFORE implementing the behavior they test,
so the expected failures are observed. Keep the API/client/UI update coherent.
Cover validation, filtering, pagination, auth, member isolation, and resilient UI.
Include npm test, npm run typecheck, and npm run build with actual results.
Do not add setup already satisfied, dependencies, or fixture changes.
Keep human browser checks, reviewer decisions, and final acceptance OUT of
executable checkbox tasks; describe them as the separate Exercise 6 handoff.
Generate tasks only. Do not implement, change permissions, commit, or push.
```

### 5. Editor: check the tasks and changed files

Open `tasks.md` in your feature folder. It should contain executable checkbox
lines such as `- [ ] T001 ...`, not just a prose table.

Check that tests come before the code they cover, file paths are concrete,
dependencies make sense, and the tasks include running the checks. Human
acceptance must not be a task the implementation agent can mark complete.

Open **Source Control** to inspect changed files, and Explorer for new files.
Only tooling and feature documents should have changed so far, not application
code. Read `spec.md`, `plan.md`, and `tasks.md` together once to confirm agreement.

## Check your result

Your one feature folder contains a reviewed plan and supporting documents,
plus an executable, test-first `tasks.md`. You have approved the handoff to
implementation. Application code remains unchanged.

Continue to [Exercise 5: implement and test](exercise-5-implement-and-test.md).

## If you get stuck

| Problem | What to do |
| --- | --- |
| The skill cannot find the feature | Return to [Exercise 3](exercise-3-create-the-specification.md) and check the reported folder/state. Do not create another feature or switch branches. |
| Supporting files are missing | Ask the same planning session to finish the normal artifacts for this feature. |
| Tasks are only a table, lack file paths, or put tests last | Ask `/speckit-tasks` to correct the existing list before implementation. See [the example](../reference/tasks.md). |
| The plan adds packages or infrastructure | Reject that expansion and request a revision against the existing app and contract. |
| Browser acceptance appears as executable tasks | Remove those tasks; keep human checks in [Exercise 6](exercise-6-review-and-accept.md). |

[Previous: Exercise 3](exercise-3-create-the-specification.md) |
[Workshop home](../README.md) | [Next: Exercise 5](exercise-5-implement-and-test.md)
