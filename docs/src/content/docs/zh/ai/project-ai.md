---
title: 项目 AI
description: 使用 Aether Workshop Project AI 规划、解释、修复并暂存图修改。
---

![Aether AI 面板](/assets/screenshots/aether-ai.svg)

## 功能说明

Project AI 在保存的项目中工作。它可以围绕当前图对话、理解被 `@` 提及的组件、使用图片、规划图修改、暂存修改，并在能力缺失时请求组件库 AI 改进组件。

## 适用场景

- 询问当前项目图如何工作。
- 从提示词生成第一版图。
- 修复断开的逻辑或不完整图。
- 用 `@component` 指定组件。
- 附加参考图片说明硬件想法。
- 判断当前组件库是否能实现某个行为。

## 操作步骤

1. 打开项目。
2. 展开 Project AI 面板。
3. 选择已配置的 provider/model。
4. 输入提示词，需要时使用 `@` 提及组件。
5. 查看回复。
6. 如果 AI 暂存图修改，选择 **Keep Graph** 或 **Discard**。
7. 上传前 Verify 生成代码。

## 注意事项

- Project AI 不会静默覆盖图，结构化图修改会先暂存。
- 空提示词加图片会作为普通 AI 对话处理，不会自动执行图命令。
- 锁定内置组件不能被 AI 改写。
- AI 不能替代硬件接线、依赖和编译验证。

## 常见问题

**Project AI 为什么拒绝生成图？** 可能缺少组件能力、检测到不可能的接线，或需要 Library AI 更新组件。

**Project AI 可以改云仓库吗？** 只能通过权限感知的组件库工作流请求修改。Viewer 不能 push。

**AI 会帮我上传代码吗？** 不会。上传始终是用户操作。

## 相关链接

- [AI 设置](/zh/ai/settings/)
- [组件库 AI](/zh/ai/library-ai/)
- [项目画布](/zh/features/project-canvas/)
- [代码、验证与上传](/zh/features/code-upload/)
