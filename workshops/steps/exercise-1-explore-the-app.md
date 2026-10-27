# Exercise 1: Explore the app and understand the change

[Previous: prework](../prework.md) | [Workshop home](../README.md) |
[Next: Exercise 2](exercise-2-install-and-initialize-spec-kit.md)

## Objective

Trace the existing claims flow and explain the one change you will build.
Do not edit application code or initialize Spec Kit in this exercise.

## Prerequisites

- Complete [prework](../prework.md); open your own `spec-workshop` clone in VS Code.
- Confirm Explorer shows `package.json`, `server`, `src`, and `workshops`.
- Stay on `main` throughout the workshop: no branch creation, commits, or push.
- Keep [the acceptance contract](../acceptance.md) available.

## The Backlog Item

> As a signed-in member, I want to filter my claims by status and move through
> the results so I can find relevant claims without seeing another member's data.

This is a bounded change to the existing Claims API, typed client, and view.
Keep the other screens and routes unchanged. Do not build refills, appeals,
mutations, or new infrastructure.

## Step-by-step Instructions

### Step 1: Start the app (Terminal)

In **Terminal > New Terminal**, from the folder containing `package.json`, run:

```text
npm run dev
```

**Expected output:** The API on port 3000 and Vite on port 5173 report readiness.
Leave this terminal open while you inspect the app. On Windows, use `npm.cmd`
if PowerShell blocks npm's `.ps1` shim; do not change execution policy.

### Step 2: Explore the starting behavior (Browser)

Open `http://localhost:5173`. Visit Profile, Claims, and Prescriptions using
only the provided synthetic members.

**Expected output:** All three views load. Claims lists the current member's
claims but has no status filter or paging controls. This is the intended
starting point, not a defect to fix yet.

### Step 3: Locate the claims flow (Editor)

Open these files and find the listed parts; you do not need to read every line.

| File | Find this |
| --- | --- |
| [Repository instructions](../../.github/copilot-instructions.md) | Privacy, member isolation, validation, and accessibility rules |
| [API](../../server/server.ts) | Authentication middleware and `GET /api/claims` |
| [Data helper](../../server/data.ts) | `getClaimsForMember`, which already scopes results to one member |
| [HTTP client](../../src/services/httpClient.ts) | `getClaims()`, which currently returns `Claim[]` |
| [Claims view](../../src/components/ClaimsList.tsx) | Fetching and loading/error/empty/list rendering |
| [Tests](../../tests/server.test.ts) | Existing Vitest/Supertest examples |

**Expected output:** You can follow the path from the member header through the
API and member-scoped helper to the client and Claims view. The route returns
`{ claims }`; the client unwraps it into an array.

### Step 4: Ask for an explanation only (Copilot Chat)

Select the normal implementation agent, **not** `workshop-reviewer`, and submit:

```text
Inspect the existing claims flow and .github/copilot-instructions.md.
Read workshops/acceptance.md.
Explain how authentication, member-scoped data, GET /api/claims, the typed
HTTP client, ClaimsList, and the existing tests fit together.
List the files needed for the claims status filter and pagination change.
Separate existing behavior from the behavior we still need to build.
Do not edit files, install tools, initialize Spec Kit, commit, or push.
```

**Expected output:** An explanation with source-file references, not edits.
Open the cited files and verify the claims yourself. Adding pagination metadata
later will require the API, client, and view to change together.

### Step 5: Explain the scope (Editor)

Read [the acceptance contract](../acceptance.md). Describe the change in your
own words before continuing.

**Expected output:** Your description includes:

- Only the signed-in member's claims and totals.
- Status filtering before pagination, preserving existing order.
- Accessible controls and loading, error, empty, and stale-response handling.
- Existing fixtures, with `pageSize=1` to demonstrate two pages later.

### Step 6: Stop the app (Terminal)

Press **Ctrl+C** in the development terminal you started.

**Expected output:** Your development processes stop. No feature code has
changed, and the starter is ready for live Spec Kit initialization.

## Exit Criteria

- [ ] You can explain the current API-to-client-to-view flow.
- [ ] You can distinguish the backlog from existing behavior.
- [ ] Application code is unchanged; Spec Kit is not initialized yet.
- [ ] Your development server is stopped.

## If You Get Stuck

| Problem | What to do |
| --- | --- |
| The app does not start | Return to [starter verification](../prework.md#2-verify-the-starter) and read the terminal error. |
| A port is already in use | Stop only processes you started using their terminal; ask about an unknown process. |
| Copilot starts editing | Stop the action and repeat the explanation-only prompt. Preserve existing work. |
| The member label looks wrong | Switching members returns to Profile and can leave the header label stale. Reopen Claims and identify the member by its claims; see [starter quirks](../acceptance.md#starter-quirks-that-are-not-part-of-this-change). |

[Previous: prework](../prework.md) | [Workshop home](../README.md) |
[Next: Exercise 2](exercise-2-install-and-initialize-spec-kit.md)
