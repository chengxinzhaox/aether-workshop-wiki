---
title: 故障排查
description: 排查 Aether Workshop 设置、项目、上传、云端、AI 和历史相关常见问题。
---

## Arduino CLI 缺失

打开 **Setting > Hardware** 安装 Arduino CLI。失败时检查网络、macOS 执行权限和应用日志。应用会把二进制文件保存到 Application Support。

## 编译失败

检查：

- 项目是否有 `Start` 节点。
- 所有 Sense/Act 节点是否有硬件配置。
- 目标开发板平台是否已安装。
- 必要 Arduino 库是否已安装。
- 组件代码块是否引用了存在的变量和 UI element ID。
- Capsule 接口是否正确绑定。

## 上传失败

检查：

- 是否选择正确串口。
- 串口监视器或其他应用是否占用串口。
- USB 线是否支持数据。
- 目标开发板是否匹配真实硬件。
- 开发板 driver 或 platform 是否安装。

## 串口无输出

检查波特率 `9600`、串口选择、开发板是否 reset、上传代码是否有输出。可以用最小图或 Serial Output 组件测试。

## AI 模型不显示

检查 provider key、模型启用状态、provider 兼容性和网络。回复语言和 reasoning 设置不会让没有 key 的模型显示出来。

## AI 图修改不对

Discard 暂存图，要求更小的修改，用 `@` 提及明确组件，或附加截图/图片。AI 图修改只有 Keep Graph 后才成为当前图。

## 云 Push 被阻止

常见原因：

- 当前是 Viewer。
- Commit message 为空。
- 有未处理远端更新。
- 组件或 Capsule 有脏草稿但没有提交版本。
- 本地受保护草稿需要先处理。

## Pull 被阻止

远端更新不会自动覆盖受保护本地草稿。Pull 前请提交、丢弃、导出或保存本地工作。

## Project History 恢复不清楚

先用 **Check** 进入快照模式检查。**Discard** 退出快照模式；**Save Latest** 把该快照设为当前项目 head。

## 媒体缺失

检查媒体是否保存在 `.aew/media` 中，以及旧快照是否仍引用它。不要手动删除包内部文件。

## 相关链接

- [快速开始](/zh/quick-start/)
- [代码、验证与上传](/zh/features/code-upload/)
- [云仓库](/zh/cloud/overview/)
- [AI 设置](/zh/ai/settings/)
