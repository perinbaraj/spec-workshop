---
name: speckit-tasks
description: Generate or explicitly revise executable test-first tasks for the same active workshop feature after human plan review; do not implement.
---

# Workshop tasks

Read `.specify\README.md`, validate the active feature, and require explicit
human approval of its constitution, specification and plan. Read the completed
requirements checklist, `spec.md`, `plan.md`, `research.md`, `data-model.md`,
`contracts\claims.md`, `quickstart.md`, and `workshops\acceptance.md`.
Stop if any required document is missing, unresolved, inconsistent, or not
reviewed. Never infer approval from a checked box.

Use `.specify\templates\tasks-template.md` to create `tasks.md` in that same
feature. Inspect any existing file first and stop unless the participant
explicitly requests an in-place revision. Generate concrete executable entries
of the form `- [ ] T001 [US1] action in path`, with unique IDs, actual paths,
dependencies and `[P]` only for independent work. Cover every approved
requirement, including member scoping, input validation, pagination, accessible
and resilient UI, and regression coverage without modifying fixtures or adding
dependencies.

For each behavioral slice, add and **run** focused automated assertions before
implementing it, record observed expected feature-contract failures, implement,
rerun and report actual output. If browser execution cannot be observed by the
agent, require participant-supplied output before continuing. Setup, syntax or
environment errors are blockers, not expected failures. Include final automated
checks and actual evidence; put participant browser inspection, read-only
reviewer decisions, and final acceptance in a separate non-checkbox handoff.
Do not modify source or execute tasks. Report the exact path and stop for human
task review and explicit approval before implementation.
