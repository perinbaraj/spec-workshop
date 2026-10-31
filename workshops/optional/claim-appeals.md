# Optional workshop: appeal eligibility and an in-memory draft

**Optional follow-on, outside the core and its buffer.** Start after the human
has [accepted the core feature](../steps/exercise-6-review-and-accept.md).
This is a local educational exercise using synthetic data only. There is no
real server, authentication, authorization, privacy, security or HIPAA
guarantee; anyone can inspect or change shipped fixtures and state. No owner
check here can provide real security or establish actual appeal eligibility.

## Requirement and boundary

As a simulated member viewing a denied claim, I want to see simulated appeal
eligibility and compose a temporary draft without submitting it. Keep the
accepted core behavior intact; no real appeal submission, persistence, network,
server, storage, external infrastructure, dependency, legal advice or
healthcare workflow is included. Refills remain unimplemented.

- Design a local asynchronous `memberService.getAppealEligibility(claimId)`.
  Validate the synthetic identifier format `CLM-` followed by five digits
  without coercing other input types. Reject malformed input with a generic
  simulated `INVALID_INPUT` error. Require current simulated member context;
  preserve generic `MISSING_MEMBER` behavior.
- Reuse the member-scoped `getClaim(claimId)` lookup. For a known claim in the
  current simulated context return `{ claimId, eligible, reasonCode }`:
  denied gives `true`/`DENIED_CLAIM`, all other statuses give
  `false`/`STATUS_NOT_ELIGIBLE`. Unknown and other-member claims both reject
  with the existing generic simulated `NOT_FOUND` category. Never expose a
  distinct foreign-member result, raw exception, or pretend these categories
  are HTTP status codes. This is a behavior invariant, not owner security.
- Offer an Appeal draft action for eligible claims. A labeled reason field
  requires trimmed nonempty text of at most 1,000 characters; announce errors.
  Label the action **Save draft in this view** and state prominently that the
  draft is temporary and **does not submit an appeal**.
- Keep draft content only in in-memory view state, not URLs, logs, network or
  storage. Clear it on opening another claim, leaving the view, switching
  simulated members, or reloading. Guard delayed eligibility callbacks across
  those transitions; never restore a previous claim's draft.

## Design and test-first activity

1. Review the requirement, inspect the existing service and view lifecycle,
   and write a small design and acceptance checklist for this optional work
   separately from the accepted core artifacts. The bundled skills permit only
   one active feature; do **not** invoke `/speckit-specify` to create a second
   feature or silently replace `.specify\feature.json`. If a fresh workflow is
   desired, preserve the entire core checkout and ask the facilitator how to
   proceed in a separate workspace.
2. Before implementation, add focused assertions to the existing browser
   harness and open `tests\index.html` directly. Capture actual expected
   feature-related failures. If the agent cannot observe the browser, supply
   the real output; setup or syntax errors are blockers, not proof.
3. Implement the smallest approved local changes, then rerun the browser
   assertions. Cover own denied and other statuses, malformed types/IDs,
   missing context, unknown and foreign claims with identical generic
   `NOT_FOUND`, draft validation and lifecycle, stale callbacks, and existing
   claims/pagination regressions. Use no new fixtures, packages or storage.
4. Manually check the draft's labels, keyboard use, announced validation,
   temporary notice and clearing on claim/view/member/refresh transitions.
   For delayed/failing service reads use a clearly marked temporary local stub,
   restore it after the check and rerun final tests; Network Offline does not
   fail an in-memory promise.
5. In `.github\agents\workshop-reviewer.agent.md`, adapt the review scope to
   this optional contract and its separate design and checklist. Keep
   `tools: ['read', 'search']` unchanged. Ask the reviewer to check the
   optional behavior against those artifacts and the accepted core contract
   for regressions; provide the current diff and actual test evidence. Decide
   each finding yourself and record the real test and browser results,
   limitations, and human acceptance decision separately. No passing check
   proves real owner security or HIPAA compliance.

[Workshop home](../../README.md#start-here)
