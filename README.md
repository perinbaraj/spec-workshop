# Member Portal — Spec-driven workshop

A hands-on Spec Kit workshop using an existing healthcare member portal
(Express API + React frontend).

**One requirement, one implementation, one review.** Add claims status filtering
and pagination to the existing app, not a replacement portal.

The `main` branch of this repository
([`perinbaraj/spec-workshop`](https://github.com/perinbaraj/spec-workshop)) is an
**unfinished learner starter**: it has neither generated Spec Kit scaffolding
nor the claims-filter implementation.

## Start here

Begin with [Exercise 0: set up your workshop environment](workshops/steps/exercise-0-setup.md)
before the event. It covers cloning, tool installation, and starter verification.
Then follow Exercises 1-6 in order using your own clone. Stay on `main`; no branch
creation, checkpoint commits, or pushes are required.

You will run `specify init` yourself in Exercise 2, **not** Exercise 0.
If you installed Spec Kit in Exercise 0, skip Exercise 2's install-if-needed
step, verify the command, and continue with initialization.

## Workshop roadmap

| Exercise | What you do | Check before moving on |
| --- | --- | --- |
| [0: Set up your environment](workshops/steps/exercise-0-setup.md) | Clone, install tools, and verify the starter | Baseline checks pass; Spec Kit installed but not initialized; app stopped |
| [1: Explore the app](workshops/steps/exercise-1-explore-the-app.md) | Run the starter and trace the claims flow | Explain the current behavior and change boundary; app stopped |
| [2: Install and initialize Spec Kit](workshops/steps/exercise-2-install-and-initialize-spec-kit.md) | Initialize this project and create project rules | Generated tooling and a reviewed constitution; app unchanged |
| [3: Create the specification](workshops/steps/exercise-3-create-the-specification.md) | Generate and review the required behavior | One feature folder, reviewed `spec.md`, and complete requirements checklist |
| [4: Create the plan and tasks](workshops/steps/exercise-4-create-the-plan-and-tasks.md) | Approve the technical plan, then generate tasks | Consistent planning artifacts and executable, test-first tasks; app unchanged |
| [5: Implement and test](workshops/steps/exercise-5-implement-and-test.md) | Implement tasks, inspect changes, run checks, and review convergence | Actual check results; app running at `?pageSize=1` |
| [6: Review and accept](workshops/steps/exercise-6-review-and-accept.md) | Customize a reviewer, evaluate findings, and check the browser | Browser evidence and an explicit human acceptance record |

## Working through the exercises

Each guide has an objective, prerequisites, numbered actions, expected outputs,
and exit criteria. Actions identify whether to use the terminal, Copilot Chat,
editor, or browser. Review changes in VS Code Source Control and open new files
in Explorer; routine Git terminal commands are not needed.

The [acceptance contract](workshops/acceptance.md) defines what to build.
Use `/speckit-specify` to generate one feature specification and checklist from
the backlog and contract. Use `/speckit-plan` to plan the reviewed specification
against the existing code, then `/speckit-tasks` to generate executable work from
the approved plan. Review each handoff; there are no prewritten spec, plan, or
task files to copy.

Keep normal tool approvals. Use the implementation agent to run commands and
change code; the custom reviewer stays read/search only. Browser checks,
reviewer-finding decisions, and final acceptance remain human work.
A generated success message is not test evidence.

If blocked, preserve your work and follow
[recovery in Exercise 0](workshops/steps/exercise-0-setup.md#recovery-during-the-workshop)
with the facilitator. Do not skip tests, member isolation, pagination, review,
or human acceptance to catch up.

## Workshop scope and event format

Use the existing packages and synthetic in-memory fixtures. No new application
dependencies, Redis server, database, Docker, GitHub Actions, paid cloud resources,
external healthcare APIs, deployment, or broad refactoring are required.
Spec Kit is a local development tool, not an application service. Copilot needs
account access and network connectivity. Never use real member information,
health data, tokens, or credentials in prompts or workshop artifacts.

Exercise 0 is setup before the event. Exercises 1-6 have a **tentative three-hour
core plus a one-hour buffer**, including welcome, discussion, a break, and wrap-up.
Use the buffer for recovery and finishing the same feature, not extra required
exercises. This is a delivery target, not a measured participant-completion claim;
the live VS Code/Copilot journey still needs a participant rehearsal.

## Optional follow-on workshops

- [Build multiple role-specific custom agents](workshops/optional/custom-agents.md):
  start with the reviewed core specification and plan.
- [Appeal eligibility and an in-memory draft](workshops/optional/claim-appeals.md):
  start after accepting the core feature.

Neither is required for core completion or part of the completion buffer.

## Quick Start

For workshop readiness, follow [Exercise 0](workshops/steps/exercise-0-setup.md).
To run an already cloned and prepared checkout:

```bash
npm ci
npm run dev
```

This starts:
- **API** on http://localhost:3000 (Express)
- **UI** on http://localhost:5173 (Vite + React, proxies `/api` to the backend)

## Test Members

| Member ID | Name            | Plan              |
|-----------|-----------------|-------------------|
| M-10001   | Sarah Johnson   | Gold PPO          |
| M-10002   | James Williams  | Silver HMO        |
| M-10003   | Maria Garcia    | Gold PPO          |

## API Endpoints

All `/api/*` routes require the `x-member-id` header.

```bash
curl -H "x-member-id: M-10001" http://localhost:3000/api/members/me
curl -H "x-member-id: M-10001" http://localhost:3000/api/claims
curl -H "x-member-id: M-10001" http://localhost:3000/api/prescriptions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start API + UI concurrently |
| `npm run dev:api` | Backend only |
| `npm run dev:ui` | Frontend only |
| `npm run build` | Compile backend + build frontend |
| `npm test` | Run API tests |
| `npm run typecheck` | Check backend TypeScript (not frontend TSX) |

## Project Structure

```
spec-workshop/
+-- server/          # Express backend
|   +-- server.ts    # Routes + middleware (single file)
|   +-- data.ts      # In-memory mock data
|   +-- types.ts     # TypeScript interfaces
+-- src/             # React frontend
|   +-- main.tsx     # Entry point
|   +-- App.tsx      # Main app component
|   +-- App.css      # Styles
|   +-- types.ts     # Frontend type definitions
|   +-- components/  # UI components
|   +-- services/    # API client
+-- tests/           # API tests (Vitest + Supertest)
+-- index.html       # Vite HTML entry
+-- package.json     # Single unified package
+-- tsconfig.json    # Backend TypeScript config
+-- vite.config.ts   # Frontend build config
```
