---
title: 组件和 Capsule 历史
description: 理解组件、Capsule、库结构和项目快照的本地与云端历史。
---

![历史模型](/assets/screenshots/git.webp)

## 功能说明

Aether Workshop 为库内容提供类似 Git 的历史模型，但每类历史都有不同作用域。组件和 Capsule 历史跟踪可复用定义；Project History 跟踪 `.aew` 快照；Cloud library commit 跟踪共享 package 结构。

## Component History

组件历史保存组件快照和私有源代码库。来源包括 initial、manual、AI apply、checkout 和 import。

### 提交组件

1. 编辑组件。
2. 确认当前是最新 checkout。
3. 处理远端更新警告。
4. 输入 commit message。
5. 在 History 标签提交。

旧 commit checkout 是只读的。如果想从旧版本继续，创建新组件或从快照复制。

## Capsule History

Capsule 历史按 library scope 和 Capsule ID 保存图快照。来源包括 initial、manual、project promote 和 import。

### 提交 Capsule

1. 编辑内部图、接口、参数、备注或 checklist。
2. 如果接口变化，检查项目使用处。
3. 输入 message。
4. 提交快照。

## Cloud Library Structure History

云端库结构提交记录 package 级变化，例如组件列表、Capsule 列表、分类和依赖结构。结构 push 前，应用会发布必要的组件/Capsule 内容提交。

## Project Change Log 与 History

Project History 单独存在，由 Project Change Log 创建并保存在 `.aew` 中。详见[项目文件与历史](/zh/projects/files-history/)。

## 注意事项

- Owner/Editor 可提交或 push 云端内容。
- Viewer 只读。
- 脏草稿和未处理远端更新会阻止提交。
- 历史系统保护旧快照，不会自动合并。

## 常见问题

**有分支 UI 吗？** 模型接近图结构，但常规用户流程聚焦 latest commit、旧版本只读 checkout，以及从旧快照创建新组件。

**为什么要同时有组件 commit 和库 commit？** 组件 commit 保存内容，库结构 commit 保存组织结构和引用。

**Project History 能恢复组件库吗？** 不能。Project History 只恢复项目快照；库历史管理可复用库内容。

## 相关链接

- [组件库](/zh/features/component-library/)
- [Capsules](/zh/features/capsules/)
- [项目文件与历史](/zh/projects/files-history/)
- [云仓库](/zh/cloud/overview/)
