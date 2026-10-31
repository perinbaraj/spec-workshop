---
name: speckit-implement
description: Execute the human-approved tasks for the same active workshop feature with observed test-first browser evidence; stop on missing prerequisites or blockers.
---

# Workshop implementation

Read `.specify\README.md`, validate active state, and inspect the constitution,
specification, checked requirements checklist, plan, research, data model,
`contracts\claims.md`, quickstart, `tasks.md`, and
`workshops\acceptance.md`. Require explicit human approval of constitution,
specification, plan and executable tasks. Stop on missing, inconsistent,
unreviewed or unresolved prerequisites; do not bypass the gate or replace the
feature. Check that tasks have unique IDs, concrete paths, dependencies and
test-first ordering. On a resumed task, check that prior evidence is real and
still applies; otherwise stop for current evidence. Respect normal approvals
and preserve other people's changes.

Execute only approved, in-scope tasks in dependency order. For each behavioral
slice write focused automated assertions first. Run the existing
`tests\index.html` browser assertions and observe actual expected failures due
to the missing contract behavior *before* implementing that slice. If you
cannot observe the browser, pause and ask the participant to run the test page
and supply the actual output; do not continue on a guessed result. Missing
tools, broken setup, syntax errors, unrelated assertion failures and absent
output are blockers, not test-first proof.

Implement the smallest change, rerun affected assertions, and record the actual
results with the test/page, code state, failures and subsequent outcomes in the
task evidence or an identified feature-local evidence section. Mark a task done
only when its work and required evidence are complete. Rerun the full relevant
browser assertions after the last change; report failures and unrun or stale
checks honestly. Stop on unresolved failures, permission denial, conflicting
edits or unsupported evidence; preserve the work.

Do not change fixtures, add dependencies, expand scope, modify permissions,
run helper scripts, or make branch or version-control changes. Do not perform
or check off participant browser inspection, reviewer decisions, or acceptance.
Report exact changed files, actual results and blockers, then hand off to the
participant. Passing automated assertions does not accept the feature.
