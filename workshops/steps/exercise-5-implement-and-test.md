# Exercise 5: Implement and test the feature

[Previous: Exercise 4](exercise-4-create-the-plan-and-tasks.md) |
[Workshop home](../../README.md#start-here) |
[Next: Exercise 6](exercise-6-review-and-accept.md)

## Objective and prerequisites

Implement only the same active feature after explicit human approval of the
constitution, specification, plan and executable tasks. This is a synthetic
browser-only simulation, not real authentication, authorization, privacy,
security or HIPAA compliance.

## Steps

1. Ask Copilot:

   ```text
   /speckit-implement
   Execute the approved active-feature tasks in dependency order. For each
   behavior write and run browser assertions first, record observed expected
   contract failures, implement, and rerun. Pause for my real browser output
   whenever you cannot observe the test page. Preserve fixtures and scope.
   ```

2. When asked, open `tests\index.html` directly in a browser. Let it finish,
   copy its visible named results and summary, and supply them to Copilot along
   with the current task/code state. An expected failure must identify missing
   contract behavior, not a syntax, setup, harness or unrelated error. Correct
   blockers and rerun before continuing; never substitute a guessed result.
   Follow the [test registration rules](../acceptance.md#required-automated-evidence)
   when extending or adding test scripts.
3. Review edits and test-first evidence for each task. After implementation,
   reload the same test page, provide the real rerun results, and ensure the
   final full relevant assertion suite passes. Preserve failure history and
   report unrun or stale checks honestly.
4. Use `/speckit-converge` to compare the same reviewed feature with the code
   and evidence. This does not run tests or accept the feature. At most two
   passes are allowed and recorded in the feature's `convergence.md`. Review
   proposed gaps; if accepted, explicitly revise tasks and return to test-first
   implementation. If substantive gaps remain after pass two, stop for the
   facilitator rather than resetting the record.
5. Open `index.html` directly. To prepare the two-page demonstration, append
   `?pageSize=1` to its actual file URL, for example
   `file:///C:/Users/Example/My%20Workshop/index.html?pageSize=1`.
   Select Claims as M-10001 and check the two distinct pages. Keep the actual
   final assertion output for review; do not claim manual acceptance yet.

## Exit criteria

Approved tasks are implemented with observed test-first failures and real final
passing browser assertions, with evidence and any limitations recorded. Do not
mark participant checks, review decisions or acceptance complete. On failure,
stop and use [recovery](exercise-0-setup.md#recovery-during-the-workshop).
