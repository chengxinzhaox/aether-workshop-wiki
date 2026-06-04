---
title: Settings and Environment
description: Reference for local paths, app settings, boards, Arduino CLI, cloud API, AI providers, and environment-style overrides.
---

## Local Paths

| Purpose | Location |
| --- | --- |
| Arduino CLI binary | `~/Library/Application Support/Aether Workshop/bin/arduino-cli` |
| AI settings | `~/Library/Application Support/Aether Workshop/ai_settings.json` |
| Local custom Arduino libraries | `~/Documents/Arduino/libraries` |
| Cloud token storage | macOS Keychain service `design.chengxin.aether.cloud` |
| Project package | User-chosen `.aew` directory package |

## Settings Tabs

- **Hardware**: Arduino CLI, board target, board platforms.
- **Mapping**: hardware mapping and board-port behavior.
- **Dependence**: external Arduino libraries, built-in source libraries, custom source libraries.
- **Aether AI**: provider keys, enabled models, language, speed, reasoning effort.

## Board Targets

- Aether Hub.
- Arduino Uno.
- Arduino Mega 2560.
- ESP-32.
- ESP8266.

## Cloud API

Default base URL: `https://api.chengxin.design`.

Advanced override: set the `cloudAPIBaseURL` user default for the app. Use this only for development, staging, or a private API host.

## Security Notes

- Do not commit `.aew` packages that contain private media or AI attachments unless that is intentional.
- Do not share AI settings files.
- Cloud auth tokens are in Keychain; AI provider keys are in local settings.
- Keep cloud roles tight: Owner for administrators, Editor for maintainers, Viewer for consumers.

## Related Pages

- [Install and Configure](/install-and-configure/)
- [AI Settings](/ai/settings/)
- [Cloud Libraries](/cloud/overview/)
- [Troubleshooting](/reference/troubleshooting/)
