---
title: Cloud Libraries
description: Create, configure, push, pull, invite, manage, and remove Aether Workshop cloud libraries.
---

![Cloud system](/assets/screenshots/cloud-system.webp)

## Feature Summary

Cloud libraries let teams share component libraries, Capsule libraries, dependencies, component history, Capsule history, and library structure commits through the Aether cloud API.

## When to Use It

- Share a library across machines.
- Let teammates use a curated hardware component set.
- Version components and Capsules in a shared package.
- Invite collaborators as Owner, Editor, or Viewer.
- Keep local work while pulling remote updates deliberately.

## Create a Cloud Library

1. Sign in with GitHub or Google.
2. Open the library/cloud management area.
3. Choose a local library as the seed.
4. Create a cloud package.
5. Publish current component and Capsule commits.
6. Push the initial library structure commit.

The local library remains available and becomes linked to the remote package.

## Roles

| Role | Capabilities |
| --- | --- |
| Owner | Manage members, push, pull, delete cloud version, create invite links. |
| Editor | Push and pull library changes. |
| Viewer | Pull and inspect shared content. |

Owners can create 48-hour invite links for Editor or Viewer access.

## Push Changes

1. Commit dirty component or Capsule versions first.
2. Resolve remote updates.
3. Add a structure commit message.
4. Push.

The app blocks structure commits when required component/Capsule content commits are missing.

## Pull Updates

Remote updates are explicit. The app checks for updates on startup, entering cloud/library/history views, refresh, and visible-state changes, but it does not silently overwrite local protected drafts. Pull only after reviewing local changes.

## Export and Import

Libraries can be packaged as `.aetherlib` JSON packages. Package schema v2 includes component library data, Capsule library data, dependencies, component history graphs, and Capsule history graphs.

## Remove or Leave

- Owners can delete the cloud version.
- Non-owners can leave.
- Both flows keep the local copy.

## Notes

- Default API base URL is `https://api.chengxin.design`.
- Cloud auth uses browser login and the `aether-workshop://auth/...` callback.
- Tokens are stored in Keychain.
- Cloud packages are not the same as project `.aew` files.

## FAQ

**Why can I not push?** You may be a Viewer, have an empty commit message, have unhandled remote updates, or need to commit component/Capsule versions first.

**Does cloud automatically merge local drafts?** No. Remote updates are explicit and protected drafts can block pull.

**Can I import a shared component into another library?** Yes. Component sharing supports import with overwrite or duplicate conflict handling.

## Related Pages

- [Component Library](/features/component-library/)
- [Capsules](/features/capsules/)
- [Component and Capsule History](/cloud/history/)
- [Settings and Environment](/reference/settings-environment/)
