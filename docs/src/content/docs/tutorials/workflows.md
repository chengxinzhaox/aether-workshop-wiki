---
title: Workflow Tutorials
description: Practical Aether Workshop workflows for first prototypes, classroom demos, AI-assisted components, and cloud library maintenance.
---

## Workflow 1: Light-Reactive Output

Use this for a first classroom or maker demo.

1. Create a new project.
2. Add **Light** Sense.
3. Add `if`.
4. Add **RGB LED** or **LED Ring** Act.
5. Connect `Start -> Light -> if -> Act`.
6. Assign ports.
7. Verify code.
8. Upload and tune the threshold.

Best practice: keep the first graph small and commit a project change log after hardware works.

## Workflow 2: Custom Sensor Component

Use this when a sensor is not in the default library.

1. Open **Library**.
2. Create a new Sense component.
3. Add pin requirements and compatible ports.
4. Add external or source library dependencies.
5. Write read code blocks.
6. Add notes and AI profile.
7. Test in a project.
8. Commit component history.
9. Push the library if it is cloud-linked.

Best practice: include a minimal example graph in project notes or team docs.

## Workflow 3: Reusable Capsule Pattern

Use this for repeated behavior.

1. Build the behavior in a normal project graph.
2. Move the repeated logic into a Capsule.
3. Expose input/output interface ports.
4. Convert fixed values into parameters.
5. Test the Capsule as a project node.
6. Commit Capsule history.

Best practice: keep Capsule interfaces stable after teammates start using them.

## Workflow 4: AI-Assisted Project Draft

Use this when exploring an idea quickly.

1. Configure AI provider settings.
2. Describe the desired behavior in Project AI.
3. Mention known components with `@`.
4. Review staged graph edits.
5. Keep the graph only after checking node choices.
6. Assign hardware, verify, and upload manually.

Best practice: ask AI for a small first graph before asking for a complete installation.

## Workflow 5: Cloud Library Release

Use this when publishing shared components or Capsules.

1. Pull remote updates.
2. Resolve local drafts.
3. Commit each changed component/Capsule.
4. Write a library structure commit message.
5. Push.
6. Invite Viewers or Editors as needed.

Best practice: use Viewer role for classrooms and Editor role only for maintainers.

## Related Pages

- [Quick Start](/quick-start/)
- [Project Canvas](/features/project-canvas/)
- [Library AI](/ai/library-ai/)
- [Cloud Libraries](/cloud/overview/)
