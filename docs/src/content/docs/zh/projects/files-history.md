---
title: 项目文件与历史
description: 理解 .aew 包、评论、Pin、Change Log、History 快照和媒体保留机制。
---

## 功能说明

Aether Workshop 把项目保存为 `.aew` 包目录。项目可以包含图状态、生成 sketch、库、媒体、AI 附件、评论、Pin、Change Log 和 History 快照。

## .aew 包内容

一个项目包可以包含：

- `config.json`：项目文档数据。
- `sketch.ino`：生成的 Arduino sketch。
- `libraries/`：项目内库。
- `media/`：项目媒体资源。
- `ai_attachments/`：项目 AI 附件。

旧版单 JSON 项目可以加载，但当前保存使用包格式。

## 项目协作内容

以下内容保存在 `.aew` 文件中，不是实时云协作：

- 锚定到画布位置或节点的评论。
- 评论回复、solve、delete 和 undo。
- Pin board 笔记。
- Project Change Log。
- Project History 快照。

部分操作需要登录账号，以便记录作者身份。

## Change Log 操作步骤

1. 打开 Project 工具栏中的 Change Log。
2. 生成预览。
3. 检查 Nodes、Logic、Connections、Hardware、Capsules、Layout、Comments、Pins 等分组。
4. 删除不需要发布的条目。
5. 添加描述。
6. 发布。

发布会创建 Change Log 和 Project History 快照。如果项目尚未保存，应用会要求选择保存位置。

## History 操作步骤

1. 打开 Project History。
2. 选择快照。
3. 点击 **Check** 进入快照模式查看画布。
4. 点击 **Discard** 返回当前项目，或点击 **Save Latest** 把该快照设为最新 head。

快照包含图、画布、硬件、自定义库、媒体引用、Project AI 对话、Capsule override、评论和 Pin，不会嵌套复制所有历史。

## 注意事项

- Change Log 比较会忽略 pan 和 zoom。
- 节点位置变化归为 Layout。
- Project history 保存在 `.aew` 包内。
- Cloud library history 与 Project history 是不同系统。

## 常见问题

**Project History 是 Git 吗？** 不是。它是应用内项目快照系统。

**评论能实时同步吗？** 当前不能。评论随项目文件保存。

**旧快照的媒体会丢吗？** 如果媒体被快照引用，包内保留逻辑会保留它。

## 相关链接

- [云仓库](/zh/cloud/overview/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [项目画布](/zh/features/project-canvas/)
- [故障排查](/zh/reference/troubleshooting/)
