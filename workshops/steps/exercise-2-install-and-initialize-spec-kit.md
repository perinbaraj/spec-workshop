# Exercise 2: Use bundled Spec Kit and review the constitution

[Previous: Exercise 1](exercise-1-explore-the-app.md) |
[Workshop home](../../README.md#start-here) |
[Next: Exercise 3](exercise-3-create-the-specification.md)

## Objective and prerequisites

Inspect the seven already bundled, CLI-free workshop adaptations and generate
only the constitution. Exercise 0's skill discovery and Exercise 1's exploration
must be complete. These files are not the standard upstream Spec Kit CLI.
Copilot requires its normal access and connectivity; app/test operation is
direct-file. Use synthetic data only: this simulation has no real server,
authentication, authorization, privacy, security or HIPAA guarantee.

## Steps

1. Read [adaptation notes and shared protocol](../../.specify/README.md),
   including attribution, active-feature recovery, approvals and evidence.
   Inspect the seven `.github\skills\speckit-*\SKILL.md` files and the
   `.specify\templates\` directory. They replace upstream scripts and CLI
   operations with explicit editor/Copilot reads, searches and edits. Nothing
   needs installing or initializing.
2. In Copilot Chat invoke:

   ```text
   /speckit-constitution
   Draft project principles for the browser-only prescription workshop using
   the repository instructions and workshops\acceptance.md. Preserve the
   existing synthetic starter and require accessible, tested, member-scoped
   behavior without claiming real security. Generate only the constitution.
   ```

3. Inspect `.specify\memory\constitution.md`. Check synthetic-only scope,
   direct-file operation, member-scoped behavior as a simulation, validation,
   generic errors, accessibility, test-first evidence, normal approvals and
   preservation of fixtures and unrelated views. Resolve conflicts with the
   facilitator, not by guessing. If the file already exists, preserve it and
   follow the skill's explicit revision rule.
4. Explicitly approve the reviewed constitution in the conversation before
   proceeding. A generated file or checkbox is not human approval.

## Exit criteria

The constitution is reviewed and explicitly approved. No feature specification,
checklist, plan, tasks, app changes or completed learner output exists yet.
If a skill is unavailable or state is inconsistent, stop and use
[recovery](exercise-0-setup.md#recovery-during-the-workshop).
