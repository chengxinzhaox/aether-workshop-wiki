---
title: 工作流教程
description: 面向原型、课堂、AI 组件生成和云仓库维护的 Aether Workshop 实用流程。
---

## 工作流 1：光线触发输出

适合第一节课或第一次演示。

1. 新建项目。
2. 添加 **Light** Sense。
3. 添加 `if`。
4. 添加 **RGB LED** 或 **LED Ring** Act。
5. 连接 `Start -> Light -> if -> Act`。
6. 配置端口。
7. Verify。
8. Upload 并调整阈值。

最佳实践：第一张图保持小而清楚，硬件工作后发布一个 Change Log。

## 工作流 2：自定义传感器组件

适合默认库没有对应硬件时使用。

1. 打开 **Library**。
2. 创建 Sense 组件。
3. 添加引脚要求和兼容端口。
4. 添加外部库或源代码库依赖。
5. 编写 read 代码块。
6. 添加 notes 和 AI Profile。
7. 在项目中测试。
8. 提交组件历史。
9. 如果是云仓库，push。

## 工作流 3：可复用 Capsule

适合重复行为。

1. 先在普通项目图里搭建行为。
2. 把重复逻辑整理进 Capsule。
3. 暴露输入/输出接口。
4. 把固定值转为参数。
5. 在项目中作为 Capsule 节点测试。
6. 提交 Capsule 历史。

## 工作流 4：AI 辅助项目草稿

适合快速探索想法。

1. 配置 AI provider。
2. 在 Project AI 中描述行为。
3. 用 `@` 提及明确组件。
4. 审查暂存图修改。
5. 确认节点选择后 Keep Graph。
6. 手动配置硬件、Verify 和 Upload。

## 工作流 5：云仓库发布

适合发布团队共享组件或 Capsule。

1. Pull 远端更新。
2. 处理本地草稿。
3. 提交每个变更组件/Capsule。
4. 写库结构 commit message。
5. Push。
6. 根据需要邀请 Viewer 或 Editor。

最佳实践：课堂或普通使用者用 Viewer；维护者才给 Editor。

## 相关链接

- [快速开始](/zh/quick-start/)
- [项目画布](/zh/features/project-canvas/)
- [组件库 AI](/zh/ai/library-ai/)
- [云仓库](/zh/cloud/overview/)
