---
name: speckit-converge
description: Compare the same active workshop feature against reviewed requirements and report bounded in-scope implementation gaps; not a test run or acceptance.
---

# Workshop convergence

Read `.specify\README.md`, validate active state, and inspect the reviewed
constitution, spec, checked requirements checklist, plan, supporting artifacts,
approved tasks, `workshops\acceptance.md`, relevant code and existing evidence.
Require explicit human approval of prior handoffs. Stop on missing, inconsistent,
unreviewed or unresolved prerequisites.

Use `<feature>\convergence.md` as the persistent pass record. If absent, this
is pass 1; if present, inspect it before writing. It must contain exactly one
or two headings `## Pass 1` and optionally `## Pass 2`, in order, with a
nonempty findings summary under each. Stop if malformed, ambiguous or already
containing two passes. Do not reset, delete or replace the record to extend the
limit. Compare current code and completed tasks against the approved contract,
and report concrete in-scope gaps with paths and requirements, or state that no
such gaps were found. Identify missing or stale evidence separately.

Append exactly one numbered pass and its findings to the record, preserving
prior content. Do not run tests, claim tests passed, change code, automatically
change tasks, or create an acceptance record. Propose only bounded code/test
corrections for the participant to review; if accepted, revise tasks explicitly
and return to `speckit-implement` for test-first work and real reruns. Never
turn human browser inspection, reviewer decisions or acceptance into tasks.
If substantive gaps remain on pass 2, stop and refer them to the facilitator.
Report the pass number, record path, findings, evidence limitations and
separate human handoff. A convergence result is neither a test pass nor
acceptance.
