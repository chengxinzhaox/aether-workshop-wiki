---
title: Advanced Users
description: Development notes for source builds, project format, component schemas, code generation, and cloud package maintenance.
---

## Source Build

The app is an Xcode macOS project:

- Project: `Aether Workshop.xcodeproj`.
- Scheme: `Aether Workshop`.
- Bundle identifier: `design.chengxin.aether`.
- Minimum macOS version in current project settings: macOS 14.
- External Swift package: ORSSerialPort.

Before modifying the main app, read its `AGENT.md`, `DEVELOPMENT.md`, and `DESIGN.md`.

## Project Format

Saved `.aew` packages contain `config.json` and can include generated sketch, libraries, media, and AI attachments. The document model saves nodes, edges, canvas state, hardware configs, custom libraries, media files, project AI conversations, Capsule overrides, comments, pins, change logs, and history snapshots.

## Library Package Format

`.aetherlib` packages use schema version 2 and include component library data, Capsule library data, dependencies, component history graphs, and Capsule history graphs.

## Component Schema Guidelines

- Use lowercase snake case IDs.
- Keep identifiers stable after use in projects.
- Keep UI element IDs stable when code blocks reference them.
- Review dependency names and installed libraries.
- Use private source libraries for component-specific helper code.
- Add AI profile metadata so Project AI can reason about capabilities.

## Code Generation Notes

The generator expands Capsules, validates graph prerequisites, emits includes, pins, globals, setup, loop, helpers, and component code blocks. `Serial.begin(9600)` is included in setup. Verify before upload whenever a component or Capsule changes.

## Cloud Maintenance

Cloud libraries separate component/Capsule content commits from library structure commits. Commit reusable content first, then push structure. Remote updates are explicit and local protected drafts can block pull.

## Known Source Caveats

- Output hardware config creation currently receives a node ID but does not persist it.
- AI provider keys are stored in an Application Support JSON file rather than Keychain.
- Face/expression/media-related modules exist, but some default components are hidden or legacy in the current registry.
- The upload error text for missing Arduino CLI may still mention external installation even though the Settings installer exists.

## Related Pages

- [Settings and Environment](/reference/settings-environment/)
- [Component Library](/features/component-library/)
- [Capsules](/features/capsules/)
- [Cloud Libraries](/cloud/overview/)
