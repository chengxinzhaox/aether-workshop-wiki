---
title: Capsules
description: Package reusable node graphs as Capsules, expose interfaces, pass parameters, and manage Capsule history.
---

## Feature Summary

Capsules let you package a graph into a reusable node. A Capsule can expose input/output ports, define parameter bindings, keep notes and checklists, and expand into its internal graph during code generation.

## When to Use It

- Reuse a repeated behavior such as "read distance, decide threshold, move servo".
- Keep a project canvas smaller by hiding implementation details.
- Share a workflow pattern across projects or a cloud library.
- Let a project customize a Capsule without changing the library base.

## Create a Capsule

1. Open **Capsules**.
2. Create a new Capsule in the active library scope.
3. Build the internal graph with normal nodes.
4. Expose input and output interface ports.
5. Add parameters for values that project users should configure.
6. Add notes, explanation, or checklist items.
7. Commit a Capsule history version when ready.

## Use a Capsule in a Project

1. Open the Project canvas.
2. Add a Capsule node through Quick Search or Node Picker.
3. Choose the Capsule.
4. Set parameter values on the node.
5. Connect it like any other node.
6. Verify generated code.

During code generation, Aether Workshop expands the Capsule into its internal graph. It supports nested expansion with protection against recursion and broken bindings.

## Project Overrides

A Capsule instance can be saved as a project override. This stores a pinned local or remote commit, embedded snapshot, parameter values, internal nodes, edges, and hardware configuration in the `.aew` project. **Save to Project** affects only the project, not the base library Capsule.

Use **Promote to Library** when the project change should become a shared library version and your role allows it.

## Capsule History

Capsule history stores snapshots by library scope and Capsule ID. Sources include initial creation, manual commits, project promotion, and imports. Old checkouts are read-only. Create a new Capsule or promote a project edit if you need to continue from an old state.

## Notes

- Interface ports use stable keys so existing project nodes can keep bindings.
- Capsule expansion has a maximum depth to avoid runaway recursion.
- Act components inside repeated Capsule instances receive unique identifiers when needed.
- Missing interface bindings can break code generation, so verify after editing a Capsule interface.

## FAQ

**Is a Capsule the same as a component?** No. A component maps hardware and code. A Capsule packages a graph that can include many components and logic nodes.

**Can a project customize a shared Capsule?** Yes. Save a project override for local customization, or promote to the library for shared changes.

**Can AI create Capsules?** The current AI workflows mainly focus on project graph planning and component/library editing. Capsule creation should be reviewed manually even if graph edits are AI-assisted.

## Related Pages

- [Project Canvas](/features/project-canvas/)
- [Code, Verify, Upload](/features/code-upload/)
- [Component and Capsule History](/cloud/history/)
- [Cloud Libraries](/cloud/overview/)
