---
title: Library AI
description: Use Library AI to create and modify components, dependencies, source libraries, UI elements, and AI profiles.
---

![Library AI workflow](/assets/screenshots/AI.webp)

## Feature Summary

Library AI helps create and modify component definitions. It can work from text, pasted images, dropped images, dependency requirements, and existing component context.

## When to Use It

- Create a new hardware component definition.
- Modify a component's code blocks or UI elements.
- Plan external Arduino library dependencies.
- Generate an internal source library.
- Add AI profile metadata so Project AI understands the component.
- Review generated component behavior before committing history.

## Agent Workflow

Library AI uses a multi-step workflow. The exact visible wording may vary by build, but the source shows specialized phases for coordination, create/modify planning, dependency planning, dependency implementation, library design/code, component integration, UI element generation, review, repair, AI profile, and summary/title creation.

## Create a Component

1. Open **Library**.
2. Choose the target library scope.
3. Open the Library AI panel.
4. Describe the hardware, pins, expected behavior, dependencies, and UI controls.
5. Attach images if useful.
6. Review proposed fields, dependencies, code blocks, and UI elements.
7. Test with Code Preview and Verify in a project.
8. Commit component history.

## Modify a Component

1. Select the component.
2. Ask Library AI for a specific change.
3. Review the generated edit envelope.
4. Confirm protected identity fields are unchanged.
5. Verify the component in a project graph.
6. Commit a new version.

## Safety Rules

- AI edits protect component ID, component identifier, and component kind.
- Validators check UI element references, dependency references, and code variables.
- Locked built-ins cannot be modified.
- Generated source libraries should be reviewed like normal code.

## Notes

- Library AI conversations are stored in Application Support, not inside every project.
- Images are stored as AI attachments.
- Component-private source libraries travel with component history and cloud commits.
- Commit only after local verification.

## FAQ

**Can Library AI add a third-party Arduino library?** It can plan and reference dependencies. Make sure the dependency is available and installed through Settings or Arduino CLI.

**Why did AI create a private source library?** It may have isolated reusable helper code so the component code blocks stay smaller.

**Can Viewers use Library AI on a cloud library?** Viewers can inspect but cannot push or commit shared changes.

## Related Pages

- [Component Library](/features/component-library/)
- [AI Settings](/ai/settings/)
- [Component and Capsule History](/cloud/history/)
- [Troubleshooting](/reference/troubleshooting/)
