---
title: 云仓库
description: 创建、配置、push、pull、邀请、管理和移除 Aether Workshop 云仓库。
---

![云端系统](/assets/screenshots/cloud-system.webp)

## 功能说明

云仓库让团队共享组件库、Capsule、依赖、组件历史、Capsule 历史和库结构提交。

## 适用场景

- 在多台电脑之间共享库。
- 给课堂或团队提供统一硬件组件集。
- 版本化组件和 Capsule。
- 邀请 Owner、Editor 或 Viewer。
- 明确 pull 远端更新，保护本地草稿。

## 创建云仓库

1. 用 GitHub 或 Google 登录。
2. 打开库/云端管理入口。
3. 选择一个本地库作为 seed。
4. 创建 cloud package。
5. 发布当前组件和 Capsule commit。
6. push 初始库结构 commit。

本地库会保留，并和远端 package 关联。

## 角色

| Role | 权限 |
| --- | --- |
| Owner | 管理成员、push、pull、删除云端版本、创建邀请链接。 |
| Editor | push 和 pull 库变更。 |
| Viewer | pull 和查看共享内容。 |

Owner 可以创建 48 小时有效的 Editor 或 Viewer 邀请链接。

## Push 操作步骤

1. 先提交有变更的组件或 Capsule。
2. 处理远端更新。
3. 填写库结构 commit message。
4. Push。

如果组件或 Capsule 内容 commit 缺失，应用会阻止结构提交。

## Pull 更新

远端更新需要显式 pull。应用会在启动、进入库/历史视图、刷新或可见状态变化时检查更新，但不会自动覆盖本地受保护草稿。

## 导入导出

库可以导出为 `.aetherlib` JSON 包。v2 schema 包含 componentLibrary、capsuleLibrary、dependencies、component history graphs 和 Capsule history graphs。

## 注意事项

- 默认 API 为 `https://api.chengxin.design`。
- 云登录通过浏览器和 `aether-workshop://auth/...` 回调。
- Token 存储在 Keychain。
- 云 package 不是项目 `.aew` 文件。

## 常见问题

**为什么不能 push？** 可能是 Viewer、提交信息为空、存在未处理远端更新，或组件/Capsule 版本还没提交。

**云端会自动合并本地草稿吗？** 不会。远端更新需要显式处理，本地受保护草稿会阻止 pull。

**可以把共享组件导入另一个库吗？** 可以。组件分享支持覆盖或复制处理冲突。

## 相关链接

- [组件库](/zh/features/component-library/)
- [Capsules](/zh/features/capsules/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [设置与环境变量](/zh/reference/settings-environment/)
