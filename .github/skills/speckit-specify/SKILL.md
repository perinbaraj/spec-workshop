---
name: speckit-specify
description: Create or explicitly revise the workshop's one active feature specification and requirements checklist from a backlog and binding contract; use after constitution review.
---

# Workshop specification

Read `.specify\README.md`, especially active-feature recovery and reviewed
handoffs. Require a complete, explicitly human-reviewed constitution at
`.specify\memory\constitution.md`, a clear backlog and the binding
`workshops\acceptance.md`. Inspect existing state and feature directories before
any write. Stop on a missing prerequisite, ambiguity, conflict or invalid state.

When no state or feature output exists, choose the next unused `NNN-slug`
according to the shared protocol. Create exactly one folder under `specs`,
its `spec.md` using `.specify\templates\spec-template.md`, and its
`checklists\requirements.md` using
`.specify\templates\requirements-checklist-template.md`; then create
`.specify\feature.json` pointing to that exact folder. Never create a branch.
If valid state exists, use only its feature; do not overwrite existing documents
unless the participant explicitly requests a bounded in-place revision. If
creation is interrupted, preserve the partial state for human reconciliation.

Describe *what* the feature must do, not its implementation: prioritized
stories, observable Given/When/Then scenarios, functional requirements, edge
cases, measurable criteria, assumptions and exclusions. Cover the whole
contract; privacy, validation and accessibility are not deferred stories.
Mark truly unresolved questions `[NEEDS CLARIFICATION]`, report them and stop
for an answer rather than inventing one. Leave checklist items unchecked for
the participant's actual review. Do not write plans, tasks or application code.
Report all exact output paths and request human checklist review and explicit
specification approval before planning.
