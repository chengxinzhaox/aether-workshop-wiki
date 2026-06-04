---
title: Project Files and History
description: Understand .aew packages, project comments, pins, change logs, snapshots, media preservation, and history restore workflows.
---

## Feature Summary

Aether Workshop saves projects as `.aew` package directories. A project can contain graph state, generated sketch, libraries, media, AI attachments, comments, pins, change logs, and history snapshots.

## .aew Package Contents

A saved project package can contain:

- `config.json` for project document data.
- `sketch.ino` for generated Arduino sketch output.
- `libraries/` for bundled project libraries.
- `media/` for project media assets.
- `ai_attachments/` for project AI attachments.

Legacy single JSON project files can load, but current saving uses the package form.

## Project Collaboration Artifacts

These features are saved in the `.aew` file and are not real-time cloud collaboration:

- Comments anchored to canvas positions or nodes.
- Comment replies, solved state, delete/undo flows.
- Pin board notes.
- Project change logs.
- Project history snapshots.

Some actions require a signed-in account so authorship is available.

## Change Log Workflow

1. Open the Project toolbar.
2. Create a change log preview.
3. Review generated entries grouped by Nodes, Logic, Connections, Hardware, Capsules, Layout, Comments, and Pins.
4. Remove entries that should not be published.
5. Add a description.
6. Publish.

Publishing creates a change log entry and a project history snapshot. If the project has not been saved yet, Aether Workshop prompts for a save location.

## History Workflow

1. Open Project History.
2. Choose a snapshot.
3. Click **Check** to inspect snapshot mode on the canvas.
4. Choose **Discard** to return to current work, or **Save Latest** to make the snapshot the new head.

Snapshots include graph, canvas, hardware, custom libraries, media references, Project AI conversations, Capsule overrides, comments, and pins. Nested history records are not duplicated inside each snapshot.

## Media Preservation

The project tracks media referenced by current graph state and history snapshots. This prevents old history entries from losing media that is no longer referenced by the latest graph.

## Notes

- Change log comparison ignores pan and zoom.
- Node position changes are grouped as Layout.
- Project history is local to the `.aew` package unless you share that package.
- Cloud library history is separate from project history.

## FAQ

**Is project history the same as Git?** No. It is an app-level snapshot system stored inside the project package.

**Can comments sync live between users?** Not in the current project model. Comments are saved with the project file.

**Can I recover media from an old snapshot?** If the media was referenced by the snapshot, the package preservation logic should keep it.

## Related Pages

- [Cloud Libraries](/cloud/overview/)
- [Component and Capsule History](/cloud/history/)
- [Project Canvas](/features/project-canvas/)
- [Troubleshooting](/reference/troubleshooting/)
