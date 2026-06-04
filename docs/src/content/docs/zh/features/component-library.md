---
title: 组件库
description: 在 Aether Workshop 中创建、编辑、预览、版本化和打包 Sense/Act 组件。
---

![Aether Workshop 组件库](/assets/screenshots/aether-library.svg)

## 功能说明

Library 标签页管理组件定义。组件描述硬件在画布上的显示方式、需要的引脚、生成的 Arduino 代码、依赖库和 AI 理解方式。

## 适用场景

- 查看内置 Sense/Act 组件。
- 为新硬件创建自定义组件。
- 给 Act 节点添加 UI 控件。
- 添加第三方库或私有源代码库。
- 在共享或推送前提交组件版本。
- 使用 Library AI 从文字或图片生成组件。

## 默认可见组件

Sense 示例：temperature、humidity、gas、sound、light、infrared input、fire、water level、magnetism、move、pressure、twist、distance、click、sloping、gesture、random、serial input。

Act 示例：LED ring、LED strip、RGB LED、laser、infrared transmitter、buzzer、motor、servo、serial output、serial JSON。

face、expression、media player 相关模块在代码中存在，但当前默认组件库中不是可见主入口，文档中按遗留或条件功能处理。

## 操作步骤

1. 打开 **Library**。
2. 选择 Sense 或 Act。
3. 选择分类和组件。
4. 编辑 Basic 字段，例如名称、图标、颜色、分类、备注和 identifier。
5. 在 Dependence 中配置外部库或源代码库。
6. 编辑 Code Blocks。
7. Act 组件可配置 UI Elements。
8. 检查 Preview。
9. 准备好后提交组件历史。

## 锁定内置组件

random 和 serial 工具类等部分组件是只读的，不能重命名、复制、删除、排序或由 AI 修改。如果需要变体，请创建新的自定义组件。

## 注意事项

- 组件 ID 推荐小写 snake_case。
- UI element 模板 ID 必须和代码块引用一致。
- 私有源代码库会跟随组件历史和云端组件提交。
- AI 编辑会保护 ID、component identifier 和 component kind。

## 常见问题

**为什么 Commit 按钮不可用？** 可能组件没有变更、提交信息为空、当前不是最新 checkout、存在未处理远端更新，或云端权限不足。

**Library AI 能添加依赖吗？** 它可以规划依赖并创建/修改内部源代码库，但仍需要人工检查生成代码和依赖安装状态。

**Act 组件可以有节点控件吗？** 可以。Act 组件的 UI Elements 可以注入代码模板。

## 相关链接

- [组件库 AI](/zh/ai/library-ai/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [设置与环境变量](/zh/reference/settings-environment/)
- [云仓库](/zh/cloud/overview/)
