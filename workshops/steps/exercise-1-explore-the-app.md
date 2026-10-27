# Exercise 1: Explore the app and understand the change

[Previous: prework](../prework.md) | [Workshop home](../README.md) |
[Next: Exercise 2](exercise-2-install-and-initialize-spec-kit.md)

## What you will do

Run the existing Member Portal, inspect its claims flow, and understand the one
feature you will build: filtering and paging through the current member's claims.
**Do not change application code or initialize Spec Kit in this exercise.**

## Before you start

Complete [prework](../prework.md). Open your own `spec-workshop` folder in VS Code.
Explorer should show `package.json`, `server`, `src`, and `workshops`.
Stay on `main` throughout all six exercises; you do not need to create a branch,
commit, or push. Keep [the acceptance contract](../acceptance.md) open.

## Do this

### 1. Terminal: start the app

Select **Terminal > New Terminal** in VS Code. From the project folder, run:

```text
npm run dev
```

Wait for both the API and Vite readiness messages. Keep this terminal open while
you use the app. On Windows, use `npm.cmd` in place of `npm` throughout the
workshop if PowerShell blocks npm's script; do not change execution policy.

### 2. Browser: see what already works

Open `http://localhost:5173`. Visit Profile, Claims, and Prescriptions.
Use only the provided synthetic members.

**Expected:** Claims displays the current member's claims, but has no status
filter or paging controls. This is the starting point, not a defect to fix yet.
The exercise does not implement refills, appeals, or other missing features.

### 3. Editor: locate the existing claims flow

Open these files. You do not need to read every line:

| File | Find this |
| --- | --- |
| [Repository instructions](../../.github/copilot-instructions.md) | Privacy, member isolation, validation, and accessibility rules |
| [API](../../server/server.ts) | Authentication middleware and `GET /api/claims` |
| [Data helper](../../server/data.ts) | `getClaimsForMember`, which already scopes results to one member |
| [HTTP client](../../src/services/httpClient.ts) | `getClaims()`, which currently returns `Claim[]` |
| [Claims view](../../src/components/ClaimsList.tsx) | Fetching and loading/error/empty/list rendering |
| [Tests](../../tests/server.test.ts) | Existing Vitest/Supertest examples |

### 4. Copilot Chat: ask for an explanation, not edits

Open VS Code Chat in the normal implementation agent, not `workshop-reviewer`.
Submit this prompt:

```text
Inspect the existing claims flow and .github/copilot-instructions.md.
Read workshops/acceptance.md.
Explain how authentication, member-scoped data, GET /api/claims, the typed
HTTP client, ClaimsList, and the existing tests fit together.
List the files needed for the claims status filter and pagination change.
Separate existing behavior from the behavior we still need to build.
Do not edit files, install tools, initialize Spec Kit, commit, or push.
```

Open the files cited in the response. Confirm the API currently returns
`{ claims }` and the client unwraps it into an array. Later, adding pagination
metadata will require updating the API, client, and view together.

### 5. Explain the goal, then stop the app

In your own words, describe the change using [the contract](../acceptance.md):

- Show only the signed-in member's claims and totals.
- Filter by status, then paginate in the existing order.
- Add accessible controls and preserve loading, error, and empty states.
- Use the existing fixtures; `pageSize=1` will make two pages visible later.

Return to the terminal running the app and press **Ctrl+C** to stop the
development processes you started.

## Check your result

You can explain the current claims flow and the intended change. No feature
code has changed, and your development server is stopped.

Continue to [Exercise 2: install and initialize Spec Kit](exercise-2-install-and-initialize-spec-kit.md).

## If you get stuck

| Problem | What to do |
| --- | --- |
| The app does not start | Return to [prework's starter checks](../prework.md#2-verify-the-starter) and read the terminal error. |
| A port is already in use | Stop only processes you started using their terminal. Ask the facilitator about an unknown process. |
| Copilot starts editing | Stop that action and repeat the explanation-only prompt. Preserve any existing work. |
| The member label looks wrong | Switching members returns to Profile and can leave the header label stale. Reopen Claims and identify the member by the claims shown; see [starter quirks](../acceptance.md#starter-quirks-that-are-not-part-of-this-change). |

[Previous: prework](../prework.md) | [Workshop home](../README.md) |
[Next: Exercise 2](exercise-2-install-and-initialize-spec-kit.md)
