---
title: 项目画布
description: 使用 Aether Workshop 可视化画布，通过节点、连线、逻辑、组件和 Capsule 设计硬件行为。
---

## 功能说明

Project 画布是搭建硬件行为的主工作区。你可以排列节点、连接逻辑、配置硬件、预览代码、上传到开发板，并保存项目级评论、Pin、Change Log 和 History。

## 适用场景

- 创建交互式硬件原型。
- 在课堂中用节点解释硬件逻辑。
- 组合传感器、执行器、控制流和 Capsule。
- 让 Project AI 规划或修复图，再由用户确认。

## 主要节点类型

- `Start`：执行入口。
- 逻辑节点：`if`、`else if`、`else`、`switch`、`case`、`default`、`delay`、`function`。
- Sense 节点：读取输入。
- Act 节点：输出动作。
- Capsule 节点：生成代码前展开为内部图。

## 操作步骤

1. 从 **Home > New Project** 新建项目，或打开已有 `.aew`。
2. 按 `Cmd+/` 打开快速搜索。
3. 从节点连接点拖出打开 Node Picker。
4. 添加 Sense、Logic、Act 或 Capsule 节点。
5. 按执行顺序连接。
6. 为硬件节点配置端口或手动引脚。
7. 预览代码、Verify、Upload，并用串口监视器测试。

## 注意事项

- 生成代码需要 `Start` 节点。
- 每个参与生成的 Sense/Act 节点都需要硬件配置。
- Project AI 的图修改会先暂存。
- 旧版单 JSON 项目可以加载，但当前保存格式是 `.aew` 包。

## 常见问题

**图看起来没问题但上传失败？** 检查开发板、串口、依赖和节点硬件配置。

**可以跨项目复制节点吗？** 画布支持复制粘贴，但目标项目仍需要对应依赖和媒体资源。

**Capsule 能像普通节点一样使用吗？** 可以。Capsule 在代码生成阶段展开。

## 相关链接

- [硬件与端口](/zh/features/hardware-and-ports/)
- [代码、验证与上传](/zh/features/code-upload/)
- [项目 AI](/zh/ai/project-ai/)
- [Capsules](/zh/features/capsules/)
