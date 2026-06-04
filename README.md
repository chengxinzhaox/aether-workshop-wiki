# Aether Workshop Wiki

This repository contains the bilingual product Wiki for Aether Workshop. It is built with Astro Starlight and the `lucode-starlight` theme template.

Live site: <https://wiki.chengxin.design>

## Structure

```txt
.
├─ docs/                         # Astro Starlight documentation site
│  ├─ src/content/docs/           # English and Chinese Wiki pages
│  ├─ public/assets/              # App logo, screenshots, fonts, diagrams
│  └─ astro.config.mjs            # Starlight + lucode theme config
├─ packages/lucode-starlight/     # Vendored template theme package
└─ .github/workflows/deploy.yml   # Build and SSH deploy workflow
```

## Local Development

```bash
bun install
bun run dev
```

Build:

```bash
bun run docs:build
```

Preview the production build:

```bash
bun run preview -- --host 127.0.0.1 --port 4321
```

## Content Model

English pages live at `docs/src/content/docs/`.

Chinese pages live at `docs/src/content/docs/zh/`.

When a product feature changes, update the English and Chinese page pair in the same pull request where possible.

## Deployment

The GitHub Actions workflow builds the site on each push to `main`, updates a server-side source checkout, and syncs `docs/dist/` to the web root.

Required repository secrets:

- `DEPLOY_USER`: SSH username for the server.
- `DEPLOY_SSH_KEY`: private key used by GitHub Actions for deployment.

Optional repository secret:

- `DEPLOY_PORT`: SSH port. Defaults to `22`.

Optional repository variables:

- `DEPLOY_HOST`: defaults to `wiki.chengxin.design`.
- `DEPLOY_PATH`: server source checkout, defaults to `/www/wwwroot/aether-workshop-wiki-source`.
- `DEPLOY_WEB_ROOT`: static site root, defaults to `/www/wwwroot/wiki.chengxin.design`.

Do not commit private keys or API credentials.
