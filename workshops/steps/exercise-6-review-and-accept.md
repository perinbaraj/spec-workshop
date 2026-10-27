# Exercise 6: Review the change and decide whether to accept it

[Previous: Exercise 5](exercise-5-implement-and-test.md) |
[Workshop home](../README.md) | [Next: acceptance checklist](../acceptance.md)

## What you will do

Customize the read-only reviewer, evaluate its findings, perform the browser
checks, and record your own acceptance decision. A clean review or `Converged`
message cannot make that decision for you.

## Before you start

Finish [Exercise 5](exercise-5-implement-and-test.md). Keep the app running at
`http://localhost:5173/?pageSize=1`, your feature folder available, and the final
test/typecheck/build output ready. Stay on `main`.

## Do this

### 1. Editor: customize one reviewer criterion

Open [the reviewer profile](../../.github/agents/workshop-reviewer.agent.md).
Replace this paragraph:

```text
Participant customization: add one concrete, feature-specific review criterion
here before invoking this agent.
```

with:

```text
Participant customization: Verify that status filtering precedes pagination,
totals are member-scoped, and changing status resets the UI to page one.
```

Save the file. Keep `tools: ['read', 'search']` unchanged.
This agent reviews; it cannot edit files or execute tests.

### 2. Editor and normal Chat: prepare the review evidence

Open **Source Control** and inspect the current changed files. New files must
also be opened from Explorer. The reviewer customization, generated Spec Kit
tooling, and your feature folder are expected; explain any unrelated changes.

In the **normal implementation agent**, request a current handoff:

```text
Prepare a read-only review handoff for my current claims-filter change.
Report the exact active feature directory and the changed-file list.
Include the current diff of tracked files and the full content of new
application/test files so a separate read-only reviewer can inspect them.
Include the actual final npm test, npm run typecheck, and npm run build
results already observed. If any output is unavailable or stale, say so;
do not invent results. I will supply missing terminal output.
Do not edit files, run tests, commit, or push.
```

Compare the handoff with Source Control and your terminal output. Paste missing
actual results from Exercise 5; do not replace them with a claimed pass.

### 3. Copilot Chat: select the read-only reviewer

Start a new chat and select **workshop-reviewer** from the agent picker with
the Copilot harness selected.

Use **Add Context (+) > Files & Folders**, or drag files from Explorer into Chat,
to attach your feature folder and relevant source files. Paste the current
diff/new-file content and actual check results from action 2. Context does not
automatically transfer from the implementation chat.

Submit:

```text
Review my claims-filter change against the supplied active spec, plan,
tasks, constitution, and workshops/acceptance.md. Read the relevant source.
Use the current diff, new-file content, and actual check output supplied here.
Do not edit files, execute commands, approve the change, or invent results.
Separate confirmed defects from missing evidence.
Report actionable findings with severity, file/line, violated requirement,
evidence, and suggested correction. Let me accept or reject each finding.
```

The reviewer cannot collect terminal evidence for you. If context is missing,
supply it before treating the review as complete.

### 4. Editor and normal Chat: decide what to fix

Open every cited file and check each finding against the requirement.
Accept or reject it with a reason; model line numbers may be slightly off.
A review with no actionable findings is valid.

For accepted fixes, switch back to the **normal implementation agent**:

```text
Apply only the reviewer findings I explicitly accepted.
Keep the change within the same approved claims-filter feature.
Do not apply rejected suggestions, broaden scope, change permissions or
package/configuration files, commit, or push.
Run affected checks and report exact commands and actual results.
Do not perform or mark human browser acceptance or the final decision.
```

Inspect the resulting changes. Stop your development terminal before API tests,
rerun the affected checks yourself, and restart the app afterwards. Refresh
review evidence if the code changed; earlier output is not proof of later code.

### 5. Browser: complete the acceptance checks yourself

Open [the full browser checklist](../acceptance.md#browser-evidence) and perform
**every item** at `http://localhost:5173/?pageSize=1`. It covers:

- Filtering, clearing, empty results, two-page navigation, and page-one reset.
- Loading, generic announced errors, recovery, and stale-response protection.
- Keyboard controls, labels, focus, contrast, and member-scoped results/totals.
- Unchanged Profile and Prescriptions behavior.

Follow the detailed checklist rather than substituting this summary. It explains
how to force/recover from errors and inspect stale-request protection.
Restore network/API settings afterwards. After switching synthetic members,
reopen Claims; the starter's header label can be stale.
Record [known limitations](../acceptance.md#starter-quirks-that-are-not-part-of-this-change)
honestly instead of broadening the feature to fix unrelated screens.

### 6. Editor: record your decision

In **your generated feature folder**, create `acceptance.md` and complete:

```text
Requirement:
Changed files:
Automated checks and actual results:
Browser checks and actual results:
Reviewer findings accepted/rejected, with reasons:
Known limitations:
Decision: accepted / not accepted
```

This is your local record, not an edit to `workshops\acceptance.md`.
If any requirement is unmet, record **not accepted** and name the gap.
Do not report unperformed checks as passes. No commit or push is required.

## Check your result

You have reviewed the evidence and findings, completed the human browser checks,
and recorded an explicit decision for the final code.
**Accepted** means the requirements and evidence support it.
Otherwise preserve the work and resolve the named blockers with the facilitator.

This completes the six core exercises. Optional workshops are not required.

## If you get stuck

| Problem | What to do |
| --- | --- |
| Reviewer missing from the picker | Confirm the project root, saved `.agent.md` file, and Copilot harness; use customization diagnostics or reload if needed. |
| Reviewer wants to run commands or edit | Decline. Use the normal implementation session for fixes and supply actual results. Keep the reviewer read/search only. |
| Evidence is missing | Attach the current files and paste the current diff/new-file content and real results. The reviewer should state the limitation until you do. |
| A finding seems wrong | Open the source and requirement, then ask for clarification or reject it with a reason. |
| Browser checks fail | Record not accepted and the unmet behavior. Do not skip acceptance to start an optional feature. |

Resources: [VS Code chat context](https://code.visualstudio.com/docs/chat/copilot-chat-context)
and [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents).

[Previous: Exercise 5](exercise-5-implement-and-test.md) |
[Workshop home](../README.md) | [Next: acceptance checklist](../acceptance.md)
