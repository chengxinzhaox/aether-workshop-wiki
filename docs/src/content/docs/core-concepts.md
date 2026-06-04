---
title: Core Concepts
description: Learn the vocabulary behind Aether Workshop projects, components, Capsules, libraries, cloud packages, and history.
---

## Project

A project is a saved `.aew` package. It contains the visual graph, generated sketch, media, AI attachments, library data, comments, pins, project change logs, and project history snapshots.

## Node Graph

The Project canvas is a directed graph. A `Start` node begins execution. Logic nodes describe control flow. Sense nodes read inputs. Act nodes write outputs. Capsule nodes expand into reusable subgraphs during code generation.

## Sense Component

A Sense component reads data. Examples include temperature, humidity, light, sound, gas, water level, pressure, movement, distance, gesture, random values, and serial input.

## Act Component

An Act component performs an output action. Examples include LED ring, LED strip, RGB LED, laser, infrared transmitter, buzzer, motor, servo, serial output, and serial JSON output.

## Component Definition

A component definition stores name, icon, color, kind, category, pin requirements, compatible ports, generated code blocks, variables, dependencies, UI elements, notes, and AI profile metadata. Component IDs should use lowercase snake case.

## Capsule

A Capsule is a reusable graph package with internal nodes and edges plus exposed input/output interface ports. Capsule instances in a project can pass parameter values and can be saved as project-specific overrides.

## Library

A library is a local or cloud-scoped collection of components, Capsules, dependencies, component history, and Capsule history. Libraries can be exported as `.aetherlib` packages.

## Cloud Library

A cloud library is a local library linked to a remote package. Roles are Owner, Editor, and Viewer. Owners and Editors can push changes. Viewers can pull and inspect.

## History

Aether Workshop uses separate history systems:

- Component history tracks component snapshots and private libraries.
- Capsule history tracks reusable graph snapshots.
- Project history tracks project-level snapshots created from change logs.
- Cloud library history tracks library structure commits and remote package changes.

## AI Profile

AI profile metadata helps Project AI understand how a component behaves, which capabilities it supports, and what it cannot do. Library AI can generate or revise this profile during component edits.

## Related Pages

- [Project Files and History](/projects/files-history/)
- [Component and Capsule History](/cloud/history/)
- [Library AI](/ai/library-ai/)
