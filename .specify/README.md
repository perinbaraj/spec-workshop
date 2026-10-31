# Workshop Spec Kit adaptation

These are workshop-specific, CLI-free Markdown skills and templates inspired by
[github/spec-kit v1.2.5](https://github.com/github/spec-kit/tree/4572a67fe0e72a6837e2d7bb0fda875bc41482e5)
at commit `4572a67fe0e72a6837e2d7bb0fda875bc41482e5`. The original is
Copyright GitHub, Inc., MIT licensed; see [LICENSE](LICENSE). The staged
constitution, specification, planning, and task artifacts follow the upstream
workflow and template ideas, substantially rewritten for this workshop.

This is **not** the complete upstream Spec Kit or its CLI. It replaces its
scripts, hooks, preset resolution, extension handling, installation and
branch-management operations with explicit editor/Copilot read, search and
edit steps. Convergence and the active-feature protocol below are workshop
adaptations. No downloaded toolkit, package, application server or other
network resource is required by these files. Copilot itself still needs its
usual account and connectivity. Open the repository root in VS Code and invoke
the corresponding `/speckit-...` skill in normal Copilot Chat; skill discovery
depends on the installed VS Code/Copilot version. If it is unavailable, stop
and follow the workshop recovery guidance rather than installing a substitute.

## Shared protocol for every skill

Read this section and the relevant files before editing. Use repository-relative
paths. In this protocol, `\` separates path components; translate it to the
host's native separator when using file tools. In `feature.json`, the JSON
escape `\\` represents one such separator on every host.
Respect normal tool approvals, existing user changes, the current workshop
contract, and `.github\copilot-instructions.md`. Never create or switch branches,
run a CLI or shell helper, install packages, download anything, or alter tool
permissions as part of this workflow. Use only explicit file read/search/edit
operations; running the existing browser tests is human-assisted when the agent
cannot observe them. Do not write real member data, secrets, or fabricated
results into artifacts.

The generated constitution lives at `.specify\memory\constitution.md`. A human
must review and explicitly approve it before feature specification. A model's
assertion or a checked box is not approval. Require explicit human confirmation
of the applicable reviewed handoff; if it is absent or invalidated by later
changes, stop and request a new review. Do not infer approval from a file's
existence. Do not pre-create participant outputs.

### Active feature and recovery

Exactly one active feature is recorded in `.specify\feature.json`. Its entire
JSON object has exactly one field, `feature_directory`, a repository-relative
path such as:

```json
{"feature_directory":"specs\\001-claims-filter"}
```

The path must be `specs\NNN-slug`: a three-digit number from 001 through 999,
a hyphen, and a nonempty lowercase alphanumeric slug with words separated by
single hyphens. No absolute paths, `.` or `..` segments, extra path segments,
alternate separators, trailing separators, or symlink escapes are allowed.
The directory must exist and contain `spec.md` and
`checklists\requirements.md`. Resolve it within the repository, inspect the
files and state together, and stop on invalid JSON, unexpected fields, an
unsafe path, missing artifacts, conflicting feature identity, or an ambiguous
or inconsistent state. Never guess a feature from a branch or search result.

For a new feature, `speckit-specify` alone may select the next unused
three-digit number and a short slug after inspecting `specs` and the state.
If state is absent but any feature directory or partial feature output exists,
stop for human reconciliation; do not adopt, overwrite, or create a second
feature. If both state and feature outputs are absent, create one feature's
documents and then the state. If interrupted before all three exist, stop and
preserve the partial work for human recovery. If state already exists, all
feature skills must validate it and resume only that feature. A request for a
different feature, an existing output that would be overwritten, or conflicting
concurrent edits requires human reconciliation. Do not silently replace state
or completed documents. A human may explicitly request an in-place revision of
the same artifact after inspection; report it and obtain the applicable review
again before continuing.

The normal generated feature outputs are `spec.md`,
`checklists\requirements.md`, `plan.md`, `research.md`, `data-model.md`,
`contracts\claims.md`, `quickstart.md`, and `tasks.md`, plus a later
`convergence.md` pass record. The participant later writes `acceptance.md` in
that same feature folder, recording the requirement, changed files, actual
automated and browser results, reviewer finding decisions and reasons, known
limitations, and an accepted/not accepted decision. Do not create any of these
participant artifacts ahead of its corresponding step.

### Handoffs and evidence

Specification requires the reviewed constitution and a backlog/contract.
Clarification changes the same spec and requires a fresh spec review. Planning
requires the human-reviewed spec and fully reviewed, checked requirements
checklist. Tasks require the human-reviewed plan and supporting documents.
Implementation requires the human-approved tasks as well as all previous
prerequisites. Read the actual artifacts and check for unresolved placeholders,
`[NEEDS CLARIFICATION]`, conflicts, or missing sections before each handoff.
Stop rather than fill an unknown with invented behavior.

Automated browser assertions must actually run. When Copilot cannot observe the
browser, pause and ask the participant to open `tests\index.html`, run the
assertions and provide the real output; resume only with identifiable results
for the current code. Record which assertions failed before the corresponding
implementation, why those are expected feature-contract failures, and the
subsequent rerun results. Missing tools, syntax errors, and setup failures are
blockers, not test-first evidence. Rerun after relevant changes and label stale,
missing or unobserved evidence. The participant's browser inspection,
read-only reviewer decisions, and final acceptance are separate human work.
Never tick them in executable tasks or create their acceptance record for them.

Convergence is a comparison, not a test run or acceptance. The participant may
run at most two convergence passes total for a feature. Each pass is recorded
in that feature's `convergence.md` by the skill; preserve the record across
sessions. If the record is invalid or substantive gaps remain after pass two,
stop for facilitator review rather than resetting or looping.
