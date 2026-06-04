---
title: Project Canvas
description: Use the Aether Workshop visual canvas to design hardware behavior with nodes, connections, logic, components, and Capsules.
---

## Feature Summary

The Project canvas is the main workspace for building hardware behavior. You arrange nodes, connect them, configure hardware, preview generated code, upload to a board, and keep project-level collaboration artifacts.

## When to Use It

- Create an interactive hardware prototype.
- Teach hardware logic without writing the full Arduino sketch by hand.
- Combine sensors, actuators, control flow, and reusable Capsules.
- Ask Project AI to plan or repair a graph, then confirm the staged result.

## Main Node Types

- `Start` begins execution.
- Logic nodes include `if`, `else if`, `else`, `switch`, `case`, `default`, `delay`, and `function`.
- Sense nodes read inputs.
- Act nodes write outputs.
- Capsule nodes expand reusable subgraphs before code generation.

## Operations

1. Use **Home > New Project** or open an existing `.aew`.
2. Press `Cmd+/` for Quick Search.
3. Drag from a node connection point to open the Node Picker.
4. Add Sense, Logic, Act, or Capsule nodes.
5. Connect nodes in execution order.
6. Select each hardware node and assign a port or manual pins.
7. Preview code, verify, upload, and test with the Serial Monitor.

## Smart Recommendations

When you create a connection from an existing node, the Node Picker can recommend likely next nodes. Recommendations are deterministic UI help; they do not change the graph until you choose a node.

## Project AI on the Canvas

Project AI can:

- Answer questions about the graph.
- Use `@` mentions for components by name, ID, or identifier.
- Read image attachments.
- Plan graph edits as structured JSON.
- Stage graph changes for **Keep Graph** or **Discard**.
- Ask Library AI to improve a component when a requested capability is missing and permissions allow.

## Notes

- A project needs a `Start` node before code generation.
- Every Sense/Act node used in code generation needs a hardware configuration.
- Project AI graph edits are staged before they become current canvas state.
- Legacy single-file project JSON can load, but saved projects are `.aew` packages.

## FAQ

**Why did upload fail after the graph looked correct?** Check board selection, serial port, missing dependencies, and per-node hardware config.

**Can I copy nodes between projects?** The canvas supports copy/paste, but saved dependencies and media must still exist in the target project or library.

**Can I use a Capsule as one node?** Yes. Capsule nodes expand during code generation and can pass parameter values.

## Related Pages

- [Hardware and Ports](/features/hardware-and-ports/)
- [Code, Verify, Upload](/features/code-upload/)
- [Project AI](/ai/project-ai/)
- [Capsules](/features/capsules/)
