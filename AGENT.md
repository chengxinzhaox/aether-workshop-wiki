# Aether Workshop Wiki Agent Notes

This repository is a standalone documentation site for Aether Workshop. It should not modify the main Aether Workshop app source.

## Before Editing

- Keep the Wiki content grounded in the current Aether Workshop / MYCO Studio source and project docs.
- If a feature is only present as legacy, hidden, or build-dependent code, document it cautiously.
- Preserve the bilingual structure: update English and Chinese page pairs together when practical.

## Commands

```bash
bun install
bun run docs:build
```

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`. The workflow expects SSH credentials in GitHub secrets and publishes the static build to `wiki.chengxin.design`.

Never print, copy, or commit private SSH keys, cloud tokens, or AI provider keys.
