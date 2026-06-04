---
title: Install and Configure
description: Prepare Aether Workshop, Arduino CLI, boards, dependencies, accounts, cloud settings, and AI providers.
---

## Feature Summary

Installation and configuration prepare the local app for hardware upload, AI-assisted workflows, and cloud libraries. Most setup happens in the **Setting** tab.

## Supported Environment

- macOS app built with SwiftUI.
- macOS 14 or newer is the project minimum in the current Xcode configuration.
- Arduino-compatible boards configured through Arduino CLI.
- Internet access for Arduino platform installs, dependency downloads, cloud login, and AI provider calls.

## Install Aether Workshop

The source project is an Xcode macOS app. For a development build:

1. Open `Aether Workshop.xcodeproj`.
2. Select the **Aether Workshop** scheme.
3. Build and run from Xcode.

For a packaged build, use the release artifact supplied by the project owner. The app uses the bundle identifier `design.chengxin.aether`.

## Install Arduino CLI

1. Open **Setting > Hardware**.
2. Click the Arduino CLI install action.
3. Aether Workshop downloads the official macOS Arduino CLI archive for the current CPU architecture.
4. The executable is placed under `~/Library/Application Support/Aether Workshop/bin/arduino-cli`.
5. The app initializes Arduino CLI config and installs the Arduino AVR platform for Aether Hub.

If installation fails, check macOS security prompts, network access, and the app logs. The installer may surface sandbox or executable validation errors.

## Choose a Target Board

Open **Setting > Hardware** and choose a board:

- Aether Hub, backed by `arduino:avr:nano`.
- Arduino Uno.
- Arduino Mega 2560.
- ESP-32.
- ESP8266.

Board selection controls compile/upload FQBN and default port mappings.

## Configure Dependencies

Open **Setting > Dependence** for:

- Common third-party Arduino libraries such as DHT sensor support, Servo, and Adafruit NeoPixel.
- Built-in support libraries that ship with Aether Workshop.
- Custom source libraries installed into `~/Documents/Arduino/libraries`.
- Component-private source libraries bundled with component definitions.

Delete a dependency only after checking whether components, drafts, or saved libraries still reference it.

## Configure AI Providers

Open **Setting > Aether AI**.

1. Add an API key for OpenAI, Claude, or Kimi.
2. Enable the models you want to show in AI pickers.
3. Choose response language, speed, and reasoning effort.
4. Save settings.

Cloud tokens are stored in Keychain. AI provider keys are currently stored in the app's Application Support settings file, so treat the local macOS account as trusted.

## Sign In for Cloud and Project Collaboration

Cloud libraries, comments, pins, project change logs, and project history actions can require an account identity.

1. Open the account/cloud entry point in the app.
2. Sign in with GitHub or Google.
3. The browser redirects back through `aether-workshop://auth/...`.
4. The app stores the cloud token in Keychain.

The default cloud API base URL is `https://api.chengxin.design`. Advanced users can override it with the `cloudAPIBaseURL` user default.

## Notes

- Do not expose API keys, cloud tokens, or private SSH keys in project files.
- If you use ESP boards, install the matching platform before compiling.
- Aether Workshop can verify code without uploading. Use this before hardware demos.
- The Settings privacy tab exists in code but is hidden in the current UI.

## FAQ

**Can I use the app without AI?** Yes. Leave provider keys empty and use the visual canvas, library editor, code preview, serial monitor, and upload flow manually.

**Can I use the app without cloud?** Yes. Local libraries and `.aew` projects work offline after local dependencies are installed.

**Where are generated sketches stored?** Upload and verify use temporary sketch directories. Saved project content remains in the `.aew` package.

## Related Pages

- [Settings and Environment](/reference/settings-environment/)
- [AI Settings](/ai/settings/)
- [Cloud Libraries](/cloud/overview/)
- [Troubleshooting](/reference/troubleshooting/)
