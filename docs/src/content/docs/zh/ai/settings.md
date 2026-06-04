---
title: AI 设置
description: 配置 OpenAI、Claude、Kimi、模型可见性、回复语言、速度和 reasoning effort。
---

## 功能说明

**Setting > Aether AI** 控制 Project AI 和 Library AI 可用的 provider 与模型。

## 支持 provider

源码中包含：

- OpenAI。
- Claude。
- Kimi。

默认 endpoint 已在设置模型中定义；进阶构建可配置自定义模型。

## 操作步骤

1. 打开 **Setting > Aether AI**。
2. 添加 provider API key。
3. 启用需要显示的模型。
4. 选择回复语言。
5. 设置速度和 reasoning effort。
6. 回到 Project AI 或 Library AI 选择模型。

只有启用、已配置 key 且 provider 支持的模型才会出现在选择器中。

## 数据存储

- 云登录 token 存储在 macOS Keychain。
- AI provider key 当前存储在 Application Support 的 JSON 设置文件。
- Project AI 对话保存在 `.aew` 项目中。
- Library AI 对话保存在 Application Support。

## 注意事项

- 把 provider key 当作本地 secret。
- 关闭不用的模型，减少误选。
- 根据团队选择中文或英文回复。
- AI 设置不会自动安装 Arduino 依赖或开发板平台。

## 常见问题

**为什么模型不显示？** 可能未启用、provider 不支持，或没有配置 key。

**可以使用自定义模型名吗？** 设置模型支持自定义模型；使用前要确认 endpoint 兼容。

**AI key 和云 token 一样安全吗？** 云 token 用 Keychain；AI key 当前存在本地设置文件中。

## 相关链接

- [项目 AI](/zh/ai/project-ai/)
- [组件库 AI](/zh/ai/library-ai/)
- [设置与环境变量](/zh/reference/settings-environment/)
