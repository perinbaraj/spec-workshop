# Exercise 4: Create and review the plan and tasks

[Previous: Exercise 3](exercise-3-create-the-specification.md) |
[Workshop home](../../README.md#start-here) |
[Next: Exercise 5](exercise-5-implement-and-test.md)

## Objective and prerequisites

The constitution and single feature specification must be explicitly approved
and the requirements checklist reviewed and checked. Plan against the actual
browser code, then generate test-first tasks only after plan approval. Synthetic
member scoping is not real authorization, privacy, security or HIPAA protection.

## Steps

1. Inspect `src\services\memberService.js`, `src\App.js`,
   `src\components\ClaimsList.js` and `tests\browser.test.js` along with the
   [contract](../acceptance.md). Do not assume a server, framework or HTTP API.
2. Ask Copilot:

   ```text
   /speckit-plan
   Plan the approved active claims feature against the inspected browser
   starter and workshops\acceptance.md. Generate design artifacts only,
   including a repeat-preserving service options contract, accessible view
   lifecycle and browser test-first evidence. Do not implement or create tasks.
   ```

3. Review the active feature's `plan.md`, `research.md`, `data-model.md`,
   `contracts\claims.md` and `quickstart.md`. Check actual paths, all input
   validation, member-before-filter/count/slice ordering, metadata, promise
   failure, request-generation guard, focus and no new dependencies. Explicitly
   approve the plan after resolving questions.
4. Ask `/speckit-tasks` to generate executable tasks for that **same** feature.
   Inspect `tasks.md`: each slice must add and run focused assertions first,
   capture observed contract-related failures, implement, then rerun. Missing
   browser observation requires human-supplied output before work continues.
   Confirm unique IDs, paths, dependencies and final regression evidence.
5. Verify human browser inspection, read-only review and final acceptance are
   separate handoffs, not agent-completed checkbox tasks. Explicitly approve
   the tasks before implementation.

## Exit criteria

Reviewed and explicitly approved plan and executable tasks in the same active
feature; no production implementation yet. Stop on unresolved requirements or
inconsistent artifacts and use [recovery](exercise-0-setup.md#recovery-during-the-workshop).
