# Optional workshop: build a small role-specific agent team

**Optional follow-on, outside the core and its buffer.** Start with the
[reviewed core specification and plan](../steps/exercise-4-create-the-plan-and-tasks.md).
Review and testing activities can continue once an implementation exists.

Use the same VS Code/Copilot environment and normal tool approvals. Copilot
requires account access and connectivity. The app and assertions run directly
from files with no server, packages or storage. Use synthetic data only: this
browser-only simulation has no real authentication, authorization, privacy,
security or HIPAA guarantee. Member scope is not owner security.

## Objective

Create two bounded roles and use the existing read-only reviewer as the third
for a human-controlled analyst → implementation → test → review handoff, not
automatic parallel orchestration.

| Role | Input | Output and stop |
| --- | --- | --- |
| Analyst | Requirement, repository context, spec | Questions, criteria and scope risks; no edits |
| Test specialist | Approved spec/plan and implementation | Focused assertions and observed results; no production edits |
| Reviewer | Approved artifacts, diff, real evidence | Requirement-linked findings; no edits or execution |

## Activities

1. Create `.github\agents\workshop-analyst.agent.md` with the following
   frontmatter and instructions:

   ```markdown
   ---
   name: workshop-analyst
   description: Challenge the workshop requirement and return reviewable acceptance criteria.
   tools: ['read', 'search']
   ---
   Read the requested feature and repository instructions. Do not edit files
   or execute commands. Return questions, acceptance criteria, exclusions, and
   relevant paths. Separate observed facts from assumptions and stop.
   ```

   Add a criterion that simulated member context precedes filtering, counting
   and paging, without claiming security. Select the agent in Copilot Chat and
   review its suggestions yourself.
2. Create `.github\agents\workshop-test-specialist.agent.md`:

   ```markdown
   ---
   name: workshop-test-specialist
   description: Add focused browser assertions without editing production code.
   tools: ['read', 'search', 'edit']
   ---
   Read the approved spec, plan, repository instructions and browser tests.
   Edit only tests for the requested feature. Do not change production code,
   fixtures, permissions, packages, version control or acceptance records.
   Ask the participant to open tests\index.html directly and supply actual
   output if browser execution is not observable. Report actual results and
   failures; return production bugs to the implementation role and stop.
   ```

   These instructions are not a filesystem sandbox; inspect tool approvals and
   diffs. Ask for a justified missing case, such as filtered totals with
   `pageSize=1`, rather than duplicating existing coverage. Record a real
   expected feature failure before a corresponding implementation fix.
3. Pass explicit paths and evidence through the handoff: analyst → human
   specification review → implementation agent → test specialist → existing
   `workshop-reviewer`. The reviewer remains `read`/`search` only and cannot
   run tests or accept the feature. Decide findings yourself; return accepted
   fixes to implementation and rerun the full browser assertion page.

## Acceptance

The agents are discoverable; their tool lists and intended file boundaries are
reviewed; the test specialist reports real direct-file browser output (with
human assistance if needed); review findings receive human decisions. No new
infrastructure, package, cloud workflow, automatic commit or claim of
production security is introduced. Human browser inspection and acceptance
remain separate from agent handoffs.

[Workshop home](../../README.md#start-here)
