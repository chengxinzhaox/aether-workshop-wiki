---
title: 界面总览
description: 认识 Aether Workshop 的主标签、面板、工具栏和项目工作区。
---

![Aether Workshop 主工作区](/assets/screenshots/aether-main-workspace.webp)

## 主标签

Aether Workshop 当前可见的主入口有五个：

- **Home**：新建项目、打开项目、查看最近项目。
- **Project**：在无限画布上搭建硬件行为。
- **Library**：查看、编辑、创建和版本化 Sense/Act 组件。
- **Capsules**：管理可复用图结构、接口和参数。
- **Setting**：配置 Arduino CLI、开发板、依赖、硬件映射和 AI。

Tutorial 和 News 在模型中存在，但当前可见标签集中未启用。

## Project 工具栏

Project 顶部工具栏包含：

- 项目文件名和保存状态。
- 评论、Pin board、Change Log、History。
- 缩放控制。
- 端口和手动引脚控制。
- 串口监视器。
- 代码预览。
- 串口选择。
- Verify 和 Upload。
- AI 面板开关。

## 画布交互

Project 画布支持平移、缩放、选择、复制粘贴、撤销重做、节点移动和正交连线。从连接点拖出可以打开 Node Picker，并显示推荐节点。`Cmd+/` 打开快速搜索。

## 右侧 AI 面板

Project AI 面板可以调整宽度或折叠。项目 AI 会把对话保存在 `.aew` 项目中。它可用于图规划、解释、修复和组件建议；图修改会先暂存，用户选择 **Keep Graph** 后才生效。

## Library 编辑器

Library 标签页包含左侧组件列表、中间编辑器、右侧预览或 Library AI。

- Sense 组件有 Basic、Dependence、Code Blocks、History。
- Act 组件额外有 UI Elements。
- random、serial 相关工具组件等内置锁定组件只读。

## Capsules 编辑器

Capsules 用于维护可复用图。编辑器关注内部节点、暴露的输入/输出接口、参数、备注、检查列表、项目覆盖和版本历史。

## Setting 标签页

Setting 包含 Hardware、Mapping、Dependence 和 Aether AI。源码中还有隐藏的 Privacy 标签页和相机相关代码，但当前 UI 不显示。

## 相关链接

- [项目画布](/zh/features/project-canvas/)
- [组件库](/zh/features/component-library/)
- [Capsules](/zh/features/capsules/)
- [设置与环境变量](/zh/reference/settings-environment/)
