# Exercise 3: Create and review the specification

[Previous: Exercise 2](exercise-2-install-and-initialize-spec-kit.md) |
[Workshop home](../../README.md#start-here) |
[Next: Exercise 4](exercise-4-create-the-plan-and-tasks.md)

## Objective and prerequisites

With the constitution explicitly approved, specify the single unfinished
claims-status/pagination feature from the [binding contract](../acceptance.md).
This is synthetic browser-only behavior, not real server, authentication,
authorization, privacy, security or HIPAA compliance.

## Steps

1. Read the complete contract, especially input edge cases, simulated member
   scoping, pagination metadata, URL override, accessible states and stale
   response behavior. Inspect `.specify\README.md` for the one-active-feature
   protocol and its recovery stops.
2. In Copilot Chat request:

   ```text
   /speckit-specify
   Specify the existing Claims view's status filter and pagination from
   workshops\acceptance.md. Preserve the current synthetic fixtures and the
   browser-only scope. Create the one active feature specification and
   requirements checklist only; do not implement.
   ```

3. Inspect `.specify\feature.json`, the referenced `specs\NNN-slug\spec.md`
   and `checklists\requirements.md`. Verify the state points to exactly this
   feature; do not adopt partial or conflicting output. Preserve it and stop
   for reconciliation if invalid.
4. Review the stories, observable acceptance scenarios, edge cases and
   exclusions against the whole contract. The five statuses, omitted-only
   defaults, repeated/malformed inputs, member-before-counting behavior,
   totals, resilient states and accessibility are not optional later stories.
5. If genuine ambiguity remains, use `/speckit-clarify` on the same feature.
   Supply required answers; do not ask it to invent them. Review revised
   checklist entries again.
6. Personally review and check the requirements checklist, then explicitly
   approve the specification in the conversation. No checked box alone is
   approval. Do not generate a plan or edit app code in this exercise.

## Exit criteria

One valid active feature, complete reviewed specification and checked
requirements checklist, explicit human approval, and no unresolved questions.
For inconsistent state or missing prerequisites, stop and use
[recovery](exercise-0-setup.md#recovery-during-the-workshop).
