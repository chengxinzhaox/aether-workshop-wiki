---
title: Hardware and Ports
description: Configure Aether Hub ports, board mappings, manual pins, and hardware configs for Sense and Act nodes.
---

## Feature Summary

Hardware configuration maps visual nodes to physical board pins. Aether Workshop supports standard port mappings for Aether Hub and board-specific mappings, plus manual analog/digital pin assignments.

![Aether Hub port map](/assets/aether-hub-port-map.svg)

## When to Use It

- Assign a sensor or actuator to a physical connector.
- Switch between Aether Hub, Arduino, ESP-32, or ESP8266 targets.
- Override automatic ports for custom wiring.
- Diagnose compile or runtime behavior caused by pin mismatches.

## Standard Ports

Aether Hub and Arduino AVR defaults:

| Port | Pins |
| --- | --- |
| PORT 1 | 2, 3 |
| PORT 2 | 4, 5 |
| PORT 3 | 6, 7 |
| PORT 4 | 8, 9 |
| PORT 5 | 10, 11 |
| PORT 6 | 12, 13 |

ESP32 defaults:

| Port | Pins |
| --- | --- |
| PORT 1 | 22, 23 |
| PORT 2 | 21, 19 |
| PORT 3 | 17, 16 |
| PORT 4 | 34, 35 |
| PORT 5 | 32, 33 |
| PORT 6 | 25, 26 |

## Configure a Node

1. Select a Sense or Act node.
2. Choose an available standard port.
3. If the wiring is custom, switch to manual pin mode.
4. Choose analog pins such as `A0` through `A6`, or digital pins such as `D2` through `D12`.
5. Verify generated code before uploading.

## Sense and Act Differences

Sense inputs are configured independently. Act outputs are deduplicated by component type in the hardware config store so repeated output components can share or reuse output configuration patterns.

## Notes

- Manual digital pins are displayed as `D2`, `D3`, and so on, but code generation normalizes them to numeric Arduino pins.
- Some sensors require multiple pins or dependencies. Check the component's pin requirements and dependency tab.
- The source currently notes a maintenance issue where output config creation receives a node ID but does not persist it. Treat node-level output wiring carefully when using repeated output components of the same type.

## FAQ

**Can I change the board after building the graph?** Yes, but re-check port mappings because default pins can change by board.

**Why is a port unavailable?** Another component may already use it, or the component may only be compatible with certain port shapes.

**Should I use manual pins for Aether Hub?** Prefer standard ports. Use manual pins for custom boards, prototypes, or unusual wiring.

## Related Pages

- [Install and Configure](/install-and-configure/)
- [Code, Verify, Upload](/features/code-upload/)
- [Troubleshooting](/reference/troubleshooting/)
