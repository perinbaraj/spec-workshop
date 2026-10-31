---
name: speckit-plan
description: Plan the same active workshop feature from its human-reviewed specification and existing code, producing design artifacts only; use before generating tasks.
---

# Workshop implementation plan

Read `.specify\README.md` and validate active state, the complete constitution,
the reviewed specification and fully checked requirements checklist. Require
explicit human approval of the constitution and spec, and stop on missing
sections, unresolved questions, conflicting requirements or unreviewed inputs.
Read `workshops\acceptance.md` and inspect the relevant existing source and
browser tests before designing. Treat the current repository as authoritative;
do not assume an API server, framework, or dependency that is not present.

In the existing feature folder produce `plan.md`, `research.md`,
`data-model.md`, `contracts\claims.md`, and `quickstart.md`, respectively using
`.specify\templates\plan-template.md`, `research-template.md`,
`data-model-template.md`, `contract-template.md`, and `quickstart-template.md`
from `.specify\templates`. Inspect any existing outputs first; stop rather than
overwrite them unless the participant explicitly requests an in-place revision.

Ground each design decision and concrete source/test path in inspected code and
the contract. Preserve synthetic fixtures and unrelated behavior. Explain
member scope before filtering/counting/paging, input defaults and invalid cases,
compatible response metadata, accessible view states and stale-result guards.
Explain how browser assertions are run and observed before and after the
change, without claiming results. Separate participant browser checks, a
read-only reviewer, and final human acceptance from executable implementation.
Do not add dependencies, application code or tasks. Report all exact paths and
unresolved issues; stop for human review and explicit plan approval.
