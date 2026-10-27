# Core: claims filtering, from requirement to acceptance

Start with [prework](prework.md), then follow the six exercises in order in your
own clone of `perinbaraj/spec-workshop`. Stay on `main`; no new branch, commit,
or push is required. Prework installs the CLI. Exercise 2 includes install help
if needed, then you run `specify init` yourself. The application is an unfinished
brownfield starter: you implement one bounded claims-filter and pagination change,
not a replacement portal.

The event boundary is a **tentative three-hour core plus a one-hour buffer**.
Installation is prework. Use the buffer for recovery, review, and completion,
not additional required features; exercise readiness, not elapsed time, decides
whether to proceed.

| Exercise | What you do | Check before moving on |
| --- | --- | --- |
| [Exercise 1: explore the app](steps/exercise-1-explore-the-app.md) | Run the starter and inspect the claims flow | Explain the current behavior and intended change; app stopped |
| [Exercise 2: install and initialize](steps/exercise-2-install-and-initialize-spec-kit.md) | Verify/install tooling, initialize this project, and review project rules | Generated tooling and a reviewed constitution; app unchanged |
| [Exercise 3: specification](steps/exercise-3-create-the-specification.md) | Adapt the reference into your feature specification | Reviewed `spec.md`, complete checklist, and known feature folder |
| [Exercise 4: plan and tasks](steps/exercise-4-create-the-plan-and-tasks.md) | Review the technical plan, then generate executable tasks | Consistent artifacts and test-first tasks; app unchanged |
| [Exercise 5: implement and test](steps/exercise-5-implement-and-test.md) | Implement tasks, inspect changes, run checks, and review convergence | Actual check results; app running at `?pageSize=1` |
| [Exercise 6: review and accept](steps/exercise-6-review-and-accept.md) | Customize the reviewer, evaluate findings, and check the browser | Browser evidence and an explicit human acceptance record |

## One guided route

[Acceptance](acceptance.md) is the behavior contract.
[Reference artifacts](reference/README.md) are inputs to supported Spec Kit
generation, not files to copy into an arbitrary folder or automatic approval.
The core uses `/speckit-specify` to establish the active feature and checklist,
then `/speckit-plan` to create planning artifacts from the reviewed reference
plan, then `/speckit-tasks` to generate executable work. Humans review each
handoff. Independent blank-page specification/plan generation is an optional
alternative, not a second required exercise.

Each detailed page labels terminal, Chat, editor, and browser actions, gives a
completion check, and includes nondestructive recovery. Review changes through
VS Code Source Control and open new files in Explorer; you do not need Git
terminal commands. If blocked, preserve your work and use the exercise's recovery with the
facilitator. Do not skip tests, member isolation, pagination, review, or human
acceptance to catch up. A generated success message is not working evidence.

No new packages, Redis service, database, external APIs, deployment, broad
refactoring, commits, or pushes are required. Retain normal tool approvals.
The reviewer stays read/search only; browser checks and acceptance remain human
work, never agent-completable tasks.

[Workshop home](README.md) · [Begin Exercise 1](steps/exercise-1-explore-the-app.md) ·
[Acceptance checklist](acceptance.md)
