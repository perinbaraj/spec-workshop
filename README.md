# Prescription Dashboard — spec-driven workshop

This unfinished **browser-only** starter uses synthetic data. Add claims status
filtering and pagination to the existing Claims view: one requirement, one
feature, one human acceptance decision. The starter deliberately has no filter,
pagination metadata, or completed feature artifacts.

There is **no real server, authentication, authorization, privacy or security
boundary, or HIPAA guarantee**. Everything shipped to the browser is readable
and changeable by its user. Use synthetic data only; never use real health
information or credentials.

## Start here

Begin with [Exercise 0](workshops/steps/exercise-0-setup.md), including the
branch-specific clone. Open `index.html` directly in a browser to use the app
and `tests\index.html` directly to run its automated assertions. No app server,
CLI, package installation, browser storage, or build step is needed. A browser,
VS Code, Git for the clone, and a working Copilot account/access with network
connectivity are needed for the workshop; Copilot is not an offline tool.

| Exercise | Handoff |
| --- | --- |
| [0: Setup](workshops/steps/exercise-0-setup.md) | Correct branch, app, baseline assertions, skills and reviewer checked |
| [1: Explore](workshops/steps/exercise-1-explore-the-app.md) | Explain the starter and bounded change |
| [2: Bundled Spec Kit and constitution](workshops/steps/exercise-2-install-and-initialize-spec-kit.md) | Inspect the seven adaptations and approve the constitution |
| [3: Specification](workshops/steps/exercise-3-create-the-specification.md) | Review one specification and checklist |
| [4: Plan and tasks](workshops/steps/exercise-4-create-the-plan-and-tasks.md) | Approve the plan, then test-first tasks |
| [5: Implement and test](workshops/steps/exercise-5-implement-and-test.md) | Record observed failing assertions before implementation and actual reruns |
| [6: Review and accept](workshops/steps/exercise-6-review-and-accept.md) | Read-only review, browser checks, human decision |

Use the [binding acceptance contract](workshops/acceptance.md), and follow
[recovery](workshops/steps/exercise-0-setup.md#recovery-during-the-workshop)
without discarding work. The seven checked-in skills are a CLI-free workshop
adaptation, not the full upstream Spec Kit or its CLI; see
[attribution and workflow](.specify/README.md). Never infer a human approval or
test result from generated text. Keep normal Copilot tool approvals.

The core has a tentative three-hour delivery target plus a one-hour buffer, not
a measured completion guarantee. The buffer is for finishing this feature, not
additional required work.

## Starter map

- `index.html`, `src\App.js`, `src\App.css`: direct-file app, navigation, styles.
- `src\data.js`: synthetic fixtures; `src\services\memberService.js`: local
  asynchronous service. `getClaims()` currently resolves to `{ claims }`.
- `src\components\`: Profile, Claims and Prescriptions views.
- `tests\index.html`, `tests\testHarness.js`, `tests\browser.test.js`: browser
  test page and baseline assertions. Reload to rerun and copy visible results.
- `.github\skills\`, `.specify\templates\`: bundled workflow; `.github\agents\`
  contains the read/search-only workshop reviewer.

`setMemberId` and `getMemberId` use memory; switching members rerenders the
active view, and refreshing resets to `M-10001` and Profile. Refill is not
implemented. No real network request is involved in service reads.

## Optional follow-ons

After the reviewed core plan, try [role-specific agents](workshops/optional/custom-agents.md).
After accepting the core, try [appeal eligibility and an in-memory draft](workshops/optional/claim-appeals.md).
Neither is required for core acceptance.
