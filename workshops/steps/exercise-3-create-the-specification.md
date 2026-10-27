# Exercise 3: Create and review the specification

[Previous: Exercise 2](exercise-2-install-and-initialize-spec-kit.md) |
[Workshop home](../README.md) | [Next: Exercise 4](exercise-4-create-the-plan-and-tasks.md)

## What you will do

Use Spec Kit to turn the supplied reference into a specification for your change.
A specification describes **what the feature must do**, not how to code it.
Review it before generating an implementation plan.

## Before you start

Finish [Exercise 2](exercise-2-install-and-initialize-spec-kit.md): the skills
are available and you have reviewed the constitution. Keep the app stopped.

Two kinds of files matter here:

- **Reference:** `workshops\reference\spec.md` is an example you read as input.
- **Your feature folder:** Spec Kit will create a folder under `specs` for your
  generated work. Use the exact folder it reports for Exercises 3-6.

Stay on `main`. The feature folder is not a Git branch.

## Do this

### 1. Editor: read the requirement and reference

Open [the acceptance contract](../acceptance.md) and
[the reference specification](../reference/spec.md).
Find the user stories, required behavior, exclusions, and success criteria.
The acceptance contract is authoritative if an example disagrees.

Pay particular attention to member-scoped results/totals, the five statuses,
page sizes, empty matches, and requests beyond the last page.

### 2. Copilot Chat: generate your specification

In the normal implementation agent, select `/speckit-specify` and submit:

```text
/speckit-specify
Read workshops/reference/spec.md AND workshops/acceptance.md.
As a signed-in member, I want to filter my claims by status and navigate
the results without seeing another member's data.
Adapt the reference into this project's specification, following the
reviewed constitution and treating acceptance.md as the binding contract.
Use the normal workflow to create ONE feature folder, its spec.md,
requirements checklist, and active-feature state. Report their exact paths.
Keep the spec behavior-focused; implementation design comes next.
Do not copy reference navigation, example metadata, or placeholders.
Stay on main; do not create or switch Git branches or add extensions.
Do not implement, change application code or permissions, commit, or push.
Report unresolved questions and assumptions for me to review.
```

### 3. Editor: locate the generated files

In Explorer, expand `specs`, then the folder reported in Chat. Open:

| File | What you use it for |
| --- | --- |
| `spec.md` | Review the behavior you will build |
| `checklists\requirements.md` | Check that the specification is clear and complete |

Also open `.specify\feature.json`. Its `feature_directory` should point to this
same folder. This small state file tells later skills where your work is;
you do not need to edit it or switch branches.

Keep the reported folder handy. Do not create another folder or manually copy
the reference over it.

### 4. Editor: review and correct the specification

Compare your generated `spec.md` with [the full contract](../acceptance.md).
Confirm it covers:

- All statuses, defaults, valid/invalid inputs, empty matches, and paging limits.
- Member isolation before filtering, counting, and slicing; stable fixture order.
- Accessible controls, loading/error/empty states, reset to page one on a filter
  change, and protection against stale responses.
- The browser `?pageSize=1` demonstration using existing fixtures.
- No unrelated features, packages, infrastructure, or PHI logs.

Correct omissions directly or ask the same session for a bounded revision.
Do not change application code yet.

### 5. Chat if needed, then editor: resolve questions and finish the checklist

Answer questions from the acceptance contract. If clarification is still needed:

```text
/speckit-clarify
Resolve ambiguities in the SAME active claims-filter specification using
workshops/acceptance.md. Do not expand scope or implement.
If the contract cannot answer a question, ask me rather than inventing behavior.
```

Read `checklists\requirements.md`. A checked item must be supported by the
specification; fix the spec before marking a missing requirement complete.
Remove placeholders and unresolved `[NEEDS CLARIFICATION]` entries.
If the contract cannot resolve a question, ask the facilitator before continuing.

## Check your result

You have one feature folder, a reviewed `spec.md`, a genuinely complete
requirements checklist, and matching active-feature state. Application code
is still unchanged.

Continue to [Exercise 4: create the plan and tasks](exercise-4-create-the-plan-and-tasks.md).

## If you get stuck

| Problem | What to do |
| --- | --- |
| Copilot ignored the reference | Ask the same session to revise the existing spec from both required documents. Do not create a second feature. |
| Only `spec.md` exists | Ask the session to finish the normal scaffold and checklist for this same feature; use [reference recovery](../reference/README.md). |
| The state points to another feature | Stop and ask the facilitator to reconcile the existing folder/state. Do not blindly overwrite state or switch branches. |
| Questions introduce new requirements | Return to the contract and ask the facilitator. Do not add infrastructure or unrelated functionality to satisfy the draft. |

[Previous: Exercise 2](exercise-2-install-and-initialize-spec-kit.md) |
[Workshop home](../README.md) | [Next: Exercise 4](exercise-4-create-the-plan-and-tasks.md)
