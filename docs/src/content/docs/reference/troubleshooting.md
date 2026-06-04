---
title: Troubleshooting
description: Diagnose common Aether Workshop setup, project, upload, cloud, AI, and history problems.
---

## Arduino CLI Missing

Open **Setting > Hardware** and install Arduino CLI. If the installer fails, check network access, macOS executable permissions, and app logs. The app stores the binary in Application Support.

## Compile Fails

Check:

- The project has a `Start` node.
- All Sense/Act nodes have hardware config.
- The target board is installed.
- Required Arduino libraries are installed.
- Component code blocks reference existing variables and UI element IDs.
- Capsule interfaces are bound correctly.

## Upload Fails

Check:

- Correct serial port selected.
- Serial Monitor or another app is not occupying the port.
- USB cable supports data.
- Board target matches the connected hardware.
- Driver or platform support is installed for the board.

## Serial Monitor Is Blank

Check baud rate `9600`, selected port, board reset state, and whether uploaded code prints anything. Use a minimal graph or Serial Output component to test.

## AI Model Missing

Check provider key, enabled model list, model-provider compatibility, and network access. Response language and reasoning settings do not make a model appear if no key exists.

## AI Graph Edit Looks Wrong

Discard the staged graph, ask for a smaller change, mention exact components with `@`, or provide a screenshot/image. AI graph changes are not final until you keep them.

## Cloud Push Blocked

Common causes:

- Viewer role.
- Empty commit message.
- Unhandled remote update.
- Dirty component or Capsule without a committed version.
- Protected local draft that must be resolved first.

## Pull Blocked

Remote updates do not automatically overwrite protected local drafts. Commit, discard, export, or otherwise preserve local work before pulling.

## Project History Restore Confusing

Use **Check** to inspect snapshot mode first. **Discard** exits snapshot mode. **Save Latest** makes the selected snapshot the current project head.

## Media Missing

Check whether media was saved into the `.aew/media` package and whether old snapshots still reference it. Avoid manually deleting package internals.

## Related Pages

- [Quick Start](/quick-start/)
- [Code, Verify, Upload](/features/code-upload/)
- [Cloud Libraries](/cloud/overview/)
- [AI Settings](/ai/settings/)
