# Copilot instructions — browser-only prescription workshop

This is a synthetic educational demo, not a healthcare service. There is no
real server, authentication, authorization, privacy or security boundary, or
HIPAA guarantee. Browser users can inspect or modify all fixtures and state.
Never use real health data, credentials, or secrets in code, prompts, output,
logs, or artifacts. Member scoping is an educational behavior invariant, not
protection against a user controlling the browser.

Use plain HTML, CSS and browser JavaScript with relative assets and classic
scripts in the existing load order. Preserve direct `file://` operation for
`index.html` and `tests\index.html`, including paths with spaces. Do not add a
server, build step, packages, remote resources, browser storage, or helper CLI.
Keep existing fixtures and unrelated behavior. Render data as text with native
DOM APIs rather than injecting untrusted HTML. Keep service methods
asynchronous and surface generic simulated errors without logging sensitive
details or raw payloads.

The current service holds the selected member in memory via
`memberService.getMemberId()` and `setMemberId()`; `getClaims()` currently
resolves to `{ claims }`. Follow `workshops\acceptance.md` for the one unfinished
claims-filter/pagination feature: validate inputs, scope to the current simulated
member before filtering, counting, and slicing, and preserve result order.
Do not treat simulated service error categories as HTTP status codes.

Use semantic HTML, labels and accessible names, keyboard-operable controls,
announced generic errors, usable focus and WCAG 2.1 AA contrast. Protect the
current view against stale success, error and completion callbacks when
requests, members or views change. Preserve loading, empty and error states.

Read `.specify\README.md` and the checked-in skill instructions for the
human-reviewed workflow. Require real test-first evidence: write browser
assertions and observe the expected feature-contract failures before each
implementation slice, then rerun and report actual output. If unable to observe
the browser, pause for participant-supplied output; do not fabricate results.
Human browser inspection, read-only review decisions and acceptance are separate.
Respect tool approvals and existing changes; no unrequested branch, commit or
push. The bundled skills are workshop adaptations, not the upstream CLI.
