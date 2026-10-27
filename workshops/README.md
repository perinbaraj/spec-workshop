# Spec-driven brownfield workshop

**One requirement, one implementation, one review.** Use the existing Member
Portal to practice a complete, bounded AI-assisted development lifecycle in
VS Code with GitHub Copilot Chat.

This repository's `main` branch intentionally contains neither generated Spec Kit
scaffolding nor the claims-filter implementation. Learners initialize Spec Kit in
the existing repository, create the constitution, review and adapt a reference
specification and plan, generate tasks, implement the change, and decide whether
to accept it.

## Start here

Complete [setup and environment verification](prework.md) before the event; it
begins by cloning [`perinbaraj/spec-workshop`](https://github.com/perinbaraj/spec-workshop).
Then follow Exercises 1-6 below. Stay on `main` in your own clone throughout:
there is no branch creation, checkpoint commit, or push to complete.
Explore the starter first, then run `specify init` yourself in Exercise 2.
Already installed Spec Kit in prework? Skip that exercise's installation action,
verify the command, and continue with initialization.

Each guide tells you what to do in the terminal, Chat, editor, or browser, what
result to inspect, and when to move on.

| Exercise | Detailed participant guide | You finish with |
| --- | --- | --- |
| 1 | [Explore the app and understand the change](steps/exercise-1-explore-the-app.md) | An explanation of the claims flow and change boundary |
| 2 | [Install and initialize Spec Kit](steps/exercise-2-install-and-initialize-spec-kit.md) | Working tooling and reviewed project rules |
| 3 | [Create and review the specification](steps/exercise-3-create-the-specification.md) | A reviewed specification and requirements checklist |
| 4 | [Create and review the plan and tasks](steps/exercise-4-create-the-plan-and-tasks.md) | An approved plan and executable tasks |
| 5 | [Implement and test the feature](steps/exercise-5-implement-and-test.md) | A working change and actual automated results |
| 6 | [Review the change and decide whether to accept it](steps/exercise-6-review-and-accept.md) | Evaluated findings, browser evidence, and your decision |

Keep the [behavior contract and acceptance checklist](acceptance.md) open beside
your work. Use [guided reference artifacts and recovery](reference/README.md)
throughout Exercises 3 and 4, not only when blocked. The [core roadmap](core.md)
provides a compact view of the same journey.

## Event boundary

The event has a **tentative three-hour core plus a one-hour buffer**, with
welcome, discussion, a break, and wrap-up inside the core boundary. Installation
and account troubleshooting are prework. The buffer is for recovery and finishing
the same feature, not additional required exercises. This is a delivery target,
not a claim that participant completion has been timed and validated.

The default is guided adaptation of reference spec/plan material through Spec
Kit. Independent blank-page generation is an optional alternative, not another
required pass. Never cut tests, member isolation, pagination, review, or human
acceptance to catch up. Facilitators use the [run of show](facilitator.md#run-of-show).

## Follow-on work and facilitator resources

| Path | Activity | Starting point |
| --- | --- | --- |
| Optional | [Build multiple role-specific custom agents](optional/custom-agents.md) | Reviewed core spec and plan |
| Optional | [Appeal eligibility and an in-memory draft](optional/claim-appeals.md) | Accepted core feature |
| Facilitator | [Preparation, delivery, and validation status](facilitator.md) | Before inviting participants |

Follow-on workshops are outside the required core and buffer. Completing them
is not a condition of core completion.

## What you will practice

1. Inspect brownfield code and repository instructions.
2. Initialize Spec Kit in place and establish project guardrails.
3. Evaluate and adapt a specification and plan, then produce executable tasks.
4. Use bounded Copilot agent execution to implement and test those tasks.
5. Customize one read-only reviewer agent.
6. Evaluate evidence and make a human acceptance decision.

Here, "agentic workflow" means this sequential execution and handoff. It does not
mean GitHub Actions, a parallel agent fleet, or unattended permission bypasses.

## Dependency boundary

The app uses its existing Node.js dependencies and in-memory fixtures. Spec Kit is a local development tool, not an application service. Copilot needs the usual account access and network connectivity.

Use only the repository's synthetic fixtures. Do not paste real member data, health information, tokens, or credentials into prompts or workshop artifacts.
