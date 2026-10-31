# Exercise 1: Explore the app and understand the change

[Previous: Exercise 0](exercise-0-setup.md) |
[Workshop home](../../README.md#start-here) |
[Next: Exercise 2](exercise-2-install-and-initialize-spec-kit.md)

## Objective and prerequisites

Use the verified branch and browser baseline to trace the existing behavior
before changing it. The backlog is claims status filtering and pagination for
the current simulated member. Only synthetic data may be used; there is no real
server, authentication, authorization, privacy, security or HIPAA guarantee.

## Steps

1. Open `index.html` directly in the browser. Explore Profile, Claims and
   Prescriptions; note that Claims has no selector, pager or totals yet.
   Refills are not implemented.
2. Select M-10002 while Claims is active. The active Claims view rerenders for
   that member; switch back to M-10001. Refresh: memory resets to M-10001 and
   Profile becomes active. Do not interpret member selection as security.
3. In the editor trace `index.html` script order, `src\App.js` view navigation,
   `src\components\ClaimsList.js`, `src\services\memberService.js`,
   `src\data.js`, and `tests\browser.test.js`. The async `getClaims()` returns
   `{ claims }`; `getMemberId`/`setMemberId` hold context in memory. The app
   handles rejected view promises with a generic error. Find the existing
   generation guard and consider the additional lifecycle handling the feature
   will need.
4. Ask Copilot for a **read-only explanation** of this flow and the change
   boundary, citing files. Compare it to the code; do not ask it to implement.
5. Read the [contract](../acceptance.md). Explain why scoping precedes
   filtering/counting/paging, why repeated input needs a representation that
   preserves it, and why local fixture scoping cannot secure shipped data.

## Exit criteria

You can describe the existing views, promise failure, memory reset, and the
unfinished feature without modifying app code, tests, fixtures or artifacts.
If blocked, use [recovery](exercise-0-setup.md#recovery-during-the-workshop).
