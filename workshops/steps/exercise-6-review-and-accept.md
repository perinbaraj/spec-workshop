# Exercise 6: Review the change and decide whether to accept it

[Previous: Exercise 5](exercise-5-implement-and-test.md) |
[Workshop home](../../README.md#start-here)

## Objective and prerequisites

Review the completed implementation against the approved active feature and
[contract](../acceptance.md), using real current test evidence. Only a human
can decide acceptance. Synthetic browser scoping is not a real server,
authentication, authorization, privacy, security or HIPAA guarantee.

## Steps

1. In `.github\agents\workshop-reviewer.agent.md`, add one specific review
   criterion, such as “an obsolete completion cannot clear the latest loading
   state after member or view changes.” Preserve its read/search-only tools.
2. Prepare paths to the reviewed constitution, active specification, plan,
   tasks and contract, the current diff and actual test-first and final browser
   assertion output. In a separate Copilot Chat select `workshop-reviewer` and
   request an independent read-only review of those inputs. If the diff or
   evidence cannot be supplied, require the reviewer to state the limitation.
3. Personally accept or reject each finding with a reason. Give accepted fixes
   to the implementation agent, not the reviewer; revise tasks where needed,
   follow test-first evidence, and rerun the full browser assertion page.
   Refresh review evidence after changes. Never waive a requirement silently.
4. Perform every [participant browser check](../acceptance.md#participant-browser-checks),
   including `?pageSize=1`, member switching and refresh, keyboard and focus,
   empty states, generic announced failure, loading and stale responses. Use
   the contract's deliberate temporary service delay/rejection stub; Network
   Offline cannot affect local reads. Restore the exact service after each
   experiment, remove all temporary changes, and rerun assertions on final code.
5. Write `acceptance.md` yourself in the active feature folder using the
   [human acceptance record](../acceptance.md#human-acceptance-record): include
   actual automated and browser results, finding decisions/reasons, limitations
   and `accepted` or `not accepted`. Do not include real health data.

## Exit criteria

Read-only review and human decisions are recorded; final evidence corresponds
to the final code; all requirements are met for acceptance. If any requirement
or evidence remains unresolved, record **not accepted** and use
[recovery](exercise-0-setup.md#recovery-during-the-workshop). A clean reviewer
report or a passing test summary is not itself acceptance.
