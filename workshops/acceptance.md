# Core feature contract and acceptance

This binding requirement defines the learner's unfinished feature, not a
prewritten implementation. Use it during [specification](steps/exercise-3-create-the-specification.md),
[planning](steps/exercise-4-create-the-plan-and-tasks.md),
[implementation](steps/exercise-5-implement-and-test.md) and
[human review](steps/exercise-6-review-and-accept.md).

## Need and boundaries

As a simulated member, filter my claims by status and page through matching
results so I can find relevant synthetic records without mixing member contexts.
Extend the existing Claims view and local service only. Preserve Profile,
Prescriptions, claim detail behavior, other screens, fixtures and fixture order.
No new dependency, server, storage, external service, mutation, refill, appeal
submission, deployment, or broad refactor is in scope.

**Synthetic data only.** This browser-only simulation has no real server,
authentication, authorization, privacy or security boundary, or HIPAA
guarantee. Anyone can inspect and change shipped fixtures and state. Member
scoping is an educational behavior invariant, not a security guarantee.
Never use real health data, credentials or sensitive details in artifacts.

## Local service contract

Today `memberService.getClaims()` is asynchronous and resolves to `{ claims }`;
it has no filtering, pagination or metadata. The current simulated member is
held in memory by `getMemberId()`/`setMemberId()`; refresh resets it to
`M-10001`. Preserve zero-argument compatibility while extending `getClaims`.

Define `getClaims(options)` so `options`, when supplied, is a
`URLSearchParams` instance containing `status`, `page`, and/or `pageSize`.
This representation retains repeated keys for validation; callers must not
collapse values with `get()` before validation. Only omission of the argument
or an empty `URLSearchParams` means all defaults. Reject explicitly supplied
`undefined`, `null`, arrays, plain objects and other types, as well as unknown
keys (including a member selector). Do not stringify/coerce objects or arrays
into acceptable values. A key supplied more than once is invalid even if the
values agree.

| Input | Meaning |
| --- | --- |
| `status` omitted | All statuses of the current member |
| `status` once | Exactly `submitted`, `in_review`, `approved`, `denied`, or `appealed` |
| `page` omitted | 1 |
| `pageSize` omitted | 20 |
| `page` or `pageSize` once | Canonical positive decimal integer, safe in JavaScript; `pageSize` at most 100 |

The UI's All statuses option omits `status`; `status=all` is invalid. Reject
empty values, whitespace, signs, zero, negative numbers, leading zeroes,
fractions, exponent notation, non-finite/unsafe integers, malformed or repeated
values, unknown statuses and page sizes over 100. Defaults apply only to
omitted keys. All invalid inputs reject the promise with the same generic
message and a simulated `INVALID_INPUT` category; they are **not HTTP responses
or status codes**. Preserve the existing generic message
`The requested action is unavailable.` and existing `MISSING_MEMBER` behavior
for an absent simulated context. Do not return or log raw input or internal
details. Tests should verify categories and generic messages, not invent HTTP
status codes.

Obtain the current simulated member before selecting records. Scope to that
member **before** status filtering, counting, or slicing; filter, count the
same collection, and slice in stable fixture order. Do not add any way to
select a member through options. Preserve `claims` and add exactly this
pagination shape with effective values:

```json
{
  "claims": [],
  "pagination": { "page": 1, "pageSize": 20, "total": 0, "totalPages": 0 }
}
```

`totalPages` is `Math.ceil(total / pageSize)`. No matches resolve with empty
claims and zero totals. A page beyond the last resolves with empty claims but
retains requested `page`, `pageSize`, actual `total` and `totalPages`; never
silently clamp. Keep existing service methods and consumers working.

## Claims view

- A labeled status selector starts at All statuses and includes all five
  statuses. A status change resets to page 1. Show matching total, current page
  and total pages; do not render an empty result as “page 1 of 0”.
- Previous and Next move one page and are unavailable at boundaries and for
  empty results. Keep the selector usable on empty results and errors.
- Provide loading feedback, an empty message and a generic error announced to
  assistive technology. Never display raw rejection details. Keep controls
  mounted and usable during reads, preserving keyboard focus where possible.
- Use semantic labels and accessible names, keyboard operation and AA contrast.
  If a boundary disables the currently focused native button, deliberately
  manage focus or document the limitation.
- Guard stale success, error **and completion** callbacks when status, page,
  member or active view changes. Old requests must not replace the current
  results, error or loading state, including after leaving and returning.

## Fixtures and address override

Do not change fixtures or exports to create more pages:

| Member | Claims in order |
| --- | --- |
| M-10001 | CLM-50001 (approved), CLM-50002 (in_review) |
| M-10002 | CLM-50003 (denied) |
| M-10003 | CLM-50004 (submitted) |

The view may read an optional `pageSize` from its browser address for the
two-page demonstration. An exactly once-supplied canonical integer 1–100 is
forwarded to the service; invalid, empty, repeated or malformed address values
are ignored and use the default 20. This forgiving address rule does not relax
the independent service validation. For example, on Windows open the actual
file URL, such as `file:///C:/Users/Example/My%20Workshop/index.html?pageSize=1`;
use your own path and encode spaces as `%20`. The browser's address bar can
construct the native file URL when `index.html` is opened directly.

## Required automated evidence

Extend `tests\browser.test.js` using the existing harness and run
`tests\index.html` directly in a browser, with actual output captured. Add and
run focused assertions **before** each implementation slice; observe expected
failures specifically caused by missing feature behavior, implement, then
rerun. If Copilot cannot observe the browser, it must pause for the participant
to run the page and supply real output. Syntax/setup/unrelated failures and
unobserved results are blockers, not test-first proof.

Place new assertions before the existing `registrationComplete("baseline")`
call. If adding a separate test script, declare its unique
`data-test-suite` on the script in `tests\index.html` and call
`registrationComplete` with the same name at the end of that script. A
missing registration or script error must fail the overall run, not count as
an expected feature failure.

Cover zero-argument/default compatibility and exact metadata; every supported
status including the empty `appealed` case; combined filters and paging;
`pageSize=1` first/later/out-of-range pages; empty matches and totals; 100
accepted and 101 rejected; empty/repeated/unknown fields and invalid types,
malformed/unsafe numbers, omitted-only defaults, and consistent generic
rejections. Verify missing context, scoped results and totals across members,
fixture order and existing regression assertions. Use controlled deferred
promises to assert request-generation handling of stale successes, errors and
completion, including member changes and leaving/returning to the view. Extend
the direct-file test page as needed to exercise the view; do not assume the
baseline service-only test page already loads it. Restore each temporary stub
after its test, even on failure. Do not add dependencies or permanently modify
fixtures. Rerun the full browser assertion page after final changes and report
its visible summary.

## Participant browser checks

These are separate from automated tasks and must be performed and recorded by
the participant. Open the app directly at its file URL with `?pageSize=1`.

1. In Claims inspect the labeled selector, all statuses, page-one reset,
   matching totals, empty state and ability to return to All statuses.
2. With M-10001 and All statuses, page 1 of 2 shows CLM-50001; Next shows
   CLM-50002; Previous returns. Check boundaries and empty results. Without
   the override both claims fit on one page. Invalid address values use 20.
3. Switch members while Claims is active: it remains the active view and
   rerenders. Confirm M-10002 has CLM-50003 and M-10003 has CLM-50004 with
   their own totals. Refresh resets to M-10001 and Profile. Revisit Profile
   and Prescriptions and verify unchanged behavior.
4. Verify stale response protection by inspecting request-generation/lifecycle
   guards and, if practical, deliberately delaying an older local service read
   while switching filter, page, member or view. An old success, failure, or
   completion must not overwrite the latest result, error or loading state.
5. To observe loading and failure, make a **temporary, clearly marked** local
   `getClaims` stub that delays settlement and can reject with a generic
   simulated error. Observe loading, usable controls, and an announced generic
   error. Browser Network Offline cannot fail an in-memory service. Restore
   the exact original service after each experiment, remove all stubs/delays,
   and rerun the full browser assertions on the final code.
6. Operate controls with the keyboard; inspect labels, visible focus, announced
   error, and readable AA contrast. Record any unresolved limitation.

## Human acceptance record

The participant writes `acceptance.md` in the active feature folder:

```text
Requirement:
Changed files:
Automated checks and actual results:
Browser checks and actual results:
Reviewer findings accepted/rejected, with reasons:
Known limitations:
Decision: accepted / not accepted
```

Generated artifacts, passed assertions or a clean reviewer report do not alone
accept the feature. An unresolved requirement means not accepted.

[Exercise 6](steps/exercise-6-review-and-accept.md) |
[Workshop home](../README.md#start-here)
