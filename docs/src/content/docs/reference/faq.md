---
title: FAQ
description: Frequently asked questions about Aether Workshop.
---

## General

**What is Aether Workshop?**  
Aether Workshop is a macOS visual hardware workspace for building Arduino-compatible behavior with nodes, reusable components, Capsules, generated code, upload tooling, AI assistance, and cloud libraries.

**Who is it for?**  
It is for makers, educators, students, prototype builders, and advanced users who maintain hardware component libraries.

**Can I work offline?**  
Yes for local projects after dependencies and board platforms are installed. AI, cloud login, cloud sync, and new dependency downloads require network access.

## Projects

**What is a `.aew` file?**  
It is a package directory containing project configuration, generated sketch, optional libraries, media, AI attachments, comments, pins, change logs, and history.

**Is project collaboration real time?**  
No. Comments, pins, change logs, and history are saved in the project package.

## Components and Capsules

**What is the difference between a component and a Capsule?**  
A component defines hardware and generated code. A Capsule packages a graph into a reusable node.

**Can I edit built-in components?**  
Some built-ins are locked. Duplicate or create a custom component for editable variants.

**Can old component versions be edited?**  
Old checkouts are read-only. Create a new component from a snapshot or commit a new latest version from current work.

## AI

**Does AI automatically change my project?**  
Project AI stages graph edits. You choose whether to keep or discard them.

**Where are AI keys stored?**  
AI provider keys are stored in local app settings. Cloud tokens are stored in Keychain.

## Cloud

**Can Viewers push changes?**  
No. Viewers can inspect and pull. Owners and Editors can push.

**What happens if I delete or leave a cloud library?**  
The cloud link changes, but the local copy is kept.

## Hardware

**Can I use non-Aether boards?**  
Yes, if the board target and Arduino platform are configured.

**Should I use `/dev/cu.*` or `/dev/tty.*` on macOS?**  
Prefer `/dev/cu.*` for outgoing serial connections.
