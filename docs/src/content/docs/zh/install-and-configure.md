---
title: 安装与配置
description: 配置 Aether Workshop、Arduino CLI、开发板、依赖、账号、云端设置和 AI provider。
---

## 功能说明

安装与配置决定本地应用是否能上传硬件、使用 AI、登录云端和维护共享组件库。大多数配置入口都在 **Setting** 标签页。

## 支持环境

- macOS SwiftUI 应用。
- 当前 Xcode 配置的最低系统版本为 macOS 14。
- 通过 Arduino CLI 编译和上传兼容开发板。
- AI、云登录、依赖下载和平台安装需要网络。

## 安装应用

如果从源码运行：

1. 打开 `Aether Workshop.xcodeproj`。
2. 选择 **Aether Workshop** scheme。
3. 在 Xcode 中 Build and Run。

如果使用正式包，请使用项目维护者提供的发布版本。当前 bundle identifier 为 `design.chengxin.aether`。

## 安装 Arduino CLI

1. 打开 **Setting > Hardware**。
2. 点击 Arduino CLI 安装入口。
3. 应用会根据当前 CPU 架构下载官方 macOS Arduino CLI。
4. 可执行文件会保存到 `~/Library/Application Support/Aether Workshop/bin/arduino-cli`。
5. 应用会初始化 Arduino CLI 配置，并为 Aether Hub 安装 Arduino AVR 平台。

安装失败时，检查网络、macOS 权限、安全提示和应用日志。

## 选择目标开发板

**Setting > Hardware** 中可选：

- Aether Hub，对应 `arduino:avr:nano`。
- Arduino Uno。
- Arduino Mega 2560。
- ESP-32。
- ESP8266。

开发板选择会影响 FQBN、默认端口映射和编译上传行为。

## 配置依赖

**Setting > Dependence** 管理：

- DHT、Servo、Adafruit NeoPixel 等常见 Arduino 库。
- Aether Workshop 自带的内置支持库。
- 安装到 `~/Documents/Arduino/libraries` 的自定义源代码库。
- 组件私有源代码库。

删除依赖前，需要确认没有组件、草稿或保存的库仍在使用它。

## 配置 AI

1. 打开 **Setting > Aether AI**。
2. 为 OpenAI、Claude 或 Kimi 添加 API key。
3. 启用需要显示的模型。
4. 选择回复语言、速度和 reasoning effort。
5. 保存后回到 Project AI 或 Library AI 使用。

云端 token 存储在 Keychain；AI provider key 当前存储在 Application Support 的设置文件中，请把本机 macOS 账号视为受信环境。

## 登录账号

云仓库、评论、Pin、Change Log 和 History 操作可能需要账号身份。

1. 打开账号或云端入口。
2. 使用 GitHub 或 Google 登录。
3. 浏览器通过 `aether-workshop://auth/...` 回调应用。
4. 应用把云端 token 存入 Keychain。

默认云 API 为 `https://api.chengxin.design`。进阶用户可以用 `cloudAPIBaseURL` user default 覆盖。

## 注意事项

- 不要把 API key、云 token 或私钥提交到项目文件。
- ESP 系列开发板需要安装对应平台。
- 先 Verify 再 Upload，尤其是演示和课堂场景。
- 源码中存在 Privacy 标签页和相机相关代码，但当前 UI 中该标签页隐藏。

## 常见问题

**不配置 AI 可以用吗？** 可以。可视化画布、组件库、代码预览、上传、串口监视器和本地项目都可以手动使用。

**不登录云端可以用吗？** 可以。本地库和 `.aew` 项目可以离线工作。

**生成的 sketch 保存在哪里？** Verify/Upload 使用临时 sketch 目录，保存的项目内容仍在 `.aew` 包内。

## 相关链接

- [设置与环境变量](/zh/reference/settings-environment/)
- [AI 设置](/zh/ai/settings/)
- [云仓库](/zh/cloud/overview/)
- [故障排查](/zh/reference/troubleshooting/)
