---
title: 进阶用户说明
description: 源码构建、项目格式、组件 schema、代码生成和云 package 维护说明。
---

## 源码构建

应用是 Xcode macOS 项目：

- Project：`Aether Workshop.xcodeproj`。
- Scheme：`Aether Workshop`。
- Bundle identifier：`design.chengxin.aether`。
- 当前最低 macOS：14。
- 外部 Swift package：ORSSerialPort。

修改主应用前，需要阅读主项目的 `AGENT.md`、`DEVELOPMENT.md` 和 `DESIGN.md`。

## 项目格式

`.aew` 包包含 `config.json`，也可能包含生成 sketch、libraries、media 和 AI attachments。文档模型保存 nodes、edges、canvas、hardware configs、custom libraries、media files、Project AI conversations、Capsule overrides、comments、pins、change logs 和 history snapshots。

## Library Package

`.aetherlib` 使用 schema version 2，包含 component library、Capsule library、dependencies、component history graphs 和 Capsule history graphs。

## 组件 schema 建议

- ID 使用小写 snake_case。
- 项目开始使用后保持 identifier 稳定。
- 代码块引用的 UI element ID 要稳定。
- 检查依赖名称和已安装库。
- 组件专用 helper 代码可放入私有源代码库。
- 添加 AI Profile，帮助 Project AI 理解能力和限制。

## 代码生成说明

生成器会展开 Capsule，检查前置条件，输出 includes、pins、globals、setup、loop、helpers 和组件代码块。`setup()` 会包含 `Serial.begin(9600)`。组件或 Capsule 改动后都建议 Verify。

## 云端维护

云仓库区分组件/Capsule 内容提交和库结构提交。先提交可复用内容，再 push 结构。远端更新需要显式处理，本地受保护草稿可能阻止 pull。

## 已知源码注意点

- 输出硬件配置创建时接收 node ID，但当前没有持久化。
- AI provider key 存在 Application Support JSON，而不是 Keychain。
- face/expression/media 相关模块存在，但当前部分默认组件隐藏或属于遗留能力。
- 上传器缺失 Arduino CLI 的错误文案可能仍提示外部安装方式，尽管 Settings 已提供安装器。

## 相关链接

- [设置与环境变量](/zh/reference/settings-environment/)
- [组件库](/zh/features/component-library/)
- [Capsules](/zh/features/capsules/)
- [云仓库](/zh/cloud/overview/)
