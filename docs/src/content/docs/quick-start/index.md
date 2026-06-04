---
title: Quick Start
description: Create a first Aether Workshop project, connect components, verify generated Arduino code, and upload it to a board.
---

## Goal

This guide takes you through the smallest complete loop: create a project, add a Sense component, add logic, add an Act component, assign hardware ports, verify code, and upload.

## Before You Start

- Install Aether Workshop on macOS.
- Prepare an Arduino-compatible board such as Aether Hub, Arduino Uno, Mega 2560, ESP-32, or ESP8266.
- Connect the board by USB and keep sensors/actuators available.
- If this is your first upload, open [Install and Configure](/install-and-configure/) and install Arduino CLI from Settings.

## Create a Project

1. Open Aether Workshop.
2. In **Home**, choose **New Project**.
3. Save the project when prompted. Aether Workshop stores projects as `.aew` packages.
4. Enter the **Project** tab.

## Build the Graph

1. Start from the `Start` node on the canvas.
2. Press `Cmd+/` to open Quick Search, or drag from a node connection point to open the Node Picker.
3. Add a Sense component such as **Light** or **Click**.
4. Add a logic node such as `if`, `else if`, `else`, `switch`, `case`, `default`, `delay`, or `function`.
5. Add an Act component such as **RGB LED**, **Servo**, **Motor**, **Buzzer**, **LED Ring**, or **Serial Output**.
6. Connect the nodes in the order you want the generated Arduino program to run.

## Assign Hardware

1. Select each Sense or Act node.
2. Choose a hardware port in the node or the top toolbar.
3. Use automatic Aether Hub ports when possible.
4. Turn on manual pin mode only when your wiring does not match the standard port map.

See [Hardware and Ports](/features/hardware-and-ports/) for the full mapping.

## Verify and Upload

1. Open **Setting > Hardware** and confirm the Arduino CLI status.
2. Choose the target board.
3. In the Project toolbar, select the serial port.
4. Use **Code Preview** to inspect the generated sketch.
5. Click **Verify** to compile without uploading.
6. Click **Upload** to compile and upload to the connected board.

## What Success Looks Like

- The sketch compiles without missing dependency errors.
- The upload command targets the selected board and port.
- The Arduino serial output starts at `9600` baud and prints a ready message.
- Act components respond according to the graph.

## Common First-Run Problems

**Arduino CLI is missing.** Install it from **Setting > Hardware**. The app downloads the official macOS Arduino CLI binary into Application Support.

**No serial port appears.** Reconnect the board, check the USB cable, and prefer `/dev/cu.*` ports on macOS.

**A component reports missing hardware config.** Select the node and assign a port or manual pins.

**A library is missing.** Open **Setting > Dependence**. Aether Workshop can manage common Arduino libraries and custom source libraries.

## Related Pages

- [Install and Configure](/install-and-configure/)
- [Project Canvas](/features/project-canvas/)
- [Hardware and Ports](/features/hardware-and-ports/)
- [Code, Verify, Upload](/features/code-upload/)
- [Troubleshooting](/reference/troubleshooting/)
