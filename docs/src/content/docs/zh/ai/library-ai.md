---
title: 组件库 AI
description: 使用 Library AI 创建和修改组件、依赖、源代码库、UI 元素和 AI Profile。
---

![Library AI 工作流](/assets/screenshots/AI.webp)

## 功能说明

Library AI 帮助创建和修改组件定义。它可以使用文字、粘贴图片、拖入图片、依赖需求和现有组件上下文。

## 适用场景

- 创建新的硬件组件。
- 修改组件代码块或 UI Elements。
- 规划外部 Arduino 库依赖。
- 生成内部源代码库。
- 添加 AI Profile，让 Project AI 理解组件能力。
- 在提交历史前审查组件行为。

## 操作步骤

1. 打开 **Library**。
2. 选择目标库作用域。
3. 打开 Library AI 面板。
4. 描述硬件、引脚、预期行为、依赖和 UI 控件。
5. 需要时附加图片。
6. 审查字段、依赖、代码块和 UI 元素。
7. 在项目中用 Code Preview 和 Verify 测试。
8. 提交组件历史。

## AI 流程

源码中显示 Library AI 采用多阶段流程，包括协调、创建/修改、依赖规划、依赖实现、源代码库设计/代码、组件集成、UI 元素、审查、修复、AI Profile 和总结标题等步骤。实际可见文案可能随版本变化。

## 注意事项

- AI 编辑会保护组件 ID、component identifier 和 component kind。
- 校验器会检查 UI 引用、依赖引用和代码变量。
- 锁定内置组件不能修改。
- 生成的源代码库应像普通代码一样审查。

## 常见问题

**Library AI 能添加第三方 Arduino 库吗？** 它可以规划和引用依赖；仍需要确认依赖可用并已安装。

**为什么 AI 创建了私有源代码库？** 它可能把可复用 helper 代码拆出去，让组件代码块更清晰。

**Viewer 能在云仓库上使用 Library AI 吗？** 可以查看，但不能 push 或提交共享修改。

## 相关链接

- [组件库](/zh/features/component-library/)
- [AI 设置](/zh/ai/settings/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [故障排查](/zh/reference/troubleshooting/)
