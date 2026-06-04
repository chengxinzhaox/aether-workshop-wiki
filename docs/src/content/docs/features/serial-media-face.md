---
title: Serial, Media, Face Detection
description: Use the serial monitor, serial-triggered media playback, and understand the status of camera/face modules.
---

## Feature Summary

Aether Workshop includes a serial monitor for board communication. It also includes media-player and face-detection services in the app code. The serial monitor is a current Project workflow. Media and face-related features are more conditional: some modules exist, while related default components are not currently visible in the standard library.

## Serial Monitor

Use Serial Monitor when you need to:

- View board logs.
- Send simple commands.
- Check generated `Serial.print` output.
- Observe media trigger messages.

### Steps

1. Connect the board.
2. Select the serial port in the Project toolbar.
3. Open **Serial Monitor**.
4. Confirm baud rate `9600`.
5. Use pause, clear, auto-scroll, and send controls as needed.

The monitor keeps a bounded log so very long sessions remain responsive.

## Media Playback

The project package can store media under `.aew/media`. Media-related code can print `MEDIA:<id>` over serial, and the Mac-side media player can react by playing the matching asset.

### Steps

1. Add media to the project where supported.
2. Configure the graph or component code to emit the media trigger.
3. Upload and run the sketch.
4. Open the media player window.
5. Keep Serial Monitor or media playback connected to the correct board port.

## Face Detection Status

The codebase includes AVFoundation and Vision-based face detection, plus optional Core ML emotion model fallback. Current default component registry entries for face/expression are marked legacy or not exposed in the visible default library. Treat camera and face flows as advanced or experimental unless your build enables matching components.

## Notes

- Only one process can usually own a serial port at a time.
- Camera features may require macOS privacy permission even when the Settings privacy tab is hidden.
- Media and face behaviors should be tested with the exact app build you are using because visibility depends on current registry configuration.

## FAQ

**Serial Monitor shows nothing.** Confirm upload succeeded, the board is running, baud rate is `9600`, and the selected serial port matches the board.

**Can I document face detection as a normal feature?** Not for the current default UI. Document it as legacy, hidden, or build-dependent unless enabled components are present.

**Where is media stored?** Media referenced by a saved project is kept inside the `.aew` package and also preserved by project history snapshots when referenced.

## Related Pages

- [Code, Verify, Upload](/features/code-upload/)
- [Project Files and History](/projects/files-history/)
- [Troubleshooting](/reference/troubleshooting/)
