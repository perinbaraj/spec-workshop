---
name: speckit-constitution
description: Draft or explicitly revise this workshop's project constitution from existing instructions and the participant's bounded feature scope; use before specification, not for implementation.
---

# Workshop constitution

Read `.specify\README.md` and follow its shared protocol and stops. Read
`.github\copilot-instructions.md`, the participant's scope and
`workshops\acceptance.md`, and inspect the existing application and tests.
Resolve any apparent conflict with the participant rather than inventing rules.

Use `.specify\templates\constitution-template.md` to draft
`.specify\memory\constitution.md`. Preserve the existing application and
synthetic fixtures; require privacy, member-scoped behavior, input safety,
generic errors, accessible controls, test-first development and honest
evidence. Describe browser-local member scoping as educational, not real
authentication, authorization or HIPAA compliance. Do not prescribe packages,
infrastructure, unrelated refactors, or fabricated outcomes.

If a constitution already exists, inspect it and stop unless the participant
explicitly requests a bounded in-place revision. Never overwrite it blindly.
Change only the constitution, not application code, templates, instructions,
reviewer tools or feature files. Report the exact output path and unresolved
questions. Stop for the participant to review and explicitly approve it before
`speckit-specify`; generating it is not approval.
