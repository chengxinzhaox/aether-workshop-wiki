---
title: Capsules
description: 把可复用节点图封装成 Capsule，暴露接口，传入参数，并管理 Capsule 历史。
---

## 功能说明

Capsule 可以把一组节点图封装成可复用节点。它可以暴露输入/输出接口、定义参数绑定、保存说明和检查列表，并在代码生成阶段展开为内部图。

## 适用场景

- 复用重复行为，例如“读取距离、判断阈值、移动舵机”。
- 缩小项目画布，把实现细节封装起来。
- 在多个项目或云端库中共享工作流模式。
- 在项目中临时修改 Capsule，而不改变库中的基础版本。

## 创建 Capsule

1. 打开 **Capsules**。
2. 在当前库作用域中新建 Capsule。
3. 搭建内部图。
4. 暴露输入和输出接口端口。
5. 为项目用户需要修改的值添加参数。
6. 添加说明、备注或 checklist。
7. 完成后提交 Capsule 历史。

## 在项目中使用

1. 打开 Project 画布。
2. 通过快速搜索或 Node Picker 添加 Capsule 节点。
3. 选择 Capsule。
4. 设置参数值。
5. 像普通节点一样连接。
6. Verify 生成代码。

生成代码时，Aether Workshop 会展开 Capsule。嵌套展开有深度限制，并会检测递归或断开的绑定。

## Project Override

项目中的 Capsule 实例可以保存项目级覆盖。它会在 `.aew` 中保存 pinned commit、嵌入快照、参数值、内部节点、边和硬件配置。**Save to Project** 只修改项目，不修改库基础 Capsule。

如果项目修改应该成为共享版本，并且当前角色有权限，可以 **Promote to Library**。

## 注意事项

- 接口端口使用稳定 key，避免项目绑定丢失。
- 修改接口后要重新检查项目中的 Capsule 节点。
- 重复 Capsule 实例中的 Act 组件会在需要时生成唯一 identifier。
- 旧版本 checkout 是只读的。

## 常见问题

**Capsule 和组件一样吗？** 不一样。组件定义硬件和代码；Capsule 封装图。

**项目可以单独改共享 Capsule 吗？** 可以，保存为项目覆盖；需要共享时再 promote 到库。

**AI 可以创建 Capsule 吗？** 当前 AI 主要覆盖项目图规划和组件库编辑。即便由 AI 辅助图修改，Capsule 创建仍建议人工审核。

## 相关链接

- [项目画布](/zh/features/project-canvas/)
- [代码、验证与上传](/zh/features/code-upload/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [云仓库](/zh/cloud/overview/)
