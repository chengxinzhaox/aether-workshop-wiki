---
title: AI Settings
description: Configure OpenAI, Claude, Kimi, model visibility, response language, speed, and reasoning effort.
---

## Feature Summary

The **Setting > Aether AI** page controls which AI providers and models are available to Project AI and Library AI.

## Providers

The source supports provider configurations for:

- OpenAI.
- Claude.
- Kimi.

Provider endpoints have defaults. Advanced builds can customize provider/model records through the app settings model.

## Configure AI

1. Open **Setting > Aether AI**.
2. Add the provider API key.
3. Enable only the models you want to appear.
4. Choose response language.
5. Set speed and reasoning effort.
6. Return to Project AI or Library AI and select the model.

Only enabled models with a configured key appear in pickers.

## Data and Storage

- Cloud login tokens are stored in macOS Keychain.
- AI provider keys are currently stored in an Application Support JSON settings file.
- Project AI conversations are saved in the `.aew` project.
- Library AI conversations are saved in Application Support.

## Notes

- Treat provider keys as local secrets.
- Disable unused models to reduce accidental selection.
- Choose Simplified Chinese or English response language depending on the team.
- AI settings do not install Arduino dependencies or board platforms.

## FAQ

**Why is a model missing?** It may be disabled, unsupported by the selected provider, or missing an API key.

**Can I use a custom model name?** The settings model includes custom model support. Verify compatibility with the provider endpoint before relying on it.

**Are keys encrypted like cloud tokens?** Cloud tokens use Keychain. AI provider keys are currently stored in app settings, so protect the macOS account and backups.

## Related Pages

- [Project AI](/ai/project-ai/)
- [Library AI](/ai/library-ai/)
- [Settings and Environment](/reference/settings-environment/)
