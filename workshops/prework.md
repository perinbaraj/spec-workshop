# Prework: prepare before the event

Complete this before the core workshop. Installation and account troubleshooting
are not part of the hands-on event.

## Required

- Node.js 22 LTS with npm, Git, and VS Code.
- GitHub Copilot access in VS Code, signed in and able to use Chat agent tools.
- PowerShell on Windows, or Bash on macOS/Linux.
- Python 3.11+, uv, and Spec Kit's Specify CLI 1.2.3 (installation below).
- A local clone of [`perinbaraj/spec-workshop`](https://github.com/perinbaraj/spec-workshop)
  (its default `main` branch).
- Internet access for Copilot and for package installation (`npm ci`, Python tooling).

There is no Redis server, Docker, database, GitHub Actions setup, cloud account,
or healthcare-service credential to configure.

## 1. Clone the workshop repository and open VS Code

Install missing prerequisites from their official sources:
[Git](https://git-scm.com/downloads),
[Node.js](https://nodejs.org/en/download),
[VS Code](https://code.visualstudio.com/download), and
[Python](https://www.python.org/downloads/).
Follow [uv installation](https://docs.astral.sh/uv/getting-started/installation/)
for the Python tool manager. Verify
[Copilot access in VS Code](https://code.visualstudio.com/docs/copilot/setup)
before continuing.

In a terminal, choose a parent folder for your own clone, then run:

```text
git clone https://github.com/perinbaraj/spec-workshop.git
cd spec-workshop
code .
```

Expected: VS Code opens the new `spec-workshop` folder containing `package.json`,
`server`, `src`, and `workshops`. The branch indicator in VS Code's status bar
should show `main`. Stay on it for all six exercises: no branch creation,
checkpoint commits, or push is required. Git is needed to clone the starter,
not as a separate exercise.

If `code` is not on PATH, use VS Code's **File > Open Folder** to open that
folder. Use **Terminal > New Terminal** for the remaining terminal commands.

If a `spec-workshop` folder with your own local work already exists, do not reset
or clean it. Clone into a new folder name instead
(`git clone https://github.com/perinbaraj/spec-workshop.git spec-workshop-event`,
then `cd spec-workshop-event`), or ask the facilitator to help preserve it. A copy
cloned from any other URL is not a substitute for this repository.
If cloning reports "repository not found" or an access error, check the URL
character for character and your network or GitHub access, then tell the
facilitator. Do not switch branches or discard existing work to repair setup.

## 2. Verify the starter

From the repository root:

```text
node --version
npm --version
npm ci
npm test
npm run typecheck
npm run build
```

Use `npm.cmd` instead of `npm` on Windows if your existing PowerShell policy
blocks npm's `.ps1` shim; do not change execution policy for the workshop.

The first npm command on a fresh machine can take several minutes (for example
while antivirus software scans `node_modules`). Run `npm ci` before the event,
not during it.

The baseline has six API smoke tests. The existing TypeScript configuration
checks the backend; Vite transpiles the frontend but is not a full TSX typecheck.
The original lint script references undeclared ESLint tooling, so lint is not an
advertised workshop gate. Do not install extra tooling just to follow the guide.

Then run:

```text
npm run dev
```

Open `http://localhost:5173`, then Profile, Claims, and Prescriptions. Expected:
all three views load; Claims has no filter yet. The Vite
proxy forwards `/api` to the backend on port 3000. Use only the synthetic members
provided by the starter. Do not copy real member information into the app.

After checking the app, press **Ctrl+C** in its terminal to stop the development
processes you started. Always stop them before `npm test`: the tests start an
API listener, so another process on port 3000 can cause a conflict.

## 3. Install and verify Spec Kit

Spec Kit is the toolkit, `specify-cli` is the package you install, and `specify`
is the command you run. Installation makes the command available; it does not
initialize this project.

Check Python 3.11+ with `python --version` on Windows or `python3 --version` on
macOS/Linux. Then check uv:

```text
uv --version
```

If uv is missing, choose the command for your platform:

**Windows PowerShell:**

```powershell
winget install --id=astral-sh.uv -e
```

**macOS/Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Save your work, close and reopen VS Code and this folder, and create a new
terminal to receive the updated PATH. Run `uv --version` again.
If these commands are unavailable or blocked, use the facilitator and
[official uv alternatives](https://docs.astral.sh/uv/getting-started/installation/)
without changing security settings.

Install the pinned Spec Kit version, then verify it:

```text
uv tool install specify-cli==1.2.3
specify version
specify init --help
```

Expected: version `1.2.3`, and help containing `--here`, `--integration`, and
`--script`. Do not upgrade during the event. Windows participants will normally
use Python helpers (`--script py`); macOS/Linux participants use Bash
(`--script sh`). Exercise 2 also documents the permitted PowerShell alternative.

| Installation problem | Recovery |
| --- | --- |
| `specify` not found after install | Run `uv tool update-shell`, then close and reopen VS Code and its terminal. |
| An older uv-managed version is installed | Run `uv tool install --force specify-cli==1.2.3`, then verify again. If another installer owns it, ask the facilitator to resolve that copy instead of installing a conflicting second one. |
| TLS, certificate, proxy, or package-version error | Ask for the organization's approved package index or a facilitator-supplied wheel. The supported forms are `uv tool install --default-index <approved-index-url> specify-cli==1.2.3` or `uv tool install <path-to-wheel>`. Replace placeholders with approved values; do not disable TLS verification. |

**Stop after verification; do not run `specify init` in this checkout yet.**
You will run it yourself in
[Exercise 2](steps/exercise-2-install-and-initialize-spec-kit.md), after exploring
the app in [Exercise 1](steps/exercise-1-explore-the-app.md).
No `.specify` folder or generated `/speckit-...` skills is expected before then.
Resolve installation/account problems before the event; initialization remains
the live exercise.

## 4. Verify the custom reviewer

Open `.github\agents\workshop-reviewer.agent.md`, then select
**workshop-reviewer** in VS Code Chat's agent picker. If it does not appear,
confirm you opened the repository root, saved the file, and selected the Copilot
harness. Use VS Code's customization diagnostics/reload only as needed.

See the [reviewer profile](../.github/agents/workshop-reviewer.agent.md) and
[VS Code custom-agent documentation](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
if discovery is blocked. The profile allows read/search tools only. Keep that
boundary; command execution belongs to the normal implementation session.

## Ready for the live workshop

Your clone of `perinbaraj/spec-workshop` is on `main`, the app runs locally,
baseline checks work, `specify version` prints `1.2.3`, and the reviewer can be
selected. The app is stopped and the repository is still uninitialized
for Spec Kit. Tell the facilitator about a setup blocker before the event.

When the core workshop begins, follow these steps in order:

1. Open the [workshop home](README.md) and keep this page available for setup
   recovery.
2. Complete [Exercise 1: explore the app](steps/exercise-1-explore-the-app.md) without
   initializing Spec Kit or changing feature code.
3. Open [Exercise 2: install and initialize Spec Kit](steps/exercise-2-install-and-initialize-spec-kit.md).
   Since installation is already complete, go to its verification action,
   then run the single initialization command for your platform yourself.

If blocked during the workshop, use [reference recovery](reference/README.md)
without discarding your work.

**Next:** [Exercise 1: explore the app](steps/exercise-1-explore-the-app.md) |
[Workshop home](README.md)
