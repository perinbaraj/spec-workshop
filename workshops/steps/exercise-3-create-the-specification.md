# Exercise 3: Create and review the specification

[Previous: Exercise 2](exercise-2-install-and-initialize-spec-kit.md) |
[Workshop home](../../README.md#start-here) | [Next: Exercise 4](exercise-4-create-the-plan-and-tasks.md)

## Objective

Turn the backlog and acceptance contract into a reviewed specification.
The specification describes **what the feature must do**, not how to code it.

## Prerequisites

- Finish [Exercise 2](exercise-2-install-and-initialize-spec-kit.md): skills are
  discoverable and the constitution is human-reviewed.
- Keep the app stopped and stay on `main`.
- Open [the acceptance contract](../acceptance.md).

## The Backlog Item

> As a signed-in member, I want to filter my claims by status and move through
> the results so I can find relevant claims without seeing another member's data.

Generate the specification from this backlog and the contract, not a supplied
solution. Spec Kit creates one folder under `specs` for your feature documents.
Use its **exact reported folder** for Exercises 3–6; it is not a Git branch.

## Step-by-step Instructions

### Step 1: Read the behavior contract (Editor)

Read [the full contract](../acceptance.md), including API, UI, fixtures, and
evidence requirements. Identify what is required and what is out of scope.

**Expected output:** You can explain the five statuses, defaults, valid/invalid
inputs, member-scoped totals, empty/out-of-range behavior, and the browser
`?pageSize=1` demonstration. You are not choosing implementation details yet.

### Step 2: Generate one specification (Copilot Chat)

In the normal implementation agent, select `/speckit-specify` and submit:

```text
/speckit-specify
As a signed-in member, I want to filter my claims by status and navigate
the results so I can find relevant claims without seeing another member's data.
Read workshops/acceptance.md as the binding behavior contract and follow
the reviewed constitution. Generate a behavior-focused specification from
this backlog and contract, not an implementation plan.
Use the normal workflow to create ONE feature folder, its spec.md,
requirements checklist, and active-feature state. Report their exact paths.
Include prioritized user stories, Given/When/Then acceptance scenarios,
edge cases, measurable success criteria, assumptions, and exclusions.
Privacy and input safety are prerequisites for every story, not deferred work.
Stay on main; do not create or switch Git branches or add extensions.
Do not implement, change application code or permissions, commit, or push.
Report unresolved questions and assumptions for me to review.
```

**Expected output:** One reported feature folder, `spec.md`, a requirements
checklist, and active-feature state. The draft covers filtering, paging,
privacy, and safe failure through testable scenarios; it is not code or an
already-approved solution.

### Step 3: Locate your feature and checklist (Editor)

Expand `specs` in Explorer and open the exact folder reported in Chat:

| File | Purpose |
| --- | --- |
| `spec.md` | The behavior you will review |
| `checklists\requirements.md` | Evidence that the specification is clear and complete |

Open `.specify\feature.json` and compare its `feature_directory` with the
reported folder.

**Expected output:** Both documents exist and the active state points to that
same folder. Later skills can find your work without a branch change. Keep the
path handy; do not guess a folder name, create another feature, or manually
replace generated metadata.

### Step 4: Review the specification (Editor)

Compare `spec.md` against [the contract](../acceptance.md). Confirm it includes:

- All five statuses, omitted-status behavior, default/max page sizes, and
  generic rejection of invalid, empty, repeated, or malformed inputs.
- Member isolation before filtering/counting/paging, accurate metadata, stable
  fixture order, empty matches, and pages beyond the end without page adjustment.
- Accessible labeled controls, boundary navigation, page-one reset, and loading,
  generic announced-error, empty, and stale-response behavior.
- The optional browser-address page size: valid 1–100, otherwise default 20,
  without relaxing API validation or changing the existing fixtures.
- Unchanged other routes/screens and explicit bounded exclusions: no refills,
  appeals, writes, packages, storage, services, deployment, or broad refactoring.
- Measurable success criteria that require actual checks and human acceptance,
  not invented performance, accessibility, or test results.

**Expected output:** Clear user stories and Given/When/Then scenarios cover the
whole contract. Correct omissions directly or request a bounded revision in the
same chat. A story priority must never postpone privacy or validation.

### Step 5: Resolve questions if needed (Copilot Chat)

Answer from the contract. If a genuine ambiguity remains, submit:

```text
/speckit-clarify
Resolve ambiguities in the SAME active claims-filter specification using
workshops/acceptance.md. Do not expand scope or implement.
If the contract cannot answer a question, ask me rather than inventing behavior.
```

**Expected output:** Clarifications update the existing specification without
creating another feature. If no questions remain, skip the skill. Escalate
anything the contract cannot answer to the facilitator.

### Step 6: Complete the requirements review (Editor)

Read `checklists\requirements.md` against the corrected specification.
Fix missing requirements before checking their items. Remove placeholders and
unresolved `[NEEDS CLARIFICATION]` entries, and inspect Source Control.

**Expected output:** Every completed checklist item is supported by the spec,
the feature/state still agree, and only expected artifacts have changed.
Application code remains unchanged. Approve the specification yourself before
planning; a model's checked boxes are not approval.

## Exit Criteria

- [ ] One feature folder and matching active-feature state exist.
- [ ] You reviewed the spec against the entire acceptance contract.
- [ ] Questions/placeholders are resolved and the requirements checklist is complete.
- [ ] You approve the specification; application code is unchanged.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| The spec omits contract behavior | Ask the same session to revise this feature from the backlog and contract. Do not create a second feature. |
| Scaffold/checklist missing | Use the relevant skill to finish the same feature; see [workshop recovery](exercise-0-setup.md#recovery-during-the-workshop). |
| State points to another feature | Stop and ask the facilitator to reconcile folder/state; do not overwrite it blindly or switch branches. |
| Questions add new requirements | Return to the contract and facilitator instead of expanding scope. |

[Previous: Exercise 2](exercise-2-install-and-initialize-spec-kit.md) |
[Workshop home](../../README.md#start-here) | [Next: Exercise 4](exercise-4-create-the-plan-and-tasks.md)
