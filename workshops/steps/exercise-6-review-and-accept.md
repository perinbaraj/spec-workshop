# Exercise 6: Review the change and decide whether to accept it

[Previous: Exercise 5](exercise-5-implement-and-test.md) |
[Workshop home](../../README.md#start-here) | [Next: acceptance checklist](../acceptance.md)

## Objective

Customize a read-only reviewer, evaluate its findings, complete human browser
checks, and record your own acceptance decision.

## Prerequisites

- Finish [Exercise 5](exercise-5-implement-and-test.md) on `main`.
- Keep the checked app running at `http://localhost:5173/?pageSize=1`.
- Have the exact feature folder and actual final test/typecheck/build output ready.

## The Backlog Item

Accept or reject the same claims-filter and pagination change against
[the contract](../acceptance.md). A clean model review, completed task list,
or `Converged` message cannot make the decision for you.

## Step-by-step Instructions

### Step 1: Customize one review criterion (Editor)

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

Save without changing `tools: ['read', 'search']`.

**Expected output:** The reviewer has a feature-specific criterion and remains
read/search-only. It cannot edit files, execute tests, or accept your feature.

### Step 2: Prepare current review context (Editor / Copilot Chat)

Inspect changed files in **Source Control** and new files in Explorer.
In the **normal implementation chat**, request:

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

**Expected output:** A handoff containing the current feature path,
tracked-file diff, new application/test content, and actual observed results
or explicit evidence gaps. Compare it with Source Control and terminal output;
paste any missing real output yourself.

Generated Spec Kit tooling, feature artifacts, and the reviewer customization
are expected changes. Explain unrelated changes rather than silently ignoring
them. Keep member data and secrets out of the handoff.

### Step 3: Start a separate read-only review (Copilot Chat)

Start a **new chat**, select **workshop-reviewer** from the agent picker, and
keep the Copilot harness selected. Use **Add Context (+) > Files & Folders** or
drag files from Explorer to attach the feature folder and relevant source files,
constitution, and shared contract. Paste the Step 2 diff/new-file content and
actual check output.

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

**Expected output:** Actionable findings, or an explicit statement that there
are none, plus missing evidence listed separately. Context does **not**
automatically transfer from the implementation chat. Supply gaps before
treating the review as complete; the reviewer cannot collect terminal evidence.

### Step 4: Decide which findings are valid (Editor)

Open every cited source location and compare the finding with the requirement.
Accept or reject each finding with a reason; model line numbers may be off.

**Expected output:** Human decisions distinguish real defects from unsupported
suggestions. A review with no actionable findings is valid. Do not invent work
to fill the findings table.

### Step 5: Apply only accepted fixes if needed (Copilot Chat / Terminal / Editor)

If you accepted fixes, switch back to the **normal implementation agent**.
Stop your development terminal with **Ctrl+C** before any API tests, then submit:

```text
Apply only the reviewer findings I explicitly accepted.
Keep the change within the same approved claims-filter feature.
Do not apply rejected suggestions, broaden scope, change permissions or
package/configuration files, create or switch branches, commit, or push.
Add/run focused regression tests before the affected implementation where
applicable. Run affected checks and report exact commands and actual results.
Do not perform or mark human browser acceptance or the final decision.
```

**Expected output:** Only accepted in-scope corrections and actual check
evidence. Inspect the diff/new files, rerun affected checks yourself with the
app stopped, and restart using `npm run dev`. Refresh reviewer context/results
for changed code; earlier evidence does not prove later code. If no fixes were
accepted, leave the checked code unchanged and continue.

### Step 6: Perform the full browser acceptance checks (Browser)

Open [the full browser checklist](../acceptance.md#browser-evidence) and perform
**every item** at `http://localhost:5173/?pageSize=1`. Do not substitute this
summary for the detailed checklist:

- Filtering, clearing, empty results, two-page navigation, and page-one reset.
- Loading, generic announced errors, recovery, and stale-response protection.
- Keyboard controls, labels, focus, contrast, and member-scoped results/totals.
- Unchanged Profile and Prescriptions behavior.

**Expected output:** Actual observed outcomes for every item, including code
inspection of stale-request protection because throttling alone cannot prove
response ordering. The full checklist explains failure simulation and recovery.
Restore network/API settings after testing. If you add an optional temporary
delay, remove it and rerun affected checks before recording final evidence.

After switching synthetic members, reopen Claims; the starter's header can
remain stale. Record [known limitations](../acceptance.md#starter-quirks-that-are-not-part-of-this-change)
honestly instead of broadening the feature to fix other screens. A failed
requirement is a blocker, not a pass because the event time ended.

### Step 7: Record your decision (Editor)

Create `acceptance.md` **inside your generated feature folder**, not in
`workshops`, and complete:

```text
Requirement:
Changed files:
Automated checks and actual results:
Browser checks and actual results:
Reviewer findings accepted/rejected, with reasons:
Known limitations:
Decision: accepted / not accepted
```

**Expected output:** Your local human acceptance record describes the final
code and current evidence. Record **not accepted** and name gaps if requirements
or evidence are missing. Never report unperformed checks as passes. No commit
or push is required.

## Exit Criteria

- [ ] The customized reviewer stayed read-only and received current context.
- [ ] You evaluated findings and refreshed evidence after accepted fixes.
- [ ] You performed the full human checklist and recorded actual outcomes.
- [ ] Your feature folder contains an explicit accepted/not accepted decision.

**Accepted** means the requirements and evidence support it. Otherwise preserve
the work and resolve named blockers with the facilitator. This completes
Exercises 0-6; optional workshops are not required.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| Reviewer missing | Confirm project root, saved profile, and Copilot harness; use customization diagnostics or reload. |
| Reviewer wants commands or edits | Decline. The normal implementation session makes fixes; supply its real results to the read-only reviewer. |
| Context/evidence missing | Attach current files and paste current diff/new-file content and real output. Keep the limitation explicit until supplied. |
| Finding seems wrong | Read the source and requirement; clarify or reject with a reason. |
| Browser checks fail | Record not accepted and the unmet requirement. Use [workshop recovery](exercise-0-setup.md#recovery-during-the-workshop) rather than skipping acceptance. |

Resources: [VS Code chat context](https://code.visualstudio.com/docs/chat/copilot-chat-context)
and [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents).

[Previous: Exercise 5](exercise-5-implement-and-test.md) |
[Workshop home](../../README.md#start-here) | [Next: acceptance checklist](../acceptance.md)
